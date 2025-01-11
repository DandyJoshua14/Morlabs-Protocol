
import { Navbar } from "./_Components/components/navbar";
import { Footer } from "./_Components/components/footer";
import '@fortawesome/fontawesome-free/css/all.min.css';



import { FaEthereum, FaBitcoin } from 'react-icons/fa';
import { SiSolana, SiPolkadot, SiChainlink } from 'react-icons/si';
import { MagnifyingGlassIcon, ArrowPathIcon, CloudArrowUpIcon } from "@heroicons/react/24/outline";
// sections
import VideoIntro from "./_Components/get-started";
import Feature from "./_Components/feature";

import FAQ from "./_Components/faq";
import Hero from "./_Components/hero";
import BuildSmart from "./_Components/components/build-smart";
import Howitworks from "./_Components/howitworks";
// import Faqs from "./faqs";
// export default function Campaign() {
export default function Home() {
  const providers = [
    { name: 'Ethereum', icon: <FaEthereum />, link: '#ethereum' },
    { name: 'Solana', icon: <SiSolana />, link: '#solana' },
    { name: 'Polkadot', icon: <SiPolkadot />, link: '#polkadot' },
    { name: 'Chainlink', icon: <SiChainlink />, link: '#chainlink' },
    { name: 'Bitcoin', icon: <FaBitcoin />, link: '#bitcoin' },
  ];
  return (
    <>
      <div className="bg-[black] w-full overflow-hidden min-h-screen">
        <Navbar />
        <Hero />
      </div>
      <div className="bg-gradient-to-b from-black to-black min-h-screen overflow-hidden w-full">
        <Feature />

        <BuildSmart />
        <Howitworks />
        

    
        <VideoIntro />
        {/* <Testimonials /> */}
        {/* <Testimonials /> */}
        <FAQ />
        <Footer />
        {/* <FixedPlugin /> */}
      </div>
    </>

  );
}
