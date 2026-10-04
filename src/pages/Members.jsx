import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

function Members() {
  const { t } = useTranslation();

  return (
    <div className="inner-page">
      <div className="page-hero" style={{ backgroundColor: "var(--primary)" }}>
        <div className="container relative z-10 text-center text-white">
          <motion.h1 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
            {t('page_members_title')}
          </motion.h1>
        </div>
      </div>

      <div className="container section-padding">
        <p className="text-center large-text mb-8">{t('page_members_content1')}</p>
        
        <div className="grid-2-cols mb-8" style={{ gap: '4rem' }}>
          
          <div className="member-card rounded-shadow">
             <div className="member-avatar">
               <img src="/members image.jpeg" alt="Dr. Muhammad Umer" />
             </div>
             <h3>{t('member_pres')}</h3>
             <p>{t('member_pres_desc')}</p>
          </div>

          <div className="member-card rounded-shadow">
             <div className="member-avatar">
               <img src="/some member image.jpeg" alt="Dr. Basharat Ali" />
             </div>
             <h3>{t('member_vp')}</h3>
             <p>{t('member_vp_desc')}</p>
          </div>

        </div>

        <div className="grid-2-cols mt-8" style={{ gap: '2rem' }}>
           <div className="gallery-item rounded-shadow" style={{aspectRatio: '16/9'}}>
             <img src="/all members image.jpeg" alt="All Members" />
           </div>
           <div className="gallery-item rounded-shadow" style={{aspectRatio: '16/9'}}>
             <video src="/member talks.mp4" autoPlay loop muted playsInline controls />
           </div>
        </div>

        <div className="mt-8 text-center bg-light p-6 rounded-shadow">
           <h3>{t('member_general')}</h3>
           <p className="mt-2">{t('member_general_desc')}</p>
        </div>

      </div>
    </div>
  );
}

export default Members;
