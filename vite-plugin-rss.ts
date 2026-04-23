import type { Plugin, ResolvedConfig, ViteDevServer } from "vite";
import { Feed } from "feed";
import matter from "gray-matter";
import fs from "fs";
import path from "path";

const SITE_URL = "https://svbygoibear.github.io";

function stripMarkdown(text: string): string {
    return text
        .replace(/```[\s\S]*?```/g, "")          // fenced code blocks
        .replace(/`[^`\n]+`/g, "")               // inline code
        .replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1") // images → alt text
        .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1") // links → link text
        .replace(/^#{1,6}\s+/gm, "")             // headings
        .replace(/\*\*\*([^*]+)\*\*\*/g, "$1")   // bold+italic
        .replace(/___([^_]+)___/g, "$1")
        .replace(/\*\*([^*]+)\*\*/g, "$1")       // bold
        .replace(/__([^_]+)__/g, "$1")
        .replace(/\*([^*\n]+)\*/g, "$1")         // italic
        .replace(/_([^_\n]+)_/g, "$1")
        .replace(/^>\s+/gm, "")                  // blockquotes
        .replace(/^[-*_]{3,}\s*$/gm, "")         // horizontal rules
        .replace(/^[\s]*[-*+]\s+/gm, "")         // unordered lists
        .replace(/^[\s]*\d+\.\s+/gm, "")         // ordered lists
        .replace(/<[^>]+>/g, "")                  // HTML tags
        .replace(/\n{3,}/g, "\n\n")
        .trim();
}

function buildFeed(root: string): string {
    const postsDir = path.resolve(root, "src/posts");
    if (!fs.existsSync(postsDir)) return "";

    const feed = new Feed({
        title: "svbygoibear — blog",
        description: "Thoughts on software, tools, and engineering",
        id: SITE_URL,
        link: SITE_URL,
        language: "en",
        feedLinks: { rss: `${SITE_URL}/rss.xml` },
        author: { name: "Simone van Buuren", link: SITE_URL },
        copyright: `© ${new Date().getFullYear()} Simone van Buuren`,
    });

    fs.readdirSync(postsDir)
        .filter(f => f.endsWith(".md"))
        .map(file => {
            const raw = fs.readFileSync(path.join(postsDir, file), "utf-8");
            const { data, content } = matter(raw);
            return { slug: file.replace(/\.md$/, ""), data, content };
        })
        .filter(({ data }) => data.draft !== true)
        .sort((a, b) => (a.data.date < b.data.date ? 1 : -1))
        .forEach(({ slug, data, content }) => {
            feed.addItem({
                title: stripMarkdown(data.title ?? slug),
                id: `${SITE_URL}/blog/${slug}`,
                link: `${SITE_URL}/blog/${slug}`,
                description: stripMarkdown(data.description ?? ""),
                content: stripMarkdown(content),
                date: new Date(data.date),
            });
        });

    return feed.rss2();
}

export function rssPlugin(): Plugin {
    let config: ResolvedConfig;

    return {
        name: "vite-plugin-rss",
        configResolved(resolved) {
            config = resolved;
        },
        configureServer(server: ViteDevServer) {
            server.middlewares.use("/rss.xml", (_req, res) => {
                try {
                    const xml = buildFeed(config.root);
                    res.setHeader("Content-Type", "application/rss+xml; charset=utf-8");
                    res.end(xml);
                } catch (e) {
                    res.statusCode = 500;
                    res.end(String(e));
                }
            });
        },
        closeBundle() {
            const outDir = path.resolve(config.root, config.build.outDir);
            if (!fs.existsSync(outDir)) return;
            try {
                const xml = buildFeed(config.root);
                fs.writeFileSync(path.join(outDir, "rss.xml"), xml);
                console.log("✓ rss.xml generated");
            } catch (e) {
                console.error("✗ rss.xml generation failed:", e);
            }
        },
    };
}
