import { Link } from "react-router-dom";
import logo from "../assets/footer logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo + tagline */}
          <div className="space-y-4">
            <Link to="/">
              <img
                src={logo}
                alt="Jetronixs Logo"
                className="h-14 w-auto object-contain sm:h-16"
              />
            </Link>
            <p className="text-primary-foreground/90 font-medium text-md leading-relaxed mb-3">
              Empowering businesses with reliable <br />& scalable IT staffing
              excellence.
            </p>

            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Your trusted partner for technology talent across the USA.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Services</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>
                <Link
                  to="/services#software-development"
                  className="hover:text-accent transition-colors"
                >
                  Software Development
                </Link>
              </li>

              <li>
                <Link
                  to="/services#team-augmentation"
                  className="hover:text-accent transition-colors"
                >
                  Team Augmentation
                </Link>
              </li>

              <li>
                <Link
                  to="/services#rapid-deployment"
                  className="hover:text-accent transition-colors"
                >
                  Rapid Deployment
                </Link>
              </li>

              <li>
                <Link
                  to="/services#quality-assurance"
                  className="hover:text-accent transition-colors"
                >
                  Quality Assurance
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Company</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>
                <Link
                  to="/about"
                  className="hover:text-accent transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-accent transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li className="leading-relaxed">contact@jetronixs.com</li>
              <li className="leading-relaxed">+1 (302) 214-7592 <br /> +1 (302) 216-2057</li>
              {/* <li className="leading-relaxed">+1 (302) 216-2057</li> */}
              <li className="leading-relaxed">
                1st F, 33/C/S-3, <br /> Scheme 78-III, Sec F, Slice 3, <br /> Indore – 452010
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>
            &copy; {new Date().getFullYear()} Jetronixs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
