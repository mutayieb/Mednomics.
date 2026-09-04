import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, XCircle, Clock, ChevronRight, RotateCcw, Flag, Play, Trophy, BookOpen } from 'lucide-react'
import { allMCQs } from '../data/mcqs'
import { subjects } from '../data/subjects'
import { useLocalStorage } from '../hooks/useLocalStorage'
import toast from 'react-hot-toast'

const MCQBank = () => {
  const [mode, setMode] = useState('menu')
  const [questions, setQuestions] = useState([])
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState({})
  const [showResult, setShowResult] = useState(false)
  const [timeLeft, setTimeLeft] = useState(0)
  const [timerOn, setTimerOn] = useState(false)
  const [flagged, setFlagged] = useState(new Set())
  const [stats, setStats] = useLocalStorage('mcqStats', { attempted: 0, correct: 0, tests: 0 })

  useEffect(() => {
    if (!timerOn || timeLeft <= 0) return
    const t = setTimeout(() => {
      if (timeLeft === 1) {
        toast.error('Time up!')
        setShowResult(true)
        setTimerOn(false)
      } else {
        setTimeLeft(timeLeft - 1)
      }
    }, 1000)
    return () => clearTimeout(t)
  }, [timeLeft, timerOn])

  const startTest = (subj = null, count = 5) => {
    let qs = subj ? allMCQs.filter((q) => q.subject.toLowerCase() === subj.toLowerCase()) : allMCQs
    if (qs.length === 0) qs = allMCQs
    const shuffled = [...qs].sort(() => Math.random() - 0.5).slice(0, count)
    setQuestions(shuffled)
    setCurrent(0)
    setAnswers({})
    setShowResult(false)
    setFlagged(new Set())
    setTimeLeft(shuffled.length * 60)
    setTimerOn(true)
    setMode('test')
  }

  const selectAnswer = (qIdx, optIdx) => {
    if (showResult) return
    setAnswers({ ...answers, [qIdx]: optIdx })
  }

  const submitTest = () => {
    let correct = 0
    questions.forEach((q, i) => {
      if (answers[i] === q.correct) correct++
    })
    setStats({
      attempted: stats.attempted + questions.length,
      correct: stats.correct + correct,
      tests: stats.tests + 1
    })
    setShowResult(true)
    setTimerOn(false)
    toast.success(`Test Complete! Score: ${correct}/${questions.length}`)
  }

  const formatTime = (s) => `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, '0')}`

  if (mode === 'menu') {
    return (
      <section id="mcqs" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="px-4 py-1 rounded-full text-xs font-semibold bg-success/10 text-success">PRACTICE ZONE</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mt-4 mb-3">
              Master with <span className="gradient-text">2000+ MCQs</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
              NExT / NEET-PG standard clinical scenario questions with detailed rationales.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Tests Taken', value: stats.tests, color: 'text-primary' },
              { label: 'Questions Solved', value: stats.attempted, color: 'text-secondary' },
              { label: 'Correct Answers', value: stats.correct, color: 'text-success' },
              {
                label: 'Accuracy',
                value: stats.attempted ? `${Math.round((stats.correct / stats.attempted) * 100)}%` : '0%',
                color: 'text-accent'
              }
            ].map((s, i) => (
              <div key={i} className="glass-strong p-5 rounded-2xl text-center">
                <div className={`text-2xl sm:text-3xl font-bold font-mono ${s.color}`}>{s.value}</div>
                <div className="text-xs text-slate-500 font-medium mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <button onClick={() => startTest(null, 5)} className="glass-strong p-6 rounded-2xl text-left hover:scale-[1.02] transition group">
              <Play className="text-primary mb-3" size={32} />
              <h3 className="font-bold text-lg mb-1 font-heading">Quick Practice</h3>
              <p className="text-xs text-slate-500">5 high-yield mixed subject questions (5 mins)</p>
            </button>
            <button onClick={() => startTest(null, 10)} className="glass-strong p-6 rounded-2xl text-left hover:scale-[1.02] transition group">
              <Trophy className="text-accent mb-3" size={32} />
              <h3 className="font-bold text-lg mb-1 font-heading">Full Mock Test</h3>
              <p className="text-xs text-slate-500">10 clinical vignettes across all clinical disciplines</p>
            </button>
            <button onClick={() => startTest('Medicine', 5)} className="glass-strong p-6 rounded-2xl text-left hover:scale-[1.02] transition group">
              <BookOpen className="text-secondary mb-3" size={32} />
              <h3 className="font-bold text-lg mb-1 font-heading">Medicine Grand Test</h3>
              <p className="text-xs text-slate-500">Cardiology, Pulmonology, Nephrology & Neurology</p>
            </button>
          </div>
        </div>
      </section>
    )
  }

  const q = questions[current] || questions[0]
  const userAns = answers[current]

  return (
    <section className="py-20 min-h-screen">
      <div className="max-w-3xl mx-auto px-4">
        <div className="glass-strong rounded-2xl p-4 mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="font-mono text-xs sm:text-sm bg-primary/10 text-primary px-3 py-1 rounded-full font-bold">
              Q {current + 1}/{questions.length}
            </span>
            <span className="text-xs text-slate-500 font-medium">{q?.subject}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className={`flex items-center gap-1 font-mono text-xs sm:text-sm font-semibold ${timeLeft < 60 ? 'text-danger animate-pulse' : 'text-primary'}`}>
              <Clock size={16} /> {formatTime(timeLeft)}
            </span>
            <button
              onClick={() => {
                const n = new Set(flagged)
                n.has(current) ? n.delete(current) : n.add(current)
                setFlagged(n)
              }}
              className={flagged.has(current) ? 'text-accent' : 'text-slate-400'}
            >
              <Flag size={18} />
            </button>
          </div>
        </div>

        <motion.div key={current} initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} className="glass-strong rounded-2xl p-6 sm:p-8">
          <h3 className="text-base sm:text-lg font-medium mb-6 leading-relaxed text-slate-900 dark:text-slate-100">{q?.question}</h3>

          <div className="space-y-3">
            {q?.options.map((opt, i) => {
              const isUser = userAns === i
              const isCorrect = q.correct === i
              return (
                <button
                  key={i}
                  onClick={() => selectAnswer(current, i)}
                  className={`w-full text-left p-3.5 sm:p-4 rounded-xl border-2 transition flex items-center gap-3 ${
                    showResult
                      ? isCorrect
                        ? 'border-success bg-success/10 text-success'
                        : isUser
                        ? 'border-danger bg-danger/10 text-danger'
                        : 'border-slate-200 dark:border-slate-800'
                      : isUser
                      ? 'border-primary bg-primary/10 text-primary font-medium'
                      : 'border-slate-200 dark:border-slate-800 hover:border-primary/40'
                  }`}
                >
                  <span className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border border-current flex-shrink-0">
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span className="flex-1 text-xs sm:text-sm text-slate-800 dark:text-slate-200">{opt}</span>
                  {showResult && isCorrect && <CheckCircle2 size={18} className="text-success" />}
                  {showResult && isUser && !isCorrect && <XCircle size={18} className="text-danger" />}
                </button>
              )
            })}
          </div>

          {showResult && (
            <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/20 text-xs sm:text-sm">
              <strong className="text-primary block mb-1">Detailed Rationale:</strong>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{q.explanation}</p>
            </div>
          )}

          <div className="flex justify-between items-center mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
            <button
              onClick={() => setCurrent(Math.max(0, current - 1))}
              disabled={current === 0}
              className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs sm:text-sm font-medium disabled:opacity-40"
            >
              Previous
            </button>
            {current === questions.length - 1 ? (
              !showResult ? (
                <button onClick={submitTest} className="btn-primary text-xs sm:text-sm py-2 px-5">Submit Test</button>
              ) : (
                <button onClick={() => setMode('menu')} className="btn-secondary text-xs sm:text-sm py-2 px-5">Exit Test</button>
              )
            ) : (
              <button onClick={() => setCurrent(current + 1)} className="btn-primary text-xs sm:text-sm py-2 px-5 flex items-center gap-1">
                Next <ChevronRight size={16} />
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MCQBank
