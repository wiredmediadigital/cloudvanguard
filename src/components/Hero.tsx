
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100" />
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 lg:pt-0">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 animate-fade-in bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Enterprise-Grade IT Security for Growing Businesses
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 md:mb-10 animation-delay-200 animate-fade-in px-4 sm:px-6 md:px-0 text-gray-600">
            Protect your business with managed IT services trusted by leading companies. Expert security, 24/7 support, and proven solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animation-delay-400 animate-fade-in">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-green-900 hover:bg-green-800 text-white font-semibold"
              onClick={() => window.open('https://cal.com/cloudvanguard-it/15min', '_blank')}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book a Free Consultation
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="w-full sm:w-auto border-green-900 text-green-900 hover:bg-green-50"
              onClick={() => window.location.href = '/services'}
            >
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Trusted By Section */}
          <div className="mt-16 animation-delay-600 animate-fade-in">
            <p className="text-sm font-medium text-gray-500 mb-6">TRUSTED BY INDUSTRY LEADERS</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
              <img src="/logos/microsoft.svg" alt="Microsoft" className="h-8" />
              <img src="/logos/cisco.svg" alt="Cisco" className="h-8" />
              <img src="/logos/vmware.svg" alt="VMware" className="h-8" />
              <img src="/logos/aws.svg" alt="AWS" className="h-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
