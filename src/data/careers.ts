export type JobOpening = {
  id: string;
  title: string;
  type: string;
  location: string;
  description: string;
};

export const jobOpenings: JobOpening[] = [
  {
    id: "fullstack-dev",
    title: "Full-Stack Developer",
    type: "Full-time",
    location: "Remote / Meerut",
    description: "Build and ship features across our client projects using Next.js, Node.js, and MongoDB.",
  },
  {
    id: "ui-ux-designer",
    title: "UI/UX Designer",
    type: "Full-time",
    location: "Remote",
    description: "Design premium, editorial-style interfaces for web and mobile products.",
  },
];

export const positions = jobOpenings.map((job) => job.title);
