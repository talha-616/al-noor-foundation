import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, Outlet } from 'react-router-dom';
import { Languages, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AnnouncementPopup from './AnnouncementPopup';

function Layout() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'ur' : 'en';
    i18n.changeLanguage(nextLang);
  };

  const navLinks = [
    { name: t('nav_weddings'), path: '/weddings' },
    { name: t('nav_medical'), path: '/medical' },
    { name: t('nav_flood'), path: '/flood' },
    { name: t('nav_water'), path: '/water' },
    { name: t('nav_education'), path: '/education' },
    { name: t('nav_islamic'), path: '/islamic' },
    { name: t('nav_members'), path: '/members' },
    { name: t('nav_donate'), path: '/donate', isButton: true },
  ];

  return (
    <>
      <AnnouncementPopup />
      <header>
        <div className="container header-content">
          <Link to="/" className="logo">
            <img src="/logo.jpg" alt="ANF Logo" className="anf-logo" />
            <span className="logo-text">Al Noor Foundation</span>
          </Link>
          
          <div className="nav-desktop">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} className={link.isButton ? "btn-primary-small" : "nav-link"}>
                {link.name}
              </Link>
            ))}
            <button className="lang-toggle" onClick={toggleLanguage}>
              <Languages size={18} />
              <span>{i18n.language === 'en' ? 'اردو' : 'EN'}</span>
            </button>
          </div>

          <div className="mobile-actions">
            <button className="lang-toggle mobile-only-inline" onClick={toggleLanguage} style={{marginRight: '10px'}}>
              <Languages size={18} />
              <span>{i18n.language === 'en' ? 'اردو' : 'EN'}</span>
            </button>
            <button className="menu-btn mobile-only-inline" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="mobile-nav"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
            >
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className={link.isButton ? "mobile-nav-link text-primary font-bold" : "mobile-nav-link"}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="main-content">
        <Outlet />
      </main>

      <footer>
        <div className="container">
          <div className="footer-content">
            <img src="/logo.jpg" alt="ANF Logo" className="footer-logo" />
            <h3>{t('hero_title')}</h3>
            <p>{t('president')}</p>
            <p dangerouslySetInnerHTML={{ __html: t('contact_numbers') }}></p>
            <p dir="ltr" style={{ margin: '0.5rem 0', fontSize: '1.1rem' }}>
              <strong>Abdul Rauf (Director):</strong> <a href="tel:+923334469035" style={{ color: 'var(--secondary-light)', textDecoration: 'none' }}>+92 333 4469035</a>
            </p>
            <p>{t('contact_desc')}</p>
            <div className="footer-links">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path}>{link.name}</Link>
              ))}
            </div>
          </div>
          <div className="copyright">
            {t('footer_text')}
          </div>
        </div>
      </footer>
    </>
  );
}

export default Layout;
