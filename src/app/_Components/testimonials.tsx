"use client";

import React from "react";
import { UserIcon } from "@heroicons/react/24/solid";
import TestimonialCard from "../components/testimonial-card";
import Image from "next/image";
import { FiArrowLeftCircle, FiArrowRightCircle  } from "react-icons/fi";


export function Testimonials() {
  return (
    <div className="bg-black px-5 text-white py-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Why developers need Morlabs</h2>
         </div>

      {/* Testimonials container */}
      <div className="flex items-center gap-x-6 w-full flex-row mg:flex-row justify-center overflow-scroll">
        {/* First testimonial */}
        <div className="hidden md:flex flex-col justify-start items-start py-14 p-8 max-w-[350px] h-[300px] w-full">
        <FiArrowLeftCircle size={60} className="text-white" />
        </div>

        {/* Highlighted testimonial */}
        <div className="bg-gradient-to-br from-[#C482FA] via-[#FEAFD8] to-[#D0E6F5] text-black p-8 rounded-3xl h-auto max-w-[550px] py-10 w-full mx-auto">

          {/* className="bg-gradient-to-b from-teal-400 to-green-500 text-black rounded-xl p-8 w-[350px]"> */}
          <h3 className="text-2xl font-bold mb-4">Save Time</h3>
          <p className="mb-5 text-xl font-medium">
          Stop reinventing the wheel. Access pre-built APIs and SDKs to get your projects up and running in no time.</p>
            
            
          
          
         
        </div>

        {/* Third testimonial */}
        <div className="hidden md:flex p-8 max-w-[350px] flex-col justify-start items-start rounded-xl py-14 w-full">
        <FiArrowRightCircle size={60} className="text-white" />
        </div>
      </div>


      
    </div>
  );
}


export default Testimonials;
