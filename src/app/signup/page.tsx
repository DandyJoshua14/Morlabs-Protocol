import React from 'react'
import Layout from './Layout'
import "../globals.css";
import Whitelogo from '../_Components/Whitelogo';
const page = () => {
  return (

    <div className='p-3 bg-white box-border'>
         <div className='absolute lg:hidden top-[5%] left-[5%]'>
        <Whitelogo />
      </div>
        <Layout />     
    </div>

  )
}

export default page
