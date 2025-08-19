import MissionSection from "@/components/MissionSection";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Mission = () => {
  return (
    <div className="min-h-screen">
      <div className="py-8 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <Link to="/">
            <Button variant="outline" className="mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
      <MissionSection />
    </div>
  );
};

export default Mission;