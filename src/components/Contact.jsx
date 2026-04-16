import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiSend } from 'react-icons/fi'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you can integrate EmailJS or any backend
    setStatus('sent')
    setTimeout(() => setStatus(''), 3000)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="section-label">Get In Touch</div>
          <h2 className="section-title">
            Let's Build Something <span className="gradient-text">Amazing</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* Left Info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Let's connect and create.</h3>
            <p>
              Whether it's an AI project, automation system, or a complete web
              application — I'm always excited to tackle new challenges. Drop me
              a message and let's turn your vision into reality.
            </p>

            <div className="contact-links">
              <a
                href="https://github.com/harshitfarkare"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <div className="contact-link-icon">
                  <FiGithub />
                </div>
                <div>
                  <div style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.95rem' }}>GitHub</div>
                  <div style={{ fontSize: '0.8rem' }}>@harshitfarkare</div>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/harshitfarkare"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <div className="contact-link-icon" style={{ color: 'var(--accent-blue)' }}>
                  <FiLinkedin />
                </div>
                <div>
                  <div style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.95rem' }}>LinkedIn</div>
                  <div style={{ fontSize: '0.8rem' }}>Harshit Farkare</div>
                </div>
              </a>

              <a href="mailto:harshitfarkare@gmail.com" className="contact-link">
                <div className="contact-link-icon" style={{ color: 'var(--accent-cyan)' }}>
                  <FiMail />
                </div>
                <div>
                  <div style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.95rem' }}>Email</div>
                  <div style={{ fontSize: '0.8rem' }}>harshitfarkare@gmail.com</div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-name">Name</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  className="form-input"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-email">Email</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  className="form-input"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="form-textarea"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="form-submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
              >
                {status === 'sent' ? (
                  '✓ Message Sent!'
                ) : (
                  <>
                    Send Message <FiSend />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
