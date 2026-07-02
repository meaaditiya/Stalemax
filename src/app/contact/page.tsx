import type { Metadata } from "next";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Stalemax Technologies for your next software project.",
};

const contactDetails = [
  { icon: MapPin, label: "Office Address", value: `${siteConfig.address.line1}, ${siteConfig.address.line2}, ${siteConfig.address.line3}` },
  { icon: Phone, label: "Phone", value: siteConfig.phone },
  { icon: Mail, label: "Email", value: siteConfig.email },
];

export default function ContactPage() {
  return (
    <div className="wrap">
      <section className="page-hero">
        <h1>Let&apos;s build something great.</h1>
        <p>Tell us about your project and we&apos;ll get back to you within 24 hours.</p>
      </section>

      <section className="section" style={{ paddingTop: "20px" }}>
        <div className="contact-grid">
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <div className="plain-card" style={{ padding: 0 }}>
              {contactDetails.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    style={{
                      display: "flex",
                      gap: "16px",
                      padding: "20px 24px",
                      borderTop: i === 0 ? "none" : "1px solid var(--border)",
                    }}
                  >
                    <div className="icon-badge">
                      <Icon size={17} color="#17143C" />
                    </div>
                    <div>
                      <h5 style={{ fontSize: "12px", fontWeight: 800, color: "var(--navy)", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: "6px" }}>
                        {item.label}
                      </h5>
                      <p style={{ fontSize: "13.5px", color: "var(--muted)", lineHeight: 1.5 }}>{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>
                <button className="btn-primary" style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                  <Phone size={16} /> Call Now
                </button>
              </a>
              <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer">
                <button className="btn-secondary" style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                  <MessageCircle size={16} /> WhatsApp Us
                </button>
              </a>
              <a href="/contact">
                <button className="btn-secondary" style={{ width: "100%" }}>Book a Meeting</button>
              </a>
            </div>

            <div className="plain-card" style={{ padding: 0, overflow: "hidden" }}>
              <iframe
                src={siteConfig.mapsEmbedUrl}
                width="100%"
                height="220"
                style={{ border: 0, display: "block" }}
                loading="lazy"
                title="Stalemax Technologies location"
              ></iframe>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </div>
  );
}