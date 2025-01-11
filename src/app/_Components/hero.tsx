"use client";

// import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import { FaEthereum, FaBitcoin, FaLinkedin, FaGithub } from 'react-icons/fa'; // Placeholder icons
import { SiSolana, SiPolkadot, SiChainlink } from 'react-icons/si'; // Web3 specific icons

import RotatingIcons from "./rotatingicon";

import { CreditCardIcon, CubeIcon, GlobeAltIcon, LinkIcon, ServerIcon, ChartBarIcon } from '@heroicons/react/24/outline';


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


            <RotatingIcons />
            

          </div>

        </div>
      </header>

    </div>
  );
}
export default Hero;
