"use client";

import { useEffect, useRef } from "react";
import { testimonials } from "@/data/testimonials";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = containerRef.current?.querySelectorAll(".testimonial-card");
    if (!cards) return;

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
      { threshold: 0.2, rootMargin: "0px 0px -60px 0px" }
    );

    cards.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);

  return (
    <section className="section" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="wrap">
        <div className="section-head">
          <span className="section-tag">Testimonials</span>
          <h2 className="section-title">
            What our clients <em>say about us.</em>
          </h2>
        </div>
        <div className="grid-3" ref={containerRef}>
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className="plain-card testimonial-card reveal-scale"
              style={{ position: "relative", overflow: "hidden", transitionDelay: `${i * 0.1}s` }}
            >
              <Quote size={64} className="testimonial-quote-mark" />
              <div style={{ display: "flex", gap: "3px", marginBottom: "14px", position: "relative" }}>
                {Array.from({ length: 5 }).map((_, star) => (
                  <Star key={star} size={15} fill={star < t.rating ? "#17143C" : "none"} color="#17143C" />
                ))}
              </div>
              <p style={{ fontSize: "14px", color: "var(--text)", lineHeight: 1.65, marginBottom: "20px", position: "relative" }}>
                &ldquo;{t.review}&rdquo;
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", position: "relative" }}>
                <img
                  src={t.image}
                  alt={t.name}
                  style={{ width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover" }}
                />
                <div>
                  <p style={{ fontWeight: 700, fontSize: "13.5px", color: "var(--navy)" }}>{t.name}</p>
                  <p style={{ fontSize: "12.5px", color: "var(--muted)" }}>{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}