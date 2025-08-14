import { motion } from 'framer-motion';
import { Shield, AlertTriangle, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.Icon.Default.extend({
  options: {
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
  },
});

L.Marker.prototype.options.icon = new DefaultIcon();


const topAttackers = [
  { ip: '192.168.1.101', attempts: 32, location: 'New York, USA' },
  { ip: '10.0.0.45', attempts: 21, location: 'London, UK' },
  { ip: '172.16.5.10', attempts: 18, location: 'Tokyo, Japan' },
  { ip: '203.0.113.99', attempts: 15, location: 'Berlin, Germany' },
];

const geoData = [
  { ip: '192.168.1.101', country: 'USA', city: 'New York', lat: 40.7128, lng: -74.006 },
  { ip: '10.0.0.45', country: 'UK', city: 'London', lat: 51.5074, lng: -0.1278 },
  { ip: '172.16.5.10', country: 'Japan', city: 'Tokyo', lat: 35.6895, lng: 139.6917 },
  { ip: '203.0.113.99', country: 'Germany', city: 'Berlin', lat: 52.52, lng: 13.405 },
];

const mitreAttacks = [
  { technique: 'T1078: Valid Accounts', description: 'Use of stolen credentials', severity: 'High' },
  { technique: 'T1059: Command and Scripting Interpreter', description: 'Running malicious scripts', severity: 'Critical' },
  { technique: 'T1566: Phishing', description: 'Spear-phishing email attacks', severity: 'Medium' },
  { technique: 'T1486: Data Encrypted for Impact', description: 'Ransomware attack', severity: 'Critical' },
];

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case 'Critical':
      return 'bg-red-500 text-white';
    case 'High':
      return 'bg-orange-500 text-white';
    case 'Medium':
      return 'bg-yellow-400 text-black';
    case 'Low':
      return 'bg-green-500 text-white';
    default:
      return 'bg-gray-500 text-white';
  }
};

const AdminPage = () => {
  return (
    <div className="space-y-8">
      
      
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
        <Card className="glass-effect hover-glow">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2 text-cyber-red" />
              Top Attacker IPs
            </CardTitle>
          </CardHeader>
          <CardContent>
            {topAttackers.map((attacker, idx) => (
              <motion.div key={idx} className="flex justify-between p-2 border-b border-gray-700">
                <div>
                  <p className="text-white font-semibold">{attacker.ip}</p>
                  <p className="text-gray-400 text-sm">{attacker.location}</p>
                </div>
                <Badge className="bg-red-600">{attacker.attempts} Attempts</Badge>
              </motion.div>
            ))}
          </CardContent>
        </Card>
      </motion.div>

      
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
        <Card className="glass-effect hover-glow">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-cyber-red" />
              Geo-mapped Attacks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <MapContainer
              center={[20, 0] as L.LatLngExpression}
              zoom={2}
              style={{ height: '300px', width: '100%' }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {geoData.map((geo, idx) => (
                <Marker key={idx} position={[geo.lat, geo.lng] as L.LatLngExpression}>
                  <Popup>
                    <p className="font-semibold">{geo.ip}</p>
                    <p className="text-sm">{geo.city}, {geo.country}</p>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </CardContent>
        </Card>
      </motion.div>

      
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
        <Card className="glass-effect hover-glow">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Shield className="h-5 w-5 mr-2 text-cyber-red" />
              MITRE ATT&CK Mapping
            </CardTitle>
          </CardHeader>
          <CardContent>
            {mitreAttacks.map((attack, idx) => (
              <div key={idx} className="flex justify-between p-2 border-b border-gray-700">
                <div>
                  <p className="text-white font-semibold">{attack.technique}</p>
                  <p className="text-gray-400 text-sm">{attack.description}</p>
                </div>
                <Badge className={getSeverityColor(attack.severity)}>{attack.severity}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </motion.div>

    </div>
  );
};

export default AdminPage;