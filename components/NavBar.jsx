import React from 'react'
import Link from 'next/link'

const NavBar = () => {
    
  return (
    <>
    <div className="bg-sky-600 mb-4 p-2 h-10 flex justify-between items-center mx-auto ">
        <h1 className='font-bold font-mono'>TheNavBar</h1>
      
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