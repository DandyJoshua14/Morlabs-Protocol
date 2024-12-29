'use client'
import React, { useState } from 'react'
import '../globals.css'
import Image from 'next/image'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { BsCopy } from "react-icons/bs";

const App = () => {
    const [showDownloadOptions, setShowDownloadOptions] = useState(false);
    const [showFailedScreen, setShowFailedScreen] = useState(false);

    const handleDontHaveWalletClick = () => {
        setShowDownloadOptions(true);
        setShowFailedScreen(false);
    };

    const handleBackArrowClick = () => {
        setShowDownloadOptions(false);
        setShowFailedScreen(false);
    };

    return (
        <div className='mt-[90px] relative bg-white text-[#000000] border border-black rounded-2xl w-[80vw] h-[80vh] px-[40px] flex flex-col justify-center items-center'>
            <div className='absolute pl-5 pt-5 top-0 left-0 w-[480px] flex flex-col items-start space-y-[16px] border-r border-b border-black rounded-br-2xl p-4'>
                {[
                    { src: '/trust.png', alt: 'Trust Wallet', name: 'Trust wallet' },
                    { src: '/metamask.png', alt: 'Metamask', name: 'Metamask' },
                    { src: '/binance.png', alt: 'Binance Web3 Wallet', name: 'Binance Web3 Wallet' },
                    { src: '/coinbase.png', alt: 'Coinbase Wallet', name: 'Coinbase Wallet' },
                    { src: '/phantom.png', alt: 'Phantom', name: 'Phantom' },
                    { src: '/wallets.png', alt: 'All Wallets', name: 'All Wallets', extra: '50+' }
                ].map((wallet, index) => (
                    <div key={index} className='flex items-center gap-x-2 hover:bg-black hover:text-white rounded-lg pl-5 py-3 box-border h-[45px] cursor-pointer w-[400px]'>
                        <Image src={wallet.src} alt={wallet.alt} height={30} width={30} />
                        <p className='font-bold text-[0.9rem]'>{wallet.name}</p>
                        {wallet.extra && <p className='text-[#1ab479] flex justify-center items-center text-[0.7rem] rounded-sm h-7 w-7 bg-blue-200'>{wallet.extra}</p>}
                    </div>
                ))}
            </div>
            <div onClick={handleBackArrowClick} className='absolute left-[60%] rounded-full h-14 w-14 justify-center top-5 flex items-center cursor-pointer' >
                <MdOutlineKeyboardArrowLeft size={35} />
            </div>
            <div className='absolute flex flex-col justify-center items-center right-5 top-0 w-[400px] h-[100%] bg-transparent'>
                <div className='flex relative items-center'>

                    <p className='text-[2rem] font-bold'>Wallet</p>

                </div>
                {!showDownloadOptions && !showFailedScreen && (
                    <div className='flex justify-center items-center flex-col'>
                        <Image src='/QR code.png' alt='qr code' height={300} width={300} />
                        <p className='text-[0.8rem] text-[#1ab479] flex items-center gap-x-2 cursor-pointer hover:font-bold'><BsCopy />copy link</p>
                        <p className='text-center text-[#94a3b8] font-bold my-5'>Scan the QR code with the wallet app to connect</p>
                        <p className='text-[#1ab479] cursor-pointer hover:font-bold' onClick={handleDontHaveWalletClick}>Dont have a wallet?</p>
                    </div>
                )}
                {showFailedScreen && (
                    <div className='flex justify-center items-center flex-col'>
                        <div className='flex mt-5 rounded-lg justify-center items-center flex-col w-[400px] h-[240px] border-none bg-red-50'>
                            <Image src='/failed.png' className='mb-[40px]' alt='verified' height={90} width={90} />
                            <p className='text-red-500 font-bold'>Connection Failed</p>
                        </div>
                        <button className='rounded-md bg-red-500 px-[24px] py-[16px] border-none text-white mb-5 w-[400px] h-[50px] box-border mt-[40px]'>
                            Try again
                        </button>
                        <p className='text-[#1ab479] mb-8 mt-3 cursor-pointer' onClick={handleDontHaveWalletClick}>Don't have a wallet?</p>
                    </div>
                )}
                {showDownloadOptions && (
                    <div className='flex justify-center items-center flex-col gap-y-5 mt-[60px] mb-[180px]'>
                        <div className='w-[400px] cursor-pointer h-[50px] bg-gray-100 flex items-center justify-start pl-5 space-x-2 rounded-lg '>
                            <Image src='/chrome.png' alt='chrome' height={30} width={30} /> 
                            <p className='font-medium text-black'>Download a chrome extension</p>
                        </div>
                        <div className='w-[400px] cursor-pointer h-[50px] bg-gray-100 flex items-center justify-start pl-5 space-x-2 rounded-lg '>
                            <Image src='/playstore.png' alt='chrome' height={30} width={30} /> 
                            <p className='font-medium text-black'>Download wallet extension</p>
                        </div>
                        <div className='w-[400px] cursor-pointer h-[50px] bg-gray-100 flex items-center justify-start pl-5 space-x-2 rounded-lg '>
                            <Image src='/blackapple.png' alt='chrome' height={30} width={30} /> 
                            <p className='font-medium text-black'>Download wallet extension</p>
                        </div>
                    </div>
                )}
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
