import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-sans font-bold text-xl">M</span>
            </div>
            <span className="font-sans text-xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              MSP Solutions
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/services" className={`text-sm font-medium transition-colors hover:text-accent ${isActiveLink('/services') ? 'text-accent' : 'text-secondary'}`}>
              Services
            </Link>
            <Link to="/about" className={`text-sm font-medium transition-colors hover:text-accent ${isActiveLink('/about') ? 'text-accent' : 'text-secondary'}`}>
              About
            </Link>
            <Link to="/industries" className={`text-sm font-medium transition-colors hover:text-accent ${isActiveLink('/industries') ? 'text-accent' : 'text-secondary'}`}>
              Industries
            </Link>
            <Link to="/blog" className={`text-sm font-medium transition-colors hover:text-accent ${isActiveLink('/blog') ? 'text-accent' : 'text-secondary'}`}>
              Blog
            </Link>
            <Link to="/contact" className={`text-sm font-medium transition-colors hover:text-accent ${isActiveLink('/contact') ? 'text-accent' : 'text-secondary'}`}>
              Contact
            </Link>
            <Button variant="default" size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground font-extralight rounded-sm">
              Get Started
            </Button>
          </div>

          <button className="md:hidden text-primary" onClick={() => setIsOpen(!isOpen)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {isOpen && <div className="md:hidden border-t border-border bg-background">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/services" className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-accent/10 hover:text-accent ${isActiveLink('/services') ? 'text-accent bg-accent/10' : 'text-secondary'}`}>
              Services
            </Link>
            <Link to="/about" className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-accent/10 hover:text-accent ${isActiveLink('/about') ? 'text-accent bg-accent/10' : 'text-secondary'}`}>
              About
            </Link>
            <Link to="/industries" className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-accent/10 hover:text-accent ${isActiveLink('/industries') ? 'text-accent bg-accent/10' : 'text-secondary'}`}>
              Industries
            </Link>
            <Link to="/blog" className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-accent/10 hover:text-accent ${isActiveLink('/blog') ? 'text-accent bg-accent/10' : 'text-secondary'}`}>
              Blog
            </Link>
            <Link to="/contact" className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-accent/10 hover:text-accent ${isActiveLink('/contact') ? 'text-accent bg-accent/10' : 'text-secondary'}`}>
              Contact
            </Link>
            <div className="px-3 py-2">
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" variant="default" size="sm">
                Get Started
              </Button>
            </div>
          </div>
        </div>}
    </nav>;
};