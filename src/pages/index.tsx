// components
import { Navbar, Footer, APISection } from "@/components";
import { FixedPlugin } from "@/components";
import { FaNetworkWired, FaLock, FaUserShield, FaFileContract, FaRocket, FaListAlt, FaSearch, FaFlask } from "react-icons/fa";
import { FaEthereum, FaBitcoin } from 'react-icons/fa';
import { SiSolana, SiPolkadot, SiChainlink } from 'react-icons/si';

// sections
import { default as Hero } from "./hero";

import VideoIntro from "./get-started";
import Feature from "./feature";
import Testimonials from "./testimonials";
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
  return (
    <>
      <div className="bg-[black] w-full overflow-hidden min-h-screen">
        <Navbar />
        <Hero />
      </div>
      <div className="bg-gradient-to-b from-black to-black min-h-screen overflow-hidden w-full">
        <Feature />



        <div className="flex flex-col items-center py-10  px-2">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-center leading-relaxed w-[90%] lg:w-[50%] text-white py-5">Simplifying the integration of APIs into Web3 projects</h2>
          {/* <div className="grid grid-cols-1 md:grid-cols-5 gap-8"> */}

          <div className="flex justify-around w-full items-center">
            <div className="flex flex-col lg:flex-row justify-center items-center md:gap-x-4 gap-y-8">

              <div className="flex flex-col justify-center mt-10 p-[1px] items-center bg-gradient-to-t from-green-500 to-purple-500 rounded-2xl">

                <div style={{ background: '#0C0D0C' }} className="flex flex-col items-center rounded-2xl border-gradient py-14 px-24">
                  <span className="text-5xl font-bold" style={{ color: '#41FEB5' }}>1000+</span>
                  <span className="text-lg" style={{ color: '#41FEB5' }}>users per month</span>
                </div>
              </div>
              <div className="flex flex-col justify-center mt-[-7px] py-10 items-center bg-gradient-to-t from-green-500 to-purple-500 rounded-2xl px-8 lg:mb-12">
                <span className="text-5xl font-bold text-white">92%</span>
                <span className="text-lg text-gray-200 w-[60%] text-center">
                  of users are satisfied with the platform
                </span>
              </div>
              <div className="flex flex-col justify-center lg:mt-10 p-[1px] items-center bg-gradient-to-t from-green-500 to-purple-500 rounded-2xl">

                <div style={{ background: '#0C0D0C' }} className="flex flex-col items-center rounded-2xl border-gradient py-14 px-24">
                  <span className="text-5xl font-bold" style={{ color: '#41FEB5' }}>5000+</span>
                  <span className="text-lg text-center" style={{ color: '#41FEB5' }}>Waiting hours reduced</span>
                </div>
              </div>
            </div>
       

          </div>
        </div>


        <APISection />
        <VideoIntro />
        <Testimonials />
        <Footer />
        {/* <FixedPlugin /> */}
      </div>

    </>
  );
}
