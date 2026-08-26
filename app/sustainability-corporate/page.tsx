'use client';

import { useTranslation } from 'react-i18next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Grain from '@/components/Grain';
import CookieBanner from '@/components/CookieBanner';
import Reveal from '@/components/Reveal';
import './sustainability-corporate.css';

export default function SustainabilityCorporatePage() {
  const { t } = useTranslation();

  return (
    <>
      <Grain />
      <Navbar />

      {/* Skip to content link */}
      <a href="#main-content" className="skip-link">
        {t('skip_to_content')}
      </a>

      <main id="main-content">

        {/* HERO */}
        <section className="sustain-hero">
          <div className="container">
            <Reveal>
              <span className="eyebrow">Jema Africa · Sustainability</span>
            </Reveal>
            <Reveal delay={1}>
              <h1>Sustainability & Corporate</h1>
            </Reveal>
          </div>
        </section>

        {/* PURPOSE */}
        <section className="sustain-purpose">
          <div className="container">
            <Reveal>
              <div className="sustain-purpose-in">
                <h2>Our Purpose</h2>
                <p>
                  At Jema Africa, sustainability is at the core of our operations. We are dedicated to environmental stewardship, social responsibility, and ethical business practices that benefit our communities and the environment. Our initiatives are designed to ensure long-term positive impacts and adhere to stringent compliance standards, aligning with both local and international regulations.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* KEY PILLARS */}
        <section className="sustain-pillars">
          <div className="container">
            <Reveal>
              <h2>Key Pillars</h2>
              <div className="sustain-pillars-grid">
                <div className="sustain-pillar">
                  <div className="sustain-pillar-icon">🌍</div>
                  <h3>Environmental Stewardship</h3>
                  <p>We implement eco-friendly practices to minimize our environmental footprint, including waste reduction, energy efficiency, and sustainable sourcing.</p>
                </div>
                <div className="sustain-pillar">
                  <div className="sustain-pillar-icon">🤝</div>
                  <h3>Social Responsibility</h3>
                  <p>Our projects aim to uplift local communities through education, health, and economic empowerment programs.</p>
                </div>
                <div className="sustain-pillar">
                  <div className="sustain-pillar-icon">📜</div>
                  <h3>Ethical Business Practices</h3>
                  <p>We maintain the highest standards of integrity and transparency in all our business dealings.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* MILESTONES */}
        <section className="sustain-milestones">
          <div className="container">
            <Reveal>
              <h2>Milestones & Compliance</h2>
              <div className="sustain-milestones-grid">
                <div className="sustain-milestone">
                  <span className="sustain-milestone-number">14+</span>
                  <span className="sustain-milestone-label">Years in Operation</span>
                </div>
                <div className="sustain-milestone">
                  <span className="sustain-milestone-number">98%</span>
                  <span className="sustain-milestone-label">Compliance Rate</span>
                </div>
                <div className="sustain-milestone">
                  <span className="sustain-milestone-number">50+</span>
                  <span className="sustain-milestone-label">Community Projects</span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* LOCATIONS */}
        <section className="sustain-locations" id="locations">
          <div className="container">
            <Reveal>
              <div className="sustain-locations-in">
                <h3>Mining Division HQ</h3>
                <p>Jema Tech Building. Mkuyuni Industrial Area. Mwanza. Tanzania.</p>
                <a href="tel:+255282550380">+255 28 255 0380</a>

                <h3>Non-Mining Division HQ</h3>
                <p>5th floor, TAN House, Victoria, Dar es Salaam.</p>
                <a href="tel:+255677091421">+255 677 091 421</a>

                <h3>JIT Main Campus</h3>
                <p>Jema Tech Building. Mkuyuni Industrial Area. Mwanza. Tanzania.</p>
                <a href="tel:+255766283530">+255 76 628 3530</a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* NEWSLETTER */}
        <section className="sustain-newsletter">
          <div className="container">
            <Reveal>
              <div className="sustain-newsletter-in">
                <h2>Stay Updated!</h2>
                <p>Subscribe to receive the latest news and updates from us. We value your trust and promise no spam, just valuable insights.</p>
                <form>
                  <div className="field">
                    <input type="email" required placeholder="Enter your email" />
                    <button type="submit" className="submit-btn">Subscribe</button>
                  </div>
                </form>
              </div>
            </Reveal>
          </div>
        </section>

      </main>

      <Footer />
      <CookieBanner />
    </>
  );
}