import React from 'react';

export default function BitcoinLoans() {
  const steps = [
    {
      title: 'Deposit BTC as collateral',
      icon: 'ri-database-line',
    },
    {
      title: 'Borrow funds (USD or USDC)',
      icon: 'ri-calendar-check-line',
    },
    {
      title: 'Repay the loan on your schedule',
      icon: 'ri-money-dollar-circle-line',
    },
    {
      title: 'Receive your Bitcoin back once repaid',
      icon: 'ri-hand-coin-line',
    },
  ];

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-medium text-gray-900 mb-8 leading-tight">
            What is a{' '}
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

          {/* Description */}
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            A Bitcoin-backed loan is a secured loan that uses your BTC as
            collateral. Instead of selling your Bitcoin, you borrow against
            it—allowing you to stay invested while gaining access to cash.
          </p>
        </div>

        {/* How it works section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            How it works?
          </h3>

          {/* Process Steps */}
          <div className="flex flex-col lg:flex-row items-stretch justify-between gap-6 lg:gap-4">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                {/* Step */}
                <div className="flex-1 flex flex-col items-center">
                  {/* Icon Container */}
                  <div className="mb-6 h-32 w-32 flex items-center justify-center">
                    <i className={`${step.icon} text-7xl text-gray-700`}></i>
                  </div>

                  {/* Title */}
                  <p className="text-center text-gray-900 font-semibold text-base leading-relaxed">
                    {step.title}
                  </p>
                </div>

                {/* Arrow separator (hidden on mobile, shown on lg) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex items-start justify-center pt-8">
                    <div className="text-gray-400 text-3xl">
                      <i className="ri-arrow-right-line"></i>
                    </div>
                  </div>
                )}

                {/* Mobile arrow */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex items-center justify-center py-4">
                    <div className="text-gray-400 text-2xl">
                      <i className="ri-arrow-down-line"></i>
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
