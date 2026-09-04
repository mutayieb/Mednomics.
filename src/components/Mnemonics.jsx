import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Search, Copy } from 'lucide-react'
import { mnemonicsBank } from '../data/mnemonics'
import toast from 'react-hot-toast'

const Mnemonics = () => {
  const [search, setSearch] = useState('')
  const [subject, setSubject] = useState('All')

  const filtered = useMemo(() => {
    return mnemonicsBank.filter((m) => {
      const matchSearch =
        m.mnemonic.toLowerCase().includes(search.toLowerCase()) ||
        m.title.toLowerCase().includes(search.toLowerCase())
      const matchSubj = subject === 'All' || m.subject === subject
      return matchSearch && matchSubj
    })
  }, [search, subject])

  const copyMnemonic = (m) => {
    navigator.clipboard.writeText(`${m.title}: ${m.mnemonic} - ${m.expansion}`)
    toast.success('Copied to clipboard!')
  }

  return (
    <section id="mnemonics" className="py-20 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="px-4 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent">MEMORY SHORTCUTS</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-4 mb-3">
            500+ <span className="gradient-text">Medical Mnemonics</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            High-yield memory hooks to ace Viva and NEXT multiple-choice questions.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-3 mb-8 max-w-2xl mx-auto">
          <div className="flex-1 relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input
              type="text"
              placeholder="Search mnemonic or keyword..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs sm:text-sm outline-none"
            />
          </div>
          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs sm:text-sm outline-none"
          >
            <option>All</option>
            <option>Medicine</option>
            <option>Surgery</option>
            <option>OBG</option>
            <option>Pediatrics</option>
            <option>Orthopedics</option>
            <option>Dermatology</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((m) => (
            <motion.div
              key={m.id}
              whileHover={{ y: -3 }}
              className="glass-strong rounded-2xl p-5 cursor-pointer group flex flex-col justify-between"
              onClick={() => copyMnemonic(m)}
            >
              <div>
                <div className="flex items-start justify-between mb-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-primary/10 text-primary font-bold">{m.subject}</span>
                  <Copy size={14} className="text-slate-400 group-hover:text-primary transition" />
                </div>
                <h3 className="text-xs text-slate-500 font-medium mb-1">{m.title}</h3>
                <div className="text-xl sm:text-2xl font-bold font-mono gradient-text mb-2 break-words">{m.mnemonic}</div>
                <p className="text-xs text-slate-700 dark:text-slate-300 mb-2 leading-relaxed">
                  <strong className="text-primary font-semibold">Expansion: </strong>{m.expansion}
                </p>
              </div>
              <p className="text-[11px] text-slate-400 italic mt-2 border-t border-slate-100 dark:border-slate-800 pt-2">{m.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Mnemonics
