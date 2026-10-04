import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

function IslamicPrograms() {
  const { t } = useTranslation();

  return (
    <div className="inner-page">
      <div className="page-hero" style={{ backgroundImage: "url('/ai_islamic.png')" }}>
        <div className="overlay"></div>
        <div className="container relative z-10 text-center text-white">
          <motion.h1 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
            {t('page_islamic_title')}
          </motion.h1>
        </div>
      </div>

      <div className="container section-padding pb-0" style={{ paddingBottom: '2rem' }}>


        <div style={{ marginBottom: '4rem' }}>
          <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '2rem' }}>Salab Zadgan Interview</h2>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', background: 'white' }}>
              <iframe 
                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fp%2F1ULioBWyHF%2F&show_text=true" 
                width="100%" 
                height="650" 
                style={{ border: 'none', overflow: 'hidden', minWidth: '320px', maxWidth: '500px' }} 
                scrolling="no" 
                frameBorder="0" 
                allowFullScreen={true} 
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="Dr Umar News Interview"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="container section-padding">
        <div className="content-grid" style={{ marginBottom: '3rem' }}>
          <div className="text-content">
            <h2 style={{ fontSize: '2.2rem', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '1.5rem' }}>Our Islamic Khidmaat</h2>
            <p className="large-text">{t('page_islamic_content1')}</p>
            <p className="large-text mt-4">{t('page_islamic_content2')}</p>
            <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: 'rgba(6, 95, 70, 0.05)', borderRadius: '1rem', border: '1px solid rgba(6, 95, 70, 0.1)' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--secondary)', marginBottom: '0.75rem' }}>Spiritual and Religious Services</h3>
              <p style={{ color: 'var(--text-dark)', lineHeight: '1.8' }}>
                Beyond our welfare initiatives, the Al Noor Foundation is deeply committed to spiritual upliftment. We organize daily Tasbih and Namaz gatherings for Khawateen (women), fostering a strong connection with faith and community. Our religious Khidmaat include providing spaces for communal prayers, distributing Islamic literature, and ensuring that the teachings of peace and compassion are spread far and wide.
              </p>
            </div>
          </div>
          <div className="media-content" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
             <img src="/kargardgi image.jpeg" alt="Kargardgi Report" className="rounded-shadow" style={{ width: '100%', objectFit: 'cover', borderRadius: '1rem' }} />
             <img src="/khawateen tasbih namaz.jpeg" alt="Khawateen Tasbih Namaz" className="rounded-shadow" style={{ width: '100%', objectFit: 'cover', borderRadius: '1rem' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IslamicPrograms;
