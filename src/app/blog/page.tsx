import type { Metadata } from "next";
import Link from "next/link";
import { blogs } from "@/data/blogs";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights on software development, architecture, and building products from Stalemax Technologies.",
};

export default function BlogPage() {
  return (
    <div className="wrap">
      <section className="page-hero">
        <h1>Notes from the team.</h1>
        <p>Thoughts on software, architecture, and building products that last.</p>
      </section>

      <section className="section" style={{ paddingTop: "20px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          {blogs.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
              <div className="blog-list-card">
                <img className="blog-list-img" src={post.image} alt={post.title} />
                <div className="blog-list-body">
                  <p style={{ fontSize: "12.5px", color: "var(--muted)", marginBottom: "12px", fontWeight: 600 }}>
                    {new Date(post.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
                    {" · "}
                    {post.author} · {post.readTime}
                  </p>
                  <h3 style={{ fontSize: "24px", fontWeight: 700, color: "var(--navy)", marginBottom: "12px", lineHeight: 1.25 }}>
                    {post.title}
                  </h3>
                  <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: 1.65 }}>{post.excerpt}</p>
                  <span style={{ display: "inline-block", marginTop: "18px", fontSize: "13px", fontWeight: 700, color: "var(--navy)" }}>
                    Read article →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}