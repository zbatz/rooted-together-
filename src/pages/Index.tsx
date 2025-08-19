import Hero from "@/components/Hero";
import MissionSection from "@/components/MissionSection";
import PillarsSection from "@/components/PillarsSection";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <MissionSection />
      <PillarsSection />
      <CallToAction />
    </div>
  );
};

export default Index;
