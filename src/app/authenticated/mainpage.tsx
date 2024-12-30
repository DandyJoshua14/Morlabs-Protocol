'use client'
import React, { useState } from 'react'
import '../globals.css'
import Image from 'next/image'
import { useRouter } from 'next/navigation';

const App = () => {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleConnectWalletClick = () => {
        setIsLoading(true);
        // Simulate an API call
        setTimeout(() => {
            setIsLoading(false);
            router.push('/wallet');
        }, 2000);
    };

    return (
        <div className='flex justify-center items-center md:items-start mt-[10vh] px-2'>
            <div className='md:ml-10 mt-10 bg-white text-[#000000] px-4 md:px-[40px] flex flex-col justify-center items-center'>
                <Image src='/veri.png' className='mb-[40px]' alt='verified' height={90} width={90} />
                <div className='text-[26px] lg:text-[30px] text-black font-bold'>
                    <p className='leading-none text-center'> Authentication complete!</p>
                </div>
                <div className='mt-[20px] flex flex-col items-center space-y-[16px]'>
                    <p className='font-bold mb-[30px] text-center'>Proceed to connect your wallet</p>
                    <button
                        className='green-button'
                        onClick={handleConnectWalletClick}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <div className='flex items-center justify-center'>
                                <div className="loader"></div>
                            </div>
                        ) : (
                            'Connect wallet'
                        )}
                    </button>
                </div>
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
