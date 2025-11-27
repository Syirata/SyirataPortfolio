'use client';

import { useState } from 'react';
import { Mail, Linkedin, Github, Send, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Toaster } from '@/components/ui/toaster';

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'thariftuban@gmail.com',
      link: 'mailto:thariftuban@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+62-8228-2653-489',
      link: 'wa.me/+62-8228-2653-489',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Maguwoharjo, Yogyakarta',
      link: 'https://maps.app.goo.gl/A5gXY5YeRULBQh7d7?g_st=aw',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/Syirata',
      color: 'hover:text-slate-300',
    },
    {
      icon: Mail,
      name: 'Email',
      url: 'mailto:thariftuban@gmail.com',
      color: 'hover:text-purple-400',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            Get In Touch
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Have a project in mind or want to discuss networking solutions?
            Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className="bg-slate-900/50 border-slate-800 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 group hover:scale-105"
            >
              <CardContent className="pt-6 text-center">
                <div className="inline-flex p-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                <a
                  href={info.link}
                  className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
                >
                  {info.value}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <Card className="lg:col-span-3 bg-slate-900/50 border-slate-800 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-300">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="bg-slate-800/50 border-slate-700 focus:border-blue-500 text-slate-100"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-300">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                      className="bg-slate-800/50 border-slate-700 focus:border-blue-500 text-slate-100"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-slate-300">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                    className="bg-slate-800/50 border-slate-700 focus:border-blue-500 text-slate-100"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-300">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project or question..."
                    rows={6}
                    className="bg-slate-800/50 border-slate-700 focus:border-blue-500 text-slate-100 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300 hover:scale-105"
                  size="lg"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className="lg:col-span-2 bg-slate-900/50 border-slate-800 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl">Connect With Me</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-slate-400">
                I'm always open to discussing new projects, networking challenges,
                or opportunities to collaborate on interesting infrastructure solutions.
              </p>

              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-blue-400">Social Links</h3>
                <div className="space-y-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg transition-all duration-300 ${social.color} hover:bg-slate-800 group`}
                    >
                      <social.icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                      <span className="font-medium">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-blue-500/30 rounded-lg">
                <h3 className="font-semibold text-lg text-purple-400 mb-2">
                  Response Time
                </h3>
                <p className="text-slate-400 text-sm">
                  I typically respond to messages within 24-48 hours.
                  For urgent matters, please reach out via email or phone.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Toaster />
    </div>
  );
}
