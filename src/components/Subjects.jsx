import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Stethoscope, Scissors, Baby, Smile, Bone, Ear, Eye, Globe, Sparkles, ChevronRight, Award } from 'lucide-react'
import { subjects } from '../data/subjects'
import { useLocalStorage } from '../hooks/useLocalStorage'
import toast from 'react-hot-toast'

const iconMap = { Stethoscope, Scissors, Baby, Smile, Bone, Ear, Eye, Globe, Sparkles }

const Subjects = () => {
  const [completed, setCompleted] = useLocalStorage('completedTopics', {})
  const [expanded, setExpanded] = useState(null)

  const toggleTopic = (subjId, topicIdx) => {
    const key = `${subjId}-${topicIdx}`
    const newState = { ...completed, [key]: !completed[key] }
    setCompleted(newState)
    if (!completed[key]) toast.success('Topic completed!')
  }

  return (
    <section id="subjects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="px-4 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">9 NMC SUBJECTS</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-4 mb-3">
            Your Complete <span className="gradient-text">Subject Library</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Structured high-yield chapters aligned with the latest CBME NMC curriculum guidelines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subj, i) => {
            const Icon = iconMap[subj.icon] || Stethoscope
            const isExpanded = expanded === subj.id
            const compCount = subj.chapters.filter((_, idx) => completed[`${subj.id}-${idx}`]).length

            return (
              <motion.div
                key={subj.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-strong rounded-2xl overflow-hidden flex flex-col"
              >
                <div className={`h-2 bg-gradient-to-r ${subj.color}`} />
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${subj.color} text-white shadow-md`}>
                        <Icon size={24} />
                      </div>
                      <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        {subj.topics} Topics
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-2 font-heading">{subj.name}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{subj.description}</p>

                    <div className="mb-4">
                      <div className="flex justify-between text-xs mb-1.5 font-medium">
                        <span className="text-slate-500">Chapters Completed</span>
                        <span className="font-mono text-primary">{compCount}/{subj.chapters.length}</span>
                      </div>
                      <div className="h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${subj.color} transition-all duration-300`}
                          style={{ width: `${(compCount / subj.chapters.length) * 100}%` }}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                      <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60">
                        <div className="text-base font-bold text-primary font-mono">{subj.mcqs}</div>
                        <div className="text-[10px] text-slate-500">MCQs</div>
                      </div>
                      <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60">
                        <div className="text-base font-bold text-secondary font-mono">50+</div>
                        <div className="text-[10px] text-slate-500">Mnemonics</div>
                      </div>
                      <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60">
                        <div className="text-base font-bold text-accent font-mono">10yr</div>
                        <div className="text-[10px] text-slate-500">PYQs</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <button
                      onClick={() => setExpanded(isExpanded ? null : subj.id)}
                      className={`w-full py-2.5 rounded-xl flex items-center justify-center gap-1.5 text-sm font-semibold transition ${
                        isExpanded ? 'bg-primary text-white' : 'bg-primary/10 text-primary hover:bg-primary/20'
                      }`}
                    >
                      {isExpanded ? 'Hide Chapters' : 'View Chapters'}
                      <ChevronRight size={16} className={`transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                    </button>

                    {isExpanded && (
                      <div className="mt-3 space-y-1.5 max-h-56 overflow-y-auto pr-1">
                        {subj.chapters.map((ch, idx) => {
                          const isDone = completed[`${subj.id}-${idx}`]
                          return (
                            <button
                              key={idx}
                              onClick={() => toggleTopic(subj.id, idx)}
                              className={`w-full text-left p-2 rounded-lg text-xs font-medium flex items-center gap-2 transition ${
                                isDone
                                  ? 'bg-success/10 text-success line-through'
                                  : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                              }`}
                            >
                              <Award size={14} className={isDone ? 'text-success' : 'text-slate-400'} />
                              <span>{ch}</span>
                            </button>
                          )
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Subjects
