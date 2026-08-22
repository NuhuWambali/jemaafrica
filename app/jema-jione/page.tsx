'use client';

import { useTranslation } from 'react-i18next';

import { useCallback, useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Grain from '@/components/Grain';
import CookieBanner from '@/components/CookieBanner';
import Reveal from '@/components/Reveal';
import './jj.css';

const PILLARS = [
  { title: 'Professional Expertise', text: 'Our experienced team understands logistics complexities and delivers exceptional service.' },
  { title: 'State-of-the-Art Technology', text: 'Advanced fleet management and real-time tracking ensure your cargo is secure and on the move.' },
  { title: 'Customer-Centric Approach', text: 'Tailored solutions meet specific client requirements, building trust and reliability.' },
];

const SERVICES = [
  {
    title: 'Comprehensive Logistics Solutions',
    items: [
      { label: 'Freight Transport:', text: 'Utilizing our modern fleet for timely delivery of various goods.' },
      { label: 'Specialized Cargo Handling:', text: 'Trained team handling sensitive cargo like chemicals and agricultural products with care and compliance.' },
    ],
  },
  {
    title: 'Fleet Management System',
    items: [
      { label: 'Real-Time Tracking:', text: 'Monitor cargo location and status throughout the journey.' },
      { label: 'Optimal Routing:', text: 'Utilize the most efficient routes to minimize transit time and costs.' },
      { label: 'Safety Monitoring:', text: 'Track vehicle performance and driver behavior for high safety standards.' },
    ],
  },
  {
    title: 'Clearing and Forwarding',
    items: [
      { label: 'Customs Clearance:', text: 'Efficient handling of all customs documentation and procedures.' },
      { label: 'Cargo Forwarding:', text: 'Coordinating transportation from ports to final destinations.' },
      { label: 'Regulatory Compliance:', text: 'Ensuring shipments comply with local and international regulations.' },
    ],
  },
];

const TEAM = [
  { name: 'Ms. Happiness Ndege', role: 'Senior Declaration Officer', img: '/assets/jione/team-ndege.png' },
  { name: 'Mr. Fortunatus Wambura', role: 'Supervisor', img: '/assets/jione/team-wambura.png' },
];

const OFFICES = [
  { title: 'Mining Division HQ', address: 'Jema Tech Building. Industrial Area. Mwanza. Tanzania.', phone: '+255 28 255 0380' },
  { title: 'Non-Mining Division HQ', address: '5th floor, TAN House, Victoria, Dar es Salaam.', phone: '+255 677 091 421' },
  { title: 'JIT Main Campus', address: 'Jema Tech Building. Industrial Area. Mwanza. Tanzania.', phone: '+255 76 628 3530' },
];

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
            <span className="eyebrow">Premier logistics company</span>
          </Reveal>
          <Reveal delay={1}>
            <h1>JEMA JIONE - <em>YOUR TRUSTED</em></h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="lead">Jema Jione is a premier logistics company, dedicated to providing comprehensive and reliable logistics solutions across East and Central Africa. With a modern fleet and a team of highly skilled professionals, we are equipped to handle a diverse range of cargo, from chemical products to farm produce. Our commitment to excellence, safety, and efficiency ensures that your goods reach their destination swiftly and securely.</p>
          </Reveal>
          <Reveal delay={3}>
            <div className="jj-hero-actions">
              <a href="#contact" className="btn-primary">More Information</a>
              <a href="https://www.youtube.com/watch?v=Biaw72RTyhk" target="_blank" rel="noreferrer" className="btn-text">Watch The Video</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PILLARS */}
      <section className="jj-pillars">
        <div className="container">
          <div className="jj-pillars-grid">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i as 1 | 2 | 3 | 4}>
                <article className="jj-pillar-card">
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
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
                <span className="eyebrow">Jema Jione</span>
                <h2>Doing The Right Thing <em>At The Right Time</em></h2>
                <p>Choosing Jema Jione means opting for reliability, efficiency, and a customer-centric approach. Our advanced fleet management system provides real-time tracking and optimal routing, enhancing operational efficiency and minimizing costs. Trust Jema Jione for all your logistics needs and experience the difference in quality and service.</p>
                <div className="jj-right-values">
                  <div className="jj-right-value">
                    <span className="jj-right-icon">&#9670;</span>
                    <div>
                      <strong>Jema Jione</strong>
                      <p>From road transport to specialized logistics, we provide a range of services that cater to the diverse needs of businesses and individuals.</p>
                    </div>
                  </div>
                  <div className="jj-right-value">
                    <span className="jj-right-icon">&#9670;</span>
                    <div>
                      <strong>Our commitment</strong>
                      <p>To excellence, safety, and reliability makes us the preferred choice for all your logistics needs.</p>
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
                <span className="eyebrow">Contact Us</span>
                <h2>We offer a wide range of logistics services <em>tailored to your needs</em></h2>
                <p>Advanced fleet management and real-time tracking ensure your cargo is secure and on the move.</p>
                <div className="jj-contact-detail">
                  <span className="lbl">Mobile</span>
                  <p>Office Number +255 28 255 0380 &amp; +255 677 091 421</p>
                </div>
                <div className="jj-contact-detail">
                  <span className="lbl">Location</span>
                  <p>Jema Tech Building. Industrial Area. Mwanza. Tanzania.</p>
                  <p>5th floor, TAN House, Victoria, Dar es Salaam.</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <form onSubmit={handleFormSubmit}>
                <div className="jj-form-row">
                  <div className="field">
                    <label htmlFor="fname">First Name</label>
                    <input id="fname" type="text" required />
                  </div>
                  <div className="field">
                    <label htmlFor="lname">Last Name</label>
                    <input id="lname" type="text" required />
                  </div>
                </div>
                <div className="jj-form-row">
                  <div className="field">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" required />
                  </div>
                  <div className="field">
                    <label htmlFor="phone">Phone</label>
                    <input id="phone" type="tel" required />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="subject">Subject</label>
                  <input id="subject" type="text" required />
                </div>
                <div className="field">
                  <label htmlFor="comments">Comment</label>
                  <textarea id="comments" />
                </div>
                <button type="submit" className="submit-btn">
                  {sent ? 'Message Sent' : 'Send Message'}
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
              <span className="eyebrow">What We Do</span>
              <h2>Get in Touch with Jema Jione <em>Logistics</em></h2>
              <p>At Jema Jione, we understand that different types of cargo require different handling. We offer a wide range of logistics services tailored to your needs:</p>
            </div>
          </Reveal>
          <div className="jj-services-grid">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i as 1 | 2 | 3 | 4}>
                <article className="jj-service-block">
                  <div className="jj-service-header">
                    <span className="jj-service-num">{String(i + 1).padStart(2, '0')}</span>
                    <h3>{s.title}</h3>
                  </div>
                  <ul>
                    {s.items.map((item) => (
                      <li key={item.label}>
                        <strong>{item.label}</strong> {item.text}
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
                <h2>Our team is here to assist <em>you with your logistics needs.</em></h2>
                <a href="https://www.youtube.com/watch?v=Biaw72RTyhk" target="_blank" rel="noreferrer" className="btn-primary">Watch The Video.</a>
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
              <span className="eyebrow">Our Team Member</span>
              <h2>Our Expertise <em>Will Help You</em></h2>
              <p>Ready to get started? Whether you&apos;re shipping chemicals, heavy machinery, or fresh produce, Jema Jione is ready to provide a customized logistics solution. Get in touch with us for a competitive quote and fast, reliable service.</p>
            </div>
          </Reveal>
          <div className="jj-team-grid">
            {TEAM.map((m, i) => (
              <Reveal key={m.name} delay={i as 1 | 2 | 3 | 4}>
                <article className="jj-team-card">
                  <div className="jj-team-image">
                    <img src={m.img} alt={m.name} loading="lazy" />
                  </div>
                  <div className="jj-team-details">
                    <h3>{m.name}</h3>
                    <p>{m.role}</p>
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
              <span className="eyebrow">Latest News &amp; Blogs</span>
              <h2>What&apos;s New in <em>Business Area to Know</em></h2>
            </div>
          </Reveal>
          <div className="jj-news-grid">
            <Reveal>
              <a className="jj-news-entry" href="https://jemaafrica.co.tz/jema-africa-limited-celebrates-14-years-of-growth-innovation-and-impact/" target="_blank" rel="noreferrer">
                <div className="jj-news-image">
                  <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=500&q=85" alt="News" loading="lazy" />
                  <time className="jj-news-date"><strong>01</strong><span>Apr</span></time>
                </div>
                <div className="jj-news-body">
                  <span className="jj-news-meta">April 1, 2026 · Jema Africa</span>
                  <h3>JEMA Africa Limited Celebrates 14 Years</h3>
                  <span className="jj-news-link">READ MORE &#8594;</span>
                </div>
              </a>
            </Reveal>
            <Reveal delay={1}>
              <a className="jj-news-entry" href="https://jemaafrica.co.tz/jema-africa-ltd-leads-the-stage-as-gold-sponsor-at-the-2025-mining-show-exhibition-in-dubai/" target="_blank" rel="noreferrer">
                <div className="jj-news-image">
                  <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=500&q=85" alt="News" loading="lazy" />
                  <time className="jj-news-date"><strong>08</strong><span>Dec</span></time>
                </div>
                <div className="jj-news-body">
                  <span className="jj-news-meta">December 8, 2025 · Jema Africa</span>
                  <h3>JEMA Africa Ltd Leads the Stage as Gold Sponsor</h3>
                  <span className="jj-news-link">READ MORE &#8594;</span>
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
            {OFFICES.map((o, i) => (
              <Reveal key={o.title} delay={i as 1 | 2 | 3 | 4}>
                <article className="jj-office-card">
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