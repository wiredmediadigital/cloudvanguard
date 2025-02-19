
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Server, Shield, Clock, Users, Headset, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const ManagedIT = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
                Managed IT Services
              </h1>
              <p className="text-lg text-muted-foreground animation-delay-200 animate-fade-in">
                Comprehensive IT management and support for your business
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="glass p-6 rounded-lg animate-slide-up">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Server className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">
                  Infrastructure Management
                </h3>
                <p className="text-muted-foreground">
                  24/7 monitoring and management of your IT infrastructure to ensure optimal performance.
                </p>
              </div>

              <div className="glass p-6 rounded-lg animate-slide-up animation-delay-100">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">
                  Security Management
                </h3>
                <p className="text-muted-foreground">
                  Proactive security monitoring and management to protect your business.
                </p>
              </div>

              <div className="glass p-6 rounded-lg animate-slide-up animation-delay-200">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">
                  24/7 Support
                </h3>
                <p className="text-muted-foreground">
                  Round-the-clock technical support and assistance for your team.
                </p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <Button size="lg" className="animate-fade-in">
                Get Started
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ManagedIT;
