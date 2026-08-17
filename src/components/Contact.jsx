import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Send, Github, Linkedin, MessageSquare, Terminal } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('piyushawadhiya7@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Vercel/Netlify forms or simple email prompt redirection
    window.location.href = `mailto:piyushawadhiya7@gmail.com?subject=Portfolio Reachout from ${formData.name}&body=${encodeURIComponent(formData.message)} (From: ${formData.email})`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Mail size={14} /> Get In Touch
          </span>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            I am actively seeking internship opportunities in software engineering, backend systems, and AI/ML pipelines. Reach out via email or submit a quick message below.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          alignItems: 'start'
        }}>
          {/* Left Column: Direct Info */}
          <div>
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Direct Contact</h3>
              
              {/* Email Copy Card */}
              <div 
                onClick={copyEmail}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '12px',
                  padding: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)',
                  marginBottom: '1rem'
                }}
                onMouseOver={e => e.currentTarget.style.borderColor = 'var(--accent-cyan)'}
                onMouseOut={e => e.currentTarget.style.borderColor = 'var(--border-color)'}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Mail size={20} color="var(--accent-cyan)" />
                  <div>
                    <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)' }}>EMAIL ME</span>
                    <span style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>piyushawadhiya7@gmail.com</span>
                  </div>
                </div>
                <button style={{ background: 'transparent', color: 'var(--text-secondary)' }}>
                  {copied ? <Check size={18} color="var(--accent-emerald)" /> : <Copy size={18} />}
                </button>
              </div>

              {/* Call Card */}
              <div style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: '12px',
                padding: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1rem'
              }}>
                <Phone size={20} color="var(--accent-cyan)" />
                <div>
                  <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)' }}>CALL ME</span>
                  <span style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>+91 6265667288</span>
                </div>
              </div>

              {/* Location Card */}
              <div style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: '12px',
                padding: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}>
                <MapPin size={20} color="var(--accent-cyan)" />
                <div>
                  <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)' }}>LOCATION</span>
                  <span style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-primary)' }}>Bengaluru, Karnataka</span>
                </div>
              </div>
            </div>

            {/* Socials & Coding Profiles */}
            <div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Coding & Professional Profiles</h3>
              <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
                <a 
                  href="https://github.com/blazestrom" 
                  target="_blank" 
                  rel="noreferrer"
                  className="badge cyan"
                  style={{ padding: '0.5rem 0.85rem' }}
                >
                  <Github size={14} /> GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/piyush-awadhiya" 
                  target="_blank" 
                  rel="noreferrer"
                  className="badge cyan"
                  style={{ padding: '0.5rem 0.85rem' }}
                >
                  <Linkedin size={14} /> LinkedIn
                </a>
                <a 
                  href="https://leetcode.com/u/blazestrome/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="badge"
                  style={{ padding: '0.5rem 0.85rem' }}
                >
                  LeetCode (200+ Java)
                </a>
                <a 
                  href="https://hackerrank.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="badge"
                  style={{ padding: '0.5rem 0.85rem' }}
                >
                  HackerRank SQL 4★
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <form 
            onSubmit={handleSubmit}
            className="card"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem'
            }}
          >
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '0.4rem', fontWeight: 600 }}>Your Name</label>
              <input 
                type="text" 
                required
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                style={{
                  width: '100%',
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '8px',
                  padding: '0.75rem',
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-body)'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '0.4rem', fontWeight: 600 }}>Your Email</label>
              <input 
                type="email" 
                required
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                style={{
                  width: '100%',
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '8px',
                  padding: '0.75rem',
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-body)'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '0.4rem', fontWeight: 600 }}>Message</label>
              <textarea 
                required
                rows="4"
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                style={{
                  width: '100%',
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '8px',
                  padding: '0.75rem',
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-body)',
                  resize: 'none'
                }}
              />
            </div>

            <button 
              type="submit"
              style={{
                background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-blue))',
                color: '#ffffff',
                padding: '0.75rem',
                borderRadius: '8px',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                fontSize: '0.92rem',
                boxShadow: '0 4px 12px rgba(56, 189, 248, 0.25)',
                transition: 'transform var(--transition-fast)'
              }}
              onMouseOver={e=>e.currentTarget.style.transform='translateY(-2px)'}
              onMouseOut={e=>e.currentTarget.style.transform='translateY(0)'}
            >
              <Send size={16} /> Send Message
            </button>

            {submitted && (
              <span style={{ fontSize: '0.82rem', color: 'var(--accent-emerald)', textAlign: 'center', fontWeight: 600 }}>
                Form ready! Redirecting to mail client...
              </span>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
