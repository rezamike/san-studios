import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="w-64 h-screen p-6 bg-brand-dark text-brand-light flex flex-col space-y-6 fixed z-50">
      {/* Logo / Animated Symbol */}
      <Link to="/main" className="relative group w-20 h-20 mx-auto flex items-center justify-center">
        <span translate="no" lang="zxx" className="absolute text-4xl font-bold text-brand-red transition-all duration-500 group-hover:scale-0 group-hover:rotate-12 group-hover:opacity-0 transform">
          三
        </span>
        <span className="absolute text-base font-bold text-brand-light opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 transform group-hover:rotate-0 drop-shadow-md whitespace-nowrap">
          san studios
        </span>
      </Link>

      {/* Nav Links */}
      <ul className="flex flex-col space-y-6 text-base font-medium items-end">
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
    </nav>
  );
}