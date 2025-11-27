'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail, Network } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="p-2 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg transition-transform duration-300 group-hover:scale-110">
                <Network className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                Syirata
              </span>
            </Link>
            <p className="text-slate-400 text-sm">Informatics student specializing in Network Infrastructure and Full-Stack Web Development.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-200 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-200 mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/Syirata"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 rounded-lg text-slate-400 hover:text-blue-400 hover:bg-slate-700 transition-all duration-300 hover:scale-110"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:thariftuban@gmail.com"
                className="p-2 bg-slate-800 rounded-lg text-slate-400 hover:text-blue-400 hover:bg-slate-700 transition-all duration-300 hover:scale-110"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-slate-400 text-sm mt-4">
              Feel free to reach out for collaborations or networking opportunities!
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            &copy; {currentYear} Syirata. Built with Next.js and TailwindCSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
