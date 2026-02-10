import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, LogIn } from 'lucide-react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  

  const validate = () => {
    let tempErrors = {};
    if (!formData.email) tempErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Email is invalid";
    if (!formData.password) tempErrors.password = "Password is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Logging in with:", formData);
      // Add your authentication logic here
    }
  };

  return (
    <div className="bg-[#FDF8F5] min-h-screen flex items-center justify-center px-6 py-24 relative overflow-hidden">
      
      {/* Background Decorative Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[150px] font-serif text-[#A6715B]/5 select-none pointer-events-none hidden lg:block tracking-widest">
        HERITAGE
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Card Container */}
        <div className="bg-white rounded-[3rem] shadow-[0_25px_60px_-15px_rgba(74,32,22,0.15)] border border-[#A6715B]/10 overflow-hidden">
          
          {/* Header */}
          <div className="bg-[#4A2016] p-10 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="w-16 h-16 bg-[#FDF8F5]/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/20">
               <span className="text-white font-serif text-3xl italic">W</span>
            </div>
            <h2 className="text-white font-serif text-3xl mb-1">Welcome Back</h2>
            <p className="text-white/60 text-xs uppercase tracking-[0.2em]">Wedding Car Booking Access</p>
          </div>

          {/* Form */}
          <div className="p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Email Input */}
              <div className="space-y-1">
                <label className="text-[#4A2016]/60 text-xs uppercase font-bold tracking-widest ml-1">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A6715B]" size={18} />
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="Enter your email" 
                    className={`w-full bg-[#FDF8F5] border ${errors.email ? 'border-red-400' : 'border-[#A6715B]/20'} rounded-2xl pl-12 pr-4 py-4 text-[#4A2016] focus:outline-none focus:border-[#A6715B] transition-all`}
                  />
                </div>
                {errors.email && <span className="text-red-500 text-[10px] ml-1">{errors.email}</span>}
              </div>

              {/* Password Input */}
              <div className="space-y-1">
                <label className="text-[#4A2016]/60 text-xs uppercase font-bold tracking-widest ml-1">Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A6715B]" size={18} />
                  <input 
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    placeholder="Enter password" 
                    className={`w-full bg-[#FDF8F5] border ${errors.password ? 'border-red-400' : 'border-[#A6715B]/20'} rounded-2xl pl-12 pr-12 py-4 text-[#4A2016] focus:outline-none focus:border-[#A6715B] transition-all`}
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#A6715B]/60 hover:text-[#A6715B]"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                {errors.password && <span className="text-red-500 text-[10px] ml-1">{errors.password}</span>}
              </div>

              {/* Remember & Forgot */}
              <div className="flex items-center justify-between px-1">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 rounded border-[#A6715B]/40 text-[#A6715B] focus:ring-[#A6715B]" />
                  <span className="text-sm text-[#4A2016]/70 group-hover:text-[#4A2016] transition-colors">Remember me</span>
                </label>
                <a href="#" className="text-sm text-[#A6715B] font-medium hover:underline">Forgot?</a>
              </div>

              {/* Login Button */}
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-[#A6715B] to-[#633328] text-white py-4 rounded-2xl font-serif text-xl flex items-center justify-center gap-3 shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Login <LogIn size={20} />
              </button>
            </form>

            {/* Register Link */}
            <p className="text-center mt-8 text-[#4A2016]/60 text-sm">
              Don't have an account? <a href="registration" className="text-[#A6715B] font-bold hover:underline">Register Now</a>
            </p>




          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;




















// import React, { useState, useEffect } from "react";
// import { Mail, Lock, Eye, EyeOff, LogIn, X, UserPlus, Phone, User } from "lucide-react";

// const LoginModal = ({ isOpen, onClose }) => {
//   // View Toggle: 'login' or 'register'
//   const [view, setView] = useState("login");
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({ email: "", password: "", fullName: "", phone: "", confirmPassword: "" });
//   const [errors, setErrors] = useState({});

  

//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//       setView("login"); // Modal khulne par hamesha login pehle dikhega
//     }
//     return () => { document.body.style.overflow = "auto"; };
//   }, [isOpen]);

//   if (!isOpen) return null;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(`${view} Data:`, formData);
//     // Yahan validation aur logic add kar sakte hain
//   };

//   return (
//     <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
//       {/* Overlay */}
//       <div onClick={onClose} className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" />

//       {/* Modal Content */}
//       <div className="relative w-full max-w-lg z-10 animate-in zoom-in-95 duration-300">
//         <div className="bg-white rounded-[3rem] shadow-2xl border border-[#A6715B]/10 overflow-hidden">
          
//           {/* Close Button */}
//           <button onClick={onClose} className="absolute top-6 right-6 text-white/70 hover:text-white z-20">
//             <X size={24} />
//           </button>

//           {/* Dynamic Header */}
//           <div className="bg-[#4A2016] p-10 text-center relative overflow-hidden">
//             <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
//             <h2 className="text-white font-serif text-3xl mb-1">
//               {view === "login" ? "Welcome Back" : "Join the Heritage"}
//             </h2>
//             <p className="text-white/60 text-xs uppercase tracking-[0.2em]">
//               {view === "login" ? "Wedding Car Booking Access" : "Create Your Royal Account"}
//             </p>
//           </div>

//           <div className="p-8 md:p-10 bg-white max-h-[70vh] overflow-y-auto">
//             <form onSubmit={handleSubmit} className="space-y-5">
              
//               {/* Registration specific fields */}
//               {view === "register" && (
//                 <>
//                   <div className="space-y-1">
//                     <label className="text-[#4A2016]/60 text-[10px] uppercase font-bold tracking-widest ml-1">Full Name</label>
//                     <div className="relative">
//                       <User className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A6715B]" size={18} />
//                       <input type="text" placeholder="Your Name" className="w-full bg-[#FDF8F5] border border-[#A6715B]/20 rounded-2xl pl-12 pr-4 py-3.5 text-[#4A2016] outline-none" />
//                     </div>
//                   </div>
//                   <div className="space-y-1">
//                     <label className="text-[#4A2016]/60 text-[10px] uppercase font-bold tracking-widest ml-1">Phone Number</label>
//                     <div className="relative">
//                       <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A6715B]" size={18} />
//                       <input type="tel" placeholder="9876543210" className="w-full bg-[#FDF8F5] border border-[#A6715B]/20 rounded-2xl pl-12 pr-4 py-3.5 text-[#4A2016] outline-none" />
//                     </div>
//                   </div>
//                 </>
//               )}

//               {/* Common Email field */}
//               <div className="space-y-1">
//                 <label className="text-[#4A2016]/60 text-[10px] uppercase font-bold tracking-widest ml-1">Email Address</label>
//                 <div className="relative">
//                   <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A6715B]" size={18} />
//                   <input type="email" placeholder="email@example.com" className="w-full bg-[#FDF8F5] border border-[#A6715B]/20 rounded-2xl pl-12 pr-4 py-3.5 text-[#4A2016] outline-none" />
//                 </div>
//               </div>

//               {/* Password field */}
//               <div className="space-y-1">
//                 <label className="text-[#4A2016]/60 text-[10px] uppercase font-bold tracking-widest ml-1">Password</label>
//                 <div className="relative">
//                   <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A6715B]" size={18} />
//                   <input 
//                     type={showPassword ? "text" : "password"} 
//                     placeholder="••••••••" 
//                     className="w-full bg-[#FDF8F5] border border-[#A6715B]/20 rounded-2xl pl-12 pr-12 py-3.5 text-[#4A2016] outline-none" 
//                   />
//                   <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#A6715B]/60">
//                     {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//                   </button>
//                 </div>
//               </div>

//               {/* Submit Button */}
//               <button type="submit" className="w-full bg-gradient-to-r from-[#A6715B] to-[#633328] text-white py-4 rounded-2xl font-serif text-xl flex items-center justify-center gap-3 shadow-xl transition-all hover:scale-[1.01] active:scale-[0.98]">
//                 {view === "login" ? <><LogIn size={20} /> Login</> : <><UserPlus size={20} /> Create Account</>}
//               </button>
//             </form>

//             {/* Switch between Login and Register */}
//             <p className="text-center mt-8 text-[#4A2016]/60 text-sm font-medium">
//               {view === "login" ? (
//                 <>Don't have an account? <span onClick={() => setView("register")} className="text-[#A6715B] font-bold cursor-pointer hover:underline underline-offset-4">Register Now</span></>
//               ) : (
//                 <>Already a member? <span onClick={() => setView("login")} className="text-[#A6715B] font-bold cursor-pointer hover:underline underline-offset-4">Login to Account</span></>
//               )}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginModal;