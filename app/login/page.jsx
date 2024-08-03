import React from 'react'

const page = () => {
  return (
    <>
    <div className='flex flex-col justify-center items-center '>
    <h1 className=' text-3xl m-5'>WELCOME</h1>
    <label  className=" text-sm font-mono mt-10">
        Username
      </label>
        <input type="text" name="Username" className="block w-64 rounded-md  py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2 mb-4"/>
        <label  className=" text-sm font-mono">
        Password
      </label>
        <input type="password" name="Password" className="block w-64 rounded-md  py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2"/>
   
    <a href="/home" target="_self">
    <button className=' m-auto mt-5 p-2 bg-cyan-600 border hover:bg-cyan-900'>Login</button>
    </a>
    </div>
    </>
  )
}

export default page