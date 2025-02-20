
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 animate-fade-in">
            Your Trusted Partner in Advanced Cyber Security Solutions
          </h1>
          
          <p className="text-base md:text-xl mb-6 md:mb-8 animation-delay-200 animate-fade-in px-4 md:px-0 text-gray-950">
            Specializing in Microsoft Azure, O365, and Intune with over 10 years of experience in securing and optimizing IT infrastructures.
          </p>
          
          <Button size="lg" className="animation-delay-400 animate-fade-in w-full md:w-auto">
            Get a Free IT Assessment
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};
