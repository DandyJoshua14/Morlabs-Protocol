import React from 'react'
import '../globals.css'
import Link from 'next/link'
const App = () => {
    return (
        <div className=' ml-10 bg-white text-[#000000] px-[40px] flex flex-col justify-center items-start'>
            <div className='text-[45px] text-black font-bold'>
                <p className='leading-none'> THE RISE OF <br /> A WEB3 SMART WORLD </p>
            </div>
            <p className='text-[18px] font-bold mt-[15px]'>
                Welcome to all things Web3
            </p>
        
           <Link href='/signup'> <button className='w-[116px] hover:bg-green-800 mt-[40px] h-[45px] text-[#ffffff] bg-[#1ab479] rounded-[45px]'>Get started</button></Link>
        </div>
    )
}

export default App
