"use client";

import { useEffect, useRef } from "react";
import { processSteps } from "@/data/process";

export default function HowWeWork() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const targets = containerRef.current?.querySelectorAll(".roadmap-dot, .roadmap-line, .roadmap-content, .roadmap-tag");
    if (!targets) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          } else {
            entry.target.classList.remove("in-view");
          }
        });
      },
      { threshold: 0.35, rootMargin: "0px 0px -80px 0px" }
    );

    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  return (
    <section className="section" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="wrap">
        <div className="section-head">
          <span className="section-tag">How We Work</span>
          <h2 className="section-title">
            A process built for <em>predictable results.</em>
          </h2>
        </div>
        <div className="roadmap" ref={containerRef}>
          {processSteps.map((step, i) => (
            <div className="roadmap-item" key={step.id}>
              <div className="roadmap-marker">
                <div className="roadmap-dot"></div>
                {i < processSteps.length - 1 && <div className="roadmap-line"></div>}
              </div>
              <div className="roadmap-content">
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
              <div className="roadmap-tag">
                <span className="roadmap-tag-index">{String(i + 1).padStart(2, "0")}</span>
                <p>{step.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}