// components
import { Navbar, Footer, APISection } from "@/components";
import { FixedPlugin } from "@/components";
import { FaNetworkWired, FaLock, FaUserShield, FaFileContract, FaRocket, FaListAlt, FaSearch, FaFlask } from "react-icons/fa";
import { FaEthereum, FaBitcoin } from 'react-icons/fa';
import { SiSolana, SiPolkadot, SiChainlink } from 'react-icons/si';
import { MagnifyingGlassIcon, ArrowPathIcon, CloudIcon } from "@heroicons/react/24/outline";

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
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-center leading-relaxed w-[90%] lg:w-[50%] text-white py-5">How it Works</h2>
          {/* <div className="grid grid-cols-1 md:grid-cols-5 gap-8"> */}

          <div className="flex justify-around w-full items-center">
            <div className="flex flex-col lg:flex-row justify-center items-center md:gap-x-4 gap-y-8">

              {/* <div className="flex flex-col justify-center mt-10 p-[1px] items-center bg-gradient-to-t from-green-500 to-purple-500 rounded-2xl"> */}

              <div className="flex flex-col justify-center mt-[-7px] py-24 items-center bg-gradient-to-l from-green-700 to-black rounded-2xl px-14 lg:mb-12">
                  <span><MagnifyingGlassIcon className="h-[100px] w-[100px] text-white pb-5" /></span>
                  <span className="text-lg text-white">Browse SDKs & APIs</span>
                {/* </div> */}
              </div>
              <div className="flex flex-col justify-center mt-[-7px] py-24 items-center bg-gradient-to-l from-green-700 to-black rounded-2xl px-14 lg:mb-12">
                <span><ArrowPathIcon className="h-[90px] w-[90px] text-white" /></span>
                <span className="text-lg text-white w-[60%] text-center">
                Integrate seamlessly into your project
                </span>
              </div>
              {/* <div className="flex flex-col justify-center lg:mt-10 p-[1px] items-center bg-gradient-to-l from-green-500 to-black rounded-2xl"> */}

              <div className="flex flex-col justify-center mt-[-7px] py-24 items-center bg-gradient-to-l from-green-700 to-black rounded-2xl px-14 lg:mb-12">
                  <span><CloudIcon className="h-[100px] w-[100px] text-white" /></span>
                  <span className="text-lg text-center text-white">Go live with web3 functionality</span>
                {/* </div> */}
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
