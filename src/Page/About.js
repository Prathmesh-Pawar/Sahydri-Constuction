import React from 'react'
import vid from "../Video/vid.mp4"

export default function About() {
  return (
    <div className='bg-white py-10 pt-28 ' id='about'>
      
      <div className='mlx'>
      <div className='flex py-7 '>
      <div className='h-10 me-2 mb-5 w-3 bg-yellow-300'></div><h1 className=' text-black  text-4xl font-bold'>About Us</h1>
      </div>
      <div className='flex flex-wrap-reverse justify-around'>
        <video  width ="500px"   autoPlay muted loop ><source src={vid} type="video/mp4"/></video>
          <div className='fo1 my-auto font-extrabold text-8xl mx-auto'><h1 className='text-center'>Sahydri</h1>
          <h1>Construction</h1></div>  
      </div>
      <div className='flex flex-wrap my-10 text-black gap-5 justify-around'>
        <div className='bg-black bg-opacity-10 p-4 border-4 border-black  max-w-xl'>
          <h1 className='font-extrabold text-3xl'>Vision</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem reiciendis optio enim? Numquam eaque magni autem unde, possimus ad reprehenderit? Culpa ipsam a libero sint animi voluptate nisi soluta consectetur quidem, eum iusto corrupti, porro est minus eos recusandae assumenda. Provident, sint reiciendis? Iusto unde alias natus dolore fugit quo excepturi facilis ea corporis velit explicabo reprehenderit magnam modi in ex necessitatibus nisi expedita, pariatur corrupti optio? Officiis dolorem iusto eveniet, earum doloremque distinctio laborum reprehenderit eius rem odit nulla facere nam minima ratione velit vero, id iure cupiditate porro consequuntur, aspernatur ducimus. Nemo iure placeat, delectus at modi quibusdam.</p>
        </div>
        <div className='bg-black bg-opacity-10 p-4 border-4 border-black max-w-xl'>
          <h1 className='font-extrabold text-3xl'>Mission</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem reiciendis optio enim? Numquam eaque magni autem unde, possimus ad reprehenderit? Culpa ipsam a libero sint animi voluptate nisi soluta consectetur quidem, eum iusto corrupti, porro est minus eos recusandae assumenda. Provident, sint reiciendis? Iusto unde alias natus dolore fugit quo excepturi facilis ea corporis velit explicabo reprehenderit magnam modi in ex necessitatibus nisi expedita, pariatur corrupti optio? Officiis dolorem iusto eveniet, earum doloremque distinctio laborum reprehenderit eius rem odit nulla facere nam minima ratione velit vero, id iure cupiditate porro consequuntur, aspernatur ducimus. Nemo iure placeat, delectus at modi quibusdam.</p>
        </div>
      </div>
      <div className='flex flex-wrap gap-4 text-center justify-around'>
        <div className='bg-slate-300 p-4 basis-1/4 py-8'>
          <h1 className='text-center font-bold text-3xl'>10+</h1>
          <p>Years Of Expeience</p>
        </div>
        <div className='bg-slate-300 p-4 basis-1/4  py-8'>
          <h1 className='text-center font-bold text-3xl'>10+</h1>
          <p>Years Of Expeience</p>
        </div><div className='bg-slate-300 p-4 basis-1/4  py-8'>
          <h1 className='text-center font-bold text-3xl'>10+</h1>
          <p>Years Of Expeience</p>
        </div><div className='bg-slate-300 p-4 basis-1/4  py-8'>
          <h1 className='text-center font-bold text-3xl'>10+</h1>
          <p>Years Of Expeience</p>
        </div>
      </div>
      </div>
    </div>
  )
}
