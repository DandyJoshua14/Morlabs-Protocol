'use client'
import React, { useState } from 'react'
import '../globals.css'
import Image from 'next/image'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { BsCopy } from "react-icons/bs";
import { useRouter } from 'next/navigation';

const App = () => {
    const [showDownloadOptions, setShowDownloadOptions] = useState(false);
    const [showFailedScreen, setShowFailedScreen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleDontHaveWalletClick = () => {
        setShowDownloadOptions(true);
        setShowFailedScreen(false);
    };

    const handleBackArrowClick = () => {
        if (!showDownloadOptions && !showFailedScreen) {
            router.push('/wallet');
        } else {
            setShowDownloadOptions(false);
            setShowFailedScreen(false);
        }
    };

    const handleTryAgainClick = () => {
        setIsLoading(true);
        // Simulate an API call
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    };

    return (
        <div className='mt-[90px] relative bg-white text-[#000000] border border-black rounded-2xl w-[90vw] h-[90vh] px-[20px] md:px-[40px] flex flex-col justify-center items-center'>
            <div className='absolute pl-5 pt-5 top-0 left-0 w-[320px] md:w-[40%] lg:w-[480px] flex-col items-start space-y-[16px] border-r border-b border-black rounded-br-2xl p-4 hidden md:flex'>
                {[
                    { src: '/trust.png', alt: 'Trust Wallet', name: 'Trust wallet' },
                    { src: '/metamask.png', alt: 'Metamask', name: 'Metamask' },
                    { src: '/binance.png', alt: 'Binance Web3 Wallet', name: 'Binance Web3 Wallet' },
                    { src: '/coinbase.png', alt: 'Coinbase Wallet', name: 'Coinbase Wallet' },
                    { src: '/phantom.png', alt: 'Phantom', name: 'Phantom' },
                    { src: '/wallets.png', alt: 'All Wallets', name: 'All Wallets', extra: '50+' }
                ].map((wallet, index) => (
                    <div key={index} className='flex items-center gap-x-2 hover:bg-black hover:text-white rounded-lg pl-5 py-3 box-border h-[45px] cursor-pointer w-[280px] md:w-[85%] lg:w-[400px]'>
                        <Image src={wallet.src} alt={wallet.alt} height={30} width={30} />
                        <p className='font-bold text-[0.9rem]'>{wallet.name}</p>
                        {wallet.extra && <p className='text-[#1ab479] flex justify-center items-center text-[0.7rem] rounded-sm h-7 w-7 bg-blue-200'>{wallet.extra}</p>}
                    </div>
                ))}
            </div>

            <div className='absolute flex flex-col justify-center items-center right-5 md:right-0 top-0 w-[90%] md:w-[60%] h-[100%] bg-transparent'>
                <div className='flex relative items-center'>
                    <div onClick={handleBackArrowClick} className='md:mr-20 mr-14 rounded-full h-10 w-10 bg-transparent justify-center top-5 flex items-center cursor-pointer' >
                        <MdOutlineKeyboardArrowLeft size={35} />
                    </div>
                    <p className='text-[2rem] font-bold mr-24'>Wallet</p>
                </div>
                {!showDownloadOptions && !showFailedScreen && (
                    <div className='flex justify-center items-center flex-col'>
                        <Image src='/QR code.png' alt='qr code' height={300} width={300} />
                        <p className='text-[0.8rem] text-[#1ab479] flex items-center gap-x-2 cursor-pointer hover:font-bold'><BsCopy />copy link</p>
                        <p className='text-center px-2 md:px-4 text-[#94a3b8] font-bold my-5'>Scan the QR code with the wallet app to connect</p>
                        <p className='text-[#1ab479] cursor-pointer hover:font-bold' onClick={handleDontHaveWalletClick}>Dont have a wallet?</p>
                    </div>
                )}
                {showFailedScreen && (
                    <div className='flex justify-center items-center flex-col'>
                        <div className='flex mt-5 rounded-lg justify-center items-center flex-col w-[90%] h-[240px] border-none bg-red-50'>
                            <Image src='/failed.png' className='mb-[40px]' alt='verified' height={90} width={90} />
                            <p className='text-red-500 font-bold'>Connection Failed</p>
                        </div>
                        <button
                            className='green-button'
                            onClick={handleTryAgainClick}
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <div className='flex items-center justify-center'>
                                    <div className="loader"></div>
                                </div>
                            ) : (
                                'Try again'
                            )}
                        </button>
                        <p className='text-[#1ab479] mb-8 mt-3 cursor-pointer' onClick={handleDontHaveWalletClick}>Don't have a wallet?</p>
                    </div>
                )}
                {showDownloadOptions && (
                    <div className='flex md:w-[400px] justify-center items-center flex-col gap-y-5 mt-[60px] mb-[180px]'>
                        <div className='w-[90%] cursor-pointer h-[50px] bg-gray-100 flex items-center justify-start pl-5 space-x-2 rounded-lg '>
                            <Image src='/chrome.png' alt='chrome' height={30} width={30} />
                            <p className='font-medium text-black'>Download a chrome extension</p>
                        </div>
                        <div className='w-[90%] cursor-pointer h-[50px] bg-gray-100 flex items-center justify-start pl-5 space-x-2 rounded-lg '>
                            <Image src='/playstore.png' alt='chrome' height={30} width={30} />
                            <p className='font-medium text-black'>Download wallet extension</p>
                        </div>
                        <div className='w-[90%] cursor-pointer h-[50px] bg-gray-100 flex items-center justify-start pl-5 space-x-2 rounded-lg '>
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
