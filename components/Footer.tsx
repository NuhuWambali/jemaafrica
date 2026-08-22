'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
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
            <p className="footer-tag">{t('footer.tagline')}</p>
            <p className="footer-about">
              {t('footer.about')}
            </p>
          </div>

          <div className="footer-col">
            <h4>{t('footer.whatWeDo')}</h4>
            <ul>
              <li><Link href="/business/mining">{t('footer.mining')}</Link></li>
              <li><Link href="/business/technology">{t('footer.technology')}</Link></li>
              <li><Link href="/business/logistics">{t('footer.logistics')}</Link></li>
              <li><Link href="/business/finance">{t('footer.financeLabel')}</Link></li>
              <li><Link href="/business/education">{t('footer.education')}</Link></li>
              <li><Link href="/business/industrial">{t('footer.industrialServices')}</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>{t('footer.ourOffices')}</h4>
            <div className="footer-office">
              <h5>Mwanza</h5>
              <p>{t('footer.mwanzaAddress')}</p>
              <Link href="tel:+255282550380">+255 28 255 0380</Link>
            </div>
            <div className="footer-office">
              <h5>Dar es Salaam</h5>
              <p>{t('footer.darAddress')}</p>
              <Link href="tel:+255677091421">+255 677 091 421</Link>
            </div>
          </div>

          <div className="footer-col">
            <h4>{t('footer.stayUpdated')}</h4>
            <p className="footer-sub">{t('footer.newsletterSub')}</p>
            <form className="footer-field" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder={t('footer.emailPlaceholder')} />
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
              <Link href="/privacy">{t('footer.privacy')}</Link> &nbsp;&middot;&nbsp; <Link href="/terms">{t('footer.terms')}</Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
