"use client";
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function CreatePost() {
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleCreatePost = async () => {
    if (!text.trim()) {
      setError('Post content cannot be empty');
      return;
    }

    const token = localStorage.getItem('token');
    if (!token) {
      setError('You must be logged in');
      return;
    }

    setError(''); // Reset error on new attempt
    setLoading(true);

    try {
      const response = await axios.post(
        'https://arbazmurme.onrender.com/api/posts',
        { text },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      router.push('/'); // Redirect to home page after creating post
    } catch (err) {
      setError('Error creating post');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Create Post</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your post here..."
        className="w-full p-4 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none mb-4 text-gray-700 leading-relaxed"
        rows="6"
      />
      {error && <p className="text-red-600 text-center mb-4">{error}</p>}
      <div className="flex justify-center">
        <button
          onClick={handleCreatePost}
          className={`w-full sm:w-auto py-2 px-6 rounded-lg font-semibold transition-all duration-200 
            ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'}`}
          disabled={loading}
        >
          {loading ? (
            <span>Loading...</span>
          ) : (
            <span>New Post</span>
          )}
        </button>
      </div>
    </div>
  );
}
