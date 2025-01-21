import React from 'react'
import Image from 'next/image'
import { FaCircleCheck } from "react-icons/fa6";
const Powered = () => {
    return (
        <div className='mt-[120px] bg-black flex justify-center items-center flex-col relative'>
            <div className='flex justify-center items-center gap-x-10 relative h-[300px] w-[95%] md:w-[700px] bg-black'>
                <Image src='/powered/1 - Helius.png' alt='powered' width={35} height={35} className='absolute top-[47%] md:left-[10%] left-[5%] md:w-[50px] md:h-[50px]' />
                <Image src='/powered/3 - Solana FM.png' alt='powered' width={25} height={25} className='absolute md:top-[27%] top-[30%] md:left-[15%] left-[10%] md:w-[35px] md:h-[35px]' />
                <Image src='/powered/8 - Meteora.png' alt='powered' width={35} height={35} className='absolute md:top-[17%] top-[13%] md:left-[23%] left-[19%] md:w-[50px] md:h-[50px]' />
                <Image src='/powered/6 - Ellipsis.png' alt='powered' width={35} height={35} className='absolute top-[5%] md:left-[35%] left-[30%] md:w-[50px] md:h-[50px]' />

                <Image src='/powered/5 - Sphere.png' alt='powered' width={35} height={35} className='absolute md:top-0 top-[3%] left-[46%] md:w-[50px] md:h-[50px]' />

                <Image src='/powered/raydium.png' alt='powered' width={35} height={35} className='absolute top-[7%] right-[32%] md:top-[5%] md:right-[35%] md:w-[50px] md:h-[50px]' />
                <Image src='/powered/jupiter.png' alt='powered' width={35} height={35} className='absolute md:top-[17%] top-[15%] md:right-[23%] right-[19%] md:w-[50px] md:h-[50px]' />
                <Image src='/powered/7 - Sonarwatch.png' alt='powered' width={20} height={35} className='absolute md:top-[27%] top-[30%] md:right-[15%] right-[10%] md:w-[30px] md:h-[50px]' />
                <Image src='/powered/9 - Orca.png' alt='powered' width={35} height={35} className='absolute top-[47%] md:right-[10%] right-[5%] md:w-[50px] md:h-[50px]' />

            </div>
            <div className='absolute top-[9%]'>
                <p className='mt-5 md:text-[0.85rem] text-[0.7rem]'>Backed by the best in the web3 space</p>
                <div className='flex justify-center items-center gap-x-4'>
                    <Image src='/powered/Clip path group.png' className='h-[20px] w-[130px] md:h-[27px] md:w-[150px]' height={30} width={150} alt='solana' />
                    <Image src='/powered/superteam.png' height={50} width={50} alt='solana' />
                </div>
            </div>

            <div className='flex justify-center p-4 items-center flex-col text-white mt-[50px]'>
                <p className='text-center text-[2.1rem] font-bold'>Building in web3 <br /> shouldn't be rocket science</p>
                <p className='mt-[15px] text-[1rem] text-center'>Developers waste hours hunting for the right tools, struggling with integrations, <br /> and navigating the steep learning curve of Web3 development. <br /> The result? Slow progress, frustration, and missed opportunities.</p>
            </div>


            <div className='relative flex justify-center items-center'>

                <div className='lg:h-[450px] md:pb-5 h-auto md:w-[500px] lg:w-[800px] pb-14 p-4 w-[90%] mt-[80px] flex flex-col rounded-xl bg-white'>
                    <p className='text-black text-[2rem] text-center font-semibold pt-[50px]'>Leave the rocket science to NASA. <br /> We’ve got Web3 covered</p>
                    <p className='text-black text-[1rem] my-[25px] text-center'>MorLabs Protocol simplifies Web3 development with high-performance tools <br /> that save time, reduce friction, and help you build faster.</p>
                    <div className='flex justify-center items-center space-y-3 flex-col mt-[20px]'>
                        <div className='flex items-center gap-x-3'>
                            <FaCircleCheck className='text-green-700' />
                            <p className='text-black text-[0.8rem]'>Ready-to-use APIs for faster coding.</p>
                        </div>
                        <div className='flex items-center gap-x-3'>
                            <FaCircleCheck className='text-green-700' />
                            <p className='text-black text-[0.8rem]'>AI recommendations to streamline your workflow</p>
                        </div>
                        <div className='flex items-center gap-x-3'>
                            <FaCircleCheck className='text-green-700' />
                            <p className='text-black text-[0.8rem]'>SDKs designed for seamless dApp integration</p>
                        </div>
                        <div className='flex items-center gap-x-3'>
                            <FaCircleCheck className='text-green-700' />
                            <p className='text-black text-[0.8rem]'>Built on Solana for unmatched speed and scalability.</p>
                        </div>

                    </div>
                </div>
                <Image className='absolute top-[20%] md:-left-[20%] left-[3%]' src='/powered/pastel blue rocket in motion.png' alt='rocket image' height={80} width={55} />
                <Image className='md:h-[120px] h-[85px] md:w-[85px] w-[55px] absolute top-[55%] right-[3%] md:-right-[20%] rotate-[-7deg]' src='/powered/glossy pastel blue rocket.png' alt='rocket image' height={120} width={85} />



            </div>



        </div>
    )
}

export default Powered
