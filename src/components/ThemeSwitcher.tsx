import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeSwitcher: React.FC = () => {
  const { 
    currentFontPair, 
    setFontPair, 
    fontOptions, 
    currentPalette, 
    setPalette, 
    paletteOptions 
  } = useTheme();
  
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        style={{
          position: 'absolute',
          top: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 9999,
          padding: '0.5rem 1rem',
          backgroundColor: 'rgba(0,0,0,0.8)',
          color: 'white',
          border: 'none',
          borderRadius: '20px',
          fontSize: '0.8rem',
          cursor: 'pointer'
        }}
      >
        🎨 Personalizza Tema
      </button>
    );
  }

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      zIndex: 9999,
      padding: '1rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      borderBottom: '1px solid #eee'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px',
        width: '100%',
        margin: '0 auto'
      }}>
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Personalizzazione Tema</h3>
        <button 
          onClick={() => setIsOpen(false)}
          style={{
            background: 'none',
            border: 'none',
            fontSize: '1.2rem',
            cursor: 'pointer'
          }}
        >
          ✕
        </button>
      </div>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2rem',
        justifyContent: 'center',
        maxWidth: '1200px',
        width: '100%',
        margin: '0 auto'
      }}>
        {/* Font Selection */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', minWidth: '200px' }}>
          <label style={{ fontSize: '0.8rem', fontWeight: 600, color: '#666' }}>FONT PAIRING</label>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {fontOptions.map((font) => (
              <button
                key={font.id}
                onClick={() => setFontPair(font)}
                style={{
                  padding: '0.5rem',
                  border: currentFontPair.id === font.id ? '2px solid #333' : '1px solid #ddd',
                  backgroundColor: currentFontPair.id === font.id ? '#f0f0f0' : 'white',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '0.8rem',
                  flex: 1,
                  minWidth: '80px'
                }}
              >
                {font.name}
              </button>
            ))}
          </div>
        </div>

        {/* Palette Selection */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', minWidth: '200px' }}>
          <label style={{ fontSize: '0.8rem', fontWeight: 600, color: '#666' }}>COLOR PALETTE</label>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {paletteOptions.map((palette) => (
              <button
                key={palette.id}
                onClick={() => setPalette(palette)}
                style={{
                  padding: '0.5rem',
                  border: currentPalette.id === palette.id ? '2px solid #333' : '1px solid #ddd',
                  backgroundColor: 'white',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.8rem'
                }}
              >
                <div style={{ display: 'flex', gap: '2px' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: palette.colors.primary }}></div>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: palette.colors.secondary, border: '1px solid #eee' }}></div>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: palette.colors.headingColor }}></div>
                </div>
                {palette.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
