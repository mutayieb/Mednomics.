export const cn = (...classes) => classes.filter(Boolean).join(' ')

export const calculateStreak = (history) => {
  if (!history || history.length === 0) return 0
  const today = new Date().toDateString()
  const sorted = [...history].sort((a, b) => new Date(b) - new Date(a))
  let streak = 0
  let current = new Date(today)
  for (let i = 0; i < sorted.length; i++) {
    const d = new Date(sorted[i])
    if (d.toDateString() === current.toDateString()) {
      streak++
      current.setDate(current.getDate() - 1)
    } else {
      break
    }
  }
  return streak
}

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

export const shuffle = (array) => {
  const arr = [...array]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}
