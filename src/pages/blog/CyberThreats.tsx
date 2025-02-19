
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CyberThreats = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <article className="pt-32 pb-16 md:pt-40 md:pb-24 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
          <div className="container mx-auto px-4 relative">
            <Link to="/blog">
              <Button variant="ghost" className="mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
              </Button>
            </Link>
            
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center space-x-4 mb-6">
                <span className="bg-primary/10 px-3 py-1 rounded-full text-sm text-primary-foreground">
                  Security
                </span>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-1" />
                  March 5, 2024
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 mr-1" />
                  6 min read
                </div>
              </div>

              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Preparing for Cyber Threats in 2024
              </h1>

              <div className="prose prose-lg max-w-none">
                <p className="lead">
                  As cyber threats continue to evolve, organizations must stay ahead of emerging risks and strengthen their security posture.
                </p>

                <h2>Emerging Threat Landscape</h2>
                <p>
                  Understand the latest cyber threats targeting businesses and their potential impact on operations.
                </p>

                <h2>AI-Powered Attacks</h2>
                <p>
                  Learn about the rise of AI-driven cyber attacks and how to protect against them.
                </p>

                <h2>Zero Trust Architecture</h2>
                <p>
                  Explore the implementation of zero trust security models to enhance protection.
                </p>

                <h2>Supply Chain Security</h2>
                <p>
                  Address vulnerabilities in your supply chain to prevent security breaches.
                </p>

                <h2>Incident Response Planning</h2>
                <p>
                  Develop and maintain effective incident response plans to minimize damage from attacks.
                </p>

                <h2>Conclusion</h2>
                <p>
                  Stay prepared and protected against evolving cyber threats with comprehensive security measures.
                </p>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default CyberThreats;
