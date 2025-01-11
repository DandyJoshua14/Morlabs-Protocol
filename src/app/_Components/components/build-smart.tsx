import Image from "next/image";


export const BuildSmart = () => {
  return (
    <div className="bg-black w-full text-white pb-5 py-26 mx-auto pt-10">

      <div className="flex justify-center flex-col items-center">
        <div className="flex justify-center flex-col items-center mx-5 py-30 bg-black border rounded-[45px] p-8 w-[95%]">

  {/* Main Heading Section */}
  <div className="container mx-auto">
    <h2 className="text-white font-bold text-2xl lg:text-3xl mb-4">
      Build smarter, no matter your experience level
    </h2>
    <p className="text-gray-400 text-lgw-full lg:w-8/12 px-4">
      MorLabs empowers every developer to innovate faster and more efficiently in Web3.
    </p>
  </div>

  {/* Content Section */}
  <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between lg:space-x-12">
    {/* Features Section */}
    <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-6">
      {/* For Experienced Devs */}
      <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 text-white w-80">
        <div className="flex items-center mb-4">
          <span className="bg-green-500 h-10 w-10 flex items-center justify-center rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.982h4.181c.97 0 1.371 1.24.588 1.81l-3.39 2.464 1.286 3.982c.3.921-.755 1.688-1.539 1.11l-3.39-2.464-3.39 2.464c-.784.578-1.838-.189-1.539-1.11l1.286-3.982-3.39-2.464c-.784-.57-.383-1.81.588-1.81h4.181l1.286-3.982z" />
            </svg>
          </span>
          <h3 className="ml-4 text-lg font-bold">For experienced devs</h3>
        </div>
        <p className="text-gray-400">
          Streamline your workflow with ready-to-use tools that reduce time spent on repetitive tasks.
        </p>
      </div>

      {/* For New Devs */}
      <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 text-white w-80">
        <div className="flex items-center mb-4">
          <span className="bg-green-500 h-10 w-10 flex items-center justify-center rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M8.5 4.5a2 2 0 114 0v2a2 2 0 01-4 0v-2zM4 9.5A4.5 4.5 0 018.5 5h3A4.5 4.5 0 0116 9.5v3A4.5 4.5 0 0111.5 17h-3A4.5 4.5 0 014 12.5v-3z" />
            </svg>
          </span>
          <h3 className="ml-4 text-lg font-bold">For new devs</h3>
        </div>
        <p className="text-gray-400">
          Skip the steep learning curve. Build with confidence using tools that simplify complex processes.
        </p>
      </div>
    </div>

    {/* 3D Object */}
    <div className="mt-10 lg:mt-0">
      <img
        src="/path-to-3d-object.png"
        alt="3D Decorative Object"
        className="h-80 w-auto mx-auto"
      />
    </div>
  </div>

        </div>

      </div>
    </div>
  );
};

export default BuildSmart;
