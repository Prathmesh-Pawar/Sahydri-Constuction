import React from 'react'

export default function Contact() {
  return (
    <div className='pt-20'>
        <div>
            <h1 className='bg-black text-white p-2 px-6 py-4 pt-6 border-white border-b-2'>Contact Us</h1>
            <div className='bg-black p-2 mt- text-white px-6'>
                <div className='my-1'>
                <label className='me-2' htmlFor="name">Enter Your Name</label>
                <br />
                <input className='w-full text-black' id="name" type="text" name=""  /></div>
                <div className='my-3'>
                <label className='me-2' htmlFor="name">Enter Your Number</label>
                <br />
                <input className='w-full text-black' id="name" type="number" name=""  /></div>
                <div className='my-3'>
                <label className='me-2' htmlFor="name">Enter Your Message</label>

                <textarea className='w-full text-black' name="" id=""  rows="5"></textarea>
                </div>
               
            </div>
            <h1 className='bg-black text-white px-6  p-3 py-5 border-t-2'>Our Contact Info</h1>
            <div className='px-6 py-4'>
            <p>Mobile : 9096230379</p>
            <p>Email : prathmeshpawaru@gmail.com</p>
            </div>
      </div>
    </div>
  )
}
