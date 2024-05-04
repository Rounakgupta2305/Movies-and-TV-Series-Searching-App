import Header from './Components/Header'
import Footer from './Components/Footer'
import React from 'react'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Header/>
      <div id='app' className='bg-[#c4cad0] min-h-screen text-black md:pb-24 md:pt-14'>
        <Outlet/>
      </div>
      <Footer/>
    </>
  )
}

export default Layout