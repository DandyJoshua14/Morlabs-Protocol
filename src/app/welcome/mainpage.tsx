import React from 'react'
import '../globals.css' // Add this line to import global styles
const App = () => {
    return (
        <div className='h-screen w-[100%] bg-white text-[#000000] px-[40px] flex flex-col justify-start items-start'>
            <div>
                <p> THE RISE OF </p> <p> A WEB3 SMART WORLD </p>
            </div>
            <p>
                Welcome to all things Web3,
            </p>
        
            <button className='w-[114px] h-[48px] text-[#ffffff] bg-[#1ab479] rounded-[45px]'>Get started</button>
        </div>
    )
}

export default App
