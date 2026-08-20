'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Grain from '@/components/Grain';
import Reveal from '@/components/Reveal';
import './about.css';

const DIVISIONS = [
  { num: '01 / 08', name: 'Jema Elution', desc: 'Gold elution and smelting services that help Tanzania\'s miners convert ore into value.' },
  { num: '02 / 08', name: 'Jema Chemicals', desc: 'Supply of mining chemicals, reagents, and consumables that keep processing plants running.' },
  { num: '03 / 08', name: 'Jema Life Science', desc: 'Laboratory equipment, reagents, and life science supplies for research and medical institutions.' },
  { num: '04 / 08', name: 'JetCargo', desc: 'Efficient, reliable logistics and transportation services for businesses moving across Africa.' },
  { num: '05 / 08', name: 'Jema Auto', desc: 'Dependable vehicle sourcing and import services connecting clients with quality vehicles.' },
  { num: '06 / 08', name: 'Jema Jione', desc: 'Distribution and trading services that connect quality products to customers across the region.' },
  { num: '07 / 08', name: 'Jema Financial Services', desc: 'Financial services that support the group\'s clients, partners, and communities.' },
  { num: '08 / 08', name: 'JIT', desc: 'Jema Institute of Technology — empowering Africa\'s next engineers and technicians.' },
];

const LEADERS = [
  { name: 'Mr. Frederick Otieno', role: 'DCO', img: '/assets/team/mr.-fredrick-otieno.png' },
  { name: 'Mr. Juma Luchele', role: 'COO - Mining Division', img: '/assets/team/luchele.png' },
  { name: 'Ms. Agnes Daniel', role: 'COO - Non Mining Division', img: '/assets/team/608.png' },
  { name: 'Mr. Benezeth Kamihanda', role: 'Principal - JIT', img: '/assets/team/mr.-benezeth-kamihanda.png' },
];

const TIMELINE = [
  { year: '2012', title: 'Jema Africa is founded', text: 'Operations begin in Mwanza, Tanzania, laying the groundwork for a diversified Pan-African group.' },
  { year: 'Expansion', title: 'Mining & chemicals grow', text: 'Gold elution services and mining chemical supply become core strengths, supporting the region\'s mining sector.' },
  { year: 'Growth', title: 'New divisions join the family', text: 'JetCargo, Jema Auto, Jema Life Science, Jema Financial Services, and Jema Jione extend the group across logistics, automotive, life science, and financial services.' },
  { year: 'Education', title: 'Jema Institute of Technology opens', text: 'JIT empowers the next generation of engineers and technicians at its main campus in Mwanza.' },
  { year: '2026', title: '14 years of growth and impact', text: 'Today Jema Africa operates across Tanzania and beyond — driven by the same belief we started with: innovation is the foundation of Africa\'s future.' },
];

const VALUES = ['Integrity', 'Innovation', 'Excellence', 'Partnership', 'Sustainability', 'Impact'];

export default function AboutPage() {
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
            <span className="eyebrow">About Jema Africa</span>
          </Reveal>
          <Reveal delay={1}>
            <h1>One group. <em>Africa&apos;s tomorrow.</em></h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="lead">A diversified Pan-African group operating across mining, technology, logistics, finance, education, and industrial services since 2012.</p>
          </Reveal>
          <Reveal delay={3}>
            <div className="about-hero-meta">
              <span><b>2012</b><small>Founded in Tanzania</small></span>
              <span><b>8+</b><small>Business divisions</small></span>
              <span><b>2</b><small>Head offices</small></span>
              <span><b>5</b><small>Branches across the region</small></span>
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
                <span className="eyebrow">Who we are</span>
                <h2>We believe innovation is the <em>foundation</em> of Africa&apos;s future.</h2>
                <p>At Jema Africa, we believe every challenge presents an opportunity to create meaningful and sustainable value. Rather than simply solving problems, we <strong>build businesses, technologies, and strategic partnerships</strong> that transform industries and improve lives across Africa.</p>
                <p>From gold elution and mining chemicals to logistics, automotive import, financial services, and technical education, our divisions work as one — sharing expertise, infrastructure, and ambition to move the continent forward.</p>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="story-figure">
                <div className="story-frame">
                  <img src="/assets/who.png" alt="Jema Africa" loading="lazy" />
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
                <span className="num" data-count="12" data-suffix="+">12+</span>
                <span className="lbl">Years Of Experience</span>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="about-stat">
                <span className="num" data-count="95" data-suffix="%">95%</span>
                <span className="lbl">Growth In Strategic Partnerships</span>
              </div>
            </Reveal>
            <Reveal delay={2}>
              <div className="about-stat">
                <span className="num" data-count="95" data-suffix="%">95%</span>
                <span className="lbl">Sustainable Practices Implemented</span>
              </div>
            </Reveal>
            <Reveal delay={3}>
              <div className="about-stat">
                <span className="num" data-count="76" data-suffix="%">76%</span>
                <span className="lbl">Repeat Clients Across</span>
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
              <span className="eyebrow">Our Purpose</span>
              <h2>What drives everything we do.</h2>
            </div>
          </Reveal>
          <div className="purpose-grid">
            <Reveal>
              <article className="purpose-card">
                <div className="glyph">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/></svg>
                </div>
                <h3>Our Mission</h3>
                <p>To build businesses, technologies, and partnerships that transform industries and improve lives across Africa — with integrity and lasting impact.</p>
              </article>
            </Reveal>
            <Reveal delay={1}>
              <article className="purpose-card">
                <div className="glyph">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>
                </div>
                <h3>Our Vision</h3>
                <p>To be the Pan-African group recognised for driving sustainable economic transformation across every region we operate in.</p>
              </article>
            </Reveal>
            <Reveal delay={2}>
              <div className="values-block">
                <h3>Our Values</h3>
                <div className="values-chips">
                  {VALUES.map(v => (
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
                <span className="eyebrow">Our Journey</span>
                <h2>Milestones along the way.</h2>
              </div>
              <p className="journey-note">From a single operation in Mwanza to a diversified group serving clients across the continent.</p>
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

      {/* LEADERSHIP */}
      <section className="leadership-section">
        <div className="container">
          <Reveal>
            <div className="leadership-head">
              <div>
                <span className="eyebrow">Our Senior Management</span>
                <h2>Driving success across all divisions.</h2>
              </div>
              <p className="leadership-copy">Meet the visionary leaders guiding Jema Africa&apos;s diverse ventures toward growth and innovation.</p>
            </div>
          </Reveal>
          <div className="leadership-grid">
            {LEADERS.map((leader, i) => (
              <Reveal key={leader.name} delay={(i % 4 + 1) as 1 | 2 | 3 | 4}>
                <article className="leader-card">
                  <div className="leader-image">
                    <img src={leader.img} alt={leader.name} loading="lazy" />
                  </div>
                  <div className="leader-details">
                    <h3>{leader.name}</h3>
                    <p>{leader.role}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DIVISIONS */}
      <section className="divisions-section">
        <div className="container">
          <Reveal>
            <div className="divisions-head">
              <div>
                <span className="eyebrow">What We Do</span>
                <h2>Eight divisions, one standard.</h2>
              </div>
              <p>Each division brings specialist expertise, while sharing the group&apos;s infrastructure, relationships, and ambition.</p>
            </div>
          </Reveal>
          <div className="divisions-grid">
            {DIVISIONS.map((div, i) => (
              <Reveal key={div.name} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <article className="division-card">
                  <span className="division-num">{div.num}</span>
                  <h3>{div.name}</h3>
                  <p>{div.desc}</p>
                  <Link href="/business" className="division-link">Explore <span aria-hidden="true">&rarr;</span></Link>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="about-cta">
              <div>
                <h3>Ready to build Africa&apos;s future together?</h3>
                <p>Whether you&apos;re an entrepreneur, partner, or investor — reach out and let&apos;s explore what we can achieve together.</p>
              </div>
              <Link href="/contact" className="nav-cta">Get In Touch</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
