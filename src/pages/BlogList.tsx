import React from "react";
import { Link } from "react-router-dom";
import { getAllPosts } from "../utils/posts";

export const BlogList: React.FunctionComponent = () => {
    const posts = getAllPosts();

    return (
        <div className="max-w-3xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold text-gray-800 mb-2 font-mono">blog</h1>
            <p className="text-gray-500 mb-10 font-mono text-sm">thoughts on software, tools, and engineering</p>

            {posts.length === 0 ? (
                <p className="text-gray-400 font-mono">no posts yet — check back soon.</p>
            ) : (
                <ul className="space-y-8">
                    {posts.map(post => (
                        <li key={post.slug} className="border-b border-gray-200 pb-8">
                            <Link
                                to={`/blog/${post.slug}`}
                                className="group block">
                                <span className="text-xs font-mono text-gray-400 block mb-1">{post.date}</span>
                                <h2 className="text-xl font-semibold text-gray-800 group-hover:text-pink-600 transition-colors font-mono mb-2">
                                    {post.title}
                                </h2>
                                <p className="text-gray-500 text-sm leading-relaxed">{post.description}</p>
                                {post.tags.length > 0 && (
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {post.tags.map(tag => (
                                            <span
                                                key={tag}
                                                className="text-xs font-mono bg-gray-100 text-gray-500 px-2 py-0.5 rounded">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}

            <div className="mt-12 text-xs font-mono text-gray-400">
                <a
                    href="/rss.xml"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pink-600 transition-colors">
                    rss feed ↗
                </a>
            </div>
        </div>
    );
};
