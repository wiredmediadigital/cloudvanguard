import { Navbar } from "@/components/Navbar";
import { Building2, Briefcase, Hospital, Scale, Factory } from "lucide-react";
import { Button } from "@/components/ui/button";

const industries = [
  {
    icon: Building2,
    title: "Small & Medium Businesses",
    description: "Tailored IT solutions that help SMBs compete and grow in the digital marketplace.",
    features: [
      "Cost-effective IT management",
      "Scalable solutions",
      "Business continuity planning",
      "Cloud migration services"
    ]
  },
  {
    icon: Hospital,
    title: "Healthcare",
    description: "HIPAA-compliant IT solutions for healthcare providers and medical practices.",
    features: [
      "HIPAA compliance",
      "Electronic health records security",
      "Medical device management",
      "Data backup and recovery"
    ]
  },
  {
    icon: Briefcase,
    title: "Finance",
    description: "Secure and compliant IT solutions for financial services firms.",
    features: [
      "Financial data security",
      "Regulatory compliance",
      "Disaster recovery",
      "Secure communications"
    ]
  },
  {
    icon: Scale,
    title: "Legal",
    description: "IT solutions designed for law firms and legal service providers.",
    features: [
      "Document management",
      "Client data protection",
      "Secure communication platforms",
      "Case management systems"
    ]
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "IT solutions that support modern manufacturing operations.",
    features: [
      "Industrial IoT support",
      "Production system security",
      "Supply chain integration",
      "Quality control systems"
    ]
  }
];

const Industries = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
                Industries We Serve
              </h1>
              <p className="text-lg text-muted-foreground animation-delay-200 animate-fade-in">
                Specialized IT solutions tailored to your industry's unique needs
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="glass p-6 rounded-lg animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <industry.icon className="h-6 w-6 text-primary-foreground" />
                  </div>

                  <h3 className="font-display text-xl font-semibold mb-3">
                    {industry.title}
                  </h3>

                  <p className="text-muted-foreground mb-4">
                    {industry.description}
                  </p>

                  <ul className="space-y-2">
                    {industry.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Button size="lg" className="animate-fade-in">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Industries;
