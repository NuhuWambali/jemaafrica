'use client';

import { useCallback, useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Grain from '@/components/Grain';
import CookieBanner from '@/components/CookieBanner';
import Reveal from '@/components/Reveal';
import './finance.css';

const OFFERINGS = [
  {
    num: '1',
    title: 'Trade Finance Loans',
    text: 'We provide financial assistance to small and medium-sized companies to help them fulfill orders, such as clients from our sister company, Jema Chemicals.',
    img: '/assets/finance/fina-1.png',
  },
  {
    num: '2',
    title: 'Vicoba Group Support',
    text: 'Our flagship product, the JETFinance Vicoba App, streamlines operations for Vicoba groups, offering secure financial data storage, loan access, and financial education.',
    img: '/assets/finance/fina-2.png',
  },
  {
    num: '3',
    title: 'Financial Education',
    text: 'We offer training modules to improve financial literacy among our clients, empowering them to make informed financial decisions and build a solid credit history.',
    img: '/assets/finance/fina-3.png',
  },
  {
    num: '4',
    title: 'Innovative Financial Solutions',
    text: 'By leveraging technology, we provide user-friendly financial services that cater to the specific needs of underserved communities, ensuring accessibility and affordability.',
    img: '/assets/finance/fina-4.png',
  },
];

const ACCESS_FEATURES = [
  { label: 'Easy Registration', text: 'Users can easily sign up on our platform through a simple and secure registration process, providing access to a variety of financial products.' },
  { label: 'Mobile-Based Platform', text: 'Jema Financial Services is a mobile-first platform that allows individuals and businesses to access financial services from the convenience of their smartphones, making it easier for them to manage their finances on the go.' },
  { label: 'Loan Application Process', text: 'The loan application process is straightforward and quick. Applicants can apply for loans directly through their mobile devices, and funds can be disbursed promptly once approved.' },
  { label: 'Flexible Repayment Terms', text: 'Jema Financial Services offers flexible repayment plans to suit the financial situations of individuals and small businesses, helping them manage their cash flow and repay loans without undue hardship.' },
  { label: '24/7 Customer Support', text: 'Our dedicated customer support team is available around the clock to assist users with any questions or issues they may encounter while using the platform.' },
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
  { title: 'Mining Division HQ', address: 'Jema Tech Building. Mkuyuni, Industrial Area. Mwanza. Tanzania.', phone: '+255 28 255 0380' },
  { title: 'Non-Mining Division HQ', address: '5th floor, TAN House, Victoria, Dar es Salaam.', phone: '+255 677 091 421' },
  { title: 'JIT Main Campus', address: 'Jema Tech Building. Mkuyuni, Industrial Area. Mwanza. Tanzania.', phone: '+255 76 628 3530' },
];

export default function FinancePage() {
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
      <section className="fin-hero">
        <div className="container">
          <div className="fin-hero-layout">
            <Reveal>
              <div className="fin-hero-text">
                <span className="eyebrow">Jema Financial Services</span>
                <h1>Innovative Financial Services <em>for a Brighter Future</em></h1>
                <p className="lead">JETFinance is a digital microfinance platform designed to empower underserved communities by providing access to essential financial services. Launched as an initiative by Jema Africa Limited, JETFinance aims to bridge the gap in financial inclusion for groups such as Vicoba and small to medium-sized enterprises (SMEs) in Tanzania.</p>
                <a href="#offerings" className="btn-primary">More Information</a>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="fin-hero-cards">
                <div className="fin-hero-image">
                  <img src="/assets/finance/jet-finance-4.png" alt="JETFinance" loading="eager" />
                  <div className="fin-exp-card">
                    <span className="fin-exp-num">5 +</span>
                    <span className="fin-exp-label">Years of<br />Experiences</span>
                  </div>
                </div>
                <div className="fin-vision-card">
                  <span className="fin-card-label">Vision</span>
                  <p>To be the leading digital microfinance provider in Tanzania, driving financial inclusion and economic growth through innovative solutions and exceptional customer service.</p>
                </div>
                <div className="fin-mission-card">
                  <span className="fin-card-label">Mission</span>
                  <p>To empower underserved communities by providing accessible, affordable, and innovative financial services that foster economic growth and improve quality of life.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="fin-about">
        <div className="container">
          <Reveal>
            <div className="fin-about-head">
              <span className="eyebrow">About Us Jema Financial Services</span>
              <h2>Empowering Underserved Communities with <em>Jema Financial Services</em></h2>
              <p>Jema Financial Services, launched by Jema Africa Limited, is a digital microfinance platform designed to enhance financial inclusion for underserved communities.</p>
              <p>Through Jema Financial Services, the platform offers essential financial services to groups such as Vicoba (Village Community Banks) and small to medium-sized enterprises (SMEs) in Tanzania.</p>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div className="fin-about-tags">
              {['Trade Finance Loans', 'Vicoba Group Support', 'Financial Education', 'Innovative Financial Solutions'].map((t) => (
                <span key={t} className="fin-tag">{t}</span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={2}>
            <div className="fin-about-body">
              <p>Jema Financial Service seeks to bridge the financial inclusion gap by enabling these communities to access affordable loans, savings, and other crucial financial tools.</p>
              <p>The platform leverages technology to simplify the borrowing process, making financial services accessible to individuals and businesses previously excluded from traditional banking systems.</p>
              <p>With a focus on empowering marginalized groups, Jema Financial Services contributes to fostering economic growth and self-reliance.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* KEY OFFERINGS */}
      <section id="offerings" className="fin-offerings">
        <div className="container">
          <Reveal>
            <div className="fin-offerings-head">
              <span className="eyebrow">Key Offerings</span>
              <h2>Digital Financial Solutions for <em>the Underserved</em></h2>
              <p>Jema Financial Services is committed to revolutionizing financial services in Tanzania. With a strong focus on innovation, customer-centricity, and financial education, we aim to create lasting value for our users and contribute to the broader economic development of the country.</p>
            </div>
          </Reveal>
          <div className="fin-offerings-grid">
            {OFFERINGS.map((o, i) => (
              <Reveal key={o.num} delay={i as 1 | 2 | 3 | 4}>
                <article className="fin-offering-card">
                  <img src={o.img} alt={o.title} loading="lazy" />
                  <div className="fin-offering-body">
                    <div className="fin-offering-header">
                      <h3>{o.title}</h3>
                      <span className="fin-offering-num">{o.num}</span>
                    </div>
                    <p>{o.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="fin-cta">
        <div className="container">
          <div className="fin-cta-in">
            <Reveal>
              <h2>We aim to revolutionize the financial landscape <em>in Tanzania.</em></h2>
            </Reveal>
            <Reveal delay={1}>
              <div className="fin-cta-contact">
                <span className="lbl">Hotline</span>
                <a href="tel:+255282550380">+255 28 255 0380</a>
                <a href="https://jemaafrica.co.tz/contact-us/" target="_blank" rel="noreferrer" className="btn-text">Request A Call Back</a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="fin-why">
        <div className="container">
          <div className="fin-why-layout">
            <Reveal>
              <div className="fin-why-text">
                <span className="eyebrow">Why Choose Us</span>
                <h2>Driving Positive Change in Tanzania&apos;s <em>Underserved Communities</em></h2>
                <p>Jema Financial Services is dedicated to offering more than just financial support. We focus on financial education, helping our clients build their credit scores and access various loan products from Jema Financial Services and its partners.</p>
                <p>Our goal is to promote sustainable development by empowering individuals and businesses with the necessary tools and knowledge to thrive economically.</p>
                <p>Jema Financial Services was established to address the financial needs of underrepresented groups in our community.</p>
                <p>Recognizing the challenges faced by SMEs and Vicoba groups in accessing financial services, Jema Financial Services provides tailored solutions to foster economic growth and financial independence.</p>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="fin-why-figure">
                <img src="/assets/finance/fina-5.png" alt="JETFinance" loading="lazy" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ACCESS */}
      <section className="fin-access">
        <div className="container">
          <Reveal>
            <div className="fin-access-head">
              <span className="eyebrow">Jema Financial Services</span>
              <h2>Simplifying Access to Financial <em>Services</em></h2>
              <p>At Jema Financial Services, we understand the challenges faced by underserved communities when it comes to accessing financial products. That&apos;s why Jema Financial Services is designed to simplify the process and make financial services as accessible as possible.</p>
            </div>
          </Reveal>
          <div className="fin-access-list">
            {ACCESS_FEATURES.map((f, i) => (
              <Reveal key={f.label} delay={(i % 4 + 1) as 1 | 2 | 3 | 4}>
                <div className="fin-access-item">
                  <span className="fin-access-num">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <strong>{f.label}:</strong> {f.text}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="fin-access-cta">
              <a href="https://jemaafrica.co.tz/contact-us/" target="_blank" rel="noreferrer" className="btn-primary">Contact Us</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* NEWS */}
      <section className="fin-news">
        <div className="container">
          <Reveal>
            <div className="fin-news-head">
              <span className="eyebrow">Latest from Jema Africa</span>
              <h2>At Jema Financial Services, <em>we are dedicated to helping underserved communities access the financial resources they need.</em></h2>
            </div>
          </Reveal>
          <div className="fin-news-grid">
            {NEWS.map((n, i) => (
              <Reveal key={n.title} delay={i as 1 | 2 | 3 | 4}>
                <a className="fin-news-entry" href={n.href} target="_blank" rel="noreferrer">
                  <div className="fin-news-image">
                    <img src={n.img} alt={n.title} loading="lazy" />
                    <time className="fin-news-date">
                      <strong>{n.day}</strong><span>{n.month}</span>
                    </time>
                  </div>
                  <div className="fin-news-body">
                    <span className="fin-news-meta">{n.date} · {n.category}</span>
                    <h3>{n.title}</h3>
                    <span className="fin-news-link">READ MORE &#8594;</span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="fin-bottom">
        <div className="container">
          <div className="fin-bottom-layout">
            <Reveal>
              <div className="fin-bottom-text">
                <h2>Ready to Make a Difference <em>with Jema Africa?</em></h2>
                <div className="fin-bottom-contact">
                  <div>
                    <span className="lbl">Hotline</span>
                    <a href="tel:+255282550380">+255 28 255 0380</a>
                  </div>
                  <div>
                    <span className="lbl">Send Us Email</span>
                    <a href="mailto:info@jemaafrica.co.tz">info@jemaafrica.co.tz</a>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="fin-bottom-figure">
                <img src="/assets/finance/ands.png" alt="Jema Africa" loading="lazy" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* OFFICES */}
      <section className="fin-offices">
        <div className="container">
          <div className="fin-offices-grid">
            {OFFICES.map((o, i) => (
              <Reveal key={o.title} delay={i as 1 | 2 | 3 | 4}>
                <article className="fin-office-card">
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