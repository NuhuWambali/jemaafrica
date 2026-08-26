/* eslint-disable @next/next/no-img-element */
'use client';

import { useTranslation } from 'react-i18next';

import { useCallback, useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Grain from '@/components/Grain';
import CookieBanner from '@/components/CookieBanner';
import Reveal from '@/components/Reveal';
import './tech.css';

const SERVICES = [
  { num: '01', title: 'Digital Marketing', desc: 'Grow smarter, reach further, convert more. In today\u2019s fast-moving digital world, having a strong online presence is essential.', img: '/assets/jematech/digital-marketing.png' },
  { num: '02', title: 'Data Management & Analytics', desc: 'Turn information into action. In today\u2019s data-driven world, information is power — but only if you can act on it.', img: '/assets/jematech/data-analytics.png' },
  { num: '03', title: 'Web Design & Development', desc: 'Building smart, scalable, and strategic digital experiences. In today\u2019s digital world, your website is often the first impression.', img: '/assets/jematech/web-design.png' },
  { num: '04', title: 'Mobile App Development', desc: 'Powering business growth through smart mobility. We specialize in building secure, scalable, and intuitive mobile applications.', img: '/assets/jematech/mobile-app.png' },
  { num: '05', title: 'Custom Software Development', desc: 'Building tailored solutions for your unique business needs. Let\u2019s bring your vision to life with tailor-made technology.', img: '/assets/jematech/custom-software.png' },
  { num: '06', title: 'Internet of Things (IoT) Solutions', desc: 'Connect, automate, and innovate. We help businesses unlock the power of IoT to transform their operations.', img: '/assets/jematech/iot.png' },
];

const REASONS = [
  { title: 'Expert Team', text: 'Experienced engineers, designers, and strategists.' },
  { title: 'Agile Methodology', text: 'Transparent, client-first development approach.' },
  { title: 'End-to-End Service', text: 'From idea to execution under one roof.' },
  { title: 'Quality Assurance', text: 'Focused on reliability, security, and performance.' },
  { title: 'Long-Term Partnership', text: 'We grow as you grow.' },
];

const PROCESS = [
  { num: '1', title: 'Discovery & Consultation', text: 'Understand client needs and define clear goals.' },
  { num: '2', title: 'Design & Prototyping', text: 'Create intuitive UI/UX wireframes and system architecture.' },
  { num: '3', title: 'Development', text: 'Agile and iterative development cycles.' },
  { num: '4', title: 'Testing & QA', text: 'Rigorous testing ensures performance and reliability.' },
  { num: '5', title: 'Deployment & Support', text: 'Seamless rollout and continuous support.' },
];

const TEAM = [
  { name: 'Rita Augustine', role: 'Technology Lead', img: '/assets/jematech/team-rita.png' },
  { name: 'Agnes Daniel', role: 'COO - Non Mining Division', img: '/assets/team/608.png' },
  { name: 'Daniel Nyanda', role: 'Innovation & Development', img: '/assets/jematech/team-nyanda.png' },
];

const NEWS = [
  {
    day: '01', month: 'Apr', date: 'April 1, 2026', category: 'Jema Africa',
    title: 'JEMA Africa Limited Celebrates 14 Years of Growth, Innovation, and Impact.',
    href: 'https://jemaafrica.co.tz/jema-africa-limited-celebrates-14-years-of-growth-innovation-and-impact/',
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=500&q=85',
  },
  {
    day: '08', month: 'Dec', date: 'December 8, 2025', category: 'Jema Auto',
    title: 'Kwa Nini Watanzania Wanapaswa Kuchagua JEMA AUTO Katika Uagizaji wa Magari Kutoka Japan',
    href: 'https://jemaafrica.co.tz/kwa-nini-watanzania-wanapaswa-kuchagua-jema-auto-katika-uagizaji-wa-magari-kutoka-japan/',
    img: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=500&q=85',
  },
  {
    day: '08', month: 'Dec', date: 'December 8, 2025', category: 'Jema Africa',
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

export default function TechPage() {
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
      <section className="tech-hero">
        <div className="container">
          <Reveal>
            <span className="eyebrow">{t('tech.eyebrow')}</span>
          </Reveal>
          <Reveal delay={1}>
            <h1>{t('tech.title')}</h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="lead">{t('tech.lead')}</p>
          </Reveal>
          <Reveal delay={3}>
            <div className="tech-hero-actions">
              <a href="#contact" className="btn-primary">{t('tech.cta')}</a>
              <a href="#about" className="btn-text">{t('common.readMore')}</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="tech-services">
        <div className="container">
          <Reveal>
            <div className="tech-services-head">
              <span className="eyebrow">Our Services</span>
              <h2>What we can <em>do.</em></h2>
              <p>With a strong belief that technology should be practical, inclusive, and accessible, our mission is to close gaps in finance, logistics, and digital services across the region.</p>
            </div>
          </Reveal>
          <div className="tech-services-grid">
            {SERVICES.map((s, i) => (
              <Reveal key={s.num} delay={(i % 3) as 1 | 2 | 3 | 4}>
                <article className="tech-service-card">
                  <div className="tech-service-image">
                    <img src={s.img} alt={s.title} loading="lazy" />
                    <span className="tech-service-num">{s.num}</span>
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <span className="tech-service-link">{t('common.readMore')} &#8594;</span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="tech-about">
        <div className="container">
          <div className="tech-about-layout">
            <Reveal>
              <div className="tech-about-text">
                <span className="eyebrow">About Jema Tech</span>
                <h2>Discover who we are, what we stand for, and how we drive <em>digital transformation.</em></h2>
                <p>JEMATECH is an innovative technology division of Jema Africa Ltd, committed to driving digital transformation across Tanzania and the wider African continent.</p>
                <p>Founded in 2019, JEMATECH was established to deliver scalable, intelligent, and sustainable technology solutions that address real-world challenges — particularly in the areas of financial services, logistics, and beyond. As a core engine of innovation within Jema Africa Ltd, JEMATECH aligns seamlessly with the parent company&apos;s vision of building a self-reliant and empowered Africa through technology-driven progress.</p>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="tech-about-figure">
                <img src="/assets/jematech/about.png" alt="Jema Tech" loading="lazy" />
                <span className="tech-about-badge">Since 2019</span>
              </div>
            </Reveal>
          </div>

          <div className="tech-mission-grid">
            <Reveal>
              <div className="tech-mission-card">
                <span className="eyebrow">Our Mission</span>
                <p>At JEMATECH, our mission is to empower businesses and communities through smart and user-centric digital solutions. We believe technology should be a driver of real-world impact and lasting growth. We focus on creating tools that are not only functional but also meaningful and scalable. Our approach blends innovation with practical problem-solving to deliver real value.</p>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="tech-mission-card">
                <span className="eyebrow">Company Vision</span>
                <p>To become a globally recognized technology partner known for transforming ideas into intelligent solutions, while maintaining a commitment to excellence, sustainability and client success.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="tech-story">
        <div className="container">
          <div className="tech-story-layout">
            <Reveal>
              <div className="tech-story-figure">
                <img src="/assets/jematech/building.png" alt="Jema Tech operations" loading="lazy" />
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="tech-story-text">
                <span className="eyebrow">We make it happen.</span>
                <h2>Deliver services directly into your <em>customers&apos; hands.</em></h2>
                <p>JEMA TECH has grown into a powerful tech hub within JEMA Africa Co Ltd with operation bases in Mwanza and Dar es Salaam. The department thrives on a culture of creativity, collaboration, and impact.</p>
                <p>Today, Jema Tech continues to shape the future by building systems that are not only innovative but also deeply rooted in the everyday lives of the people they serve.</p>
                <p>JEMATECH continues to position itself as a technology powerhouse within the JEMA Africa Co Ltd ecosystem, with offices in Mwanza and Dar es Salaam. The department operates with a dedicated team of experts who combine innovation with practical insight. As a hub of digital excellence, JEMATECH is poised to lead the next wave of tech-driven development initiatives — not just within the company, but across sectors throughout the continent.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="tech-team">
        <div className="container">
          <Reveal>
            <div className="tech-team-head">
              <span className="eyebrow">Our Leadership Team</span>
              <h2>Meet Our <em>Dedicated Team</em></h2>
              <p>Through collaboration and creativity, we help organizations navigate digital transformation with confidence.</p>
            </div>
          </Reveal>
          <div className="tech-team-grid">
            {TEAM.map((member, i) => (
              <Reveal key={member.name} delay={i as 1 | 2 | 3 | 4}>
                <article className="tech-team-card">
                  <div className="tech-team-image">
                    <img src={member.img} alt={member.name} loading="lazy" />
                  </div>
                  <div className="tech-team-details">
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="tech-reasons">
        <div className="container">
          <div className="tech-reasons-layout">
            <Reveal>
              <div className="tech-reasons-head">
                <span className="eyebrow">Why you should Choose JEMATECH?</span>
                <h2>We believe technology should be a driver of <em>real-world impact</em> and lasting growth.</h2>
                <p>Ready to turn your data into decisions? Let JEMA TECH help you build the foundation for a data-driven future.</p>
              </div>
            </Reveal>
            <div className="tech-reasons-list">
              {REASONS.map((r, i) => (
                <Reveal key={r.title} delay={(i % 5) as 1 | 2 | 3 | 4}>
                  <article className="tech-reason-card">
                    <span className="tech-reason-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4L4.2 7.7l5.4-.8L12 2z" />
                      </svg>
                    </span>
                    <div>
                      <h3>{r.title}</h3>
                      <p>{r.text}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="tech-process">
        <div className="container">
          <Reveal>
            <div className="tech-process-head">
              <span className="eyebrow">Our Working Process</span>
              <h2>From idea to <em>impact.</em></h2>
              <p>We follow a structured approach from understanding your needs to delivering high-quality solutions. Our process ensures clear communication, expert execution, and continuous support at every stage.</p>
            </div>
          </Reveal>
          <div className="tech-process-grid">
            {PROCESS.map((p, i) => (
              <Reveal key={p.num} delay={(i % 5) as 1 | 2 | 3 | 4}>
                <article className="tech-process-card">
                  <span className="tech-process-num">{p.num}</span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="tech-news">
        <div className="container">
          <Reveal>
            <div className="tech-news-head">
              <span className="eyebrow">Blog &amp; News</span>
              <h2>Our Latest <em>News</em></h2>
              <p>Our agency can only be as strong as our people — our teams run their businesses with dedication and care.</p>
            </div>
          </Reveal>
          <div className="tech-news-grid">
            {NEWS.map((n, i) => (
              <Reveal key={n.title} delay={i as 1 | 2 | 3 | 4}>
                <a className="tech-news-entry" href={n.href} target="_blank" rel="noreferrer">
                  <div className="tech-news-image">
                    <img src={n.img} alt={n.title} loading="lazy" />
                    <time className="tech-news-date" dateTime="2026-04-01">
                      <strong>{n.day}</strong><span>{n.month}</span>
                    </time>
                  </div>
                  <div className="tech-news-body">
                    <span className="tech-news-meta">{n.category} · {n.date}</span>
                    <h3>{n.title}</h3>
                    <span className="tech-news-link">{t('common.readMore')} &#8594;</span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="tech-contact">
        <div className="container">
          <div className="tech-contact-wrap">
            <Reveal>
              <div className="tech-contact-info">
                <span className="eyebrow">Contact Us</span>
                <h2>Let JEMA TECH help you build the foundation for a <em>data-driven future.</em></h2>
                <p>We&apos;d love to hear from you. Reach out and our team will respond quickly!</p>
                <div className="tech-contact-location">
                  <span className="lbl">Location</span>
                  <p>Jema Tech Building. Industrial Area. Mwanza. Tanzania.</p>
                  <p>5th floor, TAN House, Victoria, Dar es Salaam.</p>
                </div>
                <div className="tech-contact-detail">
                  <span className="lbl">Mobile</span>
                  <a href="tel:+255677091421">Office Phone Number +255 677 091 421</a>
                  <a href="mailto:info@jematech.co.tz">Office Email Address info@jematech.co.tz</a>
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

      {/* OFFICES */}
      <section className="tech-offices">
        <div className="container">
          <div className="tech-offices-grid">
            {OFFICES.map((o, i) => (
              <Reveal key={o.title} delay={i as 1 | 2 | 3 | 4}>
                <article className="tech-office-card">
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