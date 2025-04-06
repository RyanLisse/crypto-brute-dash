
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  useSidebar
} from "@/components/ui/sidebar";
import { BarChart2, Home, LayoutDashboard, Cog, TrendingUp, CircleDot } from "lucide-react";

interface SidebarIconProps {
  icon: ReactNode;
  label: string;
  isActive?: boolean;
}

const SidebarIcon = ({ icon, label, isActive = false }: SidebarIconProps) => (
  <div className={cn(
    "flex items-center gap-3",
    isActive && "brutal-info font-bold"
  )}>
    <div className="w-5 h-5">
      {icon}
    </div>
    <span>{label}</span>
  </div>
);

const AppSidebar = () => {
  const isMobile = useIsMobile();
  const { state } = useSidebar();

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: <LayoutDashboard size={20} />, isActive: true },
    { id: "portfolio", label: "Portfolio", icon: <BarChart2 size={20} /> },
    { id: "trading", label: "Trading", icon: <TrendingUp size={20} /> },
    { id: "new-coins", label: "New Coins", icon: <CircleDot size={20} /> },
    { id: "status", label: "System Status", icon: <Home size={20} /> },
    { id: "config", label: "Bot Config", icon: <Cog size={20} /> }
  ];

  return (
    <>
      {/* Burger menu for mobile */}
      {isMobile && (
        <div className="fixed top-4 left-4 z-50">
          <SidebarTrigger className="bg-brutal-panel border border-brutal-border p-2 rounded-none" />
        </div>
      )}
      
      {/* Sidebar */}
      <Sidebar className="border-r border-brutal-border bg-brutal-panel">
        <SidebarHeader className="h-16 border-b border-brutal-border flex items-center justify-between px-4">
          <h1 className="text-brutal-text text-lg font-bold">BRUTE / DASH</h1>
          {!isMobile && (
            <SidebarTrigger className="p-1 border border-brutal-border" />
          )}
        </SidebarHeader>
        
        <SidebarContent className="p-0">
          <SidebarMenu className="space-y-1 p-4">
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.id}>
                <SidebarMenuButton asChild tooltip={state === "collapsed" ? item.label : undefined}>
                  <button 
                    className={cn(
                      "w-full text-left hover:bg-brutal-border p-2 rounded-none border border-transparent hover:border-brutal-border transition-colors",
                      item.isActive && "bg-brutal-border"
                    )}
                  >
                    <SidebarIcon icon={item.icon} label={item.label} isActive={item.isActive} />
                  </button>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
    </>
  );
};

export default AppSidebar;
