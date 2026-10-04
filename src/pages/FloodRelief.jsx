import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

function FloodRelief() {
  const { t } = useTranslation();

  return (
    <div className="inner-page">
      <div className="page-hero" style={{ backgroundImage: "url('/ai_flood.png')" }}>
        <div className="overlay"></div>
        <div className="container relative z-10 text-center text-white">
          <motion.h1 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
            {t('page_flood_title')}
          </motion.h1>
        </div>
      </div>

      <div className="container section-padding">
        <div className="content-grid" style={{ marginBottom: '3rem' }}>
          <div className="text-content">
            <h2 style={{ fontSize: '2.2rem', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '1.5rem' }}>Our Flood Relief Khidmaat</h2>
            <p className="large-text">{t('page_flood_content1')}</p>
            <p className="large-text mt-4">{t('page_flood_content2')}</p>
            <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: 'rgba(6, 95, 70, 0.05)', borderRadius: '1rem', border: '1px solid rgba(6, 95, 70, 0.1)' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--secondary)', marginBottom: '0.75rem' }}>Rebuilding Lives Together</h3>
              <p style={{ color: 'var(--text-dark)', lineHeight: '1.8' }}>
                When natural disasters strike, the Al Noor Foundation is at the forefront of providing immediate and sustained relief. Our Khidmaat during floods include rescuing stranded families, building new homes (Ghar) for the 'Salab Zadgan', and continuously distributing Rashan (food supplies) and essential items. We stand firmly with our brothers and sisters in their time of greatest need.
              </p>
            </div>
          </div>
          <div className="media-content" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <img src="/rashan to salab zadgan.jpeg" alt="Rashan Distribution" className="rounded-shadow" style={{ width: '100%', objectFit: 'cover', borderRadius: '1rem' }} />
            <video src="/ghar of salab zadgan.mp4" autoPlay loop muted playsInline className="rounded-shadow" style={{ width: '100%', objectFit: 'cover', borderRadius: '1rem', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FloodRelief;
