import React from 'react';
import Banner from './Banner';

export default function Hero() {
  return (
    <div className="flex flex-col lg:flex-row relative">
      {/* Left Side - Light Background */}
      <div className="w-full lg:w-1/2 bg-white px-4 sm:px-8 lg:px-12 py-12 lg:py-24 flex flex-col justify-center">
        {/* Spacer for overlaid banner */}
        <div className="h-16"></div>

        {/* Main Heading */}
        <h1 className="text-4xl lg:text-5xl font-medium text-gray-900 mb-6 leading-tight">
          Put your Bitcoin to work –
          <span
            className="italic font-normal"
            style={{
              fontFamily: 'Libre Baskerville, serif',
              fontStyle: 'italic',
            }}
          >
            {' '}
            without selling it.
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-md">
          Bitcoin-backed loans allow you to borrow against your crypto without
          liquidating your holdings. This page explains how they work, why they
          make sense, and what to consider before using one.
        </p>

        {/* CTA Button */}
        <div>
          <button className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-900 inline-flex items-center gap-2 transition-colors duration-200">
            Learn More
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>

      {/* Right Side - Dark Background with Bitcoin Image */}
      <div className="w-full lg:w-1/2 bg-black px-0 sm:px-0 lg:px-0 py-12 lg:py-24 flex items-center justify-center min-h-screen lg:min-h-[calc(100vh-80px)] max-h-[600px] lg:max-h-none">
        <img
          src="https://sb.frontend.co/storage/v1/object/public/app/projects/8f801804-b33f-44e8-82f5-1346e5c5cb95/bitcoins.png"
          alt="Bitcoin coins"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Overlaid Banner */}
      <Banner />
    </div>
  );
}
