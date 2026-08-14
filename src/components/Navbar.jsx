import React from 'react';
import { Sun, Moon, FileDown, Terminal, Award } from 'lucide-react';

export default function Navbar({ theme, toggleTheme }) {
  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'var(--bg-card)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--border-color)',
      padding: '1rem 0'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Brand Logo */}
        <a href="#" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          fontFamily: 'var(--font-heading)',
          fontWeight: 800,
          fontSize: '1.2rem',
          color: 'var(--text-primary)'
        }}>
          <span style={{
            background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-blue))',
            color: '#fff',
            width: '34px',
            height: '34px',
            borderRadius: '10px',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.95rem',
            fontWeight: 800
          }}>
            PA
          </span>
          <span>Piyush<span style={{ color: 'var(--accent-cyan)' }}>.dev</span></span>
        </a>

        {/* Desktop Nav Links */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
          fontSize: '0.92rem',
          fontWeight: 500,
          color: 'var(--text-secondary)'
        }}>
          <a href="#about" style={{ transition: 'color var(--transition-fast)' }} onMouseOver={e=>e.target.style.color='var(--accent-cyan)'} onMouseOut={e=>e.target.style.color='var(--text-secondary)'}>About</a>
          <a href="#skills" style={{ transition: 'color var(--transition-fast)' }} onMouseOver={e=>e.target.style.color='var(--accent-cyan)'} onMouseOut={e=>e.target.style.color='var(--text-secondary)'}>Skills</a>
          <a href="#projects" style={{ transition: 'color var(--transition-fast)' }} onMouseOver={e=>e.target.style.color='var(--accent-cyan)'} onMouseOut={e=>e.target.style.color='var(--text-secondary)'}>Projects</a>
          <a href="#experience" style={{ transition: 'color var(--transition-fast)' }} onMouseOver={e=>e.target.style.color='var(--accent-cyan)'} onMouseOut={e=>e.target.style.color='var(--text-secondary)'}>Timeline</a>
          <a href="#certifications" style={{ transition: 'color var(--transition-fast)' }} onMouseOver={e=>e.target.style.color='var(--accent-cyan)'} onMouseOut={e=>e.target.style.color='var(--text-secondary)'}>Certifications</a>
        </div>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          {/* Theme Switcher Button */}
          <button 
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            style={{
              background: 'var(--bg-tertiary)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-primary)',
              padding: '0.5rem',
              borderRadius: '10px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all var(--transition-fast)'
            }}
          >
            {theme === 'dark' ? <Sun size={18} color="var(--accent-amber)" /> : <Moon size={18} color="var(--accent-indigo)" />}
          </button>

          {/* Quick Contact CTA */}
          <a 
            href="#contact" 
            className="badge cyan"
            style={{
              padding: '0.55rem 1.1rem',
              borderRadius: '10px',
              fontSize: '0.88rem',
              textDecoration: 'none',
              fontWeight: 600
            }}
          >
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  );
}
