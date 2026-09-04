export const clinicalProcedures = [
  {
    id: 'cp1',
    name: 'Lumbar Puncture',
    subject: 'Medicine',
    indication: 'Meningitis, subarachnoid hemorrhage, CNS staging, opening pressure',
    steps: [
      'Position patient in left lateral decubitus with knees to chest and neck flexed.',
      'Identify L3-L4 or L4-L5 interspace using the superior iliac crest intercristal line.',
      'Sterile prep, drape, and inject 1-2% lignocaine local anesthesia.',
      'Insert 22G Quincke/pencil-point spinal needle with stylet aimed toward umbilicus.',
      'Advance needle until resistance gives way ("pop" across ligamentum flavum).',
      'Remove stylet, check CSF flow, measure opening pressure with manometer.',
      'Collect CSF in 4 sterile containers for biochemistry, cytology, culture, and special tests.'
    ],
    complications: 'Post-LP low-pressure headache, brain herniation (if raised ICP), localized hematoma, infection.'
  },
  {
    id: 'cp2',
    name: 'Endotracheal Intubation',
    subject: 'Anesthesia/Medicine',
    indication: 'Airway protection, respiratory arrest, severe GCS <= 8, general anesthesia',
    steps: [
      'Pre-oxygenate with 100% O2 via reservoir mask for 3-5 minutes.',
      'Align oral, pharyngeal, and laryngeal axes in sniffing position.',
      'Insert curved Macintosh blade into right side of mouth and sweep tongue to left.',
      'Advance blade tip into vallecula and lift upward and forward at 45 degrees without levering teeth.',
      'Visualize vocal cords under direct vision and pass cuffed ET tube (size 7.0-8.0 mm).',
      'Inflate pilot balloon cuff and confirm bilateral breath sounds and 5-point auscultation + capnography.'
    ],
    complications: 'Esophageal intubation, dental trauma, vocal cord injury, hypoxia, bronchospasm.'
  },
  {
    id: 'cp3',
    name: 'Abdominal Paracentesis',
    subject: 'Medicine',
    indication: 'Diagnostic evaluation of new ascites, therapeutic relief of tense ascites',
    steps: [
      'Ensure patient has voided bladder; position semi-recumbent.',
      'Identify tap site 2-3 cm medial and superior to ASIS in left lower quadrant.',
      'Sterile skin preparation and infiltrate local anesthetic down to peritoneal fascia.',
      'Advance needle using Z-track technique (traction on skin) to prevent post-procedure fistula.',
      'Aspirate fluid for SAAG calculation, cell count, albumin, cytology, culture.',
      'If removing >5L, infuse 6-8g intravenous albumin per liter of ascites removed.'
    ],
    complications: 'Bowel perforation, inferior epigastric artery puncture, persistent ascites leak, circulatory collapse.'
  }
]

export const emergencyProtocols = [
  {
    id: 'em1',
    name: 'Anaphylaxis Protocol',
    steps: [
      'Inject Intramuscular Adrenaline 0.5 mg (1:1000) into mid-outer anterolateral thigh immediately.',
      'Position patient flat and elevate lower extremities (avoid standing/sitting).',
      'Administer high-flow 100% oxygen via non-rebreather mask.',
      'Establish wide-bore IV access and rapidly infuse 1000-2000 mL normal saline bolus.',
      'Repeat IM Adrenaline every 5-15 minutes if symptoms persist or deteriorate.',
      'Administer IV Hydrocortisone 200 mg and IV Chlorpheniramine 10-20 mg slow IV.',
      'Admit and monitor for biphasic anaphylactic reactions for minimum 6-12 hours.'
    ]
  },
  {
    id: 'em2',
    name: 'Cardiac Arrest (ACLS Adult BLS/ALS)',
    steps: [
      'Verify scene safety, check responsiveness and carotid pulse for max 10 seconds.',
      'Call for defibrillator and activate code blue immediately.',
      'Commence high-quality chest compressions at 100-120/min and depth 5-6 cm (30:2 ratio).',
      'Attach defibrillator pads; identify rhythm (Shockable: VF/pVT vs Non-shockable: Asystole/PEA).',
      'If Shockable: Deliver 200J biphasic shock and resume CPR immediately for 2 minutes.',
      'Give IV Adrenaline 1 mg every 3-5 minutes; Amiodarone 300 mg bolus after 3rd shock.',
      'Search and treat reversible causes: 5 Hs (Hypoxia, Hypovolemia, Hydrogen ion, Hypo/Hyperkalemia, Hypothermia) and 5 Ts (Tension pneumo, Tamponade, Toxins, Thrombosis PE/Coronary).'
    ]
  },
  {
    id: 'em3',
    name: 'Diabetic Ketoacidosis (DKA)',
    steps: [
      'Fluid resuscitation: 0.9% Normal Saline 1000 mL in first hour, then 500 mL/hr.',
      'Insulin: Regular insulin IV infusion at 0.1 units/kg/hr (no bolus needed).',
      'Potassium replacement: Add 20-30 mEq K+ per liter of IV fluid if serum K+ is 3.5-5.3 mEq/L.',
      'Hold insulin only if serum K+ <3.5 mEq/L until potassium is repleted.',
      'Switch fluids to 5% Dextrose with 0.45% Saline when blood glucose reaches 200 mg/dL.',
      'Continue IV insulin until arterial pH >7.30, HCO3 >18 mEq/L, and anion gap closes.'
    ]
  }
]

export const drugInteractions = [
  { id: 'di1', drugs: 'Warfarin + NSAIDs', severity: 'Major', effect: 'Severe GI hemorrhage', mechanism: 'NSAIDs inhibit COX-1 platelet aggregation and cause gastric erosions while Warfarin impairs clotting factors' },
  { id: 'di2', drugs: 'MAO Inhibitors + SSRIs', severity: 'Major', effect: 'Lethal Serotonin Syndrome', mechanism: 'Synergistic elevation of synaptic serotonin with hyperthermia, clonus, and autonomic instability' },
  { id: 'di3', drugs: 'Statins + Macrolides (Clarithromycin)', severity: 'Major', effect: 'Rhabdomyolysis / Acute Kidney Injury', mechanism: 'Potent CYP3A4 inhibition increases statin plasma concentrations drastically' },
  { id: 'di4', drugs: 'ACE Inhibitors + Spironolactone', severity: 'Major', effect: 'Life-threatening Hyperkalemia', mechanism: 'Combined reduction in aldosterone production and renal potassium clearance' }
]

export const clinicalSigns = [
  { name: "Murphy's Sign", description: 'Inspiratory arrest upon deep palpation of right upper quadrant during inspiration', condition: 'Acute Cholecystitis' },
  { name: "McBurney's Point Tenderness", description: 'Maximal tenderness located 1/3 distance from right ASIS to umbilicus', condition: 'Acute Appendicitis' },
  { name: "Rovsing's Sign", description: 'Pain referred to right lower quadrant when palpating left lower quadrant', condition: 'Acute Appendicitis' },
  { name: "Kernig's Sign", description: 'Inability to fully extend the knee when the hip is flexed to 90 degrees due to hamstring spasm', condition: 'Meningeal Irritation' },
  { name: "Brudzinski's Sign", description: 'Passive flexion of the neck triggers involuntary flexion of both hips and knees', condition: 'Meningeal Irritation' },
  { name: "Trousseau's Sign", description: 'Carpal spasm induced by inflating blood pressure cuff above systolic pressure for 3 minutes', condition: 'Hypocalcemia' }
]

export const labValues = [
  { test: 'Hemoglobin (Male)', normal: '13.0 - 17.0', unit: 'g/dL' },
  { test: 'Hemoglobin (Female)', normal: '12.0 - 15.5', unit: 'g/dL' },
  { test: 'Total Leukocyte Count (TLC)', normal: '4,000 - 11,000', unit: '/cu.mm' },
  { test: 'Platelet Count', normal: '1.50 - 4.50', unit: 'lakhs/mcL' },
  { test: 'Fasting Blood Glucose', normal: '70 - 99', unit: 'mg/dL' },
  { test: 'HbA1c', normal: '< 5.7', unit: '%' },
  { test: 'Serum Creatinine', normal: '0.7 - 1.3', unit: 'mg/dL' },
  { test: 'Serum Sodium (Na+)', normal: '135 - 145', unit: 'mEq/L' },
  { test: 'Serum Potassium (K+)', normal: '3.5 - 5.0', unit: 'mEq/L' },
  { test: 'Arterial pH', normal: '7.35 - 7.45', unit: 'pH units' }
]
