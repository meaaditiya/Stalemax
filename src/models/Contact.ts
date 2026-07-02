import mongoose, { Schema, models, model } from "mongoose";

export interface IContact {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  budget?: string;
  projectType?: string;
  timeline?: string;
  description: string;
  status: "new" | "read" | "replied";
  createdAt: Date;
}

const ContactSchema = new Schema<IContact>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    company: { type: String },
    budget: { type: String },
    projectType: { type: String },
    timeline: { type: String },
    description: { type: String, required: true },
    status: { type: String, enum: ["new", "read", "replied"], default: "new" },
  },
  { timestamps: true }
);

export default models.Contact || model<IContact>("Contact", ContactSchema);
