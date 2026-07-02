import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogs } from "@/data/blogs";

export async function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogs.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogs.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <div className="wrap">
      <div style={{ maxWidth: "740px", margin: "0 auto" }}>
        <section className="page-hero" style={{ textAlign: "center" }}>
          <h1>{post.title}</h1>
          <p style={{ margin: "0 auto" }}>
            {new Date(post.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })} ·{" "}
            {post.author} · {post.readTime}
          </p>
        </section>

        <section className="section" style={{ paddingTop: "20px" }}>
          <img
            src={post.image}
            alt={post.title}
            style={{ width: "100%", height: "420px", objectFit: "cover", marginBottom: "40px" }}
          />
          <div style={{ fontSize: "17px", lineHeight: 1.85, color: "var(--text)" }}>
            {post.content.map((paragraph, i) => (
              <div key={i}>
                <p style={{ marginBottom: "26px" }}>{paragraph}</p>
                {post.images[Math.floor(i / 2)] && i % 2 === 1 && (
                  <img
                    src={post.images[Math.floor(i / 2)]}
                    alt={post.title}
                    style={{ width: "100%", height: "320px", objectFit: "cover", margin: "8px 0 34px" }}
                  />
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}