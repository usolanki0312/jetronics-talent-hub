import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import logo from "../assets/Logo.png";

const Header = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const [isOpen, setIsOpen] = useState(false);

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
            
            {/* Mobile Menu */}
            <Drawer open={isOpen} onOpenChange={setIsOpen}>
              <DrawerTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader className="text-left">
                  <DrawerTitle>Menu</DrawerTitle>
                  <DrawerClose asChild>
                    <Button variant="ghost" size="icon" className="absolute right-4 top-4">
                      <X className="h-6 w-6" />
                    </Button>
                  </DrawerClose>
                </DrawerHeader>
                <div className="flex flex-col space-y-4 p-6">
                  <Link
                    to="/"
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium transition-colors ${
                      isActive("/") ? "text-primary" : "text-foreground hover:text-primary"
                    }`}
                  >
                    Home
                  </Link>
                  <Link
                    to="/services"
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium transition-colors ${
                      isActive("/services") ? "text-primary" : "text-foreground hover:text-primary"
                    }`}
                  >
                    Services
                  </Link>
                  <Link
                    to="/employers"
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium transition-colors ${
                      isActive("/employers") ? "text-primary" : "text-foreground hover:text-primary"
                    }`}
                  >
                    For Employers
                  </Link>
                  <Link
                    to="/about"
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium transition-colors ${
                      isActive("/about") ? "text-primary" : "text-foreground hover:text-primary"
                    }`}
                  >
                    About us
                  </Link>
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    <Button variant="outline" className="w-full">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
