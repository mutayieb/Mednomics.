import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, Trash2, Download, FileText } from 'lucide-react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import toast from 'react-hot-toast'

const Notes = () => {
  const [notes, setNotes] = useLocalStorage('userNotes', [
    {
      id: 1,
      title: 'STEMI Revascularization Rules',
      content: 'Primary PCI within 90 mins (Door-to-balloon). If PCI unavailable within 120 min, give Tenecteplase thrombolysis within 30 min. Dual antiplatelets: Aspirin 300mg + Ticagrelor 180mg.',
      subject: 'Medicine',
      date: '2025-01-05'
    }
  ])

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [subject, setSubject] = useState('Medicine')

  const addNote = () => {
    if (!title.trim() || !content.trim()) {
      toast.error('Title and content are required')
      return
    }
    setNotes([{ id: Date.now(), title, content, subject, date: new Date().toISOString().split('T')[0] }, ...notes])
    setTitle('')
    setContent('')
    toast.success('Note saved locally!')
  }

  const deleteNote = (id) => {
    setNotes(notes.filter((n) => n.id !== id))
    toast.success('Note deleted')
  }

  const exportNotes = () => {
    const text = notes.map((n) => `=== ${n.title} (${n.subject} - ${n.date}) ===\n${n.content}\n\n`).join('')
    const blob = new Blob([text], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'mednomics-personal-notes.txt'
    a.click()
    toast.success('Notes exported!')
  }

  return (
    <section id="notes" className="py-20 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="px-4 py-1 rounded-full text-xs font-semibold bg-success/10 text-success">REVISION NOTEPAD</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-4 mb-3">
            Personal <span className="gradient-text">Study Notes</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Write, store, and export your personal high-yield summaries safely in your browser.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="glass-strong rounded-2xl p-6">
            <h3 className="text-base font-bold mb-3 flex items-center gap-2 font-heading">
              <Plus size={18} className="text-primary" /> Create New Note
            </h3>
            <div className="space-y-3">
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Note title..."
                className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs sm:text-sm outline-none"
              />
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs sm:text-sm outline-none"
              >
                <option>Medicine</option>
                <option>Surgery</option>
                <option>OBG</option>
                <option>Pediatrics</option>
                <option>PSM</option>
              </select>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your clinical notes here..."
                rows={5}
                className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs sm:text-sm outline-none resize-none"
              />
              <button onClick={addNote} className="btn-primary w-full text-xs sm:text-sm py-2.5">
                Save Note
              </button>
              {notes.length > 0 && (
                <button onClick={exportNotes} className="w-full py-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-xs font-semibold flex items-center justify-center gap-1.5 hover:bg-slate-300">
                  <Download size={14} /> Download Notes (.txt)
                </button>
              )}
            </div>
          </div>

          <div className="lg:col-span-2 space-y-3">
            {notes.map((n) => (
              <div key={n.id} className="glass-strong rounded-2xl p-5">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-primary/10 text-primary font-bold">{n.subject}</span>
                    <h3 className="font-bold text-sm sm:text-base mt-1 font-heading">{n.title}</h3>
                  </div>
                  <button onClick={() => deleteNote(n.id)} className="text-slate-400 hover:text-danger p-1">
                    <Trash2 size={16} />
                  </button>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 whitespace-pre-wrap leading-relaxed">{n.content}</p>
                <div className="text-[10px] text-slate-400 mt-3 font-mono">{n.date}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Notes
