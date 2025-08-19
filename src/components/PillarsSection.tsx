import PillarCard from "./PillarCard";
import { BookOpen, Heart, Users, Leaf, Accessibility } from "lucide-react";
import handsPlantingImage from "@/assets/hands-planting.jpg";
import outdoorLearningImage from "@/assets/outdoor-learning.jpg";
import communityHarvestImage from "@/assets/community-harvest.jpg";

const PillarsSection = () => {
  const pillars = [
    {
      icon: BookOpen,
      title: "Educational Excellence",
      description: "Gardens provide fertile ground for cross-curricular connections. Science lessons come alive when students observe plant life cycles, math becomes practical when measuring growth rates, and health education takes root when children see how nutrition and food systems influence wellbeing.",
      image: handsPlantingImage
    },
    {
      icon: Heart,
      title: "Mental Health & Wellbeing",
      description: "Access to green spaces has been proven to lower stress, enhance focus, and promote calm. Gardens serve as sanctuaries where students can pause, reflect, and reconnect with the natural world while developing resilience and emotional balance.",
      image: outdoorLearningImage
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Rooted Together creates lasting cultural change by strengthening bonds between schools and communities. Students, families, and volunteers work together, fostering collaboration and creating ripple effects of environmental stewardship.",
      image: communityHarvestImage,
      variant: "featured" as const
    },
    {
      icon: Leaf,
      title: "Environmental Stewardship",
      description: "Students learn that nature cannot be endlessly consumed without being sustained. Through hands-on engagement with living systems, they develop responsibility for environmental care and become equipped to address global challenges."
    },
    {
      icon: Accessibility,
      title: "Inclusive Learning",
      description: "Gardening provides flexible, adaptable learning for all students. The tactile experiences create rich sensory engagement that benefits diverse learners while fostering empathy, collaboration, and respect throughout the school community."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-earth">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Growing More Than Plants
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Rooted Together cultivates five core areas that transform education and prepare students 
            for a sustainable future while building stronger communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <PillarCard
              key={index}
              icon={pillar.icon}
              title={pillar.title}
              description={pillar.description}
              image={pillar.image}
              variant={pillar.variant}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;