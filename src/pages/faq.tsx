import { useState } from "react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Morlabs?",
      answer: "Morlabs is a platform offering APIs, SDKs, and AI-powered tools for simplified Web3 development.",
    },
    {
      question: "Who is it for?",
      answer: "Both experienced developers and beginner looking to streamline Web3 development processes.",
    },
    {
      question: "What makes Morlabs different?",
      answer: "we combine ready-to-used tools with AI recommendation, bridging web2 simplicity with Web3 innovation.",
    },
    {
      question: "When will the platform be available?",
      answer: "The platform will be launched in Q1 2025.",
    },
  ];

  return (
    <section className="py-10 bg-black text-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Morlabs 101: What you need to know
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-600 rounded-lg p-4"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="font-semibold text-lg">{faq.question}</h3>
                {openIndex === index ? (
                  <MinusIcon className="w-6 h-6 text-white" />
                ) : (
                  <PlusIcon className="w-6 h-6 text-white" />
                )}
              </div>
              {openIndex === index && (
                <p className="mt-4 text-gray-300">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
