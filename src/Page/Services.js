import React from 'react'
import cn from "../Images/cn.png"
export default function Products() {

  return (
    <div className='bg-white py-10    ' id='services'>
      <div className='mlx'>
 <div className='flex py-2 my-5 '>
      <div className='h-10 me-2 mb-5 w-3 bg-yellow-300'></div><h1 className=' text-black  text-4xl font-bold'>Services</h1>
      </div>

      <div className='flex gap-5 text-center flex-wrap justify-center'>
      <div className='bg-slate-400 p-4 max-w-xs'>
        <img className='w-16 mx-auto' src={cn} alt="" />
        <h1 className='font-bold text-2xl'>Constuction</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus officia dignissimos odit vero obcaecati! Tempora sint quas numquam expedita ea?</p>

        </div>
        <div className='bg-slate-400 p-4 max-w-xs'>
        <img className='w-16 mx-auto' src={cn} alt="" />
        <h1 className='font-bold text-2xl'>Constuction</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus officia dignissimos odit vero obcaecati! Tempora sint quas numquam expedita ea?</p>

        </div> <div className='bg-slate-400 p-4 max-w-xs '>
        <img className='w-16 mx-auto' src={cn} alt="" />
        <h1 className='font-bold text-2xl'>Constuction</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus officia dignissimos odit vero obcaecati! Tempora sint quas numquam expedita ea?</p>

        </div>
         <div className='bg-slate-400 p-4 max-w-xs'>
        <img className='w-16 mx-auto' src={cn} alt="" />
        <h1 className='font-bold text-2xl'>Constuction</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus officia dignissimos odit vero obcaecati! Tempora sint quas numquam expedita ea?</p>

        </div>
      </div>


      </div>
    </div>
  )
}
