'use client';

import { ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  delay?: number;
}

export default function ProjectCard({ title, description, tags, link, delay = 0 }: ProjectCardProps) {
  return (
    <Card
      className="bg-slate-900/50 border-slate-800 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 group hover:scale-105"
      style={{ animationDelay: `${delay}s` }}
    >
      <CardHeader>
        <CardTitle className="flex items-start justify-between gap-2">
          <span className="text-xl bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            {title}
          </span>
          <a
            href={link}
            className="p-2 bg-slate-800 rounded-lg text-slate-400 hover:text-blue-400 hover:bg-slate-700 transition-all duration-300 group-hover:scale-110"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-slate-400 text-sm leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge
              key={index}
              variant="outline"
              className="border-blue-500/30 text-blue-400 bg-blue-500/10 hover:bg-blue-500/20 transition-colors duration-300"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
