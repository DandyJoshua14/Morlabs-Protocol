"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image"
import { FaBarsStaggered } from "react-icons/fa6";
import { GiCancel } from "react-icons/gi";

// Define navItems here, or import them if they are defined in another file.

// const navItems = {
//   APIs: [
//     { name: "NFT API", description: "NFT data access", href: '/docs' },
//     // ... other items
//   ],
//   // ... other sections
// };

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li className="menu-item">
      <Link href={href || "#"}>
        <span className="menu-text">{children}</span>
      </Link>
    </li>
  );
}

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(prev => !prev)
  }



  return (
    <div className="w-[100%] flex justify-center items-center">
      <div className=" w-full md:w-[87%] flex top-0 z-50 border-0 fixed">
        {/* MOBILE VIEW NAV BAR */}
        <div className="navbar text-white py-3 lg:hidden items-center" style={{ background: 'black' }}>
          <div className="lg:hidden">
            <div className="dropdown flex justify-evenly w-[100vw] items-center lg:hidden">


              <FaBarsStaggered style={{ display: open ? 'none' : 'block' }} onClick={handleToggle} size={15} />
              <GiCancel style={{ display: open ? 'block' : 'none' }} onClick={handleToggle} size={17} />

              <Image alt="morlabs_logo" width={100} height={70} src="/logos/morlabs-logo.svg" />
              <button className="rounded-[30px] w-auto text-white text-[0.8rem] hover:border-gray-700 border-white border-[0.5px] py-3 px-4 lg:hidden hover:bg-gray-700">Connect wallet</button>




              <ul
                className={`${open ? "max-h-96" : "max-h-0"
                  } overflow-hidden transition-all duration-500 transform ${open ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                  } bg-white rounded-b-lg top-[7vh] absolute lg:hidden z-[1] mt-3 w-[100%] p-2 shadow py-3`}
              >
                <li><Link href="#">
                  <button
                    className="font-medium flex items-center p-2"
                    style={{ color: "black" }}
                  >
                    For Developers

                  </button>
                </Link></li>
                <li>
                  <details>
                    <summary><Link href="/signup-form">
                      <button
                        className="font-medium flex items-center p-2"
                        style={{ color: "black" }}
                      >
                        Community

                      </button>
                    </Link></summary>
                  </details>
                </li>

                <li>
                  <details>
                    <summary><Link href="/">
                      <button
                        className="font-medium flex items-center p-2"
                        style={{ color: "black" }}
                      >
                        Company

                      </button>
                    </Link></summary>
                  </details></li>

                <li>
                  <details>
                    <summary><Link href="/docs">
                      <button
                        className="font-medium flex items-center p-2"
                        style={{ color: "black" }}
                      >
                        Docs

                      </button>
                    </Link></summary>
                  </details>
                </li>
                <div className="mt-5 flex w-full justify-evenly items-center gap-x-10">

                  <i className="fa-brands fa-twitter text-base text-green-600" />

                  <i className="fa-brands fa-facebook text-base text-green-600" />

                  <i className="fa-brands fa-instagram text-base text-green-600" />

                </div>
              </ul>

            </div>




          </div>
        </div>
        {/* MOBILE NAV BAR ENDS HERE */}

        {/* WEB RESPONSIVENESS */}
        <div className="navbar text-white py-3 hidden lg:flex rounded-b-[35px] px-10 items-center" style={{ background: 'black' }}>
          <div className="navbar-start">
            <Link className="btn mt-5 btn-ghost hidden lg:block text-xl ml-5" href="/">
              <Image alt="morlabs_logo" width={150} height={50} src="/logos/morlabs-logo.svg" />
            </Link>
          </div>
          <div className="navbar-end">
            <div className="navbar-center hidden lg:flex ">

              <ul className="menu menu-horizontal px-1">
                <li>
                  <Link href="/signup-form" className="font-medium flex items-center"
                    style={{ color: "white" }}>

                    About Us


                  </Link>

                </li>
                <li>
                  <details>
                    <summary className="font-medium flex items-center"
                      style={{ color: "white" }}>
                      Features

                    </summary>
                    <ul className="p-2 bg-black text-white">
                      <li><Link href="#">Web2-to-Web3</Link></li>
                      <li><Link href="#">Payment</Link></li>
                      <li><Link href="#">DeFi</Link></li>
                      <li><Link href="#">Gaming</Link></li>
                      <li><Link href="#">Publish your API</Link></li>
                    </ul>
                  </details></li>
                <li>
                  <Link href="/signup-form" className="font-medium flex items-center"
                    style={{ color: "white" }}>

                    How It Works


                  </Link>

                </li>


                <li>
                  <Link href="/signup-form" className="font-medium flex items-center"
                    style={{ color: "white" }}>

                    Community


                  </Link>

                </li>


              </ul>

            </div>

            {/* <button className="rounded-[30px] text-white hover:border-gray-700 border-white border-[0.5px] py-3 hidden lg:block lg:px-5 hover:bg-gray-700">Connect wallet</button> */}
          </div>
        </div>
        {/* END OF WEB RESPONSIVENESS */}
      </div>
    </div >
  );
};

export default Navbar;
