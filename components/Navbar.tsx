/* eslint-disable @next/next/no-img-element */

'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

function getInitialTheme(): 'dark' | 'light' {
  if (typeof window === 'undefined') return 'dark';
  return (localStorage.getItem('theme') as 'dark' | 'light') || 'dark';
}

export default function Navbar() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>(getInitialTheme);
  const [menuOpen, setMenuOpen] = useState(false);
  const [bizOpen, setBizOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('light-mode', theme === 'light');
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', next);
      return next;
    });
  }, []);

  return (
    <nav className={`main-nav${scrolled ? ' scrolled' : ''}`}>
      <Link href="/" className="nav-logo" onClick={() => setMenuOpen(false)}>
        <img src="/assets/logo/logo-white.png" alt="Jema Africa" className="logo-white" />
        <img src="/assets/logo.png" alt="Jema Africa" className="logo-black" />
      </Link>

      <div className={`nav-links${menuOpen ? ' open' : ''}`}>
        <div className={`nav-item${bizOpen ? ' open' : ''}`}>
          <Link href="/business" onClick={(e) => { e.preventDefault(); setBizOpen(!bizOpen); }}>
            {t('nav.business')} <span className="nav-caret" />
          </Link>
          <div className="dropdown">
            <div className="dropdown-col">
              <Link href="/elution" onClick={() => setMenuOpen(false)}>{t('nav.elution')}</Link>
            </div>
            <div className="dropdown-col">
              <Link href="/chemicals" onClick={() => setMenuOpen(false)}>{t('nav.chemicals')}</Link>
            </div>
            <div className="dropdown-col">
              <Link href="/lifescience" onClick={() => setMenuOpen(false)}>{t('nav.lifeScience')}</Link>
            </div>
            <div className="dropdown-col">
              <Link href="/tech" onClick={() => setMenuOpen(false)}>{t('nav.technology')}</Link>
            </div>
            <div className="dropdown-col">
              <Link href="/auto" onClick={() => setMenuOpen(false)}>{t('nav.auto')}</Link>
            </div>
            <div className="dropdown-col">
              <Link href="/jit" onClick={() => setMenuOpen(false)}>{t('nav.instituteOfTechnology')}</Link>
            </div>
            <div className="dropdown-col">
              <Link href="/jetcargo" onClick={() => setMenuOpen(false)}>{t('nav.jetcargo')}</Link>
            </div>
            <div className="dropdown-col">
              <Link href="/jema-jione" onClick={() => setMenuOpen(false)}>{t('nav.jemaJione')}</Link>
            </div>
            <div className="dropdown-col">
              <Link href="/finance" onClick={() => setMenuOpen(false)}>{t('nav.finance')}</Link>
            </div>

          </div>
        </div>

        <Link href="/careers" onClick={() => setMenuOpen(false)}>{t('nav.careers')}</Link>
        <Link href="/about" onClick={() => setMenuOpen(false)}>{t('nav.about')}</Link>
        <Link href="/contact" onClick={() => setMenuOpen(false)}>{t('nav.contact')}</Link>
      </div>

      <div className="nav-right">
        <LanguageSwitcher />
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          <svg className="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
          <svg className="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </button>
        <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu" aria-expanded={menuOpen}>
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
