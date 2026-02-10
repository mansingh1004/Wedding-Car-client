import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send } from "lucide-react";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Welcome to Royal Wedding Cars! 👑 How can I help you make your entrance grand?" }
  ]);
  
  const scrollRef = useRef(null);

  // Auto scroll to bottom when new message arrives
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    const lowerInput = input.toLowerCase();

    // Wedding Car specific logic
    let botReply = "I'm not sure about that. Would you like to speak with our wedding coordinator? 📞";

    if (lowerInput.includes("hello") || lowerInput.includes("hi")) {
      botReply = "Hello! 😊 Looking for a luxury car for your special day?";
    } 
    else if (lowerInput.includes("car") || lowerInput.includes("fleet") || lowerInput.includes("type")) {
      botReply = "We have Rolls Royce, Vintage Bentleys, and Audi Q7s. Which one fits your style? 🚗";
    } 
    else if (lowerInput.includes("price") || lowerInput.includes("cost") || lowerInput.includes("rent")) {
      botReply = "Our packages start from ₹10,000/day. Prices vary by car model and hours. 💰";
    } 
    else if (lowerInput.includes("decor")) {
      botReply = "Yes! All our wedding cars include premium floral decoration as part of the package. 🌸";
    } 
    else if (lowerInput.includes("chauffeur") || lowerInput.includes("driver")) {
      botReply = "Every booking includes a professionally dressed, well-mannered chauffeur. 👨‍✈️";
    } 
    else if (lowerInput.includes("book")) {
      botReply = "Great choice! Please provide your wedding date and location so I can check availability. 📅";
    }

    setMessages([...messages, userMsg, { sender: "bot", text: botReply }]);
    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      {/* Floating Chat Icon */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-gradient-to-r from-[#A6715B] to-[#633328] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
      >
        {open ? <X size={28} /> : <MessageCircle size={28} />}
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 w-80 md:w-96 bg-[#FDF8F5] rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.2)] overflow-hidden border border-[#A6715B]/20 flex flex-col animate-in slide-in-from-bottom-5">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-[#633328] to-[#8E4D3E] text-white p-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center italic font-serif">W</div>
              <div>
                <p className="font-serif font-bold leading-none">Royal Assistant</p>
                <p className="text-[10px] text-white/70 uppercase tracking-widest mt-1">Wedding Car Bookingt</p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="hover:rotate-90 transition-transform">
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div 
            ref={scrollRef}
            className="p-5 h-80 overflow-y-auto space-y-4 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]"
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] px-4 py-2 rounded-2xl text-sm shadow-sm
                  ${msg.sender === "user"
                    ? "bg-[#A6715B] text-white rounded-tr-none"
                    : "bg-white text-[#4A2016] border border-[#A6715B]/10 rounded-tl-none"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-[#A6715B]/10 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 bg-[#FDF8F5] border border-[#A6715B]/20 rounded-xl px-4 py-2 text-sm outline-none focus:border-[#A6715B] text-[#4A2016]"
              placeholder="Ask about luxury cars..."
            />
            <button
              onClick={handleSend}
              className="bg-[#633328] text-white p-2 rounded-xl hover:bg-[#A6715B] transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}