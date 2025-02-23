
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { SecuritySolutions } from "@/components/SecuritySolutions";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Waves } from "@/components/ui/waves-background";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Global waves background */}
      <Waves
        lineColor="rgba(0, 0, 0, 0.03)"
        backgroundColor="transparent"
        waveSpeedX={0.015}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={24}
        yGap={48}
        className="fixed inset-0 z-0 pointer-events-none"
      />
      
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Benefits />
        <SecuritySolutions />
        <Process />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
