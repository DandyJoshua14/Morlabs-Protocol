import React from 'react'
import App from './mainpage'
import SideNav from '@/app/_Components/SideNav'
const Layout = () => {
  return (
    <div className='flex'>
    
        <SideNav />
  
        <App />
      
    </div>
  )
}

export default Layout
