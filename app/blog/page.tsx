'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Grain from '@/components/Grain';
import Reveal from '@/components/Reveal';
import './blog.css';

interface BlogPost {
  title: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  content: string;
}

const blogPosts: Record<string, BlogPost> = {
  '1': {
    title: 'JEMA Africa Limited Celebrates 14 Years of Growth, Innovation, and Impact.',
    category: 'Corporate',
    author: 'Admin Jema Africa',
    date: 'April 1, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=85',
    tags: ['Corporate', 'Anniversary', 'Growth', 'Africa'],
    content: `
      <p>From a single operation in Mwanza to a diversified Pan-African group, we look back on fourteen years of building businesses, technologies, and partnerships across the continent.</p>
      <p>When Jema Africa was founded in 2012, the vision was clear: to create a group of companies that would not only drive economic growth but also empower communities and set new standards for responsible business across Africa. Today, as we celebrate our 14th anniversary, we reflect on a journey that has exceeded our expectations and positioned us as a leader in multiple industries.</p>
      <h2>A Decade of Diversification</h2>
      <p>What began as a focused operation in the mining sector has evolved into a diversified conglomerate spanning <strong>mining, technology, logistics, finance, education, and industrial services</strong>. This strategic diversification has allowed us to build resilience, create synergies across our divisions, and address complex challenges with integrated solutions.</p>
      <blockquote>&ldquo;Our growth has never been about expansion for its own sake. Every division we build, every partnership we form, is driven by the question: how does this create lasting value for Africa?&rdquo;</blockquote>
      <p>Today, our portfolio includes:</p>
      <ul>
        <li><strong>Jema Elution</strong> &mdash; Gold elution services and processing plants</li>
        <li><strong>Jema Chemicals</strong> &mdash; Industrial chemicals for mining and manufacturing</li>
        <li><strong>Jema Life Science</strong> &mdash; Laboratory equipment and scientific solutions</li>
        <li><strong>Jema Tech</strong> &mdash; Technology solutions and digital transformation</li>
        <li><strong>Jema Auto</strong> &mdash; Vehicle import and automotive services</li>
        <li><strong>JETCargo</strong> &mdash; Logistics and freight forwarding</li>
        <li><strong>Jema Institute of Technology</strong> &mdash; Technical education and training</li>
        <li><strong>Jema Financial Services</strong> &mdash; Financial solutions for businesses</li>
      </ul>
      <h2>Building for Africa&rsquo;s Future</h2>
      <p>As we look ahead, our commitment remains unwavering. We continue to invest in people, technology, and sustainable practices that will drive Africa&rsquo;s economic transformation for decades to come. Our partnerships with global leaders like Merck, AngloGold Ashanti, and Total Energies reflect the trust placed in our capabilities and our standards.</p>
      <p>To our team, partners, clients, and communities &mdash; thank you for being part of this journey. The next chapter promises to be even more impactful.</p>
    `,
  },
  '2': {
    title: 'JEMA Africa Ltd Leads the Stage as Gold Sponsor at the 2025 Mining Show Exhibition',
    category: 'Mining',
    author: 'Admin Jema Africa',
    date: 'December 8, 2025',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1400&q=85',
    tags: ['Mining', 'Exhibition', 'Partnership', 'Tanzania'],
    content: `
      <p>Jema Africa takes the stage as Gold Sponsor at the 2025 Mining Show, strengthening the group&rsquo;s position in Tanzania&rsquo;s mining sector and showcasing our integrated capabilities.</p>
      <p>The 2025 Mining Show Exhibition brought together industry leaders, innovators, and stakeholders from across Africa&rsquo;s mining ecosystem. As a Gold Sponsor, Jema Africa had the opportunity to demonstrate our comprehensive approach to mining solutions &mdash; from chemical supply and elution services to technology integration and workforce development.</p>
      <h2>Showcasing Integrated Solutions</h2>
      <p>Our exhibition presence highlighted the synergies across our mining-related divisions. Visitors experienced firsthand how <strong>Jema Chemicals</strong>, <strong>Jema Elution</strong>, and <strong>Jema Life Science</strong> work together to provide end-to-end solutions for mining operations of all scales.</p>
      <blockquote>&ldquo;The mining industry needs partners who understand the full value chain. That&rsquo;s exactly what we bring &mdash; integrated expertise from extraction to processing to environmental management.&rdquo;</blockquote>
      <h2>Key Highlights</h2>
      <ul>
        <li><strong>Live demonstrations</strong> of our chemical processing capabilities</li>
        <li><strong>Technical presentations</strong> on sustainable mining practices</li>
        <li><strong>Partnership announcements</strong> with leading mining equipment suppliers</li>
        <li><strong>Recruitment drive</strong> for our expanded operations team</li>
      </ul>
      <h2>Looking Ahead</h2>
      <p>The connections made at the Mining Show will drive new collaborations and projects throughout 2026 and beyond. We&rsquo;re committed to supporting Tanzania&rsquo;s mining sector with world-class solutions and responsible practices.</p>
    `,
  },
  '3': {
    title: 'Kwa Nini Watanzania Wanapaswa Kuchagua JEMA AUTO Katika Uagizaji wa Magari Kutoka Japan',
    category: 'Automotive',
    author: 'Admin Jema Auto',
    date: 'December 8, 2025',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=85',
    tags: ['Automotive', 'Import', 'Japan', 'Tanzania'],
    content: `
      <p>Reliable sourcing, transparent processes, and quality vehicles &mdash; discover why Tanzanians choose Jema Auto for importing cars from Japan.</p>
      <p>Uagizaji wa magari kutoka Japan umekuwa njia bora ya kupata gari bora kwa bei nafuu. Lakini si wauzaji wote wanaweza kuaminika. Hapa ndipo Jema Auto inapotofautiana na wengine.</p>
      <h2>Kwa Nini Jema Auto?</h2>
      <p>Tuna uzoefu wa miaka mingi katika uagizaji wa magari kutoka Japan. Timu yetu inajua soko la Japan vizuri na inaweza kukusaidia kupata gari linalokufaa &mdash; kwa bei nzuri na bila wasiwasi.</p>
      <blockquote>&ldquo;Lengo letu ni kukuwezesha kupata gari bora, kwa bei halisi, na mchakato wazi kutoka Japan hadi Mwanza.&rdquo;</blockquote>
      <h3>Faida za Kuchagua Jema Auto</h3>
      <ul>
        <li><strong>Vyanzo vya kuaminika</strong> &mdash; Tunafanya kazi na wauzaji waliothibitishwa Japan</li>
        <li><strong>Bei wazi</strong> &mdash; Hakuna gharama zilizofichwa; unajua unacholipa</li>
        <li><strong>Usafirishaji salama</strong> &mdash; Tunashughulikia kila kitu kutoka Japan hadi nyumbani kwako</li>
        <li><strong>Huduma baada ya ununuzi</strong> &mdash; Tuko nawe hata baada ya kununua gari</li>
      </ul>
      <h2>Mchakato Wetu</h2>
      <p>1. <strong>Ushauri</strong> &mdash; Tunakusaidia kuchagua gari linalokufaa na bajeti yako.</p>
      <p>2. <strong>Ununuzi</strong> &mdash; Tunapata gari kutoka kwa muuzaji wa kuaminika Japan.</p>
      <p>3. <strong>Usafirishaji</strong> &mdash; Tunashughulikia kodi, forodha, na usafirishaji hadi Tanzania.</p>
      <p>4. <strong>Uwasilishaji</strong> &mdash; Gari lako linakuja kwako, tayari kwa matumizi.</p>
      <h2>Wasiliana Nasi</h2>
      <p>Ikiwa unatafuta gari kutoka Japan, <a href="/contact">wasiliana nasi leo</a>. Timu yetu ya Jema Auto iko tayari kukusaidia kupata gari bora kwa bei nzuri.</p>
    `,
  },
};

function BlogContent() {
  const searchParams = useSearchParams();
  const blogId = searchParams.get('id') || '1';
  const post = blogPosts[blogId];

  if (!post) {
    return (
      <>
        <Grain />
        <Navbar />
        <section className="blog-hero">
          <div className="container">
            <Reveal>
              <nav className="blog-breadcrumb">
                <Link href="/">Home</Link>
                <span>/</span>
                <Link href="/insights">News</Link>
                <span>/</span>
                <span>Not Found</span>
              </nav>
            </Reveal>
            <h1 className="blog-title reveal">Article not found</h1>
          </div>
        </section>
        <section className="blog-content-section">
          <div className="container">
            <article className="blog-content">
              <p>
                The article you are looking for does not exist.{' '}
                <Link href="/insights">Return to news</Link>.
              </p>
            </article>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Grain />
      <Navbar />

      <section className="blog-hero">
        <div className="container">
          <Reveal>
            <nav className="blog-breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/insights">News</Link>
              <span>/</span>
              <span>{post.category}</span>
            </nav>
          </Reveal>
          <Reveal delay={1}>
            <span className="blog-category">{post.category}</span>
          </Reveal>
          <h1 className="blog-title reveal reveal-delay-2">{post.title}</h1>
          <Reveal delay={3}>
            <div className="blog-meta">
              <div className="blog-meta-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 21v-2a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v2" />
                </svg>
                <span>{post.author}</span>
              </div>
              <div className="blog-meta-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
                <time>{post.date}</time>
              </div>
              <div className="blog-meta-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                <span>{post.readTime}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="blog-featured">
        <div className="container">
          <Reveal>
            <div className="blog-featured-image">
              <img src={post.image} alt={post.title} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="blog-content-section">
        <div className="container">
          <article
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <Reveal>
            <div className="blog-tags">
              {post.tags.map((tag) => (
                <Link key={tag} href={`/insights#${tag.toLowerCase()}`} className="blog-tag">
                  {tag}
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="blog-nav">
        <div className="container">
          <div className="blog-nav-inner">
            <Link href="/insights" className="blog-nav-link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to News
            </Link>
            <Link href="/contact" className="blog-nav-link">
              Get In Touch
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default function BlogPage() {
  return (
    <Suspense
      fallback={
        <>
          <Grain />
          <Navbar />
          <section className="blog-hero">
            <div className="container">
              <h1 className="blog-title">Loading...</h1>
            </div>
          </section>
          <Footer />
        </>
      }
    >
      <BlogContent />
    </Suspense>
  );
}
