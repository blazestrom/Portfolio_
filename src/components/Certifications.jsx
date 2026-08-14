import React from 'react';
import { Award, CheckCircle, ExternalLink, ShieldCheck } from 'lucide-react';

const certificationsData = [
  {
    title: 'Python for Data Science',
    issuer: 'NPTEL (Funded by MoE, Govt. of India)',
    credential: 'Elite Silver Medalist (Consolidated score: 75%)',
    verifyUrl: '',
    badge: 'Elite Silver'
  },
  {
    title: 'Database Management Systems',
    issuer: 'NPTEL (Funded by MoE, Govt. of India)',
    credential: 'Elite Status Certification',
    verifyUrl: '',
    badge: 'Elite'
  },
  {
    title: 'Cloud Computing',
    issuer: 'NPTEL (IIT Kharagpur)',
    credential: 'Consolidated Score: 68% (Elite) | Roll: NPTEL25CS107S352600661',
    verifyUrl: '',
    badge: 'Elite'
  },
  {
    title: 'Specialized Data Visualization Approaches',
    issuer: 'Johns Hopkins University (Coursera)',
    credential: 'ID: J57HLBA1BVSM (Tableau, Dashboards, Data Storytelling)',
    verifyUrl: 'https://coursera.org/verify/J57HLBA1BVSM',
    badge: 'Verified'
  },
  {
    title: 'Software Engineering Job Simulation',
    issuer: 'JPMorgan Chase & Co. (Forage)',
    credential: 'Completed tasks in interface changes, engineering graphs, and code repositories',
    verifyUrl: '',
    badge: 'Completion'
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <ShieldCheck size={14} /> Credential Vault
          </span>
          <h2 className="section-title">Certifications & Achievements</h2>
          <p className="section-subtitle">
            Industry credentials and national-level university certifications validating my core expertise.
          </p>
        </div>

        {/* Certifications Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem'
        }}>
          {certificationsData.map((cert, index) => (
            <div 
              key={index}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%'
              }}
            >
              <div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '1rem'
                }}>
                  <span className={`badge ${cert.badge.includes('Silver') ? 'amber' : 'cyan'}`}>
                    {cert.badge}
                  </span>
                  <Award size={20} color="var(--accent-cyan)" />
                </div>

                <h3 style={{
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  marginBottom: '0.35rem',
                  color: 'var(--text-primary)'
                }}>
                  {cert.title}
                </h3>

                <p style={{
                  fontSize: '0.85rem',
                  color: 'var(--accent-cyan)',
                  fontWeight: 600,
                  marginBottom: '0.75rem'
                }}>
                  {cert.issuer}
                </p>

                <p style={{
                  fontSize: '0.82rem',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.5',
                  marginBottom: '1.5rem'
                }}>
                  {cert.credential}
                </p>
              </div>

              {cert.verifyUrl ? (
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.82rem',
                    color: 'var(--accent-cyan)',
                    fontWeight: 600,
                    alignSelf: 'flex-start'
                  }}
                >
                  Verify Credential <ExternalLink size={12} />
                </a>
              ) : (
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.82rem',
                  color: 'var(--text-muted)',
                  fontWeight: 500
                }}>
                  <CheckCircle size={12} /> Institutional Record
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
