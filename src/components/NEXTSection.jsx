import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Target, CheckCircle, AlertCircle, BookOpen, TrendingUp, Award, Activity, BarChart3 } from 'lucide-react'

const NEXTSection = () => {
  const [targetYear, setTargetYear] = useState('2025')

  const syllabus = [
    { phase: 'Pre-clinical (Phase 1)', subjects: ['Anatomy', 'Physiology', 'Biochemistry'], weight: '10%', color: 'from-teal-500 to-cyan-600' },
    { phase: 'Para-clinical (Phase 2)', subjects: ['Pathology', 'Microbiology', 'Pharmacology', 'FMT'], weight: '20%', color: 'from-blue-500 to-indigo-600' },
    { phase: 'Clinical Core (Phase 3 Part 1)', subjects: ['General Medicine', 'General Surgery', 'OBG', 'Pediatrics'], weight: '50%', color: 'from-rose-500 to-pink-600' },
    { phase: 'Allied & Minor (Phase 3 Part 2)', subjects: ['Ophtha', 'ENT', 'PSM', 'Orthopedics', 'Derma'], weight: '20%', color: 'from-emerald-500 to-green-600' }
  ]

  return (
    <section id="next" className="py-20 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="px-4 py-1 rounded-full text-xs font-semibold bg-danger/10 text-danger">NEXT READY</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-4 mb-3">
            NExT <span className="gradient-text">Exam Preparation</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            National Exit Test roadmap, weightage breakdowns, and clinical vignette preparation strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="glass-strong p-6 rounded-2xl">
            <Calendar className="text-primary mb-3" size={28} />
            <h3 className="font-bold text-lg mb-2 font-heading">Exam Pattern</h3>
            <ul className="text-xs sm:text-sm space-y-2 text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2"><CheckCircle size={14} className="text-success mt-0.5 flex-shrink-0" /> Step 1: All-India computer-based MCQ exam</li>
              <li className="flex items-start gap-2"><CheckCircle size={14} className="text-success mt-0.5 flex-shrink-0" /> Step 2: Clinical practical / OSCE examination</li>
              <li className="flex items-start gap-2"><AlertCircle size={14} className="text-accent mt-0.5 flex-shrink-0" /> Negative marking: -0.25 for incorrect answers</li>
            </ul>
          </div>

          <div className="glass-strong p-6 rounded-2xl">
            <Target className="text-secondary mb-3" size={28} />
            <h3 className="font-bold text-lg mb-2 font-heading">Eligibility & Rules</h3>
            <ul className="text-xs sm:text-sm space-y-2 text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2"><CheckCircle size={14} className="text-success mt-0.5 flex-shrink-0" /> Final year MBBS students in recognized colleges</li>
              <li className="flex items-start gap-2"><CheckCircle size={14} className="text-success mt-0.5 flex-shrink-0" /> License to practice + PG admission quota combined</li>
              <li className="flex items-start gap-2"><CheckCircle size={14} className="text-success mt-0.5 flex-shrink-0" /> Replaces NEET-PG and FMGE entirely</li>
            </ul>
          </div>

          <div className="glass-strong p-6 rounded-2xl">
            <BarChart3 className="text-accent mb-3" size={28} />
            <h3 className="font-bold text-lg mb-2 font-heading">Passing Criteria</h3>
            <ul className="text-xs sm:text-sm space-y-2 text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2"><CheckCircle size={14} className="text-success mt-0.5 flex-shrink-0" /> Minimum 50% score required to clear Step 1</li>
              <li className="flex items-start gap-2"><CheckCircle size={14} className="text-success mt-0.5 flex-shrink-0" /> Step 1 score valid for 5 years for PG ranking</li>
              <li className="flex items-start gap-2"><CheckCircle size={14} className="text-success mt-0.5 flex-shrink-0" /> Step 2 is Pass/Fail without numeric ranking</li>
            </ul>
          </div>
        </div>

        <div className="glass-strong rounded-2xl p-6 mb-8">
          <h3 className="text-xl font-heading font-bold mb-4 flex items-center gap-2">
            <BookOpen className="text-primary" size={22} /> Subject-Wise Question Weightage
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {syllabus.map((s, i) => (
              <div key={i} className="rounded-xl overflow-hidden glass border border-slate-200 dark:border-slate-800">
                <div className={`bg-gradient-to-br ${s.color} text-white p-4`}>
                  <div className="text-3xl font-bold font-mono">{s.weight}</div>
                  <div className="text-xs font-semibold mt-1">{s.phase}</div>
                </div>
                <div className="p-3 text-xs space-y-1 text-slate-600 dark:text-slate-300">
                  {s.subjects.map((sub, j) => (
                    <div key={j}>• {sub}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default NEXTSection
