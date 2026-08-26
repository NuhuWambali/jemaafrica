/* eslint-disable @next/next/no-img-element */
'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
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

const HERO_SLIDES = [
  { key: 'brand', img: '/assets/hero-bg.jpg', href: '#mission' },
  { key: 'mining', img: '/assets/chemicals/chemical.png', href: '/chemicals' },
  { key: 'logistics', img: '/assets/cargo/cargo-road.png', href: '/jetcargo' },
  { key: 'tech', img: '/assets/jematech/building.png', href: '/tech' },
  { key: 'auto', img: '/assets/auto/hero.png', href: '/auto' },
];

export default function Home() {
  const { t, i18n } = useTranslation();
  const [sent, setSent] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [heroIndex, setHeroIndex] = useState(0);
  const [heroPaused, setHeroPaused] = useState(false);
  const words = t(`hero.slides.${HERO_SLIDES[heroIndex].key}.typing`, { returnObjects: true }) as string[];
  const leadershipRef = useRef<HTMLElement>(null);
  const countdownStickyRef = useRef<HTMLDivElement>(null);
  const countdownVideoRef = useRef<HTMLVideoElement>(null);
  const newsListRef = useRef<HTMLDivElement>(null);
  const newsFillRef = useRef<HTMLDivElement>(null);
  const typeTextRef = useRef<HTMLSpanElement>(null);
  const statsRef = useRef<HTMLElement>(null);
  const statsCounted = useRef(false);
  const heroRef = useRef<HTMLElement>(null);

  const handleHeroMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const el = heroRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--spot-x', `${e.clientX - rect.left}px`);
    el.style.setProperty('--spot-y', `${e.clientY - rect.top}px`);
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
    const section = document.querySelector<HTMLElement>('.countdown-reveal');
    const sticky = countdownStickyRef.current;
    const video = countdownVideoRef.current;
    if (!section || !sticky || !video) return;

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          sticky.style.setProperty('--video-reveal', '1');
          sticky.classList.add('is-video-revealing');
          video.play().catch(() => {});
        } else {
          sticky.style.setProperty('--video-reveal', '0');
          sticky.classList.remove('is-video-revealing');
          video.pause();
          video.currentTime = 0;
        }
      });
    }, { threshold: 0.12 });

    io.observe(section);
    return () => io.disconnect();
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
    if (!typeEl || !Array.isArray(words) || words.length === 0) return;
    let wi = 0, ci = 0, deleting = false;
    let timeout: ReturnType<typeof setTimeout>;
    const tick = () => {
      const word = words[wi];
      if (!word) return;
      if (!deleting) {
        ci++;
        if (ci >= word.length) {
          deleting = true;
          typeEl.textContent = word;
          timeout = setTimeout(tick, 2000);
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
  }, [words, i18n.language, heroIndex]);

  useEffect(() => {
    if (heroPaused) return;
    const id = setInterval(() => {
      setHeroIndex(i => (i + 1) % HERO_SLIDES.length);
    }, 6500);
    return () => clearInterval(id);
  }, [heroPaused, heroIndex]);

  const goToHeroSlide = useCallback((i: number) => {
    setHeroIndex(((i % HERO_SLIDES.length) + HERO_SLIDES.length) % HERO_SLIDES.length);
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
      <section
        className="hero"
        ref={heroRef}
        onMouseMove={handleHeroMouseMove}
        onMouseEnter={() => heroRef.current?.classList.add('is-wiping')}
        onMouseLeave={() => heroRef.current?.classList.remove('is-wiping')}
      >
        <div className="hero-slides" aria-hidden="true">
          {HERO_SLIDES.map((slide, i) => (
            <div key={slide.key} className={`hero-slide${i === heroIndex ? ' is-active' : ''}`}>
              <div className="hero-slide-bg" style={{ backgroundImage: `url(${slide.img})` }} />
            </div>
          ))}
        </div>
        <div className="hero-orb hero-orb-1" aria-hidden="true" />
        <div className="hero-orb hero-orb-2" aria-hidden="true" />
        <div className="container hero-grid">
          <div key={heroIndex} className="hero-content">
            <div className="hero-eyebrow">
              <span className="rule" />
              <span className="eyebrow">{t(`hero.slides.${HERO_SLIDES[heroIndex].key}.eyebrow`)}</span>
            </div>
            <h1 className="hero-title">
              <span className="hero-word">{t(`hero.slides.${HERO_SLIDES[heroIndex].key}.title1`)}</span>
              <span className="hero-word">{t(`hero.slides.${HERO_SLIDES[heroIndex].key}.title2`)}</span>
              <span className="hero-word"><em>{t(`hero.slides.${HERO_SLIDES[heroIndex].key}.title3`)}</em></span>
            </h1>
            <p className="lead">{t(`hero.slides.${HERO_SLIDES[heroIndex].key}.lead`)}</p>
            <div className="hero-type">
              <span className="type-label">{t('hero.typeLabel')}</span>
              <span className="type-text" ref={typeTextRef} />
              <span className="type-caret" aria-hidden="true" />
            </div>
            <div className="hero-actions">
              <a href={HERO_SLIDES[heroIndex].href} className="btn-primary">{t(`hero.slides.${HERO_SLIDES[heroIndex].key}.cta`)}</a>
            </div>
          </div>
        </div>
        <div className="hero-progress" key={heroIndex} aria-hidden="true">
          <div className="hero-progress-fill" />
        </div>
        <div
          className="hero-controls"
          onMouseEnter={() => setHeroPaused(true)}
          onMouseLeave={() => setHeroPaused(false)}
        >
          <button
            type="button"
            className="hero-arrow hero-arrow-prev"
            aria-label="Previous slide"
            onClick={() => goToHeroSlide(heroIndex - 1)}
          >
            &#8592;
          </button>
          <div className="hero-dots" role="tablist" aria-label="Slides">
            {HERO_SLIDES.map((slide, i) => (
              // eslint-disable-next-line jsx-a11y/role-supports-aria-props
              <button
                key={slide.key}
                type="button"
                className={`hero-dot${i === heroIndex ? ' is-active' : ''}`}
                aria-label={`Slide ${i + 1}`}
                aria-selected={i === heroIndex}
                onClick={() => goToHeroSlide(i)}
              />
            ))}
          </div>
          <button
            type="button"
            className="hero-arrow hero-arrow-next"
            aria-label="Next slide"
            onClick={() => goToHeroSlide(heroIndex + 1)}
          >
            &#8594;
          </button>
        </div>
        <div className="scroll-cue">
          <span className="line" />
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
           
                  <img src="/assets/about.jpeg" alt="Jema Africa" loading="lazy" />
                </div>
                <span className="partnerships-badge">{t('partnerships.badge')}</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="mission" className="services-section">
        <div className="services-bg" aria-hidden="true" />
        <div className="container">
          <Reveal>
            <div className="services-head">
              <div className="section-head">
                <span className="eyebrow">{t('services.eyebrow')}</span>
                <h2>{t('services.heading')}</h2>
              </div>
              <p className="services-intro">{t('services.intro')}</p>
            </div>
          </Reveal>
          <div className="services-grid">
            {[
              { num: '01', cell: 'cell-a', href: '/chemicals', img: '/assets/elution/equipment.png', icon: <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.35"><path d="M6 37h36M10 37V25l8-7 7 6 7-12 6 5v20M14 25v12M22 24v13M31 22v15M38 17v20" /><path d="M7 12h11M12.5 6.5v11" /></svg>, titleKey: 'services.card1.title', textKey: 'services.card1.text' },
              { num: '02', cell: 'cell-b', href: '/jetcargo', img: '/assets/cargo/cargo-road.png', icon: <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.35"><path d="M5 31h29l5-11H17l-4 11H5Z" /><path d="M17 20l4-8h11l7 8M11 31h28M10 31a4 4 0 1 0 8 0M30 31a4 4 0 1 0 8 0" /><path d="M39 23h4v8h-4" /></svg>, titleKey: 'services.card2.title', textKey: 'services.card2.text' },
              { num: '03', cell: 'cell-c', href: '/tech', img: '/assets/jematech/building.png', icon: <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.35"><rect x="8" y="7" width="32" height="24" rx="1" /><path d="M17 41h14M24 31v10M15 19h18M24 12v14M18 13l12 12M30 13 18 25" /></svg>, titleKey: 'services.card3.title', textKey: 'services.card3.text' },
              { num: '04', cell: 'cell-d', href: '/auto', img: '/assets/auto/bg.png', icon: <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.35"><path d="M7 30h34l-3-11H14L7 30Z" /><path d="M13 19l4-7h14l5 7M10 30h28M12 30a5 5 0 1 0 10 0M28 30a5 5 0 1 0 10 0" /><path d="M19 19v-4h10v4" /></svg>, titleKey: 'services.card4.title', textKey: 'services.card4.text' },
            ].map((card, i) => (
              <Reveal key={card.num} delay={(i % 2) as 1 | 2} className={`service-cell ${card.cell}`}>
                <article className="service-card">
                  <div className="service-card-inner">
                    <div className="service-card-face service-card-front">
                      <div className="service-card-bg" style={{ backgroundImage: `url(${card.img})` }} aria-hidden="true" />
                      <div className="service-icon" aria-hidden="true">{card.icon}</div>
                      <span className="service-number" aria-hidden="true">{card.num}</span>
                    </div>
                    <div className="service-card-face service-card-back">
                      <div className="service-icon service-icon-back" aria-hidden="true">{card.icon}</div>
                      <h3>{t(card.titleKey)}</h3>
                      <p>{t(card.textKey)}</p>
                      <Link href={card.href} className="service-link">{t('services.details')}</Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
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
                  <img src="/assets/team/mr.-fredrick-otieno.png" alt="Frederick Otieno" loading="lazy" />
                </div>
                <div className="leader-details">
                  <h3>Frederick Otieno</h3>
                  <p>DCO</p>
                </div>
              </article>
              <article className="leader-card">
                <div className="leader-image">
                  <img src="/assets/team/luchele.png" alt="Juma Luchele" loading="lazy" />
                </div>
                <div className="leader-details">
                  <h3>Juma Luchele</h3>
                  <p>COO - Mining Division</p>
                </div>
              </article>
              <article className="leader-card">
                <div className="leader-image">
                  <img src="/assets/team/608.png" alt="Agnes Daniel" loading="lazy" />
                </div>
                <div className="leader-details">
                  <h3>Agnes Daniel</h3>
                  <p>COO - Non Mining Division</p>
                </div>
              </article>
              <article className="leader-card">
                <div className="leader-image">
                  <img src="/assets/team/mr.-benezeth-kamihanda.png" alt="Benezeth Kamihanda" loading="lazy" />
                </div>
                <div className="leader-details">
                  <h3>Benezeth Kamihanda</h3>
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
