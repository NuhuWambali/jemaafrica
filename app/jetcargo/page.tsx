'use client';

import { useTranslation } from 'react-i18next';

import { useCallback, useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Grain from '@/components/Grain';
import CookieBanner from '@/components/CookieBanner';
import Reveal from '@/components/Reveal';
import './jetcargo.css';

const SERVICES = [0, 1, 2, 3, 4];
const WHY_CHOOSE = [0, 1, 2];
const KEY_SERVICES = [0, 1, 2, 3, 4, 5];
const NEWS = [0, 1, 2];
const OFFICES = [0, 1, 2];

export default function JetCargoPage() {
  const { t } = useTranslation();
  const [sent, setSent] = useState(false);

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
    setSent(true);
  }, []);

  return (
    <>
      <Grain />
      <Navbar />

      {/* HERO */}
      <section className="jc-hero">
        <div className="container">
          <Reveal>
            <span className="eyebrow">{t('cargo.heroEyebrow')}</span>
          </Reveal>
          <Reveal delay={1}>
            <h1>{t('cargo.heroTitle')} <em>{t('cargo.heroHighlight')}</em></h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="lead">{t('cargo.heroLead')}</p>
          </Reveal>
          <Reveal delay={3}>
            <a href="https://jemaafrica.co.tz/contact-us/" target="_blank" rel="noreferrer" className="btn-primary">{t('cargo.heroCta')}</a>
          </Reveal>
        </div>
        <img className="jc-hero-deco jc-hero-deco-46" src="/assets/cargo/element-46.png" alt="" aria-hidden="true" />
        <img className="jc-hero-deco jc-hero-deco-47" src="/assets/cargo/element-47.png" alt="" aria-hidden="true" />
        <img className="jc-hero-deco jc-hero-deco-48" src="/assets/cargo/element-48.png" alt="" aria-hidden="true" />
      </section>

      {/* SERVICES */}
      <section className="jc-services">
        <div className="container">
          <Reveal>
            <div className="jc-services-head">
              <span className="eyebrow">{t('cargo.servicesEyebrow')}</span>
              <h2><span className="jc-services-highlight">{t('cargo.servicesTitle')}</span> <em>{t('cargo.servicesHighlight')}</em></h2>
              <p>{t('cargo.servicesLead')}</p>
            </div>
          </Reveal>
          <div className="jc-services-layout">
            <div className="jc-services-list">
              {SERVICES.map((i) => (
                <Reveal key={i} delay={(i % 3) as 1 | 2 | 3 | 4}>
                  <article className="jc-service-card">
                    <h3>{t(`cargo.service${i}.title`)}</h3>
                    <p>{t(`cargo.service${i}.text`)}</p>
                  </article>
                </Reveal>
              ))}
            </div>
            <div className="jc-services-side">
              <Reveal delay={1}>
                <div className="jc-services-image">
                  <img src="/assets/cargo/cargo-road.png" alt="JETCargo Services" loading="lazy" />
                </div>
              </Reveal>
              <Reveal delay={2}>
                <div className="jc-stat-block">
                  <span className="jc-stat-num">87%</span>
                  <span className="jc-stat-label">{t('cargo.statLabel')}</span>
                </div>
              </Reveal>
              <Reveal delay={3}>
                <div className="jc-services-image">
                  <img src="/assets/cargo/cargo-road1.png" alt="JETCargo Services" loading="lazy" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="jc-why">
        <div className="container">
          <div className="jc-why-layout">
            <Reveal>
              <div className="jc-why-text">
                <span className="eyebrow">{t('cargo.whyEyebrow')}</span>
                <h2>{t('cargo.whyTitle')} <em>{t('cargo.whyHighlight')}</em></h2>
                <p>{t('cargo.whyLead')}</p>
                <div className="jc-why-cards">
                  {WHY_CHOOSE.map((i) => (
                    <Reveal key={i} delay={i as 1 | 2 | 3 | 4}>
                      <article className="jc-why-card">
                        <h3>{t(`cargo.why${i}.title`)}</h3>
                        <p>{t(`cargo.why${i}.text`)}</p>
                      </article>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="jc-why-figure">
                <img src="/assets/cargo/cargo-1.png" alt="JETCargo Logistics" loading="lazy" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="jc-cta">
        <div className="container">
          <div className="jc-cta-in">
            <Reveal>
              <h2>{t('cargo.ctaTitle')} <em>{t('cargo.ctaHighlight')}</em></h2>
            </Reveal>
            <Reveal delay={1}>
              <div className="jc-cta-info">
                <span className="lbl">{t('cargo.ctaPricing')}</span>
                <div className="jc-cta-advisor">
                  <span className="lbl">{t('cargo.ctaAdvisor')}</span>
                  <a href="tel:+255282550380">+255 28 255 0380</a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* KEY SERVICES */}
      <section className="jc-key">
        <div className="container">
          <div className="jc-key-layout">
            <Reveal>
              <div className="jc-key-intro">
                <span className="eyebrow">{t('cargo.keyEyebrow')}</span>
                <h2>{t('cargo.keyTitle')} <span className="jc-key-highlight">{t('cargo.keyHighlight')}</span> <em>{t('cargo.keyHighlightEm')}</em></h2>
                <p>{t('cargo.keyLead')}</p>
              </div>
            </Reveal>
            <div className="jc-key-grid">
              {KEY_SERVICES.map((i) => (
                <Reveal key={i} delay={(i % 4 + 1) as 1 | 2 | 3 | 4}>
                  <article className="jc-key-card">
                    <h3>{t(`cargo.key${i}.title`)}</h3>
                    <p>{t(`cargo.key${i}.text`)}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal>
            <div className="jc-key-visual">
              <img src="/assets/cargo/cargo-fff.png" alt="JETCargo Services" loading="lazy" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* NEWS */}
      <section className="jc-news">
        <div className="container">
          <Reveal>
            <div className="jc-news-head">
              <span className="eyebrow">{t('cargo.newsEyebrow')}</span>
              <h2><span className="jc-news-highlight">{t('cargo.newsTitle')}</span> <em>{t('cargo.newsHighlight')}</em></h2>
              <p>{t('cargo.newsLead')}</p>
            </div>
          </Reveal>
          <div className="jc-news-grid">
            {NEWS.map((i) => (
              <Reveal key={i} delay={i as 1 | 2 | 3 | 4}>
                <a className="jc-news-entry" href={t(`cargo.news${i}.href`)} target="_blank" rel="noreferrer">
                  <div className="jc-news-image">
                    <img src={t(`cargo.news${i}.img`)} alt={t(`cargo.news${i}.title`)} loading="lazy" />
                    <time className="jc-news-date" dateTime="2026-04-01">
                      <strong>{t(`cargo.news${i}.day`)}</strong><span>{t(`cargo.news${i}.month`)}</span>
                    </time>
                  </div>
                  <div className="jc-news-body">
                    <span className="jc-news-meta">{t(`cargo.news${i}.date`)} · {t(`cargo.news${i}.category`)}</span>
                    <h3>{t(`cargo.news${i}.title`)}</h3>
                    <span className="jc-news-link">{t('cargo.readMore')} &#8594;</span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="jc-contact">
        <div className="container">
          <div className="jc-contact-wrap">
            <Reveal>
              <div className="jc-contact-info">
                <span className="eyebrow">{t('cargo.contactEyebrow')}</span>
                <h2>{t('cargo.contactTitle')} <em>{t('cargo.contactHighlight')}</em></h2>
                <p>{t('cargo.contactLead')}</p>
                <div className="jc-contact-detail">
                  <span className="lbl">{t('cargo.contactMobile')}</span>
                  <p>{t('cargo.contactPhoneText')}</p>
                </div>
                <div className="jc-contact-detail">
                  <span className="lbl">{t('cargo.contactLocation')}</span>
                  <p>{t('cargo.contactAddress1')}</p>
                  <p>{t('cargo.contactAddress2')}</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <form onSubmit={handleFormSubmit}>
                <div className="jc-form-row">
                  <div className="field">
                    <label htmlFor="fname">{t('cargo.formFirstName')}</label>
                    <input id="fname" type="text" required />
                  </div>
                  <div className="field">
                    <label htmlFor="lname">{t('cargo.formLastName')}</label>
                    <input id="lname" type="text" required />
                  </div>
                </div>
                <div className="jc-form-row">
                  <div className="field">
                    <label htmlFor="email">{t('cargo.formEmail')}</label>
                    <input id="email" type="email" required />
                  </div>
                  <div className="field">
                    <label htmlFor="phone">{t('cargo.formPhone')}</label>
                    <input id="phone" type="tel" required />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="subject">{t('cargo.formSubject')}</label>
                  <input id="subject" type="text" required />
                </div>
                <div className="field">
                  <label htmlFor="comments">{t('cargo.formComment')}</label>
                  <textarea id="comments" />
                </div>
                <button type="submit" className="submit-btn">
                  {sent ? t('cargo.formSent') : t('cargo.formSubmit')}
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      {/* OFFICES */}
      <section className="jc-offices">
        <div className="container">
          <div className="jc-offices-grid">
            {OFFICES.map((i) => (
              <Reveal key={i} delay={i as 1 | 2 | 3 | 4}>
                <article className="jc-office-card">
                  <h3>{t(`cargo.office${i}.title`)}</h3>
                  <p>{t(`cargo.office${i}.address`)}</p>
                  <a href={`tel:${t(`cargo.office${i}.phone`).replace(/\s/g, '')}`}>Phone: {t(`cargo.office${i}.phone`)}</a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <CookieBanner />
    </>
  );
}
