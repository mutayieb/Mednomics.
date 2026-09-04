import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Heart, Send } from 'lucide-react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import toast from 'react-hot-toast'

const initialPosts = [
  { id: 1, author: 'Dr. Rahul K.', subject: 'Medicine', content: 'Scored 88% on the Medicine Grand Test today! The HF 4 Pillars mnemonic is 100% high-yield.', likes: 42, time: '2h ago', avatar: 'RK' },
  { id: 2, author: 'Sneha M.', subject: 'Surgery', content: 'Alvarado score mnemonic (MANTRELS) just came up in our surgery clinical ward rounds!', likes: 29, time: '5h ago', avatar: 'SM' }
]

const Community = () => {
  const [posts, setPosts] = useLocalStorage('communityPosts', initialPosts)
  const [newPost, setNewPost] = useState('')
  const [liked, setLiked] = useState(new Set())

  const addPost = () => {
    if (!newPost.trim()) return
    setPosts([{ id: Date.now(), author: 'Final Year Student', subject: 'General', content: newPost, likes: 0, time: 'Just now', avatar: 'ME' }, ...posts])
    setNewPost('')
    toast.success('Posted to peer discussion!')
  }

  const likePost = (id) => {
    if (liked.has(id)) {
      setLiked(new Set([...liked].filter((x) => x !== id)))
      setPosts(posts.map((p) => (p.id === id ? { ...p, likes: p.likes - 1 } : p)))
    } else {
      setLiked(new Set([...liked, id]))
      setPosts(posts.map((p) => (p.id === id ? { ...p, likes: p.likes + 1 } : p)))
    }
  }

  return (
    <section id="community" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="px-4 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">COMMUNITY</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-4 mb-3">
            Peer <span className="gradient-text">Discussions</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Share clinical case takeaways and high-yield doubt discussions.
          </p>
        </div>

        <div className="glass-strong rounded-2xl p-4 sm:p-5 mb-6">
          <textarea
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="Share a clinical pearl or exam tip..."
            rows={3}
            className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs sm:text-sm outline-none resize-none"
          />
          <button onClick={addPost} className="btn-primary mt-2 text-xs sm:text-sm py-2 px-4 flex items-center gap-1.5 ml-auto">
            <Send size={14} /> Post Discussion
          </button>
        </div>

        <div className="space-y-4">
          {posts.map((p) => (
            <div key={p.id} className="glass-strong rounded-2xl p-5">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-xs font-bold font-mono">
                    {p.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm">{p.author}</h4>
                    <span className="text-[10px] text-slate-400">{p.time}</span>
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary/10 text-primary">{p.subject}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{p.content}</p>
              <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-4">
                <button onClick={() => likePost(p.id)} className={`flex items-center gap-1 text-xs ${liked.has(p.id) ? 'text-danger font-bold' : 'text-slate-500'}`}>
                  <Heart size={14} className={liked.has(p.id) ? 'fill-danger text-danger' : ''} /> {p.likes}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Community
