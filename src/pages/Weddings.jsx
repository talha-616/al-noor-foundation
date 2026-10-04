import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

function Weddings() {
  const { t } = useTranslation();

  return (
    <div className="inner-page">
      <div className="page-hero" style={{ backgroundImage: "url('/ai_weddings.png')" }}>
        <div className="overlay"></div>
        <div className="container relative z-10 text-center text-white">
          <motion.h1 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
            {t('page_weddings_title')}
          </motion.h1>
        </div>
      </div>

      <div className="container section-padding">
        <div className="content-grid mb-8">
          <div className="text-content">
            <p className="large-text">{t('page_weddings_content1')}</p>
            <p className="large-text mt-4">{t('page_weddings_content2')}</p>
            <p className="large-text mt-4">{t('page_weddings_content3')}</p>
            <p className="large-text mt-4">{t('page_weddings_content4')}</p>
            <div className="mt-8">
              <a href="/2025 weddings report complete.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary mb-6" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <FileText size={20} />
                View 2025 Complete Weddings Report
              </a>
              <iframe 
                src="/2025 weddings report complete.pdf" 
                title="2025 Weddings Report"
                width="100%" 
                height="500px" 
                style={{ border: 'none', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}
              >
              </iframe>
            </div>
          </div>
          <div className="media-content">
            <img src="/2017-2025 weddings info.jpeg" alt="Weddings Info" className="rounded-shadow" />
            <img src="/shadi hall image.jpeg" alt="Shadi Hall" className="rounded-shadow mt-4" />
          </div>
        </div>

        {/* Gallery for Weddings specifically */}
        <h3 className="text-primary text-center mb-6 mt-8" style={{fontSize: '2rem'}}>Glimpses of Ceremonies</h3>
        <div className="gallery-grid">
            <div className="gallery-item rounded-shadow">
               <img src="/jahez saman image.jpeg" alt="Jahez Saman" />
            </div>
            <div className="gallery-item rounded-shadow">
               <video src="/saman jahez long video.mp4" autoPlay loop muted playsInline />
            </div>
            <div className="gallery-item rounded-shadow">
               <video src="/people on wedding video.mp4" autoPlay loop muted playsInline />
            </div>
            <div className="gallery-item rounded-shadow">
               <img src="/dulhy eating food.jpeg" alt="Dulhy eating food" />
            </div>
            <div className="gallery-item rounded-shadow">
               <video src="/dulhy sitting video.mp4" autoPlay loop muted playsInline />
            </div>
            <div className="gallery-item rounded-shadow">
               <video src="/band bajy video.mp4" autoPlay loop muted playsInline />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Weddings;
