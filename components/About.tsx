import React from 'react';

const About: React.FC = () => {
  return (
    <div className="text-center">
      <h1
        className="text-5xl font-bold text-black mb-4"
        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
      >
        About Arch
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Empowering Bitcoin holders to access liquidity without giving up their
        long-term investment strategy.
      </p>
    </div>
  );
};

export default About;
