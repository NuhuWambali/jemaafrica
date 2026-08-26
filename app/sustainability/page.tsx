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

const COMMITMENTS = ['Integrity', 'Transparency', 'Compliance', 'Accountability', 'Fair Trade', 'Zero Harm'];

const TIMELINE = [
  {
    year: 'Education',
    title: 'Skills that outlast projects',
    text: "Through Jema Institute of Technology, we train the engineers and technicians who will build Africa's industries — with a campus in Mwanza and programs designed for real-world impact.",
  },
  {
    year: 'Community',
    title: 'Value stays where we work',
    text: 'We employ locally across our mining and non-mining divisions, partner with regulators and public institutions, and ensure safe, ethical working conditions at every site.',
  },
  {
    year: 'Together',
    title: 'Partnerships that multiply impact',
    text: 'Our network connects specialist expertise, regional knowledge, and global capability across every Jema Africa division — progress is built together.',
  },
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
      <section className="about-hero">
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
          <Reveal delay={3}>
            <div className="about-hero-meta">
              <span><b>2012</b><small>Founded</small></span>
              <span><b>3</b><small>Focus Areas</small></span>
              <span><b>29+</b><small>Strategic Partners</small></span>
              <span><b>12+</b><small>Years Operating</small></span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STORY */}
      <section className="story-section">
        <div className="container">
          <div className="story-layout">
            <Reveal>
              <div className="story-text">
                <span className="eyebrow">Social Responsibility</span>
                <h2>Sustainability is at the <em>core</em> of everything we do.</h2>
                <p>At Jema Africa, we are dedicated to <strong>environmental stewardship, social responsibility, and ethical business practices</strong> that benefit our communities and the environment. Our initiatives are designed to ensure long-term positive impacts and adhere to stringent compliance standards, aligning with both local and international regulations.</p>
                <p>From responsible mining operations to community empowerment programs, every decision we make reflects our commitment to creating lasting value for Africa.</p>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="story-figure">
                <div className="story-frame">
                  <img src="/assets/about.jpeg" alt="Jema Africa" loading="lazy" />
                </div>
                <span className="story-badge">Since 2012</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="about-stats" ref={statsRef}>
        <div className="container">
          <div className="about-stats-grid">
            <Reveal>
              <div className="about-stat">
                <span className="num" data-count="95" data-suffix="%">95%</span>
                <span className="lbl">Sustainable Practices Implemented</span>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="about-stat">
                <span className="num" data-count="29" data-suffix="+">29+</span>
                <span className="lbl">Strategic Partners</span>
              </div>
            </Reveal>
            <Reveal delay={2}>
              <div className="about-stat">
                <span className="num" data-count="12" data-suffix="+">12+</span>
                <span className="lbl">Years Of Responsible Operation</span>
              </div>
            </Reveal>
            <Reveal delay={3}>
              <div className="about-stat">
                <span className="num" data-count="76" data-suffix="%">76%</span>
                <span className="lbl">Repeat Clients Across Divisions</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PURPOSE */}
      <section className="purpose-section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow">Key Areas of Focus</span>
              <h2>Three pillars guiding our impact.</h2>
            </div>
          </Reveal>
          <div className="purpose-grid">
            <Reveal>
              <article className="purpose-card has-image" style={{ backgroundImage: 'url(/assets/elution/elution.png)' }}>
                <div className="purpose-card-overlay" aria-hidden="true" />
                <div className="purpose-card-content">
                  <div className="glyph">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 2v20M3 12h18M12 12a9 9 0 0 0 9 9M12 12a9 9 0 0 1-9 9M12 12a9 9 0 0 0-9-9M12 12a9 9 0 0 1 9-9" /></svg>
                  </div>
                  <h3>Environmental Stewardship</h3>
                  <p>We implement eco-friendly practices to minimize our environmental footprint, including waste reduction, energy efficiency, and sustainable sourcing across all operations.</p>
                </div>
              </article>
            </Reveal>
            <Reveal delay={1}>
              <article className="purpose-card has-image" style={{ backgroundImage: 'url(/assets/jit/campus.png)' }}>
                <div className="purpose-card-overlay" aria-hidden="true" />
                <div className="purpose-card-content">
                  <div className="glyph">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                  </div>
                  <h3>Community Engagement</h3>
                  <p>Our projects aim to uplift local communities through education, health initiatives, and economic empowerment programs that create sustainable opportunities.</p>
                </div>
              </article>
            </Reveal>
            <Reveal delay={2}>
              <div className="values-block">
                <h3>Ethical Business Practices</h3>
                <p>We maintain the highest standards of integrity and transparency in all our business dealings — ensuring compliance with local and international regulations.</p>
                <div className="values-chips">
                  {COMMITMENTS.map(v => (
                    <span className="value-chip" key={v}>{v}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="journey-section">
        <div className="container">
          <Reveal>
            <div className="journey-head">
              <div>
                <span className="eyebrow">Corporate Responsibility</span>
                <h2>Committed to the communities we operate in.</h2>
              </div>
              <p className="journey-note">From the classroom to the mine site, we invest where our people live and work.</p>
            </div>
          </Reveal>
          <div className="timeline">
            {TIMELINE.map((item, i) => (
              <Reveal key={i}>
                <div className="tl-item">
                  <span className="tl-year">{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="partners-section">
        <div className="container">
          <Reveal>
            <div className="partners-head">
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
            <div className="about-cta">
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
