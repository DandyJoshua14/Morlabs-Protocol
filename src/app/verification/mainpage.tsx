'use client'
import React, { useState, useEffect } from 'react'
import '../globals.css'
import { PiEyeClosedThin } from "react-icons/pi";
import { GoEye } from "react-icons/go";
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const App = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [code, setCode] = useState(Array(5).fill(''));
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const value = e.target.value;
        if (value.length === 1) {
            const newCode = [...code];
            newCode[index] = value;
            setCode(newCode);

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

    useEffect(() => {
        if (code.every((digit) => digit !== '')) {
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false);
                router.push('/authenticated');
            }, 3000);
        }
    }, [code, router]);

    return (
        <div className='lg:ml-10 mt-24 lg:mt-10 bg-white text-[#000000] px-[40px] flex flex-col justify-center items-center lg:items-start'>
            <div className='md:text-[30px] text-[26px] text-black font-bold w-full text-center lg:text-left'>
                <p className='leading-none'> Welcome back!</p>
            </div>
            <p className='text-[14px] mt-[15px] text-[#94a3b8] w-full text-center lg:text-left'>
                Don&#39;t have an account? <Link href='/signup'><span className='text-[#1ab479]'>Signup</span></Link>
            </p>

            <form className='mt-[30px] flex flex-col items-center lg:items-start space-y-[16px] p-2 w-full'>
                <p className='font-bold'>Enter the verification code sent to athkinstestimony@gmail.com</p>
                <div className='flex flex-start space-x-[8px] items-center w-full lg:w-[480px] mb-[30px]'>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <input
                            key={index}
                            type="number"
                            maxLength={1}
                            className='border rounded-lg px-[12px] py-[16px] border-[#cbd5e1] bg-transparent text-[#94a3b8] w-[60px] lg:w-[80px] h-[53px] text-center'
                            onChange={(e) => handleChange(e, index)}
                            value={code[index]}
                            disabled={isLoading}
                        />
                    ))}
                </div>
                <button
                    className='rounded-md hover:bg-green-700 bg-[#1ab479] px-[24px] py-[16px] border-none text-white w-full lg:w-[480px] h-[50px] box-border mt-[40px]'
                    onClick={(e) => e.preventDefault()}
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
