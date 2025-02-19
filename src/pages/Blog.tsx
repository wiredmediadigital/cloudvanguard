
import { Navbar } from "@/components/Navbar";
import { Calendar, Clock, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";

const articles = [
  {
    title: "10 Essential Microsoft 365 Security Best Practices",
    excerpt: "Learn the key security features and settings to protect your organization's Microsoft 365 environment.",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Security"
  },
  {
    title: "The Future of Remote Work: Managing Distributed Teams",
    excerpt: "Discover effective strategies for managing and securing remote workforces using modern IT solutions.",
    date: "March 10, 2024",
    readTime: "7 min read",
    category: "Management"
  },
  {
    title: "Preparing for Cyber Threats in 2024",
    excerpt: "Stay ahead of emerging cybersecurity threats with our comprehensive guide to protection and prevention.",
    date: "March 5, 2024",
    readTime: "6 min read",
    category: "Security"
  },
  {
    title: "Cloud Migration: A Step-by-Step Guide",
    excerpt: "Everything you need to know about moving your business operations to the cloud safely and efficiently.",
    date: "March 1, 2024",
    readTime: "8 min read",
    category: "Cloud"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
                Latest Insights & Updates
              </h1>
              <p className="text-lg text-muted-foreground animation-delay-200 animate-fade-in">
                Stay informed about IT security, best practices, and industry trends
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {articles.map((article, index) => (
                <div
                  key={index}
                  className="glass p-6 rounded-lg animate-slide-up group cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-primary/10 px-3 py-1 rounded-full text-sm text-primary-foreground">
                      {article.category}
                    </span>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {article.date}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      {article.readTime}
                    </div>
                  </div>

                  <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary-foreground transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-muted-foreground mb-4">
                    {article.excerpt}
                  </p>

                  <Button variant="ghost" className="group-hover:text-primary-foreground transition-colors p-0">
                    Read More <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
