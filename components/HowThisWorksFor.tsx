import React from 'react';

export default function HowThisWorksFor() {
  const segments = [
    {
      title: 'Long-term Bitcoin holders',
      description: 'Looking to avoid selling during downturns.',
      icon: 'ri-user-line',
    },
    {
      title: 'Bitcoin miners',
      description: 'Managing expenses without drawing down reserves.',
      icon: 'ri-globe-line',
    },
    {
      title: 'Businesses & funds',
      description: 'Unlocking capital tied up in crypto treasury assets.',
      icon: 'ri-store-line',
    },
    {
      title: 'High-net-worth individuals',
      description: 'Interested in tax-efficient cash flow strategies.',
      icon: 'ri-vip-crown-line',
    },
  ];

  return (
    <section className="bg-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-medium text-white mb-8 leading-tight">
            Who this{' '}
            <span
              className="italic font-normal"
              style={{
                fontFamily: 'Libre Baskerville, serif',
                fontStyle: 'italic',
              }}
            >
              works for
            </span>
            ?
          </h2>

          {/* Description */}
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-lg text-white">
              At Arch Lending, we specialize in helping long-term Bitcoin
              holders access liquidity without giving up control.
            </p>
            <p className="text-lg text-white">
              While this page is for educational purposes only, here's how our
              approach to Bitcoin-backed loans is structured:
            </p>
          </div>
        </div>

        {/* Segments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {segments.map((segment, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-200"
            >
              {/* Icon */}
              <div className="mb-6 h-20 w-20 flex items-center justify-center">
                <i className={`${segment.icon} text-5xl text-gray-900`}></i>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                {segment.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed text-sm">
                {segment.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-200">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
