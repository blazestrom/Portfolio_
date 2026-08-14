import React, { useState } from 'react';
import { Terminal as TerminalIcon, Cpu, Zap, Database, Play } from 'lucide-react';

const codeSnippets = {
  'AI_Pipeline.py': `# Edunet Foundation - AI Voice-to-Notes Pipeline
from fastapi import FastAPI, BackgroundTasks
import whisper
import groq

app = FastAPI(title="CUDA Accelerated Audio Transcriber")

@app.post("/api/v1/transcribe")
async def process_lecture(audio_file: UploadFile):
    # CUDA-Accelerated Whisper Inference
    raw_audio = await audio_file.read()
    transcript = await run_whisper_cuda(raw_audio)
    
    # LLM Prompt Engineering for Structured Output
    study_notes = groq_client.generate_notes(
        transcript, prompt_template="academic_summary_v2"
    )
    return {"latency": "180ms", "status": "200 OK", "notes": study_notes}`,

  'JobTrackerAPI.java': `// Spring Boot High-Throughput REST Endpoint
@RestController
@RequestMapping("/api/v1/jobs")
public class JobController {
    
    @GetMapping
    public ResponseEntity<Page<JobResponse>> getJobs(
        @PageableDefault(size = 20, sort = "createdAt") Pageable pageable
    ) {
        // Enforcing server-side limit-offset boundaries & Fetch Join optimization
        Page<JobResponse> page = jobService.getPaginatedJobs(pageable);
        return ResponseEntity.ok(page);
    }
}`,

  'FaceDiscovery.py': `# TripFace - InsightFace (ArcFace + RetinaFace) concurrent scanning
async def scan_google_drive(user_id: str, access_token: str):
    # Concurrent scanning pipeline with parallel worker threads
    embeddings = await face_engine.extract_embeddings_parallel(drive_stream)
    
    # Cache embeddings in SQLite to keep sub-query latency < 10s
    await sqlite_db.bulk_insert_embeddings(embeddings)
    await sse_manager.broadcast_progress(user_id, status="DONE")`
};

export default function TerminalGraphic() {
  const [activeTab, setActiveTab] = useState('AI_Pipeline.py');

  return (
    <div style={{
      background: '#0d1117',
      border: '1px solid rgba(255, 255, 255, 0.12)',
      borderRadius: '14px',
      overflow: 'hidden',
      boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
      fontFamily: 'var(--font-mono)'
    }}>
      {/* Terminal Titlebar */}
      <div style={{
        background: '#161b22',
        padding: '0.6rem 1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        {/* Window buttons */}
        <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }}></span>
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }}></span>
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }}></span>
          <span style={{ marginLeft: '0.5rem', color: '#8b949e', fontSize: '0.78rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <TerminalIcon size={12} color="var(--accent-cyan)" /> bash — 80x24
          </span>
        </div>

        {/* Tab Selection */}
        <div style={{ display: 'flex', gap: '0.35rem' }}>
          {Object.keys(codeSnippets).map((file) => (
            <button
              key={file}
              onClick={() => setActiveTab(file)}
              style={{
                background: activeTab === file ? '#21262d' : 'transparent',
                color: activeTab === file ? '#58a6ff' : '#8b949e',
                border: 'none',
                padding: '0.25rem 0.65rem',
                borderRadius: '6px',
                fontSize: '0.75rem',
                cursor: 'pointer',
                fontFamily: 'var(--font-mono)',
                transition: 'all 0.15s ease'
              }}
            >
              {file}
            </button>
          ))}
        </div>
      </div>

      {/* Terminal Content */}
      <div style={{ padding: '1.25rem', overflowX: 'auto' }}>
        <pre style={{
          fontSize: '0.82rem',
          lineHeight: '1.6',
          color: '#c9d1d9',
          margin: 0,
          whiteSpace: 'pre-wrap'
        }}>
          {codeSnippets[activeTab]}
        </pre>
      </div>

      {/* Terminal Status Bar */}
      <div style={{
        background: '#161b22',
        padding: '0.4rem 1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: '0.75rem',
        color: '#8b949e',
        borderTop: '1px solid rgba(255,255,255,0.05)'
      }}>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <span style={{ color: '#39d353', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
            <Zap size={12} /> Status: 200 OK
          </span>
          <span>CUDA: Active</span>
          <span>Spring Boot: Ready</span>
        </div>
        <span style={{ color: 'var(--accent-cyan)' }}>SIH 2025 Winner Engine</span>
      </div>
    </div>
  );
}
