import React from 'react';
import { CgProfile } from "react-icons/cg";
import { RiHeart3Line, RiHomeLine, RiShoppingCartLine } from "react-icons/ri";
import { Link } from "react-router-dom";



const Footer = () => {
  return (
    <div className="flex justify-center items-center gap-12 sm:gap-20 mt-5 py-5 bg-[#f6f6f6] fixed bottom-0 w-full">
    <div className="flex justify-center items-center flex-col gap-2 font-medium">
      <Link className="flex justify-center items-center flex-col gap-2 font-medium" to="/">
              <RiHomeLine className="text-xl"/>
        <p className="cursor-pointer">Home</p>
        </Link>
    </div>
    <div className="flex justify-center items-center flex-col gap-2 font-medium">
      <Link className="flex justify-center items-center flex-col gap-2 font-medium" to="/cart">
              <RiShoppingCartLine className="text-xl"/>
        <p className="cursor-pointer">Cart</p>
        </Link>
    </div> 
    <div className="flex justify-center items-center flex-col gap-2 font-medium">
     <Link className="flex justify-center items-center flex-col gap-2 font-medium" to="/likedproducts">
            <RiHeart3Line className="text-xl"/>
      <p className="cursor-pointer">Liked</p>
      </Link>
    </div>
    <div className="flex justify-center items-center flex-col gap-2 font-medium">
     <Link className="flex justify-center items-center flex-col gap-2 font-medium" to="/profile">
            <CgProfile className="text-xl"/>
      <p className="cursor-pointer">Profile</p>
      </Link>
    </div>
  </div>
  )
}

export default Footer
