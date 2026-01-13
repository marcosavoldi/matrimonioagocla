import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const LanguageSelector: React.FC = () => {
  const { setLanguage, completeSelection } = useLanguage();

  const handleSelect = (lang: 'it' | 'sq') => {
    setLanguage(lang);
    completeSelection();
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'var(--color-bg)',
      zIndex: 1000,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '2rem'
    }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary)', fontSize: '2.5rem', textAlign: 'center' }}>
          Benvenuti / Mirë se vini
        </h1>
        <p style={{ textAlign: 'center', marginTop: '1rem', color: '#666' }}>Seleziona la lingua / Zgjidhni gjuhën</p>
      </motion.div>

      <div style={{ display: 'flex', gap: '3rem' }}>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleSelect('it')}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <span style={{ fontSize: '4rem' }}>🇮🇹</span>
          <span style={{ fontFamily: 'var(--font-body)', fontWeight: 'bold' }}>ITALIANO</span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleSelect('sq')}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <span style={{ fontSize: '4rem' }}>🇦🇱</span>
          <span style={{ fontFamily: 'var(--font-body)', fontWeight: 'bold' }}>SHQIP</span>
        </motion.button>
      </div>
    </div>
  );
};

export default LanguageSelector;
