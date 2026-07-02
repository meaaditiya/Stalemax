import Link from "next/link";

export default function CtaBand() {
  return (
    <section className="section" style={{ paddingTop: "60px" }}>
      <div className="wrap">
        <div className="cta-band">
          <h3>
            Have a project in mind? Let&apos;s build something <em>worth shipping.</em>
          </h3>
          <div className="cta-band-actions">
            <Link href="/contact">
              <button className="btn-primary">Consult Now</button>
            </Link>
            <Link href="/#pricing">
              <button className="btn-secondary">View Pricing</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
