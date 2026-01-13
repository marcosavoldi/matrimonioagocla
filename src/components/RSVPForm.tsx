import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useLanguage } from '../context/LanguageContext';

const RSVPForm: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    intolerances: '',
    notes: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName) {
      // alert("Inserisci Nome e Cognome"); // Could translate this too if strictly needed, but HTML5 'required' handles most
      return;
    }

    setStatus('submitting');
    try {
      await addDoc(collection(db, "rsvps"), {
        ...formData,
        timestamp: serverTimestamp()
      });
      setStatus('success');
      setFormData({ firstName: '', lastName: '', intolerances: '', notes: '' });
    } catch (error) {
      console.error("Error adding document: ", error);
      setStatus('error');
    }
  };

  return (
    <div className="section-padding" style={{ backgroundColor: 'var(--color-secondary)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--color-primary)' }}>{t.rsvpTitle}</h2>
          
          {status === 'success' ? (
            <div style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#d4edda', color: '#155724', borderRadius: '8px' }}>
              <h3>{t.rsvpSuccessTitle}</h3>
              <p>{t.rsvpSuccessText}</p>
              <button onClick={() => setStatus('idle')} style={{ marginTop: '1rem', padding: '0.5rem 1rem', background: 'transparent', border: '1px solid currentColor', cursor: 'pointer' }}>{t.rsvpAnother}</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <input
                  type="text"
                  name="firstName"
                  placeholder={t.name + " *"}
                  value={formData.firstName}
                  onChange={handleChange}
                  style={inputStyle}
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder={t.surname + " *"}
                  value={formData.lastName}
                  onChange={handleChange}
                  style={inputStyle}
                  required
                />
              </div>

              <textarea
                name="intolerances"
                placeholder={t.intolerances}
                value={formData.intolerances}
                onChange={handleChange}
                style={{ ...inputStyle, minHeight: '100px' }}
              />

              <textarea
                name="notes"
                placeholder={t.notes}
                value={formData.notes}
                onChange={handleChange}
                style={{ ...inputStyle, minHeight: '100px' }}
              />

              {status === 'error' && <p style={{ color: 'red', textAlign: 'center' }}>{t.error}</p>}

              <button
                type="submit"
                disabled={status === 'submitting'}
                style={{
                  padding: '1rem',
                  backgroundColor: 'var(--color-primary)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: '1.1rem',
                  cursor: status === 'submitting' ? 'wait' : 'pointer',
                  transition: 'background-color 0.3s'
                }}
              >
                {status === 'submitting' ? t.submitting : t.submit}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '1rem',
  border: '1px solid #ddd',
  borderRadius: '4px',
  fontFamily: 'inherit',
  fontSize: '1rem',
  backgroundColor: 'white'
};

export default RSVPForm;
