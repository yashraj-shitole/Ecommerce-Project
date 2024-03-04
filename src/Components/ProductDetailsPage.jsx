import React from 'react';
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';





const ProductDetailsPage = () => {
  
    const location = useLocation();
    console.log(location.state); // Log the location state to see if product data is present
    const  product = location.state ;
  
    if (!product) {
      return <div>No product data found</div>;
    }
    
// const url="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/40e9a096-e6cc-4c39-aec8-46a330f80681/invincible-3-road-running-shoes-jkhK7v.png";
// const price="16995";
// const title="Nike Invincible 3";
const subtitle="Fear";
const sizeAvailable=[4,6,7,8,11]

const [isLiked, setIsLiked]=useState(true)

// const description="With maximum cushioning to support every mile, the Invincible 3 has our highest level of comfort underfoot. Its plush and bouncy ZoomX foam helps you stay stable and fresh. In other words—it's going to feel good all day, whatever you're doing. It has everything you need so you can propel down your preferred path and come back for your next run feeling ready and reinvigorated.";


  return (
    <div className=' flex flex-col md:flex-row w-[100%] md:h-[100vh] bg-[#f5f5f5]'>



        <div className='  md:w-[50%] h-[100%]  flex flex-col gap-10 p-10'>
                {/* Show image */}
                <div className='h-[100%] flex items-center justify-center overflow-hidden object-cover' >
                    <img className='w-[80%]  h-auto' src={product.imageUrl} alt="" />
                </div>
                <div className=' flex flex-col gap-2 md:p-5'>
                    <div className='flex w-full justify-between'>
                        <h1 className='font-bold text-4xl'>{product.price} INR</h1>
                        <button onClick={()=>isLiked?setIsLiked(false):setIsLiked(true)}>
                            {
                                isLiked? <FaHeart size={30} /> : <FaRegHeart size={30}/>
                            }
                        </button>
                        
                    </div>
                    <h1 className='text-lg'>{product.title}</h1>
                    <h1 className='text-3xl font-semibold'>{subtitle}</h1>
                </div>

        </div>

        <div className=' md:w-[50%] h-[100%] flex flex-col gap-10 p-10 '>
        <Fade cascade>

                        <div className='flex flex-col gap-5'>
                            <h1 className='font-bold text-2xl'>Size</h1>

                            <div className='flex gap-3'>
                                {
                                sizeAvailable.map((size,id)=>{return (<div key={id} className='bg-[#C7C8CC] flex items-center justify-center h-[40px] w-[40px] rounded-full border-[1px] border-[#383838] '>
                                <h1 className='text-xl text-black font-medium'>{size}</h1>
                            </div>)})
                            }
                            </div>
                            
                        </div>

                        <div className='flex flex-col gap-5'>
                            <h1 className='font-bold text-2xl'>Description</h1>
                            <p>{product.description}</p>
                        </div>

                        
                        <div className='flex items-center justify-evenly'>
                            <button className='text-black font-medium border-[2px] border-[#383838] bg-[#C7C8CC] rounded-full w-32 h-20 text-4xl'>BUY</button>
                            <button className='text-black font-medium border-[2px] border-[#383838] bg-[#C7C8CC] rounded-full w-32 h-20 text-4xl'>CART</button>
                        </div>
                        </Fade>

        </div>



    </div>
  )
}

export default ProductDetailsPage
