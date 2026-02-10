import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, AlertCircle, Car } from 'lucide-react';
import BackEndUrl from '../config/BackEndUrl';
import axios from 'axios';
const Contact = () => {
  // 1. Updated Form State (Added email and carSelection)
  const [formData, setFormData] = useState({
    name: '',
    email: '', // Added
    phone: '',
    date: '',
    carSelection: '', // Added
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // 2. Updated Validation Logic
  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) tempErrors.email = "Enter a valid email address"; // Added
    if (!formData.phone.match(/^[0-9]{10}$/)) tempErrors.phone = "Enter a valid 10-digit phone number";
    if (!formData.date) tempErrors.date = "Please select a wedding date";
    if (!formData.carSelection) tempErrors.carSelection = "Please choose a car"; // Added
    if (formData.message.length < 10) tempErrors.message = "Message must be at least 10 characters";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (validate()) {
  //     console.log("Form Submitted Successfully:", formData);
  //     setIsSubmitted(true);
  //     setTimeout(() => setIsSubmitted(false), 5000);
  //     setFormData({ name: '', email: '', phone: '', date: '', carSelection: '', message: '' });
  //   }
  // };






const handleSubmit = async (e) => {
  e.preventDefault();
  if (validate()) {
    try {
      // Axios mein direct URL aur data pass karte hain
      // headers aur JSON.stringify ki zaroorat nahi hoti default mein
      const response = await axios.post(`${BackEndUrl}/inquiry/send-inquiry`, formData);

      // Axios mein data direct 'response.data' mein milta hai
      if (response.data.success) {
        setIsSubmitted(true);
        // Form reset logic
        setFormData({ 
          name: '', 
          email: '', 
          phone: '', 
          date: '', 
          carSelection: '', 
          message: '' 
        });
        console.log(response.data)
        // Success message thodi der baad hatane ke liye
        setTimeout(() => setIsSubmitted(false), 5000);
      }
        console.log(response.data)
    } catch (err) {
      console.error("Error sending data:", err);
      alert("Something went wrong. Please try again later.");
    }
  }
};










  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  return (
    <div className="bg-[#FDF8F5] min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-[#4A2016] font-serif text-5xl md:text-7xl mb-6 tracking-tight">
            Contact <span className="italic font-light text-[#A6715B]">Us</span>
          </h2>
          <div className="flex items-center justify-center gap-6">
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#A6715B]"></div>
            <p className="text-[#A6715B] font-semibold tracking-[0.3em] text-xs md:text-sm uppercase">
              Get in Touch for Your Royal Journey
            </p>
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#A6715B]"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-[#A6715B]/10">
              <h3 className="text-[#4A2016] font-serif text-3xl mb-8">Reservation Office</h3>
              <div className="space-y-6">
                {[
                  { icon: <Phone size={24}/>, label: "Call Us", val: "+91 98765 43210" },
                  { icon: <Mail size={24}/>, label: "Email Us", val: "royal@weddingcars.in" },
                  { icon: <MapPin size={24}/>, label: "Visit Us", val: "Elite Plaza, MG Road, Pune" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-5">
                    <div className="w-12 h-12 bg-[#A6715B]/10 rounded-full flex items-center justify-center text-[#A6715B]">{item.icon}</div>
                    <div>
                      <p className="text-[#4A2016]/60 text-xs uppercase tracking-widest font-bold">{item.label}</p>
                      <p className="text-[#4A2016] font-medium text-lg">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="bg-[#4A2016] p-10 md:p-14 rounded-[3rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <h3 className="text-white font-serif text-3xl mb-8 relative z-10">Inquiry Form</h3>
            
            {isSubmitted ? (
              <div className="bg-green-500/20 border border-green-500 text-white p-6 rounded-2xl relative z-10 animate-pulse text-center">
                <p className="text-xl font-serif italic">Thank you! Your royal inquiry has been sent.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 relative z-10 text-sm">
                
                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1">
                    <input 
                      name="name" value={formData.name} onChange={handleChange}
                      type="text" placeholder="Your Name" 
                      className={`bg-white/10 border ${errors.name ? 'border-red-500' : 'border-white/20'} rounded-xl px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#A6715B] transition-all`}
                    />
                    {errors.name && <span className="text-red-400 text-xs flex items-center gap-1 mt-1"><AlertCircle size={12}/> {errors.name}</span>}
                  </div>

                  <div className="flex flex-col gap-1">
                    <input 
                      name="email" value={formData.email} onChange={handleChange}
                      type="email" placeholder="Email Address" 
                      className={`bg-white/10 border ${errors.email ? 'border-red-500' : 'border-white/20'} rounded-xl px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#A6715B] transition-all`}
                    />
                    {errors.email && <span className="text-red-400 text-xs flex items-center gap-1 mt-1"><AlertCircle size={12}/> {errors.email}</span>}
                  </div>
                </div>

                {/* Row 2: Phone & Date */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1">
                    <input 
                      name="phone" value={formData.phone} onChange={handleChange}
                      type="tel" placeholder="Phone Number" 
                      className={`bg-white/10 border ${errors.phone ? 'border-red-500' : 'border-white/20'} rounded-xl px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#A6715B] transition-all`}
                    />
                    {errors.phone && <span className="text-red-400 text-xs flex items-center gap-1 mt-1"><AlertCircle size={12}/> {errors.phone}</span>}
                  </div>

                  <div className="flex flex-col gap-1">
                    <input 
                      name="date" value={formData.date} onChange={handleChange}
                      type="date" 
                      className={`w-full bg-white/10 border ${errors.date ? 'border-red-500' : 'border-white/20'} rounded-xl px-6 py-4 text-white focus:outline-none transition-all`}
                    />
                    {errors.date && <span className="text-red-400 text-xs flex items-center gap-1 mt-1"><AlertCircle size={12}/> {errors.date}</span>}
                  </div>
                </div>

                {/* Row 3: Car Selection Dropdown (New) */}
                <div className="flex flex-col gap-1">
                  <div className="relative">
                    <Car size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-white/40" />
                    <select 
                      name="carSelection" 
                      value={formData.carSelection} 
                      onChange={handleChange}
                      className={`w-full bg-white/10 border ${errors.carSelection ? 'border-red-500' : 'border-white/20'} rounded-xl pl-14 pr-6 py-4 text-white focus:outline-none focus:border-[#A6715B] transition-all appearance-none cursor-pointer`}
                    >
                      <option value="" className="bg-[#4A2016]">Choose Your Royal Car</option>
                      <option value="Rolls Royce Phantom" className="bg-[#4A2016]">Rolls Royce Phantom</option>
                      <option value="Vintage Bentley" className="bg-[#4A2016]">Vintage Bentley</option>
                      <option value="Audi Q7" className="bg-[#4A2016]">Audi Q7</option>
                      <option value="Mercedes S-Class" className="bg-[#4A2016]">Mercedes S-Class</option>
                      <option value="BMW 7 Series" className="bg-[#4A2016]">BMW 7 Series</option>
                    </select>
                  </div>
                  {errors.carSelection && <span className="text-red-400 text-xs flex items-center gap-1 mt-1"><AlertCircle size={12}/> {errors.carSelection}</span>}
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1">
                  <textarea 
                    name="message" value={formData.message} onChange={handleChange}
                    rows="4" placeholder="How can we help you with your royal arrival?" 
                    className={`w-full bg-white/10 border ${errors.message ? 'border-red-500' : 'border-white/20'} rounded-xl px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#A6715B] transition-all resize-none`}
                  ></textarea>
                  {errors.message && <span className="text-red-400 text-xs flex items-center gap-1 mt-1"><AlertCircle size={12}/> {errors.message}</span>}
                </div>
                
                <button type="submit" className="w-full bg-gradient-to-r from-[#A6715B] to-[#8E5D49] text-white py-4 rounded-xl font-serif text-xl flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform active:scale-95 shadow-lg mt-4">
                  Send Message <Send size={20} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;