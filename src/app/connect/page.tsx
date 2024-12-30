import React from 'react'
import App from './mainpage'
import "../globals.css";
import Whitelogo from '../_Components/Whitelogo'
const page = () => {
  return (
    <div className='p-3 bg-white box-border flex justify-center items-center'>
      <div className='absolute top-[5%] left-[5%]'>
        <Whitelogo />
      </div>
      <App />
    </div>
  )
}

export default page
