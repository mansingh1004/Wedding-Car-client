// import React from 'react';
// import About from './About';
// import FeaturedCars from './FeaturedCars';

// const Hero = () => {
//   return (
//     <>
//     <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20">
//       {/* Background with Darkened Overlay */}
//       <div 
//         className="absolute inset-0 z-0 bg-cover bg-center"
//         style={{ 
//           backgroundImage: `url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80')` 
//         }}
//       >
//         <div className="absolute inset-0 bg-black/20"></div>
//       </div>

//       {/* Content Container */}
//       <div className="relative z-10 text-center px-4 max-w-6xl">
//         <h1 className="text-6xl md:text-8xl font-serif text-white mb-4 leading-tight drop-shadow-2xl">
//           Arrive in <span className="italic font-light">Royal Style</span>
//         </h1>
//         <h2 className="text-4xl md:text-6xl font-serif text-white/95 mb-8 drop-shadow-lg">
//           on Your Special Day
//         </h2>
        
//         {/* Horizontal Divider with Text */}
//         <div className="flex items-center justify-center gap-4 mb-12">
//           <div className="h-[1px] w-8 md:w-16 bg-white/40"></div>
//           <p className="text-white font-light tracking-[0.25em] text-xs md:text-lg uppercase">
//             Luxury Wedding Cars | Vintage | Chauffeur Driven
//           </p>
//           <div className="h-[1px] w-8 md:w-16 bg-white/40"></div>
//         </div>

//         {/* Large Bronze Action Button */}
//         <button className="bg-gradient-to-b from-[#C68D77] to-[#8E4D3E] hover:scale-105 transition-all text-white px-12 py-4 rounded-xl text-xl font-serif shadow-[0_10px_30px_rgba(0,0,0,0.4)] border border-white/10">
//           Book Your Wedding Car
//         </button>
//       </div>

//       {/* Bottom Soft Glow */}
//       <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-[#F8F1ED]/40 to-transparent"></div>
//     </section>

//             <FeaturedCars/>

//     <About/>
//     </>
//   );
// };



// export default Hero;
































import React from 'react';
import About from './About';
import FeaturedCars from './FeaturedCars';
import Contact from './Contact';

const Hero = () => {
  return (
    <>
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20">
        
        {/* --- Background Video Container --- */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            {/* Apni video ka path yahan dein (public folder me rakhein ya URL use karein) */}
            <source 
              src="/Video_Edit_One_Bride_One_Groom.mp4" 
              type="video/mp4" 
            />
            Your browser does not support the video tag.
          </video>
          
          {/* Overlay: Video ke upar text ko readable banane ke liye dark layer */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content Container (z-10 ensures it's above video) */}
        <div className="relative z-10 text-center px-4 max-w-6xl">
          <h1 className="text-6xl md:text-8xl font-serif text-white mb-4 leading-tight drop-shadow-2xl">
            Arrive in <span className="italic font-light">Royal Style</span>
          </h1>
          <h2 className="text-4xl md:text-6xl font-serif text-white/95 mb-8 drop-shadow-lg">
            on Your Special Day
          </h2>
          
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-[1px] w-8 md:w-16 bg-white/40"></div>
            <p className="text-white font-light tracking-[0.25em] text-xs md:text-lg uppercase">
              Luxury Wedding Cars | Vintage | Chauffeur Driven
            </p>
            <div className="h-[1px] w-8 md:w-16 bg-white/40"></div>
          </div>

          <button className="bg-gradient-to-b from-[#C68D77] to-[#8E4D3E] hover:scale-105 transition-all text-white px-12 py-4 rounded-xl text-xl font-serif shadow-[0_10px_30px_rgba(0,0,0,0.4)] border border-white/10">
            Book Your Wedding Car
          </button>
        </div>

        {/* Bottom Soft Glow */}
        {/* <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-[#F8F1ED]/40 to-transparent"></div> */}
      </section>

      <FeaturedCars/>
      <About/>
      <Contact/>
    </>
  );
};

export default Hero;







































