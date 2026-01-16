
interface Skill {
  name: string;
  icon: string;
  color: string;
}

export const skills: Skill[] = [
  { name: 'Python', icon: 'SiPython', color: '#3776AB' },
  { name: 'PySpark', icon: 'SiApachespark', color: '#E25A1C' },
  { name: 'LLMs', icon: 'SiOpenai', color: '#412991' },
  { name: 'SQL', icon: 'SiMysql', color: '#4479A1' },
  { name: 'TypeScript', icon: 'SiTypescript', color: '#3178C6' },
  { name: 'Azure', icon: 'SiMicrosoftazure', color: '#0078D4' },
  { name: 'AWS', icon: 'SiAmazonaws', color: '#FF9900' },
  { name: 'GCP', icon: 'SiGooglecloud', color: '#4285F4' },
  { name: 'Databricks', icon: 'SiDatabricks', color: '#FF3621' },
  { name: 'Docker', icon: 'SiDocker', color: '#2496ED' },
  { name: 'Kubernetes', icon: 'SiKubernetes', color: '#326CE5' },
  { name: 'FastAPI', icon: 'SiFastapi', color: '#009688' },
  { name: 'LangChain', icon: 'SiLangchain', color: '#1C3C3C' },
  { name: 'React', icon: 'SiReact', color: '#61DAFB' },
  { name: 'Next.js', icon: 'SiNextdotjs', color: '#000000' }
];
