import React from 'react';

export default function HowItWorks() {
  const features = [
    {
      title: 'No monthly payments',
      description:
        'Interest accrues during the loan term. No recurring payments required.',
      icon: 'ri-time-line',
    },
    {
      title: 'No rehypothecation',
      description:
        'Your Bitcoin is never lent out or reused. It stays securely held with qualified custodians for the life of your loan.',
      icon: 'ri-lock-line',
    },
    {
      title: 'Transparent pricing',
      description: 'Clear, straightforward terms—no hidden fees or surprises.',
      icon: 'ri-bar-chart-line',
    },
    {
      title: 'Flexible structures',
      description:
        'Loans can be customized to meet short-term liquidity needs or longer-term financial strategies.',
      icon: 'ri-settings-line',
    },
    {
      title: 'High-trust relationships',
      description:
        'We work with individuals, miners, businesses, and family offices who value security, simplicity, and service.',
      icon: 'ri-shake-hands-line',
    },
    {
      title: 'White-glove support',
      description:
        'Our team provides personalized, hands-on service throughout the entire loan lifecycle—from onboarding to repayment.',
      icon: 'ri-check-double-line',
    },
  ];

  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: '#32572C' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-medium text-white mb-6 leading-tight">
            How we do it at <span className="italic font-normal">Arch</span>
          </h2>

          {/* Descriptive text */}
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

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 flex flex-col items-start hover:shadow-lg transition-shadow duration-200"
            >
              {/* Icon Container */}
              <div className="mb-6 w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                <i className={`${feature.icon} text-3xl text-gray-600`}></i>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
