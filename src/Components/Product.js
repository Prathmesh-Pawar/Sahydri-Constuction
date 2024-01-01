import React from 'react'
import img from "../Images/jp.webp"
export default function Product() {

  return (
    <div className='m-2 text-center bg-slate-200'>
      <img src={img} className='h-60' alt="" />
      <div className='p-4 border-slate-950 font-bold  '>
      <h5>Zandoo Bar</h5>
      <h6>Cipla</h6>
      <button className='bg-black text-white p-1 mt-2 px-5 hover:bg-slate-600 rounded '>Add</button>
      </div>

    </div>
  )
}
