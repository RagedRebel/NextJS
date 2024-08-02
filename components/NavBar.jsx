import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from "../public/saturn.png"

const NavBar = () => {
    
  return (
    <>
    <div className="bg-sky-600 mb-4 p-2 h-10 flex justify-between items-center mx-auto ">
      <div className='flex items-center space-x-4'> 
        <Image
      src={Logo}
      alt="logo"
      height={30}
      width={30}  
    />
    <h1 className='font-bold font-mono'>TheNavBar</h1>
    </div>
      
        <ul className="space-x-5">
            <Link href="/cart">
            <button>Cart</button>
            </Link>
            <Link href="/acc">
            <button>Account</button>
            </Link>
            <Link href="/login">
            <button>Login</button>
            </Link>
            
            
        </ul>
        
        
    </div>
    </>
  )
}

export default NavBar