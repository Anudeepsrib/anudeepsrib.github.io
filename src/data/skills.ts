
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
    name: 'Agentic AI & Orchestration',
    description: 'Multi-agent systems, reasoning engines & tool-use',
    skills: [
      { name: 'LangGraph', icon: 'SiLangchain', color: '#1C3C3C', context: 'Stateful multi-agent graphs with conditional routing & human-in-the-loop' },
      { name: 'CrewAI', icon: 'SiRobotframework', color: '#00B0D8', context: 'Role-based multi-agent collaboration for complex task decomposition' },
      { name: 'MCP (Model Context Protocol)', icon: 'SiAnthropic', color: '#D97757', context: 'Anthropic\'s open standard for agent ↔ server tool-use and context sharing' },
      { name: 'OpenAI (GPT-4o / o3)', icon: 'SiOpenai', color: '#412991', context: 'Function calling, structured outputs, and chain-of-thought reasoning' },
      { name: 'Claude 3.5 (Anthropic)', icon: 'SiAnthropic', color: '#D97757', context: 'Extended thinking, agentic coding, and enterprise-scale analysis' },
      { name: 'Gemini 2.0 (Google)', icon: 'SiGooglegemini', color: '#8E75B2', context: 'Multimodal reasoning, grounding, and million-token context windows' },
    ]
  },
  {
    name: 'RAG & Knowledge Architecture',
    description: 'Enterprise retrieval, grounding & search systems',
    skills: [
      { name: 'Advanced RAG Pipelines', icon: 'SiElasticsearch', color: '#005571', context: 'Semantic chunking, hybrid search, re-ranking, and query transformation' },
      { name: 'Vector Databases', icon: 'SiPinecone', color: '#000000', context: 'ChromaDB, Pinecone, Azure AI Search — scoped retrieval at enterprise scale' },
      { name: 'GraphRAG & Knowledge Graphs', icon: 'SiNeo4J', color: '#4581C3', context: 'Structured reasoning over entity relationships and multi-hop retrieval' },
      { name: 'LangChain / LCEL', icon: 'SiLangchain', color: '#1C3C3C', context: 'Composable retrieval chains with output parsing and tool integration' },
    ]
  },
  {
    name: 'AI Safety & Evaluation',
    description: 'Guardrails, observability & production trust',
    skills: [
      { name: 'LangSmith / Langfuse', icon: 'SiLangchain', color: '#1C3C3C', context: 'Trace-level observability, evaluation datasets, and production monitoring' },
      { name: 'Guardrails & Grading', icon: 'TbShieldCheck', color: '#22C55E', context: 'Hallucination detection, relevance grading, and citation verification' },
      { name: 'Presidio (PII/PHI)', icon: 'SiMicrosoft', color: '#5E5E5E', context: 'Healthcare-grade PII and PHI anonymization for regulated industries' },
      { name: 'Prompt Engineering', icon: 'TbPrompt', color: '#F59E0B', context: 'System prompting, structured outputs, and few-shot optimization' },
    ]
  },
  {
    name: 'AI-Native Development',
    description: 'Bleeding-edge AI-powered engineering workflows',
    skills: [
      { name: 'Claude Code', icon: 'SiAnthropic', color: '#D97757', context: 'AI-native terminal agent for architecting and shipping production systems' },
      { name: 'Cursor IDE', icon: 'SiVisualstudiocode', color: '#007ACC', context: 'AI-first development with deep codebase understanding and multi-file edits' },
      { name: 'GitHub Copilot', icon: 'SiGithubcopilot', color: '#FFFFFF', context: 'Context-aware code generation, refactoring, and review assistance' },
      { name: 'WebMCP (W3C)', icon: 'SiGooglechrome', color: '#4285F4', context: 'Exposing structured agent tools via browser — the new web standard' },
    ]
  },
  {
    name: 'Cloud & Production Systems',
    description: 'Enterprise infrastructure built for AI workloads',
    skills: [
      { name: 'Python & FastAPI', icon: 'SiPython', color: '#3776AB', context: 'Async APIs with Pydantic validation, RBAC middleware, and model serving' },
      { name: 'Azure AI Platform', icon: 'TbBrandAzure', color: '#0078D4', context: 'Azure OpenAI, AI Search, Cosmos DB, AKS, and Functions' },
      { name: 'AWS ML Stack', icon: 'SiAmazonwebservices', color: '#FF9900', context: 'SageMaker, Bedrock, Lambda — multi-cloud AI deployments' },
      { name: 'PySpark / Databricks', icon: 'SiApachespark', color: '#E25A1C', context: 'Distributed ETL pipelines and unified analytics at petabyte scale' },
      { name: 'Docker & Kubernetes', icon: 'SiDocker', color: '#2496ED', context: 'Containerized inference services with auto-scaling orchestration' },
    ]
  },
];

// Keep legacy export for backwards compatibility
export const skills: Skill[] = skillCategories.flatMap(cat => cat.skills);
