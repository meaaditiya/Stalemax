"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/faq";

export default function FaqAccordion() {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <div className="plain-card">
      {faqs.map((faq) => {
        const isOpen = openId === faq.id;
        return (
          <div className="accordion-item" key={faq.id}>
            <button className="accordion-trigger" onClick={() => setOpenId(isOpen ? null : faq.id)}>
              {faq.question}
              <ChevronDown
                size={18}
                style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s ease" }}
              />
            </button>
            <div className="accordion-panel" style={{ maxHeight: isOpen ? "500px" : "0" }}>
              <p>{faq.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}