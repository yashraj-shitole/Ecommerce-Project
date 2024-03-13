import React from 'react'
import Search from "./Search";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div>
            <Search />
    <div className='h-[100%]'>
          <Outlet />
    </div>
          <Footer />
  </div>
  )
}

export default Layout
