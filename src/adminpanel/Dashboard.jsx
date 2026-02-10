import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Calendar, MessageSquare, IndianRupee, Car } from 'lucide-react';

const Dashboard = () => {
  // Sample Data for Stats
  const stats = [
    { label: "Total Bookings", value: "48", icon: <Calendar size={24}/>, color: "bg-blue-500" },
    { label: "Total Inquiries", value: "124", icon: <MessageSquare size={24}/>, color: "bg-purple-500" },
    { label: "Active Fleet", value: "15", icon: <Car size={24}/>, color: "bg-orange-500" },
    { label: "Revenue", value: "₹4.2L", icon: <IndianRupee size={24}/>, color: "bg-green-500" },
  ];

  // Data for Pie Chart
  const chartData = [
    { name: 'Bookings', value: 48 },
    { name: 'Inquiries', value: 124 },
    {name: 'Active Fleet',value:15},
   
  ];

  const COLORS = ['#3B82F6', '#8B5CF6']; // Blue and Purple

  return (
    <div className="min-h-screen bg-[#FDF8F5] p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        {/* <div className="mb-10 text-center md:text-left">
          <h1 className="text-[#4A2016] font-serif text-4xl font-bold">Business Dashboard</h1>
          <p className="text-gray-500 mt-2">Overview of your Royal Wedding Cars performance</p>
        </div> */}

        {/* Stats Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-[2rem] shadow-sm border border-[#A6715B]/10 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">{stat.label}</p>
                  <h3 className="text-[#4A2016] text-3xl font-bold mt-1">{stat.value}</h3>
                </div>
                <div className={`${stat.color} p-4 rounded-2xl text-white shadow-lg`}>
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Chart and Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Pie Chart Card */}
          <div className="lg:col-span-2 bg-white p-8 rounded-[2.5rem] shadow-sm border border-[#A6715B]/10">
            <h2 className="text-[#4A2016] font-serif text-2xl mb-6">Inquiry vs Booking Ratio</h2>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ borderRadius: '15px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                  />
                  <Legend verticalAlign="bottom" height={36}/>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Side Info/Recent Updates Card */}
          <div className="bg-[#4A2016] p-8 rounded-[2.5rem] text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="font-serif text-2xl mb-6 italic">Quick Insights</h2>
              <div className="space-y-6">
                <div className="border-l-2 border-[#A6715B] pl-4">
                  <p className="text-white/60 text-xs uppercase">Top Performer</p>
                  <p className="text-lg font-medium">Rolls Royce Phantom</p>
                </div>
                <div className="border-l-2 border-[#A6715B] pl-4">
                  <p className="text-white/60 text-xs uppercase">Conversion Rate</p>
                  <p className="text-lg font-medium">38.7%</p>
                </div>
                <div className="mt-8">
                   <button className="w-full bg-[#A6715B] hover:bg-[#8E5D49] py-4 rounded-2xl font-bold transition-all shadow-lg">
                     View All Reports
                   </button>
                </div>
              </div>
            </div>
            {/* Background design element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;