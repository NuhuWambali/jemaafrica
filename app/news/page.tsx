'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Grain from '@/components/Grain';
import CookieBanner from '@/components/CookieBanner';
import Reveal from '@/components/Reveal';
import './news.css';

const NEWS_ITEMS = [
  {
    id: 1,
    category: 'corporate',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Business team collaborating',
    date: { day: '01', month: 'Apr 2026', iso: '2026-04-01' },
    meta: 'By Admin Jema Africa',
    title: 'JEMA Africa Limited Celebrates 14 Years of Growth, Innovation, and Impact.',
    excerpt: 'From a single operation in Mwanza to a diversified Pan-African group, we look back on fourteen years of building businesses, technologies, and partnerships across the continent.',
  },
  {
    id: 2,
    category: 'mining',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Industrial mining operation',
    date: { day: '08', month: 'Dec 2025', iso: '2025-12-08' },
    meta: 'By Admin Jema Africa',
    title: 'JEMA Africa Ltd Leads the Stage as Gold Sponsor at the 2025 Mining Show Exhibition',
    excerpt: 'Jema Africa takes the stage as Gold Sponsor at the 2025 Mining Show, strengthening the group\u2019s position in Tanzania\u2019s mining sector.',
  },
  {
    id: 3,
    category: 'automotive',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Imported vehicle on display',
    date: { day: '08', month: 'Dec 2025', iso: '2025-12-08' },
    meta: 'By Admin Jema Auto',
    title: 'Kwa Nini Watanzania Wanapaswa Kuchagua JEMA AUTO Katika Uagizaji wa Magari Kutoka Japan',
    excerpt: 'Reliable sourcing, transparent processes, and quality vehicles \u2014 discover why Tanzanians choose Jema Auto for importing cars from Japan.',
  },
];

const FILTERS = ['all', 'corporate', 'mining', 'automotive'] as const;

export default function NewsPage() {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  return (
    <>
      <Grain />
      <Navbar />

      <section className="news-hero">
        <div className="container">
          <Reveal>
            <span className="eyebrow">News &amp; Updates</span>
          </Reveal>
          <Reveal delay={1}>
            <h1>The latest from <em>Jema Africa.</em></h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="lead">Success stories, milestones, and innovations from across our divisions — and the people making them happen.</p>
          </Reveal>
        </div>
      </section>

      <section className="news-section">
        <div className="container">
          <Reveal>
            <div className="news-filters" role="tablist" aria-label="Filter news by category">
              {FILTERS.map((filter) => (
                <button
                  key={filter}
                  className={`news-filter${activeFilter === filter ? ' is-active' : ''}`}
                  data-filter={filter}
                  role="tab"
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter === 'all' ? 'All' : filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="news-list">
            {NEWS_ITEMS.map((item, index) => {
              const isVisible = activeFilter === 'all' || activeFilter === item.category;
              const delayValue = ((index + 1) as 1 | 2 | 3 | 4);

              return (
                <article
                  key={item.id}
                  className={`news-entry${!isVisible ? ' is-hidden' : ''}`}
                  data-category={item.category}
                >
                  <Reveal delay={delayValue}>
                    <div className="news-image">
                      <img src={item.image} alt={item.imageAlt} loading="lazy" />
                      <span className="news-category">{item.category.charAt(0).toUpperCase() + item.category.slice(1)}</span>
                      <time className="news-date" dateTime={item.date.iso}>
                        <strong>{item.date.day}</strong>{item.date.month}
                      </time>
                    </div>
                    <div className="news-body">
                      <span className="news-meta">{item.meta}</span>
                      <h3 className="news-title">{item.title}</h3>
                      <p className="news-excerpt">{item.excerpt}</p>
                      <Link className="news-link" href={`/blog?id=${item.id}`}>
                        Read Article <span aria-hidden="true">&rarr;</span>
                      </Link>
                    </div>
                  </Reveal>
                </article>
              );
            })}
          </div>

          <Reveal>
            <div className="news-cta">
              <div>
                <h3>Want to hear from us more often?</h3>
                <p>Subscribe to receive the latest news and updates from Jema Africa — no spam, just valuable insights from across our divisions.</p>
              </div>
              <Link href="/contact" className="nav-cta">Get In Touch</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
      <CookieBanner />
    </>
  );
}
