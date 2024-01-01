import React from 'react'
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
    </div>
  )
}
