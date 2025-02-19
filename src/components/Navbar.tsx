
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="font-display text-xl font-semibold text-[#0039A6]">
            MSP Solutions
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="/services" className="text-sm font-medium text-gray-600 hover:text-[#0039A6] transition-colors">
              Services
            </a>
            <a href="/about" className="text-sm font-medium text-gray-600 hover:text-[#0039A6] transition-colors">
              About
            </a>
            <a href="/industries" className="text-sm font-medium text-gray-600 hover:text-[#0039A6] transition-colors">
              Industries
            </a>
            <a href="/blog" className="text-sm font-medium text-gray-600 hover:text-[#0039A6] transition-colors">
              Blog
            </a>
            <a href="/contact" className="text-sm font-medium text-gray-600 hover:text-[#0039A6] transition-colors">
              Contact
            </a>
            <Button 
              variant="default" 
              size="sm"
              className="bg-[#0039A6] hover:bg-[#002d84] text-white"
            >
              Get Started
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="/services"
              className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-[#0039A6] transition-colors"
            >
              Services
            </a>
            <a
              href="/about"
              className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-[#0039A6] transition-colors"
            >
              About
            </a>
            <a
              href="/industries"
              className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-[#0039A6] transition-colors"
            >
              Industries
            </a>
            <a
              href="/blog"
              className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-[#0039A6] transition-colors"
            >
              Blog
            </a>
            <a
              href="/contact"
              className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-[#0039A6] transition-colors"
            >
              Contact
            </a>
            <div className="px-3 py-2">
              <Button 
                className="w-full bg-[#0039A6] hover:bg-[#002d84] text-white" 
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
