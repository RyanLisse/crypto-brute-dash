
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    // Check if we're not already on the Next.js path
    if (window.location.pathname === "/" && window.location.href.indexOf("/src") !== -1) {
      window.location.href = '/';
    }
  }, []);
  
  return <div>Loading...</div>;
}
