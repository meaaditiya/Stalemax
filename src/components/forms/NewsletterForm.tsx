"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const json = await res.json();
      if (!res.ok || !json.success) throw new Error();
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "8px", maxWidth: "320px" }}>
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        style={{
          flex: 1,
          minWidth: 0,
          height: "44px",
          padding: "0 14px",
          borderRadius: "0",
          border: "1.5px solid var(--border)",
          fontSize: "13px",
          outline: "none",
          boxSizing: "border-box",
        }}
      />
      <button
        type="submit"
        style={{
          flexShrink: 0,
          height: "42px",
          padding: "0 20px",
          borderRadius: "0",
          border: "none",
          background: "var(--navy)",
          color: "#fff",
          fontSize: "13px",
          fontWeight: 700,
          cursor: "pointer",
          boxSizing: "border-box",
        }}
        disabled={status === "loading"}
      >
        {status === "success" ? "Done" : "Join"}
      </button>
    </form>
  );
}