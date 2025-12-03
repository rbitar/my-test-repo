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
      <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-4">
        We're committed to providing secure, transparent, and personalized
        financial solutions that help you make the most of your digital assets.
      </p>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-4">
        With a focus on innovation and customer service, Arch is building the
        future of crypto-backed lending.
      </p>
    </div>
  );
};

export default About;
