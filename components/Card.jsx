import React from 'react'
import Image from 'next/image'

import Button from '@components/My_Button'

const card = ({product}) => {
  
  return (
  <div className="border-2 bg-zinc-300 border-slate-100 rounded-md h-20 p-2 flex justify-between items-center m-2 hover:border-sky-600 w-11/12">
    <div className='flex justify-center items-center'>
    <Image
      src={product.img}
      alt={product.name}
      height={50}
      width={50}  
      className='m-3'
    />
    <h1 className='text-black font-black m-2'>{product.name}</h1>
    <p className='text-black m-2 font-semibold'>Price:${product.price}</p>
    </div>
    <Button/>
  </div>
  )
}

export default card