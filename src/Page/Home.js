import React, {  } from 'react'
import im1 from "../Images/ob2.webp"
import { Link } from 'react-router-dom'

export default function Home(props) {
    const narr = props.arr.slice(0,4);
    const narr1 = props.arr1.slice(0,8) ;
   console.log(narr) ;
  return (
    <div className='pt-20'>
      <div className=''>
        <div className='flex flex-wrap gap-3 px-2 text-center bg-slate-300 p-2'>
           {
            narr.map((ele)=>{
                return (
                <div><img className='border-2 border-black  w-20 bg-white  rounded-full' src={im1} alt="" /><p className='p-0 m-0'>{ele.name}</p></div>
                )
            })
           }
        </div>
        <div>
            <h1 className='bg-white border-black m-2 border-2 rounded-lg  text-center active:scale-90 transition-transform cursor-pointer '>
            <Link to="/maidaninput" >Aple Maidana Baddal mahiti dya</Link></h1>
        </div>
        <div className='px-2'>
        <h1 className='bg-black text-white mt-2 p-2' >Pudhil Maidane</h1>
        <div className='flex flex-wrap gap-2 justify-between bg-slate-400 p-2 text-center'>
            {
                narr1.map((ele)=>{
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
                narr1.map((ele)=>{
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
    </div>
  )
}
