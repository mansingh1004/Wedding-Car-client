import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, IndianRupee, ShieldCheck } from 'lucide-react';

const Cars = () => {
  const navigate = useNavigate();

  // Comprehensive Fleet Data (Rolls Royce, Mercedes, BMW, Audi & more)
  const [fleet, setFleet] = useState([
    // Rolls Royce Collection
    { id: 1, name: "Rolls Royce Phantom", category: "Ultra Luxury", price: "75,000", image: "https://images.unsplash.com/photo-1631501570773-ce92455e967a?auto=format&fit=crop&q=80&w=800", features: ["Chauffeur Driven", "Starlight Roof", "V12 Engine"] },
    { id: 2, name: "Rolls Royce Ghost", category: "Ultra Luxury", price: "60,000", image: "https://images.unsplash.com/photo-1631501571252-f59a68bb45e5?auto=format&fit=crop&q=80&w=800", features: ["Whisper Quiet Cabin", "Rear Theatre", "Plush Ride"] },
    { id: 3, name: "Rolls Royce Cullinan", category: "Luxury SUV", price: "80,000", image: "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?auto=format&fit=crop&q=80&w=800", features: ["Commanding View", "Viewing Suite", "Off-road Capability"] },
    { id: 4, name: "Rolls Royce Wraith", category: "Sports Luxury", price: "55,000", image: "https://images.unsplash.com/photo-1605810719119-e58f00032eec?auto=format&fit=crop&q=80&w=800", features: ["Grand Tourer", "Starry Ceiling", "Dynamic Drive"] },

    // Mercedes-Benz Collection
    { id: 5, name: "Mercedes Maybach S-Class", category: "Ultra Luxury", price: "45,000", image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800", features: ["First-Class Rear", "Magic Body Control", "Burmester 3D"] },
    { id: 6, name: "Mercedes G63 AMG", category: "Luxury SUV", price: "40,000", image: "https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&q=80&w=800", features: ["Iconic Design", "V8 Biturbo", "VIP Escort"] },
    { id: 7, name: "Mercedes S-Class (S500)", category: "Luxury", price: "25,000", image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80&w=800", features: ["Executive Seating", "Ambient Lighting", "Air Suspension"] },
    { id: 8, name: "Mercedes GLS", category: "Premium SUV", price: "22,000", image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800", features: ["7 Seater", "Panoramic Roof", "Spacious"] },

    // BMW Collection
    { id: 9, name: "BMW 7 Series", category: "Luxury", price: "24,000", image: "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&q=80&w=800", features: ["Executive Lounge", "Theater Screen", "Smooth Drive"] },
    { id: 10, name: "BMW X7", category: "Luxury SUV", price: "25,000", image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&q=80&w=800", features: ["Sky Lounge Roof", "Spacious Row 3", "M Sport Design"] },
    { id: 11, name: "BMW M5 Competition", category: "Sports Luxury", price: "30,000", image: "https://images.unsplash.com/photo-1555626906-fcf10d6851b4?auto=format&fit=crop&q=80&w=800", features: ["High Performance", "Sport Seats", "Aggressive Look"] },
    { id: 12, name: "BMW 5 Series", category: "Premium Sedan", price: "18,000", image: "https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?auto=format&fit=crop&q=80&w=800", features: ["Business Class", "Comfort Access", "Sleek Profile"] },

    // Audi Collection
    { id: 13, name: "Audi A8 L", category: "Luxury", price: "22,000", image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80&w=800", features: ["Relaxation Seat", "Matrix LED", "Quattro Drive"] },
    { id: 14, name: "Audi Q8", category: "Luxury SUV", price: "24,000", image: "https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&q=80&w=800", features: ["Coupe Design", "Sporty Handling", "Premium Sound"] },
    { id: 15, name: "Audi RS7 Sportback", category: "Sports Luxury", price: "32,000", image: "https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?auto=format&fit=crop&q=80&w=800", features: ["V8 Power", "Dynamic Styling", "RS Seats"] },
    { id: 16, name: "Audi A6", category: "Premium Sedan", price: "15,000", image: "https://images.unsplash.com/photo-1610444583786-fb49ec45ecb3?auto=format&fit=crop&q=80&w=800", features: ["Elegant Design", "Virtual Cockpit", "Comfort Ride"] },

    // Classics & Specials
    { id: 17, name: "Vintage Bentley", category: "Vintage", price: "35,000", image: "https://images.unsplash.com/photo-1520050735087-1ed65d9b0273?auto=format&fit=crop&q=80&w=800", features: ["Classic Royal Look", "Floral Decor", "Timeless"] },
    { id: 18, name: "Porsche Panamera", category: "Sports Luxury", price: "28,000", image: "https://images.unsplash.com/photo-1503375813350-1375a0048eeb?auto=format&fit=crop&q=80&w=800", features: ["Sports Car DNA", "Luxury Cabin", "Head Turner"] },
    { id: 19, name: "Range Rover Autobiography", category: "Luxury SUV", price: "35,000", image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=800", features: ["Supreme Comfort", "British Luxury", "Commanding"] },
    { id: 20, name: "Stretch Limousine", category: "Special", price: "40,000", image: "https://images.unsplash.com/photo-1554522436-056db5765660?auto=format&fit=crop&q=80&w=800", features: ["8 Seats", "Party Setup", "Mini Bar"] }
  ]);

  return (
    <div className="min-h-screen bg-[#FDF8F5] pt-28 pb-20 px-4 md:px-6">
      <div className="max-w-[1400px] mx-auto"> {/* Slightly reduced max-width for tighter layout */}
        
        {/* Page Header */}
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-[#A6715B] font-bold tracking-widest uppercase text-xs mb-2">Our Collection</h2>
          <h1 className="text-3xl md:text-5xl lg:text-5xl font-serif text-[#4A2016] mb-4">
            The Royal Fleet
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Choose from our exclusive collection of premium luxury and vintage cars to make your grand entry unforgettable.
          </p>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
          {fleet.map((car) => (
            <div 
              key={car.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-[#A6715B]/10 group flex flex-col"
            >
              {/* Image Section - Compact Size */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={car.image} 
                  alt={car.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-[#4A2016] shadow-sm tracking-wide uppercase">
                  {car.category}
                </div>
              </div>

              {/* Content Section - Tighter Padding */}
              <div className="p-4 md:p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-serif text-[#4A2016] font-bold mb-3 line-clamp-1" title={car.name}>
                  {car.name}
                </h3>

                {/* Features List */}
                <ul className="space-y-1.5 mb-5 flex-1">
                  {car.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-500 text-xs font-medium">
                      <CheckCircle size={12} className="text-[#A6715B] shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Price & Action Button */}
                <div className="pt-4 border-t border-gray-100 mt-auto">
                  <div className="flex items-end justify-between mb-4">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-0.5">Starting from</p>
                      <div className="flex items-center text-[#4A2016]">
                        <IndianRupee size={16} className="mr-0.5" />
                        <span className="text-xl font-bold">{car.price}</span>
                        <span className="text-gray-400 text-[10px] ml-1 uppercase">/ day</span>
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={() => navigate('/booknow', { state: { selectedCar: car.name } })}
                    className="w-full bg-[#4A2016]/5 hover:bg-[#4A2016] text-[#4A2016] hover:text-white border border-[#4A2016]/20 hover:border-[#4A2016] py-2.5 rounded-xl font-bold text-sm transition-all flex justify-center items-center gap-2"
                  >
                    <ShieldCheck size={16} />
                    Reserve Car
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Cars;