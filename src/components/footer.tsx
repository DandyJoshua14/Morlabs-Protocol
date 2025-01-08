import React from 'react';
import { Donegal_One } from 'next/font/google';
import Image from "next/image"
import Link from 'next/link';

const aS = ['Explore APIs', 'Documentation', 'About Us', 'Contact Us', 'Careers'];
const CURRENT_YEAR = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-[#0C0D0C] flex flex-col justify-center text-white py-8 border border-white rounded-t-[46px] max-w-6xl mx-auto px-6">
      <div className="container mx-auto px-4">
        <div className="md:flex md:justify-between items-center">
          {/* Left Side - Logo */}
          <div className="flex items-center space-x-2 p-3 md:p-1">
            <Link href="#">
              <Image alt="morlabs_logo" width={150} height={50} src="/logos/morlabs-logo.svg" />
            </Link>
          </div>

          {/* Center Content */}
          <div className="grid md:grid-cols-5 gap-4 p-3 md:p-1">
            {/* Column 1 */}
            <div className='p-3 md:p-1'>
              <p className="font-bold mb-4">About</p>
              
            </div>
            {/* Column 2 */}
            <div className='p-3 md:p-1'>
              <h3 className="font-bold mb-4">Features</h3>
              
            </div>
            {/* Column 3 */}
            <div className='p-3 md:p-1'>
              <h3 className="font-bold mb-4">How It Works</h3>
              
            </div>
            <div className='p-3 md:p-1'>
              <h3 className="font-bold mb-4">Community</h3>
              
            </div>
            <div className='p-3 md:p-1'>
              <h3 className="font-bold mb-4">Whitepaper</h3>
              
            </div>
          </div>

          {/* Right Side - Social Icons */}
          <div className="flex space-x-4 items-center">
          <Link href="#" passHref>
    <button
      type="submit"
      className="p-2 border-t border-[2px] border-r border-white bg-gree-500 text-white rounded hover:bg-green-600"
    >
     JoinWaitlist
    </button>
  </Link>
            
          </div>
        </div>
      </div>
      <div className="md:flex md:justify-between items-center">
      <div className="mt-3 flex flex-col gap-y-4 gap-x-8 py-3">
        <div className=" text-white font-normal opacity-75">
          <p className=" text-white text-sm">&copy; Morlabs {CURRENT_YEAR}. All rights reserved</p>


          <p className="text-white text-sm"><Link href="" className='hover:underline'>Terms of Service</Link> & <Link href="" className='hover:underline'>Privacy Policy</Link></p>



        </div>
        <div className="flex space-x-4 items-center">
        <Link href="https://twitter.com/morlabs_">
              <p className="text-white opacity-75 hover:opacity-100">
                <i className="fa-brands fa-twitter text-2xl not-italic"></i>
              </p>
            </Link>
            <Link href="#">
              <p className="text-white opacity-75 hover:opacity-100">
                <i className="fa-brands fa-aedin text-2xl not-italic"></i>
              </p>
            </Link>
            <Link href="#">
              <p className="text-white opacity-75 hover:opacity-100">
                <i className="fa-brands fa-facebook text-2xl not-italic"></i>
              </p>
            </Link>
            <Link href="#">
              <p className="text-white opacity-75 hover:opacity-100">
                <i className="fa-brands fa-github text-2xl not-italic"></i>
              </p>
            </Link>
            <Link href="#">
              <p className="text-white opacity-75 hover:opacity-100">
                <i className="fa-brands fa-dribbble text-2xl not-italic"></i>
              </p>
            </Link>
            </div>
            </div>
      </div>
    </footer>
  );
};

export default Footer;

