import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      backgroundColor: 'var(--color-secondary)',
      padding: '1rem',
      paddingTop: '6rem', // Added extra top padding for mobile flags clearance
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

      {/* Main Photo Placeholder */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        style={{
          width: '100%',
          maxWidth: '600px',
          height: '500px', // Taller for portrait elegance
          backgroundColor: '#f4f4f4',
          border: '1px solid var(--color-primary)',
          borderRadius: '4px', // Less rounded
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
          objectFit: 'cover'
        }}
      >
        <span style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-heading)', fontSize: '1.2rem', letterSpacing: '0.1em' }}>FOTO SPOSI</span>
      </motion.div>


    </div>
  );
};

export default Hero;
