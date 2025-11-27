'use client';

import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';

export default function Home() {
  const featuredProjects = [
    {
      title: 'Dealer Mobile Website',
      description: 'The project involved designing and implementing a scalable enterprise network infrastructure that includes specific networking components: VLAN segmentation, Routing protocols (OSPF),Firewall configurations',
      tags: ['Html', 'Java Script', 'CSS', 'PHP'],
      link: 'https://github.com/MarioAndhika/Dealerweb.git',
    },
    {
      title: 'Vue Portfolio',
      description: 'Set up and managed Linux-based servers with web hosting, database management, automated backups, and security hardening.',
      tags: ['JavaScript', 'Vue', 'CSS'],
      link: 'https://4660.vercel.app/',
    },
  ];

  return (
    <div className="relative">
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-slate-950 animate-gradient" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="mb-8 inline-block">
          <div className="relative w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 animate-float">
            <img
            src="/profile.jpg"   // ganti dengan nama file fotomu
            alt="Profile"
            className="w-full h-full rounded-full object-cover"
            />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 text-transparent bg-clip-text animate-gradient">
            Syifaur Rahman Tharif
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-4">
          Informatics Student | Network Infrastructure Specialist | Full-Stack Developer
          </p>

          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
          Designing scalable network infrastructure (OSPF, Firewall) 
          and building reliable systems through Linux server administration, security hardening, 
          and full-stack development using Vue.js and PHP.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Link href="/about">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300 hover:scale-105">
                About Me
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10 transition-all duration-300 hover:scale-105">
                Get in Touch
              </Button>
            </Link>
          </div>

          <div className="flex gap-6 justify-center text-slate-400">
            <a href="https://github.com/Syirata" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform">
              <Github className="h-6 w-6" />
            </a>
            
            <a href="mailto:thariftuban@gmail.com" className="hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              Featured Projects
            </h2>
            <p className="text-slate-400 text-lg">
              Some of my recent projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
