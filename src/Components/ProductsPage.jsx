import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";


const ProductsPage = () => {

    const [products, setProducts] = useState([]);


    const fetchProducts = async (filter) => {
      try {
        const response = await fetch('https://cors-anywhere.herokuapp.com/'+`https://productapi-yashraj.onrender.com/api/${filter}`);
        const data = await response.json();
        setProducts(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };


    useEffect(() => {
        setTimeout(() => {
          fetchProducts('allproducts');
        }, 100);
      },[]);


    return (


        <div className="flex flex-col md:flex-row h-full ">

            
            <div className=" md:w-[20%]">
                <ul className='flex flex-col gap-5 md:p-10'>
                    <li className='font-semibold text-2xl'><button onClick={() => fetchProducts('allproducts')}>All Products</button></li>
                    <li className='font-semibold text-2xl'><button onClick={() => fetchProducts('tshirt')}>Tops & T-Shirts</button></li>
                    <li className='font-semibold text-2xl'><button onClick={() => fetchProducts('shoes')}>Shoes</button></li>
                    <li className='font-semibold text-2xl'><button onClick={() => fetchProducts('trousers')}>Trousers & Tights</button></li>
                    <li className='font-semibold text-2xl'><button onClick={() => fetchProducts('accessories')}>Accessories</button></li>
                </ul>
            </div>
            



            <div className="h-[100%] w-[100%] overflow-scroll">
                        <div className="flex justify-center items-center flex-wrap py-10  gap-10 bg-white">
                    {products.map(( product,key) => (

                        <Fade key={key} cascade>
                          <Link to={{ pathname: `/product/${key}`}} state={product}  key={key}>
                                <div
                                    className="h-96 w-80 p-5 flex justify-center items-center flex-col bg-[#F6F6F6] shadow-md rounded-2xl gap-2 hover:shadow-lg"
                                >
                                    <img
                                        className="w-60 h-64"
                                        src={product.imageUrl}
                                        alt="product_Image"
                                    />
                                    <div className="flex justify-between items-center w-full">
                                        <p className="text-slate-900 text-lg">{product.price} INR</p>
                                        <FaRegHeart className="cursor-pointer" />
                                    </div>
                                    <div className="w-full">
                                        <p className="text-slate-900 text-lg font-medium">
                                            {product.title}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                    </Fade>

                    ))}
                </div>
            </div>

        
        </div>
      
    );
  }

export default ProductsPage
