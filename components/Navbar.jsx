"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Use this for client-side navigation

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
  const [isClient, setIsClient] = useState(false); // Ensure useRouter is used only on the client side
  const router = useRouter();

  // Use useEffect to set the isClient flag to true after mounting and check if user is logged in
  useEffect(() => {
    setIsClient(true);  // After the component mounts on the client, we can use the router
    setIsLoggedIn(!!localStorage.getItem('token')); // Check for token in localStorage
  }, []);

  // Logout handler
  const handleLogout = () => {
    // Clear the JWT or session data
    localStorage.removeItem('token');
    setIsLoggedIn(false); // Update login status
    router.push('/login'); // Redirect to the login page
  };

  // Don't render the component until it has mounted
  if (!isClient) {
    return null;  // This prevents rendering the component on the server side
  }

  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          SocialMediaApp
        </Link>

        <div className="hidden md:flex space-x-4">
          <Link href="/" className="text-white hover:text-gray-400">Home</Link>
          <Link href="/createPost" className="text-white hover:text-gray-400">Create Post</Link>
          {isLoggedIn ? (
            <button 
              onClick={handleLogout}
              className="text-white hover:text-gray-400">Logout</button>
          ) : (
            <Link href="/login" className="text-white hover:text-gray-400">Login</Link>
          )}
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white focus:outline-none"
          aria-expanded={isMobileMenuOpen ? "true" : "false"}
          aria-controls="mobile-menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-gray-800 text-white p-4 space-y-4">
          <Link href="/" className="block">Home</Link>
          <Link href="/createPost" className="block">Create Post</Link>
          {isLoggedIn ? (
            <button onClick={handleLogout} className="block">Logout</button>
          ) : (
            <Link href="/login" className="block">Login</Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
