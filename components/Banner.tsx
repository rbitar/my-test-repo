import React from 'react';

export default function Banner() {
  return (
    <div className="absolute top-16 left-0 right-0 z-30 flex justify-center px-4">
      <style>{`
        .banner-scroll {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .banner-scroll::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <div
        className="bg-black rounded-full px-6 py-3 hidden md:flex items-center justify-center gap-3 banner-scroll w-full md:w-auto"
        style={{ maxWidth: '600px', lineHeight: '1.2' }}
      >
        <span className="text-white text-sm font-medium whitespace-nowrap flex-shrink-0 md:whitespace-normal text-center">
          Arch* has teamed up with Bitcoin educator Mark Moss to launch
          TaxShield
        </span>
        <i className="ri-arrow-right-s-line text-white flex-shrink-0"></i>
      </div>
    </div>
  );
}
