'use client'
import { useState } from "react";
import Image from "next/image";
import { FaBars } from "react-icons/fa6";

export default function Header({ onMenuClick }: { onMenuClick: () => void }) {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <>
            <nav className="bg-black md:flex px-10 sm:flex-row hidden py-5 justify-between items-center">
                <div>
                    <div className="items-start">
                        <Image src="/morlabs-logo.png" alt="morlabs_logo" width={150} height={150} />
                    </div>
                </div>
                <div>
                    <ul className="text-white flex justify-between gap-x-8">
                        <li className="cursor-pointer hover:bg-green-700 p-2 rounded-lg">About</li>
                        <li className="cursor-pointer hover:bg-green-700 p-2 rounded-lg">Features</li>
                        <li className="cursor-pointer hover:bg-green-700 p-2 rounded-lg ">How it Works</li>
                        <li className="cursor-pointer hover:bg-green-700 p-2 rounded-lg">Community</li>
                        <li className="cursor-pointer hover:bg-green-700 p-2 rounded-lg">Whitepaper</li>
                    </ul>
                </div>
            </nav>

            <nav className="flex justify-between w-full items-center md:hidden bg-black text-white mt-[10px] p-4">
                <div className="items-start">
                    <Image src="/morlabs-logo.png" alt="morlabs_logo" width={150} height={150} />
                </div>
                <div className="cursor-pointer text-xl" onClick={onMenuClick}>
                    <FaBars />
                </div>
            </nav>
        </>
    );
}