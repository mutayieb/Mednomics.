import React, { useState, useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Subjects from './components/Subjects'
import TopicsLibrary from './components/TopicsLibrary'
import MCQBank from './components/MCQBank'
import NEXTSection from './components/NEXTSection'
import ClinicalSkills from './components/ClinicalSkills'
import Mnemonics from './components/Mnemonics'
import PYQs from './components/PYQs'
import StudyPlanner from './components/StudyPlanner'
import VideoHub from './components/VideoHub'
import Notes from './components/Notes'
import Community from './components/Community'
import Resources from './components/Resources'
import Calculators from './components/Calculators'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import AIBuddy from './components/AIBuddy'
import QuickActions from './components/QuickActions'
import { useLocalStorage } from './hooks/useLocalStorage'

function App() {
  const [loading, setLoading] = useState(true)
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', true)
  const [progress, setProgress] = useState(0)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollProgress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0
      setProgress(scrollProgress)

      const sections = ['hero', 'subjects', 'topics', 'mcqs', 'next', 'clinical', 'mnemonics', 'pyqs', 'planner', 'videos', 'notes', 'community', 'resources', 'calculators']
      const current = sections.find((id) => {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          return rect.top <= 120 && rect.bottom >= 120
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (loading) return <LoadingScreen />

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="scroll-progress" style={{ width: `${progress}%` }} />
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: darkMode ? '#0f172a' : '#ffffff',
            color: darkMode ? '#ffffff' : '#0f172a',
            border: '1px solid rgba(255,255,255,0.1)'
          }
        }}
      />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} activeSection={activeSection} />
      <main>
        <Hero />
        <Subjects />
        <TopicsLibrary />
        <MCQBank />
        <NEXTSection />
        <ClinicalSkills />
        <Mnemonics />
        <PYQs />
        <StudyPlanner />
        <VideoHub />
        <Notes />
        <Community />
        <Resources />
        <Calculators />
      </main>
      <Footer />
      <AIBuddy />
      <QuickActions />
    </div>
  )
}

export default App
