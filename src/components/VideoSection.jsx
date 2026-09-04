import React, { useState } from 'react'
import { Play, Search } from 'lucide-react'

const videos = [
  { id: 1, title: 'Acute Coronary Syndrome & MI Management', channel: 'Ninja Nerd', duration: '32:14', subject: 'Medicine', url: 'https://www.youtube.com/results?search_query=ninja+nerd+acute+coronary+syndrome' },
  { id: 2, title: 'Heart Failure 4 Pillars ESC Guidelines', channel: 'Osmosis', duration: '15:22', subject: 'Medicine', url: 'https://www.youtube.com/results?search_query=osmosis+heart+failure' },
  { id: 3, title: 'Acute Appendicitis Clinical Signs & Surgery', channel: 'Armando Hasudungan', duration: '12:45', subject: 'Surgery', url: 'https://www.youtube.com/results?search_query=armando+appendicitis' },
  { id: 4, title: 'Preeclampsia & MgSO4 Pritchard Protocol', channel: 'Medicosis Perfectionalis', duration: '18:30', subject: 'OBG', url: 'https://www.youtube.com/results?search_query=medicosis+preeclampsia' },
  { id: 5, title: 'TB National Guidelines & BPaL Regimen', channel: 'Dr. Najeeb', duration: '45:00', subject: 'Medicine', url: 'https://www.youtube.com/results?search_query=dr+najeeb+tuberculosis' },
  { id: 6, title: 'Stroke BE-FAST & Tenecteplase Thrombolysis', channel: 'Khan Academy Medicine', duration: '20:15', subject: 'Medicine', url: 'https://www.youtube.com/results?search_query=khan+academy+stroke' }
]

const VideoSection = () => {
  const [search, setSearch] = useState('')

  return (
    <section id="videos" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="px-4 py-1 rounded-full text-xs font-semibold bg-danger/10 text-danger">VIDEO LECTURES</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-4 mb-3">
            Curated <span className="gradient-text">Video Library</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Essential high-yield medical education channels hand-picked for quick concept clarity.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-3 mb-8 max-w-2xl mx-auto">
          <div className="flex-1 relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input
              type="text"
              placeholder="Search video topics..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs sm:text-sm outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.filter((v) => v.title.toLowerCase().includes(search.toLowerCase())).map((v) => (
            <a
              key={v.id}
              href={v.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-strong rounded-2xl p-5 hover:scale-[1.02] transition block group"
            >
              <div className="aspect-video rounded-xl bg-slate-800 text-white flex items-center justify-center mb-3 relative overflow-hidden">
                <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center group-hover:scale-110 transition shadow-lg">
                  <Play size={20} fill="white" className="ml-1" />
                </div>
                <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/80 text-[10px] font-mono">
                  {v.duration}
                </div>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary/10 text-primary">{v.subject}</span>
              <h3 className="font-bold text-sm mt-2 mb-1 line-clamp-2">{v.title}</h3>
              <p className="text-xs text-slate-500">{v.channel}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default VideoSection
