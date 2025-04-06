
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageSquare, Send, X, Maximize2, Minimize2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  content: string;
  sender: "user" | "ai";
  timestamp: Date;
}

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: "Hello! I'm your crypto assistant. How can I help you today?",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isMinimized, setIsMinimized] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom whenever messages update
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const newUserMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setInputValue("");

    // Simulate AI response
    setTimeout(() => {
      const aiResponses = [
        "I'm analyzing the market conditions now...",
        "Based on current trends, BTC might see some resistance at $65K.",
        "Your portfolio is up 5.2% this week, outperforming the market.",
        "I recommend monitoring SOL closely this week due to upcoming protocol changes.",
        "The trading bot has executed 8 trades in the last 24 hours with 6 profitable outcomes.",
      ];
      
      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      
      const newAiMessage: Message = {
        id: Date.now().toString(),
        content: randomResponse,
        sender: "ai",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, newAiMessage]);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <>
      {/* Floating chat button */}
      <div className="fixed bottom-4 right-4 z-50">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button 
              className="h-12 w-12 rounded-full bg-brutal-info text-brutal-text shadow-md"
              onClick={() => setIsOpen(true)}
            >
              <MessageSquare className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent 
            side="bottom" 
            className={cn(
              "mx-4 mb-4 mr-4 w-96 rounded-t-md border border-brutal-border bg-brutal-panel p-0 shadow-xl",
              "left-auto right-4"
            )}
          >
            <div className="flex h-full max-h-[500px] flex-col">
              {/* Chat header */}
              <div className="flex items-center justify-between border-b border-brutal-border bg-brutal-panel p-3">
                <h3 className="text-sm font-bold">CRYPTO ASSISTANT</h3>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="icon" onClick={toggleMinimize} className="h-6 w-6">
                    {isMinimized ? <Maximize2 size={14} /> : <Minimize2 size={14} />}
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-6 w-6">
                    <X size={14} />
                  </Button>
                </div>
              </div>

              {/* Chat messages */}
              {!isMinimized && (
                <ScrollArea className="flex-1 p-3">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={cn(
                          "flex max-w-[80%] flex-col rounded-md p-2 text-sm",
                          message.sender === "user"
                            ? "ml-auto bg-brutal-info/20 text-brutal-text"
                            : "bg-brutal-border/40 text-brutal-text"
                        )}
                      >
                        <span>{message.content}</span>
                        <span className="mt-1 text-right text-xs text-brutal-text/50">
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                    ))}
                    <div ref={messagesEndRef} />
                  </div>
                </ScrollArea>
              )}

              {/* Chat input */}
              {!isMinimized && (
                <div className="border-t border-brutal-border p-3">
                  <div className="flex items-center space-x-2">
                    <Textarea
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Type your message..."
                      className="h-10 min-h-[40px] resize-none bg-brutal-background"
                    />
                    <Button 
                      onClick={handleSendMessage} 
                      size="icon"
                      disabled={!inputValue.trim()}
                      className="h-10 w-10 bg-brutal-info text-brutal-text"
                    >
                      <Send size={16} />
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default ChatInterface;
