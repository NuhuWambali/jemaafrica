'use client';

import { useCallback, useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Grain from '@/components/Grain';
import CookieBanner from '@/components/CookieBanner';
import Reveal from '@/components/Reveal';
import './jetcargo.css';

const SERVICES = [
  { title: 'Seamless Booking Process', text: 'Our platform and mobile app make booking shipments quick and easy. Whether you are a business or an individual, you can book your shipment in just a few clicks.' },
  { title: 'Door-to-Door Service', text: 'JETCargo offers comprehensive door-to-door service, picking up packages from your location and delivering them directly to their destination, whether locally or across the country.' },
  { title: 'Real-Time Tracking', text: "Our real-time tracking system allows you to monitor your shipment's progress every step of the way, ensuring you are always informed." },
  { title: 'Flexible Delivery Options', text: 'We understand that each shipment is unique. JETCargo offers a range of delivery options, from express delivery to cost-effective solutions, to meet your specific needs.' },
  { title: 'Dedicated Customer Support', text: 'Our customer support team is available to assist you with any questions or issues, ensuring a smooth and hassle-free shipping experience.' },
];

const WHY_CHOOSE = [
  { title: 'Innovation-Driven Logistics', text: "At JETCargo, we're committed to using the latest technology to optimize the shipping process. Our app and platform are designed to make logistics simpler and more efficient for everyone." },
  { title: 'Affordable & Reliable Services', text: "We understand that affordability and reliability are key. That's why we offer flexible shipping options to fit your budget without compromising on speed or safety." },
  { title: 'Customer-Centric Approach', text: "Your satisfaction is our top priority. From booking to delivery, our customer support team is always ready to help you resolve any issue. We're here to make sure your experience is seamless and hassle-free." },
];

const KEY_SERVICES = [
  { title: 'Cargo Owners - Individuals', text: 'Convenient services for personal shipments.' },
  { title: 'Cargo Owners - Retailers', text: 'Tailored logistics for e-commerce businesses.' },
  { title: 'Cargo Owners - Corporate Clients', text: 'Seamless order placement and management through our web app.' },
  { title: 'Transport Partners - Fleet Owners', text: 'Specialized app to streamline operations.' },
  { title: 'Transport Partners - Drivers', text: 'Driver app for efficient cargo management.' },
  { title: 'Transport Partners - Airlines & Bus Companies', text: 'Centralized web application for cargo monitoring.' },
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

export default function JetCargoPage() {
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
      <section className="jc-hero">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Welcome</span>
          </Reveal>
          <Reveal delay={1}>
            <h1>Welcome to JETCargo, <em>where we redefine the future of logistics in Africa.</em></h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="lead">Our mission is to provide a seamless, reliable, and efficient cargo transportation solution tailored to meet the diverse needs of our clients. With a focus on innovation and excellence, JETCargo is transforming the logistics landscape through cutting-edge technology and dedicated customer service.</p>
          </Reveal>
          <Reveal delay={3}>
            <a href="https://jemaafrica.co.tz/contact-us/" target="_blank" rel="noreferrer" className="btn-primary">Contact Us</a>
          </Reveal>
        </div>
        <img className="jc-hero-deco jc-hero-deco-46" src="/assets/cargo/element-46.png" alt="" aria-hidden="true" />
        <img className="jc-hero-deco jc-hero-deco-47" src="/assets/cargo/element-47.png" alt="" aria-hidden="true" />
        <img className="jc-hero-deco jc-hero-deco-48" src="/assets/cargo/element-48.png" alt="" aria-hidden="true" />
      </section>

      {/* SERVICES */}
      <section className="jc-services">
        <div className="container">
          <Reveal>
            <div className="jc-services-head">
              <span className="eyebrow">Our Services</span>
              <h2><span className="jc-services-highlight">What JETCargo</span> <em>Offers.</em></h2>
              <p>JETCargo is your reliable, user-friendly platform for booking cargo shipments quickly and easily. Whether you&apos;re a business or an individual, our platform and mobile app make it effortless to manage your logistics. We offer a wide range of delivery options designed to meet your specific shipping needs, with a focus on efficiency, innovation, and customer satisfaction.</p>
            </div>
          </Reveal>
          <div className="jc-services-layout">
            <div className="jc-services-list">
              {SERVICES.map((s, i) => (
                <Reveal key={s.title} delay={(i % 3) as 1 | 2 | 3 | 4}>
                  <article className="jc-service-card">
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
            <div className="jc-services-side">
              <Reveal delay={1}>
                <div className="jc-services-image">
                  <img src="/assets/cargo/cargo-road.png" alt="JETCargo Services" loading="lazy" />
                </div>
              </Reveal>
              <Reveal delay={2}>
                <div className="jc-stat-block">
                  <span className="jc-stat-num">87%</span>
                  <span className="jc-stat-label">Successful</span>
                </div>
              </Reveal>
              <Reveal delay={3}>
                <div className="jc-services-image">
                  <img src="/assets/cargo/cargo-road1.png" alt="JETCargo Services" loading="lazy" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="jc-why">
        <div className="container">
          <div className="jc-why-layout">
            <Reveal>
              <div className="jc-why-text">
                <span className="eyebrow">Why Choose JETCargo</span>
                <h2>Why JETCargo is the Best Choice for <em>Your Shipping Needs.</em></h2>
                <p>JETCargo offers various pricing options to suit different needs, whether you are shipping a small parcel or a large volume of goods.</p>
                <div className="jc-why-cards">
                  {WHY_CHOOSE.map((w, i) => (
                    <Reveal key={w.title} delay={i as 1 | 2 | 3 | 4}>
                      <article className="jc-why-card">
                        <h3>{w.title}</h3>
                        <p>{w.text}</p>
                      </article>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="jc-why-figure">
                <img src="/assets/cargo/cargo-1.png" alt="JETCargo Logistics" loading="lazy" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="jc-cta">
        <div className="container">
          <div className="jc-cta-in">
            <Reveal>
              <h2>Need it fast? Get your shipment delivered <em>within 24-48 hours.</em></h2>
            </Reveal>
            <Reveal delay={1}>
              <div className="jc-cta-info">
                <span className="lbl">Pricing varies based on shipment volume.</span>
                <div className="jc-cta-advisor">
                  <span className="lbl">Expert Advisor</span>
                  <a href="tel:+255282550380">+255 28 255 0380</a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* KEY SERVICES */}
      <section className="jc-key">
        <div className="container">
          <div className="jc-key-layout">
            <Reveal>
              <div className="jc-key-intro">
                <span className="eyebrow">Key Services</span>
                <h2>We understand the <span className="jc-key-highlight">unique demands of</span> <em>retail businesses.</em></h2>
                <p>JETCargo is committed to redefining logistics for retailers, providing them with the tools and support they need to thrive in a competitive market. Together, we drive success by ensuring goods move smoothly, efficiently, and reliably from suppliers to shelves.</p>
              </div>
            </Reveal>
            <div className="jc-key-grid">
              {KEY_SERVICES.map((k, i) => (
                <Reveal key={k.title} delay={(i % 4 + 1) as 1 | 2 | 3 | 4}>
                  <article className="jc-key-card">
                    <h3>{k.title}</h3>
                    <p>{k.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal>
            <div className="jc-key-visual">
              <img src="/assets/cargo/cargo-fff.png" alt="JETCargo Services" loading="lazy" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* NEWS */}
      <section className="jc-news">
        <div className="container">
          <Reveal>
            <div className="jc-news-head">
              <span className="eyebrow">Blog &amp; News</span>
              <h2><span className="jc-news-highlight">Our Latest</span> <em>News</em></h2>
              <p>Get the latest updates, success stories, and innovations from Jema Africa. Our team is constantly driving growth and making an impact across multiple industries.</p>
            </div>
          </Reveal>
          <div className="jc-news-grid">
            {NEWS.map((n, i) => (
              <Reveal key={n.title} delay={i as 1 | 2 | 3 | 4}>
                <a className="jc-news-entry" href={n.href} target="_blank" rel="noreferrer">
                  <div className="jc-news-image">
                    <img src={n.img} alt={n.title} loading="lazy" />
                    <time className="jc-news-date" dateTime="2026-04-01">
                      <strong>{n.day}</strong><span>{n.month}</span>
                    </time>
                  </div>
                  <div className="jc-news-body">
                    <span className="jc-news-meta">{n.date} · {n.category}</span>
                    <h3>{n.title}</h3>
                    <span className="jc-news-link">READ MORE &#8594;</span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="jc-contact">
        <div className="container">
          <div className="jc-contact-wrap">
            <Reveal>
              <div className="jc-contact-info">
                <span className="eyebrow">Contact Us</span>
                <h2>Get your shipment delivered <em>within 24-48 hours.</em></h2>
                <p>We&apos;re here to make sure your experience is seamless and hassle-free.</p>
                <div className="jc-contact-detail">
                  <span className="lbl">Mobile</span>
                  <p>Office Phone Number +255 28 255 0380 &amp; +255 677 091 421</p>
                </div>
                <div className="jc-contact-detail">
                  <span className="lbl">Location</span>
                  <p>Jema Tech Building. Industrial Area. Mwanza. Tanzania.</p>
                  <p>5th floor, TAN House, Victoria, Dar es Salaam.</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <form onSubmit={handleFormSubmit}>
                <div className="jc-form-row">
                  <div className="field">
                    <label htmlFor="fname">First Name</label>
                    <input id="fname" type="text" required />
                  </div>
                  <div className="field">
                    <label htmlFor="lname">Last Name</label>
                    <input id="lname" type="text" required />
                  </div>
                </div>
                <div className="jc-form-row">
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

      {/* OFFICES */}
      <section className="jc-offices">
        <div className="container">
          <div className="jc-offices-grid">
            {OFFICES.map((o, i) => (
              <Reveal key={o.title} delay={i as 1 | 2 | 3 | 4}>
                <article className="jc-office-card">
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