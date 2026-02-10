import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppWidget = () => {
  const phoneNumber = "917773010336"; // your number add
  const message = "Hi! I am looking for a wedding car. Can you help me?";

  return (
    /* right-24 use kiya hai taaki ye right corner wale chatbot ke left mein dikhe */
    <div className="fixed bottom-6 right-24 z-[999] group flex items-center">
      
      {/* Tooltip: Ab ye icon ke upar dikhega kyunki side mein chatbot ho sakta hai */}
      <div className="absolute bottom-full mb-3 right-0 bg-[#4A2016] text-white px-4 py-2 rounded-xl text-xs font-medium shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap hidden md:block border border-[#A6715B]/20">
        WhatsApp Chat! 🚗
      </div>

      {/* Main WhatsApp Button */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_10px_25px_rgba(37,211,102,0.4)] hover:scale-110 transition-all duration-300 active:scale-95 relative"
      >
        <MessageCircle size={32} fill="currentColor" />
        
        {/* Status Indicator: Online feel ke liye */}
        <span className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center">
          <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
        </span>
        
        {/* Ping Animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
      </a>
    </div>
  );
};

export default WhatsAppWidget;