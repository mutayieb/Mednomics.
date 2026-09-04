import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Stethoscope, Activity, AlertCircle, Search, Pill, BookOpen } from 'lucide-react'
import { clinicalProcedures, emergencyProtocols, clinicalSigns, drugInteractions, labValues } from '../data/clinical'

const ClinicalSkills = () => {
  const [tab, setTab] = useState('procedures')
  const [search, setSearch] = useState('')

  const tabs = [
    { id: 'procedures', label: 'Procedures', icon: Stethoscope },
    { id: 'emergencies', label: 'Emergencies', icon: AlertCircle },
    { id: 'signs', label: 'Clinical Signs', icon: Activity },
    { id: 'drugs', label: 'Drug Interactions', icon: Pill },
    { id: 'labs', label: 'Lab Values', icon: BookOpen }
  ]

  return (
    <section id="clinical" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="px-4 py-1 rounded-full text-xs font-semibold bg-danger/10 text-danger">BEDSIDE READY</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-4 mb-3">
            Clinical <span className="gradient-text">Skills & Procedures</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Step-by-step bedside techniques, emergency algorithms, and normal laboratory values.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`px-4 py-2 rounded-xl font-semibold flex items-center gap-2 text-xs sm:text-sm transition ${
                tab === t.id ? 'bg-primary text-white shadow-md' : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200'
              }`}
            >
              <t.icon size={16} /> {t.label}
            </button>
          ))}
        </div>

        <div className="relative mb-6 max-w-md mx-auto">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          <input
            type="text"
            placeholder="Search procedures, drugs, signs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs sm:text-sm outline-none"
          />
        </div>

        {tab === 'procedures' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {clinicalProcedures.filter((p) => p.name.toLowerCase().includes(search.toLowerCase())).map((p) => (
              <div key={p.id} className="glass-strong rounded-2xl p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-base sm:text-lg font-heading">{p.name}</h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-primary/10 text-primary font-bold">{p.subject}</span>
                </div>
                <div className="mb-3 text-xs text-slate-600 dark:text-slate-400">
                  <strong className="text-primary">Indication:</strong> {p.indication}
                </div>
                <details className="mb-3">
                  <summary className="text-xs font-bold cursor-pointer text-secondary">View Step-by-Step ({p.steps.length} Steps)</summary>
                  <ol className="text-xs space-y-1 mt-2 pl-4 list-decimal text-slate-700 dark:text-slate-300">
                    {p.steps.map((s, j) => (
                      <li key={j}>{s}</li>
                    ))}
                  </ol>
                </details>
                <div className="p-2.5 rounded-xl bg-danger/10 text-xs text-danger">
                  <strong>Complications:</strong> {p.complications}
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === 'emergencies' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {emergencyProtocols.filter((p) => p.name.toLowerCase().includes(search.toLowerCase())).map((p) => (
              <div key={p.id} className="glass-strong rounded-2xl p-6 border-l-4 border-danger">
                <h3 className="font-bold text-base sm:text-lg font-heading mb-3 flex items-center gap-2">
                  <AlertCircle className="text-danger flex-shrink-0" size={20} /> {p.name}
                </h3>
                <ol className="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  {p.steps.map((s, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="font-mono text-danger font-bold">{j + 1}.</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        )}

        {tab === 'signs' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {clinicalSigns.filter((s) => s.name.toLowerCase().includes(search.toLowerCase())).map((s, i) => (
              <div key={i} className="glass-strong rounded-xl p-4">
                <h3 className="font-bold text-sm mb-1 font-heading">{s.name}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">{s.description}</p>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-secondary/10 text-secondary">{s.condition}</span>
              </div>
            ))}
          </div>
        )}

        {tab === 'drugs' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {drugInteractions.filter((d) => d.drugs.toLowerCase().includes(search.toLowerCase())).map((d) => (
              <div key={d.id} className="glass-strong rounded-xl p-4">
                <div className="flex items-center justify-between mb-1.5">
                  <h3 className="font-bold font-heading text-sm">{d.drugs}</h3>
                  <span className="text-[10px] px-2 py-0.5 rounded-full font-mono font-bold bg-danger/10 text-danger">{d.severity}</span>
                </div>
                <p className="text-xs mb-1"><strong className="text-primary">Effect:</strong> {d.effect}</p>
                <p className="text-xs text-slate-500"><strong>Mechanism:</strong> {d.mechanism}</p>
              </div>
            ))}
          </div>
        )}

        {tab === 'labs' && (
          <div className="glass-strong rounded-2xl overflow-hidden max-w-2xl mx-auto">
            <div className="grid grid-cols-3 p-3 bg-primary/10 font-bold text-xs">
              <div>Investigation</div>
              <div>Normal Reference Range</div>
              <div>Unit</div>
            </div>
            {labValues.filter((l) => l.test.toLowerCase().includes(search.toLowerCase())).map((l, i) => (
              <div key={i} className="grid grid-cols-3 p-3 border-t border-slate-100 dark:border-slate-800 text-xs">
                <div className="font-medium">{l.test}</div>
                <div className="font-mono text-primary font-semibold">{l.normal}</div>
                <div className="font-mono text-slate-500">{l.unit}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default ClinicalSkills
