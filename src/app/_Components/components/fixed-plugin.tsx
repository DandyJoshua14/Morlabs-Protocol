"use client";
import Image from "next/image";
import React from 'react';
import Link from "next/link";

const FixedPlugin = () => {
  return (
    <Link href="/" target="_blank">
      <button
        className="btn  hover:bg-green-900 hover:text-white btn-sm fixed bottom-4 right-4 flex gap-1 pl-2 items-center border border-white bg-white text-black"
      >

        <Image
          width={128} 
          height={128}
          className="w-5 h-5"
          alt="Morlabs"
          src="/favicon.jpg"
        />{" "}
        Morlabs-Protocols
      </button>
    </Link>
  );
}
export default FixedPlugin;