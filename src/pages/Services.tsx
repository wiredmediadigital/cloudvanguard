
import { Navbar } from "@/components/Navbar";
import { Shield, Headset, Lock, Server, Database, Clock, LineChart, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";

const services = [
  {
    icon: Shield,
    title: "Professional Services",
    description: "Expert IT consulting and implementation services tailored to your business needs and goals.",
    features: [
      "IT strategy consulting",
      "Project management",
      "Implementation services",
      "Technology assessment"
    ]
  },
  {
    icon: Clock,
    title: "24/7 Managed Security Services",
    description: "Round-the-clock monitoring and management of your IT security infrastructure.",
    features: [
      "Continuous monitoring",
      "Incident response",
      "Security updates",
      "Threat prevention"
    ]
  },
  {
    icon: Lock,
    title: "Cyber Threat Intelligence Services",
    description: "Advanced threat detection and intelligence services to protect your business.",
    features: [
      "Threat detection",
      "Intelligence reporting",
      "Vulnerability assessment",
      "Security advisories"
    ]
  },
  {
    icon: LineChart,
    title: "Performance Analytics Services",
    description: "Comprehensive analytics and reporting to optimize your IT infrastructure performance.",
    features: [
      "Performance monitoring",
      "System analytics",
      "Resource optimization",
      "Trend analysis"
    ]
  },
  {
    icon: Server,
    title: "Cloud & SaaS Management",
    description: "Expert management of your cloud infrastructure and SaaS applications for optimal performance and security.",
    features: [
      "Cloud infrastructure optimization",
      "SaaS application management",
      "Cloud security",
      "Performance monitoring"
    ]
  }
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
                Our Managed IT Services
              </h1>
              <p className="text-lg text-muted-foreground animation-delay-200 animate-fade-in">
                Comprehensive IT solutions tailored to your business needs
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="glass p-6 rounded-lg animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary-foreground" />
                  </div>

                  <h3 className="font-display text-xl font-semibold mb-3">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
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
      <Footer />
    </div>
  );
};

export default Services;
