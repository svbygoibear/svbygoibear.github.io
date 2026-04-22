export type PostMeta = {
    slug: string;
    title: string;
    date: string;
    description: string;
    tags: string[];
    draft: boolean;
};

export type Post = PostMeta & {
    content: string;
};
