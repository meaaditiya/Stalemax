export type PricingPlan = {
  id: string;
  name: string;
  idealFor: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    idealFor: "Small businesses & new websites",
    description: "A focused engagement to get a professional web presence live quickly.",
    features: [
      "Landing page or basic multi-page website",
      "Responsive design across all devices",
      "Basic on-page SEO setup",
      "Contact form with email notifications",
      "1 month of post-launch support",
    ],
  },
  {
    id: "business",
    name: "Business",
    idealFor: "Growing companies needing a real application",
    description: "For teams that need a custom web application, not just a website.",
    features: [
      "Custom web application development",
      "Admin dashboard with role-based access",
      "Third-party API integrations",
      "Database design and setup",
      "3 months of post-launch support",
    ],
    highlighted: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    idealFor: "Enterprises running mission-critical systems",
    description: "For large-scale platforms that need dedicated engineering and infrastructure.",
    features: [
      "Enterprise ERP or CRM development",
      "Dedicated engineering team",
      "Cloud infrastructure setup and DevOps",
      "Advanced security and compliance review",
      "12 months of post-launch support",
    ],
  },
  {
    id: "custom",
    name: "Custom",
    idealFor: "Anything that doesn't fit a template",
    description: "Have something unique in mind? We'll scope the engagement together.",
    features: [
      "Requirements workshop with our team",
      "Tailored scope and delivery timeline",
      "Flexible engagement models",
      "Dedicated project manager",
    ],
  },
];

export const offers = [
  "1 Year Free Hosting",
  "Free Landing Page",
  "Free SSL Certificate",
  "Free Deployment",
  "Free Technical Consultation",
  "Free Basic SEO Setup",
];