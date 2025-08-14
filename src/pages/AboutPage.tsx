import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, ArrowLeft, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const AboutPage = () => {
  const team = [
    {
      name: "Alex Chen",
      role: "CEO & Founder",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Former CISO with 15+ years in cybersecurity"
    },
    {
      name: "Sarah Kim",
      role: "CTO",
      avatar: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "AI/ML expert, PhD in Computer Science"
    },
    {
      name: "Marcus Johnson",
      role: "Head of Security",
      avatar: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Ethical hacker and penetration testing specialist"
    },
    {
      name: "Elena Rodriguez",
      role: "Lead Engineer",
      avatar: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Full-stack developer with security focus"
    }
  ];

  const techStack = [
    "FastAPI", "React", "Supabase", "Python", "TensorFlow", 
    "Docker", "Kubernetes", "PostgreSQL", "Redis", "TypeScript"
  ];

  return (
    <div className="min-h-screen bg-cyber-black text-white">
      
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 glass-effect"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <div className="text-2xl font-bold text-cyber-red">
              CyberShield AI
            </div>
            <Link to="/login">
              <Button className="cyber-button">
                Login
              </Button>
            </Link>
          </div>
        </div>
      </motion.nav>

      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-cyber-red/20 rounded-full flex items-center justify-center pulse-glow">
                <Shield className="h-12 w-12 text-cyber-red" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-cyber-red">CyberShield AI</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We're on a mission to democratize cybersecurity through artificial intelligence, 
              making enterprise-grade protection accessible to organizations of all sizes.
            </p>
          </motion.section>

          
          <motion.section
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className="glass-effect hover-glow">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-6 text-cyber-red">The Problem</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Traditional cybersecurity solutions are reactive, expensive, and require extensive 
                    expertise to operate effectively. Small to medium businesses are left vulnerable 
                    while enterprise solutions remain out of reach.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Cyber threats are evolving faster than human analysts can keep up, creating 
                    dangerous security gaps that attackers exploit daily.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-effect hover-glow">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-6 text-cyber-red">Our Vision</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We envision a world where AI-powered cybersecurity is accessible to everyone, 
                    providing real-time protection that adapts and learns from emerging threats.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Our platform democratizes enterprise-grade security, making it as easy to deploy 
                    as installing an app, yet as powerful as solutions used by Fortune 500 companies.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.section>

          
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-center mb-16">
              Meet the <span className="text-cyber-red">Team</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="glass-effect hover-glow">
                    <CardContent className="p-6 text-center">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-cyber-red">
                        <img 
                          src={member.avatar} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                      <p className="text-cyber-red font-semibold mb-3">{member.role}</p>
                      <p className="text-sm text-gray-300 mb-4">{member.bio}</p>
                      <div className="flex justify-center space-x-3">
                        <Github className="h-5 w-5 text-gray-400 hover:text-cyber-red cursor-pointer transition-colors" />
                        <Linkedin className="h-5 w-5 text-gray-400 hover:text-cyber-red cursor-pointer transition-colors" />
                        <Twitter className="h-5 w-5 text-gray-400 hover:text-cyber-red cursor-pointer transition-colors" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-8">
              Built with <span className="text-cyber-red">Modern Tech</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Our platform leverages the latest technologies to deliver unparalleled performance and reliability
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <Badge 
                    variant="outline" 
                    className="text-lg px-4 py-2 border-cyber-red text-cyber-red hover-glow cursor-pointer"
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;