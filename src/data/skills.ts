
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
      { name: 'CrewAI / AutoGen', icon: 'SiRobotframework', color: '#00B0D8', context: 'Role-based multi-agent collaboration and autonomous task orchestration' },
      { name: 'MCP (Model Context Protocol)', icon: 'SiAnthropic', color: '#D97757', context: 'Anthropic\'s open standard for agent ↔ server tool-use and context sharing' },
      { name: 'OpenAI o3 / o4-mini', icon: 'SiOpenai', color: '#412991', context: 'Chain-of-thought reasoning, function calling, and structured outputs' },
      { name: 'Claude 4 (Anthropic)', icon: 'SiAnthropic', color: '#D97757', context: 'Extended thinking, agentic coding, computer use, and 200k context' },
      { name: 'Gemini 2.5 Pro (Google)', icon: 'SiGooglegemini', color: '#8E75B2', context: 'Multimodal reasoning, grounding, and million-token context windows' },
    ]
  },
  {
    name: 'RAG & Knowledge Architecture',
    description: 'Enterprise retrieval, grounding & search systems',
    skills: [
      { name: 'Advanced RAG Pipelines', icon: 'SiElasticsearch', color: '#005571', context: 'Agentic RAG, corrective retrieval, self-reflection, and hybrid search' },
      { name: 'Vector Databases', icon: 'SiPinecone', color: '#000000', context: 'ChromaDB, Pinecone, Azure AI Search, Qdrant — enterprise-scale retrieval' },
      { name: 'GraphRAG & Knowledge Graphs', icon: 'SiNeo4J', color: '#4581C3', context: 'Structured reasoning over entity relationships and multi-hop retrieval' },
      { name: 'Embeddings & Reranking', icon: 'SiLangchain', color: '#1C3C3C', context: 'Cohere Rerank, BGE, ColBERT — semantic search with late interaction' },
    ]
  },
  {
    name: 'AI Safety & Evaluation',
    description: 'Guardrails, observability & production trust',
    skills: [
      { name: 'LangSmith / Langfuse', icon: 'SiLangchain', color: '#1C3C3C', context: 'Trace-level observability, eval datasets, and production monitoring' },
      { name: 'Guardrails & Grading', icon: 'TbShieldCheck', color: '#22C55E', context: 'Hallucination detection, relevance grading, and citation verification' },
      { name: 'Presidio (PII/PHI)', icon: 'SiMicrosoft', color: '#5E5E5E', context: 'Healthcare-grade PII and PHI anonymization for regulated industries' },
      { name: 'Red-teaming & Evals', icon: 'TbPrompt', color: '#F59E0B', context: 'Adversarial testing, LLM-as-judge pipelines, and RAGAS benchmarks' },
    ]
  },
  {
    name: 'AI-Native Development',
    description: 'Agentic coding & AI-powered engineering',
    skills: [
      { name: 'Claude Code / Codex CLI', icon: 'SiAnthropic', color: '#D97757', context: 'AI-native terminal agents for architecting and shipping production systems' },
      { name: 'Cursor / Windsurf', icon: 'SiVisualstudiocode', color: '#007ACC', context: 'AI-first IDEs with deep codebase understanding and multi-file edits' },
      { name: 'GitHub Copilot', icon: 'SiGithubcopilot', color: '#FFFFFF', context: 'Agent-mode code generation, refactoring, and review assistance' },
      { name: 'A2A (Agent-to-Agent)', icon: 'SiGooglechrome', color: '#4285F4', context: 'Google\'s open protocol for cross-agent communication and task delegation' },
    ]
  },
  {
    name: 'Cloud & Production Systems',
    description: 'Enterprise infrastructure built for AI workloads',
    skills: [
      { name: 'Python & FastAPI', icon: 'SiPython', color: '#3776AB', context: 'Async APIs with Pydantic v2, RBAC middleware, and model serving' },
      { name: 'Azure AI Platform', icon: 'TbBrandAzure', color: '#0078D4', context: 'Azure OpenAI, AI Search, Cosmos DB, AKS, and Functions' },
      { name: 'AWS Bedrock / SageMaker', icon: 'SiAmazonwebservices', color: '#FF9900', context: 'Multi-model inference, fine-tuning, and serverless ML endpoints' },
      { name: 'PySpark / Databricks', icon: 'SiApachespark', color: '#E25A1C', context: 'Distributed ETL pipelines and unified analytics at petabyte scale' },
      { name: 'Docker & Kubernetes', icon: 'SiDocker', color: '#2496ED', context: 'Containerized inference services with auto-scaling orchestration' },
    ]
  },
];

// Keep legacy export for backwards compatibility
export const skills: Skill[] = skillCategories.flatMap(cat => cat.skills);
