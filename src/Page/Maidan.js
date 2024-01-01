import React from 'react'
import im1 from "../Images/ob2.webp"
import { Link } from 'react-router-dom';

export default function Maidan(props) {
   

   
  return (
    <div className='pt-24'>
      <div>
            <h1 className='bg-white border-black m-2 border-2 rounded-lg  text-center active:scale-90 transition-transform cursor-pointer'><Link to="/maidaninput">Aple Maidana Baddal mahiti dya</Link></h1>
        </div>
        <div className='px-2'>
        <h1 className='bg-black text-white mt-2 p-2' >Pudhil Maidane</h1>
        <div className='flex flex-wrap gap-2 justify-between bg-slate-400 p-2 text-center'>
            {
                props.arr1.map((ele)=>{
                    return <div className='bg-red-300 w-40 border-black border-2'>
                        <img src={im1} alt="" />
                        <div>
                            <h1>{ele.name}</h1>
                            <span className='text-sm'>Umbarde</span>
                            <span className='text-sm ms-2'>1000RS</span>
                        </div>
                    </div>
                })
            }
        </div>
        </div>
        <div className='px-2'>
        <h1 className='bg-black text-white mt-2 p-2' >Magil Maidane</h1>
        <div className='flex flex-wrap gap-2 justify-between bg-slate-400 p-2 text-center'>
            {
                props.arr1.map((ele)=>{
                    return <div className='bg-red-300 w-40 border-black border-2'>
                        <img src={im1} alt="" />
                        <div>
                            <h1>{ele.name}</h1>
                            <span className='text-sm'>Umbarde</span>
                            <span className='text-sm ms-2'>1000RS</span>
                        </div>
                    </div>
                })
            }
        </div>
        </div>
    </div>
  )
}
