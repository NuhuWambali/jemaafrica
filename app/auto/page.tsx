'use client';

import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Grain from '@/components/Grain';
import CookieBanner from '@/components/CookieBanner';
import Reveal from '@/components/Reveal';
import './auto.css';

export default function AutoPage() {
  const { t } = useTranslation();
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

  const SERVICES = [0, 1, 2, 3, 4, 5];
  const REASONS = [0, 1, 2, 3];
  const STEPS = [0, 1, 2, 3];
  const NEWS = [0, 1, 2];
  const OFFICES = [0, 1, 2];

  return (
    <>
      <Grain />
      <Navbar />

      {/* HERO */}
      <section className="auto-hero">
        <div className="auto-hero-bg" aria-hidden="true" />
        <div className="container">
          <Reveal>
            <span className="eyebrow">{t('auto.heroEyebrow')}</span>
          </Reveal>
          <Reveal delay={1}>
            <h1>{t('auto.heroTitle')} <em>{t('auto.heroHighlight')}</em></h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="auto-hero-desc">{t('auto.heroDesc')}</p>
          </Reveal>
          <Reveal delay={3}>
            <div className="auto-hero-actions">
              <a href="https://jemaauto.com/" target="_blank" rel="noreferrer" className="btn-primary">{t('auto.heroCta')}</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WELCOME */}
      <section className="auto-welcome">
        <div className="container">
          <div className="auto-welcome-layout">
            <Reveal>
              <div className="auto-welcome-figure">
                <img src="/assets/auto/auto-31.png" alt="Jema Auto" loading="lazy" />
                <span className="auto-welcome-badge">{t('auto.welcomeBadge')}</span>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="auto-welcome-text">
                <span className="eyebrow">{t('auto.welcomeEyebrow')}</span>
                <h2>{t('auto.welcomeTitle')} <em>{t('auto.welcomeHighlight')}</em></h2>
                <p>{t('auto.welcomeP1')}</p>
                <p>{t('auto.welcomeP2')}</p>
                <p>{t('auto.welcomeP3')}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="auto-services">
        <div className="container">
          <Reveal>
            <div className="auto-services-head">
              <span className="eyebrow">{t('auto.servicesEyebrow')}</span>
              <h2>{t('auto.servicesTitle')} <em>{t('auto.servicesHighlight')}</em></h2>
              <p>{t('auto.servicesLead')}</p>
            </div>
          </Reveal>
          <div className="auto-services-grid">
            {SERVICES.map((s, i) => (
              <Reveal key={s} delay={(i % 3) as 1 | 2 | 3 | 4}>
                <article className="auto-service-card">
                  <div className="auto-service-image">
                    <img src={t(`auto.service${s}.img`)} alt={t(`auto.service${s}.title`)} loading="lazy" />
                  </div>
                  <span className="auto-service-group">{t(`auto.service${s}.group`)}</span>
                  <h3>{t(`auto.service${s}.title`)}</h3>
                  <p>{t(`auto.service${s}.text`)}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="auto-cta">
        <div className="container">
          <div className="auto-cta-in">
            <Reveal>
              <h2>{t('auto.ctaTitle')} <em>{t('auto.ctaHighlight')}</em></h2>
            </Reveal>
            <Reveal delay={1}>
              <a href="https://jemaauto.com/" target="_blank" rel="noreferrer" className="btn-primary">{t('auto.ctaCta')}</a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="auto-why">
        <div className="container">
          <Reveal>
            <div className="auto-why-head">
              <span className="eyebrow">{t('auto.whyEyebrow')}</span>
              <h2>{t('auto.whyTitle')} <em>{t('auto.whyHighlight')}</em></h2>
            </div>
          </Reveal>
          <div className="auto-why-grid">
            {REASONS.map((r, i) => (
              <Reveal key={r} delay={(i % 4) as 1 | 2 | 3 | 4}>
                <article className="auto-why-card">
                  <span className="auto-why-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4L4.2 7.7l5.4-.8L12 2z" />
                    </svg>
                  </span>
                  <h3>{t(`auto.reason${r}.title`)}</h3>
                  <p>{t(`auto.reason${r}.text`)}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="auto-why-foot">
              <p>{t('auto.whyFoot')}</p>
              <a href="https://jemaauto.com/" target="_blank" rel="noreferrer" className="auto-why-link">{t('auto.whyFootCta')}</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="auto-process">
        <div className="container">
          <Reveal>
            <div className="auto-process-head">
              <span className="eyebrow">{t('auto.processEyebrow')}</span>
              <h2>{t('auto.processTitle')} <em>{t('auto.processHighlight')}</em></h2>
            </div>
          </Reveal>
          <div className="auto-process-grid">
            {STEPS.map((s, i) => (
              <Reveal key={s} delay={(i % 4) as 1 | 2 | 3 | 4}>
                <article className="auto-process-card">
                  <span className="auto-process-num">{s + 1}</span>
                  <h3>{t(`auto.step${s}.title`)}</h3>
                  <p>{t(`auto.step${s}.text`)}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="auto-support">
              <div>
                <span className="eyebrow">{t('auto.supportEyebrow')}</span>
                <h3>{t('auto.supportTitle')}</h3>
              </div>
              <div className="auto-support-contact">
                <span className="lbl">{t('auto.supportLabel')}</span>
                <a href="tel:+255282550380">+255 28 255 0380</a>
                <a href="tel:+255677091421">+255 677 091 421</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* NEWS */}
      <section className="auto-news">
        <div className="container">
          <Reveal>
            <div className="auto-news-head">
              <span className="eyebrow">{t('auto.newsEyebrow')}</span>
              <h2>{t('auto.newsTitle')} <em>{t('auto.newsHighlight')}</em></h2>
            </div>
          </Reveal>
          <div className="auto-news-grid">
            {NEWS.map((n, i) => (
              <Reveal key={n} delay={i as 1 | 2 | 3 | 4}>
                <a className="auto-news-entry" href={t(`auto.news${n}.href`)} target="_blank" rel="noreferrer">
                  <div className="auto-news-image">
                    <img src={t(`auto.news${n}.img`)} alt={t(`auto.news${n}.title`)} loading="lazy" />
                    <time className="auto-news-date" dateTime="2026-04-01">
                      <strong>{t(`auto.news${n}.day`)}</strong><span>{t(`auto.news${n}.month`)}</span>
                    </time>
                  </div>
                  <div className="auto-news-body">
                    <span className="auto-news-meta">{t('auto.newsBy')} {t(`auto.news${n}.author`)} · {t(`auto.news${n}.category`)}</span>
                    <h3>{t(`auto.news${n}.title`)}</h3>
                    <span className="auto-news-link">{t('auto.newsReadMore')} &#8594;</span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OFFICES */}
      <section className="auto-offices">
        <div className="container">
          <div className="auto-offices-grid">
            {OFFICES.map((o, i) => (
              <Reveal key={o} delay={i as 1 | 2 | 3 | 4}>
                <article className="auto-office-card">
                  <h3>{t(`auto.office${o}.title`)}</h3>
                  <p>{t(`auto.office${o}.address`)}</p>
                  <a href={t(`auto.office${o}.href`)}>{t('common.phone')}: {t(`auto.office${o}.phone`)}</a>
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
