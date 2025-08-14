import React, { useState } from 'react';
import { Camera, Info } from 'lucide-react';

function ScanMedicine() {
  const [medicineInfo, setMedicineInfo] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handleScan = async () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setMedicineInfo(`
        Medicine Name: Metformin
        Type: Oral diabetes medicine
        Usage: Helps control blood sugar levels
        Common Side Effects: Nausea, diarrhea, stomach pain
        Precautions: Take with meals to minimize stomach upset
      `);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Medicine Scanner</h1>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <div className="space-y-6">
          <div className="border-2 border-gray-300 rounded-lg p-8">
            <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
              <Camera className="h-16 w-16 text-gray-400" />
            </div>
          </div>

          <button
            onClick={handleScan}
            disabled={loading}
            className={`w-full py-2 px-4 rounded-md text-white font-medium ${
              loading ? 'bg-gray-400' : 'bg-green-500 hover:bg-green-600'
            }`}
          >
            {loading ? 'Scanning...' : 'Scan Medicine'}
          </button>

          {medicineInfo && (
            <div className="mt-8 p-4 bg-green-50 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Medicine Information</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-2">
                  <Info className="h-5 w-5 text-green-500 mt-1" />
                  <pre className="text-gray-700 whitespace-pre-wrap font-sans">
                    {medicineInfo}
                  </pre>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ScanMedicine;