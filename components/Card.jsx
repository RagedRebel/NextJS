import React from 'react'
import Image from 'next/image'
import Logo from '../public/saturn.png'
import Button from '@components/My_Button'

const card = () => {
  return (
  <div className="border-2 bg-zinc-300 border-slate-100 rounded-md h-20 p-2 flex justify-between items-center m-2 hover:border-sky-600">
    <div className='flex justify-center items-center'>
    <Image
      src={Logo}
      alt="logo"
      height={50}
      width={50}  
      className='m-3'
    />
    <h1 className='text-black font-black m-2'>Product 1</h1>
    <p className='text-black m-2 font-semibold'>Price:$</p>
    </div>
    <Button/>
  </div>
  )
}

export default card