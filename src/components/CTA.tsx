
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6 animate-fade-in px-4 sm:px-6 md:px-0 text-gray-950">
          Let's Talk About How We Can Help You Secure Your Devices
        </h2>
        
        <Button 
          size="lg" 
          className="animate-fade-in animation-delay-200 w-full sm:w-auto bg-green-900 hover:bg-green-800 text-slate-50"
        >
          Schedule a Free Consultation
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};
