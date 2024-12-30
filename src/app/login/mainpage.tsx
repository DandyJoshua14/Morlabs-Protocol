'use client'
import React, { useState } from 'react'
import '../globals.css'
import { PiEyeClosedThin } from "react-icons/pi";
import { GoEye } from "react-icons/go";
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const App = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleLoginClick = (e: any) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate an API call
        setTimeout(() => {
            setIsLoading(false);
            router.push('/verification');
        }, 1000);
    };

    return (
        <div className='lg:ml-10 mt-24 lg:mt-10 bg-white md:w-[100%] w-[95vw] text-[#000000] px-[40px] flex flex-col justify-center items-center lg:items-start'>
            <div className='md:text-[30px] text-[26px] text-black font-bold w-full text-center lg:text-left'>
                <p className='leading-none'> Welcome back!</p>
            </div>
            <p className='text-[14px] mt-[15px] text-[#94a3b8] w-full text-center lg:text-left'>
                Don&#39;t have an account? <Link href='/signup'><span className='text-[#1ab479]'>Signup</span></Link>
            </p>

            <form className='mt-[30px] flex flex-col items-center lg:items-start space-y-[16px] p-2 md:w-full w-full'>
                <input placeholder='Email' type="text" className='border rounded-md px-[24px] py-[16px] border-[#cbd5e1] bg-transparent text-[#94a3b8] w-full lg:w-[600px] h-[53px] box-border' />
                <div className='relative w-full lg:w-[600px]'>
                    <input placeholder='Enter your password' type={showPassword ? "text" : "password"} className='border bg-transparent rounded-md px-[24px] py-[16px] border-[#cbd5e1] text-[#94a3b8] w-full h-[56px] box-border' />
                    {showPassword ? (
                        <GoEye onClick={togglePasswordVisibility} className='absolute right-4 top-4 cursor-pointer' />
                    ) : (
                        <PiEyeClosedThin onClick={togglePasswordVisibility} className='absolute right-4 top-4 cursor-pointer' />
                    )}
                </div>
                <button
                    className='green-button'
                    onClick={handleLoginClick}
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <div className='flex items-center justify-center'>
                            <div className="loader"></div>
                        </div>
                    ) : (
                        'Login'
                    )}
                </button>
            </form>
        </div>
    )
}

export default App
