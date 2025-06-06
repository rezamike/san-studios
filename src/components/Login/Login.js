import React from 'react';

export default function Login() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-brand-dark text-brand-light px-4 sm:px-8 py-12 sm:py-16">
      <div className="text-center space-y-6 max-w-md mx-auto">
        <h1 className="text-3xl sm:text-5xl font-extrabold lowercase tracking-tight">client portal</h1>
        <p className="text-sm sm:text-md text-brand-gray mx-auto leading-relaxed">
          This space is under construction — a dedicated space for our clients to track projects, access deliverables, and stay connected.
        </p>
        <p className="text-sm text-brand-red italic">Coming soon...</p>
      </div>
    </section>
  );
}