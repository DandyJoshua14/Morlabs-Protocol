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
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showToaster, setShowToaster] = useState(false);
    const router = useRouter();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleSubmit = (e:any) => {
        e.preventDefault();
        setIsLoading(true);
        setShowToaster(true);
        
        setTimeout(() => {
            setIsLoading(false);
            setShowToaster(false);
            router.push('/login');
        }, 1000);
    };

    return (
        <div className='relative lg:ml-10 mt-24 lg:mt-10 bg-white text-[#000000] px-[40px] flex flex-col justify-center items-center lg:items-start'>
            {showToaster && (
                <div className='absolute top-5 right-5 bg-blue-500 text-white px-4 py-2 rounded'>
                    Account created successfully
                </div>
            )}
            <div className='md:text-[30px] text-[26px] text-black font-bold w-full text-center lg:text-left'>
                <p className='leading-none'> Create an account</p>
            </div>
            <p className='text-[14px] mt-[15px] text-[#94a3b8] w-full text-center lg:text-left'>
                Already have an account? <Link href='/login'><span className='text-[#1ab479] cursor-pointer'>Login</span></Link>
            </p>

            <form onSubmit={handleSubmit} className='mt-[30px] flex flex-col items-center lg:items-start space-y-[16px] p-2 md:w-full w-[90vw]'>
                <input placeholder='username' type="text" className='border rounded-md px-[24px] py-[16px] text-[#94a3b8] border-[#cbd5e1] bg-transparent w-full lg:w-[600px] h-[53px] box-border' />
                <input placeholder='Email' type="text" className='border rounded-md px-[24px] py-[16px] border-[#cbd5e1] bg-transparent text-[#94a3b8] w-full lg:w-[600px] h-[53px] box-border' />
                <div className='relative w-full lg:w-[600px]'>
                    <input placeholder='Enter your password' type={showPassword ? "text" : "password"} className='border bg-transparent rounded-md px-[24px] py-[16px] border-[#cbd5e1] text-[#94a3b8] w-full h-[56px] box-border' />
                    {showPassword ? (
                        <GoEye onClick={togglePasswordVisibility} className='absolute right-4 top-4 cursor-pointer' />
                    ) : (
                        <PiEyeClosedThin onClick={togglePasswordVisibility} className='absolute right-4 top-4 cursor-pointer' />
                    )}
                </div>
                <div className='relative w-full lg:w-[600px]'>
                    <input placeholder='confirm password' type={showConfirmPassword ? "text" : "password"} className='border bg-transparent rounded-md px-[24px] py-[16px] border-[#cbd5e1] text-[#94a3b8] w-full h-[53px] box-border' />
                    {showConfirmPassword ? (
                        <GoEye onClick={toggleConfirmPasswordVisibility} className='absolute right-4 top-4 cursor-pointer' />
                    ) : (
                        <PiEyeClosedThin onClick={toggleConfirmPasswordVisibility} className='absolute right-4 top-4 cursor-pointer' />
                    )}
                </div>
                <div className='flex items-center gap-x-2'>
                    <input type="checkbox" />
                    <p className='text-[0.8rem] md:text-[1rem]'>I agree to the <span className='text-[#1ab479] cursor-pointer'>Terms & Conditions</span></p>
                </div>

                <button
                    className='green-button'
                    type="submit"
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <div className='flex items-center justify-center'>
                            <div className="loader"></div>
                        </div>
                    ) : (
                        'Create account'
                    )}
                </button>
            
            </form>

            <div className='mt-[20px] w-full flex items-center justify-center gap-x-2'>
                <div className='md:w-[30%] w-[20%] h-[1px] bg-[#cbd5e1]'></div>
                <p className='text-[#94a3b8] text-[0.8rem] lg:text-[1rem]'>or register with</p>
                <div className='md:w-[30%] w-[20%] h-[1px] bg-[#cbd5e1]'></div>
            </div>

            <div className='my-[24px] flex flex-col lg:flex-row justify-center lg:justify-start space-y-4 lg:space-y-0 lg:space-x-4 items-center w-full p-2'>
                <button className='w-[70%] lg:w-[200px] rounded-lg flex items-center justify-center gap-x-2 h-[50px] border border-[#cbd5e1] bg-transparent'><Image src='/Symbol.png' alt='google' height={20} width={20} /> Google</button>
                <button className='w-[70%] lg:w-[200px] rounded-lg flex items-center justify-center gap-x-2 h-[50px] border border-[#cbd5e1] bg-transparent'><Image src='/apple.png' alt='apple' height={20} width={20} /> Apple</button>
                <button className='w-[70%] lg:w-[200px] rounded-lg flex items-center justify-center gap-x-2 h-[50px] border border-[#cbd5e1] bg-transparent'><Image src='/github.png' alt='google' height={20} width={20} /> Github</button>
            </div>
        </div>
    )
}

export default App
