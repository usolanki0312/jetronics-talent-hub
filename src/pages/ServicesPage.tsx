import { Code, Users, Briefcase, Clock, CheckCircle, Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const services = [
  {
    icon: Briefcase,
    title: "Contract Staffing",
    description: "Flexible IT professionals for short-term projects and peak demand periods. Scale your team up or down based on project needs.",
    features: [
      "Immediate availability of pre-vetted talent",
      "Flexible engagement terms (weeks to months)",
      "No long-term commitment required",
      "Direct project cost control"
    ]
  },
  {
    icon: Users,
    title: "Permanent Placement",
    description: "Find the perfect full-time addition to your team. We handle the entire recruitment process from sourcing to onboarding.",
    features: [
      "Comprehensive candidate screening",
      "Cultural fit assessment",
      "90-day placement guarantee",
      "Ongoing support post-placement"
    ]
  },
  {
    icon: Clock,
    title: "Contract-to-Hire",
    description: "Evaluate talent before making a permanent commitment. Try before you buy with our flexible contract-to-hire solutions.",
    features: [
      "Risk-free trial period",
      "Seamless conversion process",
      "Reduced hiring risk",
      "Lower total cost of acquisition"
    ]
  },
  {
    icon: Code,
    title: "IT Consulting",
    description: "Expert technology consulting services to guide your digital transformation and optimize your IT infrastructure.",
    features: [
      "Technology strategy & planning",
      "Architecture design & review",
      "Process optimization",
      "Technology stack recommendations"
    ]
  },
  {
    icon: Settings,
    title: "Managed Services",
    description: "End-to-end management of your IT operations. Focus on your core business while we handle your technology needs.",
    features: [
      "24/7 infrastructure monitoring",
      "Proactive maintenance & support",
      "Security & compliance management",
      "Regular performance reporting"
    ]
  },
  {
    icon: CheckCircle,
    title: "Recruitment Process Outsourcing (RPO)",
    description: "Outsource your entire IT recruitment function to our expert team. Scale your hiring capabilities without overhead.",
    features: [
      "End-to-end recruitment management",
      "Dedicated recruitment team",
      "Employer branding support",
      "Metrics & analytics reporting"
    ]
  }
];

const ServicesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-hero-gradient">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl sm:text-6xl font-bold text-primary-foreground mb-6">
                Our Services
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Comprehensive IT staffing and software services solutions tailored to your business needs
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card 
                    key={index}
                    className="border-border bg-card hover:shadow-xl transition-all duration-300"
                  >
                    <CardHeader>
                      <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-6">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let's discuss which service best fits your needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={() => navigate('/contact')}
                >
                  Contact Us
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => navigate('/employers')}
                >
                  For Employers
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
