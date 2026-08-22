'use client';

import { useTranslation } from 'react-i18next';

import { useState, useEffect, useCallback } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Grain from '@/components/Grain';
import CookieBanner from '@/components/CookieBanner';
import Reveal from '@/components/Reveal';
import './contact.css';

const BRANCHES = [
  { name: 'Mwanza Branch', phone: '+255 677 066 855', href: 'tel:+255677066855', num: '01' },
  { name: 'Kahama Branch', phone: '+255 767 060 719', href: 'tel:+255767060719', num: '02' },
  { name: 'Geita Branch', phone: '+255 745 694 989', href: 'tel:+255745694989', num: '03' },
  { name: 'Chunya Branch', phone: '+255 627 067 369', href: 'tel:+255627067369', num: '04' },
  { name: 'Saza Branch', phone: '+255 629 260 739', href: 'tel:+255629260739', num: '05' },
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactPage() {
  const { t } = useTranslation();
  const [formNote, setFormNote] = useState('');

  useEffect(() => {
    const handleFocus = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      const wrap = target.closest('.field');
      if (wrap) wrap.classList.add('focused');
    };
    const handleBlur = (e: FocusEvent) => {
      const target = e.target as HTMLInputElement;
      const wrap = target.closest('.field');
      if (wrap && !target.value) wrap.classList.remove('focused');
    };
    document.addEventListener('focus', handleFocus, true);
    document.addEventListener('blur', handleBlur, true);
    return () => {
      document.removeEventListener('focus', handleFocus, true);
      document.removeEventListener('blur', handleBlur, true);
    };
  }, []);

  const handleFormSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.querySelector('#name') as HTMLInputElement).value.trim();
    const email = (form.querySelector('#email') as HTMLInputElement).value.trim();
    if (!name || !email || !EMAIL_RE.test(email)) {
      setFormNote('Please complete your name and a valid email address.');
      return;
    }
    setFormNote('Thank you — your message has been sent. We will be in touch.');
    form.reset();
  }, []);

  return (
    <>
      <Grain />
      <Navbar />

      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-hero-media">
          <video autoPlay muted loop playsInline preload="metadata" poster="/assets/who.png">
            <source src="/assets/profile.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="container contact-hero-inner">
          <Reveal>
            <div className="contact-hero-content">
              <span className="eyebrow">{t('contact.eyebrow')}</span>
              <h1>{t('contact.heading')}</h1>
              <p className="lead">{t('contact.intro')}</p>
              <div className="contact-hero-actions">
                <a className="hero-btn" href="#contact-form">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 2 11 13" /><path d="M22 2l-7 20-4-9-9-4 20-7z" /></svg>
                  {t('contact.sendAMessage')}
                </a>
                <a className="hero-btn ghost" href="tel:+255282550380">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  +255 28 255 0380
                </a>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="contact-scroll-cue"><span>{t('contact.scrollExplore')}</span></div>
      </section>

      {/* CONTACT FACTS */}
      <section className="contact-strip">
        <div className="container">
          <Reveal delay={1}>
            <div className="contact-facts">
              <div className="contact-fact">
                <svg className="fact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                <span className="lbl">{t('contact.officePhones')}</span>
                <div className="contact-phones">
                  <a href="tel:+255282550380">+255 28 255 0380</a>
                  <a href="tel:+255677091421">+255 677 091 421</a>
                </div>
              </div>
              <div className="contact-fact">
                <svg className="fact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 7L2 7" /></svg>
                <span className="lbl">{t('contact.mailForInfo')}</span>
                <div className="contact-phones">
                  <a href="mailto:info@jemaafrica.co.tz">info@jemaafrica.co.tz</a>
                </div>
              </div>
              <div className="contact-fact">
                <svg className="fact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                <span className="lbl">{t('contact.locationsLabel')}</span>
                <div className="contact-locations">
                  <p>Jema Tech Building, Industrial Area, Mwanza, Tanzania.</p>
                  <p>5th Floor, TAN House, Victoria, Dar es Salaam.</p>
                </div>
              </div>
              <div className="contact-fact">
                <svg className="fact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                <span className="lbl">{t('contact.followUs')}</span>
                <div className="contact-social-links">
                  <a href="#" aria-label="LinkedIn">LinkedIn</a>
                  <a href="#" aria-label="Instagram">Instagram</a>
                  <a href="#" aria-label="X">X</a>
                  <a href="#" aria-label="Facebook">Facebook</a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BRANCHES */}
      <section className="branches-section">
        <img className="branches-bg" src="/assets/africa.png" alt="" aria-hidden="true" loading="lazy" />
        <div className="container">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow">{t('contact.ourBranches')}</span>
              <h2>{t('contact.reachUs')}</h2>
            </div>
          </Reveal>
          <div className="branches-grid">
            {BRANCHES.map((branch, i) => (
              <Reveal key={branch.num} delay={i > 0 ? (i as 1 | 2 | 3 | 4) : undefined}>
                <article className="branch-card" data-num={branch.num}>
                  <h3>{branch.name}</h3>
                  <a href={branch.href}>{branch.phone}</a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="contact-form-section" id="contact-form">
        <div className="contact-form-bg" aria-hidden="true" />
        <div className="container">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow">{t('contact.sendAMessage')}</span>
              <h2>{t('contact.weWouldLove')}</h2>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <form className="contact-form" noValidate onSubmit={handleFormSubmit}>
              <div className="contact-form-card">
                <div className="field">
                  <label htmlFor="name">{t('contact.form.fullName')}</label>
                  <input id="name" type="text" required />
                </div>
                <div className="field">
                  <label htmlFor="email">{t('contact.form.email')}</label>
                  <input id="email" type="email" required />
                </div>
                <div className="field">
                  <label htmlFor="interest">{t('contact.form.areaOfInterest')}</label>
                  <select id="interest">
                    <option>{t('contact.form.mining')}</option>
                    <option>{t('contact.form.logistics')}</option>
                    <option>{t('contact.form.tech')}</option>
                    <option>{t('contact.form.auto')}</option>
                    <option>{t('contact.form.partnerships')}</option>
                    <option>{t('contact.form.careers')}</option>
                    <option>{t('contact.form.other')}</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="note">{t('contact.form.note')}</label>
                  <textarea id="note" />
                </div>
                <button type="submit" className="submit-btn">{t('contact.form.submit')}</button>
                <small className="contact-form-note" role="status">{formNote}</small>
              </div>
            </form>
          </Reveal>
        </div>
      </section>

      {/* MAP */}
      <section className="contact-map-section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow">{t('contact.findUs')}</span>
              <h2>{t('contact.ourLocation')}</h2>
            </div>
          </Reveal>
          <Reveal>
            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps?q=Jema%20Tech%20Building%2C%20Mkuyuni%2C%20Industrial%20Area%2C%20Mwanza%2C%20Tanzania&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                title="Jema Africa Mwanza location"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
      <CookieBanner />
    </>
  );
}
