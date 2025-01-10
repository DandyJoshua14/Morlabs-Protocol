// import Link from 'next/link';
// import Logo from './_Components/Logo';
// import './globals.css'; // Ensure this file contains the new blue-button class

// export default function Home() {
//   return (
//     <>
//     <div className="grid bg-black grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
//       <div className="absolute top-5 left-5">
//         <Logo />
//       </div>
//       <main className="text-white text-2xl font-bold flex flex-col gap-8 row-start-2 items-center sm:items-start">
//         Morlabs Protocol is in development...
//         <Link href="https://t.me/+h3znet1BenA4OWI0">
//           <button className='blue-button flex justify-center items-center'>
//             Join telegram
//           </button>
//         </Link>
//         <div>
//           <Link href='/welcome'>
//             <button className='green-button flex justify-center items-center'>
//               Start unboarding
//             </button>
//           </Link>
//         </div>
//       </main>
//     </div>
// Section 2
import { Navbar } from "./_Components/components/navbar";
import { Footer } from "./_Components/components/footer";
import { APISection } from "./_Components/components/api-section";

import { FaEthereum, FaBitcoin } from 'react-icons/fa';
import { SiSolana, SiPolkadot, SiChainlink } from 'react-icons/si';
import { MagnifyingGlassIcon, ArrowPathIcon, CloudArrowUpIcon } from "@heroicons/react/24/outline";
// sections
import VideoIntro from "./_Components/get-started";
import Feature from "./_Components/feature";
import Testimonials from "./_Components/testimonials";
import FAQ from "./_Components/faq";
import Hero from "./_Components/hero";
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
                <span><CloudArrowUpIcon className="h-[100px] w-[100px] text-white" /></span>
                <span className="text-lg text-center text-white">Go live with web3 functionality</span>
                {/* </div> */}
              </div>
            </div>

          </div>
        </div>

        <APISection />
        <VideoIntro />
        <Testimonials />
        {/* <Testimonials /> */}
        <FAQ />
        <Footer />
        {/* <FixedPlugin /> */}
      </div>
    </>

  );
}
