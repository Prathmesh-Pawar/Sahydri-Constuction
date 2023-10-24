import React from 'react'
import chira from "../Images/ch.png"

export default function Products() {
  return (
    <div id="products" className='bg-white pt-28 '>
        <div className='mlx'>
      <div className='flex py-2 '>
      <div className='h-10 me-2 mb-5 w-3 bg-yellow-300'></div><h1 className=' text-black  text-4xl font-bold'>Featured Products</h1>
      </div>
      <div className='flex gap-14 flex-wrap justify-center'>
        <div>
            <div className='p-3 bg-slate-200 shadow'>
            <img width={"250px"} src={chira} alt="" /></div>
            <div  className='bg-slate-200 p-3'>
            <h1 className='font-bold text-center text-2xl'>Chira</h1>
            </div>
        </div>
        <div>
            <div className='p-3 bg-slate-200'>
            <img width={"250px"} src={chira} alt="" /></div>
            <div  className='bg-slate-200 p-3'>
            <h1 className='font-bold text-center text-2xl'>Chira</h1>
            </div>
        </div><div>
            <div className='p-3 bg-slate-200'>
            <img width={"250px"} src={chira} alt="" /></div>
            <div  className='bg-slate-200 p-3'>
            <h1 className='font-bold text-center text-2xl'>Chira</h1>
            </div>
        </div>
        <div>
            <div className='p-3 bg-slate-200'>
            <img width={"250px"} src={chira} alt="" /></div>
            <div  className='bg-slate-200 p-3'>
            <h1 className='font-bold text-center text-2xl'>Chira</h1>
            </div>
        </div>
        <div>
            <div className='p-3 bg-slate-200'>
            <img width={"250px"} src={chira} alt="" /></div>
            <div  className='bg-slate-200 p-3'>
            <h1 className='font-bold text-center text-2xl'>Chira</h1>
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}
