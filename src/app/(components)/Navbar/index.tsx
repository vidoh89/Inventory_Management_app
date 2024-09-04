"use client";
import { Menu,Bell } from 'lucide-react';
import React from 'react'



const Navbar = () => {
  return (
    <div className='flex justify-between item-center w-full mb-7'>
        {/*Left side of Navbar*/}
        <div className='flex justify-between item-center gap-5'>
            {/*Icon button__lucide*/}
            <button className='px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100'onClick={()=>{}}>
            <Menu className='w-4 h-4'/>
            </button>
        </div>
        {/* Input search */}
        <div className='relative'>
        <input 
        type='search' 
        placeholder='Search groups & products'
        className='pl-19 pr-4 py-2 w-50 md:w-60 border-2 border-gray-300 bg-white rounded-lg focus:outline-none focus:border-blue-500' />
        {/* Bell_icon-lucide */}
        <div className='absolute inset-y-0 pl-3 flex items-center pointer-event-none'>
            <Bell className='text-gray-500' size={20}/>
         </div>
        </div>
        {/* Left sidebar end */}

        {/* Right sidebar */}
        <div className='flex justify-between items-center gap-5'>
            <div>

            </div>
        </div>
    </div>
  )
}

export default Navbar;