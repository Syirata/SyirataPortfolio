'use client';

import { Network, Server, Shield, Terminal, Wifi, Router } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function About() {
  const skills = [
    {
      icon: Network,
      title: 'Cisco Networking',
      description: 'Proficient in Cisco IOS, routing protocols (EIGRP, OSPF), switching, and network troubleshooting.',
      level: 85,
    },
    {
      icon: Router,
      title: 'MikroTik',
      description: 'Experienced in RouterOS configuration, bandwidth management, VPN setup, and wireless networks.',
      level: 80,
    },
    {
      icon: Server,
      title: 'Linux Server',
      description: 'System administration, web servers (Apache/Nginx), database management, and automation scripts.',
      level: 75,
    },
    {
      icon: Terminal,
      title: 'IP Subnetting',
      description: 'Expert in VLSM, CIDR notation, network design, and IP address planning for efficient network utilization.',
      level: 90,
    },
    {
      icon: Shield,
      title: 'Network Security',
      description: 'Firewall configuration, ACLs, VPN implementation, and security best practices.',
      level: 70,
    },
    {
      icon: Wifi,
      title: 'Wireless Networks',
      description: 'WiFi standards, access point configuration, site surveys, and wireless security protocols.',
      level: 75,
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            About Me
          </h1>
          <p className="text-xl text-slate-300 max-w-1xl mx-auto leading-relaxed">
          I'm an Informatics student with a deep passion for scalable network infrastructure and building reliable full-stack systems. 
          My journey in technology has been driven by curiosity about how data travels across networks 
          and how we can build secure, efficient systems—from the network layer up to the user interface.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-400">Education & Background</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300 space-y-4">
              <p>
              Currently pursuing a degree in Informatics with a focus on Network Engineering, System Administration, and Application Development. 
              My academic journey has provided me with a strong foundation in computer science principles, data structures, and networking fundamentals.
              I've complemented my studies with hands-on experience through lab projects, certifications, and real-world implementations, covering Linux server management, 
              security hardening, and full-stack implementation using technologies like PHP and Vue.js.
              I've complemented my studies with hands-on experience through lab projects,certifications, 
              and real-world implementations, allowing me to bridge the gap between theory and practice.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-purple-400">What Drives Me</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300 space-y-4">
              <p>
              I'm fascinated by the complexity and elegance of network protocols, 
              the challenge of optimizing network performance, and the critical importance of network and application security.
              </p>
              <p>
              My goal is to become a versatile systems architect who can design and implement robust, 
              scalable network infrastructures that power modern businesses, and develop the reliable full-stack applications they run on.
              </p>
            </CardContent>
          </Card>
        </div>
        </div>
        </div>
  );
}
