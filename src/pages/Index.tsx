import Hero from "@/components/Hero";
import MissionSection from "@/components/MissionSection";
import PillarsSection from "@/components/PillarsSection";
import ImplementationSection from "@/components/ImplementationSection";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <MissionSection />
      <PillarsSection />
      <ImplementationSection />
      <CallToAction />
    </div>
  );
};

export default Index;
