import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

export interface Note {
  slug: string;
  title: string;
  date: string;
  category: string;
  description: string;
  content: string;
  readTime: number;
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
