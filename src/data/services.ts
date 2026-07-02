export type Service = {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: "settings" | "brain" | "grid" | "monitor" | "cloud" | "figma";
};

export const services: Service[] = [
  {
    id: "custom-software",
    title: "Custom Software",
    description: "Bespoke applications engineered around your exact workflows, not a one-size template.",
    image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=800&auto=format&fit=crop",
    icon: "settings",
  },
  {
    id: "ai-integration",
    title: "AI Integration",
    description: "Practical AI features — automation, copilots, and intelligent search — built into your product.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
    icon: "brain",
  },
  {
    id: "enterprise-erp-crm",
    title: "Enterprise ERP & CRM",
    description: "Systems that unify operations, sales, and reporting into one reliable platform.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
    icon: "grid",
  },
  {
    id: "web-mobile-apps",
    title: "Web & Mobile Apps",
    description: "Fast, accessible, beautifully designed apps that work everywhere your users do.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
    icon: "monitor",
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    description: "Scalable infrastructure, CI/CD pipelines, and monitoring so you ship with confidence.",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=800&auto=format&fit=crop",
    icon: "cloud",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description: "Interfaces that feel premium and intuitive, designed around how people actually work.",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=800&auto=format&fit=crop",
    icon: "figma",
  },
];
