import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    
    <div id='footer' className=' bg-black  text-white text-center my-auto'>
      <div className='py-4'>
      <div className='flex mx-auto flex-wrap justify-center my-5 list-none gap-5'>
      <li className='ease-in duration-100 hover:-translate-y-1.5'><a href="#home">Home</a> </li>|
                <li className='ease-in duration-100 hover:-translate-y-1.5 active:scale-90'><a href="#services">Services</a> </li>|
                <li className='ease-in duration-100 hover:-translate-y-1.5 active:scale-90'><a href="#products">Products</a> </li>|
                <li className='ease-in duration-100 hover:-translate-y-1.5 active:scale-90'> <a href="#about">About</a></li>|
                <li className='ease-in duration-100 hover:-translate-y-1.5 active:scale-90'> <a href="#contact">Contact</a></li>|
      </div>
      <div>      Copyright@2023 Sahyadri Construction
</div>

    </div>
    <div className='bg-slate-400 text-center'>
      <p className='inline float-right'><Link to="/admin">admin</Link></p>
  Developed By Prathmesh By &#10084;
</div>
    </div>
  )
}
