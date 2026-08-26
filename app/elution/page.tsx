'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Grain from '@/components/Grain';
import CookieBanner from '@/components/CookieBanner';
import Reveal from '@/components/Reveal';
import { useTranslation } from 'react-i18next';
import './elution.css';

export default function ElutionPage() {
  const { t } = useTranslation();

  const SERVICES = [0, 1, 2, 3, 4];
  const REASONS = ['01', '02', '03', '04', '05', '06', '07', '08'];
  const TECH_POINTS = [0, 1, 2, 3, 4, 5, 6];
  const FORMULA = ['technology', 'experience', 'reliability', 'security', 'transparency', 'support'];
  const LOCATIONS = [0, 1, 2, 3];

  return (
    <>
      <Grain />
      <Navbar />

      {/* HERO */}
      <section className="elu-hero">
        <div className="container">
          <Reveal>
            <span className="eyebrow">{t('elution.heroEyebrow')}</span>
          </Reveal>
          <Reveal delay={1}>
            <h1>{t('elution.heroTitle')} <em>{t('elution.heroHighlight')}</em></h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="lead">{t('elution.heroLead')}</p>
          </Reveal>
          <Reveal delay={3}>
            <p className="elu-capacity">{t('elution.heroCapacity')}</p>
          </Reveal>
          <Reveal delay={4}>
            <div className="elu-hero-actions">
              <Link href="#contact" className="btn-primary">{t('elution.heroCta')}</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INTRO */}
      <section className="elu-intro">
        <div className="container">
          <Reveal>
            <p className="elu-intro-lead">
              {t('elution.introLead')}
            </p>
          </Reveal>
          <Reveal delay={1}>
            <p>{t('elution.introP1')}</p>
          </Reveal>
          <Reveal delay={2}>
            <p>{t('elution.introP2')}</p>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="elu-services">
        <div className="container">
          <Reveal>
            <div className="elu-services-head">
              <span className="eyebrow">{t('elution.servicesEyebrow')}</span>
              <h2>{t('elution.servicesTitle')} <em>{t('elution.servicesHighlight')}</em></h2>
            </div>
          </Reveal>
          <div className="elu-services-grid">
            {SERVICES.map((s, i) => (
              <Reveal key={s} delay={(i % 3) as 1 | 2 | 3 | 4}>
                <article className="elu-service-card">
                  <h3>{t(`elution.service${s}.title`)}</h3>
                  <p>{t(`elution.service${s}.text`)}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="elu-why">
        <div className="container">
          <Reveal>
            <div className="elu-why-head">
              <span className="eyebrow">{t('elution.whyEyebrow')}</span>
              <h2>{t('elution.whyTitle')} <em>{t('elution.whyHighlight')}</em></h2>
            </div>
          </Reveal>
          <div className="elu-features-grid">
            {REASONS.map((r, i) => (
              <Reveal key={r} delay={(i % 4) as 1 | 2 | 3 | 4}>
                <article className="elu-feature-card">
                  <span className="elu-feature-num">{r}</span>
                  <h3>{t(`elution.reason${r}.title`)}</h3>
                  <p>{t(`elution.reason${r}.text`)}</p>
                  {r === '04' && (
                    <ul className="elu-feature-list">
                      {['Mwanza', 'Kahama', 'Geita', 'Musoma'].map(item => <li key={item}>{item}</li>)}
                    </ul>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="elu-tech">
        <div className="container">
          <div className="elu-tech-layout">
            <Reveal>
              <div className="elu-tech-text">
                <span className="eyebrow">{t('elution.techEyebrow')}</span>
                <h2>{t('elution.techTitle')} <em>{t('elution.techHighlight')}</em></h2>
                <p className="elu-tech-intro">
                  {t('elution.techIntro')}
                </p>
                <ul className="elu-tech-list">
                  {TECH_POINTS.map(p => <li key={p}>{t(`elution.techPoint${p}`)}</li>)}
                </ul>
                <p className="elu-tech-outro">
                  {t('elution.techOutro')}
                </p>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="elu-process-figure">
                <div className="elu-process-frame">
                  <img src="/assets/elution/equipment.png" alt="JEMA Elution processing equipment" loading="lazy" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SUSTAINABILITY */}
      <section className="elu-sustain">
        <div className="container">
          <Reveal>
            <div className="elu-sustain-head">
              <span className="eyebrow">{t('elution.sustainEyebrow')}</span>
              <h2>{t('elution.sustainTitle')} <em>{t('elution.sustainHighlight')}</em></h2>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <p>{t('elution.sustainP1')}</p>
          </Reveal>
          <Reveal delay={2}>
            <p>{t('elution.sustainP2')}</p>
          </Reveal>
          <Reveal delay={3}>
            <p>{t('elution.sustainP3')}</p>
          </Reveal>
        </div>
      </section>

      {/* TRUSTED PARTNER */}
      <section className="elu-trust">
        <div className="container">
          <Reveal>
            <div className="elu-trust-head">
              <span className="eyebrow">{t('elution.trustEyebrow')}</span>
              <h2>{t('elution.trustTitle')} <em>{t('elution.trustHighlight')}</em></h2>
              <p>{t('elution.trustIntro')}</p>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div className="elu-formula" aria-label="Technology plus Experience plus Reliability plus Security plus Transparency plus Customer Support">
              {FORMULA.map((word, i) => (
                <span key={word} className="elu-formula-item">
                  {i > 0 && <span className="elu-formula-plus" aria-hidden="true">+</span>}
                  <span className="elu-formula-chip">{t(`elution.formula${word}`)}</span>
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={2}>
            <p className="elu-trust-outro">
              {t('elution.trustOutro')}
            </p>
          </Reveal>
        </div>
      </section>

      {/* STRATEGIC LOCATIONS */}
      <section id="contact" className="elu-locations">
        <div className="container">
          <Reveal>
            <div className="elu-services-head elu-locations-head">
              <span className="eyebrow">{t('elution.locEyebrow')}</span>
              <h2>{t('elution.locTitle')} <em>{t('elution.locHighlight')}</em></h2>
            </div>
          </Reveal>
          <div className="elu-branches-grid">
            {LOCATIONS.map((l, i) => (
              <Reveal key={l} delay={(i % 4) as 1 | 2 | 3 | 4}>
                <article className="elu-branch-card">
                  {l === 0 && <span className="elu-branch-tag">{t('elution.loc0.tag')}</span>}
                  <h3>{t(`elution.loc${l}.city`)}</h3>
                  <p>{t(`elution.loc${l}.address`)}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={2}>
            <p className="elu-locations-note">
              {t('elution.locNote')}
            </p>
          </Reveal>
        </div>
      </section>

      {/* COMMITMENT */}
      <section className="elu-commit">
        <div className="container">
          <Reveal>
            <div className="elu-commit-head">
              <span className="eyebrow">{t('elution.commitEyebrow')}</span>
              <h2>{t('elution.commitTitle')} <em>{t('elution.commitHighlight')}</em></h2>
              <p>{t('elution.commitIntro')}</p>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <p>{t('elution.commitP2')}</p>
          </Reveal>
          <Reveal delay={2}>
            <p>{t('elution.commitP3')}</p>
          </Reveal>
        </div>
      </section>

      {/* PARTNER WITH US */}
      <section className="elu-partner">
        <div className="container">
          <div className="elu-partner-in">
            <Reveal>
              <div className="elu-partner-text">
                <span className="eyebrow">{t('elution.partnerEyebrow')}</span>
                <h2>{t('elution.partnerTitle')} <em>{t('elution.partnerHighlight')}</em></h2>
                <p>{t('elution.partnerText')}</p>
                <p className="elu-partner-experience">
                  {t('elution.partnerExperience')}
                </p>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="elu-partner-contact">
                <div className="elu-partner-row">
                  <span className="lbl">{t('elution.partnerOfficeLabel')}</span>
                  <p>{t('elution.partnerOfficeAddress')}</p>
                </div>
                <div className="elu-partner-row">
                  <span className="lbl">{t('common.phone')}</span>
                  <a href="tel:+255282550380">+255 28 255 0380</a>
                </div>
                <div className="elu-partner-row">
                  <span className="lbl">{t('common.email')}</span>
                  <a href="mailto:info@jemaafrica.co.tz">info@jemaafrica.co.tz</a>
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal delay={2}>
            <p className="elu-partner-tagline">
              <strong>JEMA ELUTION</strong> — {t('elution.partnerTagline')}
            </p>
          </Reveal>
        </div>
      </section>

      <Footer />
      <CookieBanner />
    </>
  );
}
