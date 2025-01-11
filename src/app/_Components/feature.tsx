"use client";
import React from "react";
import { useState, useEffect  } from "react";

import {
  CursorArrowRaysIcon,
  DivideIcon,
  HeartIcon,
  LightBulbIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";

import { FiArrowLeftCircle, FiArrowRightCircle  } from "react-icons/fi";
import FeatureSections from "./learn";
import WhyDev from "./whydev";

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
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Howitworks from "./howitworks";

const ApiProviders = () => {
  const providers = [
    { name: 'Ethereum', icon: <FaEthereum />, link: '#ethereum' },
    { name: 'Solana', icon: <SiSolana />, link: '#solana' },
    { name: 'Polkadot', icon: <SiPolkadot />, link: '#polkadot' },
    { name: 'Chainlink', icon: <SiChainlink />, link: '#chainlink' },
    { name: 'Bitcoin', icon: <FaBitcoin />, link: '#bitcoin' },
  ];

  return (
    <div className="flex flex-col items-center py-10 w-full">
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





  const featuresList = [
    'Ready-to-use APIs for faster coding.',
    'AI recommendations to streamline your workflow.',
    'SDKs designed for seamless dApp integration.',
    'Built on Solana for unmatched speed and scalability.',
  ];

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

    
<h1 className="text-black mb-3 text-center text-4xl font-bold w-[90%] lg:w-[85%]">Leave the rocket science to NASA. We’ve got Web3 covered
</h1>
<p className="text-black text-lg font-normal lg:w-5/14 m-4 text-center w-[90%] lg:w-[90%]">
MorLabs Protocol simplifies Web3 development with high-performance tools that save time, reduce friction, and help you build faster.
</p>
<ul className="space-y-4">
      {featuresList.map((featuresList, index) => (
        <li key={index} className="flex items-start space-x-3">
          <  CursorArrowRaysIcon className="h-6 w-6 text-green-700" />
          <p className="text-lg text-gray-800">{featuresList}</p>
        </li>
      ))}
    </ul>


</div>
    </div>
    
    <FeatureSections />



      <WhyDev />


    </section>
  );
}
export default Features;
