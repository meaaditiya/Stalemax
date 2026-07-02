"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactInput } from "@/lib/validations";
import Alert from "@/components/ui/Alert";
import Spinner from "@/components/ui/Spinner";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactInput) => {
    setStatus("idle");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.success) {
        throw new Error(json.message ?? "Something went wrong");
      }
      setStatus("success");
      setServerMessage("Thanks! We received your enquiry and will get back to you within 24 hours.");
      reset();
    } catch (err) {
      setStatus("error");
      setServerMessage(err instanceof Error ? err.message : "Failed to submit. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="plain-card">
      {status === "success" && <Alert type="success" message={serverMessage} />}
      {status === "error" && <Alert type="error" message={serverMessage} />}

      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="name">Name</label>
          <input id="name" {...register("name")} placeholder="Your name" />
          {errors.name && <p className="form-error">{errors.name.message}</p>}
        </div>
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" {...register("email")} placeholder="you@company.com" />
          {errors.email && <p className="form-error">{errors.email.message}</p>}
        </div>
        <div className="form-field">
          <label htmlFor="phone">Phone</label>
          <input id="phone" {...register("phone")} placeholder="+91 98765 43210" />
        </div>
        <div className="form-field">
          <label htmlFor="company">Company Name</label>
          <input id="company" {...register("company")} placeholder="Your company" />
        </div>
        <div className="form-field">
          <label htmlFor="budget">Budget</label>
          <select id="budget" {...register("budget")}>
            <option value="">Select budget</option>
            <option value="Under ₹50,000">Under ₹50,000</option>
            <option value="₹50,000 – ₹2,00,000">₹50,000 – ₹2,00,000</option>
            <option value="₹2,00,000 – ₹5,00,000">₹2,00,000 – ₹5,00,000</option>
            <option value="₹5,00,000+">₹5,00,000+</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="projectType">Project Type</label>
          <select id="projectType" {...register("projectType")}>
            <option value="">Select type</option>
            <option value="Custom Software">Custom Software</option>
            <option value="Web Application">Web Application</option>
            <option value="Mobile App">Mobile App</option>
            <option value="AI Integration">AI Integration</option>
            <option value="ERP/CRM">ERP/CRM</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div className="form-field" style={{ marginTop: "18px" }}>
        <label htmlFor="timeline">Timeline</label>
        <input id="timeline" {...register("timeline")} placeholder="e.g. 2-3 months" />
      </div>

      <div className="form-field" style={{ marginTop: "18px" }}>
        <label htmlFor="description">Project Description</label>
        <textarea id="description" {...register("description")} placeholder="Tell us about your project..." />
        {errors.description && <p className="form-error">{errors.description.message}</p>}
      </div>

      <button
        type="submit"
        className="btn-primary"
        disabled={isSubmitting}
        style={{ marginTop: "22px", display: "flex", alignItems: "center", gap: "8px" }}
      >
        {isSubmitting && <Spinner size={15} />}
        {isSubmitting ? "Sending..." : "Send Enquiry"}
      </button>
    </form>
  );
}
