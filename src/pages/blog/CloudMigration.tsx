
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CloudMigration = () => {
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
                  Cloud
                </span>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-1" />
                  March 1, 2024
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 mr-1" />
                  8 min read
                </div>
              </div>

              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Cloud Migration: A Step-by-Step Guide
              </h1>

              <div className="prose prose-lg max-w-none">
                <p className="lead">
                  A comprehensive guide to planning and executing a successful cloud migration strategy for your business.
                </p>

                <h2>Assessment and Planning</h2>
                <p>
                  Learn how to assess your current infrastructure and plan your migration strategy.
                </p>

                <h2>Choosing the Right Cloud Provider</h2>
                <p>
                  Compare major cloud providers and select the best fit for your needs.
                </p>

                <h2>Migration Strategies</h2>
                <p>
                  Explore different migration approaches: lift-and-shift, re-platforming, and re-architecting.
                </p>

                <h2>Security Considerations</h2>
                <p>
                  Understand key security considerations during and after migration.
                </p>

                <h2>Testing and Validation</h2>
                <p>
                  Learn best practices for testing and validating your migrated applications.
                </p>

                <h2>Post-Migration Optimization</h2>
                <p>
                  Optimize your cloud environment for performance and cost efficiency.
                </p>

                <h2>Conclusion</h2>
                <p>
                  Successfully migrate to the cloud while minimizing disruption and maximizing benefits.
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

export default CloudMigration;
