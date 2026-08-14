import React from 'react';
import { Calendar, Briefcase, GraduationCap, Award, GitCommit } from 'lucide-react';

const timelineData = [
  {
    type: 'experience',
    title: 'AI/ML Intern',
    organization: 'Edunet Foundation',
    period: 'Nov 2025 – Jan 2026',
    details: [
      'Architected an AI-powered Lecture Voice-to-Notes Pipeline using OpenAI Whisper and Groq LLM APIs to transcribe audio files into structured study notes.',
      'Developed asynchronous FastAPI REST endpoints for audio processing, offloading CUDA-accelerated tasks and cutting execution latency by 60%.',
      'Engineered transcription text preprocessing and structured prompt templates to optimize token usage and generate quiz/flashcard payloads.'
    ],
    tech: ['Python', 'FastAPI', 'Groq API', 'Whisper', 'CUDA', 'React']
  },
  {
    type: 'hackathon',
    title: 'Smart India Hackathon 2025 National Winner',
    organization: 'Ministry of Education, Govt. of India',
    period: '2025',
    details: [
      'Won First Place (National Rank 1) for developing "Anuvad" (Multilingual Speech-to-Text Captioning Chrome Extension).',
      'Pitched the application to national evaluators, demonstrating browser-native real-time captioning overlay without audio streaming interruptions.'
    ],
    tech: ['JavaScript', 'Chrome Extension API', 'Web Speech API']
  },
  {
    type: 'education',
    title: 'B.E. Computer Science & Engineering (Data Science)',
    organization: 'RNS Institute of Technology, Bengaluru',
    period: 'Aug 2023 – Aug 2027 (Expected)',
    details: [
      'Current Cumulative Grade Point Average (CGPA): 8.94 / 10',
      'Acquired extensive core foundations in DBMS, Operating Systems, Computer Networks, Object-Oriented Programming (OOP), and Data Structures & Algorithms.'
    ],
    tech: ['Java', 'Python', 'SQL', 'Algorithms & DSA', 'Data Science', 'DBMS']
  }
];

export default function Timeline() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Award size={14} /> Roadmap & Timeline
          </span>
          <h2 className="section-title">Education & Experience</h2>
          <p className="section-subtitle">
            A chronological roadmap detailing my academic history, hackathons, and professional industry internships.
          </p>
        </div>

        {/* Timeline Layout */}
        <div style={{
          position: 'relative',
          maxWidth: '850px',
          margin: '0 auto',
          padding: '1rem 0'
        }}>
          {/* Vertical Center Line */}
          <div style={{
            position: 'absolute',
            left: '20px',
            top: 0,
            bottom: 0,
            width: '2px',
            background: 'var(--border-color)'
          }}></div>

          {timelineData.map((item, index) => (
            <div 
              key={index}
              style={{
                position: 'relative',
                paddingLeft: '50px',
                marginBottom: '3rem'
              }}
            >
              {/* Timeline Icon Node */}
              <div style={{
                position: 'absolute',
                left: '6px',
                top: '0',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                background: item.type === 'experience' ? 'rgba(56, 189, 248, 0.15)' : item.type === 'hackathon' ? 'rgba(245, 158, 11, 0.15)' : 'rgba(16, 185, 129, 0.15)',
                border: '2px solid ' + (item.type === 'experience' ? 'var(--accent-cyan)' : item.type === 'hackathon' ? 'var(--accent-amber)' : 'var(--accent-emerald)'),
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 2
              }}>
                {item.type === 'experience' ? (
                  <Briefcase size={14} color="var(--accent-cyan)" />
                ) : item.type === 'hackathon' ? (
                  <Award size={14} color="var(--accent-amber)" />
                ) : (
                  <GraduationCap size={14} color="var(--accent-emerald)" />
                )}
              </div>

              {/* Timeline Card */}
              <div className="card">
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginBottom: '0.85rem'
                }}>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {item.title}
                    </h3>
                    <span style={{ 
                      fontSize: '0.9rem', 
                      color: item.type === 'experience' ? 'var(--accent-cyan)' : item.type === 'hackathon' ? 'var(--accent-amber)' : 'var(--accent-emerald)',
                      fontWeight: 600
                    }}>
                      {item.organization}
                    </span>
                  </div>
                  <span className="badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                    <Calendar size={12} /> {item.period}
                  </span>
                </div>

                {/* Details List */}
                <ul style={{
                  listStyle: 'none',
                  fontSize: '0.88rem',
                  color: 'var(--text-secondary)',
                  marginBottom: '1.25rem'
                }}>
                  {item.details.map((detail, idx) => (
                    <li key={idx} style={{
                      position: 'relative',
                      paddingLeft: '1.2rem',
                      marginBottom: '0.5rem',
                      lineHeight: '1.6'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        top: '0.2rem',
                        fontSize: '0.8rem',
                        color: 'var(--text-muted)'
                      }}>•</span>
                      {detail}
                    </li>
                  ))}
                </ul>

                {/* Tech Badges */}
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                  {item.tech.map((t, idx) => (
                    <span key={idx} className="badge">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
