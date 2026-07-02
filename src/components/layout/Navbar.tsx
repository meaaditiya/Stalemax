"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import MobileMenu from "./MobileMenu";
import AppLogo from "../sections/images/appicon.jpg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="navbar">
        <Link href="/" className="logo">
          <img src={AppLogo.src} alt="App Logo" className="logo-img" />
          {siteConfig.shortName}
        </Link>
        <nav className="links">
          {siteConfig.navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Link href="/contact">
            <button className="cta-btn">Get Started</button>
          </Link>
          <button
            className="mobile-menu-toggle"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>
      {open && <MobileMenu onClose={() => setOpen(false)} />}
    </header>
  );
}