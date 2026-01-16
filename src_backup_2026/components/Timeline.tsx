'use client';

import React from 'react';
import resumeData from '@/data/resumeData.json';
import { motion } from 'framer-motion';

interface TimelineItem {
  type: 'education' | 'experience';
  title: string;
  organization: string;
  date: string;
  location?: string;
  description?: string;
  skills?: string[];
  url?: string;
}

const Timeline: React.FC = () => {
  const educationItems: TimelineItem[] = resumeData.education.map((edu: any) => ({
    type: 'education',
    title: edu.degree,
    organization: edu.institution,
    date: `${edu.startDate} - ${edu.endDate} `,
    description: edu.description,
    url: edu.institutionUrl
  }));

  const experienceItems: TimelineItem[] = resumeData.experience.map((exp: any) => ({
    type: 'experience',
    title: exp.position,
    organization: exp.company,
    date: `${exp.startDate} - ${exp.endDate} `,
    description: exp.description,
    url: exp.companyUrl,
    location: exp.location
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  const TimelineItemCard: React.FC<{ item: TimelineItem; index: number }> = ({ item, index }) => (
    <motion.div
      variants={itemVariants}
      className="mb-8 relative group"
    >
      <div className="absolute top-0 left-0 w-[2px] h-full bg-border group-last:h-0" />
      <div className="ml-6 p-5 bg-card/50 backdrop-blur-sm dark:bg-card/40 border border-border/50 rounded-xl hover:border-primary/50 hover:shadow-lg transition-all duration-300">
        <div className="absolute left-[-5px] top-6 w-3 h-3 bg-primary rounded-full ring-4 ring-background" />

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
          <div>
            <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
            <div className="text-primary font-medium text-sm">
              {item.url ? (
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {item.organization}
                </a>
              ) : item.organization}
            </div>
          </div>
          <div className="flex flex-col items-start sm:items-end text-xs text-muted-foreground">
            <span className="font-semibold bg-primary/10 text-primary px-2 py-1 rounded-full">{item.date}</span>
            {item.location && <span className="mt-1">{item.location}</span>}
          </div>
        </div>

        {item.description && (
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            {item.description}
          </p>
        )}
      </div>
    </motion.div>
  );

  return (
    <div className="h-full">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-7xl mx-auto p-6 bg-card/30 backdrop-blur-md dark:bg-card/20 rounded-2xl border border-border/50 shadow-sm"
      >
        <h1 className="text-4xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
          Professional Journey
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-foreground">Experience</h2>
            </div>
            <div className="pl-2">
              {experienceItems.map((item, index) => (
                <TimelineItemCard key={`exp - ${index} `} item={item} index={index} />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-purple-500/10 rounded-lg text-purple-500">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-foreground">Education</h2>
            </div>
            <div className="pl-2">
              {educationItems.map((item, index) => (
                <TimelineItemCard key={`edu - ${index} `} item={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};


export default Timeline;