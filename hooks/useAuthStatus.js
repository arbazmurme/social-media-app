// hooks/useAuthStatus.js

import { useState, useEffect } from 'react';

export function useAuthStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkAuthStatus = () => {
    setIsLoggedIn(!!localStorage.getItem('token'));
  };

  useEffect(() => {
    checkAuthStatus(); // Check on initial mount

    // Update state when localStorage changes
    const handleStorageChange = () => checkAuthStatus();

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return { isLoggedIn, checkAuthStatus };
}
