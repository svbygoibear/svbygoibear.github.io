import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getPostBySlug } from "../utils/posts";

export const BlogPost: React.FunctionComponent = () => {
    const { slug } = useParams<{ slug: string }>();
    const post = slug ? getPostBySlug(slug) : undefined;

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    return (
        <div className="max-w-3xl mx-auto px-4 py-10">
            <Link
                to="/blog"
                className="text-xs font-mono text-gray-400 hover:text-pink-600 transition-colors mb-8 block">
                ← back to blog
            </Link>

            <header className="mb-10">
                <h1 className="text-3xl font-bold text-gray-800 font-mono mb-3">{post.title}</h1>
                <div className="flex flex-wrap items-center gap-4 text-sm">
                    <span className="font-mono text-gray-400">{post.date}</span>
                    {post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {post.tags.map(tag => (
                                <span
                                    key={tag}
                                    className="text-xs font-mono bg-gray-100 text-gray-500 px-2 py-0.5 rounded">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </header>

            <article className="prose prose-gray max-w-none
                prose-headings:font-mono prose-headings:font-bold
                prose-a:text-pink-600 prose-a:no-underline hover:prose-a:underline
                prose-code:font-mono prose-code:text-sm prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
                prose-pre:bg-gray-900 prose-pre:text-gray-100
                prose-blockquote:border-pink-400 prose-blockquote:text-gray-500">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
            </article>
        </div>
    );
};
