import Link from "next/link";
import { CATEGORIES, type Post } from "@/data/blog";

export function PostCard({ post }: { post: Post }) {
  const category = CATEGORIES.find((c) => c.slug === post.category);
  return (
    <article className="flex flex-col rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-elegant">
      {category && (
        <Link
          href={`/blog/category/${category.slug}`}
          className="text-xs font-semibold uppercase tracking-[0.16em] text-primary"
        >
          {category.name}
        </Link>
      )}
      <h3 className="mt-2 text-lg font-bold leading-snug">
        <Link href={`/blog/${post.slug}`} className="hover:text-primary">
          {post.title}
        </Link>
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {post.description}
      </p>
      <p className="mt-4 text-xs text-muted-foreground">
        {post.author} ·{" "}
        {new Date(post.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}{" "}
        · {post.readingTime} min read
      </p>
    </article>
  );
}
