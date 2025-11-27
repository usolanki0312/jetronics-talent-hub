import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-hero-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Build Your Dream Team?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-12 leading-relaxed">
            Let's discuss how Jetronixs can provide the software talent you need to achieve your goals. Contact us today for a consultation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 group"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-lg px-8 py-6 backdrop-blur-sm"
            >
              Learn More
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center text-primary-foreground">
            <div className="flex items-center justify-center gap-3">
              <Mail className="h-5 w-5" />
              <span className="font-medium">contact@jetronics.com</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Phone className="h-5 w-5" />
              <span className="font-medium">+1 (555) 123-4567</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
