// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ArrowLeft, Car, IndianRupee, Image as ImageIcon, FileText, CheckCircle } from 'lucide-react';

// const AddCar = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: '',
//     price: '',
//     description: '',
//     image: '',
//     category: 'Premium'
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Saving to Fleet:", formData);
//     // Yahan API call hogi car save karne ke liye
//     alert("Car added successfully!");
//     navigate('/admin'); // Waapas dashboard par jaane ke liye
//   };

//   return (
//     <div className="min-h-screen bg-[#FDF8F5] py-12 px-6">
//       <div className="max-w-3xl mx-auto">
        
//         {/* Header Navigation */}
//         <button 
//           onClick={() => navigate('/admin')} 
//           className="flex items-center gap-2 text-[#A6715B] mb-8 font-bold text-xs uppercase tracking-widest hover:gap-3 transition-all"
//         >
//           <ArrowLeft size={18} /> Back to Dashboard
//         </button>

//         <div className="bg-white rounded-[3rem] shadow-xl border border-[#A6715B]/10 overflow-hidden">
//           {/* Page Banner */}
//           <div className="bg-[#4A2016] p-10 text-center text-white relative">
//             <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
//             <h1 className="text-3xl font-serif">Add New Fleet</h1>
//             <p className="text-white/50 text-xs uppercase tracking-[0.2em] mt-2">Expand your royal collection</p>
//           </div>

//           <form onSubmit={handleSubmit} className="p-10 space-y-8">
            
//             {/* Section 1: Basic Info */}
//             <div className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="space-y-2">
//                   <label className="text-[10px] font-bold uppercase text-[#4A2016]/60 ml-1">Car Model Name</label>
//                   <div className="relative">
//                     <Car className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A6715B]" size={20} />
//                     <input 
//                       required
//                       type="text" 
//                       placeholder="e.g. Rolls Royce Ghost"
//                       className="w-full bg-[#FDF8F5] border border-[#A6715B]/10 rounded-2xl pl-12 pr-4 py-4 outline-none focus:border-[#A6715B] text-[#4A2016]"
//                       onChange={(e) => setFormData({...formData, name: e.target.value})}
//                     />
//                   </div>
//                 </div>

//                 <div className="space-y-2">
//                   <label className="text-[10px] font-bold uppercase text-[#4A2016]/60 ml-1">Daily Rental Price (₹)</label>
//                   <div className="relative">
//                     <IndianRupee className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A6715B]" size={20} />
//                     <input 
//                       required
//                       type="number" 
//                       placeholder="50000"
//                       className="w-full bg-[#FDF8F5] border border-[#A6715B]/10 rounded-2xl pl-12 pr-4 py-4 outline-none focus:border-[#A6715B] text-[#4A2016]"
//                       onChange={(e) => setFormData({...formData, price: e.target.value})}
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Section 2: Media */}
//               <div className="space-y-2">
//                 <label className="text-[10px] font-bold uppercase text-[#4A2016]/60 ml-1">Car Image URL</label>
//                 <div className="relative">
//                   <ImageIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A6715B]" size={20} />
//                   <input 
//                     required
//                     type="text" 
//                     placeholder="Paste high quality image link"
//                     className="w-full bg-[#FDF8F5] border border-[#A6715B]/10 rounded-2xl pl-12 pr-4 py-4 outline-none focus:border-[#A6715B] text-[#4A2016]"
//                     onChange={(e) => setFormData({...formData, image: e.target.value})}
//                   />
//                 </div>
//               </div>

//               {/* Section 3: Details */}
//               <div className="space-y-2">
//                 <label className="text-[10px] font-bold uppercase text-[#4A2016]/60 ml-1">Description & Specs</label>
//                 <div className="relative">
//                   <FileText className="absolute left-4 top-6 text-[#A6715B]" size={20} />
//                   <textarea 
//                     rows="4"
//                     placeholder="Mention luxury features like AC, Sunroof, Chauffeur details..."
//                     className="w-full bg-[#FDF8F5] border border-[#A6715B]/10 rounded-2xl pl-12 pr-4 py-4 outline-none focus:border-[#A6715B] text-[#4A2016] resize-none"
//                     onChange={(e) => setFormData({...formData, description: e.target.value})}
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Action Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 pt-6">
//               <button 
//                 type="button"
//                 onClick={() => navigate('/admin')}
//                 className="flex-1 px-8 py-4 border-2 border-gray-100 rounded-2xl text-gray-400 font-bold hover:bg-gray-50 transition-all"
//               >
//                 Cancel Process
//               </button>
//               <button 
//                 type="submit"
//                 className="flex-1 px-8 py-4 bg-gradient-to-r from-[#A6715B] to-[#4A2016] text-white rounded-2xl font-bold shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
//               >
//                 Publish to Fleet <CheckCircle size={20} />
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddCar;






























import React from 'react';
import { X, Car, IndianRupee, Image as ImageIcon, FileText, CheckCircle } from 'lucide-react';

const AddCarModal = ({ isOpen, onClose }) => {
  // Agar modal open nahi hai to kuch return mat karo
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Yahan aap apna logic add kar sakte hain
    alert("Car added successfully!");
    onClose(); // Form submit hone ke baad popup band ho jayega
  };

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
      {/* Background Blur Overlay */}
      <div 
        className="absolute inset-0 bg-[#4A2016]/60 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      ></div>

      {/* Modal Box */}
      <div className="relative bg-[#FDF8F5] w-full max-w-2xl rounded-[3rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-white/80 hover:text-white hover:rotate-90 transition-all z-20"
        >
          <X size={28} />
        </button>

        {/* Header/Banner inside Modal */}
        <div className="bg-[#4A2016] p-8 text-center text-white relative">
          <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-2xl" />
          <h1 className="text-2xl font-serif">Add New Fleet</h1>
          <p className="text-white/50 text-[10px] uppercase tracking-[0.2em] mt-1">Expansion Details</p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase text-[#4A2016]/60 ml-1">Car Model</label>
              <div className="relative">
                <Car className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A6715B]" size={18} />
                <input required type="text" placeholder="Rolls Royce" className="w-full bg-white border border-[#A6715B]/10 rounded-xl pl-12 pr-4 py-3.5 outline-none focus:border-[#A6715B] text-[#4A2016]" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase text-[#4A2016]/60 ml-1">Rent Price (₹)</label>
              <div className="relative">
                <IndianRupee className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A6715B]" size={18} />
                <input required type="number" placeholder="50000" className="w-full bg-white border border-[#A6715B]/10 rounded-xl pl-12 pr-4 py-3.5 outline-none focus:border-[#A6715B] text-[#4A2016]" />
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold uppercase text-[#4A2016]/60 ml-1">Image Link</label>
            <div className="relative">
              <ImageIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A6715B]" size={18} />
              <input required type="text" placeholder="https://..." className="w-full bg-white border border-[#A6715B]/10 rounded-xl pl-12 pr-4 py-3.5 outline-none focus:border-[#A6715B] text-[#4A2016]" />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold uppercase text-[#4A2016]/60 ml-1">Features Description</label>
            <div className="relative">
              <FileText className="absolute left-4 top-4 text-[#A6715B]" size={18} />
              <textarea rows="3" placeholder="AC, Luxury seats..." className="w-full bg-white border border-[#A6715B]/10 rounded-xl pl-12 pr-4 py-3.5 outline-none focus:border-[#A6715B] text-[#4A2016] resize-none" />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            <button 
              type="button"
              onClick={onClose}
              className="flex-1 py-4 border border-gray-200 rounded-2xl text-gray-400 font-bold hover:bg-gray-50 transition-all"
            >
              Cancel
            </button>
            <button 
              type="submit"
              className="flex-1 py-4 bg-gradient-to-r from-[#A6715B] to-[#4A2016] text-white rounded-2xl font-bold shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
            >
              Save <CheckCircle size={18} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCarModal;