import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface PillarCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const PillarCard = ({ icon: Icon, title, description }: PillarCardProps) => {
  return (
    <Card className="h-full flex flex-col group transition-all duration-300 hover:shadow-natural hover:-translate-y-2 overflow-hidden">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-accent rounded-full">
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