
interface Skill {
  name: string;
  icon: string;
  color: string;
}

interface SkillCategory {
  name: string;
  description: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Backend & AI/ML',
    description: 'Core languages, frameworks, and AI technologies',
    skills: [
      { name: 'Python', icon: 'SiPython', color: '#3776AB' },
      { name: 'PySpark', icon: 'SiApachespark', color: '#E25A1C' },
      { name: 'FastAPI', icon: 'SiFastapi', color: '#009688' },
      { name: 'LLMs', icon: 'SiOpenai', color: '#412991' },
      { name: 'LangChain', icon: 'SiLangchain', color: '#1C3C3C' },
      { name: 'SQL', icon: 'SiMysql', color: '#4479A1' },
    ]
  },
  {
    name: 'Frontend',
    description: 'Modern UI frameworks and languages',
    skills: [
      { name: 'React', icon: 'SiReact', color: '#61DAFB' },
      { name: 'Next.js', icon: 'SiNextdotjs', color: '#FFFFFF' },
      { name: 'TypeScript', icon: 'SiTypescript', color: '#3178C6' },
    ]
  },
  {
    name: 'Cloud Platforms',
    description: 'Enterprise cloud infrastructure',
    skills: [
      { name: 'Azure', icon: 'TbBrandAzure', color: '#0078D4' },
      { name: 'AWS', icon: 'SiAmazonwebservices', color: '#FF9900' },
      { name: 'GCP', icon: 'SiGooglecloud', color: '#4285F4' },
    ]
  },
  {
    name: 'DevOps & Deployment',
    description: 'Containerization and orchestration',
    skills: [
      { name: 'Docker', icon: 'SiDocker', color: '#2496ED' },
      { name: 'Kubernetes', icon: 'SiKubernetes', color: '#326CE5' },
    ]
  }
];

// Keep legacy export for backwards compatibility
export const skills: Skill[] = skillCategories.flatMap(cat => cat.skills);
