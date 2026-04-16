import { useState, useEffect } from 'react'

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -500, y: -500 })

  useEffect(() => {
    const handleMouse = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  return (
    <div
      className="cursor-glow"
      style={{ left: pos.x, top: pos.y }}
    />
  )
}
