import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot, Sparkles } from 'lucide-react'

const quickReplies = [
  'Explain heart failure 4 pillars',
  'Mnemonic for Acute MI',
  'TB treatment regimen',
  'Preeclampsia MgSO4 protocol',
  'Acute appendicitis signs'
]

const AIBuddy = () => {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'bot', text: "Hi! I'm MedBot, your MBBS Final Year study buddy. Ask me any high-yield topic, diagnostic criteria, or drug protocol!" }
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)

  const getResponse = (q) => {
    const lower = q.toLowerCase()
    if (lower.includes('heart') || lower.includes('hf')) {
      return 'HFrEF 4 Pillars of Medical Therapy (2023 ESC Guidelines):\n1. ARNI (Sacubitril/Valsartan) or ACEi\n2. Evidence-based Beta-blocker (Bisoprolol/Carvedilol)\n3. MRA (Spironolactone / Eplerenone)\n4. SGLT2 inhibitor (Dapagliflozin / Empagliflozin)'
    }
    if (lower.includes('mi') || lower.includes('infarct')) {
      return 'STEMI Management Protocol:\n- Immediate MONA-B (Morphine, Oxygen, Nitrates, Aspirin 300mg, Beta-blocker)\n- Primary PCI door-to-balloon target <90 min\n- If PCI unavailable: Thrombolysis (Tenecteplase) within 30 min'
    }
    if (lower.includes('tb') || lower.includes('tuberculosis')) {
      return 'Pulmonary TB DOTS Strategy:\n- Intensive Phase (2 months): HRZE (Isoniazid, Rifampicin, Pyrazinamide, Ethambutol)\n- Continuation Phase (4 months): HRE\n- MDR-TB: All-oral Bedaquiline/Linezolid/Pretomanid (BPaL) regimen'
    }
    if (lower.includes('preeclam') || lower.includes('mgs')) {
      return 'Eclampsia MgSO4 (Pritchard Regimen):\n- Loading: 4g IV (20% sol over 5 min) + 10g IM (5g in each buttock)\n- Maintenance: 5g IM every 4 hours in alternate buttocks\n- Antidote: 10% Calcium Gluconate 10 mL IV'
    }
    if (lower.includes('appendicitis')) {
      return 'Acute Appendicitis Pearls:\n- Alvarado Score (MANTRELS): Migration, Anorexia, Nausea, Tenderness RIF, Rebound, Elevated temp, Leukocytosis, Shift\n- Signs: McBurney tenderness, Rovsing sign, Psoas sign, Obturator sign'
    }
    return "Great clinical question! In this build, I've loaded high-yield summaries for Cardiology, Pulmonology, Surgery, OBG, and Pharmacology. Try asking about 'Heart Failure', 'Acute MI', 'TB', 'MgSO4', or 'Appendicitis'."
  }

  const handleSend = (text) => {
    if (!text.trim()) return
    setMessages((prev) => [...prev, { role: 'user', text }])
    setInput('')
    setTyping(true)
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: 'bot', text: getResponse(text) }])
      setTyping(false)
    }, 600)
  }

  return (
    <>
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary text-white shadow-2xl flex items-center justify-center"
        style={{ display: open ? 'none' : 'flex' }}
      >
        <MessageCircle size={24} />
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-danger flex items-center justify-center text-[10px] font-bold">AI</span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-2rem)] h-[480px] glass-strong rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="p-4 bg-gradient-to-r from-primary to-secondary text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-xs sm:text-sm flex items-center gap-1">MedBot AI <Sparkles size={12} /></h3>
                  <p className="text-[10px] opacity-90">MBBS Final Year Buddy</p>
                </div>
              </div>
              <button onClick={() => setOpen(false)}><X size={18} /></button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3 text-xs sm:text-sm">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-3 rounded-2xl whitespace-pre-wrap leading-relaxed ${
                    m.role === 'user' ? 'bg-primary text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200'
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-2xl flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" />
                    <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
            </div>

            <div className="p-2 border-t border-slate-200 dark:border-slate-800">
              <div className="flex gap-1 mb-2 overflow-x-auto pb-1">
                {quickReplies.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(q)}
                    className="flex-shrink-0 text-[10px] px-2 py-1 rounded-full bg-primary/10 text-primary hover:bg-primary/20 font-medium"
                  >
                    {q}
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend(input)}
                  placeholder="Ask a medical question..."
                  className="flex-1 px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs sm:text-sm outline-none"
                />
                <button onClick={() => handleSend(input)} className="btn-primary p-2.5 rounded-xl flex items-center justify-center">
                  <Send size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default AIBuddy
