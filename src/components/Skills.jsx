import React, { useState } from 'react';
import { Code2, Server, Brain, Database, Wrench, Layers } from 'lucide-react';

const skillCategories = [
  { id: 'all', label: 'All Tech' },
  { id: 'backend', label: 'Backend Development' },
  { id: 'ai', label: 'Machine Learning & AI' },
  { id: 'languages', label: 'Languages & DBs' },
  { id: 'tools', label: 'Tools & Core CS' }
];

const skills = [
  // Languages
  { name: 'Java', category: 'languages', icon: '☕', highlight: 'Spring Boot Ecosystem' },
  { name: 'Python', category: 'languages', icon: '🐍', highlight: 'AI & Data Analysis' },
  { name: 'SQL', category: 'languages', icon: '📊', highlight: 'HackerRank 4-Star' },
  { name: 'JavaScript', category: 'languages', icon: '⚡', highlight: 'React & Browser APIs' },

  // Backend
  { name: 'Spring Boot', category: 'backend', icon: '🌱', highlight: 'Production REST APIs' },
  { name: 'Spring Security', category: 'backend', icon: '🔒', highlight: 'JWT & RBAC' },
  { name: 'Spring Data JPA', category: 'backend', icon: '⚡', highlight: 'N+1 Bottleneck Resolving' },
  { name: 'FastAPI', category: 'backend', icon: '🚀', highlight: 'Asynchronous Audio Pipelines' },
  { name: 'Flask', category: 'backend', icon: '🌶️', highlight: 'REST Services' },

  // ML & AI
  { name: 'PyTorch', category: 'ai', icon: '🔥', highlight: 'Deep Learning Models' },
  { name: 'OpenAI Whisper', category: 'ai', icon: '🎙️', highlight: 'CUDA Speech-to-Text' },
  { name: 'YOLOv8', category: 'ai', icon: '👁️', highlight: '31K+ Image Road Dataset' },
  { name: 'InsightFace', category: 'ai', icon: '👤', highlight: 'ArcFace + RetinaFace' },
  { name: 'Scikit-Learn', category: 'ai', icon: '🤖', highlight: 'ML Algorithms' },
  { name: 'OpenCV', category: 'ai', icon: '📷', highlight: 'Computer Vision Streams' },

  // Databases
  { name: 'PostgreSQL', category: 'languages', icon: '🐘', highlight: 'Composite Indexing & Tuning' },
  { name: 'MySQL', category: 'languages', icon: '🐬', highlight: 'Normalized Relational Schemas' },
  { name: 'SQLite', category: 'languages', icon: '📦', highlight: 'Embedding Caching <10s' },
  { name: 'MongoDB', category: 'languages', icon: '🍃', highlight: 'Document Stores' },

  // Tools & Core CS
  { name: 'Docker', category: 'tools', icon: '🐳', highlight: 'Containerization' },
  { name: 'Git & GitHub', category: 'tools', icon: '🐙', highlight: 'Version Control' },
  { name: 'Postman', category: 'tools', icon: '📬', highlight: 'API Testing & Validation' },
  { name: 'Data Structures & Algo', category: 'tools', icon: '🧩', highlight: '200+ LeetCode Solved' },
  { name: 'DBMS & Operating Systems', category: 'tools', icon: '💻', highlight: 'Core CS Foundations' }
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Layers size={14} /> Technical Expertise
          </span>
          <h2 className="section-title">Skills & Capabilities</h2>
          <p className="section-subtitle">
            A comprehensive overview of my technical toolkit across full-stack engineering, machine learning architectures, and databases.
          </p>
        </div>

        {/* Skill Filter Buttons */}
        <div style={{
          display: 'flex',
          gap: '0.65rem',
          flexWrap: 'wrap',
          marginBottom: '2.5rem'
        }}>
          {skillCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                background: activeCategory === cat.id ? 'var(--accent-cyan)' : 'var(--bg-card)',
                color: activeCategory === cat.id ? '#090a0f' : 'var(--text-secondary)',
                border: '1px solid ' + (activeCategory === cat.id ? 'var(--accent-cyan)' : 'var(--border-color)'),
                padding: '0.55rem 1.15rem',
                borderRadius: '10px',
                fontSize: '0.88rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all var(--transition-fast)'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '1.25rem'
        }}>
          {filteredSkills.map((skill, idx) => (
            <div key={idx} className="card" style={{ padding: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.6rem' }}>
                <span style={{ fontSize: '1.4rem' }}>{skill.icon}</span>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-primary)' }}>{skill.name}</h3>
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                {skill.highlight}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
