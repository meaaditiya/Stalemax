export type Achievement = {
  id: string;
  label: string;
  value: number;
  suffix: string;
};

export const achievements: Achievement[] = [
  { id: "projects", label: "Projects Completed", value: 40, suffix: "+" },
  { id: "clients", label: "Happy Clients", value: 30, suffix: "+" },
  { id: "countries", label: "Countries Served", value: 9, suffix: "" },
  { id: "uptime", label: "Uptime", value: 99, suffix: "%" },
  { id: "experience", label: "Years of Experience", value: 5, suffix: "+" },
  { id: "satisfaction", label: "Customer Satisfaction", value: 98, suffix: "%" },
];
