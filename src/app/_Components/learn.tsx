import { useState } from "react";

function FeatureSections() {
  // Independent state for each section
  const [isLearnExpanded, setIsLearnExpanded] = useState(false);
  const [isTestExpanded, setIsTestExpanded] = useState(false);
  const [isIntegrateExpanded, setIsIntegrateExpanded] = useState(false);
  const [isDeployExpanded, setIsDeployExpanded] = useState(false);

  // Function to handle toggling for each section
  const toggleSection = (setStateFunc) => {
    setStateFunc((prev) => !prev);
  };

  return (
    <div className="space-y-8 pt-10">
      {/* Learn Section */}
      <div
        className={`flex items-center justify-between border-t border-b border-white rounded-[46px] max-w-6xl mx-auto px-16 py-14 transition-all duration-300 ${
          isLearnExpanded ? "bg-green-700" : "bg-black"
        }`}
        onClick={() => toggleSection(setIsLearnExpanded)}
      >
        <h1
          className={`text-white text-lg font-bold transition-all duration-300 ${
            isLearnExpanded ? "translate-x-0" : "translate-x-1/2 absolute left-1/2"
          }`}
        >
          Learn
        </h1>
        {isLearnExpanded && (
          <div className="ml-auto">
            <p className="text-white text-base">
              Expand your knowledge with comprehensive resources.
            </p>
          </div>
        )}
      </div>

      {/* Test Section */}
      <div
        className={`flex items-center justify-between border-t border-b border-white rounded-[46px] max-w-6xl mx-auto px-16 py-14 transition-all duration-300 ${
          isTestExpanded ? "bg-green-700" : "bg-black"
        }`}
        onClick={() => toggleSection(setIsTestExpanded)}
      >
        <h1
          className={`text-white text-lg font-bold transition-all duration-300 ${
            isTestExpanded ? "translate-x-0" : "translate-x-1/2 absolute left-1/2"
          }`}
        >
          Test
        </h1>
        {isTestExpanded && (
          <div className="ml-auto">
            <p className="text-white text-base">
              Upload, test, and debug APIs & SDKs in our AI-powered sandbox.
            </p>
          </div>
        )}
      </div>

      {/* Integrate Section */}
      <div
        className={`flex items-center justify-between border-t border-b border-white rounded-[46px] max-w-6xl mx-auto px-16 py-14 transition-all duration-300 ${
          isIntegrateExpanded ? "bg-green-700" : "bg-black"
        }`}
        onClick={() => toggleSection(setIsIntegrateExpanded)}
      >
        <h1
          className={`text-white text-lg font-bold transition-all duration-300 ${
            isIntegrateExpanded ? "translate-x-0" : "translate-x-1/2 absolute left-1/2"
          }`}
        >
          Integrate
        </h1>
        {isIntegrateExpanded && (
          <div className="ml-auto">
            <p className="text-white text-base">
              Seamlessly connect with our powerful API integrations.
            </p>
          </div>
        )}
      </div>

      {/* Deploy Section */}
      <div
        className={`flex items-center justify-between border-t border-b border-white rounded-[46px] max-w-6xl mx-auto px-16 py-14 transition-all duration-300 ${
          isDeployExpanded ? "bg-green-700" : "bg-black"
        }`}
        onClick={() => toggleSection(setIsDeployExpanded)}
      >
        <h1
          className={`text-white text-lg font-bold transition-all duration-300 ${
            isDeployExpanded ? "translate-x-0" : "translate-x-1/2 absolute left-1/2"
          }`}
        >
          Deploy
        </h1>
        {isDeployExpanded && (
          <div className="ml-auto">
            <p className="text-white text-base">
              Deploy your solution quickly and efficiently.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default FeatureSections;
