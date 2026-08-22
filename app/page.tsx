'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Grain from '@/components/Grain';
import CookieBanner from '@/components/CookieBanner';
import Reveal from '@/components/Reveal';
import { useTranslation } from 'react-i18next';
import './home.css';

const PARTNER_NAMES = [
  'Merck', 'TBS', 'CRDB Bank', 'Haycarb', 'Tanzania Breweries', 'Berger', 'UNID', 'TMDA',
  'Simba Cements', 'AngloGold Ashanti', 'Sigma-Aldrich', 'IPF Softwares', 'TVLA', 'Taewang',
  'GCLA', 'Total Energies', 'Puma', 'Norbright', 'Tanzania Mining Commission', 'Pepsi',
  'Wizaraya Elimu', 'Robbialac', 'Hongji', 'SADC', 'Bepar Group',
  'National Institute for Medical Science', 'Milli-Q', 'TAFC', 'Taken',
];

export default function Home() {
  const { t } = useTranslation();
  const words = t('hero.typingWords', { returnObjects: true }) as string[];
  const [sent, setSent] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const servicesRef = useRef<HTMLElement>(null);
  const leadershipRef = useRef<HTMLElement>(null);
  const countdownStickyRef = useRef<HTMLDivElement>(null);
  const countdownNumberRef = useRef<HTMLSpanElement>(null);
  const countdownVideoRef = useRef<HTMLVideoElement>(null);
  const newsListRef = useRef<HTMLDivElement>(null);
  const newsFillRef = useRef<HTMLDivElement>(null);
  const typeTextRef = useRef<HTMLSpanElement>(null);
  const statsRef = useRef<HTMLElement>(null);
  const statsCounted = useRef(false);

  useEffect(() => {
    let servicesFrame: number | undefined;
    const updateServices = () => {
      const section = servicesRef.current;
      if (!section) return;
      const cards = section.querySelectorAll<HTMLElement>('.service-card');
      if (!cards.length) return;
      const scrollable = section.offsetHeight - window.innerHeight;
      const progress = Math.max(0, Math.min(-section.getBoundingClientRect().top / scrollable, 1));
      cards.forEach((card, i) => {
        const start = i / cards.length;
        const end = (i + 1) / cards.length;
        const local = Math.max(0, Math.min(1, (progress - start) / (end - start)));
        const eased = local < 0.5 ? 2 * local * local : 1 - Math.pow(-2 * local + 2, 2) / 2;
        card.style.setProperty('--p', String(eased));
      });
      servicesFrame = undefined;
    };
    const requestServicesUpdate = () => {
      if (!servicesFrame) servicesFrame = requestAnimationFrame(updateServices);
    };
    window.addEventListener('scroll', requestServicesUpdate, { passive: true });
    window.addEventListener('resize', updateServices);
    updateServices();
    return () => {
      window.removeEventListener('scroll', requestServicesUpdate);
      window.removeEventListener('resize', updateServices);
    };
  }, []);

  useEffect(() => {
    let leadershipFrame: number | undefined;
    const updateLeadership = () => {
      const section = leadershipRef.current;
      if (!section) return;
      const cards = section.querySelectorAll<HTMLElement>('.leader-card');
      if (!cards.length) return;
      const scrollable = section.offsetHeight - window.innerHeight;
      const progress = Math.max(0, Math.min(-section.getBoundingClientRect().top / scrollable, 1));
      cards.forEach((card, i) => {
        const start = i / cards.length;
        const end = (i + 1) / cards.length;
        const local = Math.max(0, Math.min(1, (progress - start) / (end - start)));
        const eased = local < 0.5 ? 2 * local * local : 1 - Math.pow(-2 * local + 2, 2) / 2;
        card.style.opacity = String(eased);
        card.style.transform = `translateY(${(1 - eased) * 30}px)`;
      });
      leadershipFrame = undefined;
    };
    const requestLeadershipUpdate = () => {
      if (!leadershipFrame) leadershipFrame = requestAnimationFrame(updateLeadership);
    };
    window.addEventListener('scroll', requestLeadershipUpdate, { passive: true });
    window.addEventListener('resize', requestLeadershipUpdate);
    requestLeadershipUpdate();
    return () => {
      window.removeEventListener('scroll', requestLeadershipUpdate);
      window.removeEventListener('resize', requestLeadershipUpdate);
    };
  }, []);

  useEffect(() => {
    let countdownFrame: number | undefined;
    const updateCountdown = () => {
      const section = document.querySelector<HTMLElement>('.countdown-reveal');
      const sticky = countdownStickyRef.current;
      const number = countdownNumberRef.current;
      const video = countdownVideoRef.current;
      if (!section || !sticky || !number) return;
      const digits = number.querySelectorAll<HTMLElement>('.countdown-digit');
      const scrollableDistance = section.offsetHeight - window.innerHeight;
      const progress = Math.max(0, Math.min(-section.getBoundingClientRect().top / scrollableDistance, 1));

      if (progress < 0.22) {
        number.style.opacity = '1';
        digits.forEach(d => d.classList.toggle('is-active', d.getAttribute('data-countdown-value') === '3'));
        number.setAttribute('aria-label', '3');
        if (video) { video.pause(); video.currentTime = 0; }
        sticky.classList.remove('is-video-revealing');
      } else if (progress < 0.38) {
        number.style.opacity = '1';
        digits.forEach(d => d.classList.toggle('is-active', d.getAttribute('data-countdown-value') === '2'));
        number.setAttribute('aria-label', '2');
        if (video) { video.pause(); video.currentTime = 0; }
        sticky.classList.remove('is-video-revealing');
      } else if (progress < 0.52) {
        number.style.opacity = '1';
        digits.forEach(d => d.classList.toggle('is-active', d.getAttribute('data-countdown-value') === '1'));
        number.setAttribute('aria-label', '1');
        if (video) { video.pause(); video.currentTime = 0; }
        sticky.classList.remove('is-video-revealing');
      } else {
        number.style.opacity = '0';
        const videoReveal = Math.max(0, Math.min((progress - 0.52) / 0.48, 1));
        sticky.style.setProperty('--video-reveal', String(videoReveal));
        sticky.classList.toggle('is-video-revealing', videoReveal > 0);
        if (videoReveal > 0 && video) {
          video.play().catch(() => {});
        } else if (video) {
          video.pause();
          video.currentTime = 0;
        }
      }

      countdownFrame = undefined;
    };
    const requestCountdownUpdate = () => {
      if (!countdownFrame) countdownFrame = requestAnimationFrame(updateCountdown);
    };
    window.addEventListener('scroll', requestCountdownUpdate, { passive: true });
    window.addEventListener('resize', updateCountdown);
    updateCountdown();
    return () => {
      window.removeEventListener('scroll', requestCountdownUpdate);
      window.removeEventListener('resize', updateCountdown);
    };
  }, []);

  useEffect(() => {
    let newsFrame: number | undefined;
    const updateNewsProgress = () => {
      const list = newsListRef.current;
      const fill = newsFillRef.current;
      if (!fill || !list) return;
      const rect = list.getBoundingClientRect();
      const total = list.offsetHeight;
      const trigger = window.innerHeight * 0.85;
      const p = Math.max(0, Math.min(1, (trigger - rect.top) / total));
      fill.style.height = (p * 100) + '%';
      newsFrame = undefined;
    };
    const requestNewsProgress = () => {
      if (!newsFrame) newsFrame = requestAnimationFrame(updateNewsProgress);
    };
    window.addEventListener('scroll', requestNewsProgress, { passive: true });
    window.addEventListener('resize', requestNewsProgress);
    requestNewsProgress();
    return () => {
      window.removeEventListener('scroll', requestNewsProgress);
      window.removeEventListener('resize', requestNewsProgress);
    };
  }, []);

  useEffect(() => {
    const typeEl = typeTextRef.current;
    if (!typeEl) return;
    let wi = 0, ci = 0, deleting = false;
    let timeout: ReturnType<typeof setTimeout>;
    const tick = () => {
      const word = words[wi];
      if (!deleting) {
        ci++;
        if (ci >= word.length) {
          deleting = true;
          typeEl.textContent = word;
          timeout = setTimeout(tick, 2400);
          return;
        }
      } else {
        ci--;
        if (ci === 0) { deleting = false; wi = (wi + 1) % words.length; }
      }
      typeEl.textContent = word.slice(0, ci);
      timeout = setTimeout(tick, deleting ? 45 : 80);
    };
    tick();
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const section = statsRef.current;
    if (!section || statsCounted.current) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const nums = section.querySelectorAll<HTMLElement>('.num');
    const targets: { el: HTMLElement; count: number; suffix: string }[] = [];
    nums.forEach(num => {
      const count = parseFloat(num.dataset.count || '');
      if (!isNaN(count)) targets.push({ el: num, count, suffix: num.dataset.suffix || '' });
    });
    if (!targets.length) return;

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
    const runCounts = () => {
      const duration = 1600;
      const start = performance.now();
      const frame = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = easeOutCubic(t);
        targets.forEach(item => {
          item.el.textContent = Math.round(item.count * eased) + item.suffix;
        });
        if (t < 1) requestAnimationFrame(frame);
      };
      requestAnimationFrame(frame);
    };

    if (reduced) {
      targets.forEach(item => { item.el.textContent = item.count + item.suffix; });
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          statsCounted.current = true;
          io.disconnect();
          runCounts();
        }
      });
    }, { threshold: 0.35 });
    io.observe(section);
    return () => io.disconnect();
  }, []);

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

  const filteredNews = activeFilter === 'all'
    ? null
    : activeFilter;

  return (
    <>
      <Grain />
      <Navbar />

      {/* HERO */}
      <section className="hero">
        <div className="hero-orb hero-orb-1" aria-hidden="true" />
        <div className="hero-orb hero-orb-2" aria-hidden="true" />
        <div className="container hero-grid">
          <div>
            <div className="hero-eyebrow reveal">
              <span className="rule" />
              <span className="eyebrow">{t('hero.eyebrow')}</span>
            </div>
            <h1 className="hero-title">
              <span className="hero-word">{t('hero.title1')}</span>
              <span className="hero-word">{t('hero.title2')}</span>
              <span className="hero-word"><em>{t('hero.title3')}</em></span>
            </h1>
            <Reveal delay={2}>
              <p className="lead">{t('hero.lead')}</p>
            </Reveal>
            <div className="hero-type">
              <span className="type-label">{t('hero.typeLabel')}</span>
              <span className="type-text" ref={typeTextRef} />
              <span className="type-caret" aria-hidden="true" />
            </div>
            <Reveal delay={3}>
              <div className="hero-actions">
                <a href="#mission" className="btn-primary">{t('hero.ctaPrimary')}</a>
              </div>
            </Reveal>
          </div>
        </div>
        <div className="scroll-cue">
          <span className="line" />
          <span>{t('hero.scrollCue')}</span>
        </div>
      </section>



      {/* STATS MARQUEE */}


      <section className="stats-marquee" ref={statsRef}>
        <div className="stats-marquee-track">
          {[0, 1].map(i => (
            <div className="stats-marquee-item" key={i}>
              <div className="stats-marquee-feature">
                <span className="num" data-count="12" data-suffix="+">12+</span>
                <span className="lbl">{t('stats.years')}</span>
              </div>
              <div className="stats-marquee-divider" />
              <div className="stats-marquee-stat">
                <span className="num" data-count="95" data-suffix="%">95%</span>
                <span className="lbl">{t('stats.partnerships')}</span>
              </div>
              <div className="stats-marquee-divider" />
              <div className="stats-marquee-stat">
                <span className="num" data-count="95" data-suffix="%">95%</span>
                <span className="lbl">{t('stats.sustainable')}</span>
              </div>
              <div className="stats-marquee-divider" />
              <div className="stats-marquee-stat">
                <span className="num" data-count="76" data-suffix="%">76%</span>
                <span className="lbl">{t('stats.clients')}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      

      {/* PARTNERSHIPS */}
      <section id="partnerships" className="partnerships-section">
        <img className="partnerships-bg" src="/assets/africa.png" alt="" aria-hidden="true" loading="lazy" />
        <div className="partnerships-glow" aria-hidden="true" />
        <div className="container">
          <div className="partnerships-layout">
            <Reveal>
              <div className="partnerships-text">
                <span className="partnerships-kicker">{t('partnerships.kicker')}</span>
                <h2 className="partnerships-title">{t('partnerships.title')}</h2>
                <p className="partnerships-body">{t('partnerships.body')}</p>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="partnerships-figure">
                <div className="partnerships-frame">
                  <img src="/assets/who.png" alt="Jema Africa" loading="lazy" />
                </div>
                <span className="partnerships-badge">{t('partnerships.badge')}</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="mission" className="services-reveal" ref={servicesRef}>
        <div className="services-sticky">
          <div className="container">
            <div className="services-head">
              <div className="section-head">
                <span className="eyebrow">{t('services.eyebrow')}</span>
                <h2>{t('services.heading')}</h2>
              </div>
              <p className="services-intro">{t('services.intro')}</p>
            </div>
            <div className="services-grid">
              <article className="service-card" data-index="01">
                <span className="service-number">01 / 04</span>
                <div className="service-icon" aria-hidden="true">
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.35">
                    <path d="M6 37h36M10 37V25l8-7 7 6 7-12 6 5v20M14 25v12M22 24v13M31 22v15M38 17v20" />
                    <path d="M7 12h11M12.5 6.5v11" />
                  </svg>
                </div>
                <h3>{t('services.card1.title')}</h3>
                <p>{t('services.card1.text')}</p>
                <a className="service-link" href="#contact">{t('services.details')}</a>
              </article>
              <article className="service-card" data-index="02">
                <span className="service-number">02 / 04</span>
                <div className="service-icon" aria-hidden="true">
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.35">
                    <path d="M5 31h29l5-11H17l-4 11H5Z" />
                    <path d="M17 20l4-8h11l7 8M11 31h28M10 31a4 4 0 1 0 8 0M30 31a4 4 0 1 0 8 0" />
                    <path d="M39 23h4v8h-4" />
                  </svg>
                </div>
                <h3>{t('services.card2.title')}</h3>
                <p>{t('services.card2.text')}</p>
                <a className="service-link" href="#contact">{t('services.details')}</a>
              </article>
              <article className="service-card" data-index="03">
                <span className="service-number">03 / 04</span>
                <div className="service-icon" aria-hidden="true">
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.35">
                    <rect x="8" y="7" width="32" height="24" rx="1" />
                    <path d="M17 41h14M24 31v10M15 19h18M24 12v14M18 13l12 12M30 13 18 25" />
                  </svg>
                </div>
                <h3>{t('services.card3.title')}</h3>
                <p>{t('services.card3.text')}</p>
                <a className="service-link" href="#contact">{t('services.details')}</a>
              </article>
              <article className="service-card" data-index="04">
                <span className="service-number">04 / 04</span>
                <div className="service-icon" aria-hidden="true">
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.35">
                    <path d="M7 30h34l-3-11H14L7 30Z" />
                    <path d="M13 19l4-7h14l5 7M10 30h28M12 30a5 5 0 1 0 10 0M28 30a5 5 0 1 0 10 0" />
                    <path d="M19 19v-4h10v4" />
                  </svg>
                </div>
                <h3>{t('services.card4.title')}</h3>
                <p>{t('services.card4.text')}</p>
                <a className="service-link" href="#contact">{t('services.details')}</a>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section id="leadership" className="leadership-reveal" ref={leadershipRef}>
        <div className="leadership-sticky">
          <div className="container">
            <Reveal>
              <div className="leadership-head">
                <div className="section-head">
                  <span className="eyebrow">{t('leadership.eyebrow')}</span>
                  <h2>{t('leadership.heading')}</h2>
                </div>
                <p className="leadership-copy">{t('leadership.copy')}</p>
              </div>
            </Reveal>
            <div className="leadership-grid">
              <article className="leader-card">
                <div className="leader-image">
                  <img src="/assets/team/mr.-fredrick-otieno.png" alt="Mr. Frederick Otieno" loading="lazy" />
                </div>
                <div className="leader-details">
                  <h3>Mr. Frederick Otieno</h3>
                  <p>DCO</p>
                </div>
              </article>
              <article className="leader-card">
                <div className="leader-image">
                  <img src="/assets/team/luchele.png" alt="Mr. Juma Luchele" loading="lazy" />
                </div>
                <div className="leader-details">
                  <h3>Mr. Juma Luchele</h3>
                  <p>COO - Mining Division</p>
                </div>
              </article>
              <article className="leader-card">
                <div className="leader-image">
                  <img src="/assets/team/608.png" alt="Ms. Agnes Daniel" loading="lazy" />
                </div>
                <div className="leader-details">
                  <h3>Ms. Agnes Daniel</h3>
                  <p>COO - Non Mining Division</p>
                </div>
              </article>
              <article className="leader-card">
                <div className="leader-image">
                  <img src="/assets/team/mr.-benezeth-kamihanda.png" alt="Mr. Benezeth Kamihanda" loading="lazy" />
                </div>
                <div className="leader-details">
                  <h3>Mr. Benezeth Kamihanda</h3>
                  <p>Principal - JIT</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section id="news">
        <div className="container">
          <div className="news-layout">
            <div className="news-intro">
              <Reveal>
                <div className="section-head">
                  <span className="eyebrow">{t('news.eyebrow')}</span>
                  <h2>{t('news.heading')}</h2>
                </div>
                <p>{t('news.intro')}</p>
              </Reveal>
              <Reveal delay={1}>
                <div className="news-filters">
                  {['all', 'corporate', 'mining', 'automotive'].map(f => (
                    <button
                      key={f}
                      className={`news-filter${activeFilter === f ? ' is-active' : ''}`}
                      data-filter={f}
                      onClick={() => setActiveFilter(f)}
                    >
                      {f === 'all' ? t('news.all') : f === 'corporate' ? t('news.corporate') : f === 'mining' ? t('news.mining') : t('news.automotive')}
                    </button>
                  ))}
                </div>
              </Reveal>
            </div>
            <div className="news-list" ref={newsListRef}>
              <div className="news-progress" aria-hidden="true">
                <div className="news-progress-fill" ref={newsFillRef} />
              </div>

              <a href="/blog/1" className="news-entry-link">
                <article
                  className={`news-entry${filteredNews && filteredNews !== 'corporate' ? ' is-hidden' : ''}`}
                  data-category="corporate"
                >
                  <time className="news-date" dateTime="2026-04-01">
                    <strong>01</strong><span>Apr</span>
                  </time>
                  <div className="news-image">
                    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=500&q=85" alt="Business team collaborating" loading="lazy" />
                  </div>
                  <div>
                    <span className="news-meta">By Admin Jema Africa</span>
                    <h3 className="news-title">JEMA Africa Limited Celebrates 14 Years of Growth, Innovation, and Impact.</h3>
                  </div>
                  <span className="news-arrow" aria-hidden="true">&#8599;</span>
                </article>
              </a>

              <a href="/blog/3" className="news-entry-link">
                <article
                  className={`news-entry${filteredNews && filteredNews !== 'automotive' ? ' is-hidden' : ''}`}
                  data-category="automotive"
                >
                  <time className="news-date" dateTime="2025-12-08">
                    <strong>08</strong><span>Dec</span>
                  </time>
                  <div className="news-image">
                    <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=500&q=85" alt="Imported vehicle on display" loading="lazy" />
                  </div>
                  <div>
                    <span className="news-meta">By Admin Jema Auto</span>
                    <h3 className="news-title">Kwa Nini Watanzania Wanapaswa Kuchagua JEMA AUTO Katika Uagizaji wa Magari Kutoka Japan</h3>
                  </div>
                  <span className="news-arrow" aria-hidden="true">&#8599;</span>
                </article>
              </a>

              <a href="/blog/2" className="news-entry-link">
                <article
                  className={`news-entry${filteredNews && filteredNews !== 'mining' ? ' is-hidden' : ''}`}
                  data-category="mining"
                >
                  <time className="news-date" dateTime="2025-12-08">
                    <strong>08</strong><span>Dec</span>
                  </time>
                  <div className="news-image">
                    <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=500&q=85" alt="Industrial mining operation" loading="lazy" />
                  </div>
                  <div>
                    <span className="news-meta">By Admin Jema Africa</span>
                    <h3 className="news-title">JEMA Africa Ltd Leads the Stage as Gold Sponsor at the 2025 Mining Show Exhibition</h3>
                  </div>
                  <span className="news-arrow" aria-hidden="true">&#8599;</span>
                </article>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* COUNTDOWN REVEAL */}
      <section className="countdown-reveal" aria-label="Jema Africa film reveal">
        <div className="countdown-sticky" ref={countdownStickyRef} id="countdown-sticky">
          <span className="countdown-number" ref={countdownNumberRef} aria-live="polite" aria-label="3">
            <span className="countdown-digit is-active" data-countdown-value="3" aria-hidden="true">3</span>
            <span className="countdown-digit" data-countdown-value="2" aria-hidden="true">2</span>
            <span className="countdown-digit" data-countdown-value="1" aria-hidden="true">1</span>
          </span>
          <span className="countdown-progress">{t('countdown.progressLabel')}</span>
          <div className="countdown-video">
            <video
              ref={countdownVideoRef}
              id="countdown-video"
              muted
              loop
              playsInline
              preload="metadata"
              poster="/assets/profile.mp4"
            >
              <source src="/assets/profile.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="partners-section" id="partners">
        <div className="container">
          <Reveal>
            <div className="partners-head">
              <div className="section-head">
                <span className="eyebrow">{t('homePartners.eyebrow')}</span>
                <h2>{t('homePartners.heading')}</h2>
              </div>
              <p>{t('homePartners.intro')}</p>
            </div>
          </Reveal>
          <Reveal>
            <div className="partners-marquee">
              <div className="partners-track">
                {[0, 1].map(i => (
                  <div className="partners-half" key={i} aria-hidden={i === 1 ? 'true' : undefined}>
                    {PARTNER_NAMES.map(name => (
                      <span className="partners-name" key={`${i}-${name}`}>{name}</span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="container"><div className="divider" /></div>

      {/* CONTACT */}
      <section id="contact">
        <div className="container">
          <div className="contact-wrap">
            <Reveal>
              <div className="contact-left">
                <span className="eyebrow">{t('contact.eyebrow')}</span>
                <h2 style={{ marginTop: 18 }}>{t('contact.heading')}</h2>
                <p>{t('contact.intro')}</p>
                <div className="contact-detail">
                  <div>
                    <span className="lbl">{t('contact.correspondence')}</span>
                    <a href="mailto:info@jemaafrica.co.tz">info@jemaafrica.co.tz</a>
                  </div>
                  <div>
                    <span className="lbl">{t('contact.headOffices')}</span>
                    {t('contact.address')}
                  </div>
                </div>
                <div className="contact-social">
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
                <button type="submit" className="submit-btn">
                  {sent ? t('contact.form.sent') : t('contact.form.submit')}
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
      <CookieBanner />
    </>
  );
}
