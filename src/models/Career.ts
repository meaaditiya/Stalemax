import { Schema, models, model } from "mongoose";

export interface ICareer {
  _id: string;
  name: string;
  email: string;
  phone: string;
  experience: string;
  position: string;
  currentCompany?: string;
  linkedin?: string;
  github?: string;
  portfolio?: string;
  message?: string;
  resumeUrl: string;
  status: "new" | "shortlisted" | "rejected" | "hired";
  createdAt: Date;
}

const CareerSchema = new Schema<ICareer>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    experience: { type: String, required: true },
    position: { type: String, required: true },
    currentCompany: { type: String },
    linkedin: { type: String },
    github: { type: String },
    portfolio: { type: String },
    message: { type: String },
    resumeUrl: { type: String, required: true },
    status: { type: String, enum: ["new", "shortlisted", "rejected", "hired"], default: "new" },
  },
  { timestamps: true }
);

export default models.Career || model<ICareer>("Career", CareerSchema);
