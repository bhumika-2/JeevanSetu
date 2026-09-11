// Realistic mock data powering every module of JeevanSetu.
// In production this would be served by a FastAPI/Node backend
// backed by ABDM (Ayushman Bharat Digital Mission) health records.

export const user = {
  name: 'Ananya Sharma',
  abhaId: '14-2938-4471-0025',
  phone: '+91 98765 43210',
  email: 'ananya.sharma@example.com',
  age: 29,
  gender: 'Female',
  bloodGroup: 'O+',
  village: 'Rishikesh Rural Block',
  district: 'Dehradun',
  state: 'Uttarakhand',
  pincode: '249201',
  avatarInitials: 'AS',
  schemesEnrolled: ['Ayushman Bharat PM-JAY', 'Janani Suraksha Yojana'],
  healthScore: 82
}

export const familyMembers = [
  {
    id: 'fm1',
    name: 'Ramesh Sharma',
    relation: 'Father',
    age: 58,
    bloodGroup: 'B+',
    conditions: ['Hypertension'],
    lastCheckup: '2026-07-12',
    avatarInitials: 'RS',
    upcoming: 'BP review — 18 Sep'
  },
  {
    id: 'fm2',
    name: 'Sunita Sharma',
    relation: 'Mother',
    age: 54,
    bloodGroup: 'O+',
    conditions: ['Type 2 Diabetes'],
    lastCheckup: '2026-08-02',
    avatarInitials: 'SS',
    upcoming: 'HbA1c test — 21 Sep'
  },
  {
    id: 'fm3',
    name: 'Arjun Sharma',
    relation: 'Son',
    age: 6,
    bloodGroup: 'O+',
    conditions: ['Seasonal asthma'],
    lastCheckup: '2026-08-20',
    avatarInitials: 'AS',
    upcoming: 'Vaccination (DPT booster) — 30 Sep'
  },
  {
    id: 'fm4',
    name: 'Meera Sharma',
    relation: 'Grandmother',
    age: 79,
    bloodGroup: 'A+',
    conditions: ['Arthritis', 'Cataract (left eye)'],
    lastCheckup: '2026-06-28',
    avatarInitials: 'MS',
    upcoming: 'Eye specialist follow-up — 25 Sep'
  }
]

export const nearbyFacilities = [
  {
    id: 'h1',
    name: 'AIIMS Rishikesh',
    type: 'Government · Super-specialty',
    distanceKm: 3.2,
    address: 'Veerbhadra Marg, Rishikesh, Dehradun',
    rating: 4.6,
    waitMins: 25,
    openNow: true,
    beds: { general: 34, icu: 4, oxygen: 12 },
    specialties: ['Cardiology', 'Neurology', 'Trauma & Emergency'],
    schemeAccepted: true
  },
  {
    id: 'h2',
    name: 'District Combined Hospital',
    type: 'Government · General',
    distanceKm: 5.8,
    address: 'Chakrata Road, Dehradun',
    rating: 4.1,
    waitMins: 40,
    openNow: true,
    beds: { general: 12, icu: 1, oxygen: 6 },
    specialties: ['General Medicine', 'Gynaecology', 'Paediatrics'],
    schemeAccepted: true
  },
  {
    id: 'h3',
    name: 'Shri Mahant Indiresh Hospital',
    type: 'Private · Multi-specialty',
    distanceKm: 7.1,
    address: 'Patel Nagar, Dehradun',
    rating: 4.4,
    waitMins: 15,
    openNow: true,
    beds: { general: 20, icu: 6, oxygen: 18 },
    specialties: ['Orthopaedics', 'Oncology', 'Cardiology'],
    schemeAccepted: true
  },
  {
    id: 'h4',
    name: 'Rishikesh Primary Health Centre',
    type: 'Government · PHC',
    distanceKm: 1.4,
    address: 'Tapovan Road, Rishikesh',
    rating: 3.9,
    waitMins: 10,
    openNow: true,
    beds: { general: 6, icu: 0, oxygen: 2 },
    specialties: ['General OPD', 'Immunisation', 'Maternal care'],
    schemeAccepted: true
  },
  {
    id: 'h5',
    name: 'Doon Medical College Hospital',
    type: 'Government · Teaching',
    distanceKm: 9.6,
    address: 'Patel Nagar, Dehradun',
    rating: 4.2,
    waitMins: 55,
    openNow: false,
    beds: { general: 8, icu: 2, oxygen: 9 },
    specialties: ['Surgery', 'Radiology', 'Emergency'],
    schemeAccepted: true
  },
  {
    id: 'h6',
    name: 'Apollo Pharmacy — Tapovan',
    type: 'Pharmacy · 24x7',
    distanceKm: 1.1,
    address: 'Near Ganga Ghat, Tapovan, Rishikesh',
    rating: 4.5,
    waitMins: 5,
    openNow: true,
    beds: null,
    specialties: ['Medicines', 'Diagnostics pickup', 'Home delivery'],
    schemeAccepted: false
  }
]

export const schemes = [
  {
    id: 's1',
    name: 'Ayushman Bharat PM-JAY',
    authority: 'National Health Authority, Govt. of India',
    category: 'Hospitalisation cover',
    benefit: '₹5,00,000 / family / year for secondary & tertiary care',
    eligibility: ['SECC 2011 deprivation criteria', 'No existing health cover', 'Family listed in beneficiary database'],
    documents: ['Aadhaar card', 'Ration card', 'Income certificate'],
    matchScore: 96,
    status: 'Eligible',
    deadline: 'Rolling enrolment',
    link: '#'
  },
  {
    id: 's2',
    name: 'Janani Suraksha Yojana',
    authority: 'Ministry of Health & Family Welfare',
    category: 'Maternal health',
    benefit: 'Cash assistance for institutional delivery — ₹1,400 (rural)',
    eligibility: ['Pregnant women', 'BPL / SC / ST households', 'Delivery at govt./accredited facility'],
    documents: ['Aadhaar card', 'JSY MCP card', 'Bank passbook'],
    matchScore: 88,
    status: 'Eligible',
    deadline: 'Within 42 days of delivery',
    link: '#'
  },
  {
    id: 's3',
    name: 'Pradhan Mantri Suraksha Bima Yojana',
    authority: 'Ministry of Finance',
    category: 'Accident insurance',
    benefit: '₹2,00,000 accidental death & disability cover at ₹20/year',
    eligibility: ['Age 18–70', 'Savings bank account', 'Aadhaar-linked account'],
    documents: ['Aadhaar card', 'Bank account details'],
    matchScore: 74,
    status: 'Action needed',
    deadline: 'Auto-renews 1 June',
    link: '#'
  },
  {
    id: 's4',
    name: 'National Programme for Health Care of Elderly',
    authority: 'Ministry of Health & Family Welfare',
    category: 'Elderly care',
    benefit: 'Free geriatric OPD, mobility aids & home-based care',
    eligibility: ['Age 60+', 'Registered at district hospital'],
    documents: ['Aadhaar card', 'Age proof'],
    matchScore: 91,
    status: 'Eligible',
    deadline: 'Rolling enrolment',
    link: '#'
  },
  {
    id: 's5',
    name: 'Rashtriya Bal Swasthya Karyakram',
    authority: 'Ministry of Health & Family Welfare',
    category: "Child health",
    benefit: 'Free screening & treatment for birth defects and deficiencies, ages 0–18',
    eligibility: ['Children aged 0–18 years', 'Enrolled in Anganwadi / govt school (or unenrolled)'],
    documents: ['Birth certificate', 'Aadhaar (if available)'],
    matchScore: 84,
    status: 'Eligible',
    deadline: 'Rolling enrolment',
    link: '#'
  },
  {
    id: 's6',
    name: 'Pradhan Mantri Matru Vandana Yojana',
    authority: 'Ministry of Women & Child Development',
    category: 'Maternal health',
    benefit: '₹5,000 cash incentive for first living child',
    eligibility: ['Pregnant & lactating mothers', 'First child only', 'Excludes central/state govt employees'],
    documents: ['Aadhaar card', 'Bank passbook', 'MCP card'],
    matchScore: 40,
    status: 'Not eligible',
    deadline: 'Closed for this pregnancy',
    link: '#'
  }
]

export const bloodRequests = [
  {
    id: 'b1',
    patient: 'Vikram Negi',
    bloodGroup: 'O-',
    unitsNeeded: 3,
    hospital: 'AIIMS Rishikesh',
    urgency: 'Critical',
    postedAgo: '18 min ago',
    contact: '+91 90123 45678',
    distanceKm: 3.2
  },
  {
    id: 'b2',
    patient: 'Kavita Rawat',
    bloodGroup: 'A+',
    unitsNeeded: 2,
    hospital: 'District Combined Hospital',
    urgency: 'Urgent',
    postedAgo: '52 min ago',
    contact: '+91 90123 88112',
    distanceKm: 5.8
  },
  {
    id: 'b3',
    patient: 'Suresh Bisht',
    bloodGroup: 'B+',
    unitsNeeded: 1,
    hospital: 'Shri Mahant Indiresh Hospital',
    urgency: 'Moderate',
    postedAgo: '3 hrs ago',
    contact: '+91 90123 55671',
    distanceKm: 7.1
  },
  {
    id: 'b4',
    patient: 'Infant of Priya Thapa',
    bloodGroup: 'O+',
    unitsNeeded: 1,
    hospital: 'Doon Medical College Hospital',
    urgency: 'Critical',
    postedAgo: '6 min ago',
    contact: '+91 90123 90321',
    distanceKm: 9.6
  }
]

export const donorStats = {
  totalDonors: 4218,
  activeThisMonth: 312,
  livesImpacted: 1104,
  yourDonations: 4,
  nextEligibleDate: '2026-10-02',
  badge: 'Silver Lifesaver'
}

export const healthCamps = [
  {
    id: 'c1',
    title: 'Free Eye Check-up & Cataract Screening',
    organizer: 'AIIMS Rishikesh + Lions Club',
    date: '2026-09-14',
    time: '9:00 AM – 3:00 PM',
    venue: 'Community Hall, Tapovan, Rishikesh',
    distanceKm: 1.6,
    services: ['Vision test', 'Cataract screening', 'Free spectacles for eligible patients'],
    seatsLeft: 46,
    registered: false
  },
  {
    id: 'c2',
    title: 'Diabetes & Blood Pressure Screening Camp',
    organizer: 'District Health Department',
    date: '2026-09-18',
    time: '10:00 AM – 1:00 PM',
    venue: 'Primary Health Centre, Tapovan Road',
    distanceKm: 1.4,
    services: ['Blood sugar test', 'BP check', 'Dietician consultation'],
    seatsLeft: 22,
    registered: true
  },
  {
    id: 'c3',
    title: 'Child Immunisation Drive (Mission Indradhanush)',
    organizer: 'Ministry of Health & Family Welfare',
    date: '2026-09-21',
    time: '9:00 AM – 12:00 PM',
    venue: 'Anganwadi Kendra, Rishikesh Rural Block',
    distanceKm: 0.8,
    services: ['DPT / OPV booster', 'Measles-Rubella dose', 'Growth monitoring'],
    seatsLeft: 60,
    registered: false
  },
  {
    id: 'c4',
    title: 'Women\u2019s Health & Anaemia Screening',
    organizer: 'Uttarakhand Health Society',
    date: '2026-09-27',
    time: '11:00 AM – 4:00 PM',
    venue: 'District Combined Hospital, Dehradun',
    distanceKm: 5.8,
    services: ['Haemoglobin test', 'Gynaecology OPD', 'Iron-folic acid distribution'],
    seatsLeft: 15,
    registered: false
  }
]

export const emergencyContacts = [
  { id: 'e1', label: 'National Ambulance Service', number: '108', icon: 'ambulance' },
  { id: 'e2', label: 'National Emergency Number', number: '112', icon: 'shield' },
  { id: 'e3', label: 'Women Helpline', number: '181', icon: 'heart-handshake' },
  { id: 'e4', label: 'Poison / Medical Helpline', number: '1066', icon: 'flask' },
  { id: 'e5', label: 'COVID-19 Helpline', number: '1075', icon: 'stethoscope' }
]

export const familyEmergencyContacts = [
  { id: 'fc1', name: 'Ramesh Sharma', relation: 'Father', number: '+91 98111 22334' },
  { id: 'fc2', name: 'Dr. Neha Kapoor', relation: 'Family physician', number: '+91 97222 88110' },
  { id: 'fc3', name: 'Vikas Thapa', relation: 'Neighbour', number: '+91 96333 77551' }
]

export const notifications = [
  {
    id: 'n1',
    type: 'scheme',
    title: 'New scheme match: PM Suraksha Bima Yojana',
    body: 'You may be eligible for ₹2,00,000 accident cover at ₹20/year. Complete KYC to enrol.',
    time: '10 min ago',
    read: false
  },
  {
    id: 'n2',
    type: 'blood',
    title: 'Critical: O- blood needed nearby',
    body: 'Vikram Negi needs 3 units at AIIMS Rishikesh, 3.2 km from you.',
    time: '18 min ago',
    read: false
  },
  {
    id: 'n3',
    type: 'camp',
    title: 'Reminder: Diabetes screening camp tomorrow',
    body: 'You registered for the camp at Primary Health Centre, Tapovan Road.',
    time: '2 hrs ago',
    read: false
  },
  {
    id: 'n4',
    type: 'family',
    title: 'Vaccination due for Arjun',
    body: 'DPT booster dose due on 30 Sep as per immunisation schedule.',
    time: '5 hrs ago',
    read: true
  },
  {
    id: 'n5',
    type: 'system',
    title: 'ABHA health record updated',
    body: 'Your latest lab report from AIIMS Rishikesh has been linked to your ABHA ID.',
    time: 'Yesterday',
    read: true
  },
  {
    id: 'n6',
    type: 'emergency',
    title: 'Air quality advisory',
    body: 'AQI in Dehradun district is Moderate today. Sensitive groups should limit outdoor activity.',
    time: 'Yesterday',
    read: true
  }
]

export const aiSuggestedPrompts = [
  'I have had a mild fever and headache for 2 days',
  'Which government scheme covers my mother\u2019s diabetes treatment?',
  'Find the nearest PHC that is open right now',
  'What vaccines does my 6-year-old need next?',
  'Explain my last blood test report in simple terms'
]

export const chatSeed = [
  {
    id: 'm1',
    role: 'assistant',
    text: "Namaste Ananya! I'm your JeevanSetu AI Health Assistant. You can type or use the mic to speak in Hindi, English or your regional language. How can I help you today?"
  }
]

export const aiResponseBank = [
  {
    keywords: ['fever', 'headache', 'temperature'],
    reply:
      "I'm sorry to hear that. Mild fever with headache for 2 days can be viral fever, dehydration, or early infection. Please rest, stay hydrated, and monitor your temperature every 4–6 hours. If fever crosses 102°F, breathing feels difficult, or symptoms continue past 3 days, please visit a doctor immediately.",
    suggestion: 'nearby-care'
  },
  {
    keywords: ['scheme', 'diabetes', 'coverage', 'insurance'],
    reply:
      'Based on your family profile, your mother is likely eligible for treatment support under Ayushman Bharat PM-JAY, which covers diabetes-related hospitalisation up to ₹5,00,000/year. I can also check the National Programme for Non-Communicable Diseases for free medicine and screening.',
    suggestion: 'schemes'
  },
  {
    keywords: ['phc', 'nearest', 'open', 'hospital', 'clinic'],
    reply:
      'The nearest open Primary Health Centre is Rishikesh PHC, 1.4 km away on Tapovan Road, with an estimated wait of 10 minutes. AIIMS Rishikesh (3.2 km) is also open with a 25-minute wait if you need specialist care.',
    suggestion: 'nearby-care'
  },
  {
    keywords: ['vaccine', 'vaccination', 'immunisation', 'immunization'],
    reply:
      "For a 6-year-old, the next scheduled dose is the DPT booster, typically due around this time. I see Arjun's booster is scheduled for 30 Sep as part of a nearby immunisation drive at Anganwadi Kendra, Rishikesh Rural Block.",
    suggestion: 'camps'
  },
  {
    keywords: ['report', 'blood test', 'lab', 'results'],
    reply:
      "I can help explain lab reports in simple language. Please upload the PDF or photo of the report and I'll break down each value — like haemoglobin, blood sugar or cholesterol — and flag anything outside the normal range in plain terms.",
    suggestion: null
  }
]

export const aiFallback =
  "I understand you're looking for guidance. Could you share a few more details — your symptoms, or what kind of support you need (medical, scheme-related, or emergency)? I'm here to help in the language you're most comfortable with."
