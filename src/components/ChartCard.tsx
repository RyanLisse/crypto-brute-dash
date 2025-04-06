
import { useState } from "react";
import { cn } from "@/lib/utils";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

// Mock data for the chart
const chartData = {
  "1D": [
    { time: "00:00", value: 25100 },
    { time: "04:00", value: 25400 },
    { time: "08:00", value: 25200 },
    { time: "12:00", value: 25600 },
    { time: "16:00", value: 26100 },
    { time: "20:00", value: 27000 },
    { time: "24:00", value: 27432 },
  ],
  "1W": [
    { time: "Mon", value: 24100 },
    { time: "Tue", value: 23800 },
    { time: "Wed", value: 25200 },
    { time: "Thu", value: 25900 },
    { time: "Fri", value: 26400 },
    { time: "Sat", value: 26800 },
    { time: "Sun", value: 27432 },
  ],
  "1M": [
    { time: "Week 1", value: 21500 },
    { time: "Week 2", value: 22800 },
    { time: "Week 3", value: 24200 },
    { time: "Week 4", value: 27432 },
  ],
  "3M": [
    { time: "Jan", value: 19000 },
    { time: "Feb", value: 22500 },
    { time: "Mar", value: 27432 },
  ],
};

type TimeRange = "1D" | "1W" | "1M" | "3M";

interface ChartCardProps {
  title: string;
  className?: string;
}

const ChartCard = ({ title, className }: ChartCardProps) => {
  const [activeRange, setActiveRange] = useState<TimeRange>("1D");
  
  const timeRanges: TimeRange[] = ["1D", "1W", "1M", "3M"];
  
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="brutal-panel border border-brutal-border p-2">
          <p className="label text-xs">{`${label}`}</p>
          <p className="text-sm font-bold brutal-positive">${payload[0].value.toLocaleString()}</p>
        </div>
      );
    }
  
    return null;
  };

  return (
    <div className={cn("brutal-panel", className)}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold">{title}</h2>
        <div className="flex border border-brutal-border">
          {timeRanges.map((range) => (
            <button
              key={range}
              className={cn(
                "px-3 py-1 text-xs font-bold",
                activeRange === range 
                  ? "bg-brutal-border text-brutal-text" 
                  : "text-brutal-text/70 hover:bg-brutal-border"
              )}
              onClick={() => setActiveRange(range)}
            >
              {range}
            </button>
          ))}
        </div>
      </div>
      
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData[activeRange]}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3a86ff" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#3a86ff" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="time" 
              tick={{ fill: '#f7f7f7', fontSize: 12 }} 
              axisLine={{ stroke: '#333333' }}
              tickLine={{ stroke: '#333333' }}
            />
            <YAxis 
              domain={['dataMin - 500', 'dataMax + 500']}
              tick={{ fill: '#f7f7f7', fontSize: 12 }}
              axisLine={{ stroke: '#333333' }}
              tickLine={{ stroke: '#333333' }}
              tickFormatter={(value) => `$${value.toLocaleString()}`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke="#3a86ff" 
              fillOpacity={1}
              fill="url(#colorValue)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartCard;
