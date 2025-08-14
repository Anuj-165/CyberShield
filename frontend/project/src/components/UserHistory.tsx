import React from 'react';
import { FileText, Pill, Activity } from 'lucide-react';

function UserHistory() {
  const history = [
    {
      type: 'report',
      date: '2024-03-15',
      title: 'Blood Test Results',
      summary: 'Normal blood count levels, cholesterol within range',
      icon: FileText,
    },
    {
      type: 'medicine',
      date: '2024-03-14',
      title: 'Metformin Scan',
      summary: 'Diabetes medication information retrieved',
      icon: Pill,
    },
    {
      type: 'diabetes',
      date: '2024-03-10',
      title: 'Diabetes Analysis',
      summary: 'HbA1c levels checked, recommendations provided',
      icon: Activity,
    },
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Medical History</h1>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6">
          <div className="space-y-6">
            {history.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-gray-50  rounded-lg"
                >
                  <div className={`
                    p-2 rounded-full
                    ${item.type === 'report' ? 'bg-blue-100 text-blue-600' : ''}
                    ${item.type === 'medicine' ? 'bg-green-100 text-green-600' : ''}
                    ${item.type === 'diabetes' ? 'bg-purple-100 text-purple-600' : ''}
                  `}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                      <span className="text-sm text-gray-500">{item.date}</span>
                    </div>
                    <p className="mt-1 text-gray-600">{item.summary}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserHistory;