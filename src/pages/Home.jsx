import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HeartHandshake, Stethoscope, Droplets, BookOpen, Home as HomeIcon, Users } from 'lucide-react';

function Home() {
  const { t } = useTranslation();

  const services = [
    { icon: <HeartHandshake size={32} />, title: 'service_weddings', desc: 'service_weddings_desc', link: '/weddings' },
    { icon: <Stethoscope size={32} />, title: 'service_medical', desc: 'service_medical_desc', link: '/medical' },
    { icon: <HomeIcon size={32} />, title: 'service_flood', desc: 'service_flood_desc', link: '/flood' },
    { icon: <Droplets size={32} />, title: 'service_water', desc: 'service_water_desc', link: '/water' },
    { icon: <BookOpen size={32} />, title: 'service_education', desc: 'service_education_desc', link: '/education' },
    { icon: <Users size={32} />, title: 'service_islamic', desc: 'service_islamic_desc', link: '/islamic' }
  ];

  const stats = [
    { num: 10, label: t('stat_lbl_weddings') + ' 2017' }, 
    { num: 15, label: t('stat_lbl_weddings') + ' 2018' }, 
    { num: 15, label: t('stat_lbl_weddings') + ' 2019' },
    { num: 15, label: t('stat_lbl_weddings') + ' 2020' }, 
    { num: 16, label: t('stat_lbl_weddings') + ' 2021' }, 
    { num: 21, label: t('stat_lbl_weddings') + ' 2022' },
    { num: 25, label: t('stat_lbl_weddings') + ' 2023' }, 
    { num: 27, label: t('stat_lbl_weddings') + ' 2024' }, 
    { num: 31, label: t('stat_lbl_weddings') + ' 2025' }
  ];

  const galleryItems = [
    { type: 'image', src: '/2026 weddings.jpeg' },
    { type: 'image', src: '/media news image.jpeg' },
    { type: 'video', src: '/universal news talking about ANF.mp4' },
    { type: 'image', src: '/medical camp image.jpeg' },
    { type: 'video', src: '/dsp giving interview on news about ANF.mp4' },
    { type: 'image', src: '/qura andazi pic.jpeg' },
    { type: 'image', src: '/pani sabeel.jpeg' },
    { type: 'image', src: '/hit list news.jpeg' },
    { type: 'video', src: '/jahez saman video.mp4' },
    { type: 'image', src: '/receipt 1.jpeg' },
    { type: 'image', src: '/kargardgi image.jpeg' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="page">
      <section className="hero home-hero">
        <div className="overlay"></div>
        <div className="container relative z-10">
          <motion.div className="hero-content" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
            <h1>{t('hero_title')}</h1>
            <h2>{t('hero_subtitle')}</h2>
            <p className="hero-desc">{t('hero_desc')}</p>
            <Link to="/donate" className="btn-primary" style={{ display: 'inline-block' }}>
              {t('btn_donate')}
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="about section-padding">
        <div className="container">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            style={{
              background: 'linear-gradient(135deg, #065F46 0%, #10B981 100%)',
              borderRadius: '1.5rem',
              padding: '3rem',
              color: 'white',
              boxShadow: '0 20px 25px -5px rgba(6, 95, 70, 0.2), 0 10px 10px -5px rgba(6, 95, 70, 0.1)',
              position: 'relative',
              overflow: 'hidden',
              marginBottom: '4rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}
          >
            <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '150px', height: '150px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(40px)' }}></div>
            <div style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: '150px', height: '150px', background: 'rgba(217, 119, 6, 0.3)', borderRadius: '50%', filter: 'blur(40px)' }}></div>
            
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem', position: 'relative', zIndex: 10 }}>
              Important Announcement
            </h2>
            <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 2rem', lineHeight: '1.8', opacity: 0.95, position: 'relative', zIndex: 10 }}>
              By the grace of Almighty Allah (Insha'Allah), the <strong>Al Noor Foundation</strong> is honored to announce that in <strong>2027</strong>, we will be arranging the marriages of <strong>40 deserving daughters</strong>. The estimated expenditure for this noble and momentous initiative is approximately <strong>10 Million PKR</strong>. We humbly invite you to join us in making this beautiful endeavor a reality.
            </p>
            
            <div style={{ 
              background: 'rgba(255,255,255,0.1)', 
              border: '1px solid rgba(255,255,255,0.2)',
              backdropFilter: 'blur(10px)',
              padding: '1rem 2.5rem', 
              borderRadius: '2rem',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '1rem',
              position: 'relative',
              zIndex: 10,
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              direction: 'ltr' /* Force Left-to-Right for contact details */
            }}>
              <span style={{ fontSize: '1.1rem', opacity: 0.9 }}>Contact:</span>
              <strong style={{ fontSize: '1.2rem', color: '#F59E0B' }}>Abdul Rauf</strong>
              <span style={{ opacity: 0.5, margin: '0 0.5rem' }}>|</span>
              <a href="tel:+923334469035" style={{ fontSize: '1.3rem', fontWeight: '700', letterSpacing: '1px', textDecoration: 'none', color: 'white' }} dir="ltr">+92 333 4469035</a>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
            <h2 className="section-title">{t('about_title')}</h2>
            <p className="about-text">{t('about_desc')}</p>
          </motion.div>
        </div>
      </section>

      <section className="services section-padding bg-light">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
            <h2 className="section-title">{t('services_title')}</h2>
            <div className="services-grid">
              {services.map((service, index) => (
                <Link to={service.link} key={index} className="service-card-link">
                  <motion.div className="service-card" variants={itemVariants}>
                    <div className="service-icon">{service.icon}</div>
                    <h3>{t(service.title)}</h3>
                    <p>{t(service.desc)}</p>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="stats section-padding">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
            <h2 className="section-title text-white">{t('stats_title')}</h2>
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <motion.div className="stat-item" key={index} variants={itemVariants}>
                  <h4>{stat.num}</h4>
                  <p>{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="gallery section-padding">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
            <h2 className="section-title">{t('gallery_title')}</h2>
            <div className="gallery-grid">
              {galleryItems.map((item, index) => (
                <motion.div className="gallery-item" key={index} variants={itemVariants}>
                  {item.type === 'image' ? (
                    <img src={item.src} alt="Gallery item" loading="lazy" />
                  ) : (
                    <video src={item.src} autoPlay loop muted playsInline controls={false} />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;
