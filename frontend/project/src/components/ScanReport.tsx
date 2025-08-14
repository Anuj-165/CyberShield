import React, { useState } from 'react';
import { Upload, FileText, AlertCircle } from 'lucide-react';

function ScanReport() {
  const [file, setFile] = useState<File | null>(null);
  const [analysis, setAnalysis] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setAnalysis('Sample Analysis: Normal blood count levels detected. Cholesterol levels are within normal range. Recommendation: Continue current diet and exercise routine.');
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Medical Report Analysis</h1>
      
      <div className="bg-white p-6 rounded-xl shadow-md">
        <form onSubmit={handleUpload} className="space-y-6">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <input
              type="file"
              onChange={handleFileChange}
              className="hidden"
              id="report-upload"
              accept="image/*,.pdf"
            />
            <label
              htmlFor="report-upload"
              className="cursor-pointer flex flex-col items-center space-y-2"
            >
              <Upload className="h-12 w-12 text-gray-400" />
              <span className="text-gray-600">Click to upload or drag and drop</span>
              <span className="text-sm text-gray-500">PDF or Image files only</span>
            </label>
          </div>

          {file && (
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <FileText className="h-4 w-4" />
              <span>{file.name}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={!file || loading}
            className={`w-full py-2 px-4 rounded-md text-white font-medium ${
              !file || loading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'
            }`}
          >
            {loading ? 'Analyzing...' : 'Analyze Report'}
          </button>
        </form>

        {analysis && (
          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Analysis Results</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-2">
                <AlertCircle className="h-5 w-5 text-blue-500 mt-1" />
                <p className="text-gray-700">{analysis}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ScanReport;