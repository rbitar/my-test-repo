import React from 'react';

export default function WhyUseBitcoinLoans() {
  const reasons = [
    {
      title: 'Stay invested in Bitcoin',
      description: 'Avoid triggering capital gains by not selling.',
      icon: 'ri-hand-coin-line',
    },
    {
      title: 'Access liquidity',
      description: 'Get cash when you need it, without giving up your BTC.',
      icon: 'ri-bank-card-line',
    },
    {
      title: 'Preserve long-term upside',
      description: 'Hold through cycles while putting your assets to work.',
      icon: 'ri-calculator-line',
    },
    {
      title: 'Plan more efficiently',
      description:
        'Use loans for tax strategies, reinvestment, or business growth.',
      icon: 'ri-building-line',
    },
  ];

  return (
    <section className="bg-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-medium text-white mb-8 leading-tight">
            Why use a{' '}
            <span
              className="italic font-normal"
              style={{
                fontFamily: 'Libre Baskerville, serif',
                fontStyle: 'italic',
              }}
            >
              Bitcoin-backed loan
            </span>
            ?
          </h2>
        </div>

        {/* Reasons Grid */}
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-8 lg:gap-4 mb-12">
          {reasons.map((reason, index) => (
            <React.Fragment key={index}>
              {/* Reason */}
              <div className="flex-1 flex flex-col items-center text-center">
                {/* Icon */}
                <div className="mb-6 h-20 w-20 flex items-center justify-center">
                  <i className={`${reason.icon} text-5xl text-white`}></i>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed text-base">
                  {reason.description}
                </p>
              </div>

              {/* Arrow separator (hidden on mobile, shown on lg) */}
              {index < reasons.length - 1 && (
                <div className="hidden lg:flex items-center justify-center">
                  <div className="text-gray-600 text-3xl">
                    <i className="ri-arrow-right-line"></i>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-200">
            Explore Strategic Use Cases
          </button>
        </div>
      </div>
    </section>
  );
}
