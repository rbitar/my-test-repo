import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Products Column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-6">
              Products
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Crypto Backed Loans
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Perpetual Income
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Tax Shield
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Pre-IPO Equity Loans
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Private Wealth
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-6">
              Company
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Security
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-6">
              Resources
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Crypto Loan Calculator
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Newsletter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Velocity with Mark Moss
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Media
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Glossary
                </a>
              </li>
            </ul>
          </div>

          {/* Socials Column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-6">
              Socials
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Full Width Legal/Disclaimer Section */}
        <div className="border-t border-gray-200 pt-12 mb-8">
          <div className="space-y-4 text-xs text-gray-600 leading-relaxed">
            <p>
              ChainFi, Inc (dba "Arch Lending" and referred to as "Arch" on this
              website) is not a bank.
            </p>

            <div>
              <p className="font-semibold text-gray-900 mb-1">Loan Services.</p>
              <p>
                Crypto backed loans ("Loans") are offered to U.S. borrowers by
                ChainFi, Inc. NMLS #2637200.{' '}
                <a href="#" className="text-blue-500 hover:text-blue-600">
                  NMLS Consumer Access
                </a>
                .
              </p>
            </div>

            <div>
              <p className="font-semibold text-gray-900 mb-1">
                Loan Availability.
              </p>
              <p>
                Loan availability may vary based on jurisdiction. Loans are
                currently not available to U.S. residents of AL, CA, DE, HI, MS,
                MT, NV, ND, RI, SC, SD, TX, VT, VA, or WA or to U.S. businesses
                in CA, DC, HI, MT, NV, NM, ND, RI, SD, or VT. We encourage you
                to contact us to determine if our loans are available in your
                state.
              </p>
            </div>

            <div>
              <p className="font-semibold text-gray-900 mb-1">
                Loan Agreement.
              </p>
              <p>
                Loans are issued pursuant to a loan agreement between Arch and
                you. This legally binding document outlines your rights,
                obligations, interest rates, repayment schedules, potential
                fees, default consequences, and any other terms and conditions
                related to your loan. Your loan agreement may contain
                state-specific provisions. By signing the loan agreement, you
                acknowledge your acceptance of these terms, so please ensure you
                understand every aspect before proceeding.
              </p>
            </div>

            <div>
              <p className="font-semibold text-gray-900 mb-1">
                Interest Rates.
              </p>
              <p>
                Annual interest rates are subject to change and may vary based
                on loan type, the principal amount requested, and the borrower's
                jurisdiction of residence.
              </p>
            </div>

            <div>
              <p className="font-semibold text-gray-900 mb-1">
                Supported Assets.
              </p>
              <p>
                For the latest list of supported assets, refer to our{' '}
                <a href="#" className="text-blue-500 hover:text-blue-600">
                  Help Center
                </a>
                .
              </p>
            </div>

            <div>
              <p className="font-semibold text-gray-900 mb-1">
                No Financial, Investment or Tax Advice Provided.
              </p>
              <p>
                The information on this website, articles, guides, tools, or
                communications, is for general informational purposes only. It
                is not, and should not be construed as, financial, investment,
                tax, or other professional advice. Arch is not a financial
                advisor, investment advisor, broker, tax advisor, or accounting
                firm. We do not provide personalized advice or recommendations
                for your unique financial situation or goals. You should consult
                a qualified professional before making any financial, investment
                or tax decisions. Any examples, hypothetical scenarios,
                calculator results, or general discussions of financial or tax
                concepts are for illustration only and don't guarantee specific
                outcomes or apply to your personal circumstances. By using this
                website, you acknowledge you are solely responsible for your
                financial decisions and will seek independent professional
                advice as needed.
              </p>
            </div>

            <div>
              <p className="font-semibold text-gray-900 mb-1">
                No Guarantee of Offers, Loans, or Returns.
              </p>
              <p>
                Your use or access to this website or platform does not
                guarantee the availability of any current and/or future offer,
                promotion, terms, loan, or return. All offers, promotions,
                terms, and loans are subject to availability and the sole
                discretion of Arch. We reserve the right to modify or withdraw
                any offering at any time without prior notice.
              </p>
            </div>

            <div>
              <p className="font-semibold text-gray-900 mb-1">
                State-Specific Disclosures.
              </p>
              <p className="mb-2">
                Additional state-specific disclaimers may apply depending on
                your location. We encourage you to review all relevant
                disclaimers and terms carefully before proceeding.
              </p>
              <p className="mb-2">
                <span className="font-semibold">
                  State of Idaho Disclaimer:
                </span>{' '}
                In Idaho, ChainFi, Inc is doing business as Arch Lending and
                does not conduct activity under the name Arch (License Number:
                RRL-11362).
              </p>
              <p className="mb-2">
                <span className="font-semibold">Michigan:</span> ChainFi, Inc
                (dba Arch Lending) holds a Michigan Regulatory Loan License
              </p>
              <p className="mb-2 ml-4">
                License Number: RL-0026469
                <br />
                Effective Date: February 28, 2025
                <br />
                Regulator: Michigan Department of Insurance and Financial
                Services
                <br />
                Address: 530 W Allegan St. 7th Floor, Lansing, MI 48933
                <br />
                Phone Number: 517-284-8800 or 877-999-6442 (Toll-Free)
              </p>
              <p>
                ChainFi, Inc (dba "Arch Lending"), 595 Broadway, Floor 4, New
                York, NY 10012
              </p>
            </div>

            <div>
              <p className="font-semibold text-gray-900 mb-1">
                Customer Support.
              </p>
              <p className="mb-2">
                For general questions, visit our{' '}
                <a href="#" className="text-blue-500 hover:text-blue-600">
                  Help Center
                </a>{' '}
                or use the Intercom chat widget in the bottom right corner of
                any screen on this website.
              </p>
              <p>
                For customer service or complaints, email us at{' '}
                <a
                  href="mailto:support@archlending.com"
                  className="text-blue-500 hover:text-blue-600"
                >
                  support@archlending.com
                </a>
                , or call us toll-free: +1 877 665 4759 between Monday-Friday
                from 9am-7pm ET and Saturday-Sunday from 10am-5pm ET.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-gray-600">
            <span>© 2025 All Rights Reserved</span>
            <span className="text-gray-400">•</span>
            <a href="#" className="hover:text-gray-900">
              Privacy Policy
            </a>
            <span className="text-gray-400">•</span>
            <a href="#" className="hover:text-gray-900">
              Terms of Service
            </a>
            <span className="text-gray-400">•</span>
            <a href="#" className="hover:text-gray-900">
              GLBA
            </a>
            <span className="text-gray-400">•</span>
            <a href="#" className="hover:text-gray-900">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
