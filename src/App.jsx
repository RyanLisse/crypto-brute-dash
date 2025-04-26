
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function App() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the dashboard page
    navigate('/dashboard');
  }, [navigate]);
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="text-center">
        <h1 className="text-xl font-bold">BRUTE / DASH</h1>
        <p className="text-brutal-info animate-blink mt-2">LOADING...</p>
      </div>
    </div>
  );
}
