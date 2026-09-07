import { Header } from "@/components/sites/rea-co/root-00000000/Header";
import { HeroSection } from "@/components/sites/rea-co/root-00000000/HeroSection";
import { StatsBar } from "@/components/sites/rea-co/root-00000000/StatsBar";
import { AboutSection } from "@/components/sites/rea-co/root-00000000/AboutSection";
import { SoftwareSection } from "@/components/sites/rea-co/root-00000000/SoftwareSection";
import { ServicesSection } from "@/components/sites/rea-co/root-00000000/ServicesSection";
import { TechnologySection } from "@/components/sites/rea-co/root-00000000/TechnologySection";
import { TeamRolesSection } from "@/components/sites/rea-co/root-00000000/TeamRolesSection";
import { IndustriesSection } from "@/components/sites/rea-co/root-00000000/IndustriesSection";
import { PeopleSection } from "@/components/sites/rea-co/root-00000000/PeopleSection";
import { TestimonialSection } from "@/components/sites/rea-co/root-00000000/TestimonialSection";
import { FaqSection } from "@/components/sites/rea-co/root-00000000/FaqSection";
import { CtaSection } from "@/components/sites/rea-co/root-00000000/CtaSection";
import { Footer } from "@/components/sites/rea-co/root-00000000/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StatsBar />
        <AboutSection />
        <SoftwareSection />
        <ServicesSection />
        <TechnologySection />
        <TeamRolesSection />
        <IndustriesSection />
        <PeopleSection />
        <TestimonialSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
