export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    id: "pricing",
    question: "How is pricing decided for a project?",
    answer:
      "We don't work off a fixed price list because every project has a different scope, complexity, and timeline. Instead, we start with a free consultation to understand what you're building, who it's for, and what success looks like. From there we put together a detailed proposal that breaks down the phases of work, the team involved, and a clear cost estimate before anything is signed. You'll always know what you're paying for and why, and we flag any scope changes before they affect the budget rather than surprising you with it later.",
  },
  {
    id: "timeline",
    question: "How long does a typical project take?",
    answer:
      "Most projects fall between 6 and 16 weeks from kickoff to launch, though this varies a lot depending on scope. A simple marketing site might take 3-4 weeks, while a full ERP system with multiple integrations can run 4-6 months. During the planning phase we break the work into milestones with target dates, so you always know what's shipping and when. We also build in buffer time for feedback rounds and QA, because rushing that stage is usually where quality suffers.",
  },
  {
    id: "support",
    question: "Do you offer post-launch support?",
    answer:
      "Yes — every engagement includes a defined support window after launch, and we offer extended maintenance retainers for clients who want an ongoing relationship. Support covers bug fixes, minor adjustments, hosting monitoring, and answering questions as your team gets used to the new system. If you need active feature development after the initial period, we can set up a monthly retainer or handle it as a new scoped project, whichever fits your budget and pace better.",
  },
  {
    id: "technologies",
    question: "What technologies do you specialize in?",
    answer:
      "Our core stack is Next.js and React on the frontend, Node.js on the backend, and MongoDB or PostgreSQL for data, depending on what the project needs. We also work regularly with TypeScript, Tailwind CSS, Docker, and cloud platforms like AWS and Vercel for deployment. We choose the stack based on your project's requirements rather than forcing everything into one toolkit — for example, a data-heavy internal tool might be better served by PostgreSQL than MongoDB, and we'll tell you that upfront.",
  },
  {
    id: "hosting",
    question: "Do you handle hosting and deployment?",
    answer:
      "Yes, we handle the full deployment pipeline, from setting up your hosting environment to configuring CI/CD so future updates go out smoothly. We typically deploy on Vercel for frontend-heavy applications or AWS for more complex infrastructure needs, but we're happy to work within your existing hosting setup if you already have one. We also set up monitoring and basic alerting so issues get caught early rather than discovered by your users.",
  },
  {
    id: "ownership",
    question: "Who owns the code after project completion?",
    answer:
      "You do, fully. Once the project is delivered and final payment is made, you own all source code, assets, and intellectual property outright — there's no licensing fee or vendor lock-in. We hand over the full repository along with documentation so your team (or any future developer) can pick up the codebase without needing us. If you'd like us to stay involved for ongoing work, that's always an option, but it's never a requirement.",
  },
  {
    id: "custom-software",
    question: "Can you build fully custom software from scratch?",
    answer:
      "Yes, this is our core specialty. Rather than adapting a template or a pre-built SaaS product to fit your workflow, we design and build the system around how your business actually operates. That starts with a discovery phase where we map out your processes, identify pain points, and figure out what a good solution actually looks like for you — not a generic one. It usually results in software your team adopts faster, because it was built for the way you already work rather than forcing you to change your process to fit the tool.",
  },
  {
    id: "communication",
    question: "How do we communicate during the project?",
    answer:
      "We set up a shared channel (usually Slack or email, whichever you prefer) for day-to-day questions, plus regular check-in calls at each milestone so you can see progress and give feedback early. You'll also get access to a project tracker so you can see what's in progress, what's done, and what's coming up next without having to ask. We'd rather over-communicate during development than have you find out about a delay or a decision after the fact.",
  },
];