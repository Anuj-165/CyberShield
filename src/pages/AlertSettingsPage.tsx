import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, AlertTriangle, Clock, Activity } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const mockedMetrics = [
  { title: 'Total Warnings', value: 112, icon: AlertTriangle, color: 'text-yellow-400' },
  { title: 'Critical Alarms', value: 23, icon: Shield, color: 'text-cyber-red' },
  { title: 'Active Alerts', value: 8, icon: Activity, color: 'text-green-400' },
];

const mockedHistory = [
  { id: 1, type: 'SQL Injection', severity: 'Critical', source: '192.168.1.101', time: '2 mins ago', status: 'Blocked' },
  { id: 2, type: 'Brute Force', severity: 'High', source: '10.0.0.45', time: '5 mins ago', status: 'Monitoring' },
  { id: 3, type: 'Phishing', severity: 'Medium', source: 'suspicious-link.com', time: '12 mins ago', status: 'Blocked' },
  { id: 4, type: 'Malware', severity: 'Low', source: 'email.attachments', time: '20 mins ago', status: 'Quarantined' },
  { id: 5, type: 'XSS Attack', severity: 'High', source: 'malicious-site.com', time: '30 mins ago', status: 'Blocked' },
];

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case 'Critical': return 'bg-red-500';
    case 'High': return 'bg-orange-500';
    case 'Medium': return 'bg-yellow-500';
    case 'Low': return 'bg-green-500';
    default: return 'bg-gray-500';
  }
};

const WarningsPage = () => {
  return (
    <div className="space-y-8">
      
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="text-4xl font-bold text-white mb-2">
          Attack <span className="text-cyber-red">Warnings</span>
        </h1>
        <p className="text-gray-300">Real-time alerts, alarms, and attack history overview</p>
      </motion.div>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {mockedMetrics.map((metric, idx) => (
          <motion.div key={idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}>
            <Card className="glass-effect hover-glow">
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">{metric.title}</p>
                  <p className="text-3xl font-bold text-white">{metric.value}</p>
                </div>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${metric.color} bg-white/10`}>
                  <metric.icon className="h-6 w-6" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        <Card className="glass-effect hover-glow">
          <CardHeader>
            <CardTitle className="flex items-center text-white">
              <Clock className="h-5 w-5 mr-2 text-cyber-red" />
              Attack History
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {mockedHistory.map((attack) => (
              <motion.div
                key={attack.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-between p-3 rounded-lg bg-cyber-black/50 hover:bg-cyber-red/10 transition-colors cursor-pointer scan-line"
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${getSeverityColor(attack.severity)}`}></div>
                  <div>
                    <p className="font-semibold text-white">{attack.type}</p>
                    <p className="text-sm text-gray-400">{attack.source}</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant="outline" className="mb-1">
                    {attack.status}
                  </Badge>
                  <p className="text-xs text-gray-400">{attack.time}</p>
                </div>
              </motion.div>
            ))}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default WarningsPage;
