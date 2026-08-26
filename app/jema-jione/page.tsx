'use client';

import { useTranslation } from 'react-i18next';

import { useCallback, useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Grain from '@/components/Grain';
import CookieBanner from '@/components/CookieBanner';
import Reveal from '@/components/Reveal';
import './jj.css';

const PILLARS = [0, 1, 2];
const SERVICES = [0, 1, 2];
const SERVICE_ITEMS = [[0, 1], [0, 1, 2], [0, 1, 2]];
const TEAM = [0, 1];
const OFFICES = [0, 1, 2];

export default function JemaJionePage() {
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
      <section className="jj-hero">
        <div className="container">
          <Reveal>
            <span className="eyebrow">{t('jione.heroEyebrow')}</span>
          </Reveal>
          <Reveal delay={1}>
            <h1>JEMA JIONE - <em>{t('jione.heroHighlight')}</em></h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="lead">{t('jione.heroLead')}</p>
          </Reveal>
          <Reveal delay={3}>
            <div className="jj-hero-actions">
              <a href="#contact" className="btn-primary">{t('jione.heroCta1')}</a>
              <a href="https://www.youtube.com/watch?v=Biaw72RTyhk" target="_blank" rel="noreferrer" className="btn-text">{t('jione.heroCta2')}</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PILLARS */}
      <section className="jj-pillars">
        <div className="container">
          <div className="jj-pillars-grid">
            {PILLARS.map((i) => (
              <Reveal key={i} delay={i as 1 | 2 | 3 | 4}>
                <article className="jj-pillar-card">
                  <h3>{t(`jione.pillar${i}.title`)}</h3>
                  <p>{t(`jione.pillar${i}.text`)}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DOING THE RIGHT THING */}
      <section className="jj-right">
        <div className="container">
          <div className="jj-right-layout">
            <Reveal>
              <div className="jj-right-text">
                <span className="eyebrow">{t('jione.rightEyebrow')}</span>
                <h2>{t('jione.rightTitle')} <em>{t('jione.rightHighlight')}</em></h2>
                <p>{t('jione.rightLead')}</p>
                <div className="jj-right-values">
                  <div className="jj-right-value">
                    <span className="jj-right-icon">&#9670;</span>
                    <div>
                      <strong>{t('jione.value0Title')}</strong>
                      <p>{t('jione.value0Text')}</p>
                    </div>
                  </div>
                  <div className="jj-right-value">
                    <span className="jj-right-icon">&#9670;</span>
                    <div>
                      <strong>{t('jione.value1Title')}</strong>
                      <p>{t('jione.value1Text')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="jj-right-figure">
                <img src="/assets/jione/feature.png" alt="Jema Jione Logistics" loading="lazy" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="jj-contact">
        <div className="container">
          <div className="jj-contact-wrap">
            <Reveal>
              <div className="jj-contact-info">
                <span className="eyebrow">{t('jione.contactEyebrow')}</span>
                <h2>{t('jione.contactTitle')} <em>{t('jione.contactHighlight')}</em></h2>
                <p>{t('jione.contactLead')}</p>
                <div className="jj-contact-detail">
                  <span className="lbl">{t('jione.contactMobile')}</span>
                  <p>{t('jione.contactPhoneText')}</p>
                </div>
                <div className="jj-contact-detail">
                  <span className="lbl">{t('jione.contactLocation')}</span>
                  <p>{t('jione.contactAddress1')}</p>
                  <p>{t('jione.contactAddress2')}</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <form onSubmit={handleFormSubmit}>
                <div className="jj-form-row">
                  <div className="field">
                    <label htmlFor="fname">{t('jione.formFirstName')}</label>
                    <input id="fname" type="text" required />
                  </div>
                  <div className="field">
                    <label htmlFor="lname">{t('jione.formLastName')}</label>
                    <input id="lname" type="text" required />
                  </div>
                </div>
                <div className="jj-form-row">
                  <div className="field">
                    <label htmlFor="email">{t('jione.formEmail')}</label>
                    <input id="email" type="email" required />
                  </div>
                  <div className="field">
                    <label htmlFor="phone">{t('jione.formPhone')}</label>
                    <input id="phone" type="tel" required />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="subject">{t('jione.formSubject')}</label>
                  <input id="subject" type="text" required />
                </div>
                <div className="field">
                  <label htmlFor="comments">{t('jione.formComment')}</label>
                  <textarea id="comments" />
                </div>
                <button type="submit" className="submit-btn">
                  {sent ? t('jione.formSent') : t('jione.formSubmit')}
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="jj-whatwedo">
        <div className="container">
          <Reveal>
            <div className="jj-whatwedo-head">
              <span className="eyebrow">{t('jione.serviceEyebrow')}</span>
              <h2>{t('jione.serviceTitle')} <em>{t('jione.serviceHighlight')}</em></h2>
              <p>{t('jione.serviceLead')}</p>
            </div>
          </Reveal>
          <div className="jj-services-grid">
            {SERVICES.map((i) => (
              <Reveal key={i} delay={i as 1 | 2 | 3 | 4}>
                <article className="jj-service-block">
                  <div className="jj-service-header">
                    <span className="jj-service-num">{String(i + 1).padStart(2, '0')}</span>
                    <h3>{t(`jione.service${i}.title`)}</h3>
                  </div>
                  <ul>
                    {SERVICE_ITEMS[i].map((j) => (
                      <li key={j}>
                        <strong>{t(`jione.service${i}.item${j}.label`)}</strong> {t(`jione.service${i}.item${j}.text`)}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="jj-cta">
        <div className="container">
          <div className="jj-cta-layout">
            <Reveal>
              <div className="jj-cta-visual">
                <img src="/assets/jione/cta.png" alt="Jema Jione Team" loading="lazy" />
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="jj-cta-text">
                <h2>{t('jione.ctaTitle')} <em>{t('jione.ctaHighlight')}</em></h2>
                <a href="https://www.youtube.com/watch?v=Biaw72RTyhk" target="_blank" rel="noreferrer" className="btn-primary">{t('jione.ctaCta')}</a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="jj-team">
        <div className="container">
          <Reveal>
            <div className="jj-team-head">
              <span className="eyebrow">{t('jione.teamEyebrow')}</span>
              <h2>{t('jione.teamTitle')} <em>{t('jione.teamHighlight')}</em></h2>
              <p>{t('jione.teamLead')}</p>
            </div>
          </Reveal>
          <div className="jj-team-grid">
            {TEAM.map((i) => (
              <Reveal key={i} delay={i as 1 | 2 | 3 | 4}>
                <article className="jj-team-card">
                  <div className="jj-team-image">
                    <img src={t(`jione.team${i}.img`)} alt={t(`jione.team${i}.name`)} loading="lazy" />
                  </div>
                  <div className="jj-team-details">
                    <h3>{t(`jione.team${i}.name`)}</h3>
                    <p>{t(`jione.team${i}.role`)}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="jj-news">
        <div className="container">
          <Reveal>
            <div className="jj-news-head">
              <span className="eyebrow">{t('jione.newsEyebrow')}</span>
              <h2>{t('jione.newsTitle')} <em>{t('jione.newsHighlight')}</em></h2>
            </div>
          </Reveal>
          <div className="jj-news-grid">
            <Reveal>
              <a className="jj-news-entry" href={t('jione.news0.href')} target="_blank" rel="noreferrer">
                <div className="jj-news-image">
                  <img src={t('jione.news0.img')} alt="News" loading="lazy" />
                  <time className="jj-news-date"><strong>{t('jione.news0.day')}</strong><span>{t('jione.news0.month')}</span></time>
                </div>
                <div className="jj-news-body">
                  <span className="jj-news-meta">{t('jione.news0.date')} · {t('jione.news0.category')}</span>
                  <h3>{t('jione.news0.title')}</h3>
                  <span className="jj-news-link">{t('jione.readMore')} &#8594;</span>
                </div>
              </a>
            </Reveal>
            <Reveal delay={1}>
              <a className="jj-news-entry" href={t('jione.news1.href')} target="_blank" rel="noreferrer">
                <div className="jj-news-image">
                  <img src={t('jione.news1.img')} alt="News" loading="lazy" />
                  <time className="jj-news-date"><strong>{t('jione.news1.day')}</strong><span>{t('jione.news1.month')}</span></time>
                </div>
                <div className="jj-news-body">
                  <span className="jj-news-meta">{t('jione.news1.date')} · {t('jione.news1.category')}</span>
                  <h3>{t('jione.news1.title')}</h3>
                  <span className="jj-news-link">{t('jione.readMore')} &#8594;</span>
                </div>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* OFFICES */}
      <section className="jj-offices">
        <div className="container">
          <div className="jj-offices-grid">
            {OFFICES.map((i) => (
              <Reveal key={i} delay={i as 1 | 2 | 3 | 4}>
                <article className="jj-office-card">
                  <h3>{t(`jione.office${i}.title`)}</h3>
                  <p>{t(`jione.office${i}.address`)}</p>
                  <a href={`tel:${t(`jione.office${i}.phone`).replace(/\s/g, '')}`}>Phone: {t(`jione.office${i}.phone`)}</a>
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
