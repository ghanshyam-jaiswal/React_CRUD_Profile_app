import React from 'react'
import NavComponent from './../components/NavComponent';
import { Outlet } from 'react-router-dom';

const HomePage = () => {
  return (
    <section className='Homepage'>
      <NavComponent/>
      <Outlet/>
    </section>
  )
}

export default HomePage
