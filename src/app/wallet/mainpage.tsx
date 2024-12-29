'use client'
import React, { useState } from 'react'
import '../globals.css'
import Image from 'next/image'
import { CiSearch } from "react-icons/ci";
import { useRouter } from 'next/navigation';

const wallets = [
    { src: '/trust.png', alt: 'Trust Wallet', name: 'Trust wallet' },
    { src: '/metamask.png', alt: 'Metamask', name: 'Metamask' },
    { src: '/binance.png', alt: 'Binance Web3 Wallet', name: 'Binance Web3 Wallet' },
    { src: '/coinbase.png', alt: 'Coinbase Wallet', name: 'Coinbase Wallet' },
    { src: '/phantom.png', alt: 'Phantom', name: 'Phantom' },
    { src: '/wallets.png', alt: 'All Wallets', name: 'All Wallets', extra: '50+' }
];

const App = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const router = useRouter();

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const filteredWallets = wallets.filter(wallet =>
        wallet.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleWalletClick = () => {
        router.push('/connect');
    };

    return (
        <div className='lg:ml-10 mt-10 bg-white text-[#000000] px-2 md:px-[40px] flex flex-col justify-center items-center'>
            <div className='text-[26px] lg:text-[30px] mt-[60px] text-black font-bold mb-[24px]'>
                <p className='leading-none text-center'> Select wallet</p>
            </div>
            <div className='h-[64px] pl-7 flex items-center md:px-14 space-x-2 w-full lg:w-[480px] border border-[#1ab479] rounded-lg'>
               <CiSearch size={25} className='text-black' />
               <input 
                   type="text" 
                   placeholder='search wallet' 
                   className='outline-none w-full px-2 font-bold custom-cursor' 
                   value={searchTerm}
                   onChange={handleSearchChange}
               />
            </div>
            <div className='mt-[60px] mb-[60px] w-full lg:w-[480px] flex flex-col items-start space-y-[16px]'>
                {filteredWallets.map((wallet, index) => (
                    <div 
                        key={index} 
                        className='flex items-center gap-x-2 hover:bg-black hover:text-white rounded-lg pl-5 py-5 box-border h-[55px] cursor-pointer w-full lg:w-[480px]'
                        onClick={handleWalletClick}
                    >
                        <Image src={wallet.src} alt={wallet.alt} height={40} width={40} />
                        <p className='font-bold text-[1rem]'>{wallet.name}</p>
                        {wallet.extra && <p className='text-[#1ab479] flex justify-center items-center text-[0.7rem] rounded-sm h-7 w-7 bg-blue-200'>{wallet.extra}</p>}
                    </div>
                ))}
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
