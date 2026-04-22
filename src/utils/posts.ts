import matter from "gray-matter";
import { Post, PostMeta } from "../types/Post";

const rawFiles = import.meta.glob("../posts/*.md", { query: "?raw", import: "default", eager: true });

function slugFromPath(path: string): string {
    return path.replace(/^.*[\\/]/, "").replace(/\.md$/, "");
}

function parsePost(slug: string, raw: string): Post {
    const { data, content } = matter(raw);
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
