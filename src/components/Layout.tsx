import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { setLanguage, language } = useLanguage();

  return (
    <div className="layout">
      {/* Header with Language Switcher */}
      <header style={{
        position: 'absolute',
        top: 0,
        right: 0,
        padding: '2rem', // Increased padding
        zIndex: 50,
        display: 'flex',
        gap: '1rem'
      }}>
        <button 
          onClick={() => setLanguage('it')}
          style={{ 
            background: 'none', 
            border: 'none', 
            opacity: language === 'it' ? 1 : 0.5,
            fontSize: '1.5rem',
            transition: 'opacity 0.3s'
          }}
        >
          🇮🇹
        </button>
        <button 
          onClick={() => setLanguage('sq')}
          style={{ 
            background: 'none', 
            border: 'none', 
            opacity: language === 'sq' ? 1 : 0.5,
            fontSize: '1.5rem',
            transition: 'opacity 0.3s'
          }}
        >
          🇦🇱
        </button>
      </header>
      
      <main>
        {children}
      </main>

      <footer style={{
        backgroundColor: 'var(--color-primary)',
        color: 'white',
        padding: '2rem',
        textAlign: 'center',
        marginTop: '4rem'
      }}>
        <p>© 2026 Claudia & Simone</p>
        <p style={{fontSize: '0.8rem', marginTop: '0.5rem'}}>Created with ❤️</p>
      </footer>
    </div>
  );
};

export default Layout;
