import React from 'react'
import { motion } from 'framer-motion'

const HeartbeatLogo = ({ size = 40 }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className="flex-shrink-0">
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0D7377" />
          <stop offset="100%" stopColor="#06D6A0" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14" fill="url(#logoGrad)" />
      <motion.path
        d="M8 32 L18 32 L22 22 L28 42 L34 18 L40 38 L46 32 L56 32"
        stroke="#ffffff"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      />
      <circle cx="32" cy="50" r="3" fill="#FFD93D" />
    </svg>
  )
}

export default HeartbeatLogo
