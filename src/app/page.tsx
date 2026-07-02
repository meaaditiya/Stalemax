import Hero from "@/components/sections/Hero";
import LogosMarquee from "@/components/sections/LogosMarquee";
import Services from "@/components/sections/Services";
import WhyChoose from "@/components/sections/WhyChoose";
import Products from "@/components/sections/Products";
import Achievements from "@/components/sections/Achievements";
import TechStack from "@/components/sections/TechStack";
import HowWeWork from "@/components/sections/HowWeWork";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import CtaBand from "@/components/sections/CtaBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogosMarquee />
      <Services />
      <WhyChoose />
      <Products />
      <Achievements />
      <TechStack />
      <HowWeWork />
      <Pricing />
      <Testimonials />
      <CtaBand />
    </>
  );
}
