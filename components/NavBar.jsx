import React from 'react'

const NavBar = () => {
    
  return (
    <>
    <div className="bg-sky-600 mb-4 p-2 h-10 flex justify-between items-center mx-auto ">
        <h1 className='font-bold font-mono'>TheNavBar</h1>
      
        <ul className="space-x-5">
            <button>Cart</button>
            <button>Home</button>
            <button>Account</button>
            <button>Sign Out</button>
        </ul>
        
        
    </div>
    </>
  )
}

export default NavBar