'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Grain from '@/components/Grain';
import CookieBanner from '@/components/CookieBanner';
import Reveal from '@/components/Reveal';
import './chemicals.css';

const PILLARS = [
  { num: '01', title: 'Strategic Partnerships', text: 'Our strategic partnerships with global and local organizations underscore our commitment to innovation and excellence. These collaborations enable us to leverage advanced technologies and best practices, enhancing our product offerings and service delivery.' },
  { num: '02', title: 'Sustainability & Compliance', text: 'Sustainability is a core principle at Jema Chemicals. We are dedicated to adhering to stringent environmental regulations and promoting responsible chemical usage. Our operations comply with both local and international standards, ensuring we contribute positively to environmental stewardship and social responsibility.' },
  { num: '03', title: 'Strategic Locations', text: 'To ensure timely delivery and exceptional customer service, Jema Chemicals operates offices strategically located near all major mining towns in Tanzania including Mwanza, Geita, Kahama, Musoma, Chunya and Mpanda. This proximity to our clients allows us to meet their needs promptly and efficiently, reducing downtime and enhancing operational productivity.' },
];

const FEATURES = [
  { title: 'Gold Processing Chemicals', text: 'High-quality mineral processing chemicals designed to maximize efficiency and boost productivity in every mining operation.' },
  { title: 'Best Competitive Prices', text: 'Investment-friendly pricing that delivers value without compromising on quality.' },
  { title: 'Extensive Branch Network', text: 'Branches in every major mining town ensuring prompt, reliable access to what you need.' },
  { title: 'Comprehensive Support', text: 'Technical consultations, usage guidance, and ongoing support to optimize your processes.' },
];

const PRODUCTS = [
  { name: 'Sodium Cyanide', desc: 'Used in gold extraction processes', img: '/assets/chemicals/sodium-cyanide.png', num: '01' },
  { name: 'Caustic Soda', desc: 'For use in gold recovery operations', img: '/assets/chemicals/caustic-soda-a.png', num: '02' },
  { name: 'Flocculants', desc: 'Used in water treatment and mineral processing', img: '/assets/chemicals/flocculants.png', num: '03' },
  { name: 'Hydrogen Peroxide', desc: 'Essential for ore treatment and pH control', img: '/assets/chemicals/hydrogen-peroxide.png', num: '04' },
  { name: 'Sodium Metabisulfite', desc: 'Used in detoxifying cyanide solutions', img: '/assets/chemicals/sodium-metabisulfite.png', num: '05' },
  { name: 'Caustic Soda (pH)', desc: 'For pH regulation in mining processes', img: '/assets/chemicals/caustic-soda.png', num: '06' },
];

const FAQS = [
  {
    q: 'What makes Jema Chemicals different from other suppliers',
    a: 'We combine high-quality products with personalized customer support and a wide distribution network. Our local presence in major mining towns ensures quick access to the chemicals you need, backed by a dedicated team ready to support your operations.',
  },
  {
    q: 'How do you ensure the quality of your mining chemicals',
    a: 'Quality is our top priority. We source our chemicals from trusted manufacturers, rigorously test them to meet industry standards, and provide ongoing technical support to ensure they perform effectively in your applications.',
  },
  {
    q: 'Can Jema Chemicals support large-scale mining operations?',
    a: 'Absolutely! With our extensive inventory, strategic branch locations, and logistics expertise, we are equipped to handle the needs of both small and large-scale mining operations, ensuring timely delivery and consistent supply.',
  },
  {
    q: 'What other services do you offer beyond supplying chemicals?',
    a: 'In addition to delivering top-tier products, we provide technical consultations, usage guidance, and ongoing support to optimize the use of our chemicals in your mining process. Your success is our priority.',
  },
];

const TEAM = [
  { name: 'Samweli Makindi', role: 'Mwanza Branch Lead', img: '/assets/chemicals/team-makindi.png' },
  { name: 'Mr. Felix Mokili', role: 'Operations Lead', img: '/assets/chemicals/team-felix-mokili.png' },
  { name: 'Mr. Juma Luchele', role: 'COO - Mining Division', img: '/assets/chemicals/team-luchele.png' },
  { name: 'Mr. Naim Karama', role: 'Marketing - Mining Division', img: '/assets/chemicals/team-naim-karama.png' },
  { name: 'Mr. Mokili Daniel Sese', role: 'Geita Branch Lead', img: '/assets/chemicals/team-mokili-sese.png' },
  { name: 'Mr. Macdonald Julius Masambe', role: 'Mpanda Projects Lead', img: '/assets/chemicals/team-macdonald.png' },
  { name: 'Mr. Benjamin Daniel', role: 'Chunya Branch Lead', img: '/assets/chemicals/team-benjamin.png' },
  { name: 'Mr. Baraka Lusake', role: 'Musoma Branch Lead', img: '/assets/chemicals/team-baraka.png' },
];

const BRANCHES = [
  { city: 'Mwanza Branch', address: 'Jema Tech Building. Industrial Area. Mwanza. Tanzania.', phone: '+255 677 066 855' },
  { city: 'Kahama Branch', address: 'Kahama, Tanzania.', phone: '+255 767 060 719' },
  { city: 'Geita Branch', address: 'Geita, Tanzania.', phone: '+255 745 694 989' },
  { city: 'Chunya Branch', address: 'Chunya, Tanzania.', phone: '+255 627 067 369' },
  { city: 'Saza Branch', address: 'Saza, Tanzania.', phone: '+255 629 260 739' },
];

const NEWS = [
  {
    day: '01', month: 'Apr', category: 'Jema Africa', date: 'April 1, 2026',
    title: 'JEMA Africa Limited Celebrates 14 Years of Growth, Innovation, and Impact.',
    href: 'https://jemaafrica.co.tz/jema-africa-limited-celebrates-14-years-of-growth-innovation-and-impact/',
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=500&q=85',
  },
  {
    day: '08', month: 'Dec', category: 'Jema Auto', date: 'December 8, 2025',
    title: 'Kwa Nini Watanzania Wanapaswa Kuchagua JEMA AUTO Katika Uagizaji wa Magari Kutoka Japan',
    href: 'https://jemaafrica.co.tz/kwa-nini-watanzania-wanapaswa-kuchagua-jema-auto-katika-uagizaji-wa-magari-kutoka-japan/',
    img: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=500&q=85',
  },
  {
    day: '08', month: 'Dec', category: 'Jema Africa', date: 'December 8, 2025',
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

export default function ChemicalsPage() {
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

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
      <section className="chm-hero">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Jema Chemicals</span>
          </Reveal>
          <Reveal delay={1}>
            <h1>Empowering Your <em>Mining Potential</em></h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="lead">At Jema Chemicals, we provide world-class mineral processing solutions designed to maximize your mining output. Partner with us for high-quality products, expert support, and a commitment to your success.</p>
          </Reveal>
          <Reveal delay={3}>
            <div className="chm-hero-actions">
              <a href="#products" className="btn-primary">Explore Our Product</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PARTNER */}
      <section className="chm-partner">
        <div className="container">
          <div className="chm-partner-layout">
            <Reveal>
              <div className="chm-partner-text">
                <span className="eyebrow">Partner with Us</span>
                <h2>Partner with Us for <em>Mining Excellence.</em></h2>
                <p>Experience the difference of high-quality mining chemical solutions sourced for your success. Unlock the full potential of your operations with tools that deliver results and drive success.</p>
                <a href="#products" className="btn-primary">Explore Our Products</a>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="chm-partner-figure">
                <img src="/assets/chemicals/chemical-staff.png" alt="Premium mining chemicals" loading="lazy" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="chm-pillars">
        <div className="container">
          <div className="chm-pillars-grid">
            {PILLARS.map((p, i) => (
              <Reveal key={p.num} delay={i as 1 | 2 | 3 | 4}>
                <article className="chm-pillar-card">
                  <span className="chm-pillar-num">{p.num}</span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="chm-band">
        <div className="container">
          <div className="chm-band-in">
            <Reveal>
              <h2>Get Quality Products Today!</h2>
            </Reveal>
            <Reveal delay={1}>
              <a className="chm-band-phone" href="tel:+255282550380">+255 28 255 0380</a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="chm-about">
        <div className="container">
          <div className="chm-about-layout">
            <Reveal>
              <div className="chm-about-text">
                <span className="eyebrow">What We Do</span>
                <h2>Empowering Mining Excellence with <em>Premium Chemicals</em></h2>
                <p>At Jema Chemicals, we are dedicated to helping mining businesses achieve exceptional results. Our range of high quality mineral processing chemicals is designed to maximize efficiency and boost productivity in every mining operation.</p>
                <p>Whether you need retail supplies for on-site production or wholesale quantities for large-scale operations, Jema Chemicals delivers the best mining chemicals tailored to your needs.</p>
              </div>
            </Reveal>
            <div className="chm-about-features">
              {FEATURES.map((f, i) => (
                <Reveal key={f.title} delay={i as 1 | 2 | 3 | 4}>
                  <article className="chm-about-feature">
                    <span className="chm-about-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4L4.2 7.7l5.4-.8L12 2z" />
                      </svg>
                    </span>
                    <h3>{f.title}</h3>
                    <p>{f.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="chm-products">
        <div className="container">
          <Reveal>
            <div className="chm-products-head">
              <span className="eyebrow">Products That Drive Mining Success</span>
              <h2>Explore Our Premium <em>Mining Chemicals</em></h2>
              <p>Whether you&apos;re seeking chemicals for mineral processing or elution, our products are designed to deliver the highest efficiency and quality. With a focus on performance and reliability, we offer a range of chemicals tailored to meet the unique needs of mining operations.</p>
            </div>
          </Reveal>
          <div className="chm-products-grid">
            {PRODUCTS.map((p, i) => (
              <Reveal key={p.name} delay={(i % 3) as 1 | 2 | 3 | 4}>
                <article className="chm-product-card">
                  <div className="chm-product-image">
                    <img src={p.img} alt={p.name} loading="lazy" />
                    <span className="chm-product-num">{p.num}</span>
                  </div>
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="chm-why">
        <div className="container">
          <div className="chm-why-layout">
            <Reveal>
              <div className="chm-why-text">
                <span className="eyebrow">Why Choose Us</span>
                <h2>We don&apos;t just sell chemicals, we build <em>lasting partnerships.</em></h2>
                <p>Our commitment to quality, a robust network of branches in major mining towns, and a team of industry experts ensure that you receive tailored solutions for your operations. Trust us to help you achieve your goals.</p>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="chm-faq">
                {FAQS.map((f, i) => (
                  <div className={`chm-faq-item${openFaq === i ? ' is-open' : ''}`} key={f.q}>
                    <button
                      className="chm-faq-q"
                      onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                      aria-expanded={openFaq === i}
                    >
                      <span>{f.q}</span>
                      <span className="chm-faq-icon" aria-hidden="true">+</span>
                    </button>
                    <div className="chm-faq-a">
                      <p>{f.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CONSULT FORM */}
      <section className="chm-consult">
        <div className="container">
          <div className="chm-consult-in">
            <Reveal>
              <div className="chm-consult-text">
                <span className="eyebrow">Get in Touch with Us</span>
                <h2>Have questions or need <em>assistance?</em></h2>
                <p>Whether you&apos;re looking for the perfect mining chemicals or expert advice, our team is here to help. Fill out the form, and we&apos;ll get back to you promptly.</p>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <form onSubmit={handleFormSubmit}>
                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input id="name" type="text" required />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" required />
                </div>
                <div className="field">
                  <label htmlFor="subject">Subject</label>
                  <input id="subject" type="text" />
                </div>
                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" />
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
      <section className="chm-team">
        <div className="container">
          <Reveal>
            <div className="chm-team-head">
              <span className="eyebrow">Expertise That Fuels Innovation</span>
              <h2>Meet the People Behind the <em>Excellence</em></h2>
              <p>Our team is the backbone of Jema Chemicals. With extensive industry knowledge and a passion for innovation, they are dedicated to delivering the best solutions for our clients. We are here to make your mining journey seamless.</p>
            </div>
          </Reveal>
          <div className="chm-team-grid">
            {TEAM.map((member, i) => (
              <Reveal key={member.name} delay={(i % 4) as 1 | 2 | 3 | 4}>
                <article className="chm-team-card">
                  <div className="chm-team-image">
                    <img src={member.img} alt={member.name} loading="lazy" />
                  </div>
                  <div className="chm-team-details">
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BRANCHES */}
      <section className="chm-contact">
        <div className="container">
          <Reveal>
            <div className="chm-contact-head">
              <span className="eyebrow">Location</span>
              <h2>Contact us <em>today.</em></h2>
              <p>We are here to assist you with any questions, support needs, or service inquiries. Whether you&apos;re looking for more information about our services or would like to speak directly with our team, we&apos;re ready to help. Your satisfaction is our top priority, and we look forward to serving you.</p>
            </div>
          </Reveal>
          <div className="chm-branches-grid">
            {BRANCHES.map((b, i) => (
              <Reveal key={b.city} delay={(i % 3) as 1 | 2 | 3 | 4}>
                <article className="chm-branch-card">
                  <h3>{b.city}</h3>
                  <p>{b.address}</p>
                  <a href={`tel:${b.phone.replace(/\s/g, '')}`}>{b.phone}</a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="chm-form-section">
        <div className="container">
          <div className="chm-form-wrap">
            <Reveal>
              <div className="chm-form-info">
                <span className="eyebrow">Contact Us</span>
                <h2>We are capable of handling <em>large-scale operations.</em></h2>
                <p>Our state-of-the-art technology ensures maximum efficiency, rapid results, and significant cost savings for our clients in the gold mining industry.</p>
                <div className="chm-form-location">
                  <span className="lbl">Our Office Address</span>
                  <p>Jema Tech Building. Industrial Area. Mwanza. Tanzania.</p>
                  <a href="tel:+255282550380">Office Phone Number +255 28 255 0380</a>
                  <p>5th floor, TAN House, Victoria, Dar es Salaam.</p>
                  <a href="tel:+255677091421">Office Phone Number +255 677 091 421</a>
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

      {/* NEWS */}
      <section className="chm-news">
        <div className="container">
          <Reveal>
            <div className="chm-news-head">
              <span className="eyebrow">Latest News &amp; Blogs</span>
              <h2>What&apos;s New in <em>Business Area</em></h2>
            </div>
          </Reveal>
          <div className="chm-news-grid">
            {NEWS.map((n, i) => (
              <Reveal key={n.title} delay={i as 1 | 2 | 3 | 4}>
                <a className="chm-news-entry" href={n.href} target="_blank" rel="noreferrer">
                  <div className="chm-news-image">
                    <img src={n.img} alt={n.title} loading="lazy" />
                    <time className="chm-news-date" dateTime="2026-04-01">
                      <strong>{n.day}</strong><span>{n.month}</span>
                    </time>
                  </div>
                  <div className="chm-news-body">
                    <span className="chm-news-meta">{n.category} · {n.date}</span>
                    <h3>{n.title}</h3>
                    <span className="chm-news-link">READ MORE &#8594;</span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OFFICES */}
      <section className="chm-offices">
        <div className="container">
          <div className="chm-offices-grid">
            {OFFICES.map((o, i) => (
              <Reveal key={o.title} delay={i as 1 | 2 | 3 | 4}>
                <article className="chm-office-card">
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