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
      router.push('/'); // Redirect to home page
    } catch (err) {
      setError('Error during login');
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <AuthForm type="login" onSubmit={handleLogin} />
    </div>
  );
}
