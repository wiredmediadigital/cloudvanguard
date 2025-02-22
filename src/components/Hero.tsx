
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 relative overflow-hidden">
      {/* Background Image Container */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: `url('/lovable-uploads/087ce171-da37-4e4c-995f-bf04bc28f1c9.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: '0.1'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 z-1" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 animate-fade-in">
            Your Trusted Partner in Advanced Cyber Security Solutions
          </h1>
          
          <p className="text-base md:text-xl mb-6 md:mb-8 animation-delay-200 animate-fade-in px-4 md:px-0 text-gray-950">
            Specializing in Microsoft Azure, O365, and Intune with over 10 years of experience in securing and optimizing IT infrastructures.
          </p>
          
          <Button size="lg" className="animation-delay-400 animate-fade-in w-full md:w-auto bg-green-900 hover:bg-green-800">
            Get a Free IT Assessment
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};
