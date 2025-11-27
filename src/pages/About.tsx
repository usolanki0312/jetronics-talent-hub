import { Target, Heart, Users, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We maintain the highest standards in talent acquisition and client service delivery."
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "Honest, transparent relationships with both our clients and IT professionals."
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We view every engagement as a long-term partnership built on mutual success."
  },
  {
    icon: Award,
    title: "Innovation",
    description: "Leveraging cutting-edge recruitment technologies to find the perfect match."
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-hero-gradient">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl sm:text-6xl font-bold text-primary-foreground mb-6">
                About Jetronixs
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Your trusted partner in IT staffing and software services solutions
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-foreground mb-8 text-center">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At Jetronixs, our mission is to bridge the gap between exceptional IT talent and organizations seeking to drive innovation. We specialize in providing top-tier software professionals on a contract basis, enabling businesses across the USA to scale their technical capabilities efficiently and effectively.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe that the right talent can transform businesses. That's why we're committed to rigorous vetting processes, ensuring every professional we place meets the highest standards of technical excellence and cultural fit.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-foreground mb-16 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="border-border bg-card">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-card-foreground mb-3">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* History & Expertise Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-foreground mb-8 text-center">Our Expertise</h2>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Founded with a vision to revolutionize IT staffing, Jetronixs has grown to become a trusted name in software services across the United States. Our deep understanding of the technology landscape, combined with our extensive network of skilled professionals, positions us uniquely to serve both emerging startups and established enterprises.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Our Specializations:</strong>
                </p>
                <ul className="list-disc list-inside space-y-3 text-lg text-muted-foreground ml-4">
                  <li>Full-Stack Development (React, Node.js, Python, Java, .NET)</li>
                  <li>Cloud Architecture & DevOps (AWS, Azure, GCP)</li>
                  <li>Mobile Application Development (iOS, Android, React Native)</li>
                  <li>Data Engineering & Analytics</li>
                  <li>Cybersecurity & Quality Assurance</li>
                  <li>AI/ML Engineering & Implementation</li>
                </ul>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With a proven track record of over 500 successful placements and partnerships with leading technology companies, we continue to set the standard for excellence in IT staffing services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        {/* <section className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold mb-2">500+</div>
                <div className="text-primary-foreground/80">Successful Placements</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">200+</div>
                <div className="text-primary-foreground/80">Partner Companies</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">98%</div>
                <div className="text-primary-foreground/80">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">10+</div>
                <div className="text-primary-foreground/80">Years Experience</div>
              </div>
            </div>
          </div>
        </section> */}
      </main>
      <Footer />
    </div>
  );
};

export default About;
