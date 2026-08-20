'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Grain from '@/components/Grain';
import CookieBanner from '@/components/CookieBanner';
import Reveal from '@/components/Reveal';
import './sustainability.css';

const PARTNER_NAMES = [
  'Merck', 'TBS', 'CRDB Bank', 'Haycarb', 'Tanzania Breweries', 'Berger', 'UNID', 'TMDA',
  'Simba Cements', 'AngloGold Ashanti', 'Sigma-Aldrich', 'IPF Softwares', 'TVLA', 'Taewang',
  'GCLA', 'Total Energies', 'Puma', 'Norbright', 'Tanzania Mining Commission', 'Pepsi',
  'Wizara ya Elimu', 'Robbialac', 'Hongji', 'SADC', 'Bepar Group',
  'National Institute for Medical Science', 'Milli-Q', 'TAFC', 'Taken',
];

export default function SustainabilityPage() {
  const statsRef = useRef<HTMLElement>(null);
  const statsCounted = useRef(false);

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

  return (
    <>
      <Grain />
      <Navbar />

      {/* HERO */}
      <section className="sus-hero">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Sustainability &amp; Corporate</span>
          </Reveal>
          <Reveal delay={1}>
            <h1>Growth that <em>gives back.</em></h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="lead">At Jema Africa, sustainability and corporate responsibility are embedded in how we operate — across every division, partner, and community we serve.</p>
          </Reveal>
        </div>
      </section>

      {/* APPROACH */}
      <section className="approach-section">
        <div className="container">
          <div className="approach-layout">
            <Reveal>
              <div className="approach-text">
                <span className="eyebrow">Social Responsibility</span>
                <h2>Sustainability is at the <em>core</em> of everything we do.</h2>
                <p>At Jema Africa, we are dedicated to <strong>environmental stewardship, social responsibility, and ethical business practices</strong> that benefit our communities and the environment. Our initiatives are designed to ensure long-term positive impacts and adhere to stringent compliance standards, aligning with both local and international regulations.</p>
                <p>From responsible mining operations to community empowerment programs, every decision we make reflects our commitment to creating lasting value for Africa.</p>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="approach-figure">
                <div className="approach-frame">
                  <img src="/assets/who.png" alt="Jema Africa" loading="lazy" />
                </div>
                <span className="approach-badge">Since 2012</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="pillars-section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow">Key Areas of Focus</span>
              <h2>Three pillars guiding our impact.</h2>
            </div>
          </Reveal>
          <div className="pillars-grid">
            <Reveal>
              <article className="pillar-card">
                <span className="pillar-num">01 / 03</span>
                <div className="pillar-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M12 2v20M3 12h18M12 12a9 9 0 0 0 9 9M12 12a9 9 0 0 1-9 9M12 12a9 9 0 0 0-9-9M12 12a9 9 0 0 1 9-9" />
                  </svg>
                </div>
                <h3>Environmental Stewardship</h3>
                <p>We implement eco-friendly practices to minimize our environmental footprint, including waste reduction, energy efficiency, and sustainable sourcing across all operations.</p>
              </article>
            </Reveal>
            <Reveal delay={1}>
              <article className="pillar-card">
                <span className="pillar-num">02 / 03</span>
                <div className="pillar-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3>Community Engagement</h3>
                <p>Our projects aim to uplift local communities through education, health initiatives, and economic empowerment programs that create sustainable opportunities.</p>
              </article>
            </Reveal>
            <Reveal delay={2}>
              <article className="pillar-card">
                <span className="pillar-num">03 / 03</span>
                <div className="pillar-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3>Ethical Business Practices</h3>
                <p>We maintain the highest standards of integrity and transparency in all our business dealings, ensuring compliance with local and international regulations.</p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="sus-stats" ref={statsRef}>
        <div className="container">
          <div className="sus-stats-grid">
            <Reveal>
              <div className="sus-stat">
                <span className="num" data-count="95" data-suffix="%">95%</span>
                <span className="lbl">Sustainable Practices Implemented</span>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="sus-stat">
                <span className="num" data-count="29" data-suffix="+">29+</span>
                <span className="lbl">Strategic Partners</span>
              </div>
            </Reveal>
            <Reveal delay={2}>
              <div className="sus-stat">
                <span className="num" data-count="12" data-suffix="+">12+</span>
                <span className="lbl">Years Of Responsible Operation</span>
              </div>
            </Reveal>
            <Reveal delay={3}>
              <div className="sus-stat">
                <span className="num" data-count="76" data-suffix="%">76%</span>
                <span className="lbl">Repeat Clients Across</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* RESPONSIBILITY */}
      <section className="responsibility-section">
        <div className="container">
          <Reveal>
            <div className="responsibility-head">
              <div>
                <span className="eyebrow">Corporate Responsibility</span>
                <h2>Committed to the communities we operate in.</h2>
              </div>
              <p className="responsibility-copy">From the classroom to the mine site, we invest where our people live and work.</p>
            </div>
          </Reveal>
          <div className="responsibility-grid">
            <Reveal>
              <article className="resp-card">
                <div className="glyph">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <h3>Education &amp; Skills</h3>
                <p>Through Jema Institute of Technology, we train the engineers and technicians who will build Africa&apos;s industries — with a campus in Mwanza and programs designed for real-world impact.</p>
                <ul className="resp-list">
                  <li>Technical training for the mining and technology sectors</li>
                  <li>Local talent development and career pathways</li>
                  <li>Collaboration with educational institutions across the region</li>
                </ul>
              </article>
            </Reveal>
            <Reveal delay={1}>
              <article className="resp-card">
                <div className="glyph">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3>People &amp; Local Growth</h3>
                <p>We employ locally, partner with Tanzanian institutions, and build supply chains that keep value in the communities where we operate.</p>
                <ul className="resp-list">
                  <li>Local hiring across our mining and non-mining divisions</li>
                  <li>Working with regulators, commissions, and public institutions</li>
                  <li>Safe, ethical working conditions at every site</li>
                </ul>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="sus-partners-section">
        <div className="container">
          <Reveal>
            <div className="sus-partners-head">
              <div>
                <span className="eyebrow">Our Partners</span>
                <h2>Progress is built together.</h2>
              </div>
              <p>Our network connects specialist expertise, regional knowledge, and global capability across every Jema Africa division.</p>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div className="sus-partners-marquee">
              <div className="sus-partners-track">
                {[0, 1].map(i => (
                  <div className="sus-partners-half" key={i} aria-hidden={i === 1 ? 'true' : undefined}>
                    {PARTNER_NAMES.map(name => (
                      <span className="sus-partners-name" key={`${i}-${name}`}>{name}</span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="sus-cta">
              <div>
                <h3>Partner with a group that builds responsibly.</h3>
                <p>Whether you&apos;re a partner, institution, or community organisation — let&apos;s build something sustainable together.</p>
              </div>
              <Link href="/contact" className="nav-cta">Get In Touch</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
      <CookieBanner />
    </>
  );
}
