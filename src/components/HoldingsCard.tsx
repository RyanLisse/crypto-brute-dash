
import { RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";

interface Holding {
  asset: string;
  amount: string;
  value: string;
}

const holdings: Holding[] = [
  { asset: "BTC", amount: "0.10000", value: "$0.00" },
  { asset: "ETH", amount: "1.00000", value: "$0.00" },
  { asset: "USDT", amount: "5000.00000", value: "$0.00" },
];

interface HoldingsCardProps {
  title: string;
  className?: string;
}

const HoldingsCard = ({ title, className }: HoldingsCardProps) => {
  return (
    <div className={cn("brutal-panel h-full", className)}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold">{title}</h2>
        <div className="flex items-center">
          <span className="text-brutal-info font-bold mr-2">STATIC</span>
          <button className="p-1 hover:bg-brutal-border/50 rounded-none">
            <RefreshCw size={16} />
          </button>
        </div>
      </div>

      <div className="text-2xl font-bold mb-4">$0.00</div>
      
      <div className="grid grid-cols-12 text-sm font-bold text-brutal-text/70 border-b border-brutal-border pb-2 mb-2">
        <div className="col-span-4">Asset</div>
        <div className="col-span-4">Amount</div>
        <div className="col-span-4">Value (USD)</div>
      </div>
      
      <div className="space-y-3">
        {holdings.map((holding) => (
          <div key={holding.asset} className="grid grid-cols-12 text-sm hover:bg-brutal-border p-1">
            <div className="col-span-4 font-bold brutal-info">{holding.asset}</div>
            <div className="col-span-4">{holding.amount}</div>
            <div className="col-span-4">{holding.value}</div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-xs text-brutal-text/60">
        <div>API: Last updated: 15-4-</div>
        <div>Local: 2025, 22:36:41</div>
      </div>
    </div>
  );
};

export default HoldingsCard;
