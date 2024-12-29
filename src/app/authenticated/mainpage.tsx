'use client'
import React, { useState } from 'react'
import '../globals.css'
import Image from 'next/image'
const App = () => {

    return (
        <div className='ml-10 mt-10 bg-white text-[#000000] px-[40px] flex flex-col justify-center items-center'>
            
           <Image src='/veri.png' className='mb-[40px]' alt='verified' height={90} width={90} />
           
            <div className='text-[30px] text-black font-bold'>
                <p className='leading-none'> Authentication completed</p>
            </div>
           

            <div className='mt-[20px] flex flex-col items-center space-y-[16px]'>
                <p className='font-bold mb-[30px]'>Proceed to connect your wallet</p>
              
                <button
                    className='rounded-md bg-[#1ab479] px-[24px] py-[16px] border-none text-white w-[480px] h-[50px] box-border mt-[40px]'
                >
                    Connect wallet
                </button>
            </div>
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
