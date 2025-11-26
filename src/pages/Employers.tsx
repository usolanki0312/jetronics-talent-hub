import { Target, Search, UserCheck, Zap, Shield, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const benefits = [
  {
    icon: Search,
    title: "Extensive Talent Pool",
    description: "Access to thousands of pre-vetted IT professionals across all technology stacks and experience levels."
  },
  {
    icon: UserCheck,
    title: "Rigorous Vetting",
    description: "Multi-stage screening process including technical assessments, background checks, and cultural fit evaluation."
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description: "Get qualified candidates within 48 hours. Most placements complete within 2 weeks."
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "90-day replacement guarantee on all permanent placements. Your satisfaction is our priority."
  },
  {
    icon: TrendingUp,
    title: "Scalability",
    description: "Scale your team up or down based on project demands. From one developer to an entire team."
  },
  {
    icon: Target,
    title: "Cost Efficiency",
    description: "Reduce hiring costs and time-to-hire. Pay only for successful placements with transparent pricing."
  }
];

const process = [
  {
    step: "1",
    title: "Submit Your Requirements",
    description: "Tell us about your project needs, required skills, timeline, and budget."
  },
  {
    step: "2",
    title: "Candidate Sourcing",
    description: "We search our extensive database and network to find the perfect matches."
  },
  {
    step: "3",
    title: "Screening & Vetting",
    description: "Candidates undergo technical assessments and background verification."
  },
  {
    step: "4",
    title: "Present Shortlist",
    description: "Receive 3-5 qualified candidates with detailed profiles and recommendations."
  },
  {
    step: "5",
    title: "Interview & Select",
    description: "Interview candidates and make your selection. We handle all logistics."
  },
  {
    step: "6",
    title: "Onboarding & Support",
    description: "Smooth onboarding process with ongoing support to ensure success."
  }
];

const Employers = () => {
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
                For Employers & Clients
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
                Partner with Jetronics to build exceptional technology teams. We connect you with top-tier IT talent tailored to your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground"
                  onClick={() => navigate('/contact')}
                >
                  Request Talent
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm"
                  onClick={() => navigate('/contact')}
                >
                  Submit Job Order
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Why Choose Jetronics?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We make IT staffing simple, fast, and reliable
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card 
                    key={index}
                    className="border-border bg-card hover:shadow-lg transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-card-foreground mb-3">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Our Engagement Process
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Simple, transparent, and efficient
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((item, index) => (
                <div key={index} className="relative">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Offer Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-foreground mb-8 text-center">
                What Our Clients Get
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-border bg-card">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-card-foreground mb-3">
                      Comprehensive Talent Sourcing
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Access to nationwide talent pool</li>
                      <li>• Passive candidate outreach</li>
                      <li>• Specialized niche skill sourcing</li>
                      <li>• Diversity & inclusion focused</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-border bg-card">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-card-foreground mb-3">
                      Professional Vetting
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Technical skills assessment</li>
                      <li>• Comprehensive background checks</li>
                      <li>• Reference verification</li>
                      <li>• Cultural fit evaluation</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-border bg-card">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-card-foreground mb-3">
                      Flexible Staffing Solutions
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Contract staffing</li>
                      <li>• Permanent placement</li>
                      <li>• Contract-to-hire options</li>
                      <li>• Team augmentation</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-border bg-card">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-card-foreground mb-3">
                      Ongoing Support
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Dedicated account manager</li>
                      <li>• Regular performance check-ins</li>
                      <li>• Issue resolution & mediation</li>
                      <li>• Replacement guarantee</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Build Your Team?
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Let's discuss your staffing needs and find the perfect solution for your organization
              </p>
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                onClick={() => navigate('/contact')}
              >
                Get Started Today
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Employers;
