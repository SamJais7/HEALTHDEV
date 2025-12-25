
export enum UserRole {
  PATIENT = 'PATIENT',
  DOCTOR = 'DOCTOR',
  AMBULANCE = 'AMBULANCE',
  ADMIN = 'ADMIN',
  STAFF = 'STAFF' // Emergency Unit Staff
}

export interface User {
  id: string;
  name: string;
  role: UserRole;
  email: string;
  hospitalId?: string;
  ambulanceId?: string;
  staffId?: string;
}

export interface Medication {
  name: string;
  dosage: string;
  frequency: string;
}

export interface Vitals {
  bp: string;
  pulse: number;
  temp: string;
  spo2: number;
}

export interface DetailedEMR {
  patientId: string;
  medicalHistory: string[];
  allergies: string[];
  currentDiagnosis: string;
  medications: Medication[];
  vitals: Vitals;
  lastVisitDate: string;
  attendingDoctor: string;
}

export interface PatientProfile {
  patientId: string;
  fullName: string;
  age: number;
  gender: 'Male' | 'Female' | 'Other';
  bloodGroup: string;
  contactNumber: string;
  emergencyContact: {
    name: string;
    relation: string;
    phone: string;
  };
}

export interface Hospital {
  id: string;
  name: string;
  location: string;
  distance: number; // km
  availableBeds: number;
  emergencyCapacity: number;
  specialties: string[];
  trafficCondition?: 'LOW' | 'MODERATE' | 'HEAVY';
  eta?: number;
  coordinates?: { x: number; y: number };
  pathD?: string;
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  hospitalId: string;
  availableDays: string[];
  experience: number; // years
  education: string;
  bio: string;
  rating: number;
  consultationFee: number;
}

export type TransportMode = 'AMBULANCE' | 'SELF';
export type PhysicalTriage = 'CRITICAL' | 'URGENT' | 'SEMI URGENT' | 'NON URGENT';

export interface EmergencyCase {
  id: string;
  patientName: string; 
  driverName?: string;
  location: { lat: number; lng: number };
  symptoms: string;
  voiceNoteUrl?: string;
  severity: 'HIGH' | 'MEDIUM' | 'LOW'; // AI Triage
  physicalTriage?: PhysicalTriage; // Human Triage
  staffNote?: string; // Observation note from staff
  status: 'PENDING' | 'AMBULANCE_DISPATCHED' | 'ARRIVED_HOSPITAL' | 'RESOLVED' | 'SELF_DRIVING';
  assignedHospitalId?: string;
  assignedAmbulanceId?: string;
  timestamp: number;
  triageSummary?: string; 
  doctorAccepted?: boolean;
  transportMode: TransportMode;
}

export interface Appointment {
  id: string;
  patientName: string;
  doctorName: string;
  doctorId: string;
  hospitalName: string;
  date: string;
  time: string;
  reason: string;
  patientNote?: string;
  status: 'UPCOMING' | 'COMPLETED';
}

export interface MedicalRecord {
  id: string;
  date: string;
  diagnosis: string;
  doctor: string;
  prescription: string;
}
