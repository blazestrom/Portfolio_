import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

export default function App() {
  const [theme, setTheme] = useState('dark');

  // Sync theme attribute on document root
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Dynamic Background Blur Graphic Blobs */}
      <div style={{
        position: 'absolute',
        top: '15%',
        right: '5%',
        width: '350px',
        height: '350px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, transparent 70%)',
        filter: 'blur(40px)',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>
      <div style={{
        position: 'absolute',
        top: '60%',
        left: '2%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.05) 0%, transparent 70%)',
        filter: 'blur(50px)',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>

      {/* Global Navbar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Timeline />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <footer style={{
        padding: '3rem 0',
        borderTop: '1px solid var(--border-color)',
        textAlign: 'center',
        background: 'var(--bg-secondary)',
        fontSize: '0.85rem',
        color: 'var(--text-muted)'
      }}>
        <div className="container">
          <p style={{ marginBottom: '0.5rem' }}>
            © {new Date().getFullYear()} Piyush Awadhiya. Designed & built from scratch.
          </p>
          <p style={{ fontSize: '0.75rem' }}>
            Optimized for production and deployed on Vercel / Netlify.
          </p>
        </div>
      </footer>
    </div>
  );
}
