import React from 'react'
import { Toaster } from 'react-hot-toast'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <section className='layout'>
    <Toaster></Toaster>
      <Outlet/>
    </section>
  )
}

export default Layout
