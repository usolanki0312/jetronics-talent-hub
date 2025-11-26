import { Check } from "lucide-react";

const benefits = [
  "Thoroughly vetted professionals with proven track records",
  "Flexible contract terms that adapt to your project needs",
  "Rapid onboarding process - start in days, not weeks",
  "US-based talent with deep technical expertise",
  "Dedicated support throughout the engagement",
  "Transparent pricing with no hidden fees",
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Why Choose Jetronics?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We understand that finding the right talent is critical to your success. That's why we've built a reputation for delivering exceptional professionals who not only meet but exceed expectations.
            </p>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 animate-fade-in"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-foreground font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-hero-gradient rounded-2xl p-8 text-primary-foreground shadow-2xl">
              <div className="space-y-8">
                <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
                  <div className="text-5xl font-bold mb-2">500+</div>
                  <div className="text-primary-foreground/80">Successful Placements</div>
                </div>
                <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
                  <div className="text-5xl font-bold mb-2">98%</div>
                  <div className="text-primary-foreground/80">Client Satisfaction Rate</div>
                </div>
                <div className="animate-fade-in" style={{ animationDelay: '600ms' }}>
                  <div className="text-5xl font-bold mb-2">24/7</div>
                  <div className="text-primary-foreground/80">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
