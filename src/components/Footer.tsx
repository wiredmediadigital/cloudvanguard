
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-4">
              MSP Solutions
            </h3>
            <p className="text-muted-foreground mb-4">
              Your trusted partner in managed IT services and cybersecurity solutions.
            </p>
            <div className="space-y-2">
              <a href="mailto:contact@mspsolutions.com" className="flex items-center text-sm text-muted-foreground hover:text-primary-foreground transition-colors">
                <Mail className="h-4 w-4 mr-2" />
                contact@mspsolutions.com
              </a>
              <a href="tel:+1234567890" className="flex items-center text-sm text-muted-foreground hover:text-primary-foreground transition-colors">
                <Phone className="h-4 w-4 mr-2" />
                (123) 456-7890
              </a>
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2" />
                123 Business Ave, Suite 100<br />New York, NY 10001
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-sm text-muted-foreground hover:text-primary-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="text-sm text-muted-foreground hover:text-primary-foreground transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="/industries" className="text-sm text-muted-foreground hover:text-primary-foreground transition-colors">
                  Industries
                </a>
              </li>
              <li>
                <a href="/blog" className="text-sm text-muted-foreground hover:text-primary-foreground transition-colors">
                  Blog & News
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm text-muted-foreground hover:text-primary-foreground transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/services#managed-it" className="text-sm text-muted-foreground hover:text-primary-foreground transition-colors">
                  Managed IT Services
                </a>
              </li>
              <li>
                <a href="/services#cybersecurity" className="text-sm text-muted-foreground hover:text-primary-foreground transition-colors">
                  Cybersecurity
                </a>
              </li>
              <li>
                <a href="/services#cloud" className="text-sm text-muted-foreground hover:text-primary-foreground transition-colors">
                  Cloud Solutions
                </a>
              </li>
              <li>
                <a href="/services#microsoft365" className="text-sm text-muted-foreground hover:text-primary-foreground transition-colors">
                  Microsoft 365 Management
                </a>
              </li>
              <li>
                <a href="/services#backup" className="text-sm text-muted-foreground hover:text-primary-foreground transition-colors">
                  Backup & Recovery
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">
              Stay Updated
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to our newsletter for the latest cybersecurity insights and updates.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button type="submit" className="w-full">
                Subscribe
              </Button>
            </form>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} MSP Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-sm text-muted-foreground hover:text-primary-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-sm text-muted-foreground hover:text-primary-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
