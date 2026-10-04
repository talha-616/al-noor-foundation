import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { HeartHandshake, Landmark } from 'lucide-react';

function Donate() {
  const { t } = useTranslation();

  return (
    <div className="inner-page">
      <div className="page-hero" style={{ backgroundImage: "url('/ai_donate.png')" }}>
        <div className="overlay"></div>
        <div className="container relative z-10 text-center text-white">
          <motion.h1 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
            {t('page_donate_title')}
          </motion.h1>
        </div>
      </div>

      <div className="container section-padding">
        <div className="grid-2-cols">
          <div className="text-content">
            <h2 className="text-primary mb-4"><HeartHandshake size={32} style={{display:'inline', marginRight:'10px'}}/>Why Donate?</h2>
            <p className="large-text">{t('page_donate_content1')}</p>
            <p className="large-text mt-4">{t('page_donate_content2')}</p>
          </div>
          
          <div className="donate-card rounded-shadow">
            <div className="text-center mb-6">
              <Landmark size={48} color="var(--secondary)" />
              <h3 className="mt-4">{t('donate_bank')}</h3>
            </div>
            
            <div className="bank-details">
              <p><strong>{t('donate_bank_name')}</strong></p>
              <p><strong>{t('donate_acc_title')}</strong></p>
              <p className="acc-number"><strong>{t('donate_acc_num')}</strong></p>
              <p><strong>{t('donate_swift')}</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Donate;
