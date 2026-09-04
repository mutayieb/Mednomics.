import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, CheckCircle, Plus, Trash2, Target } from 'lucide-react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import toast from 'react-hot-toast'

const StudyPlanner = () => {
  const [tasks, setTasks] = useLocalStorage('studyTasks', [
    { id: 1, task: 'Review Acute Myocardial Infarction Management', subject: 'Medicine', date: '2025-01-10', done: false },
    { id: 2, task: 'Solve 20 Surgery Appendicitis MCQs', subject: 'Surgery', date: '2025-01-11', done: false },
    { id: 3, task: 'Memorize MgSO4 Pritchard Eclampsia Regimen', subject: 'OBG', date: '2025-01-12', done: true }
  ])

  const [newTask, setNewTask] = useState('')
  const [newSubject, setNewSubject] = useState('Medicine')
  const [newDate, setNewDate] = useState('')

  const addTask = () => {
    if (!newTask.trim() || !newDate) {
      toast.error('Please enter task and date')
      return
    }
    setTasks([...tasks, { id: Date.now(), task: newTask, subject: newSubject, date: newDate, done: false }])
    setNewTask('')
    setNewDate('')
    toast.success('Task scheduled!')
  }

  const toggleTask = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id))
    toast.success('Task removed')
  }

  const completed = tasks.filter((t) => t.done).length

  return (
    <section id="planner" className="py-20 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="px-4 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">ORGANIZER</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-4 mb-3">
            MBBS Study <span className="gradient-text">Planner</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Track daily syllabus milestones and maintain steady consistency.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="glass-strong rounded-2xl p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2 font-heading">
              <Plus className="text-primary" size={18} /> Schedule Topic
            </h3>
            <div className="space-y-3">
              <input
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Topic or test target..."
                className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs sm:text-sm outline-none"
              />
              <select
                value={newSubject}
                onChange={(e) => setNewSubject(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs sm:text-sm outline-none"
              >
                <option>Medicine</option>
                <option>Surgery</option>
                <option>OBG</option>
                <option>Pediatrics</option>
                <option>ENT</option>
                <option>Ophthalmology</option>
                <option>PSM</option>
              </select>
              <input
                type="date"
                value={newDate}
                onChange={(e) => setNewDate(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs sm:text-sm outline-none"
              />
              <button onClick={addTask} className="btn-primary w-full text-xs sm:text-sm py-2.5">
                Add to Schedule
              </button>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 text-center">
              <div className="text-2xl font-bold font-mono gradient-text">{completed}/{tasks.length}</div>
              <div className="text-xs text-slate-500 font-medium">Tasks Completed</div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-2">
            {tasks.map((t) => (
              <div
                key={t.id}
                className={`p-3.5 rounded-xl glass-strong flex items-center gap-3 transition ${
                  t.done ? 'opacity-70 bg-success/5' : ''
                }`}
              >
                <button onClick={() => toggleTask(t.id)} className="text-primary flex-shrink-0">
                  {t.done ? <CheckCircle className="text-success" size={20} /> : <div className="w-5 h-5 rounded-full border-2 border-slate-400" />}
                </button>
                <div className="flex-1 min-w-0">
                  <p className={`text-xs sm:text-sm font-medium ${t.done ? 'line-through text-slate-400' : ''}`}>{t.task}</p>
                  <div className="flex gap-2 text-[10px] text-slate-500 mt-0.5">
                    <span className="font-semibold text-primary">{t.subject}</span>
                    <span>•</span>
                    <span>{t.date}</span>
                  </div>
                </div>
                <button onClick={() => deleteTask(t.id)} className="text-slate-400 hover:text-danger p-1">
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default StudyPlanner
