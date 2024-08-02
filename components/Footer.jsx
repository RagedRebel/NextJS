import React from 'react'
import Link from 'next/link'

const Footer = () => {
    
  return (
    <>
    <div className="bg-sky-600  p-2 h-10 absolute bottom-0 flex justify-between items-center place-content-end w-full">
        <h1 className='font-bold font-mono'>TheFooter</h1>
      
        <ul className="space-x-5">
            <Link href="/cart">
            <button>Cart</button>
            </Link>
            <Link href="/acc">
            <button>Account</button>
            </Link>
            <Link href="/login" prefetch={true}>
            <button>Login</button>
            </Link>
            
            
        </ul>
        
        
    </div>
    </>
  )
}

export default Footer