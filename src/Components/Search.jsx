import React from 'react';
import { FaSearch } from "react-icons/fa";


const Search = () => {
  return (

        <div className='w-full py-4 z-20 shadow-md flex flex-col justify-center items-center bg-[#f6f6f6] sticky top-0'>
          <h1 className='font-black text-xl p-5'>UNDER DEVELOPMENT</h1>
      <div className='flex justify-center items-center gap-3 w-fit rounded-full border-2 border-black p-2'>
      <FaSearch size={15}/>
      <input className='bg-transparent outline-none text-base text-black  font-medium placeholder:text-black' type="text" placeholder='Search' />
    </div>
    </div>
   
  )
}

export default Search
