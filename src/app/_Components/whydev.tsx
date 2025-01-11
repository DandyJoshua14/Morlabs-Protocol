import { useEffect, useState } from "react";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

const WhyDev = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      bg: "bg-gradient-to-r from-purple-500 to-pink-500",
      title: "Save Time",
      description:
        "Stop reinventing the wheel. Access pre-built APIs and SDKs to get your projects up and running in no time.",
      image: "/images/slide1.png",
    },
    {
      bg: "bg-gradient-to-r from-purple-500 to-pink-500",
      title: "Seamless Integration",
      description:
        "Our tools are built for smooth deployment, letting you focus on innovation.",
      image: "/images/slide2.png",
    },
    {
      bg: "bg-gradient-to-r from-orange-500 to-red-500",
      title: "Bridge Web2 and Web3",
      description:
        "Simplify the learning curve, with tools designed to integrate decentralized technologies seamlessly.",
      image: "/images/slide3.png",
    },
    {
      bg: "bg-gradient-to-r from-orange-500 to-red-500",
      title: "AI Powered Tools",
      description:
        "Get smart recommendations tailored to your needs, saving you hours of research.",
      image: "/images/slide4.png",
    },
  ];

  const slideCount = slides.length;

  // Automatic slide transition
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideCount);
    }, 5000);
    return () => clearInterval(timer);
  }, [slideCount]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slideCount);
  };

  return (
    <>
      <div className="mx-auto flex flex-col items-center px-5 py-10 text-white">
        <h2 className="text-4xl font-bold text-center mb-8">
          Why developers need Morlabs
        </h2>
      </div>

      <div
        className={`relative flex flex-col items-center w-[50%] mx-auto p-6 ${slides[currentSlide].bg} text-white transition-all duration-500 rounded-lg shadow-lg`}
      >
        {/* Slide Content */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold mb-4">
            {slides[currentSlide].title}
          </h3>
          <p className="text-lg">{slides[currentSlide].description}</p>
        </div>

        {/* Slide Image */}
        <div className="w-full flex justify-center">
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="h-56 object-cover rounded-lg"
          />
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-[0]  top-1/2 transform -translate-y-1/2 p-2 rounded-full hover:bg-green-700 bg-opacity-70 transition"
        >
          <FiArrowLeftCircle size={60} className="text-white" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-[-120px] top-1/2 transform -translate-y-1/2 p-2 rounded-full hover:bg-green-700 bg-opacity-70 transition"
        >
          <FiArrowRightCircle size={60} className="text-white" />
        </button>
      </div>
    </>
  );
};

export default WhyDev;
