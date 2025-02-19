
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Process />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
