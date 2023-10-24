import React, { useEffect, useState } from 'react'
import axios from "axios"

export default function Messages() {

    const[data ,setdata] = useState([]) ;
    useEffect(
        ()=>{
            fetch1()
        }
         , []) ;

    const fetch1 =async ()=>{
        const url = "http://localhost:5000/api/message/get"
       const data1   = await axios.get(url) ;
       console.log(data1);
       setdata(data1.data) ;
}
  return (
    <div >
        <table className='w-full border-5'>
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
        </table>
    </div>
  )
}
