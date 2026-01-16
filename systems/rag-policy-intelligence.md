---
title: "RAG Policy Intelligence with Audit-Grade Citations"
date: "2026-01-10"
summary: "Reduced time-to-answer for policy queries while enforcing citation traceability, tenant isolation, and latency budgets."
status: "production"
repo: "https://github.com/anudeepsrib/example-rag-policy"
domains: ["Enterprise Search", "Document Intelligence"]
constraints: ["PII", "Auditability", "p95<2500ms"]
stack: ["FastAPI", "Azure AI Search", "Cosmos DB", "OpenAI", "LangChain"]
featuredArchitecture: true
architectureTags: ["RAG", "Governance", "Observability"]
confidentiality: "redacted"
slo:
  latencyP95Ms: 2400
  availability: "99.9%"
  costPer1kReq: "$0.42"
---

## Problem context & constraints

A regulated enterprise needed to allow employees to ask natural language questions about internal policies and procedures while maintaining:

- **Auditability:** Every answer must be traceable to source documents with exact page/section citations.
- **Privacy:** PII/PHI must be redacted before indexing and at inference time.
- **Latency:** p95 under 2.5s for queries across 50k+ documents.
- **Tenant isolation:** Multiple business units must not see each other’s data or embeddings.
- **Compliance:** Immutable logs for 7 years; role-based access controls.

Existing keyword search was failing on nuanced queries and required manual lookup for 40% of requests.

## Architecture

```mermaid
flowchart TD
    A[User Query] --> B[Input Sanitization & PII Scan]
    B --> C[Tenant Router]
    C --> D[Semantic Search<br/>Azure AI Search]
    D --> E[Hybrid Rerank<br/>BM25 + Semantic]
    E --> F[Security Filter<br/>Access Control]
    F --> G[LLM Generation<br/>GPT-4o-mini]
    G --> H[Citation Injection<br/>Source Grounding]
    H --> I[Response + Citations]
    I --> J[Audit Log<br/>Immutable Storage]
    J --> K[User Interface]

    style A fill:#e3f2fd,stroke:#2196f3,color:#0d47a1
    style B fill:#fff3e0,stroke:#f59e0b,color:#e65100
    style C fill:#f3e5f5,stroke:#9c27b0,color:#4a148c
    style D fill:#e8f5e8,stroke:#4caf50,color:#1b5e20
    style E fill:#e0f2f1,stroke:#00acc1,color:#006064
    style F fill:#fce4ec,stroke:#e91e63,color:#880e4f
    style G fill:#ede7f6,stroke:#673ab7,color:#311b92
    style H fill:#e1f5fe,stroke:#03a9f4,color:#01579b
    style I fill:#f1f8e9,stroke:#4caf50,color:#1b5e20
    style J fill:#fff8e1,stroke:#ffc107,color:#ff6f00
    style K fill:#e8eaf6,stroke:#3f51b5,color:#1a237e
```

## Key design decisions & trade-offs

### Hybrid rerank (BM25 + semantic)
- **Decision:** Combine keyword BM25 with vector similarity before reranking.
- **Why:** Policy documents use exact terminology; pure semantic search missed regulatory clauses.
- **Trade-off:** Added ~80ms latency but reduced “no result” cases by 34%.

### Tenant-scoped embeddings
- **Decision:** Generate separate embedding spaces per tenant with isolated index partitions.
- **Why:** Prevent cross-tenant data leakage and allow per-tenant fine-tuning.
- **Trade-off:** Increased storage by ~2.3x and management complexity.

### Aggressive PII redaction at indexing
- **Decision:** Run PII detection and redaction before document chunking.
- **Why:** Safer than runtime-only redaction; reduces inference-time failures.
- **Trade-off:** Some legitimate terms (e.g., employee IDs in procedures) are masked, requiring manual allow-lists.

### LLM choice: GPT-4o-mini
- **Decision:** Use GPT-4o-mini instead of GPT-4o for generation.
- **Why:** Acceptable quality for policy Q&A at 1/10th the cost.
- **Trade-off:** Slightly lower reasoning depth on edge cases; mitigated by few-shot prompts.

## Failure modes & mitigations

| Failure mode | Detection | Mitigation |
|--------------|------------|-------------|
| Retrieval misses key clause | Low citation count OR low relevance score | Fallback to broader search + suggest manual review |
| PII redaction over-masks | User feedback “answer too generic” | Allow-list per tenant + audit redaction decisions |
| LLM hallucinates citation | Citation validation post-generation | Reject response if citation IDs not found in index |
| High latency during peak | p95 > 2.5s alert | Auto-scale search partitions; cache frequent queries |
| Tenant bleed | Cross-tenant access in logs | Monthly audit + automated isolation tests |

## Technologies used and why

- **FastAPI:** Async-first, type-safe, OpenAPI docs for internal governance tools.
- **Azure AI Search:** Managed vector search with built-in security and scaling.
- **Cosmos DB:** Multi-model + tunable consistency; stores audit logs at scale.
- **OpenAI GPT-4o-mini:** Cost-effective with sufficient quality for policy Q&A.
- **LangChain:** Standardized prompts/citation injection; reduced custom glue code.
