---
title: "Evaluating LLM systems beyond accuracy"
date: "2026-01-03"
readTime: "7 min read"
category: "Evaluation"
description: "Calibration, cost, controllability, and refusal correctness as production metrics."
---

## Context
Accuracy alone doesn’t tell you if a system is safe to deploy. In production, you need metrics that reflect real-world risk and cost.

## Metric 1: Calibration

### What it measures
Whether the model’s confidence matches its correctness. Well-calibrated models don’t overclaim when they’re unsure.

### Why it matters
- Users trust confidence scores more when they’re meaningful.
- Downstream systems can route low-confidence queries to human review.
- Helps set thresholds for automation.

### How to measure
- Bin predictions by confidence percentile.
- Compute accuracy per bin.
- Plot reliability diagram; compute Expected Calibration Error (ECE).

### Production signal
- Rising ECE after a prompt change means the model became overconfident.
- Sudden calibration drop may indicate data drift.

## Metric 2: Refusal correctness

### What it measures
Whether the model refuses appropriately (harmful/invalid queries) and answers when it should.

### Why it matters
- Over-refusing kills productivity; under-refusing creates compliance risk.
- Product teams tune refusal behavior; you must detect regressions.

### How to measure
- Curate two datasets: safe-to-answer and should-refuse.
- Measure false refusal rate and false answer rate.
- Track per-category refusal rates.

### Production signal
- Spike in false refusals after a policy update.
- Declining refusal accuracy may indicate prompt drift.

## Metric 3: Cost per correct answer

### What it measures
The total cost (tokens + infrastructure) to achieve one correct, useful answer.

### Why it matters
- Accuracy at any cost is not viable in enterprise.
- Encourages smart routing, caching, and right-sizing models.

### How to measure
- Sum tokens per query + overhead.
- Divide by number of “correct” answers (human-rated or automated).
- Track per-customer and per-query-type costs.

### Production signal
- Cost per correct answer trending up suggests inefficient routing.
- Sudden jumps may indicate a model change or prompt bloat.

## Metric 4: Controllability

### What it measures
Whether the model follows explicit constraints (format, length, tone, tool usage).

### Why it matters
- Downstream integrations break when output format changes.
- Business rules (e.g., “never mention competitors”) must be respected.

### How to measure
- Create constraint test sets with expected patterns.
- Use regex or schema validation to check compliance.
- Measure violation rate per constraint type.

### Production signal
- Increased violations after prompt edits.
- Correlate violations with specific user segments or query types.

## Trade-offs I accept

- **Calibration vs. latency:** Temperature tuning improves calibration but can increase response time.
- **Refusal correctness vs. risk:** Prefer slight over-refusing; add human review for edge cases.
- **Cost vs. quality:** Route 70% of queries to smaller models; escalate only when confidence low.
- **Controllability vs. flexibility:** Strict format validation reduces creativity but prevents downstream breaks.

## Takeaway

Production LLM systems need a dashboard, not a single accuracy score. Track calibration, refusal correctness, cost per correct answer, and controllability—and set automated gates for regressions.
