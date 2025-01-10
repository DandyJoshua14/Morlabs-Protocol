"use client";

// import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import { FaEthereum, FaBitcoin, FaLinkedin, FaGithub } from 'react-icons/fa'; // Placeholder icons
import { SiSolana, SiPolkadot, SiChainlink } from 'react-icons/si'; // Web3 specific icons

import { CreditCardIcon, CubeIcon, GlobeAltIcon, LinkIcon, ServerIcon, ChartBarIcon } from '@heroicons/react/24/outline';




// export const JoinWaitlist = () => {
//   const [email, setEmail] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [message, setMessage] = useState('');

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setEmail(e.target.value);
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     setIsSubmitting(true); // Disable the button while submitting
//     setMessage(''); // Reset the message

//     try {
//       const response = await fetch('https://morlabsprotocol.vercel.app/waitlist', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email }),
//       });

//       if (response.ok) {
//         setMessage('Successfully joined the waitlist!');
//         setEmail(''); // Reset the email input after successful submission
//       } else {
//         setMessage('Failed to join the waitlist. Please try again.');
//       }
//     } catch (error) {
//       setMessage('An error occurred. Please try again.');
//     }

//     setIsSubmitting(false); // Re-enable the button after submitting
//   };

//   return (
//     <div className="flex flex-col items-center">
//       <form onSubmit={handleSubmit} className="flex items-center">
//         <input
//           type="email"
//           value={email}
//           onChange={handleInputChange}
//           placeholder="Email Address"
//           className="mb-2 p-2 border border-gray-100 rounded mr-2 text-black"
//           required
//         />
//         <button
//           type="submit"
//           className="p-2 border-t border-l border-r border-white bg-gree-500 text-white rounded hover:bg-green-900"
//           disabled={isSubmitting}
//         >
//           {isSubmitting ? 'Joining...' : 'Join Waitlist'}
//         </button>
//       </form>
//       {message && <p className="mt-4 text-white">{message}</p>}
//     </div>
//   );
// };





// export const JoinWaitlist = () => {
//   const [email, setEmail] = useState('');

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setEmail(e.target.value);
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     // Add your submission logic here
//     console.log('Email submitted:', email);
//   };

//   return (
//     <div className="flex flex-col items-center">
//       <form onSubmit={handleSubmit} className="flex items-center">
//         <input
//           type="email"
//           value={email}
//           onChange={handleInputChange}
//           placeholder="Email Address"
//           className="mb-2 p-2 border border-gray-100 rounded mr-2 text-black"
//           required
//         />
//         <button
//           type="submit"
//           className="p-2 border-t border-l border-r border-white bg-gree-500 text-white rounded hover:bg-green-900"
//         >
//           {/* className="px-6 py-3 bg-green-800 rounded-full hover:bg-green-600 transition duration-300 text-white"style={{ backgroundColor: "#00FF99" }} */}
//           Join Waitlist
//         </button>
//       </form>
//     </div>
//   );
// };


export const TrustedCompanies = () => {
  const companies = [
    { name: "Ethereum", icon: <FaEthereum />, link: '#ethereum' },
    { name: "Solana", icon: <SiSolana />, link: '#solana' },
    { name: "Polkadot", icon: <SiPolkadot />, link: '#polkadot' },
    { name: "Chainlink", icon: <SiChainlink />, link: '#chainlink' },
    { name: "Bitcoin", icon: <FaBitcoin />, link: '#bitcoin' },
    // Add more Web3 companies as needed
  ];

  return (
    <section>
      <div className="mx-auto mb-24 md:mb-24 lg:mb-24 sm:flex md:flex-col md:gap-y-3 lg:flex-row justify-center gap-y-3 gap-x-7">
        {companies.map((company, index) => (
          <div key={index} className="flex flex-col md:flex-col lg:flex-row justify-center items-center">
            <div key={index} className="company-card flex flex-col lg:flex-row mt-6 items-center">
              <div className="company-icon text-5xl text-white w-[130px] h-[60px] flex items-center justify-center mb-2p-4 border border-green-500 rounded-lg hover:bg-green-400 transition-all">
                {company.icon}
                <p className="company-name text-sm font-semibold ml-2">{company.name}</p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


function Hero() {
  return (
    <div className="flex flex-col items-center justify-center text-center text-white h-full">
      <header className="grid px-8">
        <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14">
          <div className="col-span-1">


            <h1 className="text-2xl lg:text-4xl font-bold mb-4 mt-0 lg:mt-24 text-white">
              One platform  <br />
              All the tools you need to build in Webs3
            </h1>
            <p className="mb-8 text-white">
              Access ready to use API, SDK and AI Powered recommendations <br />for simplified development
            </p>

            <div className="">
              {/* <JoinWaitlist/> */}
              <Link href="/signup" passHref>
                <button
                  type="submit"
                  className="p-2 pl-6 pr-6 rounded-[46px]  bg-green-700 font-semibold text-white hover:bg-green-900"
                >
                  {/* className="px-6 py-3 bg-green-800 rounded-full hover:bg-green-600 transition duration-300 text-white"style={{ backgroundColor: "#00FF99" }} */}
                  Join Waitlist
                </button>
              </Link>

            </div>
            {/* <TrustedCompanies />
            <p className="mt-6 text-md py-5 font-semibold">Backed by the best in the web3 space</p> */}


            <div className="relative w-full flex justify-center pt-20">
              <div className="relative w-[60%] h-[60%] flex justify-between items-center">
                {/* Arc arrangement */}
                <div className="absolute left-[5%] top-[10%]">
                  {/* <img src="/logos/moralis.png" alt="Moralis Logo" className="w-12 h-12" /> */}
                  <SiSolana className="w-12 h-12 text-green-700" />
                </div>
                <div className="absolute left-[15%] top-[85%]">
                  {/* <img src="/logos/thirdweb.png" alt="Thirdweb Logo" className="w-12 h-12" /> */}
                  <SiSolana className="w-12 h-12 text-green-700" />
                </div>
                <div className="absolute left-[30%]">
                  {/* <img src="/logos/quicknode.png" alt="QuickNode Logo" className="w-12 h-12" /> */}
                  <SiSolana className="w-12 h-12 text-green-700" />
                </div>
                <div className="absolute left-[50%] top-[5%]">
                  {/* <img src="/logos/nx.png" alt="Nx Logo" className="w-12 h-12" /> */}
                  <SiSolana className="w-12 h-12 text-green-700" />
                </div>
                <div className="absolute right-[30%]">
                  {/* <img src="/logos/walletconnect.png" alt="WalletConnect Logo" className="w-12 h-12" /> */}
                  <SiSolana className="w-12 h-12 text-green-700" />
                </div>
                <div className="absolute right-[15%] top-[5%]">
                  {/* <img src="/logos/web3auth.png" alt="Web3Auth Logo" className="w-12 h-12" /> */}
                  <SiSolana className="w-12 h-12 text-green-700" />
                </div>
                <div className="absolute right-[5%] top-[10%]">
                  {/* <img src="/logos/particle-network.png" alt="Particle Network Logo" className="w-12 h-12" /> */}
                  <SiSolana className="w-12 h-12 text-green-700" />
                </div>
              </div>
            </div>

            {/* Center Text */}
            <div className="text-center mt-12">
              <p className="text-lg">Backed by the best in the web3 space</p>
            </div>

            {/* Logos/Partners */}
            <div className="flex items-center justify-center space-x-8 mt-6">
              {/* <img src="/logos/solana.png" alt="Solana Logo" className="w-24" /> */}
              <SiSolana className="w-24 h-12 text-green-700" />
              {/* <img src="/logos/moralis-wallet.png" alt="Moralis Wallet Logo" className="w-8" /> */}
              <SiSolana className="w-12 h-12 text-green-700" />
            </div>

          </div>

        </div>
      </header>

    </div>
  );
}
export default Hero;
