'use client';

import { useTranslation } from 'react-i18next';

import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Grain from '@/components/Grain';
import CookieBanner from '@/components/CookieBanner';
import Reveal from '@/components/Reveal';
import './auto.css';

const SERVICES = [
  { group: 'Vehicle Importation', title: 'Global Sourcing', text: 'We import a diverse range of used vehicles, ensuring a wide selection for our clients. By sourcing from established markets, we guarantee the quality and reliability of our vehicles.', img: '/assets/auto/sourcing.png' },
  { group: 'Vehicle Importation', title: 'Extensive Inventory', text: 'From our platform to the strategic car yards in Dar es Salaam, we host hundreds of thousands of vehicles, offering an array of options to meet the varied needs and preferences of our customers.', img: '/assets/auto/inventory.png' },
  { group: 'Jema Auto Platform', title: 'Access to Auctions', text: 'Our newly launched Jema Auto Platform revolutionizes the car buying experience by providing access to over 200 Japanese car auctions. Browse hundreds of thousands of vehicles from the comfort of your phone or laptop.', img: '/assets/auto/platform.png' },
  { group: 'Jema Auto Platform', title: 'Wide Selection', text: 'Clients can choose from a vast range of cars, catering to different tastes, requirements, and budgets. Whether looking for economy models, luxury cars, or specialized vehicles, our platform offers something for everyone.', img: '/assets/auto/hero.png' },
  { group: 'Jema Auto Platform', title: 'Transparent Pricing', text: 'We pride ourselves on transparency. Our platform ensures that there are no hidden fees, providing a straightforward and honest car buying process.', img: '/assets/auto/sourcing.png' },
  { group: 'Jema Auto Platform', title: 'Convenient Access', text: 'Available 24/7, the Jema Auto Platform allows clients to explore and purchase vehicles at their convenience, making the process seamless and hassle-free.', img: '/assets/auto/inventory.png' },
];

const REASONS = [
  { title: 'Quality Assurance', text: 'Each vehicle we import undergoes a thorough inspection to ensure it meets our high standards for safety and performance.' },
  { title: 'Customer-Centric Approach', text: 'Our commitment to customer satisfaction drives us to offer the best possible service. From the moment you browse our inventory to the delivery of your vehicle, we strive to exceed expectations.' },
  { title: 'Competitive Pricing', text: 'By leveraging our global network and efficient operations, we offer competitive prices without compromising on quality.' },
  { title: 'Expert Support', text: 'Our knowledgeable team is always ready to assist with any inquiries, providing expert advice and support throughout the purchasing process.' },
];

const STEPS = [
  { num: '1', title: 'Browse Our Website', text: 'Explore our diverse range of vehicles online, with detailed descriptions and high-quality images for each car.' },
  { num: '2', title: 'Inquire About a Vehicle', text: 'Found something you like? Reach out to us for more information, photos, or a test drive.' },
  { num: '3', title: 'Secure Financing', text: 'We offer flexible financing options to help you purchase your dream car. Our team will guide you through the process to find the best payment plan.' },
  { num: '4', title: 'Receive Your Vehicle', text: 'Once you\u2019ve made your purchase, we arrange delivery to your location. We ensure a smooth and safe delivery experience across Tanzania and the wider East and Central African regions.' },
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
  { title: 'Mining Division HQ', address: 'Jema Tech Building. Industrial Area. Mwanza. Tanzania.', phone: '+255 28 255 0380' },
  { title: 'Non-Mining Division HQ', address: '5th floor, TAN House, Victoria, Dar es Salaam.', phone: '+255 677 091 421' },
  { title: 'JIT Main Campus', address: 'Jema Tech Building. Industrial Area. Mwanza. Tanzania.', phone: '+255 76 628 3530' },
];

export default function AutoPage() {
  const { t } = useTranslation();
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

  return (
    <>
      <Grain />
      <Navbar />

      {/* HERO */}
      <section className="auto-hero">
        <div className="auto-hero-bg" aria-hidden="true" />
        <div className="container">
          <Reveal>
            <span className="eyebrow">Jema Auto</span>
          </Reveal>
          <Reveal delay={1}>
            <h1>Drive Quality, <em>Affordably.</em></h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="auto-hero-desc">A premier importer of high-quality used vehicles from Japan, Germany, the USA, Dubai, and other trusted markets. Serving Tanzania and the wider East and Central African regions with reliability, transparency, and customer satisfaction at the forefront.</p>
          </Reveal>
          <Reveal delay={3}>
            <div className="auto-hero-actions">
              <a href="https://jemaauto.com/" target="_blank" rel="noreferrer" className="btn-primary">More Information</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WELCOME */}
      <section className="auto-welcome">
        <div className="container">
          <div className="auto-welcome-layout">
            <Reveal>
              <div className="auto-welcome-figure">
                <img src="/assets/auto/auto-31.png" alt="Jema Auto" loading="lazy" />
                <span className="auto-welcome-badge">Since 2012</span>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="auto-welcome-text">
                <span className="eyebrow">Welcome To Jema Auto</span>
                <h2>Drive Your <em>Dream Car</em> Today with Jema Auto.</h2>
                <p>Jema Auto is a premier importer of high-quality used vehicles from around the globe, serving Tanzania and the wider East and Central African regions. With a focus on reliability and customer satisfaction, we source vehicles from trusted markets including Japan, Germany, the USA, Dubai, and many other parts of the world.</p>
                <p>Our extensive inventory and innovative solutions set us apart in the automotive industry.</p>
                <p>Experience the ease and reliability of purchasing a used vehicle with Jema Auto, where quality, transparency, and customer satisfaction are at the forefront of everything we do.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="auto-services">
        <div className="container">
          <Reveal>
            <div className="auto-services-head">
              <span className="eyebrow">Our Services</span>
              <h2>What Services we Provide for <em>Our Customers</em></h2>
              <p>Whether you&apos;re looking for a family car, a luxury vehicle, or a reliable work truck, Jema Auto is your one-stop destination for quality used cars in Tanzania and the broader East and Central African regions.</p>
            </div>
          </Reveal>
          <div className="auto-services-grid">
            {SERVICES.map((s, i) => (
              <Reveal key={`${s.group}-${s.title}`} delay={(i % 3) as 1 | 2 | 3 | 4}>
                <article className="auto-service-card">
                  <div className="auto-service-image">
                    <img src={s.img} alt={s.title} loading="lazy" />
                  </div>
                  <span className="auto-service-group">{s.group}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="auto-cta">
        <div className="container">
          <div className="auto-cta-in">
            <Reveal>
              <h2>Your Trusted Source for Quality Used Vehicles in <em>East &amp; Central Africa.</em></h2>
            </Reveal>
            <Reveal delay={1}>
              <a href="https://jemaauto.com/" target="_blank" rel="noreferrer" className="btn-primary">Discover More</a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="auto-why">
        <div className="container">
          <Reveal>
            <div className="auto-why-head">
              <span className="eyebrow">Why Choose Jema Auto</span>
              <h2>At Jema Auto, we stand out in the automotive market for <em>several reasons.</em></h2>
            </div>
          </Reveal>
          <div className="auto-why-grid">
            {REASONS.map((r, i) => (
              <Reveal key={r.title} delay={(i % 4) as 1 | 2 | 3 | 4}>
                <article className="auto-why-card">
                  <span className="auto-why-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4L4.2 7.7l5.4-.8L12 2z" />
                    </svg>
                  </span>
                  <h3>{r.title}</h3>
                  <p>{r.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="auto-why-foot">
              <p>To explore our extensive vehicle inventory, please visit our website or contact us directly:</p>
              <a href="https://jemaauto.com/" target="_blank" rel="noreferrer" className="auto-why-link">Visit our website</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="auto-process">
        <div className="container">
          <Reveal>
            <div className="auto-process-head">
              <span className="eyebrow">How It Works</span>
              <h2>We Follow Some Steps To Buy a Vehicle from <em>Jema Auto</em></h2>
            </div>
          </Reveal>
          <div className="auto-process-grid">
            {STEPS.map((s, i) => (
              <Reveal key={s.num} delay={(i % 4) as 1 | 2 | 3 | 4}>
                <article className="auto-process-card">
                  <span className="auto-process-num">{s.num}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="auto-support">
              <div>
                <span className="eyebrow">After-Sales Support</span>
                <h3>We&apos;re committed to your satisfaction even after the sale. From servicing to repairs, Jema Auto is here for you.</h3>
              </div>
              <div className="auto-support-contact">
                <span className="lbl">Expert Advisor</span>
                <a href="tel:+255282550380">+255 28 255 0380</a>
                  <a href="tel:+255677091421">+255 677 091 421</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* NEWS */}
      <section className="auto-news">
        <div className="container">
          <Reveal>
            <div className="auto-news-head">
              <span className="eyebrow">What&apos;s News &amp; Blog</span>
              <h2>We&apos;re Here to Provide Latest &amp; <em>Important News</em></h2>
            </div>
          </Reveal>
          <div className="auto-news-grid">
            {NEWS.map((n, i) => (
              <Reveal key={n.title} delay={i as 1 | 2 | 3 | 4}>
                <a className="auto-news-entry" href={n.href} target="_blank" rel="noreferrer">
                  <div className="auto-news-image">
                    <img src={n.img} alt={n.title} loading="lazy" />
                    <time className="auto-news-date" dateTime="2026-04-01">
                      <strong>{n.day}</strong><span>{n.month}</span>
                    </time>
                  </div>
                  <div className="auto-news-body">
                    <span className="auto-news-meta">by {n.author} · {n.category}</span>
                    <h3>{n.title}</h3>
                    <span className="auto-news-link">READ MORE &#8594;</span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OFFICES */}
      <section className="auto-offices">
        <div className="container">
          <div className="auto-offices-grid">
            {OFFICES.map((o, i) => (
              <Reveal key={o.title} delay={i as 1 | 2 | 3 | 4}>
                <article className="auto-office-card">
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