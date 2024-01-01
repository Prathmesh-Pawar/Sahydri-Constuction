import React from 'react'
<<<<<<< HEAD
import Product from '../Components/Product'
export default function Products() {
    const arr = [1 ,2,3,4,5,6,6,7]

  return (
    <div className='bg-slate-300'> 

      <h1 className='text-center text-green-500 bg-slate-500 p-3 font-extrabold text-5xl' >Products</h1>
      <div className='flex flex-wrap gap-5'>
        {
            arr.map(()=>{
                return (<div>
                    <Product/>
                </div>)
            })
        }
        </div>
=======
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
>>>>>>> 091138055e5912d19d41d0ac554afad795cd9fdf
    </div>
  )
}
