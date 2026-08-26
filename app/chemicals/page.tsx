'use client';

import { useTranslation } from 'react-i18next';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Grain from '@/components/Grain';
import CookieBanner from '@/components/CookieBanner';
import Reveal from '@/components/Reveal';
import './chemicals.css';

const PILLARS = ['01', '02', '03'] as const;
const FEATURES = ['0', '1', '2', '3'] as const;
const PRODUCTS = ['0', '1', '2', '3', '4', '5', '6'] as const;
const FAQS = ['0', '1', '2', '3'] as const;
const TEAM_MEMBERS = ['0', '1', '2', '3', '4', '5', '6', '7'] as const;
const BRANCHES_LIST = ['0', '1', '2', '3', '4'] as const;
const NEWS_LIST = ['0', '1', '2'] as const;
const OFFICES_LIST = ['0', '1', '2'] as const;

export default function ChemicalsPage() {
  const { t } = useTranslation();
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

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
      <section className="chm-hero">
        <div className="container">
          <Reveal>
            <span className="eyebrow">JEMA Chemicals</span>
          </Reveal>
          <Reveal delay={1}>
            <h1>{t('chemicals.heroTitle')} <em>{t('chemicals.heroHighlight')}</em></h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="lead">{t('chemicals.heroLead')}</p>
          </Reveal>
          <Reveal delay={3}>
            <div className="chm-hero-actions">
              <a href="#products" className="btn-primary">{t('chemicals.heroCta')}</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PARTNER */}
      <section className="chm-partner">
        <div className="container">
          <div className="chm-partner-layout">
            <Reveal>
              <div className="chm-partner-text">
                <span className="eyebrow">{t('chemicals.partnerEyebrow')}</span>
                <h2>{t('chemicals.partnerTitle')} <em>{t('chemicals.partnerHighlight')}</em></h2>
                <p>{t('chemicals.partnerP1')}</p>
                <p>{t('chemicals.partnerP2')}</p>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="chm-partner-figure">
                <img src="/assets/chemicals/chemical-staff.png" alt="Premium mining chemicals" loading="lazy" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="chm-pillars">
        <div className="container">
          <div className="chm-pillars-grid">
            {PILLARS.map((p, i) => (
              <Reveal key={p} delay={i as 1 | 2 | 3 | 4}>
                <article className="chm-pillar-card">
                  <span className="chm-pillar-num">{p}</span>
                  <h3>{t(`chemicals.pillar${p}.title`)}</h3>
                  <p>{t(`chemicals.pillar${p}.text`)}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="chm-band">
        <div className="container">
          <div className="chm-band-in">
            <Reveal>
              <h2>{t('chemicals.bandTitle')}</h2>
            </Reveal>
            <Reveal delay={1}>
              <a className="chm-band-phone" href="tel:+255282550380">+255 28 255 0380</a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="chm-about">
        <div className="container">
          <div className="chm-about-layout">
            <Reveal>
              <div className="chm-about-text">
                <span className="eyebrow">{t('chemicals.purposeEyebrow')}</span>
                <h2>{t('chemicals.purposeTitle')} <em>{t('chemicals.purposeHighlight')}</em></h2>
                <p>{t('chemicals.purposeP1')}</p>
                <p>{t('chemicals.purposeP2')}</p>
              </div>
            </Reveal>
            <div className="chm-about-features">
              {FEATURES.map((f, i) => (
                <Reveal key={f} delay={i as 1 | 2 | 3 | 4}>
                  <article className="chm-about-feature">
                    <span className="chm-about-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4L4.2 7.7l5.4-.8L12 2z" />
                      </svg>
                    </span>
                    <h3>{t(`chemicals.feature${f}.title`)}</h3>
                    <p>{t(`chemicals.feature${f}.text`)}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="chm-products">
        <div className="container">
          <Reveal>
            <div className="chm-products-head">
              <span className="eyebrow">{t('chemicals.productsEyebrow')}</span>
              <h2>{t('chemicals.productsTitle')} <em>{t('chemicals.productsHighlight')}</em></h2>
              <p>{t('chemicals.productsLead')}</p>
            </div>
          </Reveal>
          <div className="chm-products-grid">
            {PRODUCTS.map((p, i) => (
              <Reveal key={p} delay={(i % 3) as 1 | 2 | 3 | 4}>
                <article className="chm-product-card">
                  <div className="chm-product-image">
                    <img src={t(`chemicals.product${p}.img`)} alt={t(`chemicals.product${p}.name`)} loading="lazy" />
                    <span className="chm-product-num">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <h3>{t(`chemicals.product${p}.name`)}</h3>
                  <p>{t(`chemicals.product${p}.desc`)}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="chm-why">
        <div className="container">
          <div className="chm-why-layout">
            <Reveal>
              <div className="chm-why-text">
                <span className="eyebrow">{t('chemicals.whyEyebrow')}</span>
                <h2>{t('chemicals.whyTitle')} <em>{t('chemicals.whyHighlight')}</em></h2>
                <p>{t('chemicals.whyText')}</p>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="chm-faq">
                {FAQS.map((f, i) => (
                  <div className={`chm-faq-item${openFaq === i ? ' is-open' : ''}`} key={f}>
                    <button
                      className="chm-faq-q"
                      onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                      aria-expanded={openFaq === i}
                    >
                      <span>{t(`chemicals.faq${f}.q`)}</span>
                      <span className="chm-faq-icon" aria-hidden="true">+</span>
                    </button>
                    <div className="chm-faq-a">
                      <p>{t(`chemicals.faq${f}.a`)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CONSULT FORM */}
      <section className="chm-consult">
        <div className="container">
          <div className="chm-consult-in">
            <Reveal>
              <div className="chm-consult-text">
                <span className="eyebrow">{t('chemicals.consultEyebrow')}</span>
                <h2>{t('chemicals.consultTitle')} <em>{t('chemicals.consultHighlight')}</em></h2>
                <p>{t('chemicals.consultText')}</p>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <form onSubmit={handleFormSubmit}>
                <div className="field">
                  <label htmlFor="name">{t('contact.form.fullName')}</label>
                  <input id="name" type="text" required />
                </div>
                <div className="field">
                  <label htmlFor="email">{t('contact.form.email')}</label>
                  <input id="email" type="email" required />
                </div>
                <div className="field">
                  <label htmlFor="subject">{t('chemicals.formSubject')}</label>
                  <input id="subject" type="text" />
                </div>
                <div className="field">
                  <label htmlFor="message">{t('chemicals.formMessage')}</label>
                  <textarea id="message" />
                </div>
                <button type="submit" className="submit-btn">
                  {sent ? t('contact.form.sent') : t('contact.form.submit')}
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="chm-team">
        <div className="container">
          <Reveal>
            <div className="chm-team-head">
              <span className="eyebrow">{t('chemicals.teamEyebrow')}</span>
              <h2>{t('chemicals.teamTitle')} <em>{t('chemicals.teamHighlight')}</em></h2>
              <p>{t('chemicals.teamText')}</p>
            </div>
          </Reveal>
          <div className="chm-team-grid">
            {TEAM_MEMBERS.map((m, i) => (
              <Reveal key={m} delay={(i % 4) as 1 | 2 | 3 | 4}>
                <article className="chm-team-card">
                  <div className="chm-team-image">
                    <img src={t(`chemicals.member${m}.img`)} alt={t(`chemicals.member${m}.name`)} loading="lazy" />
                  </div>
                  <div className="chm-team-details">
                    <h3>{t(`chemicals.member${m}.name`)}</h3>
                    <p>{t(`chemicals.member${m}.role`)}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BRANCHES */}
      <section className="chm-contact">
        <div className="container">
          <Reveal>
            <div className="chm-contact-head">
              <span className="eyebrow">{t('chemicals.branchesEyebrow')}</span>
              <h2>{t('chemicals.branchesTitle')} <em>{t('chemicals.branchesHighlight')}</em></h2>
              <p>{t('chemicals.branchesText')}</p>
            </div>
          </Reveal>
          <div className="chm-branches-grid">
            {BRANCHES_LIST.map((b, i) => (
              <Reveal key={b} delay={(i % 3) as 1 | 2 | 3 | 4}>
                <article className="chm-branch-card">
                  <h3>{t(`chemicals.branch${b}.city`)}</h3>
                  <p>{t(`chemicals.branch${b}.address`)}</p>
                  <a href={t(`chemicals.branch${b}.href`)}>{t(`chemicals.branch${b}.phone`)}</a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="chm-form-section">
        <div className="container">
          <div className="chm-form-wrap">
            <Reveal>
              <div className="chm-form-info">
                <span className="eyebrow">{t('chemicals.contactEyebrow')}</span>
                <h2>{t('chemicals.contactTitle')} <em>{t('chemicals.contactHighlight')}</em></h2>
                <p>{t('chemicals.contactText')}</p>
                <div className="chm-form-location">
                  <span className="lbl">{t('chemicals.contactOffice')}</span>
                  <p>{t('chemicals.contactAddress1')}</p>
                  <p>{t('chemicals.contactAddress2')}</p>
                  <a href="tel:+255282550380">{t('chemicals.contactPhone')}</a>
                  <a href="mailto:info@jemaafrica.co.tz">{t('chemicals.contactEmail')}</a>
                </div>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <form onSubmit={handleFormSubmit}>
                <div className="field">
                  <label htmlFor="name">{t('contact.form.fullName')}</label>
                  <input id="name" type="text" required />
                </div>
                <div className="field">
                  <label htmlFor="phone">{t('common.phone')}</label>
                  <input id="phone" type="tel" required />
                </div>
                <div className="field">
                  <label htmlFor="email">{t('contact.form.email')}</label>
                  <input id="email" type="email" required />
                </div>
                <div className="field">
                  <label htmlFor="comment">{t('chemicals.formComment')}</label>
                  <textarea id="comment" />
                </div>
                <button type="submit" className="submit-btn">
                  {sent ? t('contact.form.sent') : t('contact.form.submit')}
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="chm-news">
        <div className="container">
          <Reveal>
            <div className="chm-news-head">
              <span className="eyebrow">{t('chemicals.newsEyebrow')}</span>
              <h2>{t('chemicals.newsTitle')} <em>{t('chemicals.newsHighlight')}</em></h2>
            </div>
          </Reveal>
          <div className="chm-news-grid">
            {NEWS_LIST.map((n, i) => (
              <Reveal key={n} delay={i as 1 | 2 | 3 | 4}>
                <a className="chm-news-entry" href={t(`chemicals.news${n}.href`)} target="_blank" rel="noreferrer">
                  <div className="chm-news-image">
                    <img src={t(`chemicals.news${n}.img`)} alt={t(`chemicals.news${n}.title`)} loading="lazy" />
                    <time className="chm-news-date" dateTime="2026-04-01">
                      <strong>{t(`chemicals.news${n}.day`)}</strong><span>{t(`chemicals.news${n}.month`)}</span>
                    </time>
                  </div>
                  <div className="chm-news-body">
                    <span className="chm-news-meta">{t(`chemicals.news${n}.category`)} · {t(`chemicals.news${n}.date`)}</span>
                    <h3>{t(`chemicals.news${n}.title`)}</h3>
                    <span className="chm-news-link">{t('news.readMore')} &#8594;</span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OFFICES */}
      <section className="chm-offices">
        <div className="container">
          <div className="chm-offices-grid">
            {OFFICES_LIST.map((o, i) => (
              <Reveal key={o} delay={i as 1 | 2 | 3 | 4}>
                <article className="chm-office-card">
                  <h3>{t(`chemicals.office${o}.title`)}</h3>
                  <p>{t(`chemicals.office${o}.address`)}</p>
                  <a href={t(`chemicals.office${o}.href`)}>{t('common.phone')}: {t(`chemicals.office${o}.phone`)}</a>
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
