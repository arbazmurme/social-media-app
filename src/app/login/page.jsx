"use client"
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import AuthForm from '../../../components/AuthForm';

export default function Login() {
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (userData) => {
    try {
      // Use hosted API URL
      const response = await axios.post('https://arbazmurme.onrender.com/api/auth/login', userData);
      localStorage.setItem('token', response.data.token); // Store the token in localStorage
      router.push('/');
    } catch (err) {
      setError('Error during login');
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <AuthForm type="login" onSubmit={handleLogin} />
      <div className="mt-4 text-center">
        <p className="text-gray-600">Don't have an account?</p>
        <button
          onClick={() => router.push('/register')}
          className="mt-2 px-10 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none"
        >
          Register
        </button>
      </div>
    </div>
  );
}
