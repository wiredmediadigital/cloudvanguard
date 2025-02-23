
import { Button } from "@/components/ui/button";
import { Menu, Cloud, Calendar } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };
  return <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center">
              <Cloud className="h-8 w-8 text-green-900" />
              <span className="ml-2 text-xl font-semibold">
                <span className="text-black">Cloud</span>
                <span className="text-black">Vanguard</span>
              </span>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="">
              Home
            </Link>
            <Link to="/services" className="">
              Services
            </Link>
            <Link to="/about" className="">
              About
            </Link>
            <Link to="/industries" className="">
              Industries
            </Link>
            <Link to="/blog" className="">
              Blog
            </Link>
            <Link to="/contact" className="">
              Contact
            </Link>
            <Button 
              variant="default" 
              size="sm" 
              className="font-extralight rounded-sm text-slate-50 bg-green-900 hover:bg-green-800"
              onClick={() => window.open('https://app.cal.com/event-types', '_blank')}
            >
              <Calendar className="mr-2 h-4 w-4" />
              Book A Consultation
            </Button>
          </div>

          <button className="md:hidden text-primary" onClick={() => setIsOpen(!isOpen)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {isOpen && <div className="md:hidden border-t border-border bg-background">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-accent/10 hover:text-accent ${isActiveLink('/') ? 'text-accent bg-accent/10' : 'text-primary'}`}>
              Home
            </Link>
            <Link to="/services" className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-accent/10 hover:text-accent ${isActiveLink('/services') ? 'text-accent bg-accent/10' : 'text-primary'}`}>
              Services
            </Link>
            <Link to="/about" className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-accent/10 hover:text-accent ${isActiveLink('/about') ? 'text-accent bg-accent/10' : 'text-primary'}`}>
              About
            </Link>
            <Link to="/industries" className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-accent/10 hover:text-accent ${isActiveLink('/industries') ? 'text-accent bg-accent/10' : 'text-primary'}`}>
              Industries
            </Link>
            <Link to="/blog" className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-accent/10 hover:text-accent ${isActiveLink('/blog') ? 'text-accent bg-accent/10' : 'text-primary'}`}>
              Blog
            </Link>
            <Link to="/contact" className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-accent/10 hover:text-accent ${isActiveLink('/contact') ? 'text-accent bg-accent/10' : 'text-primary'}`}>
              Contact
            </Link>
            <div className="px-3 py-2">
              <Button 
                className="w-full bg-green-900 hover:bg-green-800 text-slate-50" 
                variant="default" 
                size="sm"
                onClick={() => window.open('https://app.cal.com/event-types', '_blank')}
              >
                <Calendar className="mr-2 h-4 w-4" />
                Book A Consultation
              </Button>
            </div>
          </div>
        </div>}
    </nav>;
};
