import React, { useEffect, useState } from 'react'
import axios from "axios"

export default function Messages() {

    const[data ,setdata] = useState([]) ;
    const[password , setpassword] = useState() ;
    const [pass, setpass] = useState(false) ;
    useEffect(
        ()=>{
            fetch1()
        }
         , []) ;

    const fetch1 =async ()=>{
        // const url = "http://localhost:5000/api/message/get"
        
        const url = "https://sc-backend1.onrender.com/api/message/get"


       const data1   = await axios.get(url) ;
       console.log(data1);
       setdata(data1.data) ;
}
const inhand = ()=>{
    if(password==="12345")
    {
        setpass(true) ;
    }else{
        setpass(false) ;
    }
}
const onch = (e)=>{
    setpassword(e.target.value) ;
}
  return (
    <div >
        
        
        {!pass ?<div>
            <label htmlFor="in">Enter Password</label>
            <input onChange={onch} name='password' value={password} className='bg-red-300' type="text" id="in"/>
            <button className='' onClick={inhand}>Submit</button>
        </div>:
         <table className=' w-full border-5'>
            <tr className=''>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Message</th>
            </tr>

        {
            data.map((element)=>{
                return <tr className='my-10 gap-5'>
                <td className='mx-10'>{element.name}</td>
                <td className='mx-10'>{element.email}</td>
                <td className='mx-10'>{element.phone}</td>
                <td className='mx-10'>{element.message}</td>
            </tr>
            })
        }
        </table> }
    </div>
  )
}
