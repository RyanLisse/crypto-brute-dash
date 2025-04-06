
import { cn } from "@/lib/utils";

type StatusType = "connected" | "disconnected" | "syncing" | "error";

interface StatusIndicatorProps {
  status: StatusType;
  className?: string;
}

const StatusIndicator = ({ status, className }: StatusIndicatorProps) => {
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

  const getStatusText = () => {
    switch (status) {
      case "connected":
        return "CONNECTED";
      case "disconnected":
        return "DISCONNECTED";
      case "syncing":
        return "SYNCING";
      case "error":
        return "ERROR";
      default:
        return "UNKNOWN";
    }
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className={cn("w-2 h-2 rounded-full animate-blink", getStatusColor())} />
      <span className="text-xs font-bold uppercase">{getStatusText()}</span>
    </div>
  );
};

export default StatusIndicator;
