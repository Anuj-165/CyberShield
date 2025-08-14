import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';
import ThreatLogsPage from './pages/ThreatLogsPage';
import AlertSettingsPage from './pages/AlertSettingsPage';
import ProfilePage from './pages/ProfilePage';
import AdminPage from './pages/AdminPage';
import Layout from './components/Layout';
import './App.css';

// Mock authentication state - replace with real auth logic
const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  
  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);
  
  return { isAuthenticated, login, logout };
};

export const AuthContext = React.createContext<{
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}>({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

function App() {
  const auth = useAuth();

  return (
    <AuthContext.Provider value={auth}>
      <Router>
        <div className="min-h-screen bg-cyber-black text-white">
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            
            {/* Protected routes */}
            <Route path="/dashboard" element={
              auth.isAuthenticated ? (
                <Layout>
                  <DashboardPage />
                </Layout>
              ) : (
                <Navigate to="/login" />
              )
            } />
            <Route path="/threats" element={
              auth.isAuthenticated ? (
                <Layout>
                  <ThreatLogsPage />
                </Layout>
              ) : (
                <Navigate to="/login" />
              )
            } />
            <Route path="/alerts" element={
              auth.isAuthenticated ? (
                <Layout>
                  <AlertSettingsPage />
                </Layout>
              ) : (
                <Navigate to="/login" />
              )
            } />
            <Route path="/profile" element={
              auth.isAuthenticated ? (
                <Layout>
                  <ProfilePage />
                </Layout>
              ) : (
                <Navigate to="/login" />
              )
            } />
            <Route path="/admin" element={
              auth.isAuthenticated ? (
                <Layout>
                  <AdminPage />
                </Layout>
              ) : (
                <Navigate to="/login" />
              )
            } />
          </Routes>
          <Toaster theme="dark" />
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;