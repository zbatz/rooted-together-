import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 px-4 bg-gradient-nature text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Plant Seeds of Change?
        </h2>
        
        <p className="text-xl mb-8 opacity-95 leading-relaxed">
          Join the growing network of schools transforming education through nature-based learning. 
          Together, we can cultivate a generation prepared to care for our planet.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button variant="hero" size="lg" className="px-8 py-6 text-lg font-semibold group">
            Start Your Garden Program
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="heroSecondary" size="lg" className="px-8 py-6 text-lg font-semibold">
            Learn More About Implementation
          </Button>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-lg mb-4 opacity-90">Get in touch to bring Rooted Together to your school</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm opacity-80">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>contact@rootedtogether.org</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+1 (555) 123-GROW</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;