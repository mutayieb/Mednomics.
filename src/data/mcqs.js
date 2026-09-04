export const mcqBank = {
  medicine: [
    {
      id: 'med1',
      subject: 'Medicine',
      topic: 'Acute MI',
      question: 'A 55-year-old male presents with severe retrosternal chest pain for 2 hours, sweating, and left arm radiation. ECG shows ST elevation in V1-V4. What is the most appropriate immediate management?',
      options: ['Thrombolysis with streptokinase', 'Primary PCI', 'Heparin and wait', 'CABG after 1 month', 'Discharge with aspirin'],
      correct: 1,
      explanation: 'Primary PCI is the gold standard for STEMI if available within 90-120 minutes door-to-balloon time. ST elevation in V1-V4 indicates anterior wall MI from LAD occlusion.',
      difficulty: 'Hard',
      year: 2023
    },
    {
      id: 'med2',
      subject: 'Medicine',
      topic: 'Heart Failure',
      question: 'Which of the following is NOT one of the 4 foundational pillars of HFrEF medical therapy?',
      options: ['ARNI / ACE inhibitor', 'Beta-blocker', 'Calcium channel blocker (Diltiazem)', 'Mineralocorticoid receptor antagonist', 'SGLT2 inhibitor'],
      correct: 2,
      explanation: 'Non-dihydropyridine CCBs are negative inotropes and contraindicated in HFrEF. The 4 pillars are ARNI/ACEi, BB, MRA, and SGLT2i.',
      difficulty: 'Medium',
      year: 2023
    },
    {
      id: 'med3',
      subject: 'Medicine',
      topic: 'Tuberculosis',
      question: 'A patient with pulmonary TB on Cat I ATT develops blurred vision and loss of red-green discrimination. Which drug is responsible?',
      options: ['Rifampicin', 'Isoniazid', 'Pyrazinamide', 'Ethambutol', 'Streptomycin'],
      correct: 3,
      explanation: 'Ethambutol causes retrobulbar optic neuritis presenting with decreased visual acuity and red-green dyschromatopsia.',
      difficulty: 'Easy',
      year: 2023
    }
  ],
  surgery: [
    {
      id: 'sur1',
      subject: 'Surgery',
      topic: 'Acute Appendicitis',
      question: 'McBurney point is anatomically located at:',
      options: ['1/3 distance from ASIS to umbilicus', '1/3 distance from umbilicus to ASIS', 'Midpoint between ASIS and pubic tubercle', 'Over the right pubic tubercle', 'Subcostal right midclavicular point'],
      correct: 0,
      explanation: 'McBurney point lies at the junction of the lateral 1/3 and medial 2/3 of the line connecting the right ASIS to the umbilicus.',
      difficulty: 'Easy',
      year: 2023
    },
    {
      id: 'sur2',
      subject: 'Surgery',
      topic: 'Inguinal Hernia',
      question: 'A direct inguinal hernia is located:',
      options: ['Lateral to inferior epigastric vessels', 'Medial to inferior epigastric vessels inside Hesselbach triangle', 'Through femoral ring beneath inguinal ligament', 'Through obturator canal', 'In the lumbar triangle'],
      correct: 1,
      explanation: 'Direct inguinal hernias protrude directly through Hesselbach triangle medial to the inferior epigastric vessels.',
      difficulty: 'Medium',
      year: 2023
    }
  ],
  obg: [
    {
      id: 'obg1',
      subject: 'OBG',
      topic: 'Normal Labor',
      question: 'Active phase of labor is defined by cervical dilatation starting from:',
      options: ['2 cm', '4 cm', '6 cm', '8 cm', '10 cm'],
      correct: 2,
      explanation: 'Per modern FIGO/WHO guidelines, the active first stage of labor begins at 6 cm dilatation.',
      difficulty: 'Medium',
      year: 2023
    },
    {
      id: 'obg2',
      subject: 'OBG',
      topic: 'Preeclampsia',
      question: 'Antidote for Magnesium Sulfate (MgSO4) toxicity in eclampsia is:',
      options: ['Potassium chloride', '10% Calcium gluconate IV', 'Naloxone', 'Flumazenil', 'Sodium bicarbonate'],
      correct: 1,
      explanation: '10 mL of 10% Calcium gluconate administered slow IV over 3-5 minutes is the antidote for MgSO4 toxicity.',
      difficulty: 'Easy',
      year: 2023
    }
  ],
  pediatrics: [
    {
      id: 'ped1',
      subject: 'Pediatrics',
      topic: 'Kawasaki Disease',
      question: 'Which of the following is a classic diagnostic criterion for Kawasaki disease?',
      options: ['Fever for >=5 days + strawberry tongue and bilateral conjunctivitis', 'Maculopapular rash on face only', 'Purulent conjunctival discharge', 'Decreased ESR and CRP', 'Isolated thrombocytopenia in week 1'],
      correct: 0,
      explanation: 'Kawasaki diagnostic criteria require fever >=5 days plus >=4 of 5 features (conjunctivitis, strawberry tongue/lip changes, cervical lymphadenopathy, polymorphous rash, extremity changes).',
      difficulty: 'Medium',
      year: 2023
    }
  ],
  psm: [
    {
      id: 'psm1',
      subject: 'PSM',
      topic: 'Vaccines',
      question: 'BCG vaccine is administered via which route and site in newborns?',
      options: ['Subcutaneous, right arm', 'Intradermal, left upper deltoid', 'Intramuscular, anterolateral thigh', 'Oral drops', 'Deep intramuscular gluteal'],
      correct: 1,
      explanation: 'BCG is given 0.05 mL intradermally on the left upper arm at birth.',
      difficulty: 'Easy',
      year: 2023
    }
  ]
}

export const allMCQs = Object.values(mcqBank).flat()
