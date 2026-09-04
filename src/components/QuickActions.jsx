import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Zap, BookOpen, Calculator, Users, ArrowUp, Brain } from 'lucide-react'

const actions = [
  { id: 'mcqs', label: 'MCQs', icon: BookOpen, target: 'mcqs', color: 'bg-primary' },
  { id: 'mnemonics', label: 'Mnemonics', icon: Brain, target: 'mnemonics', color: 'bg-accent text-slate-900' },
  { id: 'calc', label: 'Calculators', icon: Calculator, target: 'calculators', color: 'bg-secondary' },
  { id: 'community', label: 'Community', icon: Users, target: 'community', color: 'bg-success' }
]

const QuickActions = () => {
  const [open, setOpen] = useState(false)
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed right-6 bottom-24 z-30 flex flex-col items-end gap-2.5">
      <AnimatePresence>
        {open &&
          actions.map((a, i) => (
            <motion.button
              key={a.id}
              initial={{ opacity: 0, x: 20, scale: 0.5 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.5 }}
              transition={{ delay: i * 0.04 }}
              onClick={() => {
                document.getElementById(a.target)?.scrollIntoView({ behavior: 'smooth' })
                setOpen(false)
              }}
              className={`${a.color} text-white w-11 h-11 rounded-full shadow-lg flex items-center justify-center relative group`}
            >
              <a.icon size={18} />
              <span className="absolute right-14 bg-slate-900 text-white text-[10px] font-semibold px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition pointer-events-none">
                {a.label}
              </span>
            </motion.button>
          ))}
      </AnimatePresence>

      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-slate-800 text-white w-11 h-11 rounded-full shadow-md flex items-center justify-center hover:bg-slate-700 transition"
        >
          <ArrowUp size={18} />
        </button>
      )}

      <button
        onClick={() => setOpen(!open)}
        className={`w-12 h-12 rounded-full shadow-xl flex items-center justify-center text-white transition ${
          open ? 'bg-danger' : 'bg-gradient-to-br from-primary to-secondary'
        }`}
      >
        <Zap size={18} className={open ? '' : 'animate-pulse'} />
      </button>
    </div>
  )
}

export default QuickActions
