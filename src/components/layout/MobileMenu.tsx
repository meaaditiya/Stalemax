"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <>
      <div className="mobile-menu-overlay" onClick={onClose} />
      <div className="mobile-menu-card">
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "6px" }}>
          <button
            onClick={onClose}
            aria-label="Close menu"
            style={{
              background: "none",
              border: "none",
              color: "var(--navy)",
              padding: "8px",
            }}
          >
            <X size={20} />
          </button>
        </div>
        {siteConfig.navLinks.map((link) => (
          <Link key={link.href} href={link.href} onClick={onClose}>
            {link.label}
          </Link>
        ))}
        <Link href="/contact" onClick={onClose}>
          <button className="cta-btn" style={{ width: "100%", marginTop: "8px" }}>
            Get Started
          </button>
        </Link>
      </div>
    </>
  );
}
