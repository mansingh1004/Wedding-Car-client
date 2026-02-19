// import React, { useState } from 'react';
// import { Menu, X, Phone } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const navigate = useNavigate();

//   return (
//     // React Fragment start kiya gaya hai taaki navbar aur sidebar alag-alag render ho sakein
//     <>
//       <nav className="fixed top-0 left-0 w-full z-50 bg-[#F8F1ED]/80 backdrop-blur-md px-6 py-4 flex items-center justify-between shadow-sm">
//         {/* Logo Section */}
//         <div className="flex items-center gap-3">
//           <div className="w-12 h-12 bg-[#633328] rounded-full flex items-center justify-center shadow-lg">
//             <span className="text-white font-serif text-2xl italic">W</span>
//           </div>
//           <div className="flex flex-col leading-none">
//             <span className="text-[#4A2016] font-bold text-xl tracking-tight"> Wedding Car</span>
//             <span className="text-[#4A2016]/70 text-[10px] uppercase tracking-[0.2em] mt-1 font-medium">Booking System</span>
//           </div>
//         </div>

//         {/* Desktop Navigation */}
//         <div className="hidden lg:flex items-center gap-10 text-lg font-semibold text-[#4A2016]">
//           <a onClick={()=>{navigate("home")}} className="hover:text-[#9E624C] cursor-pointer transition-all">Home</a>
//           <a href="#" className="hover:text-[#9E624C] transition-all">Cars</a>
//           <a onClick={()=>{navigate("about")}} className="hover:text-[#9E624C] cursor-pointer transition-all">About</a>
//           <a onClick={()=>{navigate("contact")}} className="hover:text-[#9E624C] cursor-pointer transition-all">Contact</a>
//         </div>

//         {/* CTA Button & Mobile Toggle */}
//         <div className="flex items-center gap-4">
//           <button
//             className="
//               hidden sm:flex 
//               items-center gap-2
//               bg-gradient-to-b from-[#A6715B] to-[#7D4432] 
//               text-white 
//               px-6 md:px-8 
//               py-2 md:py-2.5 
//               rounded-lg 
//               text-base md:text-lg 
//               font-medium 
//               shadow-md 
//               hover:shadow-lg 
//               transition-all duration-300
//             "
//           >
//             <Phone size={18} />
//             <span>99180 01088</span>
//           </button>

//           <button onClick={()=>{navigate("booknow")}} className="hidden sm:block bg-gradient-to-b from-[#A6715B] cursor-pointer to-[#7D4432] text-white px-8 py-2.5 rounded-lg text-lg font-medium shadow-md">
//             Book Now
//           </button>
//           <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-[#4A2016]">
//             {isOpen ? <X size={32} /> : <Menu size={32} />}
//           </button>
//         </div>
//       </nav>

//       {/* --- Mobile Drawer Overlay (Ab ye Nav ke bahar hai) --- */}
//       {/* Isko bahar rakhne se ye 100% solid rahega aur navbar ke blur se effect nahi hoga */}
//       <div className={`fixed inset-0 bg-[#9E624C] z-[60] transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden p-8 flex flex-col`}>
//         <div className="flex justify-end mt-4">
//           <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200 transition-colors">
//             <X size={32} />
//           </button>
//         </div>
        
//         <div className="flex flex-col gap-8 text-center mt-10 text-white text-2xl font-medium">
//           <a onClick={()=>{navigate("home"); setIsOpen(false);}} className="hover:text-[#F8F1ED] cursor-pointer transition-all">Home</a>
//           <a href="#" onClick={()=>{setIsOpen(false);}} className="hover:text-[#F8F1ED] cursor-pointer transition-all">Cars</a>
//           <a onClick={()=>{navigate("about"); setIsOpen(false);}} className="hover:text-[#F8F1ED] cursor-pointer transition-all">About</a>
//           <a onClick={()=>{navigate("contact"); setIsOpen(false);}} className="hover:text-[#F8F1ED] cursor-pointer transition-all">Contact</a>
//           <button onClick={()=>{navigate("booknow"); setIsOpen(false);}} className="bg-[#633328] hover:bg-[#4A2016] text-white py-4 rounded-xl text-xl mt-4 shadow-lg transition-all">
//             Book Now
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;















import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-40 bg-[#F8F1ED]/80 backdrop-blur-md px-6 py-4 flex items-center justify-between shadow-sm">
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
          <a onClick={()=>{navigate("home")}} className="hover:text-[#9E624C] cursor-pointer transition-all">Home</a>
          <a href="#" className="hover:text-[#9E624C] transition-all">Cars</a>
          <a onClick={()=>{navigate("about")}} className="hover:text-[#9E624C] cursor-pointer transition-all">About</a>
          <a onClick={()=>{navigate("contact")}} className="hover:text-[#9E624C] cursor-pointer transition-all">Contact</a>
        </div>

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button
            className="
              hidden sm:flex 
              items-center gap-2
              bg-gradient-to-b from-[#A6715B] to-[#7D4432] 
              text-white 
              px-6 md:px-8 
              py-2 md:py-2.5 
              rounded-lg 
              text-base md:text-lg 
              font-medium 
              shadow-md 
              hover:shadow-lg 
              transition-all duration-300
            "
          >
            <Phone size={18} />
            <span>99180 01088</span>
          </button>

          <button onClick={()=>{navigate("booknow")}} className="hidden sm:block bg-gradient-to-b from-[#A6715B] cursor-pointer to-[#7D4432] text-white px-8 py-2.5 rounded-lg text-lg font-medium shadow-md">
            Book Now
          </button>
          
          {/* Mobile Menu Icon */}
          <button onClick={() => setIsOpen(true)} className="lg:hidden text-[#4A2016]">
            <Menu size={32} />
          </button>
        </div>
      </nav>

      {/* --- Mobile Sidebar Overlay --- */}
      {/* Ye kala background hai jo bachi hui screen par dikhega, ispar click karke bhi sidebar band ho jayega */}
      <div 
        onClick={() => setIsOpen(false)} 
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 lg:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} 
      />

      {/* --- Mobile Sidebar (Left Side) --- */}
      {/* w-[75%] se ye sirf 75% screen cover karega. -translate-x-full se left se aayega */}
      <div className={`fixed top-0 left-0 h-full w-[75%] sm:w-[60%] bg-[#9E624C] z-[60] transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:hidden p-8 flex flex-col shadow-2xl`}>
        
        {/* Header with Close Button */}
        <div className="flex justify-between items-center mb-10">
          <div className="w-10 h-10 bg-[#633328] rounded-full flex items-center justify-center shadow-md">
            <span className="text-white font-serif text-xl italic">W</span>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200 transition-colors">
            <X size={28} />
          </button>
        </div>
        
        {/* Navigation Links (Left Aligned) */}
        <div className="flex flex-col gap-6 text-left mt-4 text-white text-xl font-medium">
          <a onClick={()=>{navigate("home"); setIsOpen(false);}} className="hover:text-[#F8F1ED] hover:pl-2 cursor-pointer transition-all border-b border-white/10 pb-4">Home</a>
          <a href="#" onClick={()=>{setIsOpen(false);}} className="hover:text-[#F8F1ED] hover:pl-2 cursor-pointer transition-all border-b border-white/10 pb-4">Cars</a>
          <a onClick={()=>{navigate("about"); setIsOpen(false);}} className="hover:text-[#F8F1ED] hover:pl-2 cursor-pointer transition-all border-b border-white/10 pb-4">About</a>
          <a onClick={()=>{navigate("contact"); setIsOpen(false);}} className="hover:text-[#F8F1ED] hover:pl-2 cursor-pointer transition-all border-b border-white/10 pb-4">Contact</a>
          
          <button onClick={()=>{navigate("booknow"); setIsOpen(false);}} className="bg-[#633328] hover:bg-[#4A2016] text-white py-3.5 rounded-xl text-lg mt-6 shadow-lg transition-all text-center">
            Book Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;