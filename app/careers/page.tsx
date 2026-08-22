'use client';

import { useTranslation } from 'react-i18next';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Grain from '@/components/Grain';
import Reveal from '@/components/Reveal';
import './careers.css';

const POSITIONS = [
  {
    id: 'mining-site-manager',
    image: '/assets/career/mining-site-manager.jpeg',
    dept: 'Mining Division',
    title: 'Mining Site Manager',
    location: 'Mwanza, Tanzania',
    type: 'Full-time',
    desc: 'Lead daily mining operations, oversee site safety and compliance, and drive productivity across our extraction and processing teams.',
    delay: undefined as 1 | 2 | 3 | undefined,
  },
  {
    id: 'assistant-accountant',
    image: '/assets/career/assistant-accountant.jpeg',
    dept: 'Finance',
    title: 'Assistant Accountant',
    location: 'Dar es Salaam, Tanzania',
    type: 'Full-time',
    desc: 'Support financial reporting, reconciliations, and budgeting processes while ensuring accurate records across our diversified business units.',
    delay: 1 as const,
  },
  {
    id: 'procurement-officer',
    image: '/assets/career/procurement%20officer.jpeg',
    dept: 'Logistics & Supply Chain',
    title: 'Procurement Officer',
    location: 'Mwanza, Tanzania',
    type: 'Full-time',
    desc: 'Manage supplier relationships, negotiate contracts, and coordinate timely procurement of materials for operations across our divisions.',
    delay: 2 as const,
  },
];

export default function Careers() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState('');
  const [lightboxAlt, setLightboxAlt] = useState('');

  const openLightbox = useCallback((src: string, alt: string) => {
    setLightboxSrc(src);
    setLightboxAlt(alt);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [closeLightbox]);

  return (
    <>
      <Grain />
      <Navbar />

      <section className="careers-hero">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Careers at Jema Africa</span>
          </Reveal>
          <Reveal delay={1}>
            <h1>
              Build your future<br />while <em>building Africa&rsquo;s.</em>
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="lead">
              Join a team of innovators, engineers, and leaders shaping the continent&rsquo;s tomorrow. Explore our current openings and find where you belong.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="careers-section">
        <div className="container">


          <Reveal>
            <div className="careers-head">
              <div>
                <span className="eyebrow">Now Hiring</span>
                <h2>Open Positions</h2>
              </div>
              <span className="careers-count">3 Open Roles</span>
            </div>
          </Reveal>

          <div className="careers-grid">
            {POSITIONS.map((pos) => (
              <article key={pos.id} className="career-card">
                <Reveal delay={pos.delay}>
                  <div
                    className="career-media"
                    onClick={() => openLightbox(pos.image, pos.title)}
                  >
                    <img src={pos.image} alt={pos.title} loading="lazy" />
                    <span className="career-dept">{pos.dept}</span>
                  </div>
                </Reveal>
                <div className="career-body">
                  <h3>{pos.title}</h3>
                  <div className="career-meta">
                    <span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {pos.location}
                    </span>
                    <span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <rect x="2" y="7" width="20" height="14" rx="2" />
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                      </svg>
                      {pos.type}
                    </span>
                  </div>
                  <p className="career-desc">{pos.desc}</p>
                  <Link href="/contact#contact-form" className="career-apply">
                    Apply Now &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <Reveal>
            <div className="careers-cta">
              <div>
                <h3>Don&rsquo;t see your role?</h3>
                <p>
                  We are always looking for exceptional talent. Send us your CV and tell us how you can contribute to Jema Africa&rsquo;s growth.
                </p>
              </div>
              <Link href="/contact" className="nav-cta">
                Send Open Application
              </Link>
            </div>
          </Reveal>

          
        </div>
      </section>

      <Footer />

      <div
        className={`lightbox${lightboxOpen ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Image preview"
        onClick={(e) => {
          if (e.target === e.currentTarget) closeLightbox();
        }}
      >
        <button
          className="lightbox-close"
          onClick={closeLightbox}
          aria-label="Close preview"
        >
          &times;
        </button>
        {lightboxSrc && <img src={lightboxSrc} alt={lightboxAlt} />}
      </div>
    </>
  );
}
