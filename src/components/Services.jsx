import { motion } from 'framer-motion'
import { FiCpu, FiGlobe, FiBox, FiLink } from 'react-icons/fi'

const services = [
  {
    icon: <FiCpu />,
    title: 'AI Automation Solutions',
    desc: 'End-to-end AI-powered automation systems — from data extraction to intelligent decision-making pipelines. Reduce manual work by 10x with intelligent agents.',
  },
  {
    icon: <FiGlobe />,
    title: 'Web Development',
    desc: 'Full-stack web applications built with React + Django. Pixel-perfect UIs with robust backends, optimized for performance and scalability.',
  },
  {
    icon: <FiBox />,
    title: 'SaaS MVP Development',
    desc: 'Rapid prototyping and development of SaaS products. From idea validation to production-ready MVP with modern tech stack and clean architecture.',
  },
  {
    icon: <FiLink />,
    title: 'API Integration & Backend',
    desc: 'RESTful API design, third-party integrations, database architecture, and backend system optimization for enterprise-grade reliability.',
  },
]

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="section-label">What I Offer</div>
          <h2 className="section-title">
            Services & <span className="gradient-text">Solutions</span>
          </h2>
          <p className="section-subtitle">
            From concept to deployment — I build intelligent systems that scale with your business.
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="service-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
