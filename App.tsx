
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider, useApp } from './services/state';
import { Layout } from './components/Layout';
import { Landing } from './pages/Landing';
import { EmergencyFlow } from './pages/EmergencyFlow';
import { Login } from './pages/Login';
import { PatientDashboard } from './pages/PatientDashboard';
import { DoctorDashboard } from './pages/DoctorDashboard';
import { AmbulanceDashboard } from './pages/AmbulanceDashboard';
import { AdminDashboard } from './pages/AdminDashboard';
import { PublicEMR } from './pages/PublicEMR';
import { UserRole } from './types';
import { ChatBot } from './components/ChatBot';

// Protected Route Component
const ProtectedRoute: React.FC<{ children: React.ReactNode, role: UserRole }> = ({ children, role }) => {
  const { currentUser } = useApp();
  if (!currentUser || currentUser.role !== role) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/emergency" element={<EmergencyFlow />} />
      <Route path="/login" element={<Login />} />
      
      {/* Public Unauthenticated EMR Route */}
      <Route path="/public/emr/:patientId" element={<PublicEMR />} />

      <Route path="/patient" element={
        <ProtectedRoute role={UserRole.PATIENT}>
          <PatientDashboard />
        </ProtectedRoute>
      } />
      
      <Route path="/doctor" element={
        <ProtectedRoute role={UserRole.DOCTOR}>
          <DoctorDashboard />
        </ProtectedRoute>
      } />
      
      <Route path="/ambulance" element={
        <ProtectedRoute role={UserRole.AMBULANCE}>
          <AmbulanceDashboard />
        </ProtectedRoute>
      } />
      
      <Route path="/admin" element={
        <ProtectedRoute role={UserRole.ADMIN}>
          <AdminDashboard />
        </ProtectedRoute>
      } />
    </Routes>
  );
}

export default function App() {
  return (
    <AppProvider>
      <HashRouter>
        <Layout>
          <AppRoutes />
          <ChatBot />
        </Layout>
      </HashRouter>
    </AppProvider>
  );
}
