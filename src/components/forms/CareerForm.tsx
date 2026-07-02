"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { careerSchema, type CareerInput } from "@/lib/validations";
import { positions } from "@/data/careers";
import Alert from "@/components/ui/Alert";
import Spinner from "@/components/ui/Spinner";

export default function CareerForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CareerInput>({ resolver: zodResolver(careerSchema) });

  const onSubmit = async (data: CareerInput) => {
    setStatus("idle");
    setFileError("");

    if (!resumeFile) {
      setFileError("Please attach your resume (PDF or DOCX, max 5MB)");
      return;
    }
    if (resumeFile.size > 5 * 1024 * 1024) {
      setFileError("Resume file must be under 5MB");
      return;
    }

    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => formData.append(key, value ?? ""));
      formData.append("resume", resumeFile);

      const res = await fetch("/api/careers", { method: "POST", body: formData });
      const json = await res.json();
      if (!res.ok || !json.success) {
        throw new Error(json.message ?? "Something went wrong");
      }
      setStatus("success");
      setServerMessage("Application submitted! Check your email for confirmation.");
      reset();
      setResumeFile(null);
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
          <input id="name" {...register("name")} placeholder="Your full name" />
          {errors.name && <p className="form-error">{errors.name.message}</p>}
        </div>
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" {...register("email")} placeholder="you@example.com" />
          {errors.email && <p className="form-error">{errors.email.message}</p>}
        </div>
        <div className="form-field">
          <label htmlFor="phone">Phone</label>
          <input id="phone" {...register("phone")} placeholder="+91 98765 43210" />
          {errors.phone && <p className="form-error">{errors.phone.message}</p>}
        </div>
        <div className="form-field">
          <label htmlFor="experience">Experience</label>
          <input id="experience" {...register("experience")} placeholder="e.g. 2 years" />
          {errors.experience && <p className="form-error">{errors.experience.message}</p>}
        </div>
        <div className="form-field">
          <label htmlFor="position">Position</label>
          <select id="position" {...register("position")}>
            <option value="">Select position</option>
            {positions.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
          {errors.position && <p className="form-error">{errors.position.message}</p>}
        </div>
        <div className="form-field">
          <label htmlFor="currentCompany">Current Company</label>
          <input id="currentCompany" {...register("currentCompany")} placeholder="Optional" />
        </div>
        <div className="form-field">
          <label htmlFor="linkedin">LinkedIn</label>
          <input id="linkedin" {...register("linkedin")} placeholder="https://linkedin.com/in/you" />
          {errors.linkedin && <p className="form-error">{errors.linkedin.message}</p>}
        </div>
        <div className="form-field">
          <label htmlFor="github">GitHub</label>
          <input id="github" {...register("github")} placeholder="https://github.com/you" />
          {errors.github && <p className="form-error">{errors.github.message}</p>}
        </div>
        <div className="form-field">
          <label htmlFor="portfolio">Portfolio</label>
          <input id="portfolio" {...register("portfolio")} placeholder="https://yourportfolio.com" />
          {errors.portfolio && <p className="form-error">{errors.portfolio.message}</p>}
        </div>
        <div className="form-field">
          <label htmlFor="resume">Resume (PDF/DOCX)</label>
          <input
            id="resume"
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => setResumeFile(e.target.files?.[0] ?? null)}
          />
          {fileError && <p className="form-error">{fileError}</p>}
        </div>
      </div>

      <div className="form-field" style={{ marginTop: "18px" }}>
        <label htmlFor="message">Cover Letter / Message</label>
        <textarea id="message" {...register("message")} placeholder="Tell us why you'd be a great fit..." />
      </div>

      <button
        type="submit"
        className="btn-primary"
        disabled={isSubmitting}
        style={{ marginTop: "22px", display: "flex", alignItems: "center", gap: "8px" }}
      >
        {isSubmitting && <Spinner size={15} />}
        {isSubmitting ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
}
