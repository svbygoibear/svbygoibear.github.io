import type { Plugin, ResolvedConfig } from "vite";
import { Feed } from "feed";
import matter from "gray-matter";
import fs from "fs";
import path from "path";

const SITE_URL = "https://svbygoibear.github.io";

export function rssPlugin(): Plugin {
    let config: ResolvedConfig;

    return {
        name: "vite-plugin-rss",
        configResolved(resolved) {
            config = resolved;
        },
        closeBundle() {
            const root = config.root;
            const outDir = path.resolve(root, config.build.outDir);
            const postsDir = path.resolve(root, "src/posts");

            if (!fs.existsSync(postsDir) || !fs.existsSync(outDir)) return;

            const files = fs.readdirSync(postsDir).filter(f => f.endsWith(".md"));

            const feed = new Feed({
                title: "svbygoibear — blog",
                description: "Thoughts on software, tools, and engineering",
                id: SITE_URL,
                link: SITE_URL,
                language: "en",
                feedLinks: { rss: `${SITE_URL}/rss.xml` },
                author: {
                    name: "Simone van Buuren",
                    link: SITE_URL,
                },
                copyright: `© ${new Date().getFullYear()} Simone van Buuren`,
            });

            files
                .map(file => {
                    const raw = fs.readFileSync(path.join(postsDir, file), "utf-8");
                    const { data, content } = matter(raw);
                    return { slug: file.replace(/\.md$/, ""), data, content };
                })
                .filter(({ data }) => data.draft !== true)
                .sort((a, b) => (a.data.date < b.data.date ? 1 : -1))
                .forEach(({ slug, data, content }) => {
                    feed.addItem({
                        title: data.title ?? slug,
                        id: `${SITE_URL}/blog/${slug}`,
                        link: `${SITE_URL}/blog/${slug}`,
                        description: data.description ?? "",
                        content,
                        date: new Date(data.date),
                    });
                });

            fs.writeFileSync(path.join(outDir, "rss.xml"), feed.rss2());
            console.log("✓ rss.xml generated");
        },
    };
}
