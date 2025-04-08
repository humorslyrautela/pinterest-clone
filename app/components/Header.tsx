import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <div>
        <Image src ='/pinterestlogo.png' alt='Pinterest Logo' width={50} height={50}
         className='hover:bg-gray-300 p-2 rounded-full cursor-pointer' />

         <button>Home</button>
         <button>Create</button>
        
    </div>
  )
}

export default Header