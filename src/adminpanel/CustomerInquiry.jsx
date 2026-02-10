import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BackEndUrl from '../config/BackEndUrl';
import { Trash2, Mail, Phone, MessageSquare, Search, Loader2 } from 'lucide-react';

const InquiryList = () => {
  const [inquiries, setInquiries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  // 1. Fetch Data Function
  // const LoadData = async () => {
  //   try {
  //     setLoading(true);
  //     const response = await axios.get(`${BackEndUrl}/inquiry/get-all`);
  //     // if (response.data.success) {
  //     //   setInquiries(response.data.data);
  //     // }
  //     console.log(response.data)
  //   } catch (err) {
  //     console.error("Fetch error:", err);
  //   } 
  //   // finally {
  //   //   setLoading(false);
  //   // }
  // };




// const LoadData = async () => {
//   try {
//     setLoading(true);
//     const response = await axios.get(`${BackEndUrl}/inquiry/getall`);

//     if (response.data.success) {
//       setInquiries(response.data.data);
//     }

//   } catch (err) {
//     console.error("Fetch error:", err);
//   } finally {
//     setLoading(false);
//   }
// };







const LoadData = async () => {
  try {
    setLoading(true);
    const response = await axios.get(`${BackEndUrl}/inquiry/get-all`);

    console.log("API DATA:", response.data); // 👈 confirm

    if (response.data.success) {
      setInquiries(response.data.data);
    }
  } catch (err) {
    console.error("Fetch error:", err);
  } finally {
    setLoading(false);
  }
};



  // 2. Load data on Component Mount (Yeh zaroori hai)
  useEffect(() => {
    LoadData();
  }, []);

  // 3. Delete Function (Sahi naam ke saath)
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this royal inquiry?")) {
      try {
        const res = await axios.delete(`${BackEndUrl}/inquiry/delete/${id}`);
        if (res.data.success) {
          // Local state update karein taaki turant gayab ho jaye
          setInquiries(inquiries.filter(item => item._id !== id));
        }
      } catch (err) {
        console.error("Delete error:", err);
        alert("Failed to delete inquiry.");
      }
    }
  };

  // 4. Filter Logic
  const filteredData = inquiries.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.carSelection.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 md:p-10 bg-[#FDF8F5] min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div>
            <h1 className="text-[#4A2016] font-serif text-4xl italic">Inquiry Management</h1>
            <p className="text-[#A6715B] font-medium mt-1">Review and manage your royal wedding fleet inquiries</p>
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Search by name or car..." 
              className="pl-10 pr-4 py-3 bg-white border border-[#A6715B]/10 rounded-2xl w-full md:w-80 outline-none focus:border-[#A6715B] transition-all shadow-sm"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Content Section */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="animate-spin text-[#A6715B]" size={40} />
            <p className="mt-4 text-[#4A2016] font-serif">Loading royal inquiries...</p>
          </div>
        ) : filteredData.length > 0 ? (
          <div className="grid grid-cols-1 gap-6">
            {filteredData.map((item) => (
              <div key={item._id} className="bg-white rounded-[2rem] p-6 md:p-8 shadow-sm border border-[#A6715B]/5 hover:shadow-md transition-all group">
                <div className="flex flex-col lg:flex-row justify-between gap-6">
                  
                  {/* Left Side: Customer Info */}
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-[#4A2016] text-white rounded-2xl flex items-center justify-center font-serif text-2xl shadow-lg shadow-[#4A2016]/20">
                        {item.name[0]}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#4A2016]">{item.name}</h3>
                        <div className="flex flex-wrap gap-4 mt-1 text-sm text-gray-500">
                          <a href={`mailto:${item.email}`} className="flex items-center gap-1 hover:text-[#A6715B]"><Mail size={14}/> {item.email}</a>
                          <a href={`tel:${item.phone}`} className="flex items-center gap-1 hover:text-[#A6715B]"><Phone size={14}/> {item.phone}</a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-[#FDF8F5] p-5 rounded-3xl border border-[#A6715B]/5 italic text-gray-600 relative">
                      <MessageSquare size={16} className="absolute -top-2 -left-2 text-[#A6715B] bg-white rounded-full p-0.5" />
                      "{item.message}"
                    </div>
                  </div>

                  {/* Right Side: Car & Action */}
                  <div className="lg:w-72 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gray-100 pt-6 lg:pt-0 lg:pl-8">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm bg-[#4A2016]/5 p-3 rounded-xl">
                        <span className="text-gray-500 font-medium">Model:</span>
                        <span className="font-bold text-[#4A2016]">{item.carSelection}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm px-3">
                        <span className="text-gray-400">Wedding Date:</span>
                        <span className="font-bold text-[#A6715B]">{new Date(item.date).toLocaleDateString('en-GB')}</span>
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => handleDelete(item._id)}
                      className="mt-6 flex items-center justify-center gap-2 text-red-400 hover:text-red-600 hover:bg-red-50 py-3.5 rounded-2xl transition-all font-bold text-sm uppercase tracking-wider"
                    >
                      <Trash2 size={18}/> Remove Inquiry
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-[3rem] border-2 border-dashed border-[#A6715B]/20">
            <p className="text-[#A6715B] font-serif text-xl">No inquiries found for your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InquiryList;



