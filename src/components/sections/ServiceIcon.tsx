import { Settings, Brain, Grid3x3, Monitor, Cloud, Figma } from "lucide-react";
import type { Service } from "@/data/services";

const iconMap: Record<Service["icon"], React.ElementType> = {
  settings: Settings,
  brain: Brain,
  grid: Grid3x3,
  monitor: Monitor,
  cloud: Cloud,
  figma: Figma,
};

export default function ServiceIcon({ icon }: { icon: Service["icon"] }) {
  const Icon = iconMap[icon];
  return <Icon size={22} strokeWidth={1.6} />;
}
