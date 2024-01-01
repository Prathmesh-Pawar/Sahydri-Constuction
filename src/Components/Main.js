import React from 'react'
import BM from "../Images/BM.jpg"

export default function Main() {
  return (
    <div id='home' className='h-screen '>
        <div className='fixed -z-10 w-screen'>
        <div className='  flex justify-center'>
            <h1 className='mt-60 absolute bg-black  text-white bg-opacity-60 w-full font-extrabold text-6xl p-4 text-center' >WE TRUST QUALITY</h1>
        </div>
      <img className='w-full len2' src={BM} alt="" />
      </div>
    </div>

  )
}
