import React from 'react';
import { Calendar, Car, ClipboardCheck,  ShieldCheck, HelpCircle } from 'lucide-react';
import WeddingGuideimg from "../images/weddingguidecar.png"
const WeddingGuide = () => {
  const steps = [
    {
      title: "Choose Your Fleet",
      desc: "Browse our royal collection and select the car that matches your wedding theme.",
      icon: <Car className="w-8 h-8" />,
    },
    {
      title: "Check Availability",
      desc: "Select your wedding date and location to see if your dream car is available.",
      icon: <Calendar className="w-8 h-8" />,
    },
    {
      title: "Fill Inquiry Form",
      desc: "Provide your contact details and event timing through our secure inquiry form.",
      icon: <ClipboardCheck className="w-8 h-8" />,
    },
    {
      title: "Confirm Booking",
      desc: "Receive a call from our executive, discuss custom requirements, and pay the advance.",
      icon: <ShieldCheck className="w-8 h-8" />,
    }
  ];

  return (
    <div className="bg-[#FDF8F5] min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-[#4A2016] font-serif text-5xl md:text-7xl mb-6">
            Booking <span className="italic text-[#A6715B]">Guide</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg font-light">
            Everything you need to know about securing your royal arrival. Follow our simple process to book your dream wedding car.
          </p>
        </div>

        {/* --- STEP BY STEP TIMELINE --- */}
        {/*  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {steps.map((step, index) => (
            <div key={index} className="relative bg-white p-8 rounded-[2.5rem] shadow-sm border border-[#A6715B]/10 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-[#FDF8F5] rounded-2xl flex items-center justify-center text-[#A6715B] mb-6 group-hover:bg-[#A6715B] group-hover:text-white transition-colors">
                {step.icon}
              </div>
              <h3 className="text-[#4A2016] font-serif text-2xl mb-4">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#4A2016] text-white rounded-full flex items-center justify-center font-bold text-xl border-4 border-[#FDF8F5]">
                {index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* --- DETAILED TIPS SECTION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-8">
            <h2 className="text-[#4A2016] font-serif text-4xl">Expert <span className="text-[#A6715B]">Tips</span> for You</h2>
            <div className="space-y-6">
              {[
                { t: "Book Early", d: "We recommend booking at least 4-6 months in advance during peak wedding seasons." },
                { t: "Inspection", d: "You are welcome to visit our garage to inspect the car personally before booking." },
                { t: "Route Planning", d: "Share the travel route with us to ensure a smooth and timely arrival." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-6 bg-white rounded-3xl border border-[#A6715B]/5">
                  <div className="mt-1 text-[#A6715B]"><CheckCircle /></div>
                  <div>
                    <h4 className="font-bold text-[#4A2016]">{item.t}</h4>
                    <p className="text-gray-500 text-sm">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
            <img 
              src={WeddingGuideimg}
              alt="Wedding Car" 
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#4A2016]/80 to-transparent flex items-end p-10">
              <p className="text-white font-serif text-2xl italic">"Making your special day even more royal."</p>
            </div>
          </div>
        </div>

        {/* --- FAQ SECTION --- */}
        <div className="bg-white rounded-[3rem] p-10 md:p-16 border border-[#A6715B]/10 shadow-sm">
          <div className="flex items-center gap-4 mb-10">
            <HelpCircle className="text-[#A6715B]" size={32} />
            <h2 className="text-[#4A2016] font-serif text-4xl">Common Questions</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <h4 className="font-bold text-[#4A2016]">What is included in the price?</h4>
              <p className="text-gray-500 text-sm">Our price includes a professional chauffeur, fuel for the specified kilometers, and basic car decoration.</p>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-[#4A2016]">Can we decorate the car ourselves?</h4>
              <p className="text-gray-500 text-sm">Yes, but we require that only non-damaging materials like ribbons and suction cups are used.</p>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-[#4A2016]">Is there a cancellation policy?</h4>
              <p className="text-gray-500 text-sm">Yes, cancellations made 30 days before the event receive a 50% refund of the advance amount.</p>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-[#4A2016]">What happens if the car breaks down?</h4>
              <p className="text-gray-500 text-sm">In the rare event of a mechanical failure, we provide an equivalent or upgraded backup vehicle immediately.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <button className="bg-[#4A2016] text-white px-10 py-5 rounded-full font-serif text-xl hover:bg-[#A6715B] transition-all shadow-xl hover:scale-105 active:scale-95">
            Start Booking Now
          </button>
        </div>

      </div>
    </div>
  );
};

// Helper Icon for Tips
const CheckCircle = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
);

export default WeddingGuide;