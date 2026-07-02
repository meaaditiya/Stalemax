"use client";

import { useEffect, useRef, useState } from "react";
import { achievements } from "@/data/achievements";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (frameRef.current) cancelAnimationFrame(frameRef.current);
            setCount(0);
            const duration = 1400;
            const start = performance.now();
            const tick = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              setCount(Math.floor(progress * value));
              if (progress < 1) {
                frameRef.current = requestAnimationFrame(tick);
              } else {
                setCount(value);
              }
            };
            frameRef.current = requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );

    io.observe(el);
    return () => {
      io.disconnect();
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Achievements() {
  return (
    <section className="section" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="wrap">
        <div className="section-head">
          <span className="section-tag">Achievements</span>
          <h2 className="section-title">
            Numbers that <em>speak for us.</em>
          </h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "24px",
          }}
        >
          {achievements.map((a) => (
            <div key={a.id} className="plain-card" style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "Playfair Display, serif", fontSize: "38px", fontWeight: 700, color: "var(--navy)" }}>
                <Counter value={a.value} suffix={a.suffix} />
              </div>
              <p style={{ fontSize: "13px", color: "var(--muted)", marginTop: "8px", fontWeight: 600 }}>{a.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
