'use client';

import { useTranslation } from 'react-i18next';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Grain from '@/components/Grain';
import CookieBanner from '@/components/CookieBanner';
import Reveal from '@/components/Reveal';
import './lifescience.css';

const PILLARS = [
  { title: 'Courage', text: 'To support better scientific future.' },
  { title: 'Achievement', text: 'Makes our client success possible.' },
  { title: 'Responsibility', text: 'Determines our client action.' },
  { title: 'Integrity', text: 'Ensure our credibility.' },
  { title: 'Transparency', text: 'Makes mutual trust possible.' },
];

const SECTORS = [
  { title: 'Food and Beverage Industries', img: '/assets/lifescience/food-beverage.png' },
  { title: 'Research and Diagnostics', img: '/assets/lifescience/research-diagnostics.png' },
  { title: 'Academia', img: '/assets/lifescience/academia.png' },
];

const ACTIVITIES = [
  {
    title: 'Product Distribution',
    items: [
      {
        sub: 'Merck Products',
        text: 'As the exclusive distributor, we manage the importation and local stocking of a variety of Merck products. This approach ensures timely availability and delivery of essential chemicals to our clients.',
      },
      {
        sub: 'Local Partnerships',
        text: 'Our supplier base goes beyond Merck to include other leading global brands. This diversification strategy is aimed at meeting a wider range of client needs and improving market competitiveness.',
      },
    ],
  },
  {
    title: 'Client Portfolio',
    items: [
      {
        sub: 'Growing Client Base',
        text: 'Our client base has grown rapidly, with key clients including NIMR, Kioo Limited, UDSM, TBS, TBL, Pepsi, and TVLA, just to name a few. This diverse portfolio underscores our capability to serve various sectors within the life sciences field.',
      },
    ],
  },
];

const VALUE_PROPS = [
  {
    title: 'Access to Premium Research Products',
    text: 'Partnering with Jema Life Science ensures access to the highest quality research products from global leaders like Merck and other reputable brands, guaranteeing the best materials for scientific and industrial applications.',
  },
  {
    title: 'Enhanced Accuracy and Reliability',
    text: 'Utilizing our top-tier products means clients can achieve better results and accurate readings in their research and production processes, fostering trust and reliability in their operations.',
  },
  {
    title: 'Timely Availability and Delivery',
    text: 'Our strategic operations and partnerships ensure that essential chemicals and research products are always available when needed, minimizing downtime and supporting continuous operations.',
  },
];

const NEWS = [
  {
    day: '01', month: 'Apr', date: 'April 1, 2026',
    title: 'JEMA Africa Limited Celebrates 14 Years of Growth, Innovation, and Impact.',
    href: 'https://jemaafrica.co.tz/jema-africa-limited-celebrates-14-years-of-growth-innovation-and-impact/',
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=500&q=85',
  },
  {
    day: '08', month: 'Dec', date: 'December 8, 2025',
    title: 'Kwa Nini Watanzania Wanapaswa Kuchagua JEMA AUTO Katika Uagizaji wa Magari Kutoka Japan',
    href: 'https://jemaafrica.co.tz/kwa-nini-watanzania-wanapaswa-kuchagua-jema-auto-katika-uagizaji-wa-magari-kutoka-japan/',
    img: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=500&q=85',
  },
  {
    day: '08', month: 'Dec', date: 'December 8, 2025',
    title: 'JEMA Africa Ltd Leads the Stage as Gold Sponsor at the 2025 Mining Show Exhibition',
    href: 'https://jemaafrica.co.tz/jema-africa-ltd-leads-the-stage-as-gold-sponsor-at-the-2025-mining-show-exhibition-in-dubai/',
    img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=500&q=85',
  },
];

const OFFICES = [
  { title: 'Mining Division HQ', address: 'Jema Tech Building. Industrial Area. Mwanza. Tanzania.', phone: '+255 28 255 0380' },
  { title: 'Non-Mining Division HQ', address: '5th floor, TAN House, Victoria, Dar es Salaam.', phone: '+255 677 091 421' },
  { title: 'JIT Main Campus', address: 'Jema Tech Building. Industrial Area. Mwanza. Tanzania.', phone: '+255 76 628 3530' },
];

export default function LifeSciencePage() {
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
      <section className="ls-hero">
        <div className="container">
          <Reveal>
            <span className="eyebrow">{t('lifescience.eyebrow')}</span>
          </Reveal>
          <Reveal delay={1}>
            <h1>{t('lifescience.title')}</h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="lead">{t('lifescience.lead')}</p>
          </Reveal>
          <Reveal delay={3}>
            <p className="ls-hero-sub">Our initial partnership with Merck, a leading global pharmaceutical company, granted us exclusive distribution rights for Merck&apos;s products across Tanzania. This collaboration set the foundation for our operations and growth.</p>
          </Reveal>
          <Reveal delay={4}>
            <div className="ls-hero-actions">
              <a href="#about" className="btn-primary">{t('lifescience.cta')}</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* YEAR STAT */}
      <section className="ls-year">
        <div className="container">
          <Reveal>
            <div className="ls-year-in">
              <span className="ls-year-num">2023</span>
              <span className="ls-year-lbl">We&apos;ve Year Of Experiences</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PILLARS */}
      <section className="ls-pillars">
        <div className="container">
          <Reveal>
            <div className="ls-pillars-head">
              <span className="eyebrow">Our Key Pillars</span>
              <p>Jema Life Science Division is committed to innovation, quality, and expanding our service offerings to meet the evolving needs of the Tanzanian market. By broadening our supplier base and enhancing distribution networks, we aim to establish ourselves as a leader in the life sciences sector.</p>
            </div>
          </Reveal>
          <div className="ls-pillars-grid">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={(i % 5) as 1 | 2 | 3 | 4}>
                <article className="ls-pillar-card">
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="ls-about">
        <div className="container">
          <div className="ls-about-layout">
            <Reveal>
              <div className="ls-about-figure">
                <img src="/assets/lifescience/about.png" alt="Jema Life Science" loading="lazy" />
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="ls-about-text">
                <span className="eyebrow">About Us</span>
                <h2>Jema <em>Life Science</em></h2>
                <p>The division initially operated from our headquarters in Mwanza but relocated to Dar es Salaam in October 2023 to enhance market access. This strategic move allowed us to better serve our clients and expand our reach. We now operate with a dedicated team of professionals and have successfully established a robust market presence.</p>
                <div className="ls-mission">
                  <h3>Mission</h3>
                  <p>To distribute innovative, distinctive products and services that save and improve lives and satisfy customer needs. To be recognized as a great place to work and to provide investors with a superior rate of return.</p>
                </div>
                <div className="ls-mission">
                  <h3>Vision</h3>
                  <p>Becoming a one stop shop for all laboratory requirements across in this part of the world.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTORS */}
      <section className="ls-sectors">
        <div className="container">
          <Reveal>
            <div className="ls-sectors-head">
              <span className="eyebrow">Industries We Serve</span>
              <h2>Serving Every Corner of the <em>Life Sciences Field</em></h2>
            </div>
          </Reveal>
          <div className="ls-sectors-grid">
            {SECTORS.map((s, i) => (
              <Reveal key={s.title} delay={i as 1 | 2 | 3 | 4}>
                <article className="ls-sector-card">
                  <div className="ls-sector-image">
                    <img src={s.img} alt={s.title} loading="lazy" />
                  </div>
                  <h3>{s.title}</h3>
                  <span className="ls-sector-tag">Jema Life Science</span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMMITMENT */}
      <section className="ls-commitment">
        <div className="container">
          <div className="ls-commitment-layout">
            <Reveal>
              <div className="ls-commitment-text">
                <span className="eyebrow">Our Commitment</span>
                <h2>Jema <em>Life Science</em></h2>
                <p>As a part of our practice, commitment is not just a word — it&apos;s the cornerstone of our entire operation. We are deeply committed to advancing science and healthcare by providing top-quality products and services to our customers.</p>
                <p>First and foremost, we are committed to the quality of the products we distribute. We understand that the researchers, scientists, and healthcare professionals who rely on our products are working on projects that have the potential to save lives and improve the quality of life for countless individuals. That&apos;s why we spare no effort in ensuring that every product we distribute meets the highest standards of quality and reliability.</p>
                <p>Our commitment extends beyond just the products themselves. We are also committed to providing exceptional customer service. We know that our customers often have tight deadlines and demanding research schedules, so we go above and beyond to ensure that their orders are processed quickly and accurately. Our team is always available to provide technical support and assistance, because we understand that our customers&apos; success is our success.</p>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="ls-commitment-figure">
                <img src="/assets/lifescience/commitment.png" alt="Commitment to quality" loading="lazy" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* KEY ACTIVITIES */}
      <section className="ls-activities">
        <div className="container">
          <Reveal>
            <div className="ls-activities-head">
              <span className="eyebrow">Jema Life Science</span>
              <h2>Key <em>Activities</em></h2>
            </div>
          </Reveal>
          <div className="ls-activities-grid">
            {ACTIVITIES.map((act, i) => (
              <Reveal key={act.title} delay={i as 1 | 2 | 3 | 4}>
                <article className="ls-activity-card">
                  <h3>{act.title}</h3>
                  {act.items.map((item) => (
                    <div className="ls-activity-item" key={item.sub}>
                      <h4>{item.sub}</h4>
                      <p>{item.text}</p>
                    </div>
                  ))}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="ls-values">
        <div className="container">
          <div className="ls-values-grid">
            {VALUE_PROPS.map((v, i) => (
              <Reveal key={v.title} delay={i as 1 | 2 | 3 | 4}>
                <article className="ls-value-card">
                  <span className="ls-value-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path d="M12 2v20M3 12h18M12 12a9 9 0 0 0 9 9M12 12a9 9 0 0 1-9 9M12 12a9 9 0 0 0-9-9M12 12a9 9 0 0 1 9-9" />
                    </svg>
                  </span>
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="ls-contact">
        <div className="container">
          <div className="ls-contact-wrap">
            <Reveal>
              <div className="ls-contact-info">
                <span className="eyebrow">Contact Us</span>
                <h2>We are committed to the quality of the products we <em>distribute.</em></h2>
                <p>We are here to assist you with any questions, support needs, or service inquiries. Whether you&apos;re looking for more information about our services or would like to speak directly with our team, we&apos;re ready to help.</p>
                <div className="ls-contact-detail">
                  <span className="lbl">Mobile</span>
                  <a href="tel:+255282550380">+255 28 255 0380</a>
                  <a href="tel:+255677091421">+255 677 091 421</a>
                </div>
                <div className="ls-contact-detail">
                  <span className="lbl">Location</span>
                  <p>Jema Tech Building. Industrial Area. Mwanza. Tanzania.</p>
                  <p>5th floor, TAN House, Victoria, Dar es Salaam.</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <form onSubmit={handleFormSubmit}>
                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input id="name" type="text" required />
                </div>
                <div className="field">
                  <label htmlFor="phone">{t('common.phone')}</label>
                  <input id="phone" type="tel" required />
                </div>
                <div className="field">
                  <label htmlFor="email">{t('common.email')}</label>
                  <input id="email" type="email" required />
                </div>
                <div className="field">
                  <label htmlFor="comment">Comment</label>
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
      <section className="ls-news">
        <div className="container">
          <Reveal>
            <div className="ls-news-head">
              <span className="eyebrow">Recent News</span>
              <h2>Inside Story &amp; <em>Blog</em></h2>
            </div>
          </Reveal>
          <div className="ls-news-grid">
            {NEWS.map((n, i) => (
              <Reveal key={n.title} delay={i as 1 | 2 | 3 | 4}>
                <a className="ls-news-entry" href={n.href} target="_blank" rel="noreferrer">
                  <div className="ls-news-image">
                    <img src={n.img} alt={n.title} loading="lazy" />
                    <time className="ls-news-date" dateTime="2026-04-01">
                      <strong>{n.day}</strong><span>{n.month}</span>
                    </time>
                  </div>
                  <div className="ls-news-body">
                    <span className="ls-news-meta">{n.date}</span>
                    <h3>{n.title}</h3>
                    <span className="ls-news-link">{t('common.readMore')} &#8594;</span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OFFICES */}
      <section className="ls-offices">
        <div className="container">
          <div className="ls-offices-grid">
            {OFFICES.map((o, i) => (
              <Reveal key={o.title} delay={i as 1 | 2 | 3 | 4}>
                <article className="ls-office-card">
                  <h3>{o.title}</h3>
                  <p>{o.address}</p>
                  <a href={`tel:${o.phone.replace(/\s/g, '')}`}>Phone: {o.phone}</a>
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