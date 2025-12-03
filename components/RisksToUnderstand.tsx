import React from 'react';

export default function RisksToUnderstand() {
  const risks = [
    {
      title: 'Volatility risk',
      description:
        'If BTC drops significantly, you may face a margin call or liquidation.',
      icon: 'ri-alert-line',
    },
    {
      title: 'No FDIC insurance',
      description:
        'These are not bank products and are not government guaranteed.',
      icon: 'ri-line-chart-line',
    },
    {
      title: 'Repayment obligations',
      description:
        "Like any loan, you're still responsible for repayment, regardless of Bitcoin's price.",
      icon: 'ri-checkbox-multiple-line',
    },
  ];

  return (
    <section className="bg-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-medium text-gray-900 mb-8 leading-tight">
            Risks to{' '}
            <span
              className="italic font-normal"
              style={{
                fontFamily: 'Libre Baskerville, serif',
                fontStyle: 'italic',
              }}
            >
              understand
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Bitcoin-backed loans come with specific risks that should be
            carefully considered:
          </p>
        </div>

        {/* Risks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {risks.map((risk, index) => (
            <div
              key={index}
              className="bg-black rounded-3xl p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-200"
            >
              {/* Icon */}
              <div className="mb-6 h-20 w-20 flex items-center justify-center">
                <i className={`${risk.icon} text-5xl text-white`}></i>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-4">
                {risk.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed text-base">
                {risk.description}
              </p>
            </div>
          ))}
        </div>

        {/* Advisory Text */}
        <div className="text-center mb-12">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We recommend speaking to a financial advisor to understand how this
            fits your overall strategy.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-900 transition-colors duration-200">
            Understand Security Parameters
          </button>
        </div>
      </div>
    </section>
  );
}
