import React, { useState } from 'react';
import { Search, Calendar, Car, Eye, Trash2, Filter, MapPin } from 'lucide-react';

const BookingList = () => {
  // Dummy Data with 20 Bookings
  const [bookings, setBookings] = useState([
    { _id: "BKG-1001", customerName: "Rahul Sharma", phone: "+91 98765 43210", carSelection: "Rolls Royce Phantom", bookingDate: "2026-03-15", pickupLocation: "Taj Palace, Mumbai", amount: "₹75,000", status: "Confirmed" },
    { _id: "BKG-1002", customerName: "Priya Singh", phone: "+91 91234 56789", carSelection: "Vintage Bentley", bookingDate: "2026-03-20", pickupLocation: "Oberoi Udaivilas, Udaipur", amount: "₹35,000", status: "Pending" },
    { _id: "BKG-1003", customerName: "Amit Patel", phone: "+91 99887 77665", carSelection: "Mercedes Maybach", bookingDate: "2026-02-10", pickupLocation: "ITC Maurya, Delhi", amount: "₹45,000", status: "Completed" },
    { _id: "BKG-1004", customerName: "Neha Gupta", phone: "+91 98765 11223", carSelection: "Audi A8 L", bookingDate: "2026-04-05", pickupLocation: "Rambagh Palace, Jaipur", amount: "₹22,000", status: "Cancelled" },
    { _id: "BKG-1005", customerName: "Vikram Malhotra", phone: "+91 97654 32109", carSelection: "BMW 7 Series", bookingDate: "2026-03-25", pickupLocation: "Leela Palace, Bengaluru", amount: "₹24,000", status: "Confirmed" },
    { _id: "BKG-1006", customerName: "Anjali Desai", phone: "+91 96543 21098", carSelection: "Rolls Royce Ghost", bookingDate: "2026-05-12", pickupLocation: "Umaid Bhawan, Jodhpur", amount: "₹60,000", status: "Pending" },
    { _id: "BKG-1007", customerName: "Sanjay Kapoor", phone: "+91 95432 10987", carSelection: "Mercedes G63 AMG", bookingDate: "2026-02-18", pickupLocation: "Taj Lands End, Mumbai", amount: "₹40,000", status: "Completed" },
    { _id: "BKG-1008", customerName: "Riya Verma", phone: "+91 94321 09876", carSelection: "Jaguar XJL", bookingDate: "2026-06-08", pickupLocation: "JW Marriott, Pune", amount: "₹22,000", status: "Confirmed" },
    { _id: "BKG-1009", customerName: "Karan Singh", phone: "+91 93210 98765", carSelection: "Range Rover Vogue", bookingDate: "2026-04-22", pickupLocation: "The Roseate, Delhi", amount: "₹30,000", status: "Pending" },
    { _id: "BKG-1010", customerName: "Sneha Reddy", phone: "+91 92109 87654", carSelection: "Porsche Panamera", bookingDate: "2026-03-05", pickupLocation: "Taj Krishna, Hyderabad", amount: "₹28,000", status: "Completed" },
    { _id: "BKG-1011", customerName: "Arjun Khanna", phone: "+91 91098 76543", carSelection: "Stretch Limousine", bookingDate: "2026-05-20", pickupLocation: "Grand Hyatt, Goa", amount: "₹40,000", status: "Confirmed" },
    { _id: "BKG-1012", customerName: "Pooja Joshi", phone: "+91 90987 65432", carSelection: "Vintage Rolls Royce", bookingDate: "2026-07-15", pickupLocation: "Neemrana Fort, Rajasthan", amount: "₹38,000", status: "Pending" },
    { _id: "BKG-1013", customerName: "Manish Agarwal", phone: "+91 89876 54321", carSelection: "Mercedes S-Class", bookingDate: "2026-02-28", pickupLocation: "Novotel, Kolkata", amount: "₹25,000", status: "Cancelled" },
    { _id: "BKG-1014", customerName: "Kriti Sanon", phone: "+91 88765 43210", carSelection: "BMW X7", bookingDate: "2026-04-18", pickupLocation: "Taj Mahal Palace, Mumbai", amount: "₹25,000", status: "Confirmed" },
    { _id: "BKG-1015", customerName: "Gaurav Dixit", phone: "+91 87654 32109", carSelection: "Audi Q8", bookingDate: "2026-06-25", pickupLocation: "Hyatt Regency, Chandigarh", amount: "₹24,000", status: "Completed" },
    { _id: "BKG-1016", customerName: "Megha Jain", phone: "+91 86543 21098", carSelection: "Rolls Royce Cullinan", bookingDate: "2026-08-10", pickupLocation: "Shiv Vilas, Jaipur", amount: "₹80,000", status: "Pending" },
    { _id: "BKG-1017", customerName: "Rohan Bhatia", phone: "+91 85432 10987", carSelection: "Bentley Flying Spur", bookingDate: "2026-05-02", pickupLocation: "The Lodhi, Delhi", amount: "₹40,000", status: "Confirmed" },
    { _id: "BKG-1018", customerName: "Nisha Raj", phone: "+91 84321 09876", carSelection: "Cadillac Escalade", bookingDate: "2026-03-30", pickupLocation: "ITC Grand Chola, Chennai", amount: "₹28,000", status: "Cancelled" },
    { _id: "BKG-1019", customerName: "Tarun Gill", phone: "+91 83210 98765", carSelection: "Maserati Quattroporte", bookingDate: "2026-07-05", pickupLocation: "Conrad, Pune", amount: "₹28,000", status: "Pending" },
    { _id: "BKG-1020", customerName: "Aarti Mehra", phone: "+91 82109 87654", carSelection: "Mercedes GLS", bookingDate: "2026-04-12", pickupLocation: "Radisson Blu, Indore", amount: "₹22,000", status: "Confirmed" }
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  // Status Badge Color Logic
  const getStatusBadge = (status) => {
    switch (status) {
      case "Confirmed": return "bg-green-100 text-green-700 border-green-200";
      case "Pending": return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "Completed": return "bg-blue-100 text-blue-700 border-blue-200";
      case "Cancelled": return "bg-red-100 text-red-700 border-red-200";
      default: return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  // Filter Logic
  const filteredBookings = bookings.filter(booking => {
    const matchesSearch = booking.customerName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          booking._id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          booking.carSelection.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "All" || booking.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const handleDelete = (id) => {
    if(window.confirm("Are you sure you want to delete this booking?")) {
      setBookings(bookings.filter(b => b._id !== id));
    }
  };

  return (
    <div className="p-4 md:p-8 lg:p-10 bg-[#FDF8F5] min-h-screen">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Section */}
        <div className="mb-10">
          <h1 className="text-[#4A2016] font-serif text-3xl md:text-4xl italic mb-2">Booking Management</h1>
          <p className="text-[#A6715B] font-medium text-sm md:text-base">Track and manage all your royal fleet reservations</p>
        </div>

        {/* Controls Section (Search & Filter) */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 bg-white p-4 rounded-2xl shadow-sm border border-[#A6715B]/10">
          
          {/* Search Bar */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search by ID, Name or Car..." 
              className="w-full pl-12 pr-4 py-3 bg-[#FDF8F5] border border-transparent rounded-xl outline-none focus:border-[#A6715B]/50 focus:bg-white transition-all text-sm text-[#4A2016]"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Status Filter */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <Filter className="text-[#A6715B]" size={18} />
            <select 
              className="w-full md:w-48 px-4 py-3 bg-[#FDF8F5] border border-transparent rounded-xl outline-none focus:border-[#A6715B]/50 cursor-pointer text-sm font-medium text-[#4A2016]"
              onChange={(e) => setStatusFilter(e.target.value)}
              value={statusFilter}
            >
              <option value="All">All Bookings</option>
              <option value="Pending">Pending</option>
              <option value="Confirmed">Confirmed</option>
              <option value="Completed">Completed</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-[#A6715B]/10 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1000px] text-left border-collapse">
              <thead>
                <tr className="bg-[#4A2016] text-white text-xs uppercase tracking-wider">
                  <th className="p-5 font-medium rounded-tl-2xl">Booking Info</th>
                  <th className="p-5 font-medium">Customer Details</th>
                  <th className="p-5 font-medium">Event Details</th>
                  <th className="p-5 font-medium">Amount</th>
                  <th className="p-5 font-medium">Status</th>
                  <th className="p-5 font-medium text-center rounded-tr-2xl">Actions</th>
                </tr>
              </thead>
              
              <tbody className="divide-y divide-[#A6715B]/10">
                {filteredBookings.length > 0 ? (
                  filteredBookings.map((booking) => (
                    <tr key={booking._id} className="hover:bg-[#FDF8F5]/50 transition-colors group">
                      
                      {/* Booking Info */}
                      <td className="p-5">
                        <p className="font-bold text-[#4A2016] text-sm">{booking._id}</p>
                        <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-1">
                          <Car size={12} className="text-[#A6715B]"/> 
                          {booking.carSelection}
                        </div>
                      </td>

                      {/* Customer Details */}
                      <td className="p-5">
                        <p className="font-bold text-[#4A2016] text-sm">{booking.customerName}</p>
                        <p className="text-xs text-gray-500 mt-1">{booking.phone}</p>
                      </td>

                      {/* Event Details */}
                      <td className="p-5">
                        <div className="flex items-center gap-1.5 text-sm text-[#4A2016] font-medium">
                          <Calendar size={14} className="text-[#A6715B]"/> 
                          {new Date(booking.bookingDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-1.5">
                          <MapPin size={12} className="text-[#A6715B] shrink-0"/> 
                          <span className="truncate max-w-[150px]" title={booking.pickupLocation}>{booking.pickupLocation}</span>
                        </div>
                      </td>

                      {/* Amount */}
                      <td className="p-5">
                        <p className="font-bold text-[#4A2016] text-sm">{booking.amount}</p>
                      </td>

                      {/* Status */}
                      <td className="p-5">
                        <span className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border ${getStatusBadge(booking.status)}`}>
                          {booking.status}
                        </span>
                      </td>

                      {/* Actions */}
                      <td className="p-5">
                        <div className="flex items-center justify-center gap-3">
                          <button className="p-2 text-gray-400 hover:text-[#A6715B] hover:bg-[#FDF8F5] rounded-lg transition-all" title="View Details">
                            <Eye size={18} />
                          </button>
                          <button 
                            onClick={() => handleDelete(booking._id)}
                            className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all" 
                            title="Delete Booking"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>

                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="p-10 text-center text-gray-500">
                      <p className="text-lg font-serif text-[#A6715B]">No bookings found.</p>
                      <p className="text-sm mt-1">Try adjusting your search or filters.</p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BookingList;