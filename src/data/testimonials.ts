export type Testimonial = {
  id: string;
  name: string;
  company: string;
  image: string;
  rating: number;
  review: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Ankit Sharma",
    company: "EduBridge Institute",
    image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=300&auto=format&fit=crop",
    rating: 5,
    review: "Stalemax built our coaching platform end-to-end and the quality exceeded our expectations.",
  },
  {
    id: "t2",
    name: "Priya Verma",
    company: "Verma Furnishings",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop",
    rating: 5,
    review: "Our online store looks premium and runs flawlessly. Great communication throughout.",
  },
  {
    id: "t3",
    name: "Rohan Gupta",
    company: "NextGen Retail",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=300&auto=format&fit=crop",
    rating: 4,
    review: "Professional team, clean code, and they stayed on for support after launch.",
  },
];
