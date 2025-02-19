
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const RemoteWork = () => {
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
                  Management
                </span>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-1" />
                  March 10, 2024
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 mr-1" />
                  7 min read
                </div>
              </div>

              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
                The Future of Remote Work: Managing Distributed Teams
              </h1>

              <div className="prose prose-lg max-w-none">
                <p className="lead">
                  As remote work becomes increasingly prevalent, organizations must adapt their management strategies to effectively lead distributed teams while maintaining security and productivity.
                </p>

                <h2>Building a Strong Remote Work Foundation</h2>
                <p>
                  Establishing clear communication channels, workflows, and expectations is crucial for remote team success. This includes implementing the right tools and technologies to support collaboration.
                </p>

                <h2>Security Considerations</h2>
                <p>
                  Remote work introduces new security challenges. Learn how to implement robust security measures while maintaining workflow efficiency.
                </p>

                <h2>Communication Strategies</h2>
                <p>
                  Effective communication is the cornerstone of successful remote team management. Discover best practices for keeping teams connected and aligned.
                </p>

                <h2>Technology Infrastructure</h2>
                <p>
                  Explore the essential tools and platforms needed to support productive remote work environments.
                </p>

                <h2>Team Engagement</h2>
                <p>
                  Learn strategies for maintaining team morale, fostering collaboration, and building strong relationships in virtual environments.
                </p>

                <h2>Performance Management</h2>
                <p>
                  Discover effective approaches to managing and measuring performance in remote teams.
                </p>

                <h2>Conclusion</h2>
                <p>
                  The future of work is increasingly remote, and organizations that adapt their management strategies will thrive in this new landscape.
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

export default RemoteWork;
