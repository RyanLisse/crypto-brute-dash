
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface UpcomingCoin {
  symbol: string;
  name: string;
  release: string;
  potential: number;
  forecast: string;
}

const upcomingCoins: UpcomingCoin[] = [
  { 
    symbol: "META", 
    name: "MetaChain", 
    release: "Apr 15", 
    potential: 5, 
    forecast: "+12.2%" 
  },
  { 
    symbol: "QNT", 
    name: "QuantumNet", 
    release: "Apr 18", 
    potential: 4, 
    forecast: "+9.7%" 
  },
  { 
    symbol: "AIX", 
    name: "AI Exchange", 
    release: "Apr 21", 
    potential: 3, 
    forecast: "+7.5%" 
  },
  { 
    symbol: "DFX", 
    name: "DeFi X", 
    release: "Apr 24", 
    potential: 2, 
    forecast: "-2.1%" 
  },
  { 
    symbol: "WEB4", 
    name: "Web4Token", 
    release: "Apr 29", 
    potential: 4, 
    forecast: "+8.3%" 
  },
];

interface UpcomingCoinsCardProps {
  title: string;
  className?: string;
}

const UpcomingCoinsCard = ({ title, className }: UpcomingCoinsCardProps) => {
  const renderStars = (count: number) => {
    return Array(5).fill(0).map((_, index) => (
      <Star 
        key={index} 
        size={14} 
        className={cn(
          index < count ? "text-brutal-warning fill-brutal-warning" : "text-brutal-border"
        )} 
      />
    ));
  };

  return (
    <div className={cn("brutal-panel", className)}>
      <h2 className="text-lg font-bold mb-4">{title}</h2>
      
      <div className="grid grid-cols-12 text-sm font-bold text-brutal-text/70 border-b border-brutal-border pb-2 mb-2">
        <div className="col-span-2">SYMBOL</div>
        <div className="col-span-3">NAME</div>
        <div className="col-span-2">RELEASE</div>
        <div className="col-span-3">POTENTIAL</div>
        <div className="col-span-2">FORECAST</div>
      </div>
      
      <div className="space-y-3">
        {upcomingCoins.map((coin) => (
          <div key={coin.symbol} className="grid grid-cols-12 text-sm hover:bg-brutal-border p-1">
            <div className="col-span-2 font-bold brutal-info">{coin.symbol}</div>
            <div className="col-span-3">{coin.name}</div>
            <div className="col-span-2">{coin.release}</div>
            <div className="col-span-3 flex items-center gap-1">
              {renderStars(coin.potential)}
            </div>
            <div className={cn(
              "col-span-2 font-bold",
              coin.forecast.startsWith("+") ? "text-brutal-positive" : "text-brutal-negative"
            )}>
              {coin.forecast}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingCoinsCard;
