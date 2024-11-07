"use client";
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import AuthForm from '../../../components/AuthForm';
import Link from 'next/link';

export default function Register() {
  const [error, setError] = useState('');
  const router = useRouter();
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleRegister = async () => {
    try {
      const response = await axios.post('https://arbazmurme.onrender.com/api/auth/register', userData);
      localStorage.setItem('token', response.data.token); // Store token in localStorage
      router.push('/'); // Redirect to home page
    } catch (err) {
      setError('Error during registration');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Register</h1>
      {error && (
        <p className="mb-4 text-center text-red-600 font-semibold">{error}</p>
      )}
      <form onSubmit={(e) => { e.preventDefault(); handleRegister(); }}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={userData.username}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
        >
          Register
        </button>
      </form>
      <button
        onClick={() => router.push('/login')}
        className="mt-2 px-10 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none"
      >
        Register
      </button>
    </div>
  );
}
