'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

function getInitialTheme(): 'dark' | 'light' {
  if (typeof window === 'undefined') return 'dark';
  return (localStorage.getItem('theme') as 'dark' | 'light') || 'dark';
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>(getInitialTheme);

  useEffect(() => {
    document.body.classList.toggle('light-mode', theme === 'light');
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', next);
      return next;
    });
  }, []);

  return (
    <nav className={`main-nav${scrolled ? ' scrolled' : ''}`}>
      <Link href="/" className="nav-logo">
        <img src="/assets/logo-white.png" alt="Jema Africa" className="logo-white" />
        <img src="/assets/logo.png" alt="Jema Africa" className="logo-black" />
      </Link>

      <div className="nav-links">
        <div className="nav-item">
          <Link href="/business">
            Our Business <span className="nav-caret" />
          </Link>
          <div className="dropdown">
            <div className="dropdown-col">
              <Link href="/elution">Elution</Link>
            </div>
            <div className="dropdown-col">
              <Link href="/chemicals">Chemicals</Link>
            </div>
            <div className="dropdown-col">
              <Link href="/lifescience">Life Science</Link>
            </div>
            <div className="dropdown-col">
              <Link href="/tech">Technology</Link>
            </div>
            <div className="dropdown-col">
              <Link href="/auto">Auto</Link>
            </div>
            <div className="dropdown-col">
              <Link href="/jit">Institute of Technology</Link>
            </div>
            <div className="dropdown-col">
              <Link href="/jetcargo">JETCargo</Link>
            </div>
            <div className="dropdown-col">
              <Link href="/jema-jione">Jema Jione</Link>
            </div>
            <div className="dropdown-col">
              <Link href="/finance">Finance</Link>
            </div>
            <div className="dropdown-col">
              <Link href="/business/education">Education</Link>
            </div>
          </div>
        </div>

        <Link href="/insights">Insights</Link>
        <Link href="/careers">Careers</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>

      <div className="nav-right">
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
        <Link href="/contact" className="nav-cta">Get in Touch</Link>
      </div>
    </nav>
  );
}
