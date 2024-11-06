import { useRouter } from 'next/router';

const Logout = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('token'); // If you're storing the token in localStorage
    router.push('/login');
  };

  return (
    <button onClick={handleLogout} className="btn btn-danger">
      Logout
    </button>
  );
};

export default Logout;
