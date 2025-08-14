import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Building, Lock, Save, Edit3 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Alex Chen',
    email: 'alex.chen@company.com',
    organization: 'TechCorp Security',
    role: 'Security Administrator',
    phone: '+1 (555) 123-4567',
    timezone: 'UTC-8 (Pacific Time)',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300'
  });

  const [passwords, setPasswords] = useState({
    current: '',
    new: '',
    confirm: ''
  });

  const handleSaveProfile = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success('Profile updated successfully!');
    setIsEditing(false);
    setIsLoading(false);
  };

  const handleChangePassword = async () => {
    if (passwords.new !== passwords.confirm) {
      toast.error('New passwords do not match');
      return;
    }
    
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success('Password changed successfully!');
    setPasswords({ current: '', new: '', confirm: '' });
    setIsLoading(false);
  };

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
            User <span className="text-cyber-red">Profile</span>
          </h1>
          <p className="text-gray-300">Manage your account settings and preferences</p>
        </div>
        <Button 
          onClick={() => setIsEditing(!isEditing)}
          variant="outline"
          className="border-cyber-red/30 text-cyber-red hover-glow"
        >
          <Edit3 className="h-4 w-4 mr-2" />
          {isEditing ? 'Cancel' : 'Edit Profile'}
        </Button>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="lg:col-span-1"
        >
          <Card className="glass-effect hover-glow">
            <CardContent className="p-8 text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative inline-block mb-6"
              >
                <Avatar className="w-32 h-32 border-4 border-cyber-red/30">
                  <AvatarImage src={profile.avatar} alt={profile.name} />
                  <AvatarFallback className="text-2xl bg-cyber-red/20 text-cyber-red">
                    {profile.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                {isEditing && (
                  <Button
                    size="sm"
                    className="absolute bottom-0 right-0 rounded-full w-8 h-8 p-0 cyber-button"
                  >
                    <Edit3 className="h-4 w-4" />
                  </Button>
                )}
              </motion.div>
              
              <h2 className="text-2xl font-bold text-white mb-2">{profile.name}</h2>
              <p className="text-cyber-red font-semibold mb-1">{profile.role}</p>
              <p className="text-gray-400 text-sm mb-6">{profile.organization}</p>
              
              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-cyber-red" />
                  <span className="text-gray-300 text-sm">{profile.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Building className="h-4 w-4 text-cyber-red" />
                  <span className="text-gray-300 text-sm">{profile.organization}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="lg:col-span-2 space-y-6"
        >
          <Card className="glass-effect hover-glow">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <User className="h-5 w-5 mr-2 text-cyber-red" />
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-white">Full Name</Label>
                  <Input
                    value={profile.name}
                    onChange={(e) => setProfile(prev => ({ ...prev, name: e.target.value }))}
                    disabled={!isEditing}
                    className="bg-cyber-dark-gray border-gray-600 focus:border-cyber-red text-white disabled:opacity-50"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label className="text-white">Email Address</Label>
                  <Input
                    value={profile.email}
                    onChange={(e) => setProfile(prev => ({ ...prev, email: e.target.value }))}
                    disabled={!isEditing}
                    className="bg-cyber-dark-gray border-gray-600 focus:border-cyber-red text-white disabled:opacity-50"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label className="text-white">Organization</Label>
                  <Input
                    value={profile.organization}
                    onChange={(e) => setProfile(prev => ({ ...prev, organization: e.target.value }))}
                    disabled={!isEditing}
                    className="bg-cyber-dark-gray border-gray-600 focus:border-cyber-red text-white disabled:opacity-50"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label className="text-white">Phone Number</Label>
                  <Input
                    value={profile.phone}
                    onChange={(e) => setProfile(prev => ({ ...prev, phone: e.target.value }))}
                    disabled={!isEditing}
                    className="bg-cyber-dark-gray border-gray-600 focus:border-cyber-red text-white disabled:opacity-50"
                  />
                </div>
              </div>
              
              {isEditing && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-end"
                >
                  <Button onClick={handleSaveProfile} disabled={isLoading} className="cyber-button">
                    {isLoading ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                      />
                    ) : (
                      <Save className="h-4 w-4 mr-2" />
                    )}
                    Save Changes
                  </Button>
                </motion.div>
              )}
            </CardContent>
          </Card>

          
          <Card className="glass-effect hover-glow">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Lock className="h-5 w-5 mr-2 text-cyber-red" />
                Security Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label className="text-white">Current Password</Label>
                  <Input
                    type="password"
                    value={passwords.current}
                    onChange={(e) => setPasswords(prev => ({ ...prev, current: e.target.value }))}
                    className="bg-cyber-dark-gray border-gray-600 focus:border-cyber-red text-white"
                    placeholder="Enter current password"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label className="text-white">New Password</Label>
                  <Input
                    type="password"
                    value={passwords.new}
                    onChange={(e) => setPasswords(prev => ({ ...prev, new: e.target.value }))}
                    className="bg-cyber-dark-gray border-gray-600 focus:border-cyber-red text-white"
                    placeholder="Enter new password"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label className="text-white">Confirm Password</Label>
                  <Input
                    type="password"
                    value={passwords.confirm}
                    onChange={(e) => setPasswords(prev => ({ ...prev, confirm: e.target.value }))}
                    className="bg-cyber-dark-gray border-gray-600 focus:border-cyber-red text-white"
                    placeholder="Confirm new password"
                  />
                </div>
              </div>
              
              <Separator className="bg-gray-700" />
              
              <Button 
                onClick={handleChangePassword}
                disabled={isLoading || !passwords.current || !passwords.new || !passwords.confirm}
                className="cyber-button"
              >
                Update Password
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfilePage;