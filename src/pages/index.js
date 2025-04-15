
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function IndexPage() {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/app/page');
  }, [router]);
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="text-center">
        <h1 className="text-xl font-bold">BRUTE / DASH</h1>
        <p className="text-brutal-info animate-blink mt-2">REDIRECTING...</p>
      </div>
    </div>
  );
}
