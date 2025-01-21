import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
const SideNav = () => {
    return (
        <div className='sm:visible md:h-[97vh] h-[100vh] w-[100%] bg-black px-10 pb-5 relative md:rounded-lg text-white box-border p-10 sm:flex flex-col md:items-start'>
            <div className='flex items-center justify-between w-full space-x-4'>
                <Logo />
                <Link href='/'><button className='text-[#cbd5e1] lg:h-[45px] h-[35px] text-[0.8rem] lg:text-[0.9rem] w-[100px] lg:w-[150px] hover:bg-[#cbd5e1] hover:text-black border-[1px] rounded-[40px] border-[#cbd5e1] hover:border-none bg-transparent'>
                    <span className='hidden lg:inline'>Back to home</span>
                    <span className='lg:hidden'>Home</span>
                </button></Link>
            </div>
            <div className='flex justify-center flex-col items-center absolute bottom-20 md:bottom-10 left-1/2 transform -translate-x-1/2'>
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-white text-center w-[100%] md:text-[28px] lg:text-[32px] text-[32px] whitespace-nowrap'>
                        Understanding Web3,
                    </p>
                    <p className='text-white text-center w-[100%] md:text-[28px] lg:text-[32px] text-[32px]'>
                        Building In Web3
                    </p>

                </div>
                <div className='w-[150px] flex items-center justify-evenly mt-5'>
                    <div className='w-[40px] h-[6px] border-none bg-[#25feaa] rounded-sm'></div>
                    <div className='w-[40px] h-[6px] border-none bg-white rounded-sm'></div>
                    <div className='w-[40px] h-[6px] border-none bg-white rounded-sm'></div>
                </div>

                <Link href='/signup'> <button className='w-[116px] hover:bg-green-800 mt-[40px] h-[45px] text-[#ffffff] bg-[#1ab479] rounded-[45px] md:hidden'>Get started</button></Link>
            </div>
        </div>
    )
}

export default SideNav
