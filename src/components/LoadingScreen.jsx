import React from 'react'
import { motion } from 'framer-motion'

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background text-white"
    >
      <div className="relative">
        <svg viewBox="0 0 200 100" className="w-72 h-36">
          <defs>
            <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#0D7377" />
              <stop offset="50%" stopColor="#06D6A0" />
              <stop offset="100%" stopColor="#FFD93D" />
            </linearGradient>
          </defs>
          <motion.path
            d="M 10 50 L 40 50 L 50 30 L 60 70 L 70 20 L 80 60 L 90 50 L 120 50 L 130 35 L 140 65 L 150 50 L 190 50"
            stroke="url(#lineGrad)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            className="stetho-anim"
          />
        </svg>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-12 h-12 rounded-full border-2 border-primary/30 border-t-primary" />
        </motion.div>
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-6 text-4xl font-bold font-heading gradient-text"
      >
        Mednomics
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-2 text-slate-400 text-sm font-medium"
      >
        Your Final Year MBBS Companion
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-6 text-xs text-slate-500 font-mono"
      >
        by Azharah Arshad
      </motion.p>
    </motion.div>
  )
}

export default LoadingScreen
