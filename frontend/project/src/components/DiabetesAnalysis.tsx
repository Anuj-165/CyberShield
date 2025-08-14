import React, { useState } from 'react';
import { Upload, Activity, AlertCircle } from 'lucide-react';

function DiabetesAnalysis() {
  const [file, setFile] = useState<File | null>(null);
  const [analysis, setAnalysis] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setAnalysis(`
        Blood Glucose Level: 140 mg/dL (Slightly elevated)
        HbA1c: 6.5% (Indicates prediabetes)
        
        Recommendations:
        - Monitor blood sugar levels regularly
        - Follow a balanced diet
        - Exercise for 30 minutes daily
        - Schedule follow-up with healthcare provider
      `);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Diabetes Report Analysis</h1>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <form onSubmit={handleAnalyze} className="space-y-6">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <input
              type="file"
              onChange={handleFileChange}
              className="hidden"
              id="diabetes-report"
              accept="image/*,.pdf"
            />
            <label
              htmlFor="diabetes-report"
              className="cursor-pointer flex flex-col items-center space-y-2"
            >
              <Upload className="h-12 w-12 text-gray-400" />
              <span className="text-gray-600">Upload your diabetes test report</span>
              <span className="text-sm text-gray-500">PDF or Image files only</span>
            </label>
          </div>

          <button
            type="submit"
            disabled={!file || loading}
            className={`w-full py-2 px-4 rounded-md text-white font-medium ${
              !file || loading ? 'bg-gray-400' : 'bg-purple-500 hover:bg-purple-600'
            }`}
          >
            {loading ? 'Analyzing...' : 'Analyze Report'}
          </button>
        </form>

        {analysis && (
          <div className="mt-8 p-4 bg-purple-50 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Analysis Results</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-2">
                <Activity className="h-5 w-5 text-purple-500 mt-1" />
                <pre className="text-gray-700 whitespace-pre-wrap font-sans">
                  {analysis}
                </pre>
              </div>
              <div className="flex items-start space-x-2 mt-4">
                <AlertCircle className="h-5 w-5 text-purple-500 mt-1" />
                <p className="text-sm text-gray-600">
                  Please consult with your healthcare provider before making any changes to your treatment plan.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DiabetesAnalysis;