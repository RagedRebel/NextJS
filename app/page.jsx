import React from 'react'
import Button from '@components/Button'

const page = () => {
  return (
  <>
  <Button/>
  <h1 className="flex justify-center items-center font-mono text-xl border rounded-md mx-auto h-10 mt-5 w-fit p-5 hover:underline">Reuben</h1>
  <p className="flex justify-center items-center hover:text-red-500 mt-5 ">
    Not a fullstack developer (yet)
    </p>
  <p className="flex justify-center items-center border-8 mt-5 p-5 text-rose-400 border-double bg-slate-600 border-zinc-100 w-fit h-15 mx-auto animate-pulse transition-colors ease-in-out duration-700 hover:bg-teal-300">
  Very descriptive and easy to understand for beginners!
  </p>
  </>
  
  )
}

export default page