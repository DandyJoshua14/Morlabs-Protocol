
import { FaEthereum, FaBitcoin, FaLinkedin, FaGithub } from 'react-icons/fa'; // Placeholder icons
import { SiSolana, SiPolkadot, SiChainlink } from 'react-icons/si'; // Web3 specific icons

const companies = [
  { name: "Ethereum", icon: <FaEthereum /> },
  { name: "Solana", icon: <SiSolana /> },
  { name: "Polkadot", icon: <SiPolkadot /> },
  { name: "Chainlink", icon: <SiChainlink /> },
  { name: "Bitcoin", icon: <FaBitcoin /> },
  // Add more Web3 companies as needed
];
/*
This one is okay. It's not using Material tailwind

Oya, now make we enter the pages
okey
*/
const TrustedCompanies = () => {
  return (
    <section className="trusted-section py-10 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Trusted by 100+ Web3 Companies</h2>
        <p className="text-lg mb-8">Partnering with the leading names in decentralized technologies.</p>

        <div className="flex flex-wrap justify-center items-center gap-8">
          {companies.map((company, index) => (
            <div key={index} className="company-card flex flex-col items-center">
              <div className="company-icon text-5xl text-indigo-400 mb-2 hover:text-indigo-600 transition-all">
                {company.icon}
              </div>
              <p className="company-name text-sm font-semibold">{company.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;
