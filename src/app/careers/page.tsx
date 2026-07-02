import type { Metadata } from "next";
import { jobOpenings } from "@/data/careers";
import CareerForm from "@/components/forms/CareerForm";
import { Briefcase, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join Stalemax Technologies and build premium software with a team that cares about craft.",
};

export default function CareersPage() {
  return (
    <div className="wrap">
      <section className="page-hero">
        <h1>Build your career with us.</h1>
        <p>
          We&apos;re a small team that cares deeply about craft, clean code, and shipping software our clients love.
          Join us.
        </p>
      </section>

      <section className="section" style={{ paddingTop: "20px" }}>
        <div className="section-head">
          <span className="section-tag">Open Positions</span>
          <h2 className="section-title">
            Current <em>openings.</em>
          </h2>
        </div>
        <div className="grid-2">
          {jobOpenings.map((job) => (
            <div key={job.id} className="plain-card">
              <h3 style={{ fontSize: "17px", fontWeight: 700, color: "var(--navy)", marginBottom: "8px" }}>
                {job.title}
              </h3>
              <div style={{ display: "flex", gap: "16px", marginBottom: "12px" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12.5px", color: "var(--muted)" }}>
                  <Briefcase size={14} /> {job.type}
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12.5px", color: "var(--muted)" }}>
                  <MapPin size={14} /> {job.location}
                </span>
              </div>
              <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.6 }}>{job.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" style={{ paddingTop: "0" }}>
        <div className="section-head">
          <span className="section-tag">Apply Now</span>
          <h2 className="section-title">
            Submit your <em>application.</em>
          </h2>
        </div>
        <CareerForm />
      </section>
    </div>
  );
}
