import React, { useState } from 'react';
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, Car, Users, Calendar, 
  TrendingUp, IndianRupee, Clock, CheckCircle, 
  Trash2, Edit, Plus, X, Search, Image as ImageIcon, Menu, MessageSquare, LogOut
} from 'lucide-react';

const AdminDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 
  const navigate = useNavigate();
  const location = useLocation(); 

  // Check if we are on the main dashboard layout but not a specific sub-route, or specifically on the dashboard sub-route
  const isDashboardActive = location.pathname === '/admindashboard' || location.pathname === '/admindashboard/dashboard';
  // const isStatsVisible = location.pathname === '/admindashboard' || location.pathname === '/admindashboard/'; // Only show stats on main wrapper if not navigating to children, though usually stats go into the Dashboard component itself.

  // NOTE: Ideally, the stats cards should be moved INTO the <Dashboard /> component 
  // so they don't show up when <CustomerInquiry /> is rendered.
  // For now, I will keep them here but conditionally render them only if we are NOT on customerinquiry.
  
  const showStats = !location.pathname.includes('customerinquiry');

  const stats = [
    { label: "Total Revenue", value: "₹4,25,000", icon: <IndianRupee size={24}/>, color: "bg-green-100 text-green-600" },
    { label: "Bookings", value: "48", icon: <Calendar size={24}/>, color: "bg-blue-100 text-blue-600" },
    { label: "Active Cars", value: "12", icon: <Car size={24}/>, color: "bg-orange-100 text-orange-600" },
    { label: "New Inquiries", value: "07", icon: <Users size={24}/>, color: "bg-purple-100 text-purple-600" },
  ];

  const handleAddCar = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
    alert("New car added to the fleet successfully!");
  };

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      console.log("Admin Logged Out");
      navigate('/adminlogin');
    }
  };

  // --- FIXED NAVIGATION FUNCTION ---
  // const handleNavigation = (path) => {
  //   // 1. Close sidebar first
  //   setIsSidebarOpen(false);
  //   // 2. Navigate to the ABSOLUTE path
  //   navigate(path);
  // };





  const handleNavigation = (path) => {
  setIsSidebarOpen(false);

  setTimeout(() => {
    navigate(path);
  }, 100);
};

  return (
    <div className="h-screen bg-[#FDF8F5] flex overflow-hidden">
      
      {/* --- SIDEBAR --- */}
      <div className={`
        fixed inset-0 z-[150] lg:relative lg:z-0 lg:flex h-full
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        lg:translate-x-0 transition-transform duration-300 ease-in-out
      `}>
        {isSidebarOpen && (
          <div onClick={() => setIsSidebarOpen(false)} className="absolute inset-0 bg-black/40 lg:hidden" />
//  <div 
//   onClick={() => setIsSidebarOpen(false)} 
//   className="absolute inset-0 bg-black/40 lg:hidden z-40" 
// /> 

        )}

        {/* <aside className="w-64 bg-[#4A2016] text-white flex flex-col p-6 h-full shrink-0 shadow-2xl"> */}
<aside className="relative z-50 w-64 bg-[#4A2016] ...    text-white flex flex-col p-6 h-full shrink-0 shadow-2xl">

          <div className="flex items-center justify-between mb-10 px-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#A6715B] rounded-xl flex items-center justify-center font-serif text-xl italic">W</div>
              <span className="font-serif text-xl">Royal Admin</span>
            </div>
            <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-white/50">
              <X size={24} />
            </button>
          </div>
          
          <nav className="space-y-2 flex-1 overflow-y-auto no-scrollbar">
            
            {/* DASHBOARD BUTTON */}
            <button 

              onClick={() => handleNavigation('dashboard')}
// onClick={() => handleNavigation('/admindashboard/dashboard')}


              className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${isDashboardActive ? 'bg-[#A6715B] text-white' : 'text-white/60 hover:bg-white/5'}`}
         
          
            >
              <LayoutDashboard size={20}/> Dashboard


            </button>

            <button className="w-full flex items-center gap-4 px-4 py-3 text-white/60 hover:bg-white/5 rounded-xl transition-all">
              <Calendar size={20}/> Bookings
            </button>
            <button className="w-full flex items-center gap-4 px-4 py-3 text-white/60 hover:bg-white/5 rounded-xl transition-all">
              <Car size={20}/> Fleet List
            </button>
            <button className="w-full flex items-center gap-4 px-4 py-3 text-white/60 hover:bg-white/5 rounded-xl transition-all">
              <Users size={20}/> Customers
            </button>

            {/* CUSTOMER INQUIRY BUTTON */}
            <button 
              onClick={() => handleNavigation('customerinquiry')} 
// onClick={() => handleNavigation('/admindashboard/customerinquiry')}

              className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${location.pathname.includes('customerinquiry') ? 'bg-[#A6715B] text-white' : 'text-white/60 hover:bg-white/5'}`}
            >
              <MessageSquare size={20}/> Customer Inquiries
            </button>

          </nav>

          <div className="mt-auto pt-4 border-t border-white/10 shrink-0">
            <button 
              onClick={handleLogout}
              className="w-full flex items-center gap-4 px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-xl transition-all font-medium"
            >
              <LogOut size={20}/> Logout
            </button>
            <div className="mt-4 text-[10px] text-white/40 uppercase tracking-widest text-center">
              © 2026 Royal Wedding Cars
            </div>
          </div>
        </aside>
      </div>

      {/* --- MAIN CONTENT AREA --- */}
      <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden">
        
        {/* Fixed Header */}
        <header className="bg-white/80 backdrop-blur-md border-b border-[#A6715B]/10 p-4 md:p-6 lg:px-8 flex flex-col gap-4 shrink-0 z-50">
          <div className="flex items-center justify-between">
            <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden p-2 text-[#4A2016] hover:bg-[#FDF8F5] rounded-lg transition-colors">
              <Menu size={28} />
            </button>

            <div className="hidden sm:block">
              <h1 className="text-[#4A2016] font-serif text-2xl md:text-3xl">Business Overview</h1>
              <p className="text-gray-500 text-xs md:text-sm">Welcome back, Managing Director.</p>
            </div>

            <button 
              onClick={() => setIsModalOpen(true)} 
              className="bg-[#4A2016] text-white px-4 py-2 md:px-6 md:py-2.5 rounded-xl flex items-center gap-2 hover:bg-[#A6715B] transition-all text-sm md:text-base shadow-lg shadow-[#4A2016]/20"
            >
              <Plus size={18}/> 
              <span>Add Car</span>
            </button>
          </div>

          <div className="relative w-full lg:max-w-md mx-auto sm:mx-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18}/>
            <input type="text" placeholder="Search booking or customer..." className="w-full pl-10 pr-4 py-2.5 bg-[#FDF8F5] border border-[#A6715B]/10 rounded-xl outline-none focus:border-[#A6715B] transition-all" />
          </div>
        </header>

        {/* --- SCROLLABLE MAIN CONTENT --- */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 lg:p-10 scroll-smooth">
          
          {/* Stats Grid - Only show if statsVisible (i.e., not on inquiry page) */}
          {/* Note: In a cleaner architecture, these stats should be inside the 'Dashboard' component, not the layout */}
          {showStats && (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 mb-10 animate-in fade-in duration-500">
              {stats.map((stat, i) => (
                <div key={i} className="bg-white p-5 md:p-6 rounded-[2rem] shadow-sm border border-[#A6715B]/5">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-2xl ${stat.color}`}>{stat.icon}</div>
                    <TrendingUp size={16} className="text-green-500"/>
                  </div>
                  <p className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-wider">{stat.label}</p>
                  <h3 className="text-[#4A2016] text-xl md:text-2xl font-bold mt-1">{stat.value}</h3>
                </div>
              ))}
            </div>
          )}

          {/* Inquiry Page Content */}
          <div className="relative min-h-full">
            <Outlet />
          </div>
        </main>
      </div>

      {/* --- MODAL (Unchanged) --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">  
          <div onClick={() => setIsModalOpen(false)} className="absolute inset-0 bg-[#4A2016]/80 backdrop-blur-sm transition-opacity animate-in fade-in" />
          <div className="relative bg-white w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-[2rem] md:rounded-[3rem] shadow-2xl animate-in zoom-in-95">
            <div className="bg-[#4A2016] p-6 md:p-8 text-white flex justify-between items-center sticky top-0 z-10">
              <div>
                <h2 className="text-xl md:text-2xl font-serif">Add New Fleet</h2>
                <p className="text-white/60 text-[10px] uppercase tracking-widest mt-1">Royal Collection Extension</p>
              </div>
              <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-all">
                <X size={24}/>
              </button>
            </div>

            <form onSubmit={handleAddCar} className="p-6 md:p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase text-gray-400 ml-1 tracking-wider">Car Model Name</label>
                  <input required type="text" placeholder="Rolls Royce Phantom" className="w-full bg-[#FDF8F5] border border-[#A6715B]/10 rounded-xl px-4 py-3 outline-none focus:border-[#A6715B] text-[#4A2016]" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase text-gray-400 ml-1 tracking-wider">Daily Rental Fee (₹)</label>
                  <input required type="number" placeholder="25000" className="w-full bg-[#FDF8F5] border border-[#A6715B]/10 rounded-xl px-4 py-3 outline-none focus:border-[#A6715B] text-[#4A2016]" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase text-gray-400 ml-1 tracking-wider">Image Cloud URL</label>
                <div className="relative">
                  <ImageIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A6715B]/60" size={18}/>
                  <input required type="text" placeholder="https://..." className="w-full bg-[#FDF8F5] border border-[#A6715B]/10 rounded-xl pl-12 pr-4 py-3 outline-none focus:border-[#A6715B]" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase text-gray-400 ml-1 tracking-wider">Car Features & Description</label>
                <textarea rows="3" placeholder="Describe luxury features..." className="w-full bg-[#FDF8F5] border border-[#A6715B]/10 rounded-xl px-4 py-3 outline-none focus:border-[#A6715B] text-[#4A2016] resize-none" />
              </div>

              <div className="flex gap-4 pt-4">
                <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 py-3.5 border border-gray-200 rounded-xl text-gray-400 font-bold hover:bg-gray-50 transition-all text-sm uppercase tracking-widest">Discard</button>
                <button type="submit" className="flex-1 py-3.5 bg-[#A6715B] text-white rounded-xl font-bold shadow-lg shadow-[#A6715B]/20 hover:bg-[#8E5D49] transition-all text-sm uppercase tracking-widest">Confirm</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;















// import React, { useState } from 'react';
// import { 
//   LayoutDashboard, Car, Users, Calendar, 
//   TrendingUp, IndianRupee, Clock, CheckCircle, 
//   Trash2, Edit, Plus, Search, X, Image as ImageIcon
// } from 'lucide-react';

// const AdminDashboard = () => {
//   // States
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [newCar, setNewCar] = useState({ name: '', price: '', description: '', image: '' });

//   const stats = [
//     { label: "Total Revenue", value: "₹4,25,000", icon: <IndianRupee size={24}/>, color: "bg-green-100 text-green-600" },
//     { label: "Bookings", value: "48", icon: <Calendar size={24}/>, color: "bg-blue-100 text-blue-600" },
//     { label: "Active Cars", value: "12", icon: <Car size={24}/>, color: "bg-orange-100 text-orange-600" },
//     { label: "New Inquiries", value: "07", icon: <Users size={24}/>, color: "bg-purple-100 text-purple-600" },
//   ];

//   const [bookings] = useState([
//     { id: "BK-101", customer: "Rahul Sharma", car: "Rolls Royce", date: "2024-02-15", status: "Confirmed" },
//     { id: "BK-102", customer: "Priya Patel", car: "Vintage Bentley", date: "2024-02-18", status: "Pending" },
//     { id: "BK-103", customer: "Amit Verma", car: "Audi Q7", date: "2024-02-20", status: "Completed" },
//   ]);

//   const handleAddCar = (e) => {
//     e.preventDefault();
//     console.log("New Car Added:", newCar);
//     setIsModalOpen(false);
//     setNewCar({ name: '', price: '', description: '', image: '' });
//     alert("New car added to the fleet successfully!");
//   };

//   return (
//     <div className="min-h-screen bg-[#FDF8F5] flex">
      
//       {/* --- SIDEBAR --- */}
//       <aside className="w-64 bg-[#4A2016] text-white hidden lg:flex flex-col p-6 sticky top-0 h-screen">
//         <div className="flex items-center gap-3 mb-10 px-2">
//           <div className="w-10 h-10 bg-[#A6715B] rounded-xl flex items-center justify-center font-serif text-xl italic">W</div>
//           <span className="font-serif text-xl">Royal Admin</span>
//         </div>
//         <nav className="space-y-2 flex-1">
//           <button className="w-full flex items-center gap-4 px-4 py-3 bg-[#A6715B] rounded-xl text-white">
//             <LayoutDashboard size={20}/> Dashboard
//           </button>
//           <button className="w-full flex items-center gap-4 px-4 py-3 text-white/60 hover:bg-white/5 rounded-xl transition-all">
//             <Calendar size={20}/> Bookings
//           </button>
//           <button className="w-full flex items-center gap-4 px-4 py-3 text-white/60 hover:bg-white/5 rounded-xl transition-all">
//             <Car size={20}/> Fleet List
//           </button>
//         </nav>
//       </aside>

//       {/* --- MAIN CONTENT --- */}
//       <main className="flex-1 p-6 md:p-10 relative">
//         <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
//           <div>
//             <h1 className="text-[#4A2016] font-serif text-3xl">Business Overview</h1>
//             <p className="text-gray-500 text-sm">Welcome back, Managing Director.</p>
//           </div>
//           <div className="flex items-center gap-4">
//             <button 
//               onClick={() => setIsModalOpen(true)}
//               className="bg-[#A6715B] text-white px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-[#8E5D49] transition-all shadow-lg active:scale-95"
//             >
//               <Plus size={18}/> Add New Car
//             </button>
//           </div>
//         </header>

//         {/* Stats Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
//           {stats.map((stat, i) => (
//             <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-[#A6715B]/5">
//               <div className="flex items-center justify-between mb-4">
//                 <div className={`p-3 rounded-2xl ${stat.color}`}>{stat.icon}</div>
//                 <TrendingUp size={16} className="text-green-500"/>
//               </div>
//               <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">{stat.label}</p>
//               <h3 className="text-[#4A2016] text-2xl font-bold mt-1">{stat.value}</h3>
//             </div>
//           ))}
//         </div>

//         {/* Table Section */}
//         <div className="bg-white rounded-[2.5rem] shadow-sm border border-[#A6715B]/5 overflow-hidden">
//           <div className="p-8 border-b border-gray-50">
//             <h2 className="text-[#4A2016] font-serif text-2xl">Recent Inquiries</h2>
//           </div>
//           <div className="overflow-x-auto">
//             <table className="w-full text-left text-sm">
//               <thead className="bg-[#FDF8F5] text-gray-400 uppercase tracking-widest text-[10px] font-bold">
//                 <tr>
//                   <th className="px-8 py-4">Booking ID</th>
//                   <th className="px-8 py-4">Customer</th>
//                   <th className="px-8 py-4">Car</th>
//                   <th className="px-8 py-4">Status</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-50 text-gray-600 font-medium">
//                 {bookings.map((row, i) => (
//                   <tr key={i} className="hover:bg-gray-50/50">
//                     <td className="px-8 py-5 font-bold text-[#4A2016]">{row.id}</td>
//                     <td className="px-8 py-5">{row.customer}</td>
//                     <td className="px-8 py-5">{row.car}</td>
//                     <td className="px-8 py-5">
//                       <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase">{row.status}</span>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* --- ADD CAR MODAL --- */}
//         {isModalOpen && (
//           <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">  
//             {/* Overlay */} 
//             <div 
//               className="absolute inset-0 bg-[#4A2016]/60 backdrop-blur-sm animate-in fade-in duration-300"
//               onClick={() => setIsModalOpen(false)} 
//             ></div>
            
//             {/* Modal Content */}   
//             <div className="relative bg-white w-full max-w-xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
//               <div className="bg-[#4A2016] p-8 text-white flex justify-between items-center">
//                 <div>
//                   <h2 className="text-2xl font-serif">Add New Fleet</h2>
//                   <p className="text-white/60 text-xs uppercase tracking-widest mt-1">Expansion details</p>
//                 </div>
//                 <button 
//                   onClick={() => setIsModalOpen(false)}
//                   className="p-2 hover:bg-white/10 rounded-full transition-all"
//                 >
//                   <X size={24}/>
//                 </button>
//               </div>

//               <form onSubmit={handleAddCar} className="p-8 space-y-5">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//                   <div className="space-y-1">
//                     <label className="text-[10px] font-bold uppercase text-gray-400 ml-1">Car Name</label>
//                     <input 
//                       required
//                       type="text" 
//                       placeholder="e.g. Lamborghini Urus"
//                       className="w-full bg-[#FDF8F5] border border-[#A6715B]/10 rounded-xl px-4 py-3 outline-none focus:border-[#A6715B] text-[#4A2016]"
//                       onChange={(e) => setNewCar({...newCar, name: e.target.value})}
//                     />
//                   </div>
//                   <div className="space-y-1">
//                     <label className="text-[10px] font-bold uppercase text-gray-400 ml-1">Daily Rent (₹)</label>
//                     <input 
//                       required
//                       type="number" 
//                       placeholder="e.g. 50000"
//                       className="w-full bg-[#FDF8F5] border border-[#A6715B]/10 rounded-xl px-4 py-3 outline-none focus:border-[#A6715B] text-[#4A2016]"
//                       onChange={(e) => setNewCar({...newCar, price: e.target.value})}
//                     />
//                   </div>
//                 </div>

//                 <div className="space-y-1">
//                   <label className="text-[10px] font-bold uppercase text-gray-400 ml-1">Image URL</label>
//                   <div className="relative">
//                     <ImageIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18}/>
//                     <input 
//                       required
//                       type="text" 
//                       placeholder="https://images.unsplash.com/..."
//                       className="w-full bg-[#FDF8F5] border border-[#A6715B]/10 rounded-xl pl-12 pr-4 py-3 outline-none focus:border-[#A6715B] text-[#4A2016]"
//                       onChange={(e) => setNewCar({...newCar, image: e.target.value})}
//                     />
//                   </div>
//                 </div>

//                 <div className="space-y-1">
//                   <label className="text-[10px] font-bold uppercase text-gray-400 ml-1">Description</label>
//                   <textarea 
//                     rows="3"
//                     placeholder="Describe the luxury details..."
//                     className="w-full bg-[#FDF8F5] border border-[#A6715B]/10 rounded-xl px-4 py-3 outline-none focus:border-[#A6715B] text-[#4A2016] resize-none"
//                     onChange={(e) => setNewCar({...newCar, description: e.target.value})}
//                   ></textarea>
//                 </div>

//                 <div className="flex gap-4 pt-4">
//                   <button 
//                     type="button"
//                     onClick={() => setIsModalOpen(false)}
//                     className="flex-1 px-6 py-4 border border-gray-200 rounded-2xl text-gray-400 font-bold hover:bg-gray-50 transition-all"
//                   >
//                     Discard
//                   </button>
//                   <button 
//                     type="submit"
//                     className="flex-1 px-6 py-4 bg-[#A6715B] text-white rounded-2xl font-bold shadow-lg hover:bg-[#8E5D49] transition-all"
//                   >
//                     Confirm & Save
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         )}
//       </main>
      
//     </div>
//   );
// };

// export default AdminDashboard;