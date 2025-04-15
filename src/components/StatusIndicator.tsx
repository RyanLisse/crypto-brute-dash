
import { cn } from "@/lib/utils";

type StatusType = "connected" | "disconnected" | "syncing" | "error";

interface StatusIndicatorProps {
  status: StatusType;
  className?: string;
  label?: string;
}

const StatusIndicator = ({ status, className, label }: StatusIndicatorProps) => {
  const getStatusColor = () => {
    switch (status) {
      case "connected":
        return "bg-brutal-positive";
      case "disconnected":
        return "bg-brutal-negative";
      case "syncing":
        return "bg-brutal-warning";
      case "error":
        return "bg-brutal-negative";
      default:
        return "bg-brutal-muted";
    }
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className={cn("w-2 h-2 rounded-full animate-blink", getStatusColor())} />
      {label && <span className="text-xs font-bold uppercase">{label}</span>}
    </div>
  );
};

export default StatusIndicator;
