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
  { name: 'Java', category: 'languages', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg', highlight: 'Spring Boot Ecosystem' },
  { name: 'Python', category: 'languages', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', highlight: 'AI & Data Analysis' },
  { name: 'SQL', category: 'languages', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg', highlight: 'HackerRank 4-Star' },
  { name: 'JavaScript', category: 'languages', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', highlight: 'React & Browser APIs' },

  // Backend
  { name: 'Spring Boot', category: 'backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg', highlight: 'Production REST APIs' },
  { name: 'Spring Security', category: 'backend', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/springsecurity.svg', highlight: 'JWT & RBAC' },
  { name: 'Spring Data JPA', category: 'backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg', highlight: 'N+1 Bottleneck Resolving' },
  { name: 'FastAPI', category: 'backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg', highlight: 'Asynchronous Audio Pipelines' },
  { name: 'Flask', category: 'backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg', highlight: 'REST Services' },

  // ML & AI
  { name: 'PyTorch', category: 'ai', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg', highlight: 'Deep Learning Models' },
  { name: 'OpenAI Whisper', category: 'ai', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openai.svg', highlight: 'CUDA Speech-to-Text' },
  { name: 'YOLOv8', category: 'ai', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/yolo.svg', highlight: '31K+ Image Road Dataset' },
  { name: 'InsightFace', category: 'ai', icon: 'insightface-svg', highlight: 'ArcFace + RetinaFace' },
  { name: 'Scikit-Learn', category: 'ai', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/scikitlearn.svg', highlight: 'ML Algorithms' },
  { name: 'OpenCV', category: 'ai', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg', highlight: 'Computer Vision Streams' },

  // Databases
  { name: 'PostgreSQL', category: 'languages', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg', highlight: 'Composite Indexing & Tuning' },
  { name: 'MySQL', category: 'languages', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg', highlight: 'Normalized Relational Schemas' },
  { name: 'SQLite', category: 'languages', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg', highlight: 'Embedding Caching <10s' },
  { name: 'MongoDB', category: 'languages', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg', highlight: 'Document Stores' },

  // Tools & Core CS
  { name: 'Docker', category: 'tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg', highlight: 'Containerization' },
  { name: 'Git & GitHub', category: 'tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', highlight: 'Version Control' },
  { name: 'Postman', category: 'tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg', highlight: 'API Testing & Validation' },
  { name: 'Data Structures & Algo', category: 'tools', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/leetcode.svg', highlight: '200+ LeetCode Solved' },
  { name: 'DBMS & Operating Systems', category: 'tools', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linux.svg', highlight: 'Core CS Foundations' }
];

const renderIcon = (skill) => {
  if (typeof skill.icon === 'string' && skill.icon.startsWith('http')) {
    const isMonochrome = skill.icon.includes('simple-icons') || skill.icon.includes('springsecurity');
    return (
      <img
        src={skill.icon}
        alt={skill.name}
        style={{
          width: '24px',
          height: '24px',
          objectFit: 'contain',
          filter: isMonochrome ? 'var(--monochrome-filter)' : 'none'
        }}
      />
    );
  }

  if (skill.icon === 'insightface-svg') {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ color: 'var(--accent-cyan)' }}
      >
        <path d="M3 7V5a2 2 0 0 1 2-2h2" />
        <path d="M17 3h2a2 2 0 0 1 2 2v2" />
        <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
        <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
        <circle cx="12" cy="10" r="3" />
        <path d="M12 14c-2 0-4 1-4 3v1h8v-1c0-2-2-3-4-3z" />
      </svg>
    );
  }

  return <span>{skill.icon}</span>;
};

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
                <div style={{
                  width: '24px',
                  height: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {renderIcon(skill)}
                </div>
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
