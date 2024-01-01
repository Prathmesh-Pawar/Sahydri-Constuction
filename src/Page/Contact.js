<<<<<<< HEAD
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
=======
import React, { useState } from "react";
import insta from "../Images/instagram.png";
import gmail from "../Images/gmail.png";
import axios from "axios"
export default function Contact() {

  const[data , setdata ] = useState({name : "" , email :"" , phone:"" , message:""}) ;

  const insethandler = async (e)=>{
    e.preventDefault() ;
    const url = "http://localhost:5000/api/message/insert" ;
    const data1 = await axios.post(url,{
     name : data.name , email : data.email , phone:data.phone , message : data.message
    }, {
      headers: {
        'Content-Type': 'application/json' ,
      }}) ;    console.log(data1) ;
  }

  const onchangeHandler = (e)=>{
  const key1 = e.target.name ;
    const value = e.target.value ;
    setdata({...data , [key1]: value}) ;
  }
  return (
    <div className="bg-orange-500 text-white py-10 pt-28 " id="contact">
      <div className="mlx">
        <div className="flex py-1 mt-5 mb-1">
          <div className="h-10 me-2 mb-5 w-3 bg-blue-800"></div>
          <h1 className=" text-black  text-4xl font-bold">Contact Details</h1>
        </div>
        <div className="border-2 border-black  p-3 bg-blue-400 text-2xl ps-10 fo2  ">
          <p>
          Satara,MaharaShtra
          <br />
          Phone : 08037405236
          <br />
          Email : prathmeshpawaru@gmail.com</p>
        </div>
        
        <div className="flex bg-black gap-4   p-2">
          <button className=" hover:scale-110 active:scale-90">
            <img width={"20px"} src={insta} alt="" />
          </button>
          <button className="hover:scale-110 active:scale-90"> 
            <img width={"20px"} src={gmail} alt="" />
          </button>
        
        </div>

        <div className="flex py-1 mt-20 mb-1 text-black">
          <div className="h-10 me-2 mb-5 w-3 bg-blue-800"></div>
          <h1 className=" text-black  text-4xl font-bold">Get in Touch</h1>
        </div>
        <form onSubmit={insethandler} >
        <div className="flex flex-wrap gap-10">
          <div className="flex  flex-col gap-7">
            <div className="">
              <div></div>
              <label className="bg-black p-4  " htmlFor="name">
                Name
              </label>
              <input onChange={onchangeHandler} name="name" value={data.name} className="p-4 text-black " type="text" name="name" id="name" />
            </div>
            <div className="  ">
              <label className="bg-black p-4  " htmlFor="name">
                Email
              </label>
              <input onChange={onchangeHandler} name="email" value={data.email} className="text-black p-4 " type="text" name="email" id="name" />
            </div>
            <div className="">
              <label className="bg-black p-4  " htmlFor="name">
                Phone
              </label>
              <input onChange={onchangeHandler} name="phone" value={data.phone} className="text-black p-4  " type="text" name="phone" id="name" />
            </div>
          </div>
          <div className="flex flex-col basis-3/4 ">
            <label className="bg-black p-4" htmlFor="mess">
              Message
            </label>
            <textarea
              onChange={onchangeHandler}
              name="message"
              value={data.message}
              className="text-black p-4 wf1"
              name="message"
              id="mess"
              cols="30"
              rows="6"
            ></textarea>
          </div>
        </div>
        <div className="my-4">
          <button type="submit" className="button-28  w-full hover:bg-black">
            Send Message
          </button>
        </div>
        </form>

      </div>
    </div>
  );
>>>>>>> 091138055e5912d19d41d0ac554afad795cd9fdf
}
