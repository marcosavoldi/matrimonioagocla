import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import img1 from '../assets/images/img1.webp';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div style={{
      minHeight: 'auto', // Removed 100vh constraint to eliminate large gap at bottom
      height: 'auto', 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      textAlign: 'center',
      backgroundColor: 'var(--color-secondary)',
      padding: '1rem',
      paddingTop: '5rem', // Increased slightly from 3rem based on feedback
      position: 'relative',
      overflow: 'hidden'
    }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ zIndex: 10 }}
      >
        <h1 style={{
          fontSize: '3rem',
          color: 'var(--color-text)',
          marginBottom: '1rem'
        }}>
          Claudia & Simone
        </h1>
        <p style={{
          fontSize: '1.2rem',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          marginBottom: '2rem'
        }}>
          {t.heroDate}
        </p>
      </motion.div>

      {/* Main Photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        style={{
          width: '100%',
          maxWidth: '100%', // Full width
          height: 'auto', // Adapt to image height
          border: '1px solid var(--color-primary)',
          borderRadius: '4px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
          overflow: 'hidden'
        }}
      >
        <img 
          src={img1} 
          alt="Claudia & Simone" 
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </motion.div>


    </div>
  );
};

export default Hero;
