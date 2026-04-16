import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCode, FiLayers, FiTool } from 'react-icons/fi'

const skillCategories = [
  {
    title: 'Programming',
    icon: <FiCode />,
    skills: [
      { name: 'Python', level: 92 },
      { name: 'Java', level: 80 },
      { name: 'SQL', level: 78 },
    ],
  },
  {
    title: 'Frameworks',
    icon: <FiLayers />,
    skills: [
      { name: 'Django', level: 88 },
      { name: 'React', level: 60 },
      { name: 'FastAPI', level: 70 },
    ],
  },
  {
    title: 'Tools & AI',
    icon: <FiTool />,
    skills: [
      { name: 'AI / LLMs', level: 85 },
      { name: 'MySQL', level: 82 },
      { name: 'Git & CI/CD', level: 78 },
      { name: 'REST APIs', level: 90 },
    ],
  },
]

function SkillBar({ name, level, delay }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 })

  return (
    <div className="skill-item" ref={ref}>
      <div className="skill-item-header">
        <span className="skill-item-name">{name}</span>
        <span className="skill-item-level">{level}%</span>
      </div>
      <div className="skill-bar">
        <div
          className={`skill-bar-fill ${inView ? 'animate' : ''}`}
          style={{ width: inView ? `${level}%` : '0%', transitionDelay: `${delay}ms` }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="section-label">Technical Arsenal</div>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle">
            Proficient across the full stack with a focus on AI, automation, and backend systems.
          </p>
        </motion.div>

        <div className="skills-categories">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              className="skill-category"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="skill-category-icon">{cat.icon}</div>
              <h3 className="skill-category-title">{cat.title}</h3>
              {cat.skills.map((skill, j) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={j * 200}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
