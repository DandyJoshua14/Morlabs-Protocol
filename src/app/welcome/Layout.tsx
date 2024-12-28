import React from 'react'
import App from './mainpage'
import SideNav from '@/_Components/SideNav'
const Layout = () => {
  return (
    <div className='w-screen h-screen flex'>
    
        <SideNav />
      <div className='w-[55%]'>
        <App />
      </div>
    </div>
  )
}

export default Layout
