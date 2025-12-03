import React from 'react';

export default function LearnMoreCTA() {
  const links = [
    'Crypto-Backed Lending',
    'Crypto Tax Loss Harvesting',
    'Bitcoin-backed Loan Rates',
  ];

  return (
    <section className="bg-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side - Heading */}
          <div className="flex-1">
            <h2
              className="text-4xl lg:text-5xl font-medium text-white leading-tight italic"
              style={{
                fontFamily: 'Libre Baskerville, serif',
                fontStyle: 'italic',
              }}
            >
              Learn more about Bitcoin-backed lending
            </h2>
          </div>

          {/* Middle - Links and Button */}
          <div className="flex-1 flex flex-col items-center lg:items-center gap-8">
            {/* Links */}
            <div className="flex flex-col gap-3 text-center">
              {links.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-blue-500 hover:text-blue-400 text-lg font-medium transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Button */}
            <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-200">
              Visit Our Crypto Loans Learning Hub
            </button>
          </div>

          {/* Right Side - Large Arrow Icon */}
          <div className="flex-1 flex items-center justify-center lg:justify-end">
            <div className="h-32 w-32 flex items-center justify-center">
              <i
                className="ri-arrow-right-up-line text-white"
                style={{ fontSize: '11rem' }}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
