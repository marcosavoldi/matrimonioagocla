import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import RSVPForm from './components/RSVPForm';
import Admin from './pages/Admin';
import { motion, AnimatePresence } from 'framer-motion';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import LanguageSelector from './components/LanguageSelector';
import { FaMapMarkerAlt } from 'react-icons/fa'; // Ensure react-icons is installed

function PhotoPlaceholder({ label }: { label: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      style={{ 
        width: '100%', 
        maxWidth: '800px', 
        height: '400px', 
        backgroundColor: '#eee', 
        borderRadius: '8px', 
        display: 'grid', 
        placeItems: 'center', 
        color: '#888',
        margin: '2rem auto' 
      }}
    >
      {label}
    </motion.div>
  );
}

function Home() {
  const { t, hasSelectedLanguage } = useLanguage();

  const openMap = (query: string) => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`, '_blank');
  };

  const buttonStyle: React.CSSProperties = {
     marginTop: '1rem',
     padding: '0.8rem 1.5rem',
     backgroundColor: 'white',
     color: 'var(--color-primary)',
     border: '1px solid var(--color-primary)',
     borderRadius: '50px',
     cursor: 'pointer',
     display: 'inline-flex',
     alignItems: 'center',
     gap: '0.5rem',
     fontSize: '0.9rem',
     fontWeight: 'bold',
     boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
     transition: 'transform 0.2s',
  };

  return (
    <Layout>
      <AnimatePresence>
        {!hasSelectedLanguage && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{ position: 'fixed', inset: 0, zIndex: 9999 }}
          >
            <LanguageSelector />
          </motion.div>
        )}
      </AnimatePresence>

      <Hero />
      
      {/* Intro */}
      <InfoSection>
        <p>{t.introText}</p>
        <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>{t.confirmBy}</p>
      </InfoSection>

      {/* Photo 1 (after Hero) */}
      <div className="container" style={{ padding: '0 1rem' }}>
        <PhotoPlaceholder label="FOTO 2 📸" />
      </div>

      {/* No Kids Policy */}
      <InfoSection title={t.importantTitle} bgColor="var(--color-secondary)" delay={0.2}>
        <p>{t.noKidsPolicy}</p>
      </InfoSection>

      {/* Photo 2 */}
      <div className="container" style={{ padding: '0 1rem' }}>
        <PhotoPlaceholder label="FOTO 3 📸" />
      </div>

      {/* Registry */}
      <InfoSection title={t.giftTitle} delay={0.2}>
        <p>{t.giftText}</p>
        <div style={{ marginTop: '2rem', padding: '2rem', border: '1px solid var(--color-primary)', borderRadius: '8px', display: 'inline-block' }}>
          <p><strong>{t.ibanLabel}:</strong> IT 35 V 05387 24204 000002538668</p>
          <p style={{ marginTop: '0.5rem' }}><strong>{t.holderLabel}:</strong> DEDA CLAUDIA</p>
        </div>
      </InfoSection>

      {/* Photo 3 */}
      <div className="container" style={{ padding: '0 1rem' }}>
        <PhotoPlaceholder label="FOTO 4 📸" />
      </div>

      {/* Ceremony & Reception */}
      <InfoSection title="Dove & Quando 📍" bgColor="var(--color-secondary)" delay={0.2}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {/* Ceremony */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3>{t.ceremonyTitle}</h3>
            <p style={{ fontSize: '1.2rem', marginTop: '0.5rem', fontWeight: 'bold' }}>Ore 16:00</p>
            <p style={{ marginTop: '0.5rem' }}>{t.ceremonyPlace}</p>
            <p>Piazza Santo Amato Ronconi, 47835 Saludecio (RN)</p>
            
            <motion.button 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              onClick={() => openMap('Chiesa Parrocchiale di San Biagio Saludecio')}
              style={buttonStyle}
            >
              <FaMapMarkerAlt /> {t.mapsButton}
            </motion.button>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid var(--color-primary)', width: '50%', margin: '0 auto' }} />
          
          {/* Reception */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3>{t.receptionTitle}</h3>
            <p style={{ fontSize: '1.2rem', marginTop: '0.5rem', fontWeight: 'bold' }}>{t.follow}</p>
            <p style={{ marginTop: '0.5rem' }}>{t.receptionPlace}</p>
            
             <motion.button 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              onClick={() => openMap('Villa i Tramonti Saludecio')}
              style={buttonStyle}
            >
              <FaMapMarkerAlt /> {t.mapsButton}
            </motion.button>
          </div>
        </div>
      </InfoSection>

      {/* Photos 4 & 5 side by side */}
      <div className="container" style={{ padding: '1rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
         <PhotoPlaceholder label="FOTO 5 📸" />
         <PhotoPlaceholder label="FOTO 6 📸" />
      </div>

       {/* Contacts */}
       <InfoSection title={t.contactsTitle}>
        <p>{t.contactsText}</p>
        <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
          <div style={{ textAlign: 'center' }}>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Claudia</h4>
            <p style={{ marginBottom: '0.3rem' }}>
              <a href="mailto:claudiadeda106@gmail.com?subject=Richiesta%20informazioni%20Matrimonio%20Claudia%26Simone" style={{ textDecoration: 'underline' }}>
                claudiadeda106@gmail.com
              </a>
            </p>
            <p>
              <a href="tel:+393319460762" style={{ textDecoration: 'none' }}>+39 331 946 0762</a>
            </p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Simone</h4>
            <p>
              <a href="tel:+393665351245" style={{ textDecoration: 'none' }}>+39 366 535 1245</a>
            </p>
          </div>
        </div>
      </InfoSection>

      {/* RSVP at the end */}
      <RSVPForm />
    </Layout>
  );
}

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
