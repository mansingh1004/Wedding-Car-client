import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import BookNow from "./pages/BookNow";
import Chatbot from "./pages/Chatbot";
import WhatsApp from "./pages/WhatsApp"
import Contact from "./pages/Contact";

import AdminDashboard from "./adminpanel/AdminDashboard";
import CustomerInquiry from "./adminpanel/CustomerInquiry";
import Adminlogin from "./adminpanel/AdminLogin"
import Dashboard from "./adminpanel/Dashboard";
import WeddingGuide from "./pages/WeddingGuide";
// import { Contact } from "lucide-react";
// import AddCarDetail from "./adminpanel/AddCarDetail"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* ===== USER ROUTES ===== */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="adminlogin" element={<AdminLogin/>}/>
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />
          <Route path="booknow" element={<BookNow />} />
          <Route path="contact" element={<Contact/>}/>
          <Route path="weddingguide" element={<WeddingGuide/>}/>
           {/* <Route path="customerinquiry" element={<CustomerInquiry/>}/> */}
        </Route>

        {/* ===== ADMIN ROUTES ===== */}
        {/* <Route path="admindashboard" element={<AdminDashboard />}>
            <Route path="customerinquiry" element={<CustomerInquiry/>}/>
       
        </Route> */}




<Route path="admindashboard" element={<AdminDashboard />}>
  {/* <Route index element={<AdminDashboard />} /> */}
  <Route path="customerinquiry" element={<CustomerInquiry />} />
  <Route path="dashboard" element={<Dashboard/>}/>
</Route>

      </Routes>

      {/* Global Chatbot (visible on all pages) */}
      <WhatsApp/>
      <Chatbot />
    </BrowserRouter>
  );
};

export default App;
