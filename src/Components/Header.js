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
