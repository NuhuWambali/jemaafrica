'use client';

import { useCallback, useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Grain from '@/components/Grain';
import CookieBanner from '@/components/CookieBanner';
import Reveal from '@/components/Reveal';
import './jit.css';

const PILLARS = [
  { num: '1', title: 'Our Vision', text: 'Our vision is to become a technology-driven institution dedicated to transforming various industrial levels for sustainable national economic development.' },
  { num: '2', title: 'Our Mission', text: 'At JIT, our mission is to improve lives by integrating technology into daily activities, enhancing digital knowledge, and fostering creativity and innovation for a better future.' },
  { num: '3', title: 'Our Core Values', text: 'To be an institution that serves with Integrity, Honesty, Respect, Freedom, Inter-dependence, Professionalism (expertise) and Ethical in Competency Based Education and Training.' },
];

const PROGRAMS = [
  'Mineral Processing and Extractive Metallurgy',
  'Information and Communication Technology (ICT)',
  'Automotive Engineering',
  'Electrical and Renewable Energy Engineering',
];

const HIGHLIGHTS = [
  { title: 'State-of-the-Art Facilities', text: 'Our campus, spanning 2,379 square meters, is equipped with modern facilities including offices, classrooms, laboratories, a library, conference rooms, seminar rooms, and a server room. Additionally, we operate a gold processing elution plant, providing students with hands-on industrial experience.' },
  { title: 'Enrollment Trends', text: 'Since our inception, JIT has seen a significant increase in enrollment. The number of students enrolled in long courses has grown from 61 in 2019 to 986 in 2022, while short course enrollments have also shown a steady increase.' },
  { title: 'Student Activities and Engagement', text: 'JIT promotes a vibrant student life through various activities such as laboratory work, site visits, and participation in exhibitions. Notably, our students have engaged in study tours at mining sites and ICT fieldwork, enriching their practical learning experience.' },
  { title: 'Recognition and Achievements', text: 'JIT\u2019s commitment to excellence has been recognized through various accolades. In 2023, we received the first prize at the NACTVET exhibitions, underscoring our dedication to providing top-tier technical education.' },
  { title: 'Expansion Plans', text: 'To accommodate our growing student population and expanding course offerings, JIT has acquired a 62,000 square meter plot at Nyashishi, significantly larger than our current campus. This new site will enable us to enhance our facilities and provide a more flexible learning environment.' },
  { title: 'Strategic Location and Community Impact', text: 'Located in a region rich with mining activities, JIT plays a crucial role in the local community by offering specialized training that supports the mining industry. Our strategic location ensures that our graduates are well-prepared to contribute effectively to the industry and the broader economy.' },
];

const VALUES = [
  'Trusted by students, faculty, and industry professionals who rely on our quality and dedication.',
  'Demonstrating our commitment to excellence, we\u2019ve completed numerous projects in research, innovation, and student initiatives.',
  'Partnered with leading organizations and financial institutions to provide real-world experience and opportunities to our students.',
];

const TEAM = [
  { name: 'Mr. Benezeth Kamihanda', role: 'Principal - JIT', img: '/assets/jit/team-kamihanda.png' },
  { name: 'Mr. Japhet Ngoro', role: 'College Manager', img: '/assets/jit/team-ngoro.png' },
  { name: 'Mr. Nibusam Damas Kashind', role: 'College Administrator', img: '/assets/jit/team-kashind.png' },
];

const NEWS = [
  {
    day: '01', month: 'Apr', date: 'April 1, 2026', category: 'Jema Africa',
    title: 'JEMA Africa Limited Celebrates 14 Years',
    href: 'https://jemaafrica.co.tz/jema-africa-limited-celebrates-14-years-of-growth-innovation-and-impact/',
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=500&q=85',
  },
  {
    day: '08', month: 'Dec', date: 'December 8, 2025', category: 'Jema Auto',
    title: 'Kwa Nini Watanzania Wanapaswa Kuchagua JEMA',
    href: 'https://jemaafrica.co.tz/kwa-nini-watanzania-wanapaswa-kuchagua-jema-auto-katika-uagizaji-wa-magari-kutoka-japan/',
    img: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=500&q=85',
  },
  {
    day: '08', month: 'Dec', date: 'December 8, 2025', category: 'Jema Africa',
    title: 'JEMA Africa Ltd Leads the Stage',
    href: 'https://jemaafrica.co.tz/jema-africa-ltd-leads-the-stage-as-gold-sponsor-at-the-2025-mining-show-exhibition-in-dubai/',
    img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=500&q=85',
  },
];

const OFFICES = [
  { title: 'Mining Division HQ', address: 'Jema Tech Building. Industrial Area. Mwanza. Tanzania.', phone: '+255 28 255 0380' },
  { title: 'Non-Mining Division HQ', address: '5th floor, TAN House, Victoria, Dar es Salaam.', phone: '+255 677 091 421' },
  { title: 'JIT Main Campus', address: 'Jema Tech Building. Industrial Area. Mwanza. Tanzania.', phone: '+255 76 628 3530' },
];

export default function JitPage() {
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
      <section className="jit-hero">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Welcome</span>
          </Reveal>
          <Reveal delay={1}>
            <h1>JEMA Institute of <em>Technology (JIT)</em></h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="lead">Jema Institute of Technology, known as JIT, is a distinguished technical college registered by the National Council for Technical and Vocational Education and Training (NACTVET) in Tanzania. Established in 2019, JIT is strategically located at the JEMA Tech Building within the JEMA Africa headquarters in Mkuyuni, Mwanza.</p>
          </Reveal>
          <Reveal delay={3}>
            <div className="jit-hero-actions">
              <a href="https://jit.ac.tz/" target="_blank" rel="noreferrer" className="btn-primary">More Information</a>
              <a href="https://www.youtube.com/watch?v=h1_T1SIY-as" target="_blank" rel="noreferrer" className="btn-text">Watch The Video</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PILLARS */}
      <section className="jit-pillars">
        <div className="container">
          <div className="jit-pillars-grid">
            {PILLARS.map((p, i) => (
              <Reveal key={p.num} delay={i as 1 | 2 | 3 | 4}>
                <article className="jit-pillar-card">
                  <span className="jit-pillar-num">{p.num}</span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="jit-about">
        <div className="container">
          <div className="jit-about-layout">
            <Reveal>
              <div className="jit-about-text">
                <span className="eyebrow">About Us</span>
                <h2>Located at the JEMA Tech Building, within the JEMA Africa headquarters, <em>Mkuyuni, Mwanza, Tanzania.</em></h2>
                <p>At Jema Institute of Technology, we offer a variety of accredited programs designed to prepare students for the technological challenges of tomorrow.</p>
                <ul className="jit-programs">
                  {PROGRAMS.map((pr) => (
                    <li key={pr}>{pr}</li>
                  ))}
                </ul>
                <p>These programs are designed to cater to different levels of interest and expertise in technology, providing students with the necessary tools to thrive in the industry.</p>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="jit-about-figure">
                <img src="/assets/jit/campus.png" alt="JIT Campus" loading="lazy" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="jit-highlights">
        <div className="container">
          <Reveal>
            <div className="jit-highlights-head">
              <span className="eyebrow">Welcome to Jema Institute of Technology (JIT)</span>
              <h2>Where <em>Innovation</em> Meets Education.</h2>
              <p>All our courses are recognized and accredited by the National Council for Technical and Vocational Education and Training (NACTVET).</p>
            </div>
          </Reveal>
          <div className="jit-highlights-grid">
            {HIGHLIGHTS.map((h, i) => (
              <Reveal key={h.title} delay={(i % 3) as 1 | 2 | 3 | 4}>
                <article className="jit-highlight-card">
                  <h3>{h.title}</h3>
                  <p>{h.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="jit-cta">
        <div className="container">
          <div className="jit-cta-in">
            <Reveal>
              <h2>If you have any questions, <em>feel free to reach out to us.</em></h2>
            </Reveal>
            <Reveal delay={1}>
              <div className="jit-cta-contact">
                <span className="lbl">Hotline</span>
                <a href="tel:+255766283530">(+255) 76 628 3530</a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* VALUE */}
      <section className="jit-value">
        <div className="container">
          <div className="jit-value-layout">
            <Reveal>
              <div className="jit-value-figure">
                <img src="/assets/jit/feature.png" alt="Jema Institute of Technology" loading="lazy" />
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="jit-value-text">
                <span className="eyebrow">Jema Institute of Technology?</span>
                <h2>A catalyst for technological advancement and <em>economic growth</em> in Tanzania.</h2>
                <p>JIT is more than just an educational institution; it is a catalyst for technological advancement and economic growth in Tanzania. We are dedicated to producing highly skilled professionals who are ready to tackle the challenges of the modern world.</p>
                <ul className="jit-value-list">
                  {VALUES.map((v) => (
                    <li key={v}>{v}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="jit-team">
        <div className="container">
          <Reveal>
            <div className="jit-team-head">
              <span className="eyebrow">Team</span>
              <h2>Meet Our <em>Dedicated Team</em></h2>
            </div>
          </Reveal>
          <div className="jit-team-grid">
            {TEAM.map((member, i) => (
              <Reveal key={member.name} delay={i as 1 | 2 | 3 | 4}>
                <article className="jit-team-card">
                  <div className="jit-team-image">
                    <img src={member.img} alt={member.name} loading="lazy" />
                  </div>
                  <div className="jit-team-details">
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="jit-contact">
        <div className="container">
          <div className="jit-contact-wrap">
            <Reveal>
              <div className="jit-contact-info">
                <span className="eyebrow">Contact Us</span>
                <h2>Feel Free to <em>Contact us.</em></h2>
                <p>We are connected to help your education! We&apos;d love to hear from you! If you have any questions, feel free to reach out to us.</p>
                <div className="jit-contact-detail">
                  <span className="lbl">Location</span>
                   <p>Jema Tech Building. Industrial Area. Mwanza. Tanzania.</p>
                </div>
                <div className="jit-contact-detail">
                  <span className="lbl">Call Us</span>
                  <a href="tel:+255766283530">(+255) 76 628 3530</a>
                </div>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <form onSubmit={handleFormSubmit}>
                <div className="jit-form-row">
                  <div className="field">
                    <label htmlFor="fname">First Name</label>
                    <input id="fname" type="text" required />
                  </div>
                  <div className="field">
                    <label htmlFor="lname">Last Name</label>
                    <input id="lname" type="text" required />
                  </div>
                </div>
                <div className="jit-form-row">
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
                  <label htmlFor="comments">Comments</label>
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

      {/* NEWS */}
      <section className="jit-news">
        <div className="container">
          <Reveal>
            <div className="jit-news-head">
              <span className="eyebrow">What&apos;s News &amp; Blog</span>
              <h2>Latest from <em>Jema Africa</em></h2>
            </div>
          </Reveal>
          <div className="jit-news-grid">
            {NEWS.map((n, i) => (
              <Reveal key={n.title} delay={i as 1 | 2 | 3 | 4}>
                <a className="jit-news-entry" href={n.href} target="_blank" rel="noreferrer">
                  <div className="jit-news-image">
                    <img src={n.img} alt={n.title} loading="lazy" />
                    <time className="jit-news-date" dateTime="2026-04-01">
                      <strong>{n.day}</strong><span>{n.month}</span>
                    </time>
                  </div>
                  <div className="jit-news-body">
                    <span className="jit-news-meta">{n.date} · {n.category}</span>
                    <h3>{n.title}</h3>
                    <span className="jit-news-link">READ MORE &#8594;</span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OFFICES */}
      <section className="jit-offices">
        <div className="container">
          <div className="jit-offices-grid">
            {OFFICES.map((o, i) => (
              <Reveal key={o.title} delay={i as 1 | 2 | 3 | 4}>
                <article className="jit-office-card">
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