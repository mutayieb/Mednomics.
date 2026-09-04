import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import { pyqsData, yearStats } from '../data/pyqs'

const PYQs = () => {
  const [year, setYear] = useState('All')
  const [subject, setSubject] = useState('All')
  const [search, setSearch] = useState('')

  const subjects = ['All', ...new Set(pyqsData.map((p) => p.subject))]
  const years = ['All', ...Object.keys(yearStats).sort().reverse()]

  const filtered = useMemo(() => {
    return pyqsData.filter((p) => {
      const matchYear = year === 'All' || p.year.toString() === year
      const matchSubj = subject === 'All' || p.subject === subject
      const matchSearch =
        p.question.toLowerCase().includes(search.toLowerCase()) ||
        p.answer.toLowerCase().includes(search.toLowerCase())
      return matchYear && matchSubj && matchSearch
    })
  }, [year, subject, search])

  return (
    <section id="pyqs" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="px-4 py-1 rounded-full text-xs font-semibold bg-secondary/10 text-secondary">PREVIOUS YEARS</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-4 mb-3">
            10 Years of <span className="gradient-text">AIIMS & PGI PYQs</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            High-frequency recall questions and official university examination patterns.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-3 mb-6 max-w-3xl mx-auto">
          <div className="flex-1 relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input
              type="text"
              placeholder="Search previous questions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs sm:text-sm outline-none"
            />
          </div>
          <select value={year} onChange={(e) => setYear(e.target.value)} className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs sm:text-sm outline-none">
            {years.map((y) => <option key={y}>{y}</option>)}
          </select>
          <select value={subject} onChange={(e) => setSubject(e.target.value)} className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs sm:text-sm outline-none">
            {subjects.map((s) => <option key={s}>{s}</option>)}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((p) => (
            <div key={p.id} className="glass-strong rounded-2xl p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex gap-1.5">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-primary/10 text-primary font-bold">{p.year}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-secondary/10 text-secondary font-bold">{p.university}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-accent/10 text-accent font-bold">{p.subject}</span>
                  </div>
                  <span className="text-[10px] font-semibold text-danger">{p.frequency}</span>
                </div>
                <h3 className="font-medium text-xs sm:text-sm mb-3 text-slate-900 dark:text-slate-100">{p.question}</h3>
              </div>
              <div className="p-3 rounded-xl bg-primary/5 border border-primary/20 text-xs text-primary font-semibold">
                <strong>Answer: </strong>{p.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PYQs
