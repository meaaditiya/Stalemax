"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Alert from "@/components/ui/Alert";
import Spinner from "@/components/ui/Spinner";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const json = await res.json();
      if (!res.ok || !json.success) {
        throw new Error(json.message ?? "Login failed");
      }
      router.push("/admin");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
      <form onSubmit={handleSubmit} className="plain-card" style={{ width: "100%", maxWidth: "380px" }}>
        <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "24px", color: "var(--navy)", marginBottom: "6px" }}>
          Admin Login
        </h2>
        <p style={{ fontSize: "13px", color: "var(--muted)", marginBottom: "24px" }}>
          Sign in to manage enquiries and applications.
        </p>

        {error && <Alert type="error" message={error} />}

        <div className="form-field" style={{ marginBottom: "16px" }}>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-field" style={{ marginBottom: "20px" }}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="btn-primary"
          disabled={loading}
          style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}
        >
          {loading && <Spinner size={15} />}
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}
