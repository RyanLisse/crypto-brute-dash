
import { ArrowDown, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface Holding {
  symbol: string;
  name: string;
  value: number;
  amount: number;
  change: string;
}

const holdings: Holding[] = [
  { symbol: "BTC", name: "Bitcoin", value: 15238.42, amount: 0.382, change: "+4.2%" },
  { symbol: "ETH", name: "Ethereum", value: 6821.34, amount: 2.841, change: "+6.7%" },
  { symbol: "BNB", name: "Binance Coin", value: 2342.78, amount: 8.453, change: "-1.3%" },
  { symbol: "SOL", name: "Solana", value: 1893.45, amount: 24.621, change: "+12.8%" },
  { symbol: "ADA", name: "Cardano", value: 1136.86, amount: 2451.35, change: "-0.8%" },
];

interface HoldingsCardProps {
  title: string;
  className?: string;
}

const HoldingsCard = ({ title, className }: HoldingsCardProps) => {
  return (
    <div className={cn("brutal-panel", className)}>
      <h2 className="text-lg font-bold mb-4">{title}</h2>
      
      <div className="grid grid-cols-12 text-sm font-bold text-brutal-text/70 border-b border-brutal-border pb-2 mb-2">
        <div className="col-span-2">ASSET</div>
        <div className="col-span-3">NAME</div>
        <div className="col-span-3 text-right">HOLDINGS</div>
        <div className="col-span-2 text-right">VALUE</div>
        <div className="col-span-2 text-right">CHANGE</div>
      </div>
      
      <div className="space-y-3">
        {holdings.map((holding) => (
          <div key={holding.symbol} className="grid grid-cols-12 text-sm hover:bg-brutal-border p-1">
            <div className="col-span-2 font-bold">{holding.symbol}</div>
            <div className="col-span-3">{holding.name}</div>
            <div className="col-span-3 text-right text-brutal-text/90">
              {holding.amount.toLocaleString()} {holding.symbol}
            </div>
            <div className="col-span-2 text-right font-mono">
              ${holding.value.toLocaleString()}
            </div>
            <div className={cn(
              "col-span-2 text-right flex items-center justify-end",
              holding.change.startsWith("+") ? "brutal-positive" : "brutal-negative"
            )}>
              {holding.change.startsWith("+") ? (
                <ArrowUp size={14} className="mr-1" />
              ) : (
                <ArrowDown size={14} className="mr-1" />
              )}
              {holding.change}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HoldingsCard;
