import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Navbar = () => {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="h-16 bg-cyber-dark-gray border-b border-cyber-red/20 flex items-center justify-between px-6 ml-64"
    >
      <div className="flex items-center space-x-4 flex-1">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search threats, logs, alerts..."
            className="pl-10 bg-cyber-black border-gray-600 focus:border-cyber-red text-white placeholder-gray-400"
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant="ghost"
            size="sm"
            className="relative hover:bg-cyber-red/10 hover:text-cyber-red"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-cyber-red rounded-full pulse-glow"></span>
          </Button>
        </motion.div>
        
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant="ghost"
            size="sm"
            className="hover:bg-cyber-red/10 hover:text-cyber-red"
          >
            <User className="h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Navbar;