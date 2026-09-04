import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Search, Bookmark, BookmarkCheck, Printer, X } from 'lucide-react'
import { allTopics } from '../data/topics'
import { useLocalStorage } from '../hooks/useLocalStorage'
import toast from 'react-hot-toast'

const TopicsLibrary = () => {
  const [search, setSearch] = useState('')
  const [difficulty, setDifficulty] = useState('All')
  const [bookmarks, setBookmarks] = useLocalStorage('bookmarks', [])
  const [selected, setSelected] = useState(null)

  const filtered = useMemo(() => {
    return allTopics.filter((t) => {
      const matchSearch =
        t.title.toLowerCase().includes(search.toLowerCase()) ||
        t.definition.toLowerCase().includes(search.toLowerCase())
      const matchDiff = difficulty === 'All' || t.difficulty === difficulty
      return matchSearch && matchDiff
    })
  }, [search, difficulty])

  const toggleBookmark = (id) => {
    if (bookmarks.includes(id)) {
      setBookmarks(bookmarks.filter((b) => b !== id))
      toast.success('Bookmark removed')
    } else {
      setBookmarks([...bookmarks, id])
      toast.success('Bookmarked!')
    }
  }

  return (
    <section id="topics" className="py-20 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="px-4 py-1 rounded-full text-xs font-semibold bg-secondary/10 text-secondary">HIGH-YIELD LIBRARY</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-4 mb-3">
            500+ <span className="gradient-text">High-Yield Topics</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Concise definitions, clinical signs, diagnostic criteria, and verified treatments.
          </p>
        </div>

        <div className="glass-strong p-4 rounded-2xl mb-6 flex flex-col md:flex-row gap-3">
          <div className="flex-1 relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search topics, syndromes, criteria..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-sm outline-none focus:ring-2 ring-primary/20"
            />
          </div>
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-sm outline-none"
          >
            <option>All</option>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
          <button onClick={() => window.print()} className="btn-primary text-sm flex items-center justify-center gap-2 py-2.5">
            <Printer size={16} /> Print Library
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((topic) => (
            <motion.div
              key={topic.id}
              whileHover={{ y: -4 }}
              className="glass-strong rounded-2xl p-5 cursor-pointer flex flex-col justify-between"
              onClick={() => setSelected(topic)}
            >
              <div>
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-base font-heading pr-2">{topic.title}</h3>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleBookmark(topic.id)
                    }}
                    className="text-accent"
                  >
                    {bookmarks.includes(topic.id) ? <BookmarkCheck size={20} className="fill-accent" /> : <Bookmark size={20} />}
                  </button>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 mb-4">{topic.definition}</p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-semibold ${
                  topic.difficulty === 'Hard' ? 'bg-danger/10 text-danger' : topic.difficulty === 'Medium' ? 'bg-accent/10 text-accent' : 'bg-success/10 text-success'
                }`}>
                  {topic.difficulty}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-mono font-semibold">
                  {topic.frequency}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-secondary/10 text-secondary font-mono font-semibold">
                  PYQ: {topic.lyq}x
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {selected && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setSelected(null)}>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="glass-strong rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl sm:text-3xl font-heading font-bold gradient-text">{selected.title}</h2>
                <button onClick={() => setSelected(null)} className="p-1 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800">
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-bold text-primary mb-1">Definition</h4>
                  <p className="text-slate-700 dark:text-slate-300">{selected.definition}</p>
                </div>
                <div>
                  <h4 className="font-bold text-secondary mb-1">Clinical Features</h4>
                  <p className="text-slate-700 dark:text-slate-300">{selected.clinical}</p>
                </div>
                <div>
                  <h4 className="font-bold text-accent mb-1">Diagnosis</h4>
                  <p className="text-slate-700 dark:text-slate-300">{selected.diagnosis}</p>
                </div>
                <div>
                  <h4 className="font-bold text-success mb-1">Treatment & Protocol</h4>
                  <p className="text-slate-700 dark:text-slate-300">{selected.treatment}</p>
                </div>
                <div className="p-3.5 rounded-xl bg-primary/5 border border-primary/20">
                  <h4 className="font-bold text-primary mb-1">High-Yield Mnemonic</h4>
                  <p className="font-mono text-xs text-slate-800 dark:text-slate-200">{selected.mnemonic}</p>
                </div>
                <div className="p-3.5 rounded-xl bg-accent/5 border border-accent/20">
                  <h4 className="font-bold text-accent mb-1">Recent 2023-2024 Guidelines</h4>
                  <p className="text-xs text-slate-700 dark:text-slate-300">{selected.updated}</p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  )
}

export default TopicsLibrary
