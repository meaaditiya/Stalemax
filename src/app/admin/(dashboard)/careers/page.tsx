"use client";

import { useEffect, useState } from "react";

type CareerRow = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  resumeUrl: string;
  status: "new" | "shortlisted" | "rejected" | "hired";
  createdAt: string;
};

export default function AdminCareersPage() {
  const [careers, setCareers] = useState<CareerRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/careers")
      .then((res) => res.json())
      .then((json) => setCareers(json.data ?? []))
      .finally(() => setLoading(false));
  }, []);

  const updateStatus = async (id: string, status: string) => {
    await fetch("/api/admin/careers", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    });
    setCareers((prev) => prev.map((c) => (c._id === id ? { ...c, status: status as CareerRow["status"] } : c)));
  };

  if (loading) return <p style={{ color: "var(--muted)" }}>Loading...</p>;

  return (
    <div>
      <h1 style={{ fontFamily: "Playfair Display, serif", fontSize: "26px", color: "var(--navy)", marginBottom: "24px" }}>
        Job Applications
      </h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        {careers.length === 0 && <p style={{ color: "var(--muted)" }}>No applications yet.</p>}
        {careers.map((c) => (
          <div key={c._id} className="plain-card">
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "10px" }}>
              <div>
                <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--navy)" }}>
                  {c.name} — {c.position}
                </h3>
                <p style={{ fontSize: "13px", color: "var(--muted)" }}>
                  {c.email} · {c.phone} · {c.experience}
                </p>
              </div>
              <select
                value={c.status}
                onChange={(e) => updateStatus(c._id, e.target.value)}
                style={{ padding: "6px 12px", borderRadius: "8px", border: "1px solid var(--border)", fontSize: "13px" }}
              >
                <option value="new">New</option>
                <option value="shortlisted">Shortlisted</option>
                <option value="rejected">Rejected</option>
                <option value="hired">Hired</option>
              </select>
            </div>
            <a
              href={c.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "13px", color: "var(--navy)", fontWeight: 700, marginTop: "10px", display: "inline-block" }}
            >
              View Resume →
            </a>
            <p style={{ fontSize: "11.5px", color: "var(--muted)", marginTop: "8px" }}>
              {new Date(c.createdAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
