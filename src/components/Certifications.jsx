import { motion } from 'framer-motion'
import { FiShield, FiAward, FiStar, FiCode } from 'react-icons/fi'

const certifications = [
  {
    icon: <FiShield />,
    title: 'Cisco CCNA',
    issuer: 'Cisco Systems',
    desc: 'Networking fundamentals, routing & switching, IP addressing, and network security essentials.',
  },
  {
    icon: <FiAward />,
    title: 'Oracle AI Foundations',
    issuer: 'Oracle',
    desc: 'AI fundamentals, machine learning concepts, and Oracle Cloud AI services and integrations.',
  },
  {
    icon: <FiStar />,
    title: 'TCS iON Career Edge',
    issuer: 'TCS iON',
    desc: 'Professional skills, communication, and IT industry readiness certification program.',
  },
  {
    icon: <FiCode />,
    title: "L'Oréal Sustainability Challenge 2025",
    issuer: "L'Oréal",
    desc: 'Participated in the L\'Oréal Sustainability Challenge, innovating tech-driven solutions for sustainable beauty and business practices.',
  },
  {
    icon: <FiCode />,
    title: "A-1 Launchpad: Challenge for Innovative Solutions",
    issuer: "A-1 Launchpad",
    desc: "Competed in the challenge to design and develop innovative, scalable tech solutions to solve real-world problems.",
  },
  {
    icon: <FiCode />,
    title: "Industrial Ideathon 2025",
    issuer: "Industrial Ideathon",
    desc: "Participated and brainstormed innovative ideas addressing industry-level challenges and technological advancements.",
  },
]

export default function Certifications() {
  return (
    <section className="section" id="certifications">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="section-label">Credentials</div>
          <h2 className="section-title">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
        </motion.div>

        <div className="certs-grid">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              className="cert-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="cert-card-inner">
                <div className="cert-badge-icon">{cert.icon}</div>
                <h3 className="cert-title">{cert.title}</h3>
                <div className="cert-issuer">{cert.issuer}</div>
                <p className="cert-desc">{cert.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
