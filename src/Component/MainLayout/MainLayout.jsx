import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const MainLayout = () => {
    return (
        <div> 
            <Navbar />
            <Outlet />
          
            {/* <Navbar /> */}
            {/* <Footer /> */}
            <Footer></Footer>
            {/* <Sidebar /> */}
        </div>
    );
};

export default MainLayout;