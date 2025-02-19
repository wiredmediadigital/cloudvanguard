
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Mail, Users, Calendar, FileText, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const Microsoft365 = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
                Microsoft 365 Management
              </h1>
              <p className="text-lg text-muted-foreground animation-delay-200 animate-fade-in">
                Comprehensive management and support for your Microsoft 365 environment
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="glass p-6 rounded-lg animate-slide-up">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">
                  Email Management
                </h3>
                <p className="text-muted-foreground">
                  Complete email management and security solutions for Microsoft 365.
                </p>
              </div>

              <div className="glass p-6 rounded-lg animate-slide-up animation-delay-100">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">
                  User Management
                </h3>
                <p className="text-muted-foreground">
                  Efficient user access and license management for your organization.
                </p>
              </div>

              <div className="glass p-6 rounded-lg animate-slide-up animation-delay-200">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">
                  Configuration & Support
                </h3>
                <p className="text-muted-foreground">
                  Expert configuration and ongoing support for Microsoft 365 services.
                </p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <Button size="lg" className="animate-fade-in">
                Get Microsoft 365 Support
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Microsoft365;
