import { load as parseYaml } from "js-yaml";
import { Post, PostMeta } from "../types/Post";

const rawFiles = import.meta.glob("../posts/*.md", { query: "?raw", import: "default", eager: true });

function slugFromPath(path: string): string {
    return path.replace(/^.*[\\/]/, "").replace(/\.md$/, "");
}

type Frontmatter = {
    title?: string;
    date?: string;
    description?: string;
    tags?: string[];
    draft?: boolean;
};

function splitFrontmatter(raw: string): { data: Frontmatter; content: string } {
    const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
    if (!match) return { data: {}, content: raw };
    try {
        const data = (parseYaml(match[1]) as Frontmatter) ?? {};
        return { data, content: match[2] };
    } catch {
        return { data: {}, content: raw };
    }
}

function parsePost(slug: string, raw: string): Post {
    const { data, content } = splitFrontmatter(raw);
    return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? "",
        description: data.description ?? "",
        tags: data.tags ?? [],
        draft: data.draft === true,
        content,
    };
}

export function getAllPosts(): PostMeta[] {
    return Object.entries(rawFiles)
        .map(([path, raw]) => parsePost(slugFromPath(path), raw as string))
        .filter(post => !post.draft)
        .sort((a, b) => (a.date < b.date ? 1 : -1))
        .map(({ content: _content, ...meta }) => meta);
}

export function getPostBySlug(slug: string): Post | undefined {
    const entry = Object.entries(rawFiles).find(
        ([path]) => slugFromPath(path) === slug
    );
    if (!entry) return undefined;
    const post = parsePost(slug, entry[1] as string);
    return post.draft ? undefined : post;
}
