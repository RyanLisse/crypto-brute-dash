
import { Calendar, Clock, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface UpcomingCoin {
  symbol: string;
  name: string;
  type: string;
  date: string;
  time: string;
  exchange: string;
}

const upcomingCoins: UpcomingCoin[] = [
  { 
    symbol: "PEPE2", 
    name: "Pepe Coin V2", 
    type: "Token Launch", 
    date: "2025-04-15", 
    time: "14:00 UTC", 
    exchange: "Binance" 
  },
  { 
    symbol: "DOGE20", 
    name: "Doge 2.0", 
    type: "Mainnet", 
    date: "2025-04-18", 
    time: "16:00 UTC", 
    exchange: "Multiple" 
  },
  { 
    symbol: "PIXEL", 
    name: "PixelVerse", 
    type: "IDO", 
    date: "2025-04-22", 
    time: "12:00 UTC", 
    exchange: "PancakeSwap" 
  },
  { 
    symbol: "META", 
    name: "MetaChain", 
    type: "Hard Fork", 
    date: "2025-04-24", 
    time: "00:00 UTC", 
    exchange: "All" 
  },
  { 
    symbol: "LUNA2", 
    name: "Terra Luna 2.0", 
    type: "Token Launch", 
    date: "2025-04-30", 
    time: "18:00 UTC", 
    exchange: "OKX" 
  },
];

interface UpcomingCoinsCardProps {
  title: string;
  className?: string;
}

const UpcomingCoinsCard = ({ title, className }: UpcomingCoinsCardProps) => {
  return (
    <div className={cn("brutal-panel", className)}>
      <h2 className="text-lg font-bold mb-4">{title}</h2>
      
      <div className="grid grid-cols-12 text-sm font-bold text-brutal-text/70 border-b border-brutal-border pb-2 mb-2">
        <div className="col-span-2">SYMBOL</div>
        <div className="col-span-3">NAME</div>
        <div className="col-span-2">TYPE</div>
        <div className="col-span-2">DATE</div>
        <div className="col-span-2">TIME</div>
        <div className="col-span-1 text-right">INFO</div>
      </div>
      
      <div className="space-y-3">
        {upcomingCoins.map((coin) => (
          <div key={coin.symbol} className="grid grid-cols-12 text-sm hover:bg-brutal-border p-1">
            <div className="col-span-2 font-bold brutal-info">{coin.symbol}</div>
            <div className="col-span-3">{coin.name}</div>
            <div className="col-span-2">{coin.type}</div>
            <div className="col-span-2 flex items-center">
              <Calendar size={14} className="mr-1 text-brutal-text/60" />
              {new Date(coin.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
            </div>
            <div className="col-span-2 flex items-center">
              <Clock size={14} className="mr-1 text-brutal-text/60" />
              {coin.time}
            </div>
            <div className="col-span-1 text-right">
              <button className="p-1 hover:bg-brutal-border/50 rounded-none">
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingCoinsCard;
