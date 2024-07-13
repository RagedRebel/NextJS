import React from 'react'

const page = () => {
  return (
    <>
    <h1 className='flex justify-center items-center p-5'>LOGIN PAGE</h1>
    <p className="flex justify-center items-center ">users can login or create an account at this page</p>
    <a href="/acc" target="_self">
    <button className='flex justify-center items-center m-auto mt-5 p-2 bg-cyan-600 border'>Login</button>
    </a>
    </>
  )
}

export default page