'use client'
import React, { useState } from 'react'
import '../globals.css'
import { PiEyeClosedThin } from "react-icons/pi";
import { GoEye } from "react-icons/go";
import Image from 'next/image';
import Link from 'next/link';
const App = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        if (e.target.value.length === 1) {
            const nextSibling = document.querySelectorAll('input')[index + 1] as HTMLInputElement;
            if (nextSibling) {
                nextSibling.focus();
            }
            e.target.style.borderColor = '#1ab479';
            e.target.style.borderWidth = '2px';
            e.target.style.color = '#1ab479';
            e.target.style.fontWeight = 'bold';
            e.target.style.fontSize = '24px';
        } else {
            e.target.style.borderColor = '#cbd5e1';
            e.target.style.borderWidth = '1px';
            e.target.style.color = '#94a3b8';
            e.target.style.fontWeight = 'normal';
            e.target.style.fontSize = '16px';
            e.target.value = '';
            const prevSibling = document.querySelectorAll('input')[index - 1] as HTMLInputElement;
            if (prevSibling) {
                prevSibling.focus();
            }
        }
    };

    const handleButtonClick = () => {
        setIsLoading(true);
        // Simulate an API call
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    };

    return (
        <div className='ml-10 mt-10 bg-white text-[#000000] px-[40px] flex flex-col justify-center items-start'>
            <div className='text-[30px] text-black font-bold'>
                <p className='leading-none'> Welcome back!</p>
            </div>
            <p className='text-[14px] mt-[15px] text-[#94a3b8]'>
                Don&#39;t have an account? <Link href='/signup'><span className='text-[#1ab479]'>Signup</span></Link>
            </p>

            <form className='mt-[30px] flex flex-col items-start space-y-[16px]' action="">
                <p className='font-bold'>Enter the verification code sent to athkinstestimony@gmail.com</p>
                <div className='flex flex-start space-x-[8px] items-center w-[480px] mb-[30px]'>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <input
                            key={index}
                            type="number"
                            maxLength={1}
                            className='border rounded-lg px-[12px] py-[16px] border-[#cbd5e1] bg-transparent text-[#94a3b8] w-[80px] h-[53px] text-center'
                            onChange={(e) => handleChange(e, index)}
                        />
                    ))}
                </div>
                <button
                    className='rounded-md bg-[#1ab479] px-[24px] py-[16px] border-none text-white w-[480px] h-[50px] box-border mt-[40px]'
                    onClick={handleButtonClick}
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <div className='flex items-center justify-center'>
                            <div className="loader"></div>
                        </div>
                    ) : (
                        'Resend verification code'
                    )}
                </button>
            </form>
        </div>
    )
}

// Add CSS for the loader
const styles = `
    .loader {
        border: 4px dotted #fff;
        border-radius: 50%;
        width: 24px;
        height: 24px;
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;

// Inject styles into the document head
if (typeof document !== 'undefined') {
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
}

export default App
