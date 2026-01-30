import React from 'react';
import Rolls from "../images/Rolls.png"
const cars = [
  { 
    name: "Rolls Royce Phantom", 
    price: "25,000", // Updated to reflect typical Indian luxury pricing
    img: Rolls, 
    type: "View Details" 
  },
  { 
    name: "Vintage Bentley", 
    price: "15,000", 
    img: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80", 
    type: "View Details" 
  },
  { 
    name: "Audi Q7", 
    price: "10,000", 
    img: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80", 
    type: "View Details" 
  },
];

const FeaturedCars = () => {
  return (
    <section className="bg-[#FDF8F5] py-12 md:py-24 px-4 sm:px-6 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Title Section */}
        <div className="flex items-center justify-center gap-3 md:gap-8 mb-12 md:mb-20">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#A6715B]/40 to-[#A6715B]"></div>
          <div className="text-center">
            <h2 className="text-[#4A2016] font-serif text-3xl sm:text-4xl md:text-6xl tracking-tight">
              Featured <span className="italic font-light">Wedding Cars</span>
            </h2>
          </div>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#A6715B]/40 to-[#A6715B]"></div>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {cars.map((car, idx) => (
            <div 
              key={idx} 
              className="group relative bg-white rounded-[35px] md:rounded-[40px] p-4 border border-[#A6715B]/10 
                         shadow-[0_15px_40px_rgba(166,113,91,0.08)] 
                         transition-all duration-500 ease-out 
                         hover:shadow-[0_30px_70px_rgba(166,113,91,0.18)] 
                         hover:-translate-y-2 md:hover:-translate-y-4
                         active:scale-[0.97] md:active:scale-100"
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden rounded-[28px] md:rounded-[32px] mb-6 bg-gray-100">
                <img 
                  src={car.img} 
                  alt={car.name} 
                  className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4A2016]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Content Section */}
              <div className="px-2 md:px-4 pb-2">
                <h3 className="text-[#4A2016] font-serif text-2xl md:text-3xl font-medium tracking-tight mb-2">
                  {car.name}
                </h3>
                
                <div className="flex items-baseline gap-1 mb-6 md:mb-8">
                  {/* Changed $ to ₹ symbol */}
                  <span className="text-[#A6715B] text-2xl font-bold font-sans">₹{car.price}</span>
                  <span className="text-gray-400 text-sm font-medium tracking-wide">/ Day</span>
                </div>
                
                {/* Buttons Container */}
                <div className="flex gap-3">
                  <button className="flex-1 relative overflow-hidden bg-gradient-to-r from-[#8E4D3E] to-[#5D2B1E] text-white py-4 rounded-2xl font-serif text-lg font-medium shadow-lg transition-all duration-300 group/btn">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {car.type}
                      <span className="transform group-hover/btn:translate-x-1.5 transition-transform duration-300">→</span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:animate-shine transition-transform duration-1000"></div>
                  </button>

                  <button className="w-16 h-16 bg-[#FDF8F5] border border-[#A6715B]/20 rounded-2xl flex items-center justify-center text-[#4A2016] transition-all duration-300 hover:bg-[#4A2016] hover:text-white active:scale-90">
                    <div className="w-2.5 h-2.5 rounded-full border-2 border-current"></div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shine {
          100% { transform: translateX(100%); }
        }
        .group:hover .group-hover\\:animate-shine {
          animation: shine 0.8s forwards;
        }
      `}} />
    </section>
  );
};

export default FeaturedCars;