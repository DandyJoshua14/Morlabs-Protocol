import Image from "next/image";
import { RiTwitterXLine, RiTelegram2Fill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import Link from "next/link";
export default function Footer() {
    return (
        <div className='md:h-[350px] h-[400px] rounded-t-[40px] border-t-white border-t-[0.5px] flex items-center justify-center'>
            <div className='flex space-x-10 justify-between items-start w-full md:px-20 px-5'>
                {/* Left Side - Logo */}
                <div className="items-start flex flex-col">
                    <Image src="/morlabs-logo.png" alt="morlabs_logo" width={150} height={150} />
                    <div className='w-[140px] mt-5'>
                        <p className='text-white text-[0.8rem]'>
                            ©2024 Morlabs. All rights reserved.
                            Terms of Service
                            Privacy Policy
                        </p>
                    </div>

                    <div className='flex md:hidden flex-col justify-center mt-7 items-center'>
                        <Link href='/welcome'><button className="rounded-full h-[56px] box-border bg-green-500 hover:bg-green-700 text-lg px-5 py-4">Join Waitlist</button></Link>
                        <div className='mt-5 flex space-x-5 md:text-[1.8rem] text-[1.3rem]'>
                            <RiTwitterXLine />
                            <RiTelegram2Fill />
                            <FaLinkedin />
                        </div>
                    </div>
                </div>

  {/* Center Content */}
                <div className='flex gap-x-8 flex-col md:flex-row items-center text-[0.8rem] md:space-y-0 space-y-5'>
                    <p className="text-white cursor-pointer hover:text-green-700">About</p>
                    <p className="text-white cursor-pointer hover:text-green-700">Features</p>
                    <p className="text-white cursor-pointer hover:text-green-700">How it Works</p>
                    <p className="text-white cursor-pointer hover:text-green-700">Community</p>
                    <p className="text-white cursor-pointer hover:text-green-700">Whitepaper</p>
                </div>

{/* Right Side - Social Icons */}
                <div className='hidden md:flex flex-col justify-center items-center'>
                    <Link href='/welcome'><button className="rounded-full hover:bg-green-700 h-[56px] box-border bg-green-500 text-lg px-5 py-4">Join Waitlist</button></Link>
                    <div className='mt-5 flex space-x-5 text-[1.8rem]'>
                        <RiTwitterXLine />
                        <RiTelegram2Fill />
                        <FaLinkedin />
                    </div>
                </div>
            </div>
        </div>
    );
} 