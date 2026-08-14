import React from 'react';
import { Trophy, Github, Linkedin, Mail, ArrowRight, Code, Award, Sparkles, Terminal } from 'lucide-react';
import TerminalGraphic from './TerminalGraphic';

export default function Hero() {
  return (
    <section id="about" className="section" style={{ paddingTop: '5rem', paddingBottom: '4rem' }}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '3.5rem',
        alignItems: 'center'
      }}>
        {/* Left Side: Professional Headline & Framing */}
        <div>
          {/* Hackathon Badge */}
          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
            <span className="badge amber" style={{ padding: '0.4rem 0.85rem', fontSize: '0.82rem' }}>
              <Trophy size={14} color="var(--accent-amber)" /> National Winner — Smart India Hackathon 2025
            </span>
            <span className="badge cyan" style={{ padding: '0.4rem 0.85rem', fontSize: '0.82rem' }}>
              <Sparkles size={14} /> B.Tech CSE (Data Science) • CGPA 8.94 / 10
            </span>
          </div>

          <h1 style={{
            fontSize: '3.25rem',
            lineHeight: 1.15,
            marginBottom: '1rem',
            fontFamily: 'var(--font-heading)',
            color: 'var(--text-primary)'
          }}>
            Hi, I'm <span style={{
              background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-blue))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Piyush Awadhiya</span>
          </h1>

          <p style={{
            fontSize: '1.15rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.65,
            marginBottom: '1.75rem',
            fontWeight: 400
          }}>
            Computer Science (Data Science) undergraduate with hands-on experience architecting production-grade REST APIs, CUDA-accelerated AI pipelines, and computer vision models using <strong>Java (Spring Boot)</strong>, <strong>Python (FastAPI, PyTorch)</strong>, and <strong>React</strong>.
          </p>

          {/* Key Highlights Quick Bullets */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '0.85rem',
            marginBottom: '2.25rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
              <span style={{ color: 'var(--accent-emerald)' }}>✓</span> 60% Latency Reduction (FastAPI + CUDA)
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
              <span style={{ color: 'var(--accent-emerald)' }}>✓</span> 40% DB Optimization (Spring Boot JPA)
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
              <span style={{ color: 'var(--accent-emerald)' }}>✓</span> 200+ Solved DSA (Java LeetCode)
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
              <span style={{ color: 'var(--accent-emerald)' }}>✓</span> HackerRank SQL 4-Star
            </div>
          </div>

          {/* Call to Actions & Social Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a 
              href="#projects" 
              style={{
                background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-blue))',
                color: '#ffffff',
                padding: '0.75rem 1.6rem',
                borderRadius: '12px',
                fontWeight: 600,
                fontSize: '0.95rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 4px 16px rgba(56, 189, 248, 0.3)',
                transition: 'transform var(--transition-fast)'
              }}
              onMouseOver={e=>e.currentTarget.style.transform='translateY(-2px)'}
              onMouseOut={e=>e.currentTarget.style.transform='translateY(0)'}
            >
              View Projects <ArrowRight size={16} />
            </a>

            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer"
              style={{
                background: 'var(--bg-tertiary)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-primary)',
                padding: '0.75rem 1.2rem',
                borderRadius: '12px',
                fontWeight: 600,
                fontSize: '0.95rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all var(--transition-fast)'
              }}
            >
              <Github size={18} /> GitHub
            </a>

            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer"
              style={{
                background: 'var(--bg-tertiary)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-primary)',
                padding: '0.75rem 1.2rem',
                borderRadius: '12px',
                fontWeight: 600,
                fontSize: '0.95rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all var(--transition-fast)'
              }}
            >
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </div>

        {/* Right Side: Code Graphic Mockup */}
        <div>
          <TerminalGraphic />
        </div>
      </div>
    </section>
  );
}
