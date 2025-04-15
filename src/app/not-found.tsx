
"use client";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-brutal-background">
      <div className="text-center brutal-panel w-96">
        <h1 className="text-4xl font-bold mb-4">404_ERROR</h1>
        <p className="text-brutal-text/70 mb-4">Resource not found</p>
        <a href="/" className="text-brutal-info border border-brutal-border px-4 py-2 inline-block hover:bg-brutal-border">
          &lt;&lt; Return_Home
        </a>
      </div>
    </div>
  );
}
