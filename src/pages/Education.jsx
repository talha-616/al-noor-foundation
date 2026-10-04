import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

function Education() {
  const { t } = useTranslation();

  return (
    <div className="inner-page">
      <div className="page-hero" style={{ backgroundImage: "url('/ai_education.png')" }}>
        <div className="overlay"></div>
        <div className="container relative z-10 text-center text-white">
          <motion.h1 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
            {t('page_education_title')}
          </motion.h1>
        </div>
      </div>

      <div className="container section-padding">
        <div className="content-grid">
          <div className="text-content">
            <p className="large-text">{t('page_education_content1')}</p>
            <p className="large-text mt-4">{t('page_education_content2')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
