import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei'
import { motion } from 'framer-motion'
import * as THREE from 'three'

/* ===== 3D Neural Network Visualization ===== */
function NeuralNetwork() {
  const groupRef = useRef()
  
  const nodes = useMemo(() => {
    const pts = []
    for (let i = 0; i < 60; i++) {
      pts.push({
        position: [
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 4,
        ],
        scale: Math.random() * 0.08 + 0.03,
      })
    }
    return pts
  }, [])

  const connections = useMemo(() => {
    const lines = []
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dist = Math.sqrt(
          (nodes[i].position[0] - nodes[j].position[0]) ** 2 +
          (nodes[i].position[1] - nodes[j].position[1]) ** 2 +
          (nodes[i].position[2] - nodes[j].position[2]) ** 2
        )
        if (dist < 2.5) {
          lines.push([nodes[i].position, nodes[j].position])
        }
      }
    }
    return lines
  }, [nodes])

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(clock.elapsedTime * 0.15) * 0.3
      groupRef.current.rotation.x = Math.cos(clock.elapsedTime * 0.1) * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      {/* Nodes */}
      {nodes.map((node, i) => (
        <Float key={i} speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
          <Sphere position={node.position} args={[node.scale, 8, 8]}>
            <meshStandardMaterial
              color={i % 3 === 0 ? '#8b5cf6' : i % 3 === 1 ? '#3b82f6' : '#06b6d4'}
              emissive={i % 3 === 0 ? '#8b5cf6' : i % 3 === 1 ? '#3b82f6' : '#06b6d4'}
              emissiveIntensity={0.5}
              transparent
              opacity={0.8}
            />
          </Sphere>
        </Float>
      ))}
      
      {/* Connections */}
      {connections.map((line, i) => (
        <ConnectionLine key={i} start={line[0]} end={line[1]} />
      ))}
      
      {/* Central Orb */}
      <Float speed={1} floatIntensity={1}>
        <Sphere args={[0.6, 32, 32]}>
          <MeshDistortMaterial
            color="#8b5cf6"
            emissive="#8b5cf6"
            emissiveIntensity={0.3}
            transparent
            opacity={0.3}
            distort={0.4}
            speed={2}
            roughness={0.2}
          />
        </Sphere>
      </Float>
    </group>
  )
}

function ConnectionLine({ start, end }) {
  const ref = useRef()
  
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.Float32BufferAttribute([...start, ...end], 3))
    return geo
  }, [start, end])

  return (
    <line ref={ref} geometry={geometry}>
      <lineBasicMaterial color="#8b5cf6" transparent opacity={0.1} />
    </line>
  )
}

/* ===== Floating Code Snippet ===== */
function FloatingCode({ children, style }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.8 }}
      style={{
        position: 'absolute',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.7rem',
        color: 'rgba(139, 92, 246, 0.4)',
        background: 'rgba(139, 92, 246, 0.05)',
        border: '1px solid rgba(139, 92, 246, 0.1)',
        borderRadius: '8px',
        padding: '12px 16px',
        backdropFilter: 'blur(10px)',
        whiteSpace: 'pre',
        lineHeight: 1.5,
        pointerEvents: 'none',
        ...style,
      }}
    >
      {children}
    </motion.div>
  )
}

/* ===== Hero Component ===== */
export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* 3D Canvas Background */}
      <div className="hero-canvas">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 60 }}
          style={{ background: 'transparent' }}
        >
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={0.5} color="#8b5cf6" />
          <pointLight position={[-10, -10, -10]} intensity={0.3} color="#06b6d4" />
          <NeuralNetwork />
        </Canvas>
      </div>

      {/* Floating Code Snippets */}
      <FloatingCode style={{ top: '15%', right: '8%' }}>
{`def train_model():
  model.fit(X, y)
  return model.predict()`}
      </FloatingCode>

      <FloatingCode style={{ bottom: '20%', right: '12%' }}>
{`class AIAgent:
  async def think():
    return await llm.generate()`}
      </FloatingCode>

      <FloatingCode style={{ top: '35%', left: '5%' }}>
{`workflow.trigger("on_data")
  .pipe(transform)
  .execute()`}
      </FloatingCode>

      {/* Hero Content */}
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <motion.div
          className="hero-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="dot"></span>
            Available for opportunities
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Building AI Systems That{' '}
            <span className="gradient-text">Think, Automate</span>{' '}
            & Scale
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            AI Developer · Workflow Automation · Full Stack Engineer
          </motion.p>

          <motion.p
            className="hero-tagline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            ✦ Transforming Ideas into Intelligent Systems
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <a href="#projects" className="btn btn-primary">
              View Projects
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m6 17 5-5-5-5"/><path d="m13 17 5-5-5-5"/>
              </svg>
            </a>
            <a href="#contact" className="btn btn-secondary">
              Hire Me
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <div className="mouse"></div>
      </motion.div>
    </section>
  )
}
