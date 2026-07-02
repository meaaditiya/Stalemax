import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name is too short").max(100),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(7).max(20).optional().or(z.literal("")),
  company: z.string().max(150).optional().or(z.literal("")),
  budget: z.string().optional().or(z.literal("")),
  projectType: z.string().optional().or(z.literal("")),
  timeline: z.string().optional().or(z.literal("")),
  description: z.string().min(10, "Please provide a few more details").max(2000),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const careerSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().min(7).max(20),
  experience: z.string().min(1),
  position: z.string().min(1),
  currentCompany: z.string().max(150).optional().or(z.literal("")),
  linkedin: z.string().url().optional().or(z.literal("")),
  github: z.string().url().optional().or(z.literal("")),
  portfolio: z.string().url().optional().or(z.literal("")),
  message: z.string().max(2000).optional().or(z.literal("")),
});

export type CareerInput = z.infer<typeof careerSchema>;

export const adminLoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});
