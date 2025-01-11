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
              <button className="rounded-[30px] w-auto text-white text-[0.8rem] hover:border-gray-700 border-white border-[0.5px] py-3 px-4 lg:hidden hover:bg-gray-700">JoinWaitList</button>




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
                  About Us

                  </button>
                </Link></li>
                <li>
                  <details>
                    <summary><Link href="/signup-form">
                      <button
                        className="font-medium flex items-center p-2"
                        style={{ color: "black" }}
                      >
                        Features

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
                       How It Works

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
                        Community

                      </button>
                    </Link></summary>
                  </details>
                </li>
                <div className="mt-5 flex w-full justify-evenly items-center gap-x-10">

                  <i className="fa-brands fa-twitter text-base text-green-600" />

                  <i className="fa-brands fa-telegram text-base text-green-600"></i>

                  <i className="fa-brands fa-linkedin text-base text-green-600"></i>

                </div>
              </ul>

            </div>




          </div>
        </div>
        {/* MOBILE NAV BAR ENDS HERE */}

        {/* WEB RESPONSIVENESS */}

<div
  className="navbar text-white py-3 hidden lg:flex rounded-b-[35px] px-10 items-center w-full"
  style={{ background: "black" }}
>
  <div className="navbar-start">
    <Link
      className="btn mt-5 btn-ghost hidden lg:block text-xl ml-5"
      href="/"
    >
      <Image
        alt="morlabs_logo"
        width={150}
        height={50}
        src="/logos/morlabs-logo.svg"
      />
    </Link>
  </div>
  <div className="navbar-end ml-auto">
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1 flex space-x-6">
        <li>
          <Link
            href="/about-us"
            className="font-medium flex items-center"
            style={{ color: "white" }}
          >
            About Us
          </Link>
        </li>
        <li>
          <details className="group">
            <summary
              className="font-medium flex items-center cursor-pointer"
              style={{ color: "white" }}
            >
              Features
            </summary>
            <ul className="p-2 bg-black text-white hidden group-open:block">
              <li>
                <Link href="/feature-1">Feature 1</Link>
              </li>
              <li>
                <Link href="/feature-2">Feature 2</Link>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <Link
            href="/how-it-works"
            className="font-medium flex items-center"
            style={{ color: "white" }}
          >
            How It Works
          </Link>
        </li>
        <li>
          <Link
            href="/community"
            className="font-medium flex items-center"
            style={{ color: "white" }}
          >
            Community
          </Link>
        </li>
      </ul>
    </div>
  </div>
</div>



        {/* END OF WEB RESPONSIVENESS */}
      </div>
    </div >
  );
};

export default Navbar;
