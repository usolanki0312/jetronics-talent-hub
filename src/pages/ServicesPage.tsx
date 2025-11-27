import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import softwareDevImg from "@/assets/service-software-dev.jpg";
import teamAugmentationImg from "@/assets/service-team-augmentation.jpg";
import rapidDeploymentImg from "@/assets/service-rapid-deployment.jpg";
import qualityAssuranceImg from "@/assets/service-quality-assurance.jpg";

const services = [
  {
    title: "Software Development",
    description: "Expert developers proficient in modern technologies, ready to integrate seamlessly with your team.",
    image: softwareDevImg,
    imagePosition: "right" as const
  },
  {
    title: "Team Augmentation",
    description: "Scale your workforce quickly with skilled professionals who match your technical requirements.",
    image: teamAugmentationImg,
    imagePosition: "left" as const
  },
  {
    title: "Rapid Deployment",
    description: "Fast-track your projects with immediate access to pre-vetted talent ready to contribute from day one.",
    image: rapidDeploymentImg,
    imagePosition: "right" as const
  },
  {
    title: "Quality Assurance",
    description: "Rigorous vetting ensures every professional meets the highest standards of technical excellence.",
    image: qualityAssuranceImg,
    imagePosition: "left" as const
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

        {/* Services Sections */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-24">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 0 ? '' : 'lg:grid-flow-dense'
                  }`}
                >
                  {/* Content */}
                  <div className={service.imagePosition === "right" ? "lg:col-start-1" : "lg:col-start-2"}>
                    <h2 className="text-4xl font-bold text-foreground mb-6">
                      {service.title}
                    </h2>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Image */}
                  <div className={service.imagePosition === "right" ? "lg:col-start-2" : "lg:col-start-1 lg:row-start-1"}>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-[400px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                    </div>
                  </div>
                </div>
              ))}
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
