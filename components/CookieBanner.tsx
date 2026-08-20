'use client';

import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem('cookie-consent');
    if (seen) return;

    const timer = setTimeout(() => setVisible(true), 600);
    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
  };

  const handleSettings = () => {
    localStorage.setItem('cookie-consent', 'settings');
    setVisible(false);
  };

  return (
    <div className={`cookie-banner${visible ? ' show' : ''}`}>
      <p>
        We use cookies to enhance your experience and analyze site traffic. By continuing, you
        agree to our use of cookies.
      </p>
      <div className="cookie-actions">
        <button className="cookie-btn settings" onClick={handleSettings}>
          Cookies Settings
        </button>
        <button className="cookie-btn accept" onClick={handleAccept}>
          Accept All Cookies
        </button>
      </div>
    </div>
  );
}
