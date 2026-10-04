import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

function AnnouncementPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the popup has been shown in this session
    const hasSeenPopup = sessionStorage.getItem('hasSeenAnnouncement');
    if (!hasSeenPopup) {
      // Small delay to allow the site to load first
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('hasSeenAnnouncement', 'true');
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, width: '100%', height: '100%',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
          backgroundColor: 'rgba(15, 23, 42, 0.75)',
          backdropFilter: 'blur(5px)'
        }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
              borderRadius: '1.5rem',
              width: '100%',
              maxWidth: '550px',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
            }}
          >
            {/* Top decorative bar */}
            <div style={{ height: '6px', background: 'linear-gradient(90deg, var(--primary), var(--secondary))', width: '100%' }}></div>
            
            <button 
              onClick={() => setIsOpen(false)}
              style={{
                position: 'absolute', top: '15px', right: '15px',
                background: 'rgba(0,0,0,0.05)', border: 'none',
                width: '36px', height: '36px', borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', color: 'var(--text-dark)',
                transition: 'background 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.1)'}
              onMouseOut={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.05)'}
            >
              <X size={20} />
            </button>

            <div style={{ padding: '2.5rem 2rem', textAlign: 'center' }}>
              <div style={{ 
                width: '64px', height: '64px', margin: '0 auto 1.5rem', 
                background: 'rgba(16, 185, 129, 0.1)', color: 'var(--primary)',
                borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <Heart size={32} />
              </div>
              
              <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--text-dark)', marginBottom: '1rem', lineHeight: '1.3' }}>
                Mega Marriage Project 2027
              </h2>
              
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                By the grace of Almighty Allah, Al Noor Foundation is arranging the marriages of <strong>40 deserving daughters</strong> in 2027.
              </p>
              
              <div style={{ 
                background: 'rgba(217, 119, 6, 0.1)', border: '1px solid rgba(217, 119, 6, 0.2)',
                padding: '1rem', borderRadius: '1rem', marginBottom: '1.5rem'
              }}>
                <p style={{ fontSize: '1.1rem', color: 'var(--secondary)', fontWeight: '700', margin: 0 }}>
                  Estimated Cost: 10 Million PKR
                </p>
              </div>

              <p style={{ fontSize: '1rem', color: 'var(--text-dark)', marginBottom: '1.5rem' }}>
                We humbly invite you to join us in making this beautiful endeavor a reality.
              </p>

              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem',
                background: 'var(--primary)', color: 'white', padding: '1rem', borderRadius: '1rem',
                marginBottom: '1.5rem', boxShadow: '0 4px 10px rgba(6, 95, 70, 0.2)'
              }}>
                <PhoneCall size={20} />
                <span style={{ fontSize: '1.1rem' }}>Contact <strong>Abdul Rauf</strong>:</span>
                <a href="tel:+923334469035" style={{ fontSize: '1.2rem', fontWeight: '800', color: 'white', textDecoration: 'none' }}>
                  +92 333 4469035
                </a>
              </div>

              <Link to="/donate" onClick={() => setIsOpen(false)} style={{
                display: 'inline-block', color: 'var(--primary)', fontWeight: '600',
                textDecoration: 'underline', textUnderlineOffset: '4px'
              }}>
                Learn how to donate
              </Link>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default AnnouncementPopup;
