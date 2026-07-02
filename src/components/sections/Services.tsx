"use client";

import { useEffect, useRef } from "react";
import { services } from "@/data/services";
import ServiceIcon from "./ServiceIcon";

const revealClasses = ["reveal-up", "reveal-left", "reveal-right"];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = containerRef.current?.querySelectorAll(".service-card");
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
      { threshold: 0.18, rootMargin: "0px 0px -60px 0px" }
    );

    cards.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);

  return (
    <section className="section" id="services">
      <div className="wrap">
        <div className="section-head">
          <span className="section-tag">What we do</span>
          <h2 className="section-title">
            Full-stack software, <em>built end to end.</em>
          </h2>
          <p className="section-sub">
            From the first wireframe to production deployment, we handle every layer of your product.
          </p>
        </div>
        <div className="grid-3" ref={containerRef}>
          {services.map((service, i) => (
            <div key={service.id} className={`service-card ${revealClasses[i % 3]}`}>
              <img className="service-img" src={service.image} alt={service.title} />
              <div className="service-body">
                <div className="service-icon">
                  <ServiceIcon icon={service.icon} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
