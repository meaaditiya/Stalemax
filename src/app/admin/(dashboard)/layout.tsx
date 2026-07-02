import Link from "next/link";
import { LayoutDashboard, Mail, Briefcase } from "lucide-react";
import LogoutButton from "@/components/admin/LogoutButton";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <aside
        style={{
          width: "230px",
          background: "var(--navy)",
          color: "#fff",
          padding: "24px 18px",
          display: "flex",
          flexDirection: "column",
          gap: "6px",
          flexShrink: 0,
        }}
      >
        <div style={{ fontFamily: "Playfair Display, serif", fontSize: "18px", fontWeight: 700, marginBottom: "24px" }}>
          Stalemax Admin
        </div>
        <Link href="/admin" style={sidebarLink}>
          <LayoutDashboard size={17} /> Dashboard
        </Link>
        <Link href="/admin/contacts" style={sidebarLink}>
          <Mail size={17} /> Contacts
        </Link>
        <Link href="/admin/careers" style={sidebarLink}>
          <Briefcase size={17} /> Applications
        </Link>
        <div style={{ marginTop: "auto" }}>
          <LogoutButton />
        </div>
      </aside>
      <main style={{ flex: 1, background: "var(--bg)", padding: "32px" }}>{children}</main>
    </div>
  );
}

const sidebarLink: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  padding: "10px 12px",
  borderRadius: "10px",
  color: "#fff",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: 600,
  opacity: 0.85,
};
