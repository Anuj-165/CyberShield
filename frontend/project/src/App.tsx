import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Microscope, Pill, FileText, History, LogIn, UserPlus, Menu, X } from 'lucide-react';
import Home from './components/Home';
import ScanReport from './components/ScanReport';
import ScanMedicine from './components/ScanMedicine';
import DiabetesAnalysis from './components/DiabetesAnalysis';
import Login from './components/Login';
import Signup from './components/Signup';
import UserHistory from './components/UserHistory';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <Link to="/" className="flex items-center space-x-3">
                <div className="bg-blue-600 p-2 rounded-xl">
                  <Microscope className="h-8 w-8 text-white" />
                </div>
                <span className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Scan2Heal
                </span>
              </Link>

              {/* Mobile menu button */}
              <button 
                onClick={toggleMenu} 
                className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-1">
                <Link
                  to="/scan-report"
                  className="px-4 py-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                >
                  <div className="flex items-center space-x-2">
                    <FileText className="h-5 w-5" />
                    <span>Scan Report</span>
                  </div>
                </Link>
                <Link
                  to="/scan-medicine"
                  className="px-4 py-2 rounded-lg text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors"
                >
                  <div className="flex items-center space-x-2">
                    <Pill className="h-5 w-5" />
                    <span>Scan Medicine</span>
                  </div>
                </Link>
                <Link
                  to="/diabetes-analysis"
                  className="px-4 py-2 rounded-lg text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors"
                >
                  <div className="flex items-center space-x-2">
                    <FileText className="h-5 w-5" />
                    <span>Diabetes Analysis</span>
                  </div>
                </Link>
                {isLoggedIn ? (
                  <Link
                    to="/history"
                    className="px-4 py-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                  >
                    <div className="flex items-center space-x-2">
                      <History className="h-5 w-5" />
                      <span>History</span>
                    </div>
                  </Link>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Link
                      to="/login"
                      className="px-6 py-2 rounded-lg text-blue-600 hover:bg-blue-50 transition-colors"
                    >
                      <div className="flex items-center space-x-2">
                        <LogIn className="h-5 w-5" />
                        <span>Login</span>
                      </div>
                    </Link>
                    <Link
                      to="/signup"
                      className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                    >
                      <div className="flex items-center space-x-2">
                        <UserPlus className="h-5 w-5" />
                        <span>Sign Up</span>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="md:hidden py-4 space-y-2">
                <Link
                  to="/scan-report"
                  className="block px-4 py-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                >
                  <div className="flex items-center space-x-2">
                    <FileText className="h-5 w-5" />
                    <span>Scan Report</span>
                  </div>
                </Link>
                <Link
                  to="/scan-medicine"
                  className="block px-4 py-2 rounded-lg text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors"
                >
                  <div className="flex items-center space-x-2">
                    <Pill className="h-5 w-5" />
                    <span>Scan Medicine</span>
                  </div>
                </Link>
                <Link
                  to="/diabetes-analysis"
                  className="block px-4 py-2 rounded-lg text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors"
                >
                  <div className="flex items-center space-x-2">
                    <FileText className="h-5 w-5" />
                    <span>Diabetes Analysis</span>
                  </div>
                </Link>
                {isLoggedIn ? (
                  <Link
                    to="/history"
                    className="block px-4 py-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                  >
                    <div className="flex items-center space-x-2">
                      <History className="h-5 w-5" />
                      <span>History</span>
                    </div>
                  </Link>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="block px-4 py-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                    >
                      <div className="flex items-center space-x-2">
                        <LogIn className="h-5 w-5" />
                        <span>Login</span>
                      </div>
                    </Link>
                    <Link
                      to="/signup"
                      className="block px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                    >
                      <div className="flex items-center space-x-2">
                        <UserPlus className="h-5 w-5" />
                        <span>Sign Up</span>
                      </div>
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>
        </nav>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/scan-report" element={<ScanReport />} />
            <Route path="/scan-medicine" element={<ScanMedicine />} />
            <Route path="/diabetes-analysis" element={<DiabetesAnalysis />} />
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/history" element={<UserHistory />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;