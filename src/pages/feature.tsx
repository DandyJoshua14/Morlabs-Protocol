"use client";
import React from "react";

import {
  CursorArrowRaysIcon,
  HeartIcon,
  LightBulbIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";

import FeatureCard from "../components/feature-card";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay } from 'swiper/modules'; // Import the Autoplay module
import 'swiper/css'; // Import Swiper core styles
// import 'swiper/modules/autoplay/autoplay.css';
import 'swiper/css/autoplay'; // Import Autoplay styles
import 'swiper/css/navigation'; // Import styles if using Navigation
import 'swiper/css/pagination'; // Import styles if using Pagination
import { FaNetworkWired, FaLock, FaUserShield, FaFileContract, FaRocket, FaListAlt, FaSearch, FaFlask } from "react-icons/fa";
import { FaEthereum, FaBitcoin } from 'react-icons/fa';
import { SiSolana, SiPolkadot, SiChainlink } from 'react-icons/si';

// import { CheckCircleIcon } from '@heroicons/react/solid';
import Link from "next/link";

const ApiProviders = () => {
  const providers = [
    { name: 'Ethereum', icon: <FaEthereum />, link: '#ethereum' },
    { name: 'Solana', icon: <SiSolana />, link: '#solana' },
    { name: 'Polkadot', icon: <SiPolkadot />, link: '#polkadot' },
    { name: 'Chainlink', icon: <SiChainlink />, link: '#chainlink' },
    { name: 'Bitcoin', icon: <FaBitcoin />, link: '#bitcoin' },
  ];

  return (
    <div className="flex flex-col items-center py-10">
      <h2 className="text-3xl font-bold mb-6 text-white py-5">How it Works</h2>
      {/* <div className="grid grid-cols-1 md:grid-cols-5 gap-8"> */}


      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <div className="flex flex-col items-center rounded-lg py-6 px-12">
          <span className="text-3xl font-bold text-green-400">1000+</span>
          <span className="text-lg text-gray-400">users per month</span>
        </div>
        <div className="flex flex-col items-center bg-gradient-to-t from-purple-500 to-green-500 rounded-lg py-6 px-12">
          <span className="text-3xl font-bold text-white">92%</span>
          <span className="text-lg text-gray-200">
            of users are satisfied with the platform
          </span>
        </div>
        <div className="flex flex-col items-center border border-gray-600 rounded-lg py-6 px-12">
          <span className="text-3xl font-bold text-green-400">5000+</span>
          <span className="text-lg text-gray-400">waiting hours reduced</span>
        </div>
        {/* </div> */}



       
      </div>
    </div>
  );
};

export const BenefitsCarousel = () => {
  return (
    <section className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Swiper Carousel */}
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 40 }
          }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          modules={[Autoplay]} // Add Autoplay as a module
        >
          {/* Benefit 1 - Fast SDK Integration */}
          <SwiperSlide>
            <div className="flex flex-col items-center text-center">
              <FaRocket size={40} className="text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fast SDK Integration</h3>

              <p className="text-gray-400">Accelerate your development with ready-to-use SDK and pre-built modules for common Web3 functionalities.</p>
            </div>
          </SwiperSlide>

          {/* Benefit 2 - Comprehensive API Directory */}
          <SwiperSlide>
            <div className="flex flex-col items-center text-center">
              <FaListAlt size={40} className="text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Comprehensive API Directory</h3>
              <p className="text-gray-400">Explore a wide range of APIs, organized by domain, for seamless integration into your Web3 projects.</p>
            </div>
          </SwiperSlide>

          {/* Benefit 3 - AI-Powered Search */}
          <SwiperSlide>
            <div className="flex flex-col items-center text-center">
              <FaSearch size={40} className="text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI-Powered Search</h3>
              <p className="text-gray-400">Leverage AI to quickly find the APIs you need, with personalized recommendations based on your project requirements.</p>
            </div>
          </SwiperSlide>

          {/* Benefit 4 - Testing Environment */}
          <SwiperSlide>
            <div className="flex flex-col items-center text-center">
              <FaFlask size={40} className="text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Testing Environment</h3>
              <p className="text-gray-400">Test your APIs in a dedicated sandbox environment before going live.</p>
            </div>
          </SwiperSlide>

          {/* Benefit 5 - Decentralization */}
          <SwiperSlide>
            <div className="flex flex-col items-center text-center">
              <FaNetworkWired size={40} className="text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Decentralization</h3>
              <p className="text-gray-400">Decentralized networks reduce the need for intermediaries, enhancing security and control.</p>
            </div>
          </SwiperSlide>

          {/* Benefit 6 - Smart Contracts */}
          <SwiperSlide>
            <div className="flex flex-col items-center text-center">
              <FaFileContract size={40} className="text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Smart Contracts</h3>
              <p className="text-gray-400">Self-executing contracts reduce the need for manual interventions and increase automation.</p>
            </div>
          </SwiperSlide>

          {/* Benefit 7 - User Sovereignty */}
          <SwiperSlide>
            <div className="flex flex-col items-center text-center">
              <FaUserShield size={40} className="text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">User Sovereignty</h3>
              <p className="text-gray-400">Give users control over their digital identity and assets with true ownership.</p>
            </div>
          </SwiperSlide>

          {/* Benefit 8 - Transparency & Security */}
          <SwiperSlide>
            <div className="flex flex-col items-center text-center">
              <FaLock size={40} className="text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Transparency & Security</h3>
              <p className="text-gray-400">Blockchain’s immutability ensures data integrity, transparency, and security.</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}


  // const featuresList = [
  //   'Ready-to-use APIs for faster coding.',
  //   'AI recommendations to streamline your workflow.',
  //   'SDKs designed for seamless dApp integration.',
  //   'Built on Solana for unmatched speed and scalability.',
  // ];

const FEATURES = [
  {
    icon: CursorArrowRaysIcon,
    title: "Fast SDK Integration",
    children:
      "Accelerate your development with ready-to-use SDK and pre-built modules for common Web3 functionalities.",
  },
  {
    icon: HeartIcon,
    title: "Comprehensive API Directory",
    children:
      "Explore a wide range of APIs, organized by domain, for seamless integration into your web3 projects.",
  },
  {
    icon: LockClosedIcon,
    title: "AI-Powered Search",
    children:
      "Leverage AI to quickly find the APIs you need, with personalized recommendations based on your project requirements.",
  },
  {
    icon: LightBulbIcon,
    title: "Testing Environment",
    children:
      "Test your APIs in a dedicated sandbox environment before going live.",
  },
];

export function Features() {
  return (
    <section className="pt-10 pb-2 px-4 w-full overflow-hidden">
      <div className="container mx-auto mb-25 text-center">
        <h2 className="text-white mb-2 font-bold uppercase text-3xl">Building on Web3 <br /> should'nt be a rocket science</h2>
        {/* <h1 className="text-white mb-4 text-lg">
          Morlabs is an AI-Powered APk and SDK directory <br /> helping developer bulid and intergrate faster on Web3
        </h1> */}
        <p className="text-white text-sm mx-auto w-full px-4 lg:w-11/12 lg:px-8 py-3">
          Developers waste hours hunting for the right tools, struggling with integrations, <br /> and navigating the steep learning curve of Web3 development. 
          <br /> The result? Slow progress, frustration, and missed opportunities.
        </p>

      </div>



      <div className="flex justify-center flex-col items-center">
      <div className="flex justify-center flex-col items-center mx-5 py-20 bg-white rounded-[46px] max-w-3xl p-8">

    
<h1 className="text-black mb-3 text-center text-3xl font-bold w-[90%] lg:w-[50%]">Leave the rocket science to NASA. We’ve got Web3 covered
</h1>
<p className="text-black text-lg font-normal lg:w-5/14 m-4 text-center w-[90%] lg:w-[55%]">
MorLabs Protocol simplifies Web3 development with high-performance tools that save time, reduce friction, and help you build faster.
</p>
{/* <ul className="space-y-4">
      {featuresList.map((featuresList, index) => (
        <li key={index} className="flex items-start space-x-3">
          <CheckCircleIcon className="h-6 w-6 text-green-700" />
          <p className="text-lg text-gray-800">{featuresList}</p>
        </li>
      ))}
    </ul> */}


</div>
    </div>
    <div className="mt-16 flex flex-col items-center justify-center gap-y-4 gap-x-8 border-t border-b border-white rounded-t-[46px] rounded-b-[46px] max-w-6xl mx-auto px-16 py-14">
        <div className="text-center text-white text-lg font-normal">
         
          <h1 className="text-white bold">Learn</h1>

        </div>
      </div>
      <div className="mt-16 flex flex-col items-center justify-center gap-y-4 gap-x-8 border-t border-b border-white rounded-t-[46px] rounded-b-[46px] max-w-6xl mx-auto px-16 py-14">
        <div className="text-center text-white text-lg font-normal">
         
          <h1 className="text-white bold">Test</h1>

        </div>
      </div>
      <div className="mt-16 flex flex-col items-center justify-center gap-y-4 gap-x-8 border-t border-b border-white rounded-t-[46px] rounded-b-[46px] max-w-6xl mx-auto px-16 py-14">
        <div className="text-center text-white text-lg font-normal">
         
          <h1 className="text-white bold">Integrate</h1>

        </div>
      </div>
      <div className="mt-16 flex flex-col items-center justify-center gap-y-4 gap-x-8 border-t border-b border-white rounded-t-[46px] rounded-b-[46px] max-w-6xl mx-auto px-16 py-14">
        <div className="text-center text-white text-lg font-normal">
         
          <h1 className="text-white bold">Deploy</h1>

        </div>
      </div>

      <BenefitsCarousel />


    </section>
  );
}
export default Features;
