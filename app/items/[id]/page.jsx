"use client";
import React from 'react'
import { usePathname } from "next/navigation";
import Button from "@components/My_Button"

const page = () => {
    const pathname=usePathname();
    const finalPath = pathname.split('/').pop();
  return (
    <>

    <h1 className='m-5 font-serif font-bold text-2xl italic'>PRODUCTS PAGE</h1>
    <p className='m-5 text-xl underline decoration-4 decoration-emerald-600 tracking-widest'>this page contains the info of the product {finalPath}
    </p>
    <Button/>
    
    </>
  )
}

export default page