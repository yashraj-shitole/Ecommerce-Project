import React from 'react'
import { useState, useEffect } from 'react';
import { RxCross2 } from 'react-icons/rx'

const Cart = () => {
  
  const [totalAmount, setTotalAmount] = useState(0);




  const [userData, setUserData] = useState([
    {
      productId: "1",
      title: "Nike Air Force 1 '07",
      description: "The radiance lives on in the Nike Air Force 1 '07, the basketball original that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.",
      price: 7495,
      imageUrl: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-shoes-WrLlWX.png",
      category: "shoes",
      size: "9",
      quantity: 1
    },
    {
      productId:"24",
      title:"Nike SB",
      description:"Men's Double-Knee Skate Trousers",
      price:"3295",
      imageUrl:"https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/5e48e432-9db2-4f28-a556-1e655435b445/image.jpg",
      category:"trousers",
      size: "8",
      quantity: 1
    }
  ]);


      useEffect(() => {
        // Calculate total amount initially
        calculateTotalAmount();
      }, [userData]);
    
      const calculateTotalAmount = () => {
        const total = userData.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
        setTotalAmount(total);
      };
    
      const handleQuantityChange = (index, quantity) => {
        const updatedUserData = [...userData];
        updatedUserData[index].quantity = quantity;
        setUserData(updatedUserData);
      };

      const handleDeleteCard = (index) => {
        const updatedUserData = [...userData];
        updatedUserData.splice(index, 1);
        setUserData(updatedUserData);
      };


  return (
    <div className=" flex h-[100vh] overflow-scroll  md:p-10 gap-5 flex-col md:flex-row">

    <div className="flex flex-col gap-5 p-5 rounded-md w-[100%] md:w-[70%]">
      <h2 className="py-4 px-8 text-xl font-bold">CART</h2>

      {
  userData.map((product, index) => (
    <div key={index} className="flex justify-center items-center">
      <div className="flex flex-col w-full items-center bg-[#F6F6F6] shadow-lg rounded-md">

        <div className='w-full p-5 flex items-center justify-end'>
           <button onClick={()=>handleDeleteCard(index)}>
                  <RxCross2 className="cursor-pointer font-bold text-lg" />
            </button>
        </div>
       

        <div className='flex flex-col items-center justify-evenly w-[100%] md:flex-row'>

        <div className='w-32 md:w-40 p-2 items-center justify-center'>
          <img
            className="object-contain"
            src={product.imageUrl}
            alt=""
          />
        </div>

        <div className='flex gap-5 p-5 items-center w-[100%] md:w-auto md:gap-10 justify-between'>

        <div className="flex flex-col gap-4 sm:w-48 sm:text-wrap ">
          <p className="text-slate-900 text-sm sm:text-xl font-medium ">
            {product.title}
          </p>
          <p className="text-slate-900 text-sm sm:text-lg font-medium">
            Size : {product.size}
          </p>
          <p className="text-slate-900 text-sm sm:text-lg font-medium">
            {product.price} INR
          </p>
        </div>

        <div>
        <select
                  className=" p-2 m-2 text-lg font-medium cursor-pointer border-2 bg-[#F6F6F6] border-gray-400 rounded-full focus:outline-none"
                  value={product.quantity}
                  onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                >
                  {[...Array(5)].map((_, i) => (
                    <option key={i} value={i + 1}>{i + 1}</option>
                  ))}
                </select>
        </div>

        </div>

        </div>

      
      </div>
    </div>
  ))
}
    </div>

    {/* summary details */}
    <div className="rounded-lg shadow-lg border-1 border-gray-600  md:w-[700px]  h-fit">
      <h2 className="py-4 px-8 text-xl font-bold">SUMMARY</h2>
      <div className="flex justify-between flex-col px-8">
        <div className="flex justify-between items-center py-4">
          <p className="text-xl font-medium">Subtotal</p>
          <p className="text-xl font-medium">{totalAmount} INR</p>
        </div>
        <div className="flex justify-between items-center py-4">
          <p className="text-lg font-medium text-gray-500">
            Delivery charges
          </p>
          <p className="text-lg font-medium text-gray-500">Free</p>
        </div>
        <hr />
        <div className="flex justify-between items-center py-5">
          <p className="text-xl font-medium">Total</p>
          <p className="text-xl font-medium">{totalAmount} INR</p>
        </div>
        <hr />
        <button className="w-full py-3 my-5 text-lg font-semibold bg-black rounded-lg text-white tracking-[1px]">
          BUY
        </button>
      </div>
    </div>
  </div>
  )
}

export default Cart
