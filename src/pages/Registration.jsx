import React, { useState } from 'react';
import { User, Mail, Phone, Lock, Eye, EyeOff, UserPlus } from 'lucide-react';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!formData.fullName.trim()) tempErrors.fullName = "Full Name is required";
    if (!formData.email) tempErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Email is invalid";
    if (!formData.phone.match(/^[0-9]{10}$/)) tempErrors.phone = "Enter a valid 10-digit phone number";
    if (formData.password.length < 6) tempErrors.password = "Password must be at least 6 characters";
    if (formData.password !== formData.confirmPassword) tempErrors.confirmPassword = "Passwords do not match";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Registration Data:", formData);
      // Add your API logic here
    }
  };

  return (
    <div className="bg-[#FDF8F5] min-h-screen flex items-center justify-center px-4 py-28 relative overflow-hidden">
      
      {/* Background Decorative Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[120px] font-serif text-[#A6715B]/5 select-none pointer-events-none hidden lg:block tracking-[0.2em]">
        ROYALTY
      </div>

      <div className="w-full max-w-2xl relative z-10">
        <div className="bg-white rounded-[3rem] shadow-[0_25px_60px_-15px_rgba(74,32,22,0.15)] border border-[#A6715B]/10 overflow-hidden">
          
          {/* Header */}
          <div className="bg-[#4A2016] p-8 md:p-12 text-center relative">
             <div className="w-16 h-16 bg-[#FDF8F5]/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/20">
               <span className="text-white font-serif text-3xl italic">W</span>
            </div>
            <h2 className="text-white font-serif text-3xl md:text-4xl mb-2">Join Wedding  Car </h2>
            <p className="text-white/60 text-xs uppercase tracking-[0.25em]">Create your Royal Account</p>
          </div>

          {/* Form */}
          <div className="p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-1">
                  <label className="text-[#4A2016]/60 text-[10px] uppercase font-bold tracking-widest ml-1">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A6715B]" size={18} />
                    <input 
                      type="text"
                      placeholder="John Doe"
                      className={`w-full bg-[#FDF8F5] border ${errors.fullName ? 'border-red-400' : 'border-[#A6715B]/20'} rounded-2xl pl-12 pr-4 py-4 text-[#4A2016] focus:outline-none focus:border-[#A6715B] transition-all`}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    />
                  </div>
                  {errors.fullName && <span className="text-red-500 text-[10px] ml-1">{errors.fullName}</span>}
                </div>

                {/* Phone Number */}
                <div className="space-y-1">
                  <label className="text-[#4A2016]/60 text-[10px] uppercase font-bold tracking-widest ml-1">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A6715B]" size={18} />
                    <input 
                      type="tel"
                      placeholder="9876543210"
                      className={`w-full bg-[#FDF8F5] border ${errors.phone ? 'border-red-400' : 'border-[#A6715B]/20'} rounded-2xl pl-12 pr-4 py-4 text-[#4A2016] focus:outline-none focus:border-[#A6715B] transition-all`}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  {errors.phone && <span className="text-red-500 text-[10px] ml-1">{errors.phone}</span>}
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label className="text-[#4A2016]/60 text-[10px] uppercase font-bold tracking-widest ml-1">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A6715B]" size={18} />
                  <input 
                    type="email"
                    placeholder="example@mail.com"
                    className={`w-full bg-[#FDF8F5] border ${errors.email ? 'border-red-400' : 'border-[#A6715B]/20'} rounded-2xl pl-12 pr-4 py-4 text-[#4A2016] focus:outline-none focus:border-[#A6715B] transition-all`}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                {errors.email && <span className="text-red-500 text-[10px] ml-1">{errors.email}</span>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Password */}
                <div className="space-y-1">
                  <label className="text-[#4A2016]/60 text-[10px] uppercase font-bold tracking-widest ml-1">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A6715B]" size={18} />
                    <input 
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className={`w-full bg-[#FDF8F5] border ${errors.password ? 'border-red-400' : 'border-[#A6715B]/20'} rounded-2xl pl-12 pr-12 py-4 text-[#4A2016] focus:outline-none focus:border-[#A6715B] transition-all`}
                      onChange={(e) => setFormData({...formData, password: e.target.value})}
                    />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#A6715B]/60">
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  {errors.password && <span className="text-red-500 text-[10px] ml-1">{errors.password}</span>}
                </div>

                {/* Confirm Password */}
                <div className="space-y-1">
                  <label className="text-[#4A2016]/60 text-[10px] uppercase font-bold tracking-widest ml-1">Confirm Password</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A6715B]" size={18} />
                    <input 
                      type="password"
                      placeholder="••••••••"
                      className={`w-full bg-[#FDF8F5] border ${errors.confirmPassword ? 'border-red-400' : 'border-[#A6715B]/20'} rounded-2xl pl-12 pr-4 py-4 text-[#4A2016] focus:outline-none focus:border-[#A6715B] transition-all`}
                      onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                    />
                  </div>
                  {errors.confirmPassword && <span className="text-red-500 text-[10px] ml-1">{errors.confirmPassword}</span>}
                </div>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-[#A6715B] to-[#633328] text-white py-4 rounded-2xl font-serif text-xl flex items-center justify-center gap-3 shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all mt-4"
              >
                Create Account <UserPlus size={20} />
              </button>
            </form>

            <p className="text-center mt-8 text-[#4A2016]/60 text-sm">
              Already a member? <a href="login" className="text-[#A6715B] font-bold hover:underline">Login to Account</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;