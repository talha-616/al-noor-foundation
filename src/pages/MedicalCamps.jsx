import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

function MedicalCamps() {
  const { t } = useTranslation();

  const medicalImages = [
    '/medical camp image.jpeg',
    '/medical camp iamge.jpeg',
    '/2nd free medical camp.jpeg',
    '/free medical camp.jpeg',
    '/med camp.jpeg',
    '/med camp 2.jpeg',
    '/med camp (2).jpeg'
  ];

  return (
    <div className="inner-page">
      <div className="page-hero" style={{ backgroundImage: "url('/ai_medical.png')" }}>
        <div className="overlay"></div>
        <div className="container relative z-10 text-center text-white">
          <motion.h1 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
            {t('page_medical_title')}
          </motion.h1>
        </div>
      </div>

      <div className="container section-padding">
        <div className="content-grid" style={{ marginBottom: '3rem' }}>
          <div className="text-content">
            <h2 style={{ fontSize: '2.2rem', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '1.5rem' }}>Our Medical Khidmaat</h2>
            <p className="large-text">{t('page_medical_content1')}</p>
            <p className="large-text mt-4">{t('page_medical_content2')}</p>
            <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: 'rgba(6, 95, 70, 0.05)', borderRadius: '1rem', border: '1px solid rgba(6, 95, 70, 0.1)' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--secondary)', marginBottom: '0.75rem' }}>Serving Humanity with Care</h3>
              <p style={{ color: 'var(--text-dark)', lineHeight: '1.8' }}>
                Al Noor Foundation's Khidmaat in the medical field span across providing free checkups, vital medicines, and specialized consultations to the underprivileged. Our free medical camps have become a beacon of hope for communities lacking access to basic healthcare facilities. We strive to continue this Khidmat, ensuring that no one suffers due to the inability to afford medical care.
              </p>
            </div>
          </div>
          <div className="media-content">
             <img src="/medical camp image.jpeg" alt="Medical Camp Highlight" className="rounded-shadow" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1rem', minHeight: '300px' }} />
          </div>
        </div>

        <div style={{ marginTop: '4rem' }}>
          <h3 className="section-title" style={{ textAlign: 'center', fontSize: '2rem', color: 'var(--primary)', marginBottom: '2rem' }}>Glimpses of Our Medical Camps</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            {medicalImages.map((img, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ overflow: 'hidden', borderRadius: '1rem', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', aspectRatio: '4/3', position: 'relative' }}
              >
                <img 
                  src={img} 
                  alt={`Medical Camp ${index + 1}`} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MedicalCamps;
