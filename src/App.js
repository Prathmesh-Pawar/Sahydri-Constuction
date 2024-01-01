<<<<<<< HEAD
import React, { useState ,useEffect } from 'react'
import axios from 'axios'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Bail from './Page/Bail'

import "./App.css"
import Bakasur from './Page/Bakasur'
import Home from './Page/Home'
import Contact from './Page/Contact'
import About from './Page/About'
import Maidaninput from './Page/Maidaninput'
import Bailinput from './Page/Bailinput'
import Maidan from './Page/Maidan'
import { Route,Routes } from 'react-router-dom'

export default function App() {
  useEffect(()=>{
    getbail() ; 
    getbail1() ;
  },[])
  const [arr , setarr] = useState([]) ; 
  const getbail = async()=>{
    const data1 = await axios.get("http://localhost:5000/api/bail/getall",{
    }, {
      headers: {
        'Content-Type': 'application/json' ,
      }}) ;  
      setarr(data1.data) ;
    }

 
    const [arr1 , setarr1] = useState([]) ; 
    const getbail1 = async()=>{
      const data1 = await axios.get("http://localhost:5000/api/maidan/getall",{
      }, {
        headers: {
          'Content-Type': 'application/json' ,
        }}) ;  
        setarr1(data1.data) ;
      }
  return (
    <div>

      <Header  />
      <Routes>
        <Route path="/" element={<Home arr={arr} arr1 = {arr1} />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/Maidan" element={<Maidan arr1={arr1}/>} />
        <Route path="/bail" element={<Bail arr={arr}/>} />
        <Route path="/bail/:name/:id" element={<Bakasur arr={arr}/>} />
        <Route path="/bailinput" element={<Bailinput/>} />
        <Route path="/maidaninput" element={<Maidaninput/>} />


        {/* <Bail/>
        <Bakasur/>
        <Home/>
        <Contact/>
        <About/>
        <Maidan/>
        <Bailinput/>
        <Maidaninput/> */}
      </Routes>
      <Footer/>
=======
import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Main from "./Components/Main"
import About from './Page/About'
import Services from './Page/Services'
import Contact from './Page/Contact'
import "./App.css"
import Products from './Page/Products'
import {   Route , Routes } from 'react-router-dom'
import Messages from "./Page/Messages"

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={
          <>
          <Header/>
          <Main/>
          <Services/>
          <Products/>
          <About/>
          <Contact/>
          <Footer/>
          </>
        }/>
        <Route path='/message' element={ <Messages/>}/>
      </Routes>

>>>>>>> 091138055e5912d19d41d0ac554afad795cd9fdf
    </div>
  )
}
