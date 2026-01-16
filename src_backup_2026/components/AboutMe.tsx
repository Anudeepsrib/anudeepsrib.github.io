import React from 'react';
import Image from 'next/image';
import { GithubIcon, Linkedin, Globe, MapPin, Mail } from 'lucide-react';
import resumeData from '@/data/resumeData.json';

const AboutMe: React.FC = () => {
  const { name, title, github, linkedin, website, summary, image, location, email } = resumeData.personalInfo;

  return (
    <div className="bg-card/30 backdrop-blur-md dark:bg-card/20 rounded-2xl p-6 h-full border border-border/50 shadow-sm transition-all hover:shadow-md">
      <div className="flex flex-col h-full">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-shrink-0 relative group">
            <div className="relative w-32 h-32 md:w-40 md:h-40">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-600 rounded-full blur-md opacity-70 group-hover:opacity-100 transition-opacity" />
              <Image
                src={image}
                alt={`${name}'s profile picture`}
                fill
                className="rounded-full object-cover ring-4 ring-background relative z-10"
                priority
              />
            </div>
            <div className="flex justify-center mt-4 gap-3">
              {github && (
                <a href={github} target="_blank" rel="noopener noreferrer" className="p-2 bg-secondary rounded-full hover:bg-primary hover:text-white transition-colors">
                  <GithubIcon className="w-5 h-5" />
                </a>
              )}
              {linkedin && (
                <a href={linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-secondary rounded-full hover:bg-primary hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          <div className="flex-1 min-w-0 pt-2">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-2">
                {name}
              </h1>
              <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500 font-semibold mb-6">
                {title}
              </p>

              <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
                {location && (
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{location}</span>
                  </div>
                )}
                {email && (
                  <div className="flex items-center gap-1">
                    <Mail className="w-4 h-4 text-primary" />
                    <span>{email}</span>
                  </div>
                )}
                {website && (
                  <div className="flex items-center gap-1">
                    <Globe className="w-4 h-4 text-primary" />
                    <a href={website} target="_blank" className="hover:underline">Portfolio</a>
                  </div>
                )}
              </div>

              <div className="bg-secondary/50 rounded-xl p-5 border border-border/50">
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {summary}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;