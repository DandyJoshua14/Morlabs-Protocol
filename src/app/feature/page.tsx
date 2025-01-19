"use client";
import React from "react";
import { useState, useEffect } from "react";
import {
  CursorArrowRaysIcon,
  DivideIcon,
  HeartIcon,
  LightBulbIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
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
import Howitworks from "../howitworks/page";

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

const WhyDev = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      bg: "bg-gradient-to-r from-purple-500 to-pink-500",
      title: "Save Time",
      description: "Stop reinventing the wheel. Access pre-built APIs and SDKs to get your projects up and running in no time.",
      image: "/images/slide1.png", // Update this path
    },
    {
      bg: "bg-gradient-to-r from-purple-500 to-pink-500",
      title: "seemless Integrate",
      description: "Our tools are built for smooth deployment, letting you focus on innovation.",
      image: "/images/slide2.png", // Update this path
    },
    {
      bg: "bg-gradient-to-r from-orange-500 to-red-500",
      title: "Bridge Web2 and Web3",
      description: "Simplify the learning curve, with tools deisign to integrate decentralized technologies seemlessly.",
      image: "/images/slide3.png", // Update this path
    },
    {
      bg: "bg-gradient-to-r from-orange-500 to-red-500",
      title: "AI Powered Tools",
      description: "Get smart recommendation toiled to your need, save you hours of research",
      image: "/images/slide3.png", // Update this path
    },
  ];
  const slideCount = slides.length;
  // Automatically transition to the next slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slideCount);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(timer); // Cleanup timer on unmount
  }, [slideCount]);
  // Go to the previous slide
  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slideCount) % slideCount);
  };
  // Go to the next slide
  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slideCount);
  };
  // export const BenefitsCarousel = () => {
  return (
    <>
      <div className=" mx-auto flex flex-col items-center px-5 py-10 text-white">
        <h2 className="text-4xl font-bold text-center mb-8">Why developers need Morlabs</h2>
      </div>
      <div
        className={`relative flex items-center w-[50%] mx-auto  ${slides[currentSlide].bg} text-white transition-all duration-500`}
      >

        <div className="relative w-full h-96 flex items-center justify-center overflow-hidden">
          {/* Slides */}
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute w-full h-[300px] flex items-center justify-center gap-8 transition-opacity duration-1000 ${currentSlide === index ? "opacity-100" : "opacity-0"
                }`}
            >
              {/* Alternating layout */}
              {index % 2 === 0 ? (
                <>
                  <div className="w-1/2 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-4">{slide.title}</h3>
                    <p className="text-lg">{slide.description}</p>
                  </div>
                  <div className="w-1/2 h-full flex items-center justify-center">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="h-full object-cover rounded-lg"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="w-1/2 h-full flex items-center justify-center">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="w-1/2 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-4">{slide.title}</h3>
                    <p className="text-lg">{slide.description}</p>
                  </div>
                </>
              )}
            </div>
          ))}
          {/* Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 z-10 top-1/2 transform -translate-y-1/2 p-2 rounded-full hover:bg-black bg-opacity-70 transition"
          >
            <FiArrowLeftCircle size={60} className="text-white" /> {/* Left arrow */}
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full hover:bg-black bg-opacity-70 transition"
          >
            <FiArrowRightCircle size={60} className="text-white" /> {/* Right arrow */}
          </button>
        </div>


      </div>
      {/* // </div> */}
    </>
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
      <WhyDev />
    </section>
  );
}
export default Features;