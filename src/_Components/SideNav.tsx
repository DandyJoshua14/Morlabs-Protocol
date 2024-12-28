import React from 'react'
import Logo from './Logo'
import '../app/globals.css'
const SideNav = () => {
    return (
        <div className='h-screen w-[45%] bg-black px-10 pb-5  relative rounded-lg text-white box-border p-10'>
            <div className='flex items-center justify-between w-full space-x-4'>
                <Logo />
                <button className='text-[#cbd5e1] h-[45px] w-[150px] hover:bg-[#cbd5e1] hover:text-black border-[1px] rounded-[40px] border-white bg-transparent'>
                    Back to website
                </button>

                
            </div>
            <div className='flex justify-center flex-col items-center absolute bottom-10 left-1/2 transform -translate-x-1/2'>
            <div className='flex flex-col justify-center items-center'>
                    <p className='text-white text-center w-[100%] text-[32px] font-bold whitespace-nowrap'>
                        Understanding Web3,
                    </p>
                    <p className='text-white text-center w-[100%] text-[32px] font-bold'>
                     Building In Web3
                    </p>

                </div>
                <div className='w-[70%] flex items-center justify-evenly mt-5'>
                    <div className='w-[40px] h-[6px] border-none bg-[#25feaa] rounded-sm'></div>
                    <div className='w-[40px] h-[6px] border-none bg-white rounded-sm'></div>
                    <div className='w-[40px] h-[6px] border-none bg-white rounded-sm'></div>
                </div>
            </div>
        </div>
    )
}

export default SideNav
