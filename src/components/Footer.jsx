import React from 'react'
import { Heart, Github, Mail } from 'lucide-react'
import HeartbeatLogo from './HeartbeatLogo'

const Footer = () => {
  return (
    <footer className="py-12 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 text-slate-600 dark:text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <HeartbeatLogo size={32} />
              <span className="font-heading font-bold gradient-text text-lg">Mednomics</span>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed">
              Your ultimate MBBS Final Year companion. NMC-aligned, student-tested, and exam-ready.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100 mb-3">Core Modules</h4>
            <ul className="space-y-1.5 text-xs">
              <li><a href="#subjects" className="hover:text-primary">9 NMC Subjects</a></li>
              <li><a href="#topics" className="hover:text-primary">500+ High-Yield Topics</a></li>
              <li><a href="#mcqs" className="hover:text-primary">2000+ Clinical MCQs</a></li>
              <li><a href="#next" className="hover:text-primary">NExT Exam Guide</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100 mb-3">Clinical Tools</h4>
            <ul className="space-y-1.5 text-xs">
              <li><a href="#clinical" className="hover:text-primary">Bedside Skills</a></li>
              <li><a href="#mnemonics" className="hover:text-primary">Mnemonics Bank</a></li>
              <li><a href="#pyqs" className="hover:text-primary">10 Years PYQs</a></li>
              <li><a href="#calculators" className="hover:text-primary">Medical Calculators</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100 mb-3">Community</h4>
            <div className="flex gap-2 mb-3">
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-200 dark:bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition">
                <Github size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-200 dark:bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition">
                <Mail size={16} />
              </a>
            </div>
            <p className="text-[11px] text-slate-500">Contact: support@mednomics.app</p>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          <p>© 2025 Mednomics. Free & Open Access.</p>
          <p className="flex items-center gap-1">
            Made with <Heart size={14} className="text-danger fill-danger" /> by <span className="font-bold text-primary">Azharah Arshad</span>
          </p>
          <p>NMC CBME India Curriculum Aligned</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
