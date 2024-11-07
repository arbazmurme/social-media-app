"use client";
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import AuthForm from '../../../components/AuthForm';

export default function Register() {
  const [error, setError] = useState('');
  const router = useRouter();

  const handleRegister = async (userData) => {
    try {
      const response = await axios.post('https://arbazmurme.onrender.com/api/auth/register', userData);
      localStorage.setItem('token', response.data.token); // Store token in localStorage
      router.push('/'); // Redirect to home page
    } catch (err) {
      setError('Error during registration');
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Register</h1>
      {error && (
        <p className="mb-4 text-center text-red-600 font-semibold">{error}</p>
      )}
      <AuthForm type="register" onSubmit={handleRegister} />
    </div>
  );
}
