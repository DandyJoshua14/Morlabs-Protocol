"use client";

import React from "react";
import Image from "next/image";
import { PlayIcon } from "@heroicons/react/24/outline";
// import { JoinWaitlist } from './hero';
import Link from "next/link";



export function VideoIntro() {
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="flex justify-center flex-col items-center mx-5 py-20 bg-[radial-gradient(circle_at_bottom,_#195B41,_black_60%)] p-8 w-[100%]">

    
<h1 className="text-white mb-3 text-center text-3xl font-bold w-[90%] lg:w-[100%]">The future of Web3 development  is waiting. </h1>
<h1 className="text-white text-3xl font-bold lg:w-5/14 m-4 text-center w-[90%] lg:w-[55%]">
Are you in? 
</h1>
<div>
  <Link href="/signup-form" passHref>
    <button
      type="submit"
      className="p-2 border-t border-[2px] border-r border-white bg-gree-500 text-white rounded hover:bg-green-600"
    >
     LFG! JoinWaitlist
    </button>
  </Link>

  {/* <JoinWaitlist/> */}
</div>

</div>
    </div>



  );
}

export default VideoIntro;