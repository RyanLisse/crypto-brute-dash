
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function App() {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if we're not already on the Next.js path
    // Then simply navigate to the home page directly instead of window.location change
    if (window.location.pathname === "/") {
      // Use react-router navigation which doesn't cause a full page reload
      navigate('/');
    }
  }, [navigate]);
  
  // Return the actual UI instead of just Loading text
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="text-center">
        <h1 className="text-xl font-bold">BRUTE / DASH</h1>
        <p className="text-brutal-info animate-blink mt-2">LOADING...</p>
      </div>
    </div>
  );
}
