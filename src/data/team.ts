export type TeamMember = {
  id: string;
  name: string;
  designation: string;
  bio: string;
  image: string;
  linkedin?: string;
  github?: string;
  portfolio?: string;
  email?: string;
};

export const team: TeamMember[] = [
  {
    id: "founder",
    name: "Founder & CEO",
    designation: "Founder, Full-Stack Engineer",
    bio: "Leads product strategy and engineering at Stalemax, building software that scales with clients' businesses.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
    linkedin: "#",
    github: "#",
    email: "hello@stalemax.tech",
  },
];
