import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
export const Footer = () => {
  return <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-4">CloudVanguard IT</h3>
            <p className="mb-4 text-zinc-950">
              Your trusted partner in managed IT services and cybersecurity solutions.
            </p>
            <div className="space-y-2 bg-transparent">
              <a href="mailto:support@cloudvanguard-it.com" className="flex items-center text-sm text-muted-foreground hover:text-gray-700 transition-colors\\n">
                <Mail className="h-4 w-4 mr-2" />
                support@cloudvanguard-it.com
              </a>
              <a href="tel:+1234567890" className="flex items-center text-sm text-muted-foreground hover:text-gray-700 transition-colors\n">
                <Phone className="h-4 w-4 mr-2" />
                (123) 456-7890
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/industries" className="">
                  Industries
                </Link>
              </li>
              <li>
                <Link to="/blog" className="">
                  Blog & News
                </Link>
              </li>
              <li>
                <Link to="/contact" className="">
                  Contact Us
                </Link>
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
                <Link to="/services/managed-it" className="">
                  Managed IT Services
                </Link>
              </li>
              <li>
                <Link to="/services/cybersecurity" className="">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link to="/services/cloud-solutions" className="">
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link to="/services/microsoft-365" className="">
                  Microsoft 365 Management
                </Link>
              </li>
              <li>
                <Link to="/services/backup-recovery" className="">
                  Backup & Recovery
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">
              Stay Updated
            </h3>
            <p className="text-sm mb-4 text-zinc-950">
              Subscribe to our newsletter for the latest cybersecurity insights and updates.
            </p>
            <form className="space-y-2">
              <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
              <Button type="submit" className="w-full bg-green-900 hover:bg-green-800">
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
            <p className="text-sm text-gray-950">
              © {new Date().getFullYear()} MSP Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};