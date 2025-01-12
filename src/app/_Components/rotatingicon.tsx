import React, { useState, useEffect } from "react";

const RotatingIcons = () => {
  const icons = [
    "/icons/icon1.png",
    "/icons/icon2.png",
    "/icons/icon3.png",
    "/icons/icon4.png",
    "/icons/icon5.png",
    "/icons/icon6.png",
    "/icons/icon7.png",
    "/icons/icon8.png",
    "/icons/icon9.png",
    
    
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % icons.length);
    }, 2000); // Adjust speed of movement (2 seconds per step)
    return () => clearInterval(interval);
  }, [icons.length]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      {/* Curve with icons */}
      <div className="relative w-36 h-12">
        {icons.map((icon, index) => {
          // Calculate positions on the vertical half-circle
          const angle = (index * Math.PI) / (icons.length - 17) - Math.PI / 2; // Vertical downward curve
          const x = Math.sin(angle) * 280; // Adjust for elliptical shape (horizontal movement)
          const y = Math.cos(angle) * 160; // Radius: 140px (vertical depth)

          return (
            <img
              key={index}
              src={icon}
              alt={`Icon ${index + 1}`}
              className={`absolute w-12 h-12 transition-all duration-500 ${
                index === activeIndex
                  ? "opacity-0" // Fade out the active icon to prepare for horizontal movement
                  : "opacity-100"
              }`}
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
            />
          );
        })}
        
      </div>
{/* Vertical moving icon */}
<div className="absolute z-10 h-72 w-16 mt-9">
        <img
          src={icons[activeIndex]}
          alt="Moving Icon"
          className="absolute w-12 h-12 transition-transform duration-500"
          style={{
            transform: `translateY(${140}px)`, // Moves the icon from bottom to the top
          }}
        />
      </div>
      
      
      <div className="absolute inset-0 flex flex-col items-center justify-center translate-y-[380px]">
      <p className="text-lg">Backed by the best in the web3 space</p>
      <div className="flex space-x-4 m-0">
        <img src="/icons/icon10.png" alt="Solana Logo" className="w-36 h-20" />
        <img src="/icons/icon11.png" alt="Other Logo" className="w-20 h-20 " />
      </div>
      </div>
    </div>
  );
};


export default RotatingIcons;
