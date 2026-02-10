import React, { useState } from 'react';
import { X, Users, Fuel, Settings, Wind, CheckCircle } from 'lucide-react';
import Rolls from "../images/Rolls.png";

const cars = [
  { id: 1, name: "Rolls Royce Phantom", price: "25,000", img: Rolls, desc: "Ultimate luxury for royal weddings.", specs: { seats: "4", fuel: "Petrol", ac: "Yes" } },
  { id: 2, name: "Vintage Bentley", price: "15,000", img: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80", desc: "Classic 1920s elegance.", specs: { seats: "2", fuel: "Petrol", ac: "No" } },
  { id: 3, name: "Audi Q7", price: "10,000", img: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80", desc: "Modern comfort and style.", specs: { seats: "7", fuel: "Diesel", ac: "Yes" } },
];

const FeaturedCars = () => {
  const [selectedCar, setSelectedCar] = useState(null); // Modal ke liye state
  const [isBooked, setIsBooked] = useState(false);

  const handleBooking = (e) => {
    e.preventDefault();
    setIsBooked(true);
    setTimeout(() => { setSelectedCar(null); setIsBooked(false); }, 3000);
  };

  return (
    <section className="bg-[#FDF8F5] py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[#4A2016] font-serif text-5xl text-center mb-16 tracking-tight">Our Premium <span className="italic font-light">Fleet</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {cars.map((car) => (
            <div key={car.id} className="group bg-white rounded-[40px] p-4 shadow-lg border border-[#A6715B]/10 overflow-hidden hover:-translate-y-2 transition-all duration-500">
              <div className="relative h-64 overflow-hidden rounded-[32px] mb-6">
                <img src={car.img} alt={car.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              </div>
              <div className="px-4 pb-4">
                <h3 className="text-[#4A2016] font-serif text-2xl mb-2">{car.name}</h3>
                <p className="text-[#A6715B] text-xl font-bold mb-6">₹{car.price} / Day</p>
                <button 
                  onClick={() => setSelectedCar(car)}
                  className="w-full bg-[#4A2016] text-white py-4 rounded-2xl font-serif text-lg hover:bg-[#A6715B] transition-all"
                >
                  View & Book
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- QUICK VIEW & BOOKING MODAL --- */}
      {selectedCar && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Blur Overlay */}
          <div onClick={() => setSelectedCar(null)} className="absolute inset-0 bg-black/60 backdrop-blur-md" />
          
          <div className="relative bg-white w-full max-w-4xl rounded-[3rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 max-h-[90vh] overflow-y-auto">
            <button onClick={() => setSelectedCar(null)} className="absolute top-6 right-6 text-[#4A2016] hover:rotate-90 transition-transform z-10"><X size={32}/></button>
            
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left: Image & Info */}
              <div className="p-8 bg-[#FDF8F5]">
                <img src={selectedCar.img} alt={selectedCar.name} className="w-full h-64 object-cover rounded-[2rem] shadow-lg mb-6" />
                <h3 className="text-[#4A2016] font-serif text-3xl mb-2">{selectedCar.name}</h3>
                <p className="text-[#A6715B] font-bold text-xl mb-4">₹{selectedCar.price} / Day</p>
                
                <div className="grid grid-cols-3 gap-2 mb-6">
                  <div className="bg-white p-3 rounded-xl border border-[#A6715B]/10 text-center">
                    <Users size={18} className="mx-auto text-[#A6715B] mb-1"/>
                    <span className="text-[10px] font-bold">{selectedCar.specs.seats} Seats</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-[#A6715B]/10 text-center">
                    <Fuel size={18} className="mx-auto text-[#A6715B] mb-1"/>
                    <span className="text-[10px] font-bold">{selectedCar.specs.fuel}</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-[#A6715B]/10 text-center">
                    <Wind size={18} className="mx-auto text-[#A6715B] mb-1"/>
                    <span className="text-[10px] font-bold">AC: {selectedCar.specs.ac}</span>
                  </div>
                </div>
                <p className="text-gray-500 italic text-sm">"{selectedCar.desc}"</p>
              </div>

              {/* Right: Quick Booking Form */}
              <div className="p-10">
                {isBooked ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                    <CheckCircle size={60} className="text-green-500 animate-bounce" />
                    <h4 className="text-2xl font-serif text-[#4A2016]">Royal Booking Confirmed!</h4>
                    <p className="text-gray-500">We will contact you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleBooking} className="space-y-4">
                    <h4 className="text-[#4A2016] font-serif text-2xl mb-4">Reserve Now</h4>
                    <input required type="text" placeholder="Your Name" className="w-full bg-[#FDF8F5] border border-[#A6715B]/10 rounded-xl px-4 py-3 outline-none focus:border-[#A6715B]" />
                    <input required type="tel" placeholder="Phone Number" className="w-full bg-[#FDF8F5] border border-[#A6715B]/10 rounded-xl px-4 py-3 outline-none focus:border-[#A6715B]" />
                    <div className="grid grid-cols-2 gap-4">
                      <input required type="date" className="w-full bg-[#FDF8F5] border border-[#A6715B]/10 rounded-xl px-4 py-3 outline-none focus:border-[#A6715B]" />
                      <input required type="time" className="w-full bg-[#FDF8F5] border border-[#A6715B]/10 rounded-xl px-4 py-3 outline-none focus:border-[#A6715B]" />
                    </div>
                    <button type="submit" className="w-full bg-[#4A2016] text-white py-4 rounded-xl font-serif text-lg shadow-xl hover:bg-[#A6715B] transition-all mt-4">Confirm Booking</button>
                    <p className="text-[10px] text-center text-gray-400 uppercase tracking-widest mt-2">No advance payment required for inquiry</p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedCars;