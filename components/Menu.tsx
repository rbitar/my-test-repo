import React, { useState, useRef, useEffect } from 'react';

interface MenuProps {
  label: string;
  items: string[];
}

export default function Menu({ label, items }: MenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const menuRef = useRef<HTMLDivElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isOpen && menuRef.current) {
      const rect = menuRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + 8,
        left: rect.left,
      });
    }
  }, [isOpen]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  return (
    <div ref={menuRef} className="relative">
      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="text-gray-900 font-medium hover:text-gray-700 flex items-center gap-1 transition-colors duration-200"
      >
        {label}
        <i
          className={`ri-arrow-down-s-line transition-transform duration-300 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        ></i>
      </button>

      {isOpen && (
        <div
          ref={popoverRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            position: 'fixed',
            top: `${position.top}px`,
            left: `${position.left}px`,
          }}
          className="z-50 bg-white border border-gray-200 rounded-lg shadow-lg py-2 w-60"
        >
          {items.map((item, index) => (
            <button
              key={index}
              className="w-full text-left px-4 py-2 text-gray-900 hover:bg-gray-100 text-sm font-medium transition-colors duration-200"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
