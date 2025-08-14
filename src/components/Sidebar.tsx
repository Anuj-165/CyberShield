import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Shield, 
  Bell, 
  User, 
  Settings, 
  LogOut,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AuthContext } from '../App';

const Sidebar = () => {
  const location = useLocation();
  const { logout } = useContext(AuthContext);

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Threat Logs', href: '/threats', icon: Shield },
    { name: 'Alert Settings', href: '/alerts', icon: Bell },
    { name: 'Profile', href: '/profile', icon: User },
    { name: 'Admin Panel', href: '/admin', icon: Settings },
  ];

  return (
    <motion.div
      initial={{ x: -250 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed left-0 top-0 h-screen w-64 bg-cyber-dark-gray border-r border-cyber-red/20 z-40"
    >
      <div className="p-6">
        <div className="text-2xl font-bold text-cyber-red mb-8">
          CyberShield AI
        </div>
        
        <nav className="space-y-2">
          {navigation.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={item.href}>
                <motion.div
                  whileHover={{ x: 5 }}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
                    location.pathname === item.href
                      ? 'bg-cyber-red/20 text-cyber-red border border-cyber-red/30'
                      : 'hover:bg-cyber-red/10 hover:text-cyber-red'
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="font-medium">{item.name}</span>
                  <ChevronRight className={`h-4 w-4 ml-auto transition-transform ${
                    location.pathname === item.href ? 'rotate-90' : 'group-hover:translate-x-1'
                  }`} />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </nav>
      </div>

      <div className="absolute bottom-6 left-6 right-6">
        <Button
          variant="outline"
          className="w-full border-cyber-red/30 text-cyber-red hover:bg-cyber-red hover:text-white transition-all"
          onClick={logout}
        >
          <LogOut className="h-4 w-4 mr-2" />
          Sign Out
        </Button>
      </div>
    </motion.div>
  );
};

export default Sidebar;