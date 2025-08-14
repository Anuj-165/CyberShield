import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, AlertTriangle, Activity, Users, TrendingUp, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';

const DashboardPage = () => {
  const metrics = [
    { title: "Threats Detected Today", value: "247", change: "+12%", icon: Shield, color: "text-cyber-red" },
    { title: "Active Alerts", value: "8", change: "-23%", icon: AlertTriangle, color: "text-orange-400" },
    { title: "System Health", value: "99.8%", change: "+0.1%", icon: Activity, color: "text-green-400" },
    { title: "Protected Assets", value: "1,247", change: "+5%", icon: Users, color: "text-blue-400" }
  ];

  const [recentThreats] = useState([
    { id: 1, type: "SQL Injection", severity: "Critical", source: "192.168.1.100", time: "2 min ago", status: "Blocked", confidence: 0.95 },
    { id: 2, type: "Malware Detection", severity: "High", source: "email.attachments", time: "5 min ago", status: "Quarantined", confidence: 0.89 },
    { id: 3, type: "Brute Force", severity: "Medium", source: "10.0.0.45", time: "12 min ago", status: "Monitoring", confidence: 0.72 },
    { id: 4, type: "Phishing Attempt", severity: "High", source: "suspicious-link.com", time: "18 min ago", status: "Blocked", confidence: 0.87 }
  ]);

  const [attackCountByIP] = useState<{[ip:string]: number}>({
    "192.168.1.100": 4,
    "10.0.0.45": 1
  });

  const chartData = [
    { time: '00:00', threats: 12 },
    { time: '04:00', threats: 8 },
    { time: '08:00', threats: 24 },
    { time: '12:00', threats: 18 },
    { time: '16:00', threats: 32 },
    { time: '20:00', threats: 15 },
    { time: '24:00', threats: 22 }
  ];

  const monthlyData = [
    { day: '1', attacks: 12, Critical: 3, High: 4, Medium: 5 },
    { day: '2', attacks: 18, Critical: 5, High: 6, Medium: 7 },
    { day: '3', attacks: 8, Critical: 1, High: 3, Medium: 4 },
    { day: '4', attacks: 20, Critical: 6, High: 8, Medium: 6 },
    { day: '5', attacks: 15, Critical: 2, High: 5, Medium: 8 },
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

  return (
    <div className="min-h-screen bg-cyber-black text-white overflow-x-hidden">
      
      <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8 space-y-6">

        
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl font-bold mb-2">
            Security <span className="text-cyber-red">Dashboard</span>
          </h1>
          <p className="text-gray-300">Real-time monitoring and threat intelligence overview</p>
        </motion.div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {metrics.map((metric, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1, duration: 0.6 }}>
              <Card className="glass-effect hover-glow pulse-glow w-full">
                <CardContent className="p-6 flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-400 mb-1">{metric.title}</p>
                    <p className="text-3xl font-bold text-white">{metric.value}</p>
                    <p className={`text-sm ${metric.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                      {metric.change} from yesterday
                    </p>
                  </div>
                  <div className={`w-12 h-12 rounded-full bg-cyber-red/20 flex items-center justify-center ${metric.color}`}>
                    <metric.icon className="h-6 w-6" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
          
          <Card className="glass-effect hover-glow w-full">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <TrendingUp className="h-5 w-5 mr-2 text-cyber-red" /> Threat Activity (24h)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-full">
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
                    <XAxis dataKey="time" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip contentStyle={{ backgroundColor: '#1f1f1f', border: '1px solid #ff002e', borderRadius: 8 }} />
                    <Line type="monotone" dataKey="threats" stroke="#ff002e" strokeWidth={3} dot={{ fill: '#ff002e' }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          
          <Card className="glass-effect hover-glow w-full">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <Clock className="h-5 w-5 mr-2 text-cyber-red" /> Recent Threats
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 w-full">
              {recentThreats.map((threat) => (
                <div
                  key={threat.id}
                  className={`flex items-center justify-between p-3 rounded-lg bg-cyber-black/50 hover:bg-cyber-red/10 transition-colors cursor-pointer scan-line w-full ${
                    attackCountByIP[threat.source] > 3 ? 'border-2 border-red-500' : ''
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${getSeverityColor(threat.severity)}`}></div>
                    <div>
                      <p className="font-semibold text-black">{threat.type} ({(threat.confidence * 100).toFixed(0)}%)</p>
                      <p className="text-sm text-gray-400">{threat.source}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline" className="mb-1">{threat.status}</Badge>
                    <p className="text-xs text-gray-400">{threat.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        
        <Card className="glass-effect hover-glow w-full">
          <CardHeader>
            <CardTitle className="text-white">Monthly Attack Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="w-full">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
                  <XAxis dataKey="day" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip contentStyle={{ backgroundColor: '#1f1f1f', border: '1px solid #ff002e', borderRadius: 8 }} />
                  <Legend />
                  <Bar dataKey="Critical" fill="#ff4d4d" />
                  <Bar dataKey="High" fill="#ff944d" />
                  <Bar dataKey="Medium" fill="#ffd24d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default DashboardPage;
