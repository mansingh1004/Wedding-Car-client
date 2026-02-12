import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
const navigate=useNavigate()
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#F8F1ED]/80 backdrop-blur-md px-6 py-4 flex items-center justify-between shadow-sm">
      {/* Logo Section */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-[#633328] rounded-full flex items-center justify-center shadow-lg">
          <span className="text-white font-serif text-2xl italic">W</span>
        </div>
        <div className="flex flex-col leading-none">
          <span className="text-[#4A2016] font-bold text-xl tracking-tight"> Wedding Car</span>
          <span className="text-[#4A2016]/70 text-[10px] uppercase tracking-[0.2em] mt-1 font-medium">Booking System</span>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-10 text-lg font-semibold text-[#4A2016]">
        <a onClick={()=>{navigate("home")}} className="hover:text-[#9E624C] transition-all">Home</a>
        <a href="#" className="hover:text-[#9E624C] transition-all">Cars</a>
        <a href="#" className="hover:text-[#9E624C] transition-all">About</a>
        <a  onClick={()=>{navigate("contact")}}  className="hover:text-[#9E624C] transition-all">Contact</a>
        {/* <a href="#"    href="contact"   className="hover:text-[#9E624C] transition-all">Login</a> */}
      </div>

      {/* CTA Button & Mobile Toggle */}
      <div className="flex items-center gap-4">
        <button className="hidden sm:block bg-gradient-to-b from-[#A6715B] to-[#7D4432] text-white px-8 py-2.5 rounded-lg text-lg font-medium shadow-md">
          Book Now
        </button>
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-[#4A2016]">
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <div className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden p-8`}>
        <div className="flex justify-end"><X size={32} onClick={() => setIsOpen(false)} /></div>
        <div className="flex flex-col gap-8 text-center mt-10">
          <a href="#" className="text-2xl font-serif text-[#4A2016]" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#" className="text-2xl font-serif text-[#4A2016]" onClick={() => setIsOpen(false)}>Cars</a>
          <a href="#" className="text-2xl font-serif text-[#4A2016]" onClick={() => setIsOpen(false)}>About</a>
          <button className="bg-[#633328] text-white py-4 rounded-xl text-xl">Book Now</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;