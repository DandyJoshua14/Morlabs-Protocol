'use client'
import { FaEthereum, FaBitcoin } from 'react-icons/fa';
import { SiSolana, SiPolkadot, SiChainlink } from 'react-icons/si';
import { SolanaIcon } from "./_Components/Icons/Solana"
import { MagnifyingGlassIcon, ArrowPathIcon, CloudArrowUpIcon } from "@heroicons/react/24/outline";
// sections
import VideoIntro from "./_Components/get-started";
import Feature from "./_Components/feature";
import Testimonials from "./_Components/testimonials";
import FAQ from "./_Components/faq";
import Hero from "./_Components/hero";
import { useState } from "react";
// import Faqs from "./faqs";
// export default function Campaign() {
export default function Home() {
  const providers = [
    { name: 'Ethereum', icon: <FaEthereum />, link: '#ethereum' },
    { name: 'Solana', icon: <SiSolana />, link: '#solana' },
    { name: 'Polkadot', icon: <SiPolkadot />, link: '#polkadot' },
    { name: 'Chainlink', icon: <SiChainlink />, link: '#chainlink' },
    { name: 'Bitcoin', icon: <FaBitcoin />, link: '#bitcoin' },
  ];
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className='bg-black text-white'>
      <div className="sm:h-screen">
        {/* Navbar Section */}
        <nav className="bg-black sm:flex px-10 sm:flex-row hidden py-5 justify-between items-center">
          <div className="items-start"><img src="./morlabs-logo.png" alt="morlabs_logo" width={150} height={150} /></div>
          <div>
            <ul className="sm:flex text-white list-none justify-between gap-x-8">
              <li>About</li>
              <li>Features</li>
              <li>How it Works</li>
              <li>Community</li>
              <li>Whitepaper</li>
            </ul>
          </div>
        </nav>
        <nav className="sm:hidden block bg-black">
          <div className="icon" onClick={() => { setShowMenu(!showMenu) }}>
            <i className="fa fa-bars"></i>
          </div>
          {showMenu && <div> <ul className="text-white list-none gap-y-8">
            <li>About</li>
            <li>Features</li>
            <li>How it Works</li>
            <li>Community</li>
            <li>Whitepaper</li>
          </ul></div>}
        </nav>
        <div className="mt-10 max-w-5xl mx-auto">
          <div className="px-5 text-6xl font-bold font-bricolage text-center m-auto">
            <h3 className='py-3'>One Platform,</h3>
            <h3 className=''>All the tools you need to build in Web3</h3>
            <p className='p-2 font-normal text-lg whitespace-wrap'>Access ready-to-use APIs, SDKs, and AI-powered recommendations for simplified web3 development</p>
            <button className="rounded-full bg-green-500 text-lg px-5 py-4">Join Waitlist</button>
          </div>
        </div>

        <div className="mt-10">
          <div className="py-5 text-4xl font-bold font-bricolage text-center items-center">
            <p className='p-2 font-normal text-xs whitespace-wrap'>Backed By:</p>
            <div className=" text-lg px-5 justify-center items-center flex">
              <button className="flex cursor-not-allowed p-5 rounded-full items-center"><SolanaIcon /> &nbsp; Solana
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      {/* About Section */}
      <div>
        <div className="mt-10 max-w-6xl mx-auto min-h-screen">
          <div className="px-5 text-6xl font-bold font-bricolage text-center m-auto">
            <h3 className='py-3'>Building in web3<br />shouldn't be rocket science</h3>

            <p className='p-2 font-normal text-lg whitespace-wrap'>Developers waste hours hunting for the right tools, struggling with integrations, and navigating the steep learning curve of web3 development. The result? Slow progress, frustration, and missed opportunities</p>
            <div className="sm:flex">
              <div className="max-w-1xl w-1/6"></div>
              <div className="rounded-xl max-w-4xl w-4/6 text-center text-black mx-auto mt-5 h-[500px] bg-white text-lg px-5 py-4"><h3 className="text-3xl py-6">
                Leave Rocket Science to NASA.<br /> We've got you covered
              </h3>
                <p className='p-2 font-normal text-lg whitespace-wrap'>Morlabs Protocol simplifies Web3 development with high performance</p>
              </div>
              <div className="w-1/6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
