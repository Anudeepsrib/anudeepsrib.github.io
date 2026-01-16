---
title: "RAG failure patterns I see repeatedly"
date: "2026-01-08"
readTime: "6 min read"
category: "RAG"
description: "Common failure modes in retrieval-augmented generation and how to mitigate them in production."
---

## Context
RAG systems fail in predictable ways. Most teams focus on retrieval accuracy and ignore failure modes that only surface at scale or under adversarial queries.

## Failure pattern 1: Citation drift

### Symptom
The LLM cites a document that exists, but the cited page/section does not actually support the answer.

### Why it happens
- Retrieval returns a relevant document, but the LLM grounds on the wrong section.
- Long documents increase chance of spurious grounding.
- No validation that citation IDs appear in the final answer.

### Mitigation
- **Post-generation citation validation:** Extract cited IDs and verify they appear in the answer.
- **Chunking with boundaries:** Preserve section headers; avoid splitting logical blocks.
- **Grounding prompts:** Force the model to quote before citing.

## Failure pattern 2: Permission-aware retrieval gaps

### Symptom
Users with restricted access get empty results or “I don’t know,” even when relevant documents exist in other tenants.

### Why it happens
- Embedding index is global; tenant filters applied after retrieval.
- Reranker downweights restricted content.
- No fallback to explain permission boundaries.

### Mitigation
- **Tenant-scoped embeddings:** Isolate vectors per tenant.
- **Access-aware rerank:** Boost allowed content before hybrid scoring.
- **Graceful fallback:** Respond with “You don’t have access to X; request access” instead of silence.

## Failure pattern 3: Temporal staleness blindness

### Symptom
Answers reference outdated policies or versions, confusing users.

### Why it happens
- No version metadata in chunks.
- Retrieval scores ignore recency.
- LLM defaults to most recent context without knowing recency.

### Mitigation
- **Time-decayed scores:** Penalize older chunks in reranking.
- **Version tags in metadata:** Filter by effective date.
- **Explicit recency prompt:** Tell the model the current date and document horizon.

## Failure pattern 4: Multi-hop collapse

### Symptom
Questions requiring reasoning across two documents return answers from only one.

### Why it happens
- Single-hop retrieval: only fetch top-k for one query.
- No query decomposition.
- LLM hallucinates cross-document links.

### Mitigation
- **Query decomposition:** Break multi-hop into sub-queries.
- **Iterative retrieval:** Retrieve, then ask “what else do you need?”
- **Graph-based grounding:** Build small document graphs for complex queries.

## Trade-offs I accept

- **Latency vs. validation:** Post-generation citation checks add 100–200ms but are non-negotiable for auditability.
- **Storage vs. tenant isolation:** Multi-tenant embeddings increase storage ~2x but prevent data leaks.
- **Complexity vs. multi-hop:** Iterative retrieval adds roundtrips but increases answer completeness.

## Takeaway

RAG reliability is a systems problem. You need validation, tenant-awareness, recency, and multi-hop strategies—not just better vectors.
