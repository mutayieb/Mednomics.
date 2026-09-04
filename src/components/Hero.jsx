import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Stethoscope, Pill, Heart, Dna, Microscope, ArrowRight, BookOpen, Brain, Sparkles } from 'lucide-react'
import HeartbeatLogo from './HeartbeatLogo'

const Hero = () => {
  const [counts, setCounts] = useState({ students: 0, topics: 0, hours: 0 })

  useEffect(() => {
    const targets = { students: 10000, topics: 500, hours: 24 }
    const duration = 2000
    const start = Date.now()
    const timer = setInterval(() => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      setCounts({
        students: Math.floor(targets.students * progress),
        topics: Math.floor(targets.topics * progress),
        hours: Math.floor(targets.hours * progress)
      })
      if (progress === 1) clearInterval(timer)
    }, 30)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      <div className="absolute inset-0 medical-grid opacity-30 dark:opacity-20" />
      <div className="blob bg-primary w-[380px] h-[380px] -top-10 -left-10" />
      <div className="blob bg-success w-[340px] h-[340px] top-1/2 -right-10" style={{ animationDelay: '2s' }} />
      <div className="blob bg-accent w-[300px] h-[300px] -bottom-10 left-1/3" style={{ animationDelay: '4s' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <div className="relative">
            <HeartbeatLogo size={90} />
            <motion.div
              animate={{ scale: [1, 1.25, 1] }}
              transition={{ duration: 1.6, repeat: Infinity }}
              className="absolute inset-0 rounded-2xl bg-primary/20 blur-xl -z-10"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-heading font-extrabold tracking-tight leading-tight mb-6"
        >
          <span className="block text-slate-900 dark:text-white">Master MBBS Final Year</span>
          <span className="block gradient-text">with Mednomics</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8 font-normal"
        >
          Your all-in-one NMC-aligned clinical companion. High-yield notes, 2000+ MCQs, mnemonics, PYQs, and clinical skills in one place.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          {[
            { label: 'Students Helped', value: counts.students.toLocaleString(), suffix: '+' },
            { label: 'High-Yield Topics', value: counts.topics, suffix: '+' },
            { label: 'Cloud Access', value: counts.hours, suffix: '/7' }
          ].map((item, i) => (
            <div key={i} className="glass-strong px-6 py-3 rounded-2xl">
              <div className="text-2xl md:text-3xl font-bold gradient-text font-mono">
                {item.value}{item.suffix}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">{item.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <button
            onClick={() => document.getElementById('subjects')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary flex items-center gap-2 group"
          >
            Start Learning <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
          </button>
          <button
            onClick={() => document.getElementById('topics')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-secondary flex items-center gap-2"
          >
            <BookOpen size={18} /> Explore High-Yield Topics
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-500 dark:text-slate-400"
        >
          <div className="flex items-center gap-1.5"><Sparkles size={16} className="text-accent" /> 100% NMC CBME Curriculum</div>
          <div className="flex items-center gap-1.5"><Brain size={16} className="text-primary" /> NExT & NEET-PG Oriented</div>
          <div className="flex items-center gap-1.5"><Heart size={16} className="text-secondary fill-secondary" /> Created by Azharah Arshad</div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden pointer-events-none opacity-40">
        <svg viewBox="0 0 1200 80" className="w-full h-full" preserveAspectRatio="none">
          <path
            d="M 0 40 L 100 40 L 120 20 L 140 60 L 160 10 L 180 70 L 200 40 L 400 40 L 420 20 L 440 60 L 460 10 L 480 70 L 500 40 L 700 40 L 720 20 L 740 60 L 760 10 L 780 70 L 800 40 L 1200 40"
            stroke="#0D7377"
            strokeWidth="2"
            fill="none"
            className="ecg-line"
          />
        </svg>
      </div>
    </section>
  )
}

export default Hero
