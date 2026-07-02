import type { Metadata } from "next";
import FaqAccordion from "@/components/sections/FaqAccordion";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about working with Stalemax Technologies.",
};

export default function FaqPage() {
  return (
    <div className="wrap">
      <section className="page-hero">
        <h1>Frequently asked questions.</h1>
        <p>Everything you need to know about pricing, timelines, and how we work.</p>
      </section>
      <section className="section" style={{ paddingTop: "20px" }}>
        <FaqAccordion />
      </section>
    </div>
  );
}
