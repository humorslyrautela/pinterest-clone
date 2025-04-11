import React from 'react'
import Image from 'next/image'
import { HiSearch, HiBell, HiChat } from 'react-icons/hi'
function Header() {
  return (
    <div>
        <Image src ='/pinterestlogo.png' alt='Pinterest Logo' width={50} height={50}
         className='hover:bg-gray-300 p-2 rounded-full cursor-pointer' />

         <button>Home</button>
         <button>Create</button>
         <div>
          <HiSearch/>
          <input type="text" placeholder='Search'/>
          <HiBell/>
          <HiChat/>
        <Image src ="/man.png" alt='user-image' width={50} height={50} className='hover:bg-gray-300 p-2
        rounded-full cursor-pointer'/>
         </div>
        
    </div>
  )
}

export default Header