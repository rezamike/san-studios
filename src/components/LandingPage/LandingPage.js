import React, { useState } from 'react';
import './LandingPage.css';

export default function LandingPage() {
  const [showEmail, setShowEmail] = useState(false);
  const [copied, setCopied] = useState(false);

  return (
    <div className="landing-container">
      <div className="logo-stack">
        <div className="kanji-symbol" translate="no" lang="zxx">三</div>
        <h1 className="studio-name">san studios</h1>
        <p className="tagline" translate="no">物語を紡ぐ、あなたのウェブサイト。</p>
        {showEmail ? (
          <p
            className={`email-address ${copied ? 'copied' : ''}`}
            onClick={() => {
              navigator.clipboard.writeText('michael.sanaiha@gmail.com');
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            }}
          >
            {copied ? 'Copied!' : 'michael.sanaiha@gmail.com'}
          </p>
        ) : (
          <button
            className="enter-btn"
            onClick={() => setShowEmail(true)}
          >
            For Inquiries
          </button>
        )}
      </div>
    </div>
  );
}