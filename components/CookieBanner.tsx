'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function CookieBanner() {
  const { t } = useTranslation();
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
        {t('cookie.message')}
      </p>
      <div className="cookie-actions">
        <button className="cookie-btn settings" onClick={handleSettings}>
          {t('cookie.settings')}
        </button>
        <button className="cookie-btn accept" onClick={handleAccept}>
          {t('cookie.accept')}
        </button>
      </div>
    </div>
  );
}
