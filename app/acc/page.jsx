import React from 'react'

const page = () => {
  return (
    <>
    <h1 className='m-5 font-extrabold'>ACCOUNT PAGE</h1>
    <p className='m-5 font-mono text-fuchsia-600'>this page shows the account info of the user</p>
    <a href="/login" target="_self">
    <button className='flex justify-center items-center m-auto mt-5 p-2 bg-cyan-600 border transition ease-in-out duration-500 hover:translate-y-2 hover:bg-sky-800'>Sign out</button>
    </a></>
  )
}

export default page