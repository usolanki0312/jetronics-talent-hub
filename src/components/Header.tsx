import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Logo.png";

const Header = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/">
              <img
                src={logo}
                alt="Jentronixs Logo"
                className="h-14 w-auto object-contain sm:h-16"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-foreground hover:text-primary transition-colors font-medium ${
                isActive("/") ? "text-primary" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`text-foreground hover:text-primary transition-colors font-medium ${
                isActive("/services") ? "text-primary" : ""
              }`}
            >
              Services
            </Link>
            <Link
              to="/employers"
              className={`text-foreground hover:text-primary transition-colors font-medium ${
                isActive("/employers") ? "text-primary" : ""
              }`}
            >
              For Employers
            </Link>
            <Link
              to="/about"
              className={`text-foreground hover:text-primary transition-colors font-medium ${
                isActive("/about") ? "text-primary" : ""
              }`}
            >
              About us
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/contact">
              <Button variant="outline" className="hidden sm:inline-flex">
                Contact Us
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
