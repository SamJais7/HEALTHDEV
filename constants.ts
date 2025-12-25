
import { Hospital, Appointment, MedicalRecord, User, UserRole, Doctor, EmergencyCase, PatientProfile, DetailedEMR } from './types';

export const MOCK_HOSPITALS: Hospital[] = [
  {
    id: 'hospital_1',
    name: 'LifeCare Hospital',
    location: 'Near MMMUT Gate',
    distance: 1.2,
    availableBeds: 12,
    emergencyCapacity: 4,
    specialties: ['Cardiology', 'General Surgery', 'Trauma'],
    coordinates: { x: 40, y: 80 },
    pathD: "M 50 90 Q 45 90 40 80"
  },
  {
    id: 'hospital_2',
    name: 'Apollo Hospital',
    location: 'Gorakhpur City Center',
    distance: 4.5,
    availableBeds: 8,
    emergencyCapacity: 2,
    specialties: ['Neurology', 'Orthopedics', 'Advanced Care'],
    coordinates: { x: 80, y: 30 },
    pathD: "M 50 90 C 60 80 90 60 80 30"
  },
  {
    id: 'hospital_3',
    name: 'AIIMS Hospital',
    location: 'Gorakhpur',
    distance: 6.8,
    availableBeds: 45,
    emergencyCapacity: 15,
    specialties: ['Multi-specialty', 'Oncology', 'Emergency Medicine'],
    coordinates: { x: 20, y: 20 },
    pathD: "M 50 90 C 30 80 40 50 20 20"
  },
  {
    id: 'hospital_4',
    name: 'Budh Vihar Hospital',
    location: 'Budh Vihar Colony',
    distance: 2.3,
    availableBeds: 5,
    emergencyCapacity: 1,
    specialties: ['Pediatrics', 'General Medicine'],
    coordinates: { x: 85, y: 80 },
    pathD: "M 50 90 Q 70 95 85 80"
  },
  {
    id: 'hospital_5',
    name: 'New Jeevan Hospital',
    location: 'Deoria Bypass Road',
    distance: 1.9,
    availableBeds: 10,
    emergencyCapacity: 3,
    specialties: ['Gynecology', 'Internal Medicine'],
    coordinates: { x: 60, y: 65 },
    pathD: "M 50 90 Q 55 80 60 65"
  },
];

export const MOCK_DOCTORS: Doctor[] = [
  { 
    id: 'doctor_1', 
    name: 'Dr. Prince Jain', 
    specialty: 'Cardiologist', 
    hospitalId: 'hospital_1', 
    availableDays: ['Mon', 'Wed', 'Fri'],
    experience: 12,
    education: 'MD, DM - Cardiology',
    bio: 'Specialist in non-invasive cardiology and preventative heart care.',
    rating: 4.9,
    consultationFee: 800
  },
  { 
    id: 'doctor_2', 
    name: 'Dr. Rishab Gupta', 
    specialty: 'Neurologist', 
    hospitalId: 'hospital_2', 
    availableDays: ['Tue', 'Thu', 'Sat'],
    experience: 8,
    education: 'MBBS, MD (Med), DM (Neuro)',
    bio: 'Focuses on epilepsy management and neuro-rehabilitation.',
    rating: 4.7,
    consultationFee: 1000
  },
  { 
    id: 'doctor_3', 
    name: 'Dr. Versha Mehta', 
    specialty: 'General Physician', 
    hospitalId: 'hospital_3', 
    availableDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    experience: 15,
    education: 'MBBS, MD - General Medicine',
    bio: 'Dedicated to holistic patient care and chronic disease management.',
    rating: 4.8,
    consultationFee: 600
  },
  { 
    id: 'doctor_4', 
    name: 'Dr. Vandana Dewangan', 
    specialty: 'Pediatrician', 
    hospitalId: 'hospital_4', 
    availableDays: ['Mon', 'Wed', 'Sat'],
    experience: 10,
    education: 'MD - Pediatrics, DNB',
    bio: 'Child health specialist with expertise in neonatology.',
    rating: 5.0,
    consultationFee: 700
  },
  { 
    id: 'doctor_5', 
    name: 'Dr. Sneha Patel', 
    specialty: 'Gynecologist', 
    hospitalId: 'hospital_5', 
    availableDays: ['Tue', 'Fri'],
    experience: 7,
    education: 'MS - Obstetrics & Gynaecology',
    bio: 'Specializing in high-risk pregnancy and maternal health.',
    rating: 4.6,
    consultationFee: 900
  },
];

export const MOCK_PATIENT_PROFILES: PatientProfile[] = [
  {
    patientId: 'patient_1',
    fullName: 'Aarav Sharma',
    age: 32,
    gender: 'Male',
    bloodGroup: 'O+',
    contactNumber: '+91 98765 43210',
    emergencyContact: { name: 'Priya Sharma', relation: 'Spouse', phone: '+91 98765 43211' }
  },
  {
    patientId: 'patient_2',
    fullName: 'Isha Verma',
    age: 28,
    gender: 'Female',
    bloodGroup: 'B-',
    contactNumber: '+91 98765 43220',
    emergencyContact: { name: 'Rajesh Verma', relation: 'Father', phone: '+91 98765 43221' }
  },
  {
    patientId: 'patient_3',
    fullName: 'Vivaan Kapoor',
    age: 45,
    gender: 'Male',
    bloodGroup: 'A+',
    contactNumber: '+91 98765 43230',
    emergencyContact: { name: 'Anjali Kapoor', relation: 'Wife', phone: '+91 98765 43231' }
  },
  {
    patientId: 'patient_4',
    fullName: 'Diya Singh',
    age: 22,
    gender: 'Female',
    bloodGroup: 'AB+',
    contactNumber: '+91 98765 43240',
    emergencyContact: { name: 'Sunita Singh', relation: 'Mother', phone: '+91 98765 43241' }
  },
  {
    patientId: 'patient_5',
    fullName: 'Advait Iyer',
    age: 55,
    gender: 'Male',
    bloodGroup: 'O-',
    contactNumber: '+91 98765 43250',
    emergencyContact: { name: 'Karthik Iyer', relation: 'Son', phone: '+91 98765 43251' }
  }
];

export const MOCK_DETAILED_EMRS: DetailedEMR[] = [
  {
    patientId: 'patient_1',
    medicalHistory: ['Hypertension', 'Appendectomy (2018)'],
    allergies: ['Penicillin', 'Dust Mites'],
    currentDiagnosis: 'Essential Hypertension',
    medications: [{ name: 'Amlodipine', dosage: '5mg', frequency: 'Once daily' }],
    vitals: { bp: '120/80', pulse: 72, temp: '98.6°F', spo2: 98 },
    lastVisitDate: '2024-11-20',
    attendingDoctor: 'Dr. Prince Jain'
  },
  {
    patientId: 'patient_2',
    medicalHistory: ['Type 1 Diabetes', 'Asthma'],
    allergies: ['Latex'],
    currentDiagnosis: 'Mild Asthma Flare-up',
    medications: [{ name: 'Insulin Glargine', dosage: '10 units', frequency: 'Before bed' }, { name: 'Albuterol', dosage: '2 puffs', frequency: 'As needed' }],
    vitals: { bp: '110/75', pulse: 68, temp: '98.4°F', spo2: 99 },
    lastVisitDate: '2024-12-01',
    attendingDoctor: 'Dr. Versha Mehta'
  },
  {
    patientId: 'patient_3',
    medicalHistory: ['Kidney Stones (2021)'],
    allergies: ['Peanuts'],
    currentDiagnosis: 'Seasonal Allergic Rhinitis',
    medications: [{ name: 'Cetirizine', dosage: '10mg', frequency: 'Once daily at night' }],
    vitals: { bp: '130/85', pulse: 80, temp: '98.7°F', spo2: 97 },
    lastVisitDate: '2024-12-10',
    attendingDoctor: 'Dr. Rishab Gupta'
  },
  {
    patientId: 'patient_4',
    medicalHistory: ['None'],
    allergies: ['Sulfonamides'],
    currentDiagnosis: 'Vitamin D Deficiency',
    medications: [{ name: 'Vitamin D3', dosage: '60000 IU', frequency: 'Weekly once' }],
    vitals: { bp: '115/70', pulse: 75, temp: '98.6°F', spo2: 100 },
    lastVisitDate: '2024-11-15',
    attendingDoctor: 'Dr. Vandana Dewangan'
  },
  {
    patientId: 'patient_5',
    medicalHistory: ['CABG (2015)', 'Osteoarthritis'],
    allergies: ['Contrast Dye'],
    currentDiagnosis: 'Stable Angina',
    medications: [{ name: 'Aspirin', dosage: '75mg', frequency: 'Once daily' }, { name: 'Atorvastatin', dosage: '20mg', frequency: 'Once daily' }],
    vitals: { bp: '135/90', pulse: 65, temp: '98.5°F', spo2: 96 },
    lastVisitDate: '2024-12-05',
    attendingDoctor: 'Dr. Sneha Patel'
  }
];

export const MOCK_APPOINTMENTS: Appointment[] = [
  {
    id: 'a1',
    patientName: 'Aarav Sharma',
    doctorName: 'Dr. Prince Jain',
    doctorId: 'doctor_1',
    hospitalName: 'LifeCare Hospital',
    date: '2025-11-15',
    time: '10:30 AM',
    reason: 'Routine Cardiac Checkup',
    status: 'UPCOMING',
  }
];

export const MOCK_EMR: MedicalRecord[] = [
  {
    id: 'r1',
    date: '2024-12-10',
    diagnosis: 'Acute Bronchitis',
    doctor: 'Dr. Vandana Dewangan',
    prescription: 'Amoxicillin 500mg',
  }
];

export const MOCK_PAST_EMERGENCIES: EmergencyCase[] = [
  {
    id: 'e-hist-1',
    patientName: 'Rahul Kumar',
    location: { lat: 0, lng: 0 },
    symptoms: 'Severe Chest Pain',
    severity: 'HIGH',
    status: 'RESOLVED',
    timestamp: Date.now() - 86400000 * 2,
    assignedHospitalId: 'hospital_2',
    triageSummary: 'Possible Myocardial Infarction',
    transportMode: 'AMBULANCE'
  }
];
