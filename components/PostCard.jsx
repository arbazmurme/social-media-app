// components/PostCard.js
"use client"
import React from 'react';

const PostCard = ({ post }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mb-4 w-full max-w-md mx-auto">
      <div className="flex items-center mb-3">
        <div className="bg-gray-300 rounded-full w-10 h-10 mr-3"></div>
        <div>
          <h2 className="font-semibold text-lg">{post.author}</h2>
          <p className="text-gray-500 text-sm">{new Date(post.createdAt).toLocaleDateString()}</p>
        </div>
      </div>
      <p className="text-gray-700 text-base">{post.text}</p>
    </div>
  );
};

export default PostCard;
