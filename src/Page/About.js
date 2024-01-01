import React from 'react'
<<<<<<< HEAD

export default function About() {
  return (
    <div className='pt-20'>
      <h1 className='bg-black text-white text-2xl font-bold p-4 pt-6'>About Us</h1>
      <p className='p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ea nesciunt beatae eum ex reprehenderit, reiciendis, cupiditate esse doloremque inventore, nobis consectetur qui tenetur! Nulla, quidem, saepe explicabo exercitationem commodi omnis hic odit laboriosam fugiat voluptatibus, corrupti reprehenderit harum. Modi soluta dolor eius perferendis consectetur! Illo perspiciatis rem soluta vitae maiores molestiae voluptas illum necessitatibus beatae cum, excepturi ullam consequuntur est nam molestias in fugiat nulla inventore sint omnis. Aliquid maiores voluptas repellat veniam aperiam fuga aliquam! Sunt illo nulla debitis soluta excepturi ex. Quod consequuntur recusandae reprehenderit debitis, tenetur rem similique quisquam culpa sunt corporis quasi fugit eveniet natus?</p>
=======
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
>>>>>>> 091138055e5912d19d41d0ac554afad795cd9fdf
    </div>
  )
}
