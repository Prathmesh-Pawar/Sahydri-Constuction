import React from 'react'
import im1 from "../Images/ORGABIC.png"
import im2 from "../Images/ob2.webp"
import { useParams } from 'react-router-dom'

export default function Bakasur(props) {
  const params = useParams() ;
  const name = params.name ;
  const ele = props.arr[params.id] ;
  
  console.log(ele) ;
  return (
    <div className='pt-24 h-screen w-screen'>
      <div className='px-4'>
        <div className='border-2 border-black border-b-0'>
            <img className='relative w-full h-20 -z-20 border' src={im2} alt="" />
        </div>
        <div className='border-x-2 border-black '>
            <img className='border-2 border-black relative w-20 p-1 bg-white mx-auto -z-10 -top-7 rounded-full' src={im1} alt="" />
        </div>
        <div className='relative -z-10 -top-9 border-2 flex flex-col gap-3 border-black p-4 border-t-0'>
            <h1 className='text-center underline'>{name}</h1>
            {ele.Address.Village && <p>Village : {ele.Address.Village} </p>}
            {ele.Address.Taluka && <p>Taluka : {ele.Address.Taluka} </p>}
            {ele.Address.District && <p>District : {ele.Address.District} </p>}
            {ele.malak && <p>malak : {ele.malak} </p>}
            {/* <p>sharir cahngle ahe suruvatila changala speed ahe . public ne speed ahe</p> */}
        </div>
      </div>
    </div>
  )
}
