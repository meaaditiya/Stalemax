"use client";

import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  };

  return (
    <button
      onClick={handleLogout}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "10px 12px",
        borderRadius: "10px",
        background: "rgba(255,255,255,0.08)",
        border: "none",
        color: "#fff",
        fontSize: "14px",
        fontWeight: 600,
        cursor: "pointer",
        width: "100%",
      }}
    >
      <LogOut size={17} /> Logout
    </button>
  );
}
