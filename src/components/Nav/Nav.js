import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full sm:w-64 sm:h-screen sm:fixed sm:z-50 bg-brand-dark text-brand-light px-4 py-3 sm:p-6 flex flex-col items-center sm:items-start sm:space-y-6 relative">
      <div className="flex justify-center sm:justify-center sm:items-center sm:w-full w-auto">
        <button
          className="sm:hidden text-brand-red text-2xl font-bold"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          三
        </button>
        <Link to="/main" className="relative group w-12 h-12 sm:w-20 sm:h-20 flex items-center justify-center hidden sm:flex">
          <span translate="no" lang="zxx" className="absolute text-4xl font-bold text-brand-red transition-all duration-500 group-hover:scale-0 group-hover:rotate-12 group-hover:opacity-0 transform">
            三
          </span>
          <span className="absolute text-base font-bold text-brand-light opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 transform group-hover:rotate-0 drop-shadow-md whitespace-nowrap">
            san studios
          </span>
        </Link>
      </div>

      {/* Nav Links */}
      <div className={`${isMenuOpen ? 'flex' : 'hidden'} sm:flex flex-col items-center w-full mt-4 sm:mt-0`}>
        <ul className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } sm:flex flex-col text-base font-medium items-center sm:items-end transition-all duration-300 ease-in-out mt-4 sm:mt-0 gap-6`}>
          {/* Mobile-only Home button */}
          {isMenuOpen && (
            <li className="block sm:hidden text-center w-full">
              <Link to="/main" className="relative group transition duration-300">
                Home
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-brand-red group-hover:w-full transition-all duration-300 ease-out"></span>
              </Link>
            </li>
          )}
          {[
            { to: "/about", label: "About" },
            { to: "/services", label: "Services" },
            { to: "/contact", label: "Contact" },
            { to: "/client-login", label: "Client Login" },
          ].map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className="relative group transition duration-300"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-brand-red group-hover:w-full transition-all duration-300 ease-out"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}