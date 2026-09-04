import { useEffect, useState } from "react";
import { MessageCircle, Sparkles, Zap, Shield } from "lucide-react";
import { WHATSAPP_LINK } from "@/data/siteData";

export function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Show tooltip after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (visible) {
        setShowTooltip(true);
        setTimeout(() => setShowTooltip(false), 5000);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [visible]);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {/* Tooltip */}
      <div
        className={`transform transition-all duration-500 ${
          showTooltip && visible
            ? "translate-x-0 opacity-100 scale-100"
            : "translate-x-10 opacity-0 scale-95"
        }`}
      >
        <div className="relative bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-2xl shadow-black/20 border border-white/20">
          {/* Tooltip arrow */}
          <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white/95 rotate-45 border-r border-b border-white/20" />
          
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-500 shadow-lg shadow-green-500/30">
              <Zap className="h-4 w-4 text-white" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-800">Chat with us!</p>
              <p className="text-[10px] text-slate-500">Quick response guaranteed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main WhatsApp Button */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`group relative flex h-16 w-16 items-center justify-center rounded-full shadow-2xl transition-all duration-300 ${
          visible
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-20 opacity-0 scale-75 pointer-events-none"
        } ${
          isHovered
            ? "scale-110 shadow-2xl shadow-green-500/50 rotate-6"
            : "shadow-xl shadow-green-500/40"
        }`}
      >
        {/* Animated gradient background */}
        <div className={`absolute inset-0 rounded-full bg-gradient-to-br from-green-500 via-emerald-500 to-green-600 transition-all duration-500 ${
          isHovered ? "scale-110 blur-sm" : "scale-100"
        }`} />
        
        {/* Main button background */}
        <div className={`absolute inset-0 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 transition-all duration-300 ${
          isHovered ? "scale-[0.98]" : "scale-100"
        }`}>
          {/* Tricolor wave effect - Indian flag colors */}
          <div className="absolute inset-0 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 via-white/30 to-green-500/30 animate-pulse" />
          </div>
        </div>

        {/* Multiple pulse rings */}
        <span className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 opacity-60 animate-ping" style={{ animationDuration: "2s" }} />
        <span className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 opacity-30 animate-ping" style={{ animationDuration: "2.5s", animationDelay: "0.5s" }} />
        <span className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 opacity-20 animate-ping" style={{ animationDuration: "3s", animationDelay: "1s" }} />
        
        {/* Glow ring */}
        <div className={`absolute -inset-2 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 opacity-0 blur-2xl transition-all duration-500 ${
          isHovered ? "opacity-40 scale-110" : "opacity-0"
        }`} />

        {/* Icon container with sparkle effect */}
        <div className="relative flex items-center justify-center">
          <MessageCircle className={`h-7 w-7 text-white transition-all duration-300 ${
            isHovered ? "scale-110 rotate-12" : "scale-100"
          }`} />
          
          {/* Sparkle on hover */}
          <Sparkles className={`absolute -top-3 -right-3 h-4 w-4 text-yellow-400 transition-all duration-500 ${
            isHovered ? "opacity-100 scale-100 rotate-180" : "opacity-0 scale-50"
          }`} />
        </div>

        {/* Status indicator */}
        <div className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-white shadow-lg ring-2 ring-green-500">
          <div className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse" />
        </div>

        {/* Badge counter - shows online status */}
        <div className={`absolute -bottom-1 -left-1 rounded-full bg-emerald-500 px-1.5 py-0.5 text-[8px] font-bold text-white shadow-lg transition-all duration-300 ${
          isHovered ? "scale-110" : "scale-100"
        }`}>
          ● Online
        </div>

        {/* Hover label */}
        <div className={`absolute -top-12 right-0 transform transition-all duration-300 ${
          isHovered && visible
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-2 opacity-0 scale-95"
        }`}>
          <div className="bg-slate-900/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap">
            <span className="text-xs font-semibold text-white">Chat with us</span>
            <div className="absolute -bottom-1.5 right-5 w-3 h-3 bg-slate-900/90 rotate-45" />
          </div>
        </div>
      </a>
    </div>
  );
}