import { MagnifyingGlassIcon, ArrowPathIcon, CloudArrowUpIcon } from "@heroicons/react/24/outline";

const Howitworks = () => {
  return (
    <div className="flex flex-col items-center py-10 px-4 bg-black">
      <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-center leading-relaxed text-white">
        How it Works
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {/* Card 1 */}
        <div className="flex flex-col justify-center items-center bg-gradient-to-l from-green-700 to-black rounded-2xl p-10 text-center">
          <MagnifyingGlassIcon className="h-16 w-16 text-white mb-4" />
          <span className="text-lg text-white">Browse SDKs & APIs</span>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col justify-center items-center bg-gradient-to-l from-green-700 to-black rounded-2xl p-10 text-center">
          <ArrowPathIcon className="h-16 w-16 text-white mb-4" />
          <span className="text-lg text-white">
            Integrate seamlessly into your project
          </span>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col justify-center items-center bg-gradient-to-l from-green-700 to-black rounded-2xl p-10 text-center">
          <CloudArrowUpIcon className="h-16 w-16 text-white mb-4" />
          <span className="text-lg text-white">
            Go live with web3 functionality
          </span>
        </div>
      </div>
    </div>
  );
};

export default Howitworks;
