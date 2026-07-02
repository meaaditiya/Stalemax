import { technologies } from "@/data/technologies";

export default function TechStack() {
  return (
    <section className="section" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="wrap">
        <div className="section-head">
          <span className="section-tag">Technology</span>
          <h2 className="section-title">
            Tools we <em>trust and ship with.</em>
          </h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
            gap: "16px",
          }}
        >
          {technologies.map((tech) => (
            <div
              key={tech.slug}
              className="plain-card"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
                padding: "20px 12px",
              }}
            >
              <img src={`https://cdn.simpleicons.org/${tech.slug}/17143C`} alt={tech.name} width={28} height={28} />
              <span style={{ fontSize: "12.5px", fontWeight: 700, color: "var(--text)", textAlign: "center" }}>
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
