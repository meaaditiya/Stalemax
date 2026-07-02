import Link from "next/link";
import { pricingPlans, offers } from "@/data/pricing";
import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <section className="section" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="wrap">
        <div className="section-head">
          <span className="section-tag">Engagement Plans</span>
          <h2 className="section-title">
            Scoped to fit <em>where you are.</em>
          </h2>
          <p className="section-sub">
            No published pricing here — every project is quoted after a scoping call. Here&apos;s what each tier
            typically includes.
          </p>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "40px" }}>
          {offers.map((offer) => (
            <span key={offer} className="pill-badge">
              {offer}
            </span>
          ))}
        </div>

        <div className="grid-4">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className="plain-card"
              style={{
                border: plan.highlighted ? "2px solid var(--navy)" : "1px solid var(--border)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h3 style={{ fontSize: "17px", fontWeight: 700, color: "var(--navy)" }}>{plan.name}</h3>
              <p style={{ fontSize: "12px", fontWeight: 700, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.04em", margin: "10px 0 14px" }}>
                {plan.idealFor}
              </p>
              <p style={{ fontSize: "13.5px", color: "var(--muted)", marginBottom: "18px", lineHeight: 1.5 }}>
                {plan.description}
              </p>
              <ul style={{ listStyle: "none", marginBottom: "22px", flexGrow: 1 }}>
                {plan.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "8px",
                      fontSize: "13px",
                      color: "var(--text)",
                      marginBottom: "10px",
                    }}
                  >
                    <Check size={15} color="#17143C" style={{ marginTop: "2px", flexShrink: 0 }} />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact">
                <button className={plan.highlighted ? "btn-primary" : "btn-secondary"} style={{ width: "100%" }}>
                  Get a Quote
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}