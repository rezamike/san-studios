import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-brand-dark flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="text-5xl text-brand-red animate-pulse" translate="no" lang="zxx">三</div>
        <h1 className="text-4xl font-bold text-brand-light tracking-wide">san studios</h1>
        <p className="text-brand-gray italic" translate="no">物語を紡ぐ、あなたのウェブサイト。</p>
        <Link
          to="/main"
          className="mt-6 inline-block px-6 py-3 bg-brand-red text-brand-light font-semibold rounded hover:bg-red-700 transition"
        >
          Enter Site
        </Link>
      </div>
    </div>
  );
}