
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    // Redirect to the Next.js app
    window.location.href = '/';
  }, []);
  
  return <div>Loading...</div>;
}
