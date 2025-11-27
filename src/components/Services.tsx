import { Card, CardContent } from "@/components/ui/card";
import { Code, Users, Zap, Shield } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Software Development",
    description: "Expert developers proficient in modern technologies, ready to integrate seamlessly with your team.",
  },
  {
    icon: Users,
    title: "Team Augmentation",
    description: "Scale your workforce quickly with skilled professionals who match your technical requirements.",
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description: "Fast-track your projects with immediate access to pre-vetted talent ready to contribute from day one.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Rigorous vetting ensures every professional meets the highest standards of technical excellence.",
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive software staffing solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="border-border bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
