import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Database, RefreshCw, HardDrive, Cloud, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
const BackupRecovery = () => {
  return <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
                Backup & Recovery Solutions
              </h1>
              <p className="text-lg text-muted-foreground animation-delay-200 animate-fade-in">
                Secure backup and disaster recovery solutions for business continuity
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="glass p-6 rounded-lg animate-slide-up">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-green-900 hover:bg-green-800">
                  <Database className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">
                  Data Backup
                </h3>
                <p className="text-muted-foreground">
                  Automated and secure backup solutions for all your business data.
                </p>
              </div>

              <div className="glass p-6 rounded-lg animate-slide-up animation-delay-100">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-green-900 hover:bg-green-800">
                  <RefreshCw className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">
                  Disaster Recovery
                </h3>
                <p className="text-muted-foreground">
                  Comprehensive disaster recovery planning and implementation.
                </p>
              </div>

              <div className="glass p-6 rounded-lg animate-slide-up animation-delay-200">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-green-900 hover:bg-green-800">
                  <Cloud className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">
                  Cloud Backup
                </h3>
                <p className="text-muted-foreground">
                  Secure cloud-based backup solutions with quick recovery options.
                </p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <Button size="lg" className="animate-fade-in bg-green-900 hover:bg-green-800">
                Protect Your Data
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default BackupRecovery;