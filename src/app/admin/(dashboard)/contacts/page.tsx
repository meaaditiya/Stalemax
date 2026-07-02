"use client";

import { useEffect, useState } from "react";

type ContactRow = {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  budget?: string;
  projectType?: string;
  description: string;
  status: "new" | "read" | "replied";
  createdAt: string;
};

export default function AdminContactsPage() {
  const [contacts, setContacts] = useState<ContactRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/contacts")
      .then((res) => res.json())
      .then((json) => setContacts(json.data ?? []))
      .finally(() => setLoading(false));
  }, []);

  const updateStatus = async (id: string, status: string) => {
    await fetch("/api/admin/contacts", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    });
    setContacts((prev) => prev.map((c) => (c._id === id ? { ...c, status: status as ContactRow["status"] } : c)));
  };

  if (loading) return <p style={{ color: "var(--muted)" }}>Loading...</p>;

  return (
    <div>
      <h1 style={{ fontFamily: "Playfair Display, serif", fontSize: "26px", color: "var(--navy)", marginBottom: "24px" }}>
        Contact Enquiries
      </h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        {contacts.length === 0 && <p style={{ color: "var(--muted)" }}>No enquiries yet.</p>}
        {contacts.map((c) => (
          <div key={c._id} className="plain-card">
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "10px" }}>
              <div>
                <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--navy)" }}>{c.name}</h3>
                <p style={{ fontSize: "13px", color: "var(--muted)" }}>
                  {c.email} {c.phone ? `· ${c.phone}` : ""}
                </p>
              </div>
              <select
                value={c.status}
                onChange={(e) => updateStatus(c._id, e.target.value)}
                style={{ padding: "6px 12px", borderRadius: "8px", border: "1px solid var(--border)", fontSize: "13px" }}
              >
                <option value="new">New</option>
                <option value="read">Read</option>
                <option value="replied">Replied</option>
              </select>
            </div>
            <p style={{ fontSize: "13px", color: "var(--text)", marginTop: "10px", lineHeight: 1.6 }}>
              {c.description}
            </p>
            <p style={{ fontSize: "12px", color: "var(--muted)", marginTop: "10px" }}>
              {c.company ? `${c.company} · ` : ""}
              {c.budget ?? ""} {c.projectType ? `· ${c.projectType}` : ""}
            </p>
            <p style={{ fontSize: "11.5px", color: "var(--muted)", marginTop: "8px" }}>
              {new Date(c.createdAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
