
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-green-900 to-green-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6 animate-fade-in text-white">
            Ready to Secure Your Business?
          </h2>
          
          <p className="text-lg mb-8 animation-delay-200 animate-fade-in px-4 sm:px-6 md:px-0 text-gray-100">
            Schedule a free consultation to discover how we can help protect and optimize your IT infrastructure
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="animate-fade-in animation-delay-200 w-full sm:w-auto bg-white hover:bg-gray-100 text-green-900"
              onClick={() => window.open('https://cal.com/cloudvanguard-it/15min', '_blank')}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule a Free Consultation
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="w-full sm:w-auto border-white text-white hover:bg-green-800"
              onClick={() => window.location.href = '/contact'}
            >
              Contact Sales
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
