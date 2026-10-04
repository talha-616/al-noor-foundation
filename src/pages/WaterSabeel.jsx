import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

function WaterSabeel() {
  const { t } = useTranslation();

  return (
    <div className="inner-page">
      <div className="page-hero" style={{ backgroundImage: "url('/ai_water.png')" }}>
        <div className="overlay"></div>
        <div className="container relative z-10 text-center text-white">
          <motion.h1 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
            {t('page_water_title')}
          </motion.h1>
        </div>
      </div>

      <div className="container section-padding">
        <div className="content-grid" style={{ marginBottom: '3rem' }}>
          <div className="text-content">
            <h2 style={{ fontSize: '2.2rem', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '1.5rem' }}>Our Clean Water Khidmaat</h2>
            <p className="large-text">{t('page_water_content1')}</p>
            <p className="large-text mt-4">{t('page_water_content2')}</p>
            <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: 'rgba(6, 95, 70, 0.05)', borderRadius: '1rem', border: '1px solid rgba(6, 95, 70, 0.1)' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--secondary)', marginBottom: '0.75rem' }}>Quenching Thirst, Saving Lives</h3>
              <p style={{ color: 'var(--text-dark)', lineHeight: '1.8' }}>
                Access to clean drinking water is a fundamental human right, yet many communities struggle to find it. As part of our essential Khidmaat, Al Noor Foundation establishes Water Sabeels and installs modern water filtration plants (Pani Filters) in areas facing severe water shortages. This continuous charity (Sadaqah Jariyah) ensures that pure, life-saving water reaches those who need it the most.
              </p>
            </div>
          </div>
          <div className="media-content" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <img src="/pani sabeel.jpeg" alt="Water Sabeel" className="rounded-shadow" style={{ width: '100%', objectFit: 'cover', borderRadius: '1rem' }} />
            <img src="/pani filter.jpeg" alt="Water Filter Plant" className="rounded-shadow" style={{ width: '100%', objectFit: 'cover', borderRadius: '1rem' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WaterSabeel;
