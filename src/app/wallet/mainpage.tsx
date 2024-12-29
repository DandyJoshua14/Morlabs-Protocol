'use client'
import React, { useState } from 'react'
import '../globals.css'
import Image from 'next/image'
import { CiSearch } from "react-icons/ci";

const App = () => {

    return (
        <div className='ml-10 mt-10 bg-white text-[#000000] px-[40px] flex flex-col justify-center items-center'>
            
            
            <div className='text-[30px] mt-[60px] text-black font-bold mb-[24px]'>
                <p className='leading-none'> Select wallet</p>
            </div>

            <div className='h-[64px] flex items-center px-14 space-x-2 w-[480px] border border-[#1ab479] rounded-lg'>
               <CiSearch size={25} className='text-black' />
               <input type="text" placeholder='search wallet' className='outline-none w-[100%] px-2 font-bold custom-cursor' />
            </div>

            <div className='mt-[60px] mb-[60px] w-[480px] flex flex-col items-start space-y-[16px]'>
                <div className='flex items-center gap-x-2 hover:bg-black hover:text-white rounded-lg  pl-5 py-5 box-border h-[55px] cursor-pointer w-[480px]'>
                    <Image src='/trust.png' alt='Trust Wallet' height={40} width={40} />
                    <p className='font-bold text-[1rem]'>Trust wallet</p>
                </div>
                
                <div className='flex items-center gap-x-2 hover:bg-black hover:text-white rounded-lg  pl-5 py-5 box-border h-[55px] cursor-pointer w-[480px]'>
                    <Image src='/metamask.png' alt='Trust Wallet' height={40} width={40} />
                    <p className='font-bold text-[1rem]'>Metamask</p>
                </div>
                <div className='flex items-center gap-x-2 hover:bg-black hover:text-white rounded-lg  pl-5 py-5 box-border h-[55px] cursor-pointer w-[480px]'>
                    <Image src='/binance.png' alt='Trust Wallet' height={40} width={40} />
                    <p className='font-bold text-[1rem]'>Binance Web3 Wallet</p>
                </div>
                <div className='flex items-center gap-x-2 hover:bg-black hover:text-white rounded-lg  pl-5 py-5 box-border h-[55px] cursor-pointer w-[480px]'>
                    <Image src='/coinbase.png' alt='Trust Wallet' height={40} width={40} />
                    <p className='font-bold text-[1rem]'>Coinbase Wallet</p>
                </div>
                <div className='flex items-center gap-x-2 hover:bg-black hover:text-white rounded-lg  pl-5 py-5 box-border h-[55px] cursor-pointer w-[480px]'>
                    <Image src='/phantom.png' alt='Trust Wallet' height={40} width={40} />
                    <p className='font-bold text-[1rem]'>Phantom</p>
                </div>
                <div className='flex items-center gap-x-2 hover:bg-black hover:text-white rounded-lg  pl-5 py-5 box-border h-[55px] cursor-pointer w-[480px]'>
                    <Image src='/wallets.png' alt='Trust Wallet' height={40} width={40} />
                    <p className='font-bold text-[1rem]'>All Wallets</p>
                    <p className='text-[#1ab479] flex justify-center items-center text-[0.7rem] rounded-sm h-7 w-7 bg-blue-200'>50+</p>
                </div>
             
            </div>
        
        </div>
    )
}

const styles = `
    .custom-cursor {
        caret-color: #1ab479;
    }

    .custom-cursor::placeholder {
        color: #94a3b8;
    }

    .custom-cursor:focus::placeholder {
        animation: blink 1s step-end infinite;
        color: transparent;
    }

    @keyframes blink {
        50% {
            color: #1ab479;
        }
    }
`;

if (typeof document !== 'undefined') {
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
}

export default App
