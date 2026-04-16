import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          © {new Date().getFullYear()} Harshit Farkare. Crafted with AI & precision.
        </p>
        <div className="footer-links">
          <a href="https://github.com/harshitfarkare" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href="https://linkedin.com/in/harshitfarkare" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href="mailto:harshitfarkare@gmail.com" aria-label="Email">
            <FiMail />
          </a>
        </div>
      </div>
    </footer>
  )
}
