import React from 'react';
import Header from './Header';
import Hero from './Hero';
import HowItWorks from './HowItWorks';
import BitcoinLoans from './BitcoinLoans';
import WhyUseBitcoinLoans from './WhyUseBitcoinLoans';
import HowThisWorksFor from './HowThisWorksFor';
import RisksToUnderstand from './RisksToUnderstand';
import LearnMoreCTA from './LearnMoreCTA';
import Footer from './Footer';

export default function Home() {
  const productsItems = [
    'Crypto Backed Loans',
    'Perpetual Income',
    'Tax Shield',
    'Pre-IPO Equity Backed Loans',
    'Private Wealth',
  ];

  const companyItems = ['Security', 'About', 'Careers'];

  const resourcesItems = [
    'Help Center',
    'Blog',
    'Newsletter',
    'Compare',
    'Velocity with Mark Moss',
    'Crypto Loan Calculator',
    'Media',
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header
        productsItems={productsItems}
        companyItems={companyItems}
        resourcesItems={resourcesItems}
      />
      <Hero />
      <HowItWorks />
      <BitcoinLoans />
      <WhyUseBitcoinLoans />
      <HowThisWorksFor />
      <RisksToUnderstand />
      <LearnMoreCTA />
      <Footer />
    </div>
  );
}
