import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FaKey } from 'react-icons/fa';
import AdminModal from './AdminModal';


interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { setLanguage, language } = useLanguage();
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleKeyClick = () => {
    const newCount = clickCount + 1;
    if (newCount === 5) {
      setShowAdminModal(true);
      setClickCount(0);
    } else {
      setClickCount(newCount);
      // Reset count after 2 seconds if not reached 5
      setTimeout(() => setClickCount(0), 2000);
    }
  };

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
        marginTop: '4rem',
        position: 'relative' // Needed for absolute positioning of key
      }}>
        <p>© 2026 Claudia & Simone</p>
        <p style={{fontSize: '0.8rem', marginTop: '0.5rem'}}>Created with ❤️</p>
        
        {/* Admin Key */}
        <div 
          onClick={handleKeyClick}
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '2rem',
            opacity: 0.3,
            cursor: 'pointer',
            fontSize: '0.8rem'
          }}
        >
          <FaKey />
        </div>
      </footer>

      {/* Admin Modal */}
      <AdminModal isOpen={showAdminModal} onClose={() => setShowAdminModal(false)} />
    </div>
  );
};

export default Layout;
