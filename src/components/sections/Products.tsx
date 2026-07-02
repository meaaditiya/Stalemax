"use client";

import { useEffect, useRef } from "react";
import { products } from "@/data/products";

const revealClasses = ["reveal-left", "reveal-right"];

export default function Products() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = containerRef.current?.querySelectorAll(".product-card");
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
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    cards.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);

  return (
    <section className="section" id="products">
      <div className="wrap">
        <div className="section-head">
          <span className="section-tag">Featured Products</span>
          <h2 className="section-title">
            Demo products, <em>built by us.</em>
          </h2>
          <p className="section-sub">
            Real, working platforms that showcase how we build — explore the features and capabilities.
          </p>
        </div>

        <div className="grid-2" ref={containerRef}>
          {products.map((product, i) => (
            <div key={product.id} className={`product-card ${revealClasses[i % 2]}`}>
              <img className="product-card-img" src={product.image} alt={product.title} />
              <div className="product-card-body">
                <h3 style={{ fontSize: "19px", fontWeight: 700, color: "var(--navy)", marginBottom: "10px" }}>
                  {product.title}
                </h3>
                <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: 1.6, marginBottom: "18px" }}>
                  {product.description}
                </p>

                <ul className="feature-grid">
                  {product.features.slice(0, 8).map((feature) => (
                    <li key={feature} style={{ fontSize: "13px", color: "var(--muted)" }}>
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}