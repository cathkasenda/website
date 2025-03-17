
import { useState, useRef, useEffect } from "react";
import { Send, ChevronDown, X, MessageSquare, Search } from "lucide-react";
import PixelButton from "./PixelButton";
import { useIsMobile } from "@/hooks/use-mobile";
import { processQuery } from "@/utils/chatData";

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface AIChatProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const AIChat = ({ isOpen, setIsOpen }: AIChatProps) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hi there! I'm Cathleen's AI assistant. Ask me anything about her background, experience, skills, or projects!",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (message.trim() === "") return;
    
    // Add user message
    const userMessage: Message = {
      text: message,
      isUser: true,
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    
    // Process the query and get a response
    const response = processQuery(message);
    
    // Add AI response with a slight delay to simulate thinking
    setTimeout(() => {
      const aiMessage: Message = {
        text: response,
        isUser: false,
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, aiMessage]);
    }, 600);
    
    // Clear the input
    setMessage("");
  };

  return (
    <>
      {/* Chat Button (when closed) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className={`fixed ${
            isMobile ? "bottom-6 right-6 z-40" : "bottom-6 right-6 z-40"
          } pixel-btn py-3 px-4 bg-primary text-pixel-softBlack dark:text-pixel-softWhite font-pixel animate-pixel-pulse`}
          aria-label="Open chat"
        >
          <span className="flex items-center">
            <MessageSquare className="w-5 h-5 mr-2" />
            Chat with me
          </span>
        </button>
      )}
      
      {/* Chat Window (when open) */}
      <div
        id="chat"
        className={`fixed bottom-0 z-50 transition-all duration-300 ${
          isOpen 
            ? "right-0 w-full sm:w-[450px] md:w-[550px] h-[600px] sm:h-[70vh]" 
            : "right-0 translate-y-full"
        }`}
      >
        {/* Chat Header */}
        <div className="bg-pixel-mint dark:bg-pixel-navy p-3 flex justify-between items-center border-t-2 border-l-2 border-r-2 border-pixel-softBlack dark:border-pixel-softWhite shadow-[4px_4px_0px_0px] shadow-pixel-softBlack dark:shadow-pixel-softWhite">
          <h3 className="font-pixel text-sm text-pixel-softBlack dark:text-pixel-softWhite">
            Chat with Cathleen
          </h3>
          <div className="flex space-x-2">
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 bg-pixel-softWhite dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
              aria-label="Minimize chat"
            >
              <ChevronDown className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 bg-pixel-softWhite dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
              aria-label="Close chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        {/* Chat Messages */}
        <div className="bg-pixel-softWhite dark:bg-gray-800 flex-grow overflow-y-auto p-4 border-l-2 border-r-2 border-pixel-softBlack dark:border-pixel-softWhite" style={{height: "calc(100% - 120px)"}}>
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-4 ${
                msg.isUser ? "text-right" : "text-left"
              }`}
            >
              <div
                className={`inline-block px-4 py-2 rounded-lg ${
                  msg.isUser
                    ? "bg-primary text-pixel-softBlack"
                    : "bg-gray-200 dark:bg-gray-700 text-pixel-softBlack dark:text-pixel-softWhite"
                }`}
              >
                <p className="text-sm font-mono">{msg.text}</p>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                {msg.timestamp.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        
        {/* Chat Input */}
        <form
          onSubmit={handleSendMessage}
          className="flex border-2 border-t-0 border-pixel-softBlack dark:border-pixel-softWhite shadow-[4px_4px_0px_0px] shadow-pixel-softBlack dark:shadow-pixel-softWhite bg-pixel-softWhite dark:bg-gray-800"
        >
          <div className="flex-grow flex items-center p-3">
            <Search className="w-5 h-5 mr-2 text-gray-400" />
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask me anything about Cathleen..."
              className="w-full bg-transparent outline-none font-mono"
            />
          </div>
          <button
            type="submit"
            className="p-3 bg-primary text-pixel-softBlack dark:text-pixel-softWhite"
            aria-label="Send message"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </>
  );
};

export default AIChat;
