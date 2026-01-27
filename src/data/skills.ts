
interface Skill {
  name: string;
  icon: string;
  color: string;
  context: string;
}

interface SkillCategory {
  name: string;
  description: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Agentic AI Systems',
    description: 'Autonomous workflows & reasoning engines',
    skills: [
      { name: 'LangChain', icon: 'SiLangchain', color: '#1C3C3C', context: 'Building multi-step agent workflows that don\'t hallucinate' },
      { name: 'LLMs', icon: 'SiOpenai', color: '#412991', context: 'Fine-tuning & prompting for domain-specific reasoning' },
      { name: 'RAG Systems', icon: 'SiNvidia', color: '#76B900', context: 'Retrieving accurate enterprise context for answers' },  // Using NVidia as proxy or generic
      { name: 'Vector DBs', icon: 'SiPinecone', color: '#000000', context: 'Semantic search infrastructure for massive knowledge bases' },
    ]
  },
  {
    name: 'Production Engineering',
    description: 'Reliable, observable system architecture',
    skills: [
      { name: 'FastAPI', icon: 'SiFastapi', color: '#009688', context: 'High-concurrency model serving endpoints' },
      { name: 'Docker', icon: 'SiDocker', color: '#2496ED', context: 'Consistent environments from research to prod' },
      { name: 'Kubernetes', icon: 'SiKubernetes', color: '#326CE5', context: 'Auto-scaling inference workloads' },
      { name: 'Python', icon: 'SiPython', color: '#3776AB', context: 'Core logic for glue code and model development' },
    ]
  },
  {
    name: 'Scalable Data Platforms',
    description: 'Processing petabytes without bottlenecks',
    skills: [
      { name: 'PySpark', icon: 'SiApachespark', color: '#E25A1C', context: 'Distributed data processing pipelines' },
      { name: 'Databricks', icon: 'SiDatabricks', color: '#FF3621', context: 'Unifying data engineering and data science' },
      { name: 'Cloud (Azure/AWS)', icon: 'TbBrandAzure', color: '#0078D4', context: 'Enterprise-grade infrastructure backbone' },
      { name: 'SQL', icon: 'SiMysql', color: '#4479A1', context: 'Complex querying for business insights' },
    ]
  },
  {
    name: 'User Experience',
    description: 'Interfaces that drive adoption',
    skills: [
      { name: 'Next.js', icon: 'SiNextdotjs', color: '#FFFFFF', context: 'Server-side rendering for performant dashboards' },
      { name: 'React', icon: 'SiReact', color: '#61DAFB', context: 'Interactive chat & visualization components' },
      { name: 'TypeScript', icon: 'SiTypescript', color: '#3178C6', context: 'Type-safe frontend codebases' },
    ]
  }
];

// Keep legacy export for backwards compatibility
export const skills: Skill[] = skillCategories.flatMap(cat => cat.skills);
