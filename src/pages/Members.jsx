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

        <div className="member-card rounded-shadow mb-8" style={{ background: 'var(--primary)', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
           <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: 'white' }}>Key Contact / Director</h3>
           <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem', opacity: 0.9 }}>For donations, queries, or project details.</p>
           <div style={{
             background: 'rgba(255,255,255,0.1)', padding: '1rem 2rem', borderRadius: '2rem',
             display: 'flex', alignItems: 'center', gap: '1rem',
             direction: 'ltr', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)'
           }}>
             <span style={{ fontSize: '1.2rem' }}>Contact:</span>
             <strong style={{ fontSize: '1.3rem', color: '#F59E0B' }}>Abdul Rauf</strong>
             <span style={{ margin: '0 0.5rem', opacity: 0.5 }}>|</span>
             <a href="tel:+923334469035" style={{ fontSize: '1.4rem', fontWeight: '800', color: 'white', textDecoration: 'none' }} dir="ltr">+92 333 4469035</a>
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
