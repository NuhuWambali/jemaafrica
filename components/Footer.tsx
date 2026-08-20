import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-africa">
        <img src="/assets/africa.png" alt="" />
      </div>
      <div className="footer-africa footer-africa-left">
        <img src="/assets/africa.png" alt="" />
      </div>

      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">
              <img src="/assets/logo-white.png" alt="Jema Africa" />
            </div>
            <p className="footer-tag">A Private Collective</p>
            <p className="footer-about">
              A diversified Pan-African group operating across mining, technology, logistics,
              finance, education, and industrial services since 2012.
            </p>
          </div>

          <div className="footer-col">
            <h4>What We Do</h4>
            <ul>
              <li><Link href="/business/mining">Mining</Link></li>
              <li><Link href="/business/technology">Technology</Link></li>
              <li><Link href="/business/logistics">Logistics</Link></li>
              <li><Link href="/business/finance">Finance</Link></li>
              <li><Link href="/business/education">Education</Link></li>
              <li><Link href="/business/industrial">Industrial Services</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Our Offices</h4>
            <div className="footer-office">
              <h5>Mwanza</h5>
              <p>Jema Tech Building. Industrial Area. Mwanza. Tanzania.</p>
              <Link href="tel:+255282550380">+255 28 255 0380</Link>
            </div>
            <div className="footer-office">
              <h5>Dar es Salaam</h5>
              <p>5th floor, TAN House, Victoria, Dar es Salaam.</p>
              <Link href="tel:+255677091421">+255 677 091 421</Link>
            </div>
          </div>

          <div className="footer-col">
            <h4>Stay Updated</h4>
            <p className="footer-sub">Get the latest insights and news from Jema Africa delivered to your inbox.</p>
            <form className="footer-field" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email address" />
              <button type="submit">→</button>
            </form>
            <span className="footer-form-note"></span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-in">
            <span>&copy; {new Date().getFullYear()} Jema Africa. All rights reserved.</span>
            <span>
              <Link href="/privacy">Privacy Policy</Link> &nbsp;&middot;&nbsp; <Link href="/terms">Terms of Use</Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
