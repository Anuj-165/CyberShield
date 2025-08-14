import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Search, ChevronDown, ChevronRight, Calendar, Download } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const ThreatLogsPage = () => {
  const [expandedRows, setExpandedRows] = useState<Set<number>>(new Set());
  const [searchTerm, setSearchTerm] = useState('');
  const [severityFilter, setSeverityFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');

  const threats = [
    {
      id: 1,
      timestamp: "2025-01-27 14:32:15",
      type: "SQL Injection",
      severity: "Critical",
      source: "192.168.1.100",
      target: "api.company.com/login",
      status: "Blocked",
      details: {
        payload: "'; DROP TABLE users; --",
        userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
        method: "POST",
        response: "403 Forbidden - Malicious payload detected"
      }
    },
    {
      id: 2,
      timestamp: "2025-01-27 14:28:42",
      type: "Malware Detection",
      severity: "High",
      source: "email.attachments",
      target: "employee@company.com",
      status: "Quarantined",
      details: {
        fileName: "invoice_2025.pdf.exe",
        hash: "d41d8cd98f00b204e9800998ecf8427e",
        scanResult: "Trojan.Generic.KD.123456",
        action: "File moved to quarantine"
      }
    },
    {
      id: 3,
      timestamp: "2025-01-27 14:25:18",
      type: "Brute Force Attack",
      severity: "Medium",
      source: "10.0.0.45",
      target: "ssh.company.com:22",
      status: "Monitoring",
      details: {
        attempts: "47 failed login attempts",
        timeWindow: "5 minutes",
        targetUser: "admin",
        action: "IP temporarily blocked for 1 hour"
      }
    },
    {
      id: 4,
      timestamp: "2025-01-27 14:20:33",
      type: "Phishing Attempt",
      severity: "High",
      source: "suspicious-bank.net",
      target: "Multiple employees",
      status: "Blocked",
      details: {
        emailSubject: "Urgent: Verify your account",
        recipientsTargeted: "23 employees",
        maliciousURL: "hxxp://fake-bank-login[.]com",
        action: "Emails blocked, users notified"
      }
    },
    {
      id: 5,
      timestamp: "2025-01-27 14:15:07",
      type: "Anomalous Traffic",
      severity: "Low",
      source: "203.0.113.5",
      target: "web.company.com",
      status: "Investigating",
      details: {
        pattern: "Unusual request frequency",
        requestsPerMinute: "150",
        normalBaseline: "45",
        action: "Rate limiting applied"
      }
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Critical': return 'bg-red-500 text-white';
      case 'High': return 'bg-orange-500 text-white';
      case 'Medium': return 'bg-yellow-500 text-black';
      case 'Low': return 'bg-green-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Blocked': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'Quarantined': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'Monitoring': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Investigating': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const toggleRowExpansion = (id: number) => {
    const newExpanded = new Set(expandedRows);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedRows(newExpanded);
  };

  const filteredThreats = threats.filter(threat => {
    const matchesSearch = threat.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         threat.source.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         threat.target.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSeverity = severityFilter === 'all' || threat.severity.toLowerCase() === severityFilter;
    const matchesType = typeFilter === 'all' || threat.type.toLowerCase().includes(typeFilter.toLowerCase());
    
    return matchesSearch && matchesSeverity && matchesType;
  });

  return (
    <div className="space-y-8">
      
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-between items-center"
      >
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">
            Threat <span className="text-cyber-red">Logs</span>
          </h1>
          <p className="text-gray-300">Comprehensive security event monitoring and analysis</p>
        </div>
        <Button className="cyber-button">
          <Download className="h-4 w-4 mr-2" />
          Export Logs
        </Button>
      </motion.div>

      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <Card className="glass-effect">
          <CardContent className="p-6">
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex-1 min-w-64">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search threats, sources, targets..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-cyber-dark-gray border-gray-600 focus:border-cyber-red text-white placeholder-gray-400"
                  />
                </div>
              </div>
              
              <Select value={severityFilter} onValueChange={setSeverityFilter}>
                <SelectTrigger className="w-40 bg-cyber-dark-gray border-gray-600">
                  <SelectValue placeholder="Severity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Severities</SelectItem>
                  <SelectItem value="critical">Critical</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>

              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-40 bg-cyber-dark-gray border-gray-600">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="sql">SQL Injection</SelectItem>
                  <SelectItem value="malware">Malware</SelectItem>
                  <SelectItem value="brute">Brute Force</SelectItem>
                  <SelectItem value="phishing">Phishing</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" className="border-cyber-red/30 text-cyber-red hover-glow">
                <Calendar className="h-4 w-4 mr-2" />
                Date Range
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <Card className="glass-effect hover-glow">
          <CardHeader>
            <CardTitle className="text-white">Security Events ({filteredThreats.length})</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-cyber-dark-gray">
                  <tr>
                    <th className="text-left p-4 text-gray-300 font-semibold">Timestamp</th>
                    <th className="text-left p-4 text-gray-300 font-semibold">Type</th>
                    <th className="text-left p-4 text-gray-300 font-semibold">Severity</th>
                    <th className="text-left p-4 text-gray-300 font-semibold">Source</th>
                    <th className="text-left p-4 text-gray-300 font-semibold">Status</th>
                    <th className="text-left p-4 text-gray-300 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredThreats.map((threat, index) => (
                    <React.Fragment key={threat.id}>
                      <motion.tr
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="border-b border-gray-700 hover:bg-cyber-red/5 transition-colors"
                      >
                        <td className="p-4 text-gray-300 font-mono text-sm">{threat.timestamp}</td>
                        <td className="p-4 text-white font-semibold">{threat.type}</td>
                        <td className="p-4">
                          <Badge className={getSeverityColor(threat.severity)}>
                            {threat.severity}
                          </Badge>
                        </td>
                        <td className="p-4 text-gray-300 font-mono text-sm">{threat.source}</td>
                        <td className="p-4">
                          <Badge variant="outline" className={getStatusColor(threat.status)}>
                            {threat.status}
                          </Badge>
                        </td>
                        <td className="p-4">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleRowExpansion(threat.id)}
                            className="hover:text-cyber-red"
                          >
                            {expandedRows.has(threat.id) ? (
                              <ChevronDown className="h-4 w-4" />
                            ) : (
                              <ChevronRight className="h-4 w-4" />
                            )}
                          </Button>
                        </td>
                      </motion.tr>
                      
                      {expandedRows.has(threat.id) && (
                        <motion.tr
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <td colSpan={6} className="p-4 bg-cyber-black/30">
                            <div className="space-y-3">
                              <h4 className="font-semibold text-cyber-red">Threat Details</h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                {Object.entries(threat.details).map(([key, value]) => (
                                  <div key={key} className="flex justify-between">
                                    <span className="text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                                    <span className="text-white font-mono">{value}</span>
                                  </div>
                                ))}
                              </div>
                              <div className="flex space-x-2 mt-4">
                                <Button size="sm" variant="outline" className="border-cyber-red/30 text-cyber-red hover-glow">
                                  Block Source
                                </Button>
                                <Button size="sm" variant="outline" className="border-gray-600 text-gray-300">
                                  Add to Whitelist
                                </Button>
                                <Button size="sm" variant="outline" className="border-gray-600 text-gray-300">
                                  View Full Log
                                </Button>
                              </div>
                            </div>
                          </td>
                        </motion.tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default ThreatLogsPage;