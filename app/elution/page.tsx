'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Grain from '@/components/Grain';
import CookieBanner from '@/components/CookieBanner';
import Reveal from '@/components/Reveal';
import './elution.css';

const FEATURES = [
  { num: '01', title: 'Company Stability', text: 'We can support your gold mining operations with a dependable, long-standing partner you can trust.' },
  { num: '02', title: 'High Capacity Machines', text: 'Our high-pressure, high-temperature machines operate 24 hours with a capacity of up to 1000kg.' },
  { num: '03', title: 'Reliable Power Supply', text: 'Maximum reliability and efficiency, keeping the elution plant running around the clock.' },
  { num: '04', title: 'Exceptional Customer Care', text: 'A dedicated customer service team ready to support you at every step of your recovery process.' },
  { num: '05', title: 'Transparency', text: 'Full transparency on every batch, every cost, and every result — no surprises.' },
  { num: '06', title: 'Experienced Staff', text: 'A skilled team working with thousands of mining clients across the region.' },
  { num: '07', title: 'Competitive Pricing', text: 'Investment-friendly pricing that maximizes your recovery rate and profitability.' },
  { num: '08', title: 'Security', text: 'Secure handling of your gold recovery from start to finish.' },
];

const BRANCHES = [
  { city: 'Mwanza Branch', address: 'Mkuyuni, Industrial Area.', phone: '+255 769 498 997' },
  { city: 'Kahama Branch', address: 'Mbulu Street.', phone: '+255 743 550 535' },
  { city: 'Geita Branch', address: 'Mpomvu Street.', phone: '+255 745 694 989' },
  { city: 'Musoma Branch', address: 'Musoma Bus Stop Street.', phone: '+255 677 079 517' },
];

const TEAM = [
  { name: 'Mr. Mokili Daniel Sese', role: 'Geita Branch Manager', img: '/assets/elution/team-mokili.png' },
  { name: 'Mr. Baraka Lusake', role: 'Musoma Branch Manager', img: '/assets/elution/team-baraka.png' },
  { name: 'Samweli Makindi', role: 'Mwanza Branch Manager', img: '/assets/elution/team-makindi.png' },
  { name: 'Mr. Sese Felix Daniel', role: 'Kahama - Acting Branch Manager', img: '/assets/elution/team-sese.png' },
];

const NEWS = [
  {
    day: '01', month: 'Apr', author: 'Admin Jema Africa', category: 'Jema Africa',
    title: 'JEMA Africa Limited Celebrates 14 Years',
    href: 'https://jemaafrica.co.tz/jema-africa-limited-celebrates-14-years-of-growth-innovation-and-impact/',
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=500&q=85',
  },
  {
    day: '08', month: 'Dec', author: 'Admin Jema Auto', category: 'Jema Auto',
    title: 'Kwa Nini Watanzania Wanapaswa Kuchagua JEMA',
    href: 'https://jemaafrica.co.tz/kwa-nini-watanzania-wanapaswa-kuchagua-jema-auto-katika-uagizaji-wa-magari-kutoka-japan/',
    img: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=500&q=85',
  },
  {
    day: '08', month: 'Dec', author: 'Admin Jema Africa', category: 'Jema Africa',
    title: 'JEMA Africa Ltd Leads the Stage',
    href: 'https://jemaafrica.co.tz/jema-africa-ltd-leads-the-stage-as-gold-sponsor-at-the-2025-mining-show-exhibition-in-dubai/',
    img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=500&q=85',
  },
];

const OFFICES = [
  { title: 'Mining Division HQ', address: 'Jema Tech Building. Mkuyuni, Industrial Area. Mwanza. Tanzania.', phone: '+255 28 255 0380' },
  { title: 'Non-Mining Division HQ', address: '5th floor, TAN House, Victoria, Dar es Salaam.', phone: '+255 677 091 421' },
  { title: 'JIT Main Campus', address: 'Jema Tech Building. Mkuyuni, Industrial Area. Mwanza. Tanzania.', phone: '+255 76 628 3530' },
];

export default function ElutionPage() {
  const statsRef = useRef<HTMLElement>(null);
  const statsCounted = useRef(false);
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

  const handleFormSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  }, []);

  return (
    <>
      <Grain />
      <Navbar />

      {/* HERO */}
      <section className="elu-hero">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Welcome to Jema Elution</span>
          </Reveal>
          <Reveal delay={1}>
            <h1>Leaders in Efficient <em>Gold Recovery</em> and Processing</h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="lead">Welcome to Jema Elution, where we specialize in efficient gold recovery and processing from activated carbon, delivering results in the shortest time while maximizing cost savings.</p>
          </Reveal>
          <Reveal delay={3}>
            <p className="elu-capacity">Our advanced high-pressure, high-temperature machines operate 24 hours, with a capacity of up to 1000kg.</p>
          </Reveal>
          <Reveal delay={4}>
            <div className="elu-hero-actions">
              <Link href="#contact" className="btn-primary">Contact Us Today</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY */}
      <section className="elu-why">
        <div className="container">
          <Reveal>
            <div className="elu-why-head">
              <span className="eyebrow">Why Jema Africa Elution?</span>
              <h2>Let us help you achieve your goals with the <em>most efficient gold recovery technology</em> available today.</h2>
              <p className="elu-why-intro">At Jema Elution, we regularly maintain our machines, ensuring that the elution plant continues to run optimally, minimizing downtime and maximizing performance.</p>
            </div>
          </Reveal>
          <div className="elu-features-grid">
            {FEATURES.map((f, i) => (
              <Reveal key={f.num} delay={(i % 4) as 1 | 2 | 3 | 4}>
                <article className="elu-feature-card">
                  <span className="elu-feature-num">{f.num}</span>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="elu-process">
        <div className="container">
          <div className="elu-process-layout">
            <Reveal>
              <div className="elu-process-text">
                <span className="eyebrow">Jema Elution</span>
                <h2>Our Gold Recovery <em>Process.</em></h2>
                <p className="elu-process-intro">At Jema Elution, we use a proven process to ensure the efficient recovery of gold from activated carbon:</p>
                <div className="elu-process-item">
                  <h3>Recovery Optimization</h3>
                  <p>By using advanced monitoring and control systems, we optimize every aspect of the recovery process, ensuring consistent and reliable gold extraction.</p>
                </div>
                <div className="elu-process-item">
                  <h3>Sustainability</h3>
                  <p>We are committed to sustainable practices. Our machines are designed to reduce environmental impact, utilizing minimal water and chemicals during the recovery process.</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="elu-process-figure">
                <div className="elu-process-frame">
                  <img src="/assets/elution/equipment.png" alt="Jema Elution equipment" loading="lazy" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="elu-stats" ref={statsRef}>
        <div className="container">
          <div className="elu-stats-grid">
            <Reveal>
              <div className="elu-stat">
                <span className="num" data-count="76" data-suffix="%">76%</span>
                <span className="lbl">Successful Stories</span>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="elu-stat">
                <span className="num" data-count="3000" data-suffix="%">3000%</span>
                <span className="lbl">Organizations &amp; Financial</span>
              </div>
            </Reveal>
            <Reveal delay={2}>
              <div className="elu-stat">
                <span className="num" data-count="24" data-suffix="h">24h</span>
                <span className="lbl">Machines Operating</span>
              </div>
            </Reveal>
            <Reveal delay={3}>
              <div className="elu-stat">
                <span className="num" data-count="1000" data-suffix="kg">1000kg</span>
                <span className="lbl">Maximum Capacity</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CALLBACK */}
      <section className="elu-callback">
        <div className="container">
          <div className="elu-callback-in">
            <Reveal>
              <h2>Jema Elution is here to <em>help.</em></h2>
              <p>Speak directly with our team about your gold recovery needs.</p>
            </Reveal>
            <Reveal delay={1}>
              <div className="elu-callback-actions">
                <Link href="#contact" className="btn-primary">Request A Call Back</Link>
                <div className="elu-helpdesk">
                  <span className="lbl">HELP DESK 24H/7</span>
                  <a href="tel:+255282550380">+255 28 255 0380</a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CONTACT / BRANCHES */}
      <section id="contact" className="elu-contact">
        <div className="container">
          <Reveal>
            <div className="elu-contact-head">
              <span className="eyebrow">Location</span>
              <h2>Contact us <em>today.</em></h2>
              <p>We are here to assist you with any questions, support needs, or service inquiries. Whether you&apos;re looking for more information about our services or would like to speak directly with our team, we&apos;re ready to help. Your satisfaction is our top priority, and we look forward to serving you.</p>
            </div>
          </Reveal>
          <div className="elu-branches-grid">
            {BRANCHES.map((b, i) => (
              <Reveal key={b.city} delay={i as 1 | 2 | 3 | 4}>
                <article className="elu-branch-card">
                  <h3>{b.city}</h3>
                  <p>{b.address}</p>
                  <a href={`tel:${b.phone.replace(/\s/g, '')}`}>{b.phone}</a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="elu-form-section">
        <div className="container">
          <div className="elu-form-wrap">
            <Reveal>
              <div className="elu-form-info">
                <span className="eyebrow">Contact Us</span>
                <h2>We are capable of handling <em>large-scale operations.</em></h2>
                <p>Our state-of-the-art technology ensures maximum efficiency, rapid results, and significant cost savings for our clients in the gold mining industry.</p>
                <div className="elu-form-location">
                  <span className="lbl">Location</span>
                  <p>Jema Tech Building. Industrial Area. Mwanza. Tanzania.</p>
                  <a href="tel:+255282550380">Office Phone Number +255 28 255 0380</a>
                  <p>4th Floor, Noble Center, Dar es Salaam. Tanzania.</p>
                  <a href="tel:+255677091522">Office Phone Number +255 677 091 522</a>
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
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" type="tel" required />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" required />
                </div>
                <div className="field">
                  <label htmlFor="comment">Comment</label>
                  <textarea id="comment" />
                </div>
                <button type="submit" className="submit-btn">
                  {sent ? 'Message Sent' : 'Send Message'}
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="elu-team">
        <div className="container">
          <Reveal>
            <div className="elu-team-head">
              <span className="eyebrow">Our Team</span>
              <h2>Meet Our <em>Dedicated Team</em></h2>
              <p>By choosing Jema Elution, you&apos;re investing in a solution that maximizes both your recovery rate and profitability. Let us help you achieve your goals with the most efficient gold recovery technology available today.</p>
            </div>
          </Reveal>
          <div className="elu-team-grid">
            {TEAM.map((member, i) => (
              <Reveal key={member.name} delay={(i % 4) as 1 | 2 | 3 | 4}>
                <article className="elu-team-card">
                  <div className="elu-team-image">
                    <img src={member.img} alt={member.name} loading="lazy" />
                  </div>
                  <div className="elu-team-details">
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="elu-news">
        <div className="container">
          <Reveal>
            <div className="elu-news-head">
              <span className="eyebrow">Blog &amp; News</span>
              <h2>Our Latest <em>News</em></h2>
              <p>Our agency can only be as strong as our people — our teams run their businesses with dedication and care.</p>
            </div>
          </Reveal>
          <div className="elu-news-grid">
            {NEWS.map((n, i) => (
              <Reveal key={n.title} delay={i as 1 | 2 | 3 | 4}>
                <a className="elu-news-entry" href={n.href} target="_blank" rel="noreferrer">
                  <div className="elu-news-image">
                    <img src={n.img} alt={n.title} loading="lazy" />
                    <time className="elu-news-date" dateTime="2026-04-01">
                      <strong>{n.day}</strong><span>{n.month}</span>
                    </time>
                  </div>
                  <div className="elu-news-body">
                    <span className="elu-news-meta">by {n.author} · {n.category}</span>
                    <h3>{n.title}</h3>
                    <span className="elu-news-link">READ MORE &#8594;</span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="elu-cta">
        <div className="container">
          <Reveal>
            <div className="elu-cta-in">
              <h2>Ready to Make a Difference with <em>Jema Africa?</em></h2>
              <div className="elu-cta-actions">
                <div className="elu-cta-item">
                  <span className="lbl">Hotline</span>
                  <a href="tel:+255282550380">+255 28 255 0380</a>
                </div>
                <div className="elu-cta-item">
                  <span className="lbl">Send Us Email</span>
                  <a href="mailto:info@jemaafrica.co.tz">info@jemaafrica.co.tz</a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* OFFICES */}
      <section className="elu-offices">
        <div className="container">
          <div className="elu-offices-grid">
            {OFFICES.map((o, i) => (
              <Reveal key={o.title} delay={i as 1 | 2 | 3 | 4}>
                <article className="elu-office-card">
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