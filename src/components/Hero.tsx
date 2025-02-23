import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Waves } from "@/components/ui/waves-background";
export const Hero = () => {
  return <section className="pt-24 md:pt-32 pb-16 md:pb-24 relative overflow-hidden">
      {/* Interactive Waves Background */}
      <Waves lineColor="rgba(0, 0, 0, 0.1)" backgroundColor="transparent" waveSpeedX={0.02} waveSpeedY={0.01} waveAmpX={40} waveAmpY={20} friction={0.9} tension={0.01} maxCursorMove={120} xGap={12} yGap={36} className="z-0 my-[50px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 animate-fade-in text-slate-950 text-6xl">
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
    </section>;
};