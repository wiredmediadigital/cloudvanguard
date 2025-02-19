
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Seamless Microsoft 365 Endpoint Management for Your Business
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animation-delay-200 animate-fade-in">
            Enhance security, streamline operations, and ensure compliance with our expert-managed Microsoft 365 solutions.
          </p>
          
          <Button
            size="lg"
            className="animation-delay-400 animate-fade-in"
          >
            Get a Free IT Assessment
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};
