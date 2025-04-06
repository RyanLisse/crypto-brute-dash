
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-brutal-background">
      <div className="text-center brutal-panel w-96">
        <h1 className="text-4xl font-bold mb-4">404_ERROR</h1>
        <p className="text-brutal-text/70 mb-4">Resource not found: {location.pathname}</p>
        <a href="/" className="text-brutal-info border border-brutal-border px-4 py-2 inline-block hover:bg-brutal-border">
          &lt;&lt; Return_Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
