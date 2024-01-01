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
        <Route path='/admin' element={ <Messages/>}/>
      </Routes>

    </div>
  )
}
