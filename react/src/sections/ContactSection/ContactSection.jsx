import React, { useState, useEffect } from 'react';
import styles from './ContactSection.module.css';

// Firebase Imports (assuming these are available in your React environment setup)
import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, addDoc, setLogLevel } from 'firebase/firestore';
import ContactImage from '@/assets/HeroImage.svg';

const firebaseConfigString = import.meta.env.VITE_FIREBASE_CONFIG;
const firebaseAppID = import.meta.env.VITE_APP_ID;

const ContactSection = () => {
    // Form State
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    
    // Status State (for feedback messages)
    const [status, setStatus] = useState('ready'); // ready | loading | success | error

    // Firebase instances
    const [db, setDb] = useState(null);
    const [auth, setAuth] = useState(null);

    // --- 1. FIREBASE INITIALIZATION AND AUTHENTICATION ---
    useEffect(() => {
      (async () => {
        try {
          setLogLevel('debug');

          const firebaseConfig = {
            apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
            authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
            projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
            storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
            messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
            appId: import.meta.env.VITE_FIREBASE_APP_ID,
            measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
          };

          const app = initializeApp(firebaseConfig);
          const firestore = getFirestore(app);
          const authInstance = getAuth(app);

          setDb(firestore);
          setAuth(authInstance);

          // Authentication logic
          if (window.__initial_auth_token) {
            await signInWithCustomToken(authInstance, window.__initial_auth_token);
          } else {
            await signInAnonymously(authInstance);
          }

          // Wait for real user object
          onAuthStateChanged(authInstance, (user) => {
            if (user) {
              console.log("Auth ready, UID:", user.uid);
              setStatus("ready");
            }
          });

        } catch (e) {
          console.error("Firebase initialization failed:", e);
          setStatus('error: Initialization failure.');
        }
      })();
    }, []);

    // --- 2. SUBMISSION LOGIC ---
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (status === 'loading') return;
        if (!db || !auth || !auth.currentUser) {
            setStatus('error: Database not ready.');
            return;
        }

        if (!name || !email || !message) {
            setStatus('error: Please fill in all fields.');
            return;
        }

        setStatus('loading');
        
        const appId = import.meta.env.VITE_APP_ID;

        const userId = auth.currentUser.uid;
        
        const collectionPath = `/artifacts/${appId}/users/${userId}/messages`;

        const contactData = {
            name: name,
            email: email,
            message: message,
            timestamp: new Date().toISOString(),
        };

        try {
            const docRef = await addDoc(collection(db, collectionPath), contactData);
            console.log("Document successfully written with ID: ", docRef.id);
            
            setStatus('success');
            // Clear form fields after success
            setName('');
            setEmail('');
            setMessage('');
            
        } catch (e) {
            console.error("Error adding document: ", e);
            setStatus('error: Failed to send message.');
        }
    };

    // --- 3. RENDER UI ---
    return (
        <section id="contact" className={`${styles.contactSection} section-full-height`}>
            <div className={styles.contactContainer}>
                <h2>Contact Me</h2>
                <p>I am currently available for new opportunities. Feel free to reach out directly via this form, and I will get back to you as soon as possible.</p>
                
                <form className={styles.contactForm} onSubmit={handleSubmit}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            disabled={status === 'loading'}
                            required
                        />
                    </div>
                    
                    <div className={styles.inputGroup}>
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            disabled={status === 'loading'}
                            required
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="message">Message</label>
                        <textarea 
                            id="message" 
                            rows="5" 
                            value={message} 
                            onChange={(e) => setMessage(e.target.value)} 
                            disabled={status === 'loading'}
                            required
                        ></textarea>
                    </div>

                    <button 
                        type="submit" 
                        className={styles.submitButton} 
                        disabled={status === 'loading'}
                    >
                        {status === 'loading' ? 'Sending...' : 'Send Message'}
                    </button>
                    
                    {/* Status Feedback */}
                    {status === 'success' && <p className={styles.statusSuccess}>Message sent successfully!</p>}
                    {status.startsWith('error') && <p className={styles.statusError}>Error: {status.split(': ')[1]}</p>}
                    <p className={styles.note}>
                        Note: Messages are saved privately to your Firestore database.
                    </p>
                </form>
            </div>
            <div className={styles.contactSectionImage}>
                <img className={styles.contactImage} src= {ContactImage} alt="" />
            </div>
        </section>
    );
};

export default ContactSection;