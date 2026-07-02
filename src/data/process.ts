export type ProcessStep = {
  id: string;
  title: string;
  description: string;
  detail: string;
};

export const processSteps: ProcessStep[] = [
  {
    id: "discovery",
    title: "Discovery",
    description: "We understand your business, goals, and users.",
    detail: "Stakeholder interviews, workflow mapping, and a review of what's working and what isn't in your current setup.",
  },
  {
    id: "planning",
    title: "Planning",
    description: "Scope, timeline, and technical architecture are defined.",
    detail: "A written scope of work with milestones, the tech stack we'll use, and a realistic delivery timeline you can plan around.",
  },
  {
    id: "design",
    title: "UI/UX Design",
    description: "Wireframes and premium interfaces are crafted.",
    detail: "Low-fidelity wireframes first for structure, then high-fidelity screens with your feedback folded in at every round.",
  },
  {
    id: "development",
    title: "Development",
    description: "Clean, scalable code is written sprint by sprint.",
    detail: "Work is broken into sprints with visible progress each week, so you're never waiting weeks to see something real.",
  },
  {
    id: "testing",
    title: "Testing",
    description: "Rigorous QA across devices and edge cases.",
    detail: "Manual and automated testing across browsers and devices, plus a dedicated pass on edge cases before anything ships.",
  },
  {
    id: "deployment",
    title: "Deployment",
    description: "Production release with CI/CD pipelines.",
    detail: "A controlled release with rollback plans in place, deployed through a CI/CD pipeline so future updates go out safely.",
  },
  {
    id: "monitoring",
    title: "Monitoring",
    description: "Performance and uptime are tracked continuously.",
    detail: "Uptime and performance monitoring with alerts, so issues get caught by us before they're reported by your users.",
  },
  {
    id: "support",
    title: "Continuous Support",
    description: "We stay on to maintain and evolve your product.",
    detail: "A defined support window post-launch, with the option to extend into an ongoing retainer as your product grows.",
  },
];