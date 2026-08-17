import React from 'react';
import { Github, ExternalLink, Code2, Cpu, Zap, FolderGit2, Award } from 'lucide-react';

const projectsData = [
  {
    title: "JobTracker API",
    year: "2026",
    tech: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Hibernate/JPA",
      "JWT",
      "Docker",
    ],
    metric: "40% DB Query Boost",
    description:
      "Architected a production-ready RESTful backend using Spring Boot, focusing on scalability, security, and low-latency database access.",
    details: [
      "Secured endpoints using Spring Security with JWT token authentication and Role-Based Access Control (RBAC).",
      "Prevented JVM heap overhead on high-throughput requests using Spring Data Pageable limit-offset boundaries.",
      "Tuned database access by 40% using PostgreSQL composite column indexes and resolving Hibernate N+1 fetch issues.",
    ],
    github: "https://github.com/blazestrom/jobtracker-api",
    type: "backend",
    graphic: (
      <svg
        viewBox="0 0 100 40"
        style={{ width: "100px", height: "40px", opacity: 0.85 }}
      >
        {/* SQL Indexes Representation */}
        <rect
          x="5"
          y="10"
          width="20"
          height="20"
          rx="3"
          fill="var(--bg-tertiary)"
          stroke="var(--border-color)"
        />
        <rect
          x="35"
          y="10"
          width="20"
          height="20"
          rx="3"
          fill="var(--bg-tertiary)"
          stroke="var(--border-color)"
        />
        <rect
          x="65"
          y="10"
          width="30"
          height="20"
          rx="3"
          fill="rgba(56, 189, 248, 0.15)"
          stroke="var(--accent-cyan)"
        />
        <path
          d="M 25 20 L 35 20"
          stroke="var(--accent-cyan)"
          strokeWidth="1.5"
          strokeDasharray="3,3"
        />
        <path
          d="M 55 20 L 65 20"
          stroke="var(--accent-cyan)"
          strokeWidth="1.5"
        />
        <text
          x="15"
          y="24"
          fontSize="8"
          fontFamily="var(--font-mono)"
          fill="var(--text-secondary)"
          textAnchor="middle"
        >
          API
        </text>
        <text
          x="45"
          y="24"
          fontSize="8"
          fontFamily="var(--font-mono)"
          fill="var(--text-secondary)"
          textAnchor="middle"
        >
          JPA
        </text>
        <text
          x="80"
          y="24"
          fontSize="8"
          fontFamily="var(--font-mono)"
          fill="var(--accent-cyan)"
          textAnchor="middle"
        >
          DB (40%)
        </text>
      </svg>
    ),
  },
  {
    title: "TripFace — AI Photo Discovery",
    year: "2026",
    tech: ["Python", "FastAPI", "React", "InsightFace", "SQLite", "SSE"],
    metric: "75% Scanning Boost",
    description:
      "Engineered a local facial recognition and indexing service utilizing state-of-the-art vision models to search personal Google Drive archives.",
    details: [
      "Leveraged ArcFace and RetinaFace frameworks to index facial embeddings locally.",
      "Reduced discovery latency by 75% via concurrent FastAPI workers with parallel photo-decoding threads.",
      "Buffered vectors in SQLite to keep lookup times < 10s and streamed extraction progress to React using Server-Sent Events.",
    ],
    github: "https://github.com/blazestrom/TripFace",
    type: "ai",
    graphic: (
      <svg
        viewBox="0 0 100 40"
        style={{ width: "100px", height: "40px", opacity: 0.85 }}
      >
        {/* Facial Bounding Box Graphic */}
        <circle
          cx="50"
          cy="20"
          r="14"
          fill="none"
          stroke="var(--accent-cyan)"
          strokeWidth="1.5"
        />
        <circle cx="45" cy="18" r="2" fill="var(--accent-cyan)" />
        <circle cx="55" cy="18" r="2" fill="var(--accent-cyan)" />
        <path
          d="M 45 26 Q 50 29 55 26"
          fill="none"
          stroke="var(--accent-cyan)"
          strokeWidth="1.5"
        />
        {/* Detection brackets */}
        <path
          d="M 28 12 L 28 8 L 32 8"
          fill="none"
          stroke="var(--accent-cyan)"
          strokeWidth="1.5"
        />
        <path
          d="M 68 12 L 68 8 L 64 8"
          fill="none"
          stroke="var(--accent-cyan)"
          strokeWidth="1.5"
        />
        <path
          d="M 28 28 L 28 32 L 32 32"
          fill="none"
          stroke="var(--accent-cyan)"
          strokeWidth="1.5"
        />
        <path
          d="M 68 28 L 68 32 L 64 32"
          fill="none"
          stroke="var(--accent-cyan)"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    title: "Anuvad — Multilingual Captioner",
    year: "2025",
    tech: ["JavaScript", "Web Speech API", "Chrome Extension API"],
    metric: "SIH National Rank 1",
    description:
      "Developed a real-time, low-latency browser extension implementing on-device speech-to-text with auto regional language translation.",
    details: [
      "Won first place at the Smart India Hackathon 2025 (SIH) national grand finale.",
      "Designed a continuous buffer architecture for uninterrupted transcriptions during native web stream playbacks.",
      "Created an accessible HTML caption layer rendering multilingual subtitles on-the-fly.",
    ],
    github: 'https://github.com/blazestrom/Anuvad_extension',
    type: "fullstack",
    graphic: (
      <svg
        viewBox="0 0 100 40"
        style={{ width: "100px", height: "40px", opacity: 0.85 }}
      >
        {/* Speech to Caption Waveform representation */}
        <path
          d="M 5 20 Q 20 5 35 20 T 65 20 T 95 20"
          fill="none"
          stroke="var(--accent-cyan)"
          strokeWidth="1.5"
        />
        <line
          x1="5"
          y1="20"
          x2="95"
          y2="20"
          stroke="var(--border-color)"
          strokeWidth="1"
        />
        <rect
          x="25"
          y="27"
          width="50"
          height="9"
          rx="2"
          fill="rgba(56, 189, 248, 0.1)"
          stroke="var(--border-highlight)"
        />
        <text
          x="50"
          y="34"
          fontSize="6"
          fontFamily="var(--font-mono)"
          fill="var(--accent-cyan)"
          textAnchor="middle"
        >
          ANUVAD
        </text>
      </svg>
    ),
  },
  {
    title: "Indian Road Object Detection",
    year: "2025",
    tech: ["Python", "YOLOv8", "PyTorch", "OpenCV"],
    metric: "57.5% Model Precision",
    description:
      "Trained and validated computer vision models engineered for non-standardized driving environments using the IDD dataset.",
    details: [
      "Trained custom YOLOv8 models on 31,000+ localized road images featuring 10 unique classes.",
      "Achieved 57.5% validation Precision and 34.7% mAP@50 under real-world traffic testing.",
      "Designed XML-to-YOLO conversion script arrays mapping across a 22GB dataset structure.",
    ],
    github: "https://github.com/blazestrom/yolov8n-__RT-DETR",
    type: "ai",
    graphic: (
      <svg
        viewBox="0 0 100 40"
        style={{ width: "100px", height: "40px", opacity: 0.85 }}
      >
        {/* YOLO object grid */}
        <rect
          x="15"
          y="8"
          width="70"
          height="24"
          rx="3"
          fill="none"
          stroke="var(--border-color)"
          strokeWidth="1"
        />
        {/* Detected objects */}
        <rect
          x="25"
          y="12"
          width="20"
          height="15"
          rx="2"
          fill="none"
          stroke="var(--accent-emerald)"
          strokeWidth="1.5"
        />
        <rect
          x="55"
          y="15"
          width="22"
          height="12"
          rx="2"
          fill="none"
          stroke="var(--accent-amber)"
          strokeWidth="1.5"
        />
        <text
          x="27"
          y="10"
          fontSize="5"
          fontFamily="var(--font-mono)"
          fill="var(--accent-emerald)"
        >
          car:96%
        </text>
        <text
          x="57"
          y="13"
          fontSize="5"
          fontFamily="var(--font-mono)"
          fill="var(--accent-amber)"
        >
          truck:88%
        </text>
      </svg>
    ),
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <FolderGit2 size={14} /> My Projects
          </span>
          <h2 className="section-title">Featured Works</h2>
          <p className="section-subtitle">
            Deployments and open-source APIs developed during my B.Tech studies. Each project addresses scale, speed, or precision.
          </p>
        </div>

        {/* Projects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '2.5rem'
        }}>
          {projectsData.map((project, idx) => (
            <div 
              key={idx} 
              className="card"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2rem',
                position: 'relative'
              }}
            >
              {/* Left Column: Project Detail */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 700 }}>{project.title}</h3>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>({project.year})</span>
                  </div>
                  {project.graphic}
                </div>

                {/* Highlight metric badge */}
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.2rem' }}>
                  <span className={`badge ${project.title.includes('Anuvad') ? 'amber' : 'cyan'}`} style={{ fontWeight: 700 }}>
                    <Zap size={12} /> {project.metric}
                  </span>
                  {project.tech.map((t, i) => (
                    <span key={i} className="badge">
                      {t}
                    </span>
                  ))}
                </div>

                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                  {project.description}
                </p>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      background: 'var(--bg-tertiary)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-primary)',
                      padding: '0.5rem 1rem',
                      borderRadius: '8px',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      transition: 'all var(--transition-fast)'
                    }}
                    onMouseOver={e => e.currentTarget.style.borderColor = 'var(--accent-cyan)'}
                    onMouseOut={e => e.currentTarget.style.borderColor = 'var(--border-color)'}
                  >
                    <Github size={14} /> Repository
                  </a>
                </div>
              </div>

              {/* Right Column: Code Contributions List */}
              <div style={{
                background: 'rgba(0,0,0,0.15)',
                border: '1px solid var(--border-color)',
                borderRadius: '10px',
                padding: '1.25rem'
              }}>
                <h4 style={{
                  fontSize: '0.88rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--accent-cyan)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05rem',
                  marginBottom: '0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}>
                  <Code2 size={14} /> Core Accomplishments
                </h4>
                <ul style={{
                  listStyle: 'none',
                  fontSize: '0.88rem',
                  color: 'var(--text-secondary)'
                }}>
                  {project.details.map((detail, i) => (
                    <li key={i} style={{
                      position: 'relative',
                      paddingLeft: '1.2rem',
                      marginBottom: '0.75rem',
                      lineHeight: '1.5'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        top: '0.15rem',
                        color: 'var(--accent-cyan)',
                        fontWeight: 'bold'
                      }}>•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
