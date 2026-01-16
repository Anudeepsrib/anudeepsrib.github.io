---
title: "LLM Evaluation Harness for Production Gatekeeping"
date: "2025-12-28"
summary: "Automated regression and adversarial evaluation suite that blocks unsafe or regressed model deployments."
status: "production"
repo: "https://github.com/anudeepsrib/llm-eval-harness"
domains: ["LLM Evaluation", "Quality Assurance"]
constraints: ["Deterministic", "Reproducible", "CI/CD"]
stack: ["Python", "Pydantic", "OpenAI", "Pandas", "Plotly"]
featuredArchitecture: true
architectureTags: ["Evaluation", "Observability", "Automation"]
slo:
  latencyP95Ms: 1200
  availability: "99.95%"
---

## Problem context & constraints

We needed to prevent regressions and unsafe outputs when updating prompts or swapping models in a customer-facing assistant. Requirements:

- **Deterministic:** Same inputs must produce identical evaluation scores across runs.
- **Reproducible:** Audit trails for every evaluation decision.
- **CI/CD integration:** Block PR merges if evals regress.
- **Multi-dimensional:** Not just accuracy—measure refusal correctness, calibration, and toxicity.
- **Speed:** Full eval run in under 20 minutes for 2k examples.

## Architecture

```mermaid
flowchart LR
    A[Eval Sets] --> B[Dataset Loader<br/>Versioned]
    B --> C[Model Config<br/>Git Version]
    C --> D[Evaluation Engine<br/>Parallel Workers]
    D --> E[Metrics Store<br/>TimescaleDB]
    D --> F[Artifact Store<br/>S3]
    E --> G[Regression Detector]
    G --> H[Gatekeeper API]
    H --> I[Pass/Fail<br/>Slack + PR Comment]
    F --> J[Traceability UI<br/>Drill-down]

    style A fill:#e3f2fd,stroke:#2196f3,color:#0d47a1
    style B fill:#fff3e0,stroke:#f59e0b,color:#e65100
    style C fill:#f3e5f5,stroke:#9c27b0,color:#4a148c
    style D fill:#e8f5e8,stroke:#4caf50,color:#1b5e20
    style E fill:#e0f2f1,stroke:#00acc1,color:#006064
    style F fill:#fce4ec,stroke:#e91e63,color:#880e4f
    style G fill:#ede7f6,stroke:#673ab7,color:#311b92
    style H fill:#e1f5fe,stroke:#03a9f4,color:#01579b
    style I fill:#f1f8e9,stroke:#4caf50,color:#1b5e20
    style J fill:#e8eaf6,stroke:#3f51b5,color:#1a237e
```

## Key design decisions & trade-offs

### Parallel eval workers
- **Decision:** Run evaluation shards in parallel (8 workers).
- **Why:** Reduced total eval time from 48m to 16m.
- **Trade-off:** Increased memory usage; mitigated by streaming results.

### Versioned datasets and configs
- **Decision:** Store eval sets and model configs in Git; tag releases.
- **Why:** Reproducibility and auditability.
- **Trade-off:** Larger repo size; acceptable for governance.

### Multi-metric gate
- **Decision:** Require pass on 3 of 4 metrics (accuracy, refusal correctness, calibration, toxicity).
- **Why:** Prevents optimization for a single metric.
- **Trade-off:** Slightly higher false-positive rate; tuned per product.

### Time-series metrics store
- **Decision:** Use TimescaleDB for metric history.
- **Why:** Enables drift detection and regression queries.
- **Trade-off:** More operational complexity vs flat files.

## Failure modes & mitigations

| Failure mode | Detection | Mitigation |
|--------------|------------|-------------|
| Eval worker crash | No results from shard | Auto-retry with exponential backoff; alert if >2 failures |
| Model flakiness | High score variance | Require 3 runs; use median |
| Dataset drift | Sudden metric drop | Auto-trigger dataset review |
| False positive gate | PR blocked incorrectly | Manual override with audit log |
| Metric leakage | Test data in training | Monthly data sanitization audit |

## Technologies used and why

- **Python:** Ecosystem support for ML/data tooling.
- **Pydantic:** Strict config validation for model/dataset metadata.
- **OpenAI SDK:** Consistent client for inference.
- **Pandas:** Tabular eval results and aggregations.
- **Plotly:** Interactive dashboards for metric trends.
- **TimescaleDB:** Efficient time-series for metric history.
- **S3:** Immutable artifacts with versioning.
