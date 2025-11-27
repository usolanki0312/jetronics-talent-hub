import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="py-24 bg-hero-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Ready to Build Your Dream Team?
          </motion.h2>
          <motion.p 
            className="text-xl text-primary-foreground/90 mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            Let's discuss how Jetronixs can provide the software talent you need to achieve your goals. Contact us today for a consultation.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 group"
              onClick={() => window.location.href = '/contact'}
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-8 justify-center text-primary-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          >
            <div className="flex items-center justify-center gap-3">
              <Mail className="h-5 w-5" />
              <span className="font-medium">contact@jetronics.com</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Phone className="h-5 w-5" />
              <span className="font-medium">+1 (555) 123-4567</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
