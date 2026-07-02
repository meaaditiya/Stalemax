export type Product = {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  techStack: string[];
  features: string[];
  demoVideo?: string;
  liveDemoUrl?: string;
  githubUrl?: string;
};

export const products: Product[] = [
  {
    id: "coaching-management-system",
    title: "Coaching Management System",
    slug: "coaching-management-system",
    description:
      "A complete platform for coaching institutes to manage students, attendance, fees, exams, and live classes in one place.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop",
    techStack: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS", "Node.js"],
    features: [
      "Student Management",
      "Attendance",
      "Fees",
      "Assignments",
      "Results",
      "Exams",
      "Live Classes",
      "Notifications",
      "Analytics",
      "Role-Based Access",
      "Reports",
      "Parent Portal",
    ],
    liveDemoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "furniture-shop-platform",
    title: "Furniture Shop Management Platform",
    slug: "furniture-shop-platform",
    description:
      "An e-commerce and inventory platform built for furniture retailers, covering catalog, orders, payments, and reporting.",
    image: "https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=1000&auto=format&fit=crop",
    techStack: ["Next.js", "MongoDB", "Stripe", "Tailwind CSS", "Node.js"],
    features: [
      "Product Catalog",
      "Inventory Management",
      "Shopping Cart",
      "Wishlist",
      "Orders",
      "Payment Gateway",
      "Analytics",
      "Admin Dashboard",
      "Customer Management",
      "SEO Optimization",
      "Coupons",
      "Reports",
    ],
    liveDemoUrl: "#",
    githubUrl: "#",
  },
];
