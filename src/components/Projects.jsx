import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const projects = [
  {
    id: 1,
    number: '01',
    title: 'AI Chatbot — Voice + Coding Assistant',
    desc: 'An intelligent conversational AI with voice interaction, code debugging capabilities, and real-time assistance powered by Gemini API.',
    features: [
      'Natural voice interaction & speech synthesis',
      'AI-powered code debugging & suggestions',
      'Gemini API integration for advanced reasoning',
      'Multi-turn conversation context memory',
    ],
    tech: ['Python', 'Gemini API', 'Speech Recognition', 'FastAPI', 'React'],
    gradient: 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
    details: `This AI Chatbot combines voice interaction with powerful code assistance capabilities. Built on top of Google's Gemini API, it can understand complex programming questions, debug code snippets, and provide detailed explanations.

Key Technical Details:
• Voice-first interface using Web Speech API for both recognition and synthesis
• Real-time streaming responses from Gemini for instant feedback
• Context-aware conversations that remember previous interactions
• Smart code analysis with syntax highlighting and error detection
• RESTful API backend built with FastAPI for high performance`,
  },
  {
    id: 2,
    number: '02',
    title: 'AI Workflow Automation Platform',
    desc: 'Enterprise-grade automation platform that syncs Excel data, manages CRM workflows, and generates AI-powered business automations.',
    features: [
      'Excel + CRM data synchronization',
      'AI-generated workflow automations',
      'Visual workflow builder with drag & drop',
      'Real-time analytics dashboard',
    ],
    tech: ['Django', 'React', 'MySQL', 'Celery', 'AI/ML', 'REST API'],
    gradient: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
    details: `AutoSync is a full-stack workflow automation platform designed for businesses to automate repetitive tasks and sync data across systems.

Key Technical Details:
• Django REST Framework backend with JWT authentication
• React frontend with interactive visual workflow editor
• Celery + Redis for async task processing and scheduling
• MySQL database with optimized queries for large datasets
• AI-powered workflow suggestions using machine learning
• Excel file parsing and real-time CRM synchronization
• Role-based access control and team management
• Real-time WebSocket notifications for workflow events`,
  },
]

/* Chat Bubble Animation for Project 1 */
function ChatPreview() {
  return (
    <div style={{ padding: '24px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '12px' }}>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
        style={{
          background: 'rgba(139, 92, 246, 0.15)',
          border: '1px solid rgba(139, 92, 246, 0.2)',
          borderRadius: '12px 12px 12px 4px',
          padding: '12px 16px',
          maxWidth: '200px',
          fontSize: '0.75rem',
          color: 'var(--text-secondary)',
          fontFamily: 'var(--font-mono)',
        }}
      >
        Debug this Python code...
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
        viewport={{ once: true }}
        style={{
          background: 'rgba(6, 182, 212, 0.1)',
          border: '1px solid rgba(6, 182, 212, 0.2)',
          borderRadius: '12px 12px 4px 12px',
          padding: '12px 16px',
          maxWidth: '240px',
          alignSelf: 'flex-end',
          fontSize: '0.75rem',
          color: 'var(--accent-cyan)',
          fontFamily: 'var(--font-mono)',
        }}
      >
        Found 2 issues: missing return statement on line 15...
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9 }}
        viewport={{ once: true }}
        style={{
          display: 'flex',
          gap: '4px',
          alignSelf: 'center',
          marginTop: '8px',
        }}
      >
        {[0, 1, 2].map(i => (
          <motion.div
            key={i}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.2 }}
            style={{
              width: '6px', height: '6px', borderRadius: '50%',
              background: 'var(--accent-purple)',
            }}
          />
        ))}
      </motion.div>
    </div>
  )
}

/* Workflow Node Animation for Project 2 */
function WorkflowPreview() {
  const nodes = [
    { label: 'Trigger', x: 15, y: 30, color: '#8b5cf6' },
    { label: 'Process', x: 45, y: 50, color: '#3b82f6' },
    { label: 'AI', x: 45, y: 15, color: '#06b6d4' },
    { label: 'Output', x: 75, y: 30, color: '#10b981' },
  ]

  return (
    <div style={{ position: 'relative', height: '100%', width: '100%' }}>
      <svg
        viewBox="0 0 100 65"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      >
        {/* Connection lines */}
        <motion.line x1="25" y1="33" x2="40" y2="50" stroke="rgba(139,92,246,0.3)" strokeWidth="0.5"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ delay: 0.5, duration: 0.8 }} viewport={{ once: true }}
        />
        <motion.line x1="25" y1="30" x2="40" y2="18" stroke="rgba(139,92,246,0.3)" strokeWidth="0.5"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ delay: 0.6, duration: 0.8 }} viewport={{ once: true }}
        />
        <motion.line x1="55" y1="50" x2="70" y2="33" stroke="rgba(139,92,246,0.3)" strokeWidth="0.5"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ delay: 0.7, duration: 0.8 }} viewport={{ once: true }}
        />
        <motion.line x1="55" y1="18" x2="70" y2="30" stroke="rgba(139,92,246,0.3)" strokeWidth="0.5"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ delay: 0.8, duration: 0.8 }} viewport={{ once: true }}
        />
      </svg>

      {nodes.map((node, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 + i * 0.15, type: 'spring' }}
          viewport={{ once: true }}
          style={{
            position: 'absolute',
            left: `${node.x}%`,
            top: `${node.y}%`,
            transform: 'translate(-50%, -50%)',
            background: `${node.color}15`,
            border: `1px solid ${node.color}40`,
            borderRadius: '8px',
            padding: '6px 12px',
            fontSize: '0.65rem',
            color: node.color,
            fontFamily: 'var(--font-mono)',
            fontWeight: 600,
            whiteSpace: 'nowrap',
          }}
        >
          {node.label}
        </motion.div>
      ))}
    </div>
  )
}

/* Project Detail Modal */
function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="modal-content"
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.95 }}
        transition={{ type: 'spring', damping: 25 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>✕</button>
        
        <div className="section-label" style={{ marginBottom: '8px' }}>
          Project {project.number}
        </div>
        <h3 style={{ 
          fontFamily: 'var(--font-primary)', 
          fontSize: '1.6rem', 
          fontWeight: 700,
          marginBottom: '16px',
          color: 'var(--text-primary)',
        }}>
          {project.title}
        </h3>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
          {project.tech.map((t) => (
            <span key={t} className="badge">{t}</span>
          ))}
        </div>

        <div style={{ 
          color: 'var(--text-secondary)', 
          lineHeight: 1.8, 
          fontSize: '0.95rem',
          whiteSpace: 'pre-line',
        }}>
          {project.details}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section className="section" id="projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="section-label">Featured Work</div>
          <h2 className="section-title">
            Projects That <span className="gradient-text">Push Boundaries</span>
          </h2>
          <p className="section-subtitle">
            AI-powered applications built with modern architecture and attention to detail.
          </p>
        </motion.div>

        <div className="grid-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="project-preview" style={{ background: `${project.gradient.replace(')', ', 0.08)')}` }}>
                {project.id === 1 ? <ChatPreview /> : <WorkflowPreview />}
              </div>
              
              <div className="project-info">
                <div className="project-number">Project {project.number}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                
                <ul className="project-features">
                  {project.features.map((f, j) => (
                    <li key={j}>{f}</li>
                  ))}
                </ul>

                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span key={t} className="badge">{t}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <button
                    className="btn btn-primary"
                    onClick={() => setSelectedProject(project)}
                    style={{ fontSize: '0.85rem', padding: '10px 24px' }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
