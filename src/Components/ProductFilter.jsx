import React, { useState } from 'react';

const ProductFilter = () => {
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
  return (
    <div>
        <ul className='flex flex-col gap-5 md:p-10'>
            <li className='font-semibold text-2xl'><button onClick={() => fetchProducts('allproducts')}>All Products</button></li>
            <li className='font-semibold text-2xl'><button onClick={() => fetchProducts('tshirt')}>Tops & T-Shirts</button></li>
            <li className='font-semibold text-2xl'><button onClick={() => fetchProducts('shoes')}>Shoes</button></li>
            <li className='font-semibold text-2xl'><button onClick={() => fetchProducts('trousers')}>Trousers & Tights</button></li>
            <li className='font-semibold text-2xl'><button onClick={() => fetchProducts('accessories')}>Accessories</button></li>
        </ul>
    </div>
  )
}

export default ProductFilter
