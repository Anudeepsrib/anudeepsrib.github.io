import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

export interface Post {
  slug: string;
  title: string;
  date: string;
  author: string;
  tags: string[];
  category: string;
  description: string;
  content: string;
  readTime: number;
}

export interface Note {
  slug: string;
  title: string;
  date: string;
  category: string;
  description: string;
  content: string;
  readTime: number;
}

export interface CaseStudy {
  slug: string;
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

const ROOT_DIR = process.cwd();
const SLUG_PATTERN = /^[a-z0-9-]+$/i;

function markdownFiles(directory: string): string[] {
  if (!fs.existsSync(directory)) {
    return [];
  }

  return fs
    .readdirSync(directory)
    .filter((fileName) => fileName.endsWith(".md"))
    .sort();
}

function readMarkdown(directoryName: string, slug: string) {
  if (!SLUG_PATTERN.test(slug)) {
    return null;
  }

  const fullPath = path.join(ROOT_DIR, directoryName, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  return matter(fileContents);
}

function asString(value: unknown, fallback = ""): string {
  return typeof value === "string" ? value : fallback;
}

function asStringArray(value: unknown): string[] {
  return Array.isArray(value)
    ? value.filter((item): item is string => typeof item === "string")
    : [];
}

function asBoolean(value: unknown): boolean {
  return value === true;
}

function asNumber(value: unknown): number | undefined {
  return typeof value === "number" ? value : undefined;
}

function readingMinutes(content: string): number {
  return Math.max(1, Math.ceil(readingTime(content).minutes));
}

function titleFromContent(content: string, slug: string): string {
  const titleMatch = content.match(/^#\s+(.+)$/m);
  return (
    titleMatch?.[1] ??
    slug.replace(/-/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase())
  );
}

export function getAllPosts(): Post[] {
  return markdownFiles(path.join(ROOT_DIR, "posts"))
    .map((fileName) => getPost(fileName.replace(/\.md$/, "")))
    .filter((post): post is Post => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPost(slug: string): Post | null {
  const parsed = readMarkdown("posts", slug);

  if (!parsed) {
    return null;
  }

  return {
    slug,
    title: asString(parsed.data.title),
    date: asString(parsed.data.date),
    author: asString(parsed.data.author, "Anudeep Sri Bathina"),
    tags: asStringArray(parsed.data.tags),
    category: asString(parsed.data.category),
    description: asString(parsed.data.description),
    content: parsed.content,
    readTime: readingMinutes(parsed.content),
  };
}

export function getAllNotes(): Note[] {
  return markdownFiles(path.join(ROOT_DIR, "notes"))
    .map((fileName) => getNote(fileName.replace(/\.md$/, "")))
    .filter((note): note is Note => note !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getNote(slug: string): Note | null {
  const parsed = readMarkdown("notes", slug);

  if (!parsed) {
    return null;
  }

  return {
    slug,
    title: asString(parsed.data.title, titleFromContent(parsed.content, slug)),
    date: asString(parsed.data.date),
    category: asString(parsed.data.category),
    description: asString(parsed.data.description),
    content: parsed.content,
    readTime: readingMinutes(parsed.content),
  };
}

export function getAllCaseStudies(): CaseStudy[] {
  return markdownFiles(path.join(ROOT_DIR, "systems"))
    .map((fileName) => getCaseStudy(fileName.replace(/\.md$/, "")))
    .filter((study): study is CaseStudy => study !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getCaseStudy(slug: string): CaseStudy | null {
  const parsed = readMarkdown("systems", slug);

  if (!parsed) {
    return null;
  }

  const slo = parsed.data.slo as Record<string, unknown> | undefined;

  return {
    slug,
    title: asString(parsed.data.title),
    date: asString(parsed.data.date),
    summary: asString(parsed.data.summary),
    status: asString(parsed.data.status),
    repo: asString(parsed.data.repo),
    domains: asStringArray(parsed.data.domains),
    constraints: asStringArray(parsed.data.constraints),
    stack: asStringArray(parsed.data.stack),
    featuredArchitecture: asBoolean(parsed.data.featuredArchitecture),
    architectureTags: asStringArray(parsed.data.architectureTags),
    slo: slo
      ? {
          latencyP95Ms: asNumber(slo.latencyP95Ms),
          availability: asString(slo.availability),
          costPer1kReq: asString(slo.costPer1kReq),
        }
      : undefined,
    content: parsed.content,
  };
}
