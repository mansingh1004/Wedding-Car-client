import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import Footer from "./components/Footer"

import { useState,useEffect } from "react";
import { Outlet } from "react-router-dom";
import Login from "./pages/Login";
const Layout=()=>{


      const [openLogin, setOpenLogin] = useState(false);

//       useEffect(() => {
//     setOpenLogin(true);
//   }, []);



// useEffect(() => {
//     setOpenLogin(true); // popup open on page load

//     const timer = setTimeout(() => {
//       setOpenLogin(false); // auto close after 5 seconds
//     }, 5000);

//     return () => clearTimeout(timer); // cleanup
//   }, []);



    return(
        <>
        
        
        
        <Navbar 
          // onLoginClick={() => setOpenLogin(true)}
          
          />
            {/* <Login    isOpen={openLogin}
        onClose={() => setOpenLogin(false)}/> */}


        {/* <Home/> */}
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Layout;