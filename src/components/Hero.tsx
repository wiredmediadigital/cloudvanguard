
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0039A6]/5" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in text-[#0039A6]">
            Leading Cybersecurity Solutions for Your Enterprise
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animation-delay-200 animate-fade-in">
            Protect your business with advanced cybersecurity and IT management solutions that evolve with emerging threats.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animation-delay-400 animate-fade-in">
            <Button
              size="lg"
              className="bg-[#0039A6] hover:bg-[#002d84] text-white w-full sm:w-auto"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#0039A6] text-[#0039A6] hover:bg-[#0039A6]/5 w-full sm:w-auto"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
