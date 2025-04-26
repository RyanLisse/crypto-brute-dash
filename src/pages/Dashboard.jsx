
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";
import StatusIndicator from "@/components/StatusIndicator";
import StatCard from "@/components/StatCard";
import ChartCard from "@/components/ChartCard";
import UpcomingCoinsCard from "@/components/UpcomingCoinsCard";
import ChatInterface from "@/components/ChatInterface";
import HoldingsCard from "@/components/HoldingsCard";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString('en-US', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  const formattedDate = currentTime.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });

  return (
    <div className="min-h-screen bg-black font-mono text-white">
      <SidebarProvider defaultOpen={true}>
        <div className="flex min-h-screen w-full">
          <AppSidebar />
          
          <div className="flex-1 p-0">
            {/* Header */}
            <header className="h-16 border-b border-brutal-border flex items-center justify-between px-4">
              <div className="flex items-center gap-3">
                <div className="text-sm font-bold tracking-tight uppercase">DASHBOARD / OVERVIEW</div>
              </div>
              
              <div className="flex items-center gap-4">
                <StatusIndicator status="connected" label="BACKEND" />
                <StatusIndicator status="error" label="OFFLINE" />
                <div className="text-brutal-text/70 text-sm">
                  {formattedDate.replace(/\//g, '/')} {formattedTime}
                </div>
              </div>
            </header>

            {/* Main Content */}
            <main className="p-4">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <StatCard 
                  title="PORTFOLIO VALUE" 
                  value="10,000.00" 
                  change="+0.6%" 
                  prefix="$" 
                />
                <StatCard 
                  title="ACTIVE TRADES" 
                  value="0" 
                />
                <StatCard 
                  title="WIN RATE" 
                  value="0.0" 
                  suffix="%" 
                />
                <StatCard 
                  title="AVG PROFIT/TRADE" 
                  value="0.00" 
                  prefix="$" 
                />
              </div>
              
              {/* Middle Section */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
                {/* Portfolio Chart */}
                <div className="lg:col-span-2">
                  <ChartCard title="PORTFOLIO PERFORMANCE" />
                </div>
                
                {/* Account Balance */}
                <div>
                  <HoldingsCard title="ACCOUNT BALANCE" />
                </div>
              </div>
              
              {/* Upcoming Coins */}
              <div>
                <UpcomingCoinsCard title="UPCOMING COINS (TODAY & TOMORROW)" />
              </div>
            </main>
          </div>
        </div>
        
        {/* Chat Interface */}
        <ChatInterface />
      </SidebarProvider>
    </div>
  );
}
