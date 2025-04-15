
import { ArrowDown, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string;
  change?: string;
  prefix?: string;
  suffix?: string;
}

const StatCard = ({ title, value, change, prefix, suffix }: StatCardProps) => {
  const isPositive = change ? !change.startsWith("-") : null;
  
  return (
    <div className="brutal-panel">
      <p className="text-brutal-text/70 text-sm mb-2 font-mono uppercase">{title}</p>
      <div className="text-2xl font-bold mb-1">
        {prefix && <span>{prefix}</span>}
        {value}
        {suffix && <span>{suffix}</span>}
      </div>
      
      {change && (
        <div className={cn(
          "flex items-center text-sm",
          isPositive ? "brutal-positive" : "brutal-negative"
        )}>
          {isPositive ? (
            <ArrowUp size={14} />
          ) : (
            <ArrowDown size={14} />
          )}
          <span>{change}</span>
        </div>
      )}
    </div>
  );
};

export default StatCard;
