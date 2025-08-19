import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface PillarCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  image?: string;
}

const PillarCard = ({ icon: Icon, title, description, image }: PillarCardProps) => {
  return (
    <Card className="group transition-all duration-300 hover:shadow-natural hover:-translate-y-2 overflow-hidden h-full flex flex-col">
      <div className="h-48 overflow-hidden flex-shrink-0">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      <CardContent className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-accent rounded-full flex-shrink-0">
            <Icon className="w-6 h-6 text-accent-foreground" />
          </div>
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        </div>
        
        <p className="text-muted-foreground leading-relaxed flex-1">{description}</p>
      </CardContent>
    </Card>
  );
};

export default PillarCard;