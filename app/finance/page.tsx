'use client';

import { useTranslation } from 'react-i18next';
import { useCallback, useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Grain from '@/components/Grain';
import CookieBanner from '@/components/CookieBanner';
import Reveal from '@/components/Reveal';
import './finance.css';

export default function FinancePage() {
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

  const OFFERINGS = [0, 1, 2, 3];
  const ACCESS_FEATURES = [0, 1, 2, 3, 4];
  const NEWS = [0, 1, 2];
  const OFFICES = [0, 1, 2];
  const TAGS = ['tag0', 'tag1', 'tag2', 'tag3'];

  return (
    <>
      <Grain />
      <Navbar />

      {/* HERO */}
      <section className="fin-hero">
        <div className="container">
          <div className="fin-hero-layout">
            <Reveal>
              <div className="fin-hero-text">
                <span className="eyebrow">{t('finance.heroEyebrow')}</span>
                <h1>{t('finance.heroTitle')} <em>{t('finance.heroHighlight')}</em></h1>
                <p className="lead">{t('finance.heroLead')}</p>
                <a href="#offerings" className="btn-primary">{t('finance.heroCta')}</a>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="fin-hero-cards">
                <div className="fin-hero-image">
                  <img src="/assets/finance/jet-finance-4.png" alt="JETFinance" loading="eager" />
                  <div className="fin-exp-card">
                    <span className="fin-exp-num">5 +</span>
                    <span className="fin-exp-label">{t('finance.heroExpLabel')}</span>
                  </div>
                </div>
                <div className="fin-vision-card">
                  <span className="fin-card-label">{t('finance.visionLabel')}</span>
                  <p>{t('finance.visionText')}</p>
                </div>
                <div className="fin-mission-card">
                  <span className="fin-card-label">{t('finance.missionLabel')}</span>
                  <p>{t('finance.missionText')}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="fin-about">
        <div className="container">
          <Reveal>
            <div className="fin-about-head">
              <span className="eyebrow">{t('finance.aboutEyebrow')}</span>
              <h2>{t('finance.aboutTitle')} <em>{t('finance.aboutHighlight')}</em></h2>
              <p>{t('finance.aboutP1')}</p>
              <p>{t('finance.aboutP2')}</p>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div className="fin-about-tags">
              {TAGS.map((tag) => (
                <span key={tag} className="fin-tag">{t(`finance.${tag}`)}</span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={2}>
            <div className="fin-about-body">
              <p>{t('finance.aboutP3')}</p>
              <p>{t('finance.aboutP4')}</p>
              <p>{t('finance.aboutP5')}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* KEY OFFERINGS */}
      <section id="offerings" className="fin-offerings">
        <div className="container">
          <Reveal>
            <div className="fin-offerings-head">
              <span className="eyebrow">{t('finance.offeringsEyebrow')}</span>
              <h2>{t('finance.offeringsTitle')} <em>{t('finance.offeringsHighlight')}</em></h2>
              <p>{t('finance.offeringsLead')}</p>
            </div>
          </Reveal>
          <div className="fin-offerings-grid">
            {OFFERINGS.map((o, i) => (
              <Reveal key={o} delay={i as 1 | 2 | 3 | 4}>
                <article className="fin-offering-card">
                  <img src={t(`finance.offering${o}.img`)} alt={t(`finance.offering${o}.title`)} loading="lazy" />
                  <div className="fin-offering-body">
                    <div className="fin-offering-header">
                      <h3>{t(`finance.offering${o}.title`)}</h3>
                      <span className="fin-offering-num">{o + 1}</span>
                    </div>
                    <p>{t(`finance.offering${o}.text`)}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="fin-cta">
        <div className="container">
          <div className="fin-cta-in">
            <Reveal>
              <h2>{t('finance.ctaTitle')} <em>{t('finance.ctaHighlight')}</em></h2>
            </Reveal>
            <Reveal delay={1}>
              <div className="fin-cta-contact">
                <span className="lbl">{t('finance.hotline')}</span>
                <a href="tel:+255282550380">+255 28 255 0380</a>
                <a href="https://jemaafrica.co.tz/contact-us/" target="_blank" rel="noreferrer" className="btn-text">{t('finance.ctaCta')}</a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="fin-why">
        <div className="container">
          <div className="fin-why-layout">
            <Reveal>
              <div className="fin-why-text">
                <span className="eyebrow">{t('finance.whyEyebrow')}</span>
                <h2>{t('finance.whyTitle')} <em>{t('finance.whyHighlight')}</em></h2>
                <p>{t('finance.whyP1')}</p>
                <p>{t('finance.whyP2')}</p>
                <p>{t('finance.whyP3')}</p>
                <p>{t('finance.whyP4')}</p>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="fin-why-figure">
                <img src="/assets/finance/fina-5.png" alt="JETFinance" loading="lazy" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ACCESS */}
      <section className="fin-access">
        <div className="container">
          <Reveal>
            <div className="fin-access-head">
              <span className="eyebrow">{t('finance.accessEyebrow')}</span>
              <h2>{t('finance.accessTitle')} <em>{t('finance.accessHighlight')}</em></h2>
              <p>{t('finance.accessLead')}</p>
            </div>
          </Reveal>
          <div className="fin-access-list">
            {ACCESS_FEATURES.map((f, i) => (
              <Reveal key={f} delay={(i % 4 + 1) as 1 | 2 | 3 | 4}>
                <div className="fin-access-item">
                  <span className="fin-access-num">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <strong>{t(`finance.accessFeature${f}.label`)}:</strong> {t(`finance.accessFeature${f}.text`)}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="fin-access-cta">
              <a href="https://jemaafrica.co.tz/contact-us/" target="_blank" rel="noreferrer" className="btn-primary">{t('contact.form.submit')}</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* NEWS */}
      <section className="fin-news">
        <div className="container">
          <Reveal>
            <div className="fin-news-head">
              <span className="eyebrow">{t('finance.newsEyebrow')}</span>
              <h2>{t('finance.newsTitle')} <em>{t('finance.newsHighlight')}</em></h2>
            </div>
          </Reveal>
          <div className="fin-news-grid">
            {NEWS.map((n, i) => (
              <Reveal key={n} delay={i as 1 | 2 | 3 | 4}>
                <a className="fin-news-entry" href={t(`finance.news${n}.href`)} target="_blank" rel="noreferrer">
                  <div className="fin-news-image">
                    <img src={t(`finance.news${n}.img`)} alt={t(`finance.news${n}.title`)} loading="lazy" />
                    <time className="fin-news-date">
                      <strong>{t(`finance.news${n}.day`)}</strong><span>{t(`finance.news${n}.month`)}</span>
                    </time>
                  </div>
                  <div className="fin-news-body">
                    <span className="fin-news-meta">{t(`finance.news${n}.date`)} · {t(`finance.news${n}.category`)}</span>
                    <h3>{t(`finance.news${n}.title`)}</h3>
                    <span className="fin-news-link">{t('news.readMore')} &#8594;</span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="fin-bottom">
        <div className="container">
          <div className="fin-bottom-layout">
            <Reveal>
              <div className="fin-bottom-text">
                <h2>{t('finance.bottomTitle')} <em>{t('finance.bottomHighlight')}</em></h2>
                <div className="fin-bottom-contact">
                  <div>
                    <span className="lbl">{t('finance.hotline')}</span>
                    <a href="tel:+255282550380">+255 28 255 0380</a>
                  </div>
                  <div>
                    <span className="lbl">{t('finance.emailLabel')}</span>
                    <a href="mailto:info@jemaafrica.co.tz">info@jemaafrica.co.tz</a>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="fin-bottom-figure">
                <img src="/assets/finance/ands.png" alt="Jema Africa" loading="lazy" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* OFFICES */}
      <section className="fin-offices">
        <div className="container">
          <div className="fin-offices-grid">
            {OFFICES.map((o, i) => (
              <Reveal key={o} delay={i as 1 | 2 | 3 | 4}>
                <article className="fin-office-card">
                  <h3>{t(`finance.office${o}.title`)}</h3>
                  <p>{t(`finance.office${o}.address`)}</p>
                  <a href={t(`finance.office${o}.href`)}>{t('common.phone')}: {t(`finance.office${o}.phone`)}</a>
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
