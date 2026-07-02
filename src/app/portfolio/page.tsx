import type { Metadata } from "next";
import { portfolio } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore projects delivered by Stalemax Technologies.",
};

export default function PortfolioPage() {
  return (
    <div className="wrap">
      <section className="page-hero">
        <h1>Work we&apos;re proud of.</h1>
        <p>A selection of projects we&apos;ve designed, built, and shipped for our clients.</p>
      </section>

      <section className="section" style={{ paddingTop: "20px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "64px" }}>
          {portfolio.map((item) => (
            <article key={item.id} className="case-study">
              <img className="case-study-img" src={item.image} alt={item.title} />
              <div className="case-study-body">
                <p style={{ fontSize: "12.5px", fontWeight: 800, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "10px" }}>
                  {item.category} · {item.duration}
                </p>
                <h3 style={{ fontSize: "24px", fontWeight: 700, color: "var(--navy)", marginBottom: "18px" }}>
                  {item.title}
                </h3>

                <div className="case-study-section">
                  <h5>The Problem</h5>
                  <p>{item.problem}</p>
                </div>
                <div className="case-study-section">
                  <h5>What We Built</h5>
                  <p>{item.solution}</p>
                </div>
                <div className="case-study-section">
                  <h5>The Result</h5>
                  <p>{item.result}</p>
                </div>

                <p style={{ fontSize: "12.5px", color: "var(--muted)", marginTop: "22px" }}>
                  {item.technologies.join(" · ")}
                </p>

                {item.clientFeedback && (
                  <p className="case-study-quote">
                    &ldquo;{item.clientFeedback}&rdquo;
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}