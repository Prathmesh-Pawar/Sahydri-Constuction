import React, { useState } from 'react'
import "./Home.css" ;



export default function Home() {
    const [bgColor , setbg ] = useState("red") ;

    const toggle = ()=>{
        if(bgColor==="red")
        {
            setbg("orange") ;
        }else
        {
            setbg("red") ;
        }
        console.log(bgColor) ;
    }
  return (
    <div className='hd1' style={{backgroundColor : bgColor}}>
      <button onClick={toggle} className='btn'>Toggle Background</button>
    </div>
  )
}
