export const caseStudies = [
  {
    id: "cliniq",
    name: "ClinIQ",
    status: "Open-source prototype",
    eyebrow: "Applied AI / retrieval",
    problem:
      "Hospital staff need fast policy answers without crossing department boundaries or presenting unsupported guidance as fact.",
    role: "Designed and built the reference implementation across the product, API, retrieval graph, safety controls, and evaluation fixtures.",
    users:
      "Nurses, administrators, and compliance reviewers working with synthetic policy data.",
    constraints: [
      "Department-scoped access",
      "PHI-like value masking",
      "Source-backed answers",
      "Conservative failure states",
    ],
    decision:
      "Use department-scoped retrieval indexes instead of one shared knowledge pool.",
    tradeoff:
      "The boundary is easier to reason about and test, but it adds index-management and routing work.",
    outcome:
      "The public repository includes an authenticated workspace, FastAPI service, LangGraph retrieval flow, synthetic evaluation corpus, RBAC matrix, and PHI-masking tests.",
    link: "https://github.com/Anudeepsrib/ClinIQ",
  },
  {
    id: "shiftiq",
    name: "ShiftIQ",
    status: "Open-source agent platform",
    eyebrow: "AI agents / developer platform",
    problem:
      "Code migrations require coordinated analysis, planning, and validation without letting autonomous changes outrun human review.",
    role: "Architected and built a Fleet-powered agent platform for codebase analysis and migrations, with CLI, API, MCP surfaces, checkpoints, and sensitive-pattern scanning.",
    users: "Engineering teams assessing and applying code migrations.",
    constraints: [
      "No target-code execution",
      "Review before apply",
      "Redacted scan findings",
      "Recoverable changes",
    ],
    decision:
      "Use Fleet to coordinate bounded agents while keeping dry-run as the default and requiring an explicit apply step backed by a rollback checkpoint.",
    tradeoff:
      "Agent handoffs and human review add latency, but make each proposed change traceable, inspectable, and recoverable.",
    outcome:
      "The repository uses Fleet to coordinate the bounded workflow across CLI, FastAPI, MCP tools, and UI surfaces. Generated migrations still require human review.",
    link: "https://github.com/Anudeepsrib/shiftIQ",
  },
  {
    id: "groundfish",
    name: "Groundfish recognition",
    status: "Graduate research",
    eyebrow: "Computer vision / evaluation",
    problem:
      "Recognizing groundfish across image collections is difficult when underwater datasets are limited and visually inconsistent.",
    role: "Graduate researcher and thesis author; developed and evaluated a cross-database recognition pipeline.",
    users:
      "Fisheries and computer-vision researchers exploring automated species recognition.",
    constraints: [
      "Limited underwater data",
      "Cross-database variation",
      "Detection + classification",
      "Research-only evaluation",
    ],
    decision:
      "Separate localization with YOLOv8 from classification with ResNet-50.",
    tradeoff:
      "Two stages can be evaluated independently, but errors from detection can propagate into classification.",
    outcome:
      "The UMass Dartmouth research reports 94.10% mAP and 92.14% classification accuracy on its evaluated workload. These are thesis results, not production benchmarks.",
    link: "https://doi.org/10.62791/20352",
  },
] as const;

export const productionProof = [
  {
    value: "1,500+",
    label: "API developers served",
    detail: "AT&T’s first public-facing GenAI product",
  },
  {
    value: "80%",
    label: "Faster API integration",
    detail: "Reduced a 2.5-hour integration bottleneck",
  },
  {
    value: "99%",
    label: "Query resolution",
    detail: "Grounded answers with 99% platform uptime",
  },
  {
    value: "<2s",
    label: "Answer latency",
    detail: "Production RAG and live API execution",
  },
] as const;

export const additionalSystems = [
  {
    name: "EvidenceIQ",
    eyebrow: "Privacy-first multimodal AI",
    description:
      "Local sensitive-media intake, semantic search, PII-aware metadata controls, RBAC, and audit trails.",
    tools: ["FastAPI", "Ollama", "ChromaDB", "RBAC"],
    link: "https://github.com/Anudeepsrib/EvidenceIQ",
  },
  {
    name: "InferIQ",
    eyebrow: "Inference platform engineering",
    description:
      "GPU inference benchmarking, routing, and observability across vLLM, NVIDIA NIM, and NVIDIA NeMo.",
    tools: ["Python", "vLLM", "NVIDIA NIM", "CUDA"],
    link: "https://github.com/Anudeepsrib/InferIQ",
  },
  {
    name: "VaultIQ",
    eyebrow: "Private financial AI",
    description:
      "Financial-document extraction and analysis with local LLMs and a zero-data-egress architecture.",
    tools: ["Local LLMs", "Document AI", "FastAPI", "Privacy"],
    link: "https://github.com/Anudeepsrib/VaultIQ",
  },
  {
    name: "AuditIQ",
    eyebrow: "Domain model adaptation",
    description:
      "QLoRA and NVIDIA NeMo fine-tuning workflows for financial documents, tracked through MLflow.",
    tools: ["QLoRA", "NeMo", "MLflow", "Python"],
    link: "https://github.com/Anudeepsrib/AuditIQ",
  },
  {
    name: "Annapurna-AI",
    eyebrow: "Domain-specific agentic AI",
    description:
      "A multimodal, culture-aware meal-planning and grocery assistant with model routing and grounded recommendations.",
    tools: ["Next.js", "FastAPI", "Gemini", "LiteLLM"],
    link: "https://github.com/Anudeepsrib/Annapurna-AI",
  },
] as const;

export const testimonials = [
  {
    name: "Michael",
    role: "Freelance Developer",
    text: "Anudeep is incredibly insightful, listening carefully and offering technical yet straightforward comments that are truly beneficial.",
  },
  {
    name: "Shashank H.V.",
    role: "Student, UMass Dartmouth",
    text: "Extremely insightful and valuable discussion. Anudeep's depth of knowledge in Data and AI is evident, and his willingness to openly share his expertise is commendable.",
  },
  {
    name: "Baran Khazaee",
    role: "MSc CS, UC Davis",
    text: "His tailored advice on skills, job applications, and interviews was practical and insightful, leaving me confident and motivated.",
  },
  {
    name: "Nelisa Sebastian",
    role: "Data Analyst, Northeastern",
    text: "His strategic guidance and ability to simplify complex AI and career paths into clear, actionable steps were incredibly helpful.",
  },
  {
    name: "Mide Sowunmi",
    role: "UX/UI Designer, Comcast",
    text: "An exceptional session, making complex Agentic AI concepts easy to understand. His motivating approach inspired me to take bold steps.",
  },
] as const;

export const capabilityGroups = [
  {
    title: "AI agents & orchestration",
    description:
      "LangGraph- and Fleet-based agents with explicit state, tool boundaries, deep research, and human review.",
    tools: ["LangGraph", "LangSmith Fleet", "MCP", "H2O Super Agents"],
    evidence: "ShiftIQ + ClinIQ",
    href: "#case-shiftiq",
  },
  {
    title: "Evaluation, observability & safety",
    description:
      "Agent tracing, groundedness checks, responsible-AI guardrails, privacy boundaries, and explicit failure behavior.",
    tools: ["Arize", "LangSmith", "Responsible AI", "OWASP LLM"],
    evidence: "ClinIQ + field notes",
    href: "#approach",
  },
  {
    title: "AI platform architecture",
    description:
      "Production service boundaries, model routing, typed APIs, identity, containers, and scalable delivery patterns.",
    tools: ["Azure AI Foundry", "AKS", "FastAPI", "Entra ID"],
    evidence: "AT&T + ShiftIQ",
    href: "#experience",
  },
  {
    title: "Data & lakehouse architecture",
    description:
      "Governed lakehouses, distributed processing, data quality, and compliant data products that feed production AI.",
    tools: ["Databricks", "Snowflake", "Apache Iceberg", "PySpark"],
    evidence: "AT&T + Capgemini",
    href: "#experience",
  },
] as const;

export const evidenceItems = [
  {
    label: "Architecture",
    value: "Boundaries before breadth",
    detail:
      "Scope retrieval, identity, and data movement before adding more model capability.",
    source: "ClinIQ",
  },
  {
    label: "Evaluation",
    value: "Failure paths are product paths",
    detail:
      "Test unsupported questions, access rules, masking, and groundedness, not only happy-path answers.",
    source: "ClinIQ evaluation pack",
  },
  {
    label: "Delivery",
    value: "Make change inspectable",
    detail:
      "Use bounded Fleet agents, dry-runs, checkpoints, and human review when automation can alter code or policy.",
    source: "ShiftIQ",
  },
  {
    label: "Observability",
    value: "Operate what you ship",
    detail:
      "Track latency, cost, answer quality, and agent behavior as production signals, not afterthoughts.",
    source: "AT&T + InferIQ",
  },
] as const;
