import React from 'react'
import App from './mainpage'
import SideNav from '@/app/_Components/SideNav'
const Layout = () => {
  return (
    <div className='flex'>
    
    <div className='hidden md:flex md:w-[50%] lg:w-[45%] w-[100%]'>
        <SideNav />
      </div>

      <div className='md:w-[50%] lg:w-[55%]'>
        <App />
      </div>
    </div>
  )
}

export default Layout
