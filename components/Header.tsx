import React, { useState } from 'react';
import { PopupButton } from 'react-calendly';
import Menu from './Menu';

interface HeaderProps {
  productsItems: string[];
  companyItems: string[];
  resourcesItems: string[];
}

export default function Header({
  productsItems,
  companyItems,
  resourcesItems,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <>
      <header className="sticky top-4 z-50 mx-4 rounded-full bg-white border border-gray-200">
        <div className="w-full px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            {/* Logo - Far left */}
            <div className="flex-shrink-0">
              <img
                src="https://sb.frontend.co/storage/v1/object/public/app/projects/8f801804-b33f-44e8-82f5-1346e5c5cb95/logo.svg"
                alt="ARCH"
                className="h-5 w-auto"
              />
            </div>

            {/* Navigation - Far right */}
            <nav className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-6">
                <Menu label="Products" items={productsItems} />
                <Menu label="Company" items={companyItems} />
                <Menu label="Resources" items={resourcesItems} />
              </div>

              <div className="flex items-center gap-4 ml-6 pl-6 border-l border-gray-200">
                <button className="text-gray-900 font-medium hover:text-gray-700 transition-colors duration-200">
                  Sign in
                </button>
                <button className="text-gray-900 font-medium hover:text-gray-700 transition-colors duration-200">
                  Sign up
                </button>
                <PopupButton
                  url="https://calendly.com/d/46c-vc5-5rc/15-min-meeting-with-arch"
                  rootElement={document.body}
                  text="Book a call"
                  className="bg-black text-white px-5 py-1.5 rounded-full font-medium hover:bg-gray-900 transition-colors duration-200 text-sm"
                />
              </div>
            </nav>

            {/* Mobile menu button - Always visible */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-900 ml-auto text-2xl"
              aria-label="Toggle menu"
            >
              <i className={isMenuOpen ? 'ri-close-line' : 'ri-menu-line'}></i>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-20 z-50 bg-white border border-gray-200 rounded-2xl m-4 overflow-y-auto">
          <nav className="flex flex-col p-6 space-y-0">
            {/* Products Accordion */}
            <div className="border-b border-gray-200">
              <button
                onClick={() => toggleSection('products')}
                className="w-full flex justify-between items-center py-4 font-semibold text-gray-900 hover:text-gray-700 transition-colors"
              >
                <span>Products</span>
                <i
                  className={`ri-arrow-down-s-line transition-transform duration-300 ${
                    expandedSection === 'products' ? 'rotate-180' : 'rotate-0'
                  }`}
                ></i>
              </button>
              {expandedSection === 'products' && (
                <div className="space-y-2 pb-4 pl-4 bg-gray-50">
                  {productsItems.map((item, index) => (
                    <button
                      key={index}
                      className="w-full text-left text-gray-700 hover:text-gray-900 text-sm py-2 transition-colors"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Company Accordion */}
            <div className="border-b border-gray-200">
              <button
                onClick={() => toggleSection('company')}
                className="w-full flex justify-between items-center py-4 font-semibold text-gray-900 hover:text-gray-700 transition-colors"
              >
                <span>Company</span>
                <i
                  className={`ri-arrow-down-s-line transition-transform duration-300 ${
                    expandedSection === 'company' ? 'rotate-180' : 'rotate-0'
                  }`}
                ></i>
              </button>
              {expandedSection === 'company' && (
                <div className="space-y-2 pb-4 pl-4 bg-gray-50">
                  {companyItems.map((item, index) => (
                    <button
                      key={index}
                      className="w-full text-left text-gray-700 hover:text-gray-900 text-sm py-2 transition-colors"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Resources Accordion */}
            <div className="border-b border-gray-200">
              <button
                onClick={() => toggleSection('resources')}
                className="w-full flex justify-between items-center py-4 font-semibold text-gray-900 hover:text-gray-700 transition-colors"
              >
                <span>Resources</span>
                <i
                  className={`ri-arrow-down-s-line transition-transform duration-300 ${
                    expandedSection === 'resources' ? 'rotate-180' : 'rotate-0'
                  }`}
                ></i>
              </button>
              {expandedSection === 'resources' && (
                <div className="space-y-2 pb-4 pl-4 bg-gray-50">
                  {resourcesItems.map((item, index) => (
                    <button
                      key={index}
                      className="w-full text-left text-gray-700 hover:text-gray-900 text-sm py-2 transition-colors"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Auth Buttons */}
            <div className="space-y-3 pt-4 border-t border-gray-200">
              <button className="w-full text-left text-gray-900 font-medium hover:text-gray-700 py-2 transition-colors">
                Sign in
              </button>
              <button className="w-full text-left text-gray-900 font-medium hover:text-gray-700 py-2 transition-colors">
                Sign up
              </button>
              <button className="w-full bg-black text-white py-3 rounded-full font-medium hover:bg-gray-900 transition-colors text-sm">
                Book a call
              </button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
