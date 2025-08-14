import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Pill, Activity, ArrowRight } from 'lucide-react';

function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 md:p-16">
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI-Powered Medical Analysis
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mb-8">
            Transform your healthcare experience with advanced OCR technology and AI-driven insights for medical reports and prescriptions.
          </p>
          <Link
            to="/scan-report"
            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-colors"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-10">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path
              fill="currentColor"
              d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,89.4,-0.3C88.8,15.7,85,31.3,76.8,44.3C68.7,57.3,56.2,67.6,42.2,74.9C28.2,82.1,14.1,86.3,-0.7,87.4C-15.5,88.5,-31,86.5,-45.4,80.1C-59.8,73.7,-73.1,63,-81.7,48.9C-90.3,34.8,-94.1,17.4,-92.6,0.9C-91.1,-15.6,-84.2,-31.2,-74.6,-44.3C-65,-57.4,-52.7,-68.1,-39.1,-75.7C-25.5,-83.3,-12.8,-87.9,1.3,-90.1C15.3,-92.3,30.6,-92.1,44.7,-76.4Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        <div className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative">
            <div className="h-14 w-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
              <FileText className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Medical Reports</h2>
            <p className="text-gray-600 mb-6">
              Upload your medical reports for instant AI analysis and receive comprehensive insights about your health status.
            </p>
            <Link
              to="/scan-report"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
            >
              Analyze Report <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative">
            <div className="h-14 w-14 bg-green-600 rounded-2xl flex items-center justify-center mb-6">
              <Pill className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Medicine Scanner</h2>
            <p className="text-gray-600 mb-6">
              Scan medicine packages to get detailed information about usage, side effects, and personalized recommendations.
            </p>
            <Link
              to="/scan-medicine"
              className="inline-flex items-center text-green-600 font-semibold hover:text-green-700"
            >
              Scan Medicine <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative">
            <div className="h-14 w-14 bg-purple-600 rounded-2xl flex items-center justify-center mb-6">
              <Activity className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Diabetes Analysis</h2>
            <p className="text-gray-600 mb-6">
              Specialized analysis tools for diabetes patients to track and manage their health reports effectively.
            </p>
            <Link
              to="/diabetes-analysis"
              className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700"
            >
              Analyze Diabetes <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white rounded-3xl p-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Scan2Heal?</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Real-time Analysis</h3>
            <p className="text-gray-600">
              Get instant insights from your medical documents with our advanced AI technology
            </p>
          </div>

          <div className="text-center">
            <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Secure & Private</h3>
            <p className="text-gray-600">
              Your medical data is protected with enterprise-grade security measures
            </p>
          </div>

          <div className="text-center">
            <div className="h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">History Tracking</h3>
            <p className="text-gray-600">
              Keep track of all your medical analyses and reports in one place
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;