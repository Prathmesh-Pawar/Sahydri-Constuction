<<<<<<< HEAD
import React, { useState } from "react";
import jp from "../Images/jp.webp";
import { Link } from "react-router-dom";

export default function Header() {
  const[check , setcheck] = useState(false) ;


  return (
    <div className="fixed w-screen">
      <header className="bg-white z-40">
        <div className="p-3 flex ">
          <img className="w-10" src={jp} alt="" />
          <h1 className="text-black my-auto ms-2 font-extrabold">
            Bailgada Sharyat
          </h1>
        </div>
        {/* <div className="bg-black text-white text-xs py-1">{str}</div> */}

        <label
          // htmlFor="menu-t"
          className="flex z-50  absolute top-4 mt-2 right-4 lg:hidden active:scale-90"
          onClick={()=>{setcheck(!check)}}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="bg-white"
            height="1.3em"
            viewBox="0 0 448 512"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </label>
        <input type="checkbox" className="hidden" id="menu-t" />
{ 
        check && <div
          className="text-white  bg-black bg-opacity-90 w-screen h-screen text-center z-50"
          id="menu"
        >
          <ul className="block text-center">
            <li className="border-white border-y-2 py-3">          
                  <Link onClick={()=>{setcheck(false)}} to="/">Home</Link>
            </li>
            <li className="border-white border-y-2 py-3">
                <Link  onClick={()=>{setcheck(false)}}to="/bail">Bail</Link>
            </li>
            <li className="border-white border-y-2 py-3 ">
                <Link onClick={()=>{setcheck(false)}} to="/maidan">Maidan</Link>
            </li>
            <li className="border-white border-y-2 py-3 ">
                <Link onClick={()=>{setcheck(false)}} to="/maidan">Gada Malak</Link>
            </li>
            <li className="border-white border-y-2 py-3 ">
                <Link onClick={()=>{setcheck(false)}} to="/maidan">Drivers</Link>
            </li>
            <li className="border-white border-y-2 py-3 ">
                <Link onClick={()=>{setcheck(false)}} to="/contact">Contact</Link>
            </li>
            <li className="border-white border-y-2 py-3 ">
                <Link onClick={()=>{setcheck(false)}} to="/about">About</Link>
            </li>
          </ul>
        </div>}
      </header>
    </div>
  );
} 
=======
import React from 'react'
import jp from "../Images/SC.png"

export default function Header() {
  return (
    <div className='fixed w-screen z-10 '>
        <header className='bg-black lg:flex bg-opacity-70'>
            <div className='ms-3 p-2 h-28 len flex '><img  className=''  src={jp} alt="" />
            <h1 className='text-white my-auto ms-2 font-extrabold  text-6xl'></h1>
            </div>
            
            <label htmlFor='menu-t' className='flex z-50  absolute top-4 mt-2 right-4 lg:hidden active:scale-90'>
            <svg xmlns="http://www.w3.org/2000/svg" className='bg-white' height="1.3em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
            </label>
            <input className='hidden' id="menu-t" type="checkbox" />
            <div className='hidden lg:bg-transparent lg:flex text-white my-auto mx-auto ' id='menu'>
              <ul className='block  text-center items-center lg:flex gap-9'>
                <li className='ease-in duration-100 lg:hover:-translate-y-1.5 active:scale-90'><a href="#home">Home</a> </li>
                <li className='ease-in duration-100 lg:hover:-translate-y-1.5 active:scale-90'><a href="#services">Services</a> </li>
                <li className='ease-in duration-100 lg:hover:-translate-y-1.5 active:scale-90'><a href="#products">Products</a> </li>
                <li className='ease-in duration-100 lg:hover:-translate-y-1.5 active:scale-90'> <a href="#about">About</a></li>
                <li className='ease-in duration-100 lg:hover:-translate-y-1.5 active:scale-90'> <a href="#contact">Contact</a></li>
              </ul>
            </div>
           
        </header>
    </div>
  )
}
>>>>>>> 091138055e5912d19d41d0ac554afad795cd9fdf
