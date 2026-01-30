import React, { useState, useEffect } from 'react';
import { ShieldCheck, Star, Clock, Trophy } from 'lucide-react';

const About = () => {
  // State for live counters
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const targets = [1500, 50, 25, 100];

  useEffect(() => {
    const duration = 2000; // Animation duration in ms
    const frameRate = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameRate);

    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      
      // Easing function to slow down at the end
      const easeOutQuad = (t) => t * (2 - t);
      const currentProgress = easeOutQuad(progress);

      const newCounts = targets.map(target => Math.floor(target * currentProgress));
      setCounts(newCounts);

      if (frame === totalFrames) {
        clearInterval(timer);
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#FDF8F5] min-h-screen pt-32 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-24 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[120px] font-serif text-[#A6715B]/5 select-none hidden md:block">
            HERITAGE
          </div>
          <h2 className="text-[#4A2016] font-serif text-5xl md:text-7xl mb-6 tracking-tight relative z-10">
            About <span className="italic font-light">Us</span>
          </h2>
          <div className="flex items-center justify-center gap-6">
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#A6715B]"></div>
            <p className="text-[#4A2016] font-semibold tracking-[0.4em] text-xs md:text-sm uppercase">
              The Art of Royal Entrance
            </p>
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#A6715B]"></div>
          </div>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
          <div className="relative group">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#A6715B]/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 transform transition-all duration-1000 ease-out hover:scale-[1.02]">
              <div className="absolute -inset-4 border-2 border-[#A6715B]/20 rounded-[2.5rem] -z-10 translate-x-4 translate-y-4"></div>
              <div className="overflow-hidden rounded-[2.5rem] shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80" 
                  alt="Luxury Wedding Car" 
                  className="w-full h-[550px] object-cover hover:scale-110 transition-transform duration-[2s]"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-[#A6715B]/10 animate-bounce-slow">
                <p className="text-[#4A2016] font-serif italic text-lg">"Arrive like Royalty"</p>
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <div className="space-y-4">
              <span className="text-[#A6715B] font-bold tracking-widest text-sm uppercase">Our Legacy</span>
              <h3 className="text-[#4A2016] font-serif text-4xl md:text-6xl leading-[1.1]">
                Your Dream Entrance <br />
                <span className="italic text-[#A6715B] font-light">Perfectly Driven</span>
              </h3>
            </div>
            <p className="text-[#4A2016]/70 text-xl leading-relaxed font-light">
              We curate unforgettable moments for your grandest celebrations with the nation's most exclusive collection of vintage classics and modern luxury masterpieces.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
              <div className="group p-6 bg-white rounded-2xl border border-[#A6715B]/5 shadow-sm hover:shadow-md transition-all">
                <div className="bg-[#A6715B]/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#A6715B] transition-colors duration-500">
                  <ShieldCheck className="text-[#A6715B] group-hover:text-white transition-colors" size={28} />
                </div>
                <h4 className="font-serif text-xl text-[#4A2016] mb-2">Verified Majesty</h4>
                <p className="text-sm text-[#4A2016]/60">Rigorous inspections and meticulous sanitization for your peace of mind.</p>
              </div>

              <div className="group p-6 bg-white rounded-2xl border border-[#A6715B]/5 shadow-sm hover:shadow-md transition-all">
                <div className="bg-[#A6715B]/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#A6715B] transition-colors duration-500">
                  <Star className="text-[#A6715B] group-hover:text-white transition-colors" size={28} />
                </div>
                <h4 className="font-serif text-xl text-[#4A2016] mb-2">Signature Decor</h4>
                <p className="text-sm text-[#4A2016]/60">Bespoke floral arrangements designed to complement your wedding theme perfectly.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Live Stats Section */}
        <div className="relative rounded-[3rem] overflow-hidden py-16 px-10 bg-[#4A2016] mb-40">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { label: 'Royal Entries', value: counts[0], suffix: '+' },
              { label: 'Elite Fleet', value: counts[1], suffix: '+' },
              { label: 'Luxury Hubs', value: counts[2], suffix: '+' },
              { label: 'Trust Score', value: counts[3], suffix: '%' }
            ].map((stat, i) => (
              <div key={i} className="text-center space-y-2">
                <span className="block text-5xl font-serif text-[#FDF8F5]">
                  {stat.value}{stat.suffix}
                </span>
                <span className="text-[11px] uppercase tracking-[0.3em] text-[#A6715B] font-bold">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Mission/Vision - Interactive Hover */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="group bg-white p-12 rounded-[3rem] border border-[#A6715B]/10 shadow-xl hover:bg-[#F8F1ED] hover:-translate-y-2 transition-all duration-500">
            <Clock className="text-[#A6715B] mb-6 group-hover:scale-110 group-hover:rotate-12 transition-transform" size={40} strokeWidth={1} />
            <h4 className="text-3xl font-serif text-[#4A2016] mb-6">Our Mission</h4>
            <p className="text-[#4A2016]/60 text-lg leading-relaxed italic group-hover:text-[#4A2016] transition-colors">
              "To harmonize punctuality with luxury, ensuring that every second of your journey is as magnificent as the destination itself."
            </p>
          </div>
          <div className="group bg-[#A6715B] p-12 rounded-[3rem] shadow-xl hover:bg-[#8E5D49] hover:-translate-y-2 transition-all duration-500">
            <Trophy className="text-white mb-6 group-hover:scale-110 group-hover:-rotate-12 transition-transform" size={40} strokeWidth={1} />
            <h4 className="text-3xl font-serif text-white mb-6">Our Vision</h4>
            <p className="text-white/80 text-lg leading-relaxed group-hover:text-white transition-colors">
              To establish the nation's premier luxury wedding transport network, providing every couple with a true sense of Royal Heritage on their special day.
            </p>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}} />
    </div>
  );
};

export default About;