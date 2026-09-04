import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Globe, ExternalLink } from 'lucide-react'

const textbooks = [
  { title: "Harrison's Principles of Internal Medicine", edition: '21st Edition', subject: 'Medicine', color: 'from-blue-500 to-cyan-500' },
  { title: "Bailey & Love's Short Practice of Surgery", edition: '28th Edition', subject: 'Surgery', color: 'from-rose-500 to-pink-500' },
  { title: "Williams Obstetrics", edition: '26th Edition', subject: 'OBG', color: 'from-pink-500 to-rose-500' },
  { title: "Nelson Textbook of Pediatrics", edition: '22nd Edition', subject: 'Pediatrics', color: 'from-amber-500 to-yellow-500' }
]

const portals = [
  { name: 'NMC India Official Portal', url: 'https://www.nmc.org.in', desc: 'Curriculum regulations and guidelines' },
  { name: 'PubMed / NCBI', url: 'https://pubmed.ncbi.nlm.nih.gov', desc: 'Biomedical literature and clinical trials' },
  { name: 'Radiopaedia', url: 'https://radiopaedia.org', desc: 'Open-access radiology case library' }
]

const Resources = () => {
  return (
    <section id="resources" className="py-20 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="px-4 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent">CURATED LINKS</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-4 mb-3">
            Essential <span className="gradient-text">Medical Resources</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Standard textbooks and authoritative clinical references for Indian MBBS graduates.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {textbooks.map((b, i) => (
            <div key={i} className="glass-strong rounded-2xl p-5 flex flex-col justify-between">
              <div>
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${b.color} text-white flex items-center justify-center mb-3 shadow-md`}>
                  <BookOpen size={20} />
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary/10 text-primary">{b.subject}</span>
                <h3 className="font-bold text-sm mt-2 mb-1 leading-snug">{b.title}</h3>
              </div>
              <p className="text-xs text-slate-400 font-mono mt-3">{b.edition}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {portals.map((p, i) => (
            <a
              key={i}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-strong rounded-xl p-4 flex items-center justify-between hover:scale-[1.02] transition"
            >
              <div>
                <h4 className="font-bold text-xs sm:text-sm text-primary">{p.name}</h4>
                <p className="text-[11px] text-slate-500">{p.desc}</p>
              </div>
              <ExternalLink size={16} className="text-slate-400 flex-shrink-0" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Resources
