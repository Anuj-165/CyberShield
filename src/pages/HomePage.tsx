import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Zap, Bell, Brain, ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const HomePage = () => {
  const features = [
    {
      icon: Shield,
      title: "Real-Time Detection",
      description: "AI-powered threat detection monitors your systems 24/7 with millisecond response times."
    },
    {
      icon: Bell,
      title: "Instant Alerts",
      description: "Get notified immediately via Slack, Telegram, or email when threats are detected."
    },
    {
      icon: Brain,
      title: "ML-based CVE Mapping",
      description: "Advanced machine learning algorithms map vulnerabilities to known CVE databases."
    },
    {
      icon: Zap,
      title: "Automated Response",
      description: "Trigger automated responses and remediation workflows for known threat patterns."
    }
  ];

  return (
    <div className="min-h-screen animated-gradient">
      
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 glass-effect"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-cyber-red"
            >
              CyberShield AI
            </motion.div>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="hover:text-cyber-red transition-colors">Home</Link>
              <Link to="/about" className="hover:text-cyber-red transition-colors">About</Link>
              <Link to="/login" className="hover:text-cyber-red transition-colors">Login</Link>
            </div>
            <Link to="/login">
              <Button className="cyber-button">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </motion.nav>

      
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="glitch text-cyber-red" data-text="AUTOMATE.">
                AUTOMATE.
              </span>
              <br />
              <span className="glitch text-white" data-text="DETECT.">
                DETECT.
              </span>
              <br />
              <span className="glitch text-cyber-red" data-text="PROTECT.">
                PROTECT.
              </span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            Next-generation AI cybersecurity platform that automatically detects, analyzes, 
            and responds to threats in real-time across your entire infrastructure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/signup">
              <Button size="lg" className="cyber-button text-lg px-8 py-4">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 border-cyber-red text-cyber-red hover-glow bg-transparent"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </motion.div>
        </div>
      </section>

      
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Advanced <span className="text-cyber-red">Threat Intelligence</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Leverage cutting-edge AI to stay ahead of emerging threats and protect your digital assets
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
              >
                <Card className="glass-effect hover-glow h-full">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 bg-cyber-red/20 rounded-full flex items-center justify-center pulse-glow">
                      <feature.icon className="h-8 w-8 text-cyber-red" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="glass-effect rounded-2xl p-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-cyber-red mb-2">99.9%</div>
                <div className="text-lg text-gray-300">Threat Detection Rate</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-cyber-red mb-2">&lt;1ms</div>
                <div className="text-lg text-gray-300">Response Time</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-cyber-red mb-2">24/7</div>
                <div className="text-lg text-gray-300">Monitoring Coverage</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="text-cyber-red">Secure</span> Your Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of organizations that trust CyberShield AI to protect their digital infrastructure
            </p>
            <Link to="/signup">
              <Button size="lg" className="cyber-button text-lg px-12 py-4">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      
      <footer className="bg-cyber-dark-gray py-12 px-6">
        <div className="container mx-auto text-center">
          <div className="text-2xl font-bold text-cyber-red mb-4">CyberShield AI</div>
          <p className="text-gray-400">© 2025 CyberShield AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;