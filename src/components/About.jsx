import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'

function AnimatedCounter({ end, duration = 2, suffix = '' }) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = end / (duration * 60)
    const timer = setInterval(() => {
      start += step
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 1000 / 60)
    return () => clearInterval(timer)
  }, [inView, end, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

const timeline = [
  {
    year: '2022',
    title: 'Started Computer Science (AI) Degree',
    desc: 'Began B.Tech in CSE with AI specialization',
  },
  {
    year: '2023',
    title: 'AI System Projects',
    desc: 'Building production-grade AI applications',
  },
  {
    year: '2026',
    title: 'WEB Technologies & Cisco CCNA Study',
    desc: 'Explore Technologies, studying for networking certification',
  },
  {
    year: '2026',
    title: 'Workflow AI & Full Stack',
    desc: 'Developed AutoSync platform, Django + React stack',
  },
]

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
}

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          {...fadeUp}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileInView="animate"
          initial="initial"
        >
          <div className="section-label">About Me</div>
          <h2 className="section-title">
            AI-Focused Developer &<br />
            <span className="gradient-text">Automation Architect</span>
          </h2>
        </motion.div>

        <div className="about-grid">
          {/* Left Column — Text + Stats */}
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p>
              I'm <strong>Harshit Farkare</strong>, a Computer Science (AI) student
              with a passion for building intelligent systems that solve real-world
              problems. I specialize in <strong>Python, Java, Django, FastAPI, React</strong>,
              and <strong>AI/ML integrations</strong>.
            </p>
            <p>
              From voice-enabled AI chatbots to enterprise workflow automation
              platforms, I build end-to-end systems that are both technically sound
              and beautifully designed. My approach combines deep technical expertise
              with a product-first mindset.
            </p>
            <p>
              Currently exploring advanced <strong>LLM integrations</strong>,
              <strong> agentic AI workflows</strong>, and building SaaS products
              that leverage AI for real business impact.
            </p>

            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">
                  <AnimatedCounter end={8} suffix="+" />
                </div>
                <div className="stat-label">Projects Built</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">
                  <AnimatedCounter end={10} suffix="+" />
                </div>
                <div className="stat-label">Technologies</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">
                  <AnimatedCounter end={5} suffix="+" />
                </div>
                <div className="stat-label">Certifications</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column — Timeline */}
          <motion.div
            className="timeline"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                className="timeline-item"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-title">{item.title}</div>
                <div className="timeline-desc">{item.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
