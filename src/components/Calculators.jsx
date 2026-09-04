import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Activity, Droplet, Plus, Heart } from 'lucide-react'
import toast from 'react-hot-toast'

const calcTypes = [
  { id: 'bmi', name: 'BMI', icon: Activity },
  { id: 'gfr', name: 'GFR (CKD-EPI)', icon: Droplet },
  { id: 'anion', name: 'Anion Gap', icon: Plus },
  { id: 'bsa', name: 'BSA (Mosteller)', icon: Heart }
]

const Calculators = () => {
  const [active, setActive] = useState('bmi')

  const [bmi, setBmi] = useState({ height: 170, weight: 70, result: null, category: '' })
  const [gfr, setGfr] = useState({ age: 50, creatinine: 1.0, gender: 'male', result: null })
  const [anion, setAnion] = useState({ na: 140, cl: 100, hco3: 24, result: null })
  const [bsa, setBsa] = useState({ height: 170, weight: 70, result: null })

  const calcBMI = () => {
    const h = bmi.height / 100
    const res = (bmi.weight / (h * h)).toFixed(1)
    let cat = 'Normal'
    if (res < 18.5) cat = 'Underweight'
    else if (res >= 25 && res < 30) cat = 'Overweight'
    else if (res >= 30) cat = 'Obese'
    setBmi({ ...bmi, result: res, category: cat })
    toast.success(`BMI: ${res} (${cat})`)
  }

  const calcGFR = () => {
    const k = gfr.gender === 'female' ? 0.7 : 0.9
    const alpha = gfr.gender === 'female' ? -0.241 : -0.302
    const scrK = Math.pow(gfr.creatinine / k, alpha)
    const ageFactor = Math.pow(0.9938, gfr.age)
    const femaleFactor = gfr.gender === 'female' ? 1.012 : 1.0
    const res = Math.round(142 * scrK * ageFactor * femaleFactor)
    setGfr({ ...gfr, result: res })
    toast.success(`eGFR: ${res} mL/min/1.73m²`)
  }

  const calcAnion = () => {
    const res = (anion.na - (anion.cl + anion.hco3)).toFixed(1)
    setAnion({ ...anion, result: res })
    toast.success(`Anion Gap: ${res} mEq/L`)
  }

  const calcBSA = () => {
    const res = Math.sqrt((bsa.height * bsa.weight) / 3600).toFixed(2)
    setBsa({ ...bsa, result: res })
    toast.success(`BSA: ${res} m²`)
  }

  return (
    <section id="calculators" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="px-4 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">DECISION TOOLS</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-4 mb-3">
            Medical <span className="gradient-text">Calculators</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Standard formulas for bedside assessment and dosage calculations.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {calcTypes.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`px-4 py-2 rounded-xl font-semibold flex items-center gap-2 text-xs sm:text-sm transition ${
                active === c.id ? 'btn-primary' : 'bg-slate-100 dark:bg-slate-800'
              }`}
            >
              <c.icon size={16} /> {c.name}
            </button>
          ))}
        </div>

        <div className="max-w-lg mx-auto glass-strong rounded-2xl p-6 sm:p-8">
          {active === 'bmi' && (
            <div className="space-y-4">
              <h3 className="font-bold text-lg font-heading">Body Mass Index (BMI)</h3>
              <div>
                <label className="text-xs font-semibold text-slate-500">Height (cm)</label>
                <input
                  type="number"
                  value={bmi.height}
                  onChange={(e) => setBmi({ ...bmi, height: +e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-sm outline-none mt-1"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-500">Weight (kg)</label>
                <input
                  type="number"
                  value={bmi.weight}
                  onChange={(e) => setBmi({ ...bmi, weight: +e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-sm outline-none mt-1"
                />
              </div>
              <button onClick={calcBMI} className="btn-primary w-full text-sm py-2.5">Calculate BMI</button>
              {bmi.result && (
                <div className="p-4 rounded-xl bg-primary/10 text-center mt-3">
                  <div className="text-3xl font-bold font-mono text-primary">{bmi.result}</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 font-semibold">{bmi.category}</div>
                </div>
              )}
            </div>
          )}

          {active === 'gfr' && (
            <div className="space-y-4">
              <h3 className="font-bold text-lg font-heading">CKD-EPI eGFR Calculator</h3>
              <div>
                <label className="text-xs font-semibold text-slate-500">Age (years)</label>
                <input
                  type="number"
                  value={gfr.age}
                  onChange={(e) => setGfr({ ...gfr, age: +e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-sm outline-none mt-1"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-500">Serum Creatinine (mg/dL)</label>
                <input
                  type="number"
                  step="0.1"
                  value={gfr.creatinine}
                  onChange={(e) => setGfr({ ...gfr, creatinine: +e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-sm outline-none mt-1"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-500">Biological Sex</label>
                <select
                  value={gfr.gender}
                  onChange={(e) => setGfr({ ...gfr, gender: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-sm outline-none mt-1"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <button onClick={calcGFR} className="btn-primary w-full text-sm py-2.5">Calculate eGFR</button>
              {gfr.result && (
                <div className="p-4 rounded-xl bg-primary/10 text-center mt-3">
                  <div className="text-3xl font-bold font-mono text-primary">{gfr.result}</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">mL/min/1.73m²</div>
                </div>
              )}
            </div>
          )}

          {active === 'anion' && (
            <div className="space-y-4">
              <h3 className="font-bold text-lg font-heading">Serum Anion Gap</h3>
              <div>
                <label className="text-xs font-semibold text-slate-500">Serum Na+ (mEq/L)</label>
                <input
                  type="number"
                  value={anion.na}
                  onChange={(e) => setAnion({ ...anion, na: +e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-sm outline-none mt-1"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-500">Serum Cl- (mEq/L)</label>
                <input
                  type="number"
                  value={anion.cl}
                  onChange={(e) => setAnion({ ...anion, cl: +e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-sm outline-none mt-1"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-500">Serum HCO3- (mEq/L)</label>
                <input
                  type="number"
                  value={anion.hco3}
                  onChange={(e) => setAnion({ ...anion, hco3: +e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-sm outline-none mt-1"
                />
              </div>
              <button onClick={calcAnion} className="btn-primary w-full text-sm py-2.5">Calculate Anion Gap</button>
              {anion.result && (
                <div className="p-4 rounded-xl bg-primary/10 text-center mt-3">
                  <div className="text-3xl font-bold font-mono text-primary">{anion.result}</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">mEq/L (Normal: 8-12)</div>
                </div>
              )}
            </div>
          )}

          {active === 'bsa' && (
            <div className="space-y-4">
              <h3 className="font-bold text-lg font-heading">Body Surface Area (Mosteller)</h3>
              <div>
                <label className="text-xs font-semibold text-slate-500">Height (cm)</label>
                <input
                  type="number"
                  value={bsa.height}
                  onChange={(e) => setBsa({ ...bsa, height: +e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-sm outline-none mt-1"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-500">Weight (kg)</label>
                <input
                  type="number"
                  value={bsa.weight}
                  onChange={(e) => setBsa({ ...bsa, weight: +e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-sm outline-none mt-1"
                />
              </div>
              <button onClick={calcBSA} className="btn-primary w-full text-sm py-2.5">Calculate BSA</button>
              {bsa.result && (
                <div className="p-4 rounded-xl bg-primary/10 text-center mt-3">
                  <div className="text-3xl font-bold font-mono text-primary">{bsa.result}</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">m²</div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Calculators
