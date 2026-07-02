import { Schema, models, model } from "mongoose";

export interface INewsletter {
  _id: string;
  email: string;
  createdAt: Date;
}

const NewsletterSchema = new Schema<INewsletter>(
  {
    email: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

export default models.Newsletter || model<INewsletter>("Newsletter", NewsletterSchema);
