import { useRef } from 'react'
import { gsap } from 'gsap'

export default function MagneticButton({ children, className = '', ...props }) {
  const buttonRef = useRef(null)

  const handleMouseMove = (event) => {
    const button = buttonRef.current
    const rect = button.getBoundingClientRect()

    gsap.to(button, {
      x: (event.clientX - rect.left - rect.width / 2) * 0.12,
      y: (event.clientY - rect.top - rect.height / 2) * 0.12,
      duration: 0.3,
    })
  }

  const resetPosition = () => {
    gsap.to(buttonRef.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1,.4)',
    })
  }

  return (
    <a
      ref={buttonRef}
      className={`magnetic ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetPosition}
      {...props}
    >
      {children}
    </a>
  )
}
