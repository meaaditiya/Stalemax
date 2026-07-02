export type PortfolioItem = {
  id: string;
  title: string;
  category: string;
  image: string;
  technologies: string[];
  problem: string;
  solution: string;
  result: string;
  features: string[];
  duration: string;
  clientFeedback?: string;
  link?: string;
};

export const portfolio: PortfolioItem[] = [
  {
    id: "coaching-lms",
    title: "Coaching LMS Platform",
    category: "EdTech",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1400&auto=format&fit=crop",
    technologies: ["Next.js", "MongoDB", "Node.js"],
    problem:
      "The institute was running attendance, fees, and class scheduling across three disconnected spreadsheets and a WhatsApp group, which made it nearly impossible to track student progress or reconcile payments at the end of each month.",
    solution:
      "We built a single platform covering student records, attendance, fee automation, and live class scheduling, with a role-based portal so teachers, admins, and parents each see only what's relevant to them.",
    result:
      "Fee reconciliation time dropped from several days a month to under an hour, and parent complaints about missed updates fell to near zero within the first term.",
    features: ["Attendance tracking", "Fee automation", "Live class integration", "Parent portal"],
    duration: "10 weeks",
    clientFeedback: "Stalemax delivered exactly what we needed, on time and within budget.",
    link: "#",
  },
  {
    id: "furniture-commerce",
    title: "Furniture E-commerce Suite",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1400&auto=format&fit=crop",
    technologies: ["Next.js", "Stripe", "MongoDB"],
    problem:
      "The retailer's previous storefront had no real inventory sync with their warehouse, which regularly led to orders being accepted for out-of-stock items and manual refunds to unhappy customers.",
    solution:
      "We rebuilt the storefront with live inventory sync, an integrated payment gateway, and an admin dashboard that gives the team real-time visibility into stock, orders, and revenue without needing a developer to pull reports.",
    result:
      "Online sales doubled within the first quarter after launch, and stock-related refunds dropped to almost none since inventory now updates in real time.",
    features: ["Inventory management", "Payment integration", "Admin analytics dashboard", "Coupon engine"],
    duration: "8 weeks",
    clientFeedback: "Our online sales doubled within the first quarter after launch.",
    link: "#",
  },
];