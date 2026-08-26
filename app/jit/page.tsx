'use client';

import { useTranslation } from 'react-i18next';
import { useCallback, useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Grain from '@/components/Grain';
import CookieBanner from '@/components/CookieBanner';
import Reveal from '@/components/Reveal';
import './jit.css';

export default function JitPage() {
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

  const PILLARS = ['1', '2', '3'];
  const PROGRAMS = ['program0', 'program1', 'program2', 'program3'];
  const HIGHLIGHTS = [0, 1, 2, 3, 4, 5];
  const VALUES = ['value0', 'value1', 'value2', 'value3'];
  const TEAM = [0, 1, 2];
  const NEWS = [0, 1, 2];
  const OFFICES = [0, 1, 2];

  return (
    <>
      <Grain />
      <Navbar />

      {/* HERO */}
      <section className="jit-hero">
        <div className="container">
          <Reveal>
            <span className="eyebrow">{t('jit.heroEyebrow')}</span>
          </Reveal>
          <Reveal delay={1}>
            <h1>{t('jit.heroTitle')} <em>{t('jit.heroHighlight')}</em></h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="lead">{t('jit.heroLead')}</p>
          </Reveal>
          <Reveal delay={3}>
            <div className="jit-hero-actions">
              <a href="https://jit.ac.tz/" target="_blank" rel="noreferrer" className="btn-primary">{t('jit.heroCta1')}</a>
              <a href="https://jit.ac.tz/" target="_blank" rel="noreferrer" className="btn-text">{t('jit.heroCta2')}</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PILLARS */}
      <section className="jit-pillars">
        <div className="container">
          <div className="jit-pillars-grid">
            {PILLARS.map((p, i) => (
              <Reveal key={p} delay={i as 1 | 2 | 3 | 4}>
                <article className="jit-pillar-card">
                  <span className="jit-pillar-num">{p}</span>
                  <h3>{t(`jit.pillar${p}.title`)}</h3>
                  <p>{t(`jit.pillar${p}.text`)}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="jit-about">
        <div className="container">
          <div className="jit-about-layout">
            <Reveal>
              <div className="jit-about-text">
                <span className="eyebrow">{t('jit.aboutEyebrow')}</span>
                <h2>{t('jit.aboutTitle')} <em>{t('jit.aboutHighlight')}</em></h2>
                <p>{t('jit.aboutP1')}</p>
                <p>{t('jit.aboutP2')}</p>
                <ul className="jit-programs">
                  {PROGRAMS.map((pr) => (
                    <li key={pr}>{t(`jit.${pr}`)}</li>
                  ))}
                </ul>
                <p>{t('jit.aboutP3')}</p>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="jit-about-figure">
                <img src="/assets/jit/campus.png" alt="JIT Campus" loading="lazy" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="jit-highlights">
        <div className="container">
          <Reveal>
            <div className="jit-highlights-head">
              <span className="eyebrow">{t('jit.highlightsEyebrow')}</span>
              <h2>{t('jit.highlightsTitle')} <em>{t('jit.highlightsHighlight')}</em></h2>
              <p>{t('jit.highlightsLead')}</p>
            </div>
          </Reveal>
          <div className="jit-highlights-grid">
            {HIGHLIGHTS.map((h, i) => (
              <Reveal key={h} delay={(i % 3) as 1 | 2 | 3 | 4}>
                <article className="jit-highlight-card">
                  <h3>{t(`jit.highlight${h}.title`)}</h3>
                  <p>{t(`jit.highlight${h}.text`)}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="jit-cta">
        <div className="container">
          <div className="jit-cta-in">
            <Reveal>
              <h2>{t('jit.ctaTitle')} <em>{t('jit.ctaHighlight')}</em></h2>
            </Reveal>
            <Reveal delay={1}>
              <div className="jit-cta-contact">
                <span className="lbl">{t('jit.ctaLabel')}</span>
                <a href="tel:+255766283530">+255 766 283 530</a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* VALUE */}
      <section className="jit-value">
        <div className="container">
          <div className="jit-value-layout">
            <Reveal>
              <div className="jit-value-figure">
                <img src="/assets/jit/feature.png" alt="Jema Institute of Technology" loading="lazy" />
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="jit-value-text">
                <span className="eyebrow">{t('jit.valueEyebrow')}</span>
                <h2>{t('jit.valueTitle')} <em>{t('jit.valueHighlight')}</em></h2>
                <p>{t('jit.valueLead')}</p>
                <ul className="jit-value-list">
                  {VALUES.map((v) => (
                    <li key={v}>{t(`jit.${v}`)}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="jit-team">
        <div className="container">
          <Reveal>
            <div className="jit-team-head">
              <span className="eyebrow">{t('jit.teamEyebrow')}</span>
              <h2>{t('jit.teamTitle')} <em>{t('jit.teamHighlight')}</em></h2>
              <p style={{ maxWidth: 640, color: 'var(--ivory-dim)', fontWeight: 300, fontSize: '0.95rem', marginTop: 16 }}>
                {t('jit.teamText')}
              </p>
            </div>
          </Reveal>
          <div className="jit-team-grid">
            {TEAM.map((member, i) => (
              <Reveal key={member} delay={i as 1 | 2 | 3 | 4}>
                <article className="jit-team-card">
                  <div className="jit-team-image">
                    <img src={t(`jit.member${member}.img`)} alt={t(`jit.member${member}.name`)} loading="lazy" />
                  </div>
                  <div className="jit-team-details">
                    <h3>{t(`jit.member${member}.name`)}</h3>
                    <p>{t(`jit.member${member}.role`)}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="jit-contact">
        <div className="container">
          <div className="jit-contact-wrap">
            <Reveal>
              <div className="jit-contact-info">
                <span className="eyebrow">{t('jit.contactEyebrow')}</span>
                <h2>{t('jit.contactTitle')} <em>{t('jit.contactHighlight')}</em></h2>
                <p>{t('jit.contactText')}</p>
                <div className="jit-contact-detail">
                  <span className="lbl">{t('jit.contactLocationLabel')}</span>
                  <p>{t('jit.contactLocation')}</p>
                </div>
                <div className="jit-contact-detail">
                  <span className="lbl">{t('jit.contactCallLabel')}</span>
                  <a href="tel:+255766283530">+255 766 283 530</a>
                </div>
                <div className="jit-contact-detail">
                  <span className="lbl">{t('common.email')}</span>
                  <a href="mailto:info@jit.ac.tz">info@jit.ac.tz</a>
                </div>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <form onSubmit={handleFormSubmit}>
                <div className="jit-form-row">
                  <div className="field">
                    <label htmlFor="fname">{t('contact.form.firstName')}</label>
                    <input id="fname" type="text" required />
                  </div>
                  <div className="field">
                    <label htmlFor="lname">{t('contact.form.lastName')}</label>
                    <input id="lname" type="text" required />
                  </div>
                </div>
                <div className="jit-form-row">
                  <div className="field">
                    <label htmlFor="email">{t('common.email')}</label>
                    <input id="email" type="email" required />
                  </div>
                  <div className="field">
                    <label htmlFor="phone">{t('common.phone')}</label>
                    <input id="phone" type="tel" required />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="subject">{t('chemicals.formSubject')}</label>
                  <input id="subject" type="text" required />
                </div>
                <div className="field">
                  <label htmlFor="comments">{t('chemicals.formComment')}</label>
                  <textarea id="comments" />
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
      <section className="jit-news">
        <div className="container">
          <Reveal>
            <div className="jit-news-head">
              <span className="eyebrow">{t('jit.newsEyebrow')}</span>
              <h2>{t('jit.newsTitle')} <em>{t('jit.newsHighlight')}</em></h2>
            </div>
          </Reveal>
          <div className="jit-news-grid">
            {NEWS.map((n, i) => (
              <Reveal key={n} delay={i as 1 | 2 | 3 | 4}>
                <a className="jit-news-entry" href={t(`jit.news${n}.href`)} target="_blank" rel="noreferrer">
                  <div className="jit-news-image">
                    <img src={t(`jit.news${n}.img`)} alt={t(`jit.news${n}.title`)} loading="lazy" />
                    <time className="jit-news-date" dateTime="2026-04-01">
                      <strong>{t(`jit.news${n}.day`)}</strong><span>{t(`jit.news${n}.month`)}</span>
                    </time>
                  </div>
                  <div className="jit-news-body">
                    <span className="jit-news-meta">{t(`jit.news${n}.date`)} · {t(`jit.news${n}.category`)}</span>
                    <h3>{t(`jit.news${n}.title`)}</h3>
                    <span className="jit-news-link">{t('news.readMore')} &#8594;</span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OFFICES */}
      <section className="jit-offices">
        <div className="container">
          <div className="jit-offices-grid">
            {OFFICES.map((o, i) => (
              <Reveal key={o} delay={i as 1 | 2 | 3 | 4}>
                <article className="jit-office-card">
                  <h3>{t(`jit.office${o}.title`)}</h3>
                  <p>{t(`jit.office${o}.address`)}</p>
                  <a href={t(`jit.office${o}.href`)}>{t('common.phone')}: {t(`jit.office${o}.phone`)}</a>
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
