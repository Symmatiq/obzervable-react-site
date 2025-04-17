'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navItems = [
  { name: 'Products', href: '/products' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Integrations', href: '/integrations' },
  { name: 'Docs', href: '/docs' },
  { name: 'Resources', href: '/resources' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              {/* Logo placeholder */}
              <div className="h-8 w-8 bg-primary rounded-md flex items-center justify-center text-white font-bold">O</div>
              <span className="ml-2 text-xl font-bold text-primary">Obzervable</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            <a
              href="http://app.obzervable.com/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-4 py-2 text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-light transition-colors duration-200"
            >
              Sign Up
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              aria-expanded="false"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-accent"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="http://app.obzervable.com/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 text-base font-medium text-primary hover:text-white hover:bg-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </nav>
  );
} 