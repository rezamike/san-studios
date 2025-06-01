import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-brand-dark flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="text-4xl sm:text-5xl text-brand-red animate-pulse" translate="no" lang="zxx">三</div>
        <h1 className="text-3xl sm:text-4xl font-bold text-brand-light tracking-wide">san studios</h1>
        <p className="text-sm sm:text-base text-brand-gray italic max-w-xs mx-auto" translate="no">物語を紡ぐ、あなたのウェブサイト。</p>
        <Link
          to="/main"
          className="mt-6 inline-block px-6 py-3 bg-brand-red text-brand-light font-semibold rounded hover:bg-red-700 transition text-sm sm:text-base"
        >
          Enter Site
        </Link>
      </div>
    </div>
  );
}