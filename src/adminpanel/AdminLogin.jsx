import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, Eye, EyeOff, ShieldCheck, ArrowRight } from 'lucide-react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import BackEndUrl from '../config/BackEndUrl';
const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  // const [formData, setFormData] = useState({ adminid: '', password: '' });
const [adminid,setAdminid]=useState("");
const [password,setPassword]=useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => { 
   e.preventDefault();
  
  let api = `${BackEndUrl}/admin/adminlogin`;

  try {
    const response = await axios.post(api, { adminid, password });
    console.log(response);
localStorage.setItem("adminid",response.data.adminid)
    // Show toast
    toast.success(response.data.msg, {
      position: "top-center",
      autoClose: 4000, // Toast disappears after 2s
    });

    // Navigate after 2.5 seconds
    setTimeout(() => {
      navigate("/admindashboard");
    }, 1000);

  } catch (error) {
    console.log(error);

    // Optional: Show error toast
    toast.error(error.response.data.msg, {
      position: "top-center",
      autoClose: 3000,
    });
  }
};

  return (
    <div className="min-h-screen bg-[#FDF8F5] flex items-center justify-center p-6 relative overflow-hidden font-sans">
      
      {/* Background Decor */}
      <div className="absolute top-[-5%] left-[-5%] w-[350px] h-[350px] bg-[#A6715B]/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-[-5%] right-[-5%] w-[350px] h-[350px] bg-[#4A2016]/5 rounded-full blur-[90px] pointer-events-none" />

      {/* Main Card - Width fixed at 420px for perfect balance */}
      <div className="w-full max-w-[420px] relative z-10">
        
        <div className="bg-white rounded-[2.5rem] shadow-[0_25px_80px_-15px_rgba(74,32,22,0.18)] border border-[#A6715B]/20 border-t-[6px] border-t-[#A6715B] overflow-hidden">
          
          {/* Header Section - Height optimized */}
          <div className="bg-[#4A2016] pt-10 pb-7 px-6 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/20 shadow-lg">
                <ShieldCheck className="text-[#A6715B]" size={32} strokeWidth={1.5} />
              </div>
              <h1 className="text-white font-serif text-2xl md:text-3xl mb-1 tracking-tight">Admin Portal</h1>
              <p className="text-[#A6715B] text-[9px] uppercase tracking-[0.3em] font-bold opacity-80">Secure Gateway</p>
            </div>
          </div>

          {/* Form Content - Compact spacing */}
          <div className="p-7 md:p-9 space-y-6">
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Email */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase text-[#4A2016]/50 ml-1 tracking-widest">Admin ID</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A6715B]/70" size={18} />
                  <input 
                    required
                    type="text" 
                    name="adminid"
                    value={adminid}
                    placeholder="adminid"
                    className="w-full bg-[#FDF8F5] border border-[#A6715B]/10 rounded-xl pl-11 pr-4 py-3 outline-none focus:border-[#A6715B]/40 focus:bg-white transition-all text-[#4A2016] text-sm"
                    onChange={(e)=>{setAdminid(e.target.value)}}
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase text-[#4A2016]/50 ml-1 tracking-widest">Secret Key</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A6715B]/70" size={18} />
                  <input 
                    required
                    type={showPassword ? "text" : "password"} 
                    name='password'
                    value={password}
                    placeholder="••••••••"
                    className="w-full bg-[#FDF8F5] border border-[#A6715B]/10 rounded-xl pl-11 pr-11 py-3 outline-none focus:border-[#A6715B]/40 focus:bg-white transition-all text-[#4A2016] text-sm"
                    onChange={(e)=>{setPassword(e.target.value)}}
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#A6715B]"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {/* Login Button */}
              <button 
                type="submit"
                className="w-full bg-[#4A2016] text-white py-3.5 rounded-xl font-serif text-lg shadow-lg hover:bg-[#5D2B1E] transition-all flex items-center justify-center gap-2 group active:scale-[0.98] mt-4 border border-white/5"
              >
               Login
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <div className="pt-4 border-t border-gray-100 text-center">
              <button className="text-[9px] text-[#A6715B] font-bold uppercase tracking-widest hover:text-[#4A2016] transition-colors">
                Need Verification Help?
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Tag */}
        <div className="text-center mt-5">
           <p className="text-[#4A2016]/30 text-[9px] uppercase tracking-[0.2em] font-medium">
            System encrypted • RSA 4096
          </p>
        </div>
      </div>
       <ToastContainer />
    </div>
  );
};

export default AdminLogin;