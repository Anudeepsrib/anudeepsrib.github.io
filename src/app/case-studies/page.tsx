import { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import ScrollReveal from '@/components/ui/ScrollReveal';
import StaggerContainer from '@/components/ui/StaggerContainer';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'System Design Case Studies | Anudeep Sri Bathina',
  description: 'Detailed system design case studies including RAG architectures, LLM evaluation harnesses, and production AI systems with trade-off analysis.',
};

interface CaseStudy {
  title: string;
  date: string;
  summary: string;
  status: string;
  repo: string;
  domains: string[];
  constraints: string[];
  stack: string[];
  featuredArchitecture: boolean;
  architectureTags: string[];
  slo?: {
    latencyP95Ms?: number;
    availability?: string;
    costPer1kReq?: string;
  };
  content: string;
}

async function getCaseStudies(): Promise<CaseStudy[]> {
  const systemsDir = path.join(process.cwd(), 'systems');
  const fileNames = fs.readdirSync(systemsDir);
  
  const caseStudies = await Promise.all(
    fileNames
      .filter(name => name.endsWith('.md'))
      .map(async (fileName) => {
        const fullPath = path.join(systemsDir, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        
        const frontmatterMatch = fileContents.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
        if (!frontmatterMatch) return null;
        
        const frontmatter = frontmatterMatch[1];
        const content = frontmatterMatch[2];
        
        const parseFrontmatter = (text: string): Partial<CaseStudy> => {
          const data: any = {};
          const lines = text.split('\n');
          
          lines.forEach(line => {
            const match = line.match(/^(\w+):\s*(.+)$/);
            if (match) {
              const [, key, value] = match;
              
              if (key === 'domains' || key === 'constraints' || key === 'stack' || key === 'architectureTags') {
                data[key] = value.replace(/\[|\]/g, '').split(', ').map(v => v.replace(/"/g, ''));
              } else if (key === 'featuredArchitecture') {
                data[key] = value === 'true';
              } else if (key === 'slo') {
                const sloMatch = value.match(/\{([^}]+)\}/);
                if (sloMatch) {
                  data.slo = {};
                  sloMatch[1].split(',').forEach(pair => {
                    const [k, v] = pair.trim().split(':');
                    data.slo[k.trim()] = v.replace(/"/g, '').trim();
                  });
                }
              } else {
                data[key] = value.replace(/"/g, '');
              }
            }
          });
          
          return data;
        };
        
        const parsed = parseFrontmatter(frontmatter);
        
        return {
          title: parsed.title || '',
          date: parsed.date || '',
          summary: parsed.summary || '',
          status: parsed.status || '',
          repo: parsed.repo || '',
          domains: parsed.domains || [],
          constraints: parsed.constraints || [],
          stack: parsed.stack || [],
          featuredArchitecture: parsed.featuredArchitecture || false,
          architectureTags: parsed.architectureTags || [],
          slo: parsed.slo,
          content,
        } as CaseStudy;
      })
  );
  
  return caseStudies.filter((study): study is CaseStudy => study !== null);
}

function extractTradeoffs(content: string): string | null {
  const tradeoffsMatch = content.match(/## Key design decisions & trade-offs\n([\s\S]*?)(?=\n##|$)/);
  return tradeoffsMatch ? tradeoffsMatch[1] : null;
}

function extractFailureModes(content: string): string | null {
  const failureMatch = content.match(/## Failure modes & mitigations\n([\s\S]*?)(?=\n##|$)/);
  return failureMatch ? failureMatch[1] : null;
}

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies();

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <Navbar />
      <div className="container mx-auto px-6 py-20">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-cabinet-grotesk mb-6 bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] bg-clip-text text-transparent">
              System Design Case Studies
            </h1>
            <p className="text-lg text-[var(--text-2)] max-w-3xl mx-auto">
              Production AI architectures with detailed trade-off analysis, failure modes, and SLO targets.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="space-y-12">
          {caseStudies.map((study, index) => {
            const tradeoffs = extractTradeoffs(study.content);
            const failureModes = extractFailureModes(study.content);
            
            return (
              <ScrollReveal key={study.title} delay={index * 0.1}>
                <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl p-8 backdrop-blur-sm">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h2 className="text-2xl font-bold font-cabinet-grotesk mb-2">{study.title}</h2>
                      <p className="text-[var(--text-2)] mb-4">{study.summary}</p>
                      
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-mono ${
                          study.status === 'production' 
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                            : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                        }`}>
                          {study.status.toUpperCase()}
                        </span>
                        
                        {study.slo && (
                          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-1)]/10 border border-[var(--accent-1)]/30">
                            <span className="text-xs font-mono text-[var(--accent-1)]">
                              p95 &lt; {study.slo.latencyP95Ms}ms
                              {study.slo.availability && ` • ${study.slo.availability} uptime`}
                              {study.slo.costPer1kReq && ` • ${study.slo.costPer1kReq}/1K`}
                            </span>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {study.constraints.map((constraint) => (
                          <span
                            key={constraint}
                            className="px-2 py-1 rounded bg-[var(--accent-2)]/10 border border-[var(--accent-2)]/20 text-xs font-mono text-[var(--accent-2)]"
                          >
                            {constraint}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {study.stack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 rounded bg-[var(--bg)] border border-[var(--border)] text-xs text-[var(--text-2)]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {study.repo && (
                      <a
                        href={study.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 lg:mt-0 px-4 py-2 bg-[var(--accent-1)] text-white rounded-lg hover:bg-[var(--accent-1)]/90 transition-colors text-sm font-medium"
                      >
                        View Code
                      </a>
                    )}
                  </div>

                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4 font-cabinet-grotesk">Architecture</h3>
                    <div className="bg-[var(--bg)] rounded-xl p-6 border border-[var(--border)] overflow-x-auto">
                      <div className="flex items-center justify-center py-12 text-[var(--text-3)]">
                        <div className="text-center">
                          <div className="mb-4">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="mx-auto">
                              <path d="M12 2L2 7L12 12L22 7V17L12 22L2 17V7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <p className="text-sm font-mono">Architecture diagram coming soon</p>
                          <p className="text-xs mt-2">Detailed system design will be available</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {tradeoffs && (
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold mb-4 font-cabinet-grotesk">Design Decisions & Trade-offs</h3>
                      <div className="prose prose-invert max-w-none">
                        <div dangerouslySetInnerHTML={{ __html: tradeoffs.replace(/\n/g, '<br>') }} />
                      </div>
                    </div>
                  )}

                  {failureModes && (
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold mb-4 font-cabinet-grotesk">Failure Modes & Mitigations</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-[var(--border)]">
                              <th className="text-left py-2 px-3 text-[var(--text-2)]">Failure Mode</th>
                              <th className="text-left py-2 px-3 text-[var(--text-2)]">Detection</th>
                              <th className="text-left py-2 px-3 text-[var(--text-2)]">Mitigation</th>
                            </tr>
                          </thead>
                          <tbody>
                            {failureModes.includes('|') && failureModes.split('\n').slice(2).map((row, i) => {
                              if (!row.includes('|')) return null;
                              const cols = row.split('|').map(col => col.trim()).filter(Boolean);
                              if (cols.length < 3) return null;
                              
                              return (
                                <tr key={i} className="border-b border-[var(--border)]/50">
                                  <td className="py-2 px-3 text-[var(--text)]">{cols[0]}</td>
                                  <td className="py-2 px-3 text-[var(--text)]">{cols[1]}</td>
                                  <td className="py-2 px-3 text-[var(--text)]">{cols[2]}</td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  <div className="pt-4 border-t border-[var(--border)]">
                    <div className="flex flex-wrap gap-2">
                      {study.domains.map((domain) => (
                        <span
                          key={domain}
                          className="text-xs text-[var(--text-3)] font-mono"
                        >
                          #{domain.toLowerCase().replace(/\s+/g, '-')}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </StaggerContainer>
      </div>
    </div>
  );
}
