
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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-display font-bold text-xl">M</span>
            </div>
            <span className="font-display text-xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              MSP Solutions
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/services" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActiveLink('/services') ? 'text-primary' : 'text-foreground'
              }`}
            >
              Services
            </Link>
            <Link 
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActiveLink('/about') ? 'text-primary' : 'text-foreground'
              }`}
            >
              About
            </Link>
            <Link 
              to="/industries"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActiveLink('/industries') ? 'text-primary' : 'text-foreground'
              }`}
            >
              Industries
            </Link>
            <Link 
              to="/blog"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActiveLink('/blog') ? 'text-primary' : 'text-foreground'
              }`}
            >
              Blog
            </Link>
            <Link 
              to="/contact"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActiveLink('/contact') ? 'text-primary' : 'text-foreground'
              }`}
            >
              Contact
            </Link>
            <Button 
              variant="default" 
              size="sm"
              className="bg-primary hover:bg-primary/90 text-white"
            >
              Get Started
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/services"
              className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-primary/10 hover:text-primary ${
                isActiveLink('/services') ? 'text-primary bg-primary/10' : 'text-foreground'
              }`}
            >
              Services
            </Link>
            <Link
              to="/about"
              className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-primary/10 hover:text-primary ${
                isActiveLink('/about') ? 'text-primary bg-primary/10' : 'text-foreground'
              }`}
            >
              About
            </Link>
            <Link
              to="/industries"
              className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-primary/10 hover:text-primary ${
                isActiveLink('/industries') ? 'text-primary bg-primary/10' : 'text-foreground'
              }`}
            >
              Industries
            </Link>
            <Link
              to="/blog"
              className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-primary/10 hover:text-primary ${
                isActiveLink('/blog') ? 'text-primary bg-primary/10' : 'text-foreground'
              }`}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-primary/10 hover:text-primary ${
                isActiveLink('/contact') ? 'text-primary bg-primary/10' : 'text-foreground'
              }`}
            >
              Contact
            </Link>
            <div className="px-3 py-2">
              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-white" 
                variant="default" 
                size="sm"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
