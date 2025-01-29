'use client'
import { useState } from "react";;
import Powered from "./_Components/powered";
import { FaCircleArrowDown, FaCircleArrowLeft, FaCircleArrowRight, FaCirclePlus } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import Link from 'next/link'
import { GrSearch } from "react-icons/gr";
import { FiRefreshCw } from "react-icons/fi";
import { LuCloudUpload } from "react-icons/lu";
import Header from './_Components/Header';
import Footer from './_Components/Footer';
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showMenu, setShowMenu] = useState(false);

  const toggleDropdown = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    // Prevent scrolling when menu is open
    if (!showMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  return (
    <div className='bg-black min-h-[100vh] text-white pt-5 scroll-smooth'>
      <Header onMenuClick={toggleMenu} />

      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-50 flex items-center justify-center"
          >
            <div className="absolute top-8 mt-[20px] right-4 cursor-pointer text-xl" onClick={toggleMenu}>
              <IoClose />
            </div>
            <ul className="text-white list-none flex flex-col items-center gap-y-8 text-xl">
              <li className="cursor-pointer hover:bg-green-700 p-2 rounded-lg ">About</li>
              <li className="cursor-pointer hover:bg-green-700 p-2 rounded-lg">Features</li>
              <li className="cursor-pointer hover:bg-green-700 p-2 rounded-lg">How it Works</li>
              <a href="https://t.me/+h3znet1BenA4OWI0" target="_blank" rel="noopener"><li className="cursor-pointer hover:bg-green-700 p-2 rounded-lg">Community</li></a>
              <li className="cursor-pointer hover:bg-green-700 p-2 rounded-lg">Whitepaper</li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero start */}
      <div className="mt-10 max-w-5xl mx-auto">
        <div className="px-2 md:text-[3.4rem] text-[2.7rem] font-bold font-bricolage text-center m-auto">
          <h3 className='py-3 text-center'>One Platform,</h3>
          <h3 className="lg:whitespace-normal text-center whitespace-wrap w-[90%]">All the tools you need to build in Web3</h3>
          <p className='p-2 font-normal text-lg whitespace-wrap mt-[24px] text-center'>Access ready-to-use APIs, SDKs, and AI-powered recommendations <br /> for simplified web3 development</p>
          <Link href='/waitlist'><button className="rounded-full h-[56px] hover:bg-green-700 box-border bg-green-500 text-lg px-5 py-4 mt-[24px]">Join Waitlist</button></Link>
        </div>
      </div>

      <Powered />

      {/* hero ends */}
      <div id="howitworks" className="flex justify-center items-center text-center">
        <div className="hidden sm:flex sm:gap-10 sm:mt-[100px] sm:justify-center mx-auto sm:items-center">
          <p className='text-white font-bold text-center text-3xl flex items-center gap-x-3'>Learn</p>
          <FaCircleArrowRight className='text-white md:text-3xl text-3xl mx-auto' />
          <p className='text-white font-bold text-center text-3xl'>Test</p><FaCircleArrowRight className='text-white md:text-3xl text-3xl' />
          <p className='text-white font-bold text-center text-3xl'>Integrate</p><FaCircleArrowRight className='text-white text-3xl' />
          <p className='text-white font-bold text-center text-3xl'>Deploy</p>
        </div>
        <div className="block md:hidden mx-auto mt-8 space-y-10 items-center">
          <p className='text-white font-bold text-center text-3xl'>Learn</p><FaCircleArrowDown className='text-white mx-auto md:text-[3rem] text-[2rem]' />
          <p className='text-white font-bold text-center text-3xl'>Test</p><FaCircleArrowDown className='text-white md:text-[3rem] text-[2rem] mx-auto' />
          <p className='text-white font-bold text-center text-3xl'>Integrate</p><FaCircleArrowDown className='text-white md:text-3xl mx-auto text-3xl' />
          <p className='text-white font-bold text-center text-3xl'>Deploy</p>
        </div>

      </div>

      <div className='mt-[140px] flex tex-white flex-col items-center justify-center'>
        <p className='text-center text-[2.4rem] mb-[40px] font-bold'>Why developers need Morlabs</p>
        {/* Slide Content */}
        <div className='flex items-center justify-center m-2 space-x-5'>
          {/* <FaCircleArrowLeft className='text-white md:text-[3rem] text-[2rem]' /> */}
          <div className='h-[360px] text-white md:w-[600px] w-[100%] rounded-xl flex flex-col justify-center items-center' style={{ background: 'linear-gradient(90deg, #D0E6F5 0%, #FEAFD8 30%, #C482FA 60%)' }}>
            <Image alt='hourglass' src='/holographic hourglass.png' width={73} height={120} />
            <p className='text-center my-5'>Save Time</p>
            <p className='text-center'>Stop reinventing the wheel. <br /> Access pre-built APIs and SDKs to get your projects up <br /> and running in no time.</p>
          </div>
          {/* Navigation Arrows */}
          {/* <FaCircleArrowRight className='text-white md:text-[3rem] text-[2rem]' /> */}
        </div>
      </div>
      {/* Main features Section */}
      <div className='flex justify-center items-center'>
        <div className='h-auto w-[95%] border-white border-[1px] flex flex-col md:flex-row items-center justify-evenly rounded-xl mt-[80px] p-[40px]'>
          <div className='w-[70%] h-[100%] flex flex-col'>
            <p className='text-[2.2rem] font-bold'>Build smarter, no matter your experience level</p>
            <p className='text-[1.2rem]'>MorLabs empowers every developer to innovate faster and more efficiently in Web3.</p>

            <div className='flex space-y-4 flex-col md:flex-row items-center gap-x-6 mt-[40px]'>
              <div className='md:w-[450px] w-[85vw] box-border lg:h-[250px] md:h-[350px] h-auto text-white border-white border-[0.5px] rounded-xl p-4 flex-start items-center'>
                <Image src='/MedalMilitary.png' alt='medal' height={40} width={40} />
                <p className='text-[1.3rem] mt-4 font-bold'>For experienced devs</p>
                <p className='text-[1rem] mt-[40px]'>Streamline your workflow with ready-to-use tools that reduce time spent on repetitive tasks.</p>
              </div>

              <div className='md:w-[450px] w-[85vw] lg:h-[250px] md:h-[350px] box-border h-auto text-white border-white border-[0.5px] rounded-xl p-4 flex-start items-center'>
                <Image src='/Medal.png' alt='medal' height={40} width={40} />
                <p className='text-[1.3rem] mt-4 font-bold'>For new devs</p>
                <p className='text-[1rem] mt-[40px]'>Skip the steep learning curve. Build with confidence using tools that simplify complex processes.</p>
              </div>
            </div>
          </div>
          {/* 3D Object */}
          <Image className="mt-7 md:mt-0" src='/crisscross form.png' alt='crisscross form' width={200} height={200} />
        </div>
      </div>

      {/* how it works start */}

      <div className='flex-start mt-[100px]' >
        <p className='text-left text-white font-bold my-7 md:ml-14 ml-7 text-[1.7rem]' id="howitworks">How It Works</p>

      </div>
      {/* cards */}
      <div className='flex items-center flex-col md:flex-row space-y-6 justify-evenly gap-x-3 mt-[40px]'>
        <div className='h-[300px] md:w-[370px] w-[95%] justify-center flex-col gap-y-10 items-center flex rounded-xl' style={{ background: 'linear-gradient(90deg, #000000 0%, #1AB479 90%)' }}>
          <GrSearch className='text-white text-[3rem]' />
          <p className='text-white text-center text-[1.5rem] font-bold'>Browse SDKs & APIs</p>
        </div>
        <div className='h-[300px] md:w-[370px] w-[95%] justify-center flex-col gap-y-10 items-center flex rounded-xl' style={{ background: 'linear-gradient(90deg, #000000 0%, #1AB479 90%)' }}>
          <FiRefreshCw className='text-white text-[3rem]' />
          <p className='text-white text-center text-[1.5rem] font-bold'>Integrate seamlessly into your project</p>
        </div>
        <div className='h-[300px] md:w-[370px] w-[95%] justify-center flex-col gap-y-10 items-center flex rounded-xl' style={{ background: 'linear-gradient(90deg, #000000 0%, #1AB479 90%)' }}>
          <LuCloudUpload className='text-white text-[3rem]' />
          <p className='text-white text-center text-[1.5rem] font-bold'>Go live with web3 functionality</p>
        </div>
      </div>
      {/* how its works ends */}

      <div className='flex items-center flex-col justify-center mt-[100px] relative'>
        <p className='text-white font-bold text-[2.6rem] text-center'>The future of Web3 development  is waiting. <br /> Are you in?</p>
        <Link href='/waitlist'><button className="rounded-full h-[56px] box-border bg-green-500 hover:bg-green-700 text-lg px-5 py-4 mt-[24px]">LFG! Join Waitlist</button></Link>
        {/* <div className='w-[35%] h-[50%] absolute' style={{ background: 'radial-gradient(circle at center, #25FEAA 0%, #20DB93 40%, #169866 60%, rgba(0,0,0,1) 100%)' }}></div> */}
      </div>

      {/* faquently asked question starts */}
      <p className='text-white font-bold text-[2rem] text-center mt-[200px]' id="about">Morlabs 101: What you need to know</p>
      <div className='flex flex-col space-y-4 mb-[170px] justify-center items-center mt-[30px]'>
        <div className='md:w-[800px] w-[95%] flex flex-col'>
          <div className='h-[70px] box-border flex items-center justify-between p-3 text-white border-white rounded-lg border-[0.5px]'>
            <p className='text-[1.2rem]'>What is Morlabs?</p>
            <FaCirclePlus className='text-[1.8rem] cursor-pointer hover:text-green-500' onClick={() => toggleDropdown(0)} />
          </div>
          {openIndex === 0 && (
            <div className='p-5 text-white'>
              <p> Morlabs is a platform offering APIs, SDKs, and AI-powered tools for simplified Web3 development.</p>
            </div>
          )}
        </div>

        <div className='md:w-[800px] w-[95%] flex flex-col'>
          <div className='h-[70px] box-border flex items-center justify-between p-3 text-white border-white rounded-lg border-[0.5px]'>
            <p className='text-[1.2rem]'>Who is it for?</p>
            <FaCirclePlus className='text-[1.8rem] cursor-pointer hover:text-green-500' onClick={() => toggleDropdown(1)} />
          </div>
          {openIndex === 1 && (
            <div className='p-5 text-white'>
              <p>Both experienced developers and beginner looking to streamline Web3 development processes..</p>
            </div>
          )}
        </div>

        <div className='md:w-[800px] w-[95%] flex flex-col'>
          <div className='h-[70px] box-border flex items-center justify-between p-3 text-white border-white rounded-lg border-[0.5px]'>
            <p className='text-[1.2rem]'>What makes Morlabs different?</p>
            <FaCirclePlus className='text-[1.8rem] cursor-pointer hover:text-green-500' onClick={() => toggleDropdown(2)} />
          </div>
          {openIndex === 2 && (
            <div className='p-5 text-white'>
              <p>we combine ready-to-used tools with AI recommendation, bridging web2 simplicity with Web3 innovation.</p>
            </div>
          )}
        </div>

        <div className='md:w-[800px] w-[95%] flex flex-col'>
          <div className='h-[70px] box-border flex items-center justify-between p-3 text-white border-white rounded-lg border-[0.5px]'>
            <p className='text-[1.2rem]'>When will the platform be available?</p>
            <FaCirclePlus className='text-[1.8rem] cursor-pointer hover:text-green-500' onClick={() => toggleDropdown(3)} />
          </div>
          {openIndex === 3 && (
            <div className='p-5 text-white'>
              <p>The platform will be launched in Q1 2025.</p>
            </div>
          )}
        </div>
      </div>
      {/* fequently asked quetions ends */}

      <Footer />
    </div >
  );
}
