
"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";
import StatusIndicator from "@/components/StatusIndicator";
import StatCard from "@/components/StatCard";
import ChartCard from "@/components/ChartCard";
import UpcomingCoinsCard from "@/components/UpcomingCoinsCard";
import ChatInterface from "@/components/ChatInterface";
import { useEffect, useState } from "react";

export default function Home() {
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
    <div className="min-h-screen bg-brutal-background font-mono">
      <SidebarProvider defaultOpen={true}>
        <div className="flex min-h-screen w-full">
          <AppSidebar />
          
          <div className="flex-1 p-0">
            {/* Header */}
            <header className="h-16 border-b border-brutal-border flex items-center justify-between px-4">
              <div className="flex items-center gap-3">
                <StatusIndicator status="connected" />
              </div>
              
              <div className="flex items-center gap-4">
                <div className="text-brutal-text/70 text-sm">
                  <span className="font-bold mr-2">{formattedDate}</span>
                  <span>{formattedTime}</span>
                </div>
              </div>
            </header>

            {/* Main Content */}
            <main className="p-4">
              <h1 className="text-2xl font-bold mb-6 tracking-tight">DASHBOARD / OVERVIEW</h1>
              
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <StatCard 
                  title="Portfolio Value" 
                  value="27,432.85" 
                  change="+5.2%" 
                  prefix="$" 
                />
                <StatCard 
                  title="Active Trades" 
                  value="8" 
                />
                <StatCard 
                  title="Win Rate" 
                  value="68.5" 
                  suffix="%" 
                />
                <StatCard 
                  title="Avg Profit/Trade" 
                  value="124.50" 
                  prefix="$" 
                />
              </div>
              
              {/* Portfolio Chart */}
              <div className="mb-6">
                <ChartCard title="Portfolio Performance" />
              </div>
              
              {/* Upcoming Coins */}
              <div>
                <UpcomingCoinsCard title="Upcoming Coins" />
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
