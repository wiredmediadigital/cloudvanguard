import { Navbar } from "@/components/Navbar";
import { Building2, Briefcase, Hospital, Truck, Building, Heart, Globe2, Factory, Train, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
const industries = [{
  icon: Building2,
  title: "Financial Services",
  description: "Secure and compliant IT solutions for banks, investment firms, and financial institutions.",
  features: ["Financial data security", "Regulatory compliance", "Disaster recovery", "Secure communications"]
}, {
  icon: Building,
  title: "Government & Public Sector",
  description: "Reliable IT infrastructure and security solutions for government agencies and public services.",
  features: ["Secure data management", "Compliance frameworks", "Public service platforms", "Digital transformation"]
}, {
  icon: Hospital,
  title: "Hospital & Health Care",
  description: "HIPAA-compliant IT solutions for healthcare providers and medical practices.",
  features: ["HIPAA compliance", "Electronic health records", "Medical device security", "Patient data protection"]
}, {
  icon: Globe2,
  title: "IT & Tech Services",
  description: "Advanced IT infrastructure and support for technology companies and service providers.",
  features: ["Cloud infrastructure", "DevOps solutions", "System integration", "Technical support"]
}, {
  icon: Train,
  title: "Leisure, Travel & Tourism",
  description: "Digital solutions for travel agencies, hotels, and tourism businesses.",
  features: ["Booking systems", "Customer data security", "Mobile solutions", "Payment processing"]
}, {
  icon: Factory,
  title: "Manufacturing & Distribution",
  description: "IT solutions that support modern manufacturing and distribution operations.",
  features: ["Industrial IoT support", "Supply chain systems", "Inventory management", "Quality control"]
}, {
  icon: Truck,
  title: "Transportation",
  description: "Comprehensive IT solutions for transportation and logistics companies.",
  features: ["Fleet management", "Route optimization", "Real-time tracking", "Logistics software"]
}, {
  icon: Building2,
  title: "Mining, Oil & Energy",
  description: "Specialized IT solutions for energy and resource extraction industries.",
  features: ["Operations monitoring", "Safety systems", "Resource management", "Compliance tracking"]
}, {
  icon: Briefcase,
  title: "Retail & E-commerce",
  description: "Digital solutions for modern retail and e-commerce businesses.",
  features: ["POS systems", "E-commerce platforms", "Inventory control", "Payment security"]
}, {
  icon: Phone,
  title: "Telecommunication",
  description: "IT infrastructure and support for telecommunication service providers.",
  features: ["Network management", "Service monitoring", "Infrastructure security", "Customer systems"]
}];
const Industries = () => {
  return <div className="min-h-screen">
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
              {industries.map((industry, index) => <div key={index} className="glass p-6 rounded-lg animate-slide-up" style={{
              animationDelay: `${index * 100}ms`
            }}>
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-green-900 hover:bg-green-800">
                    <industry.icon className="h-6 w-6 text-primary-foreground" />
                  </div>

                  <h3 className="font-display text-xl font-semibold mb-3">
                    {industry.title}
                  </h3>

                  <p className="text-muted-foreground mb-4">
                    {industry.description}
                  </p>

                  <ul className="space-y-2">
                    {industry.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                        {feature}
                      </li>)}
                  </ul>
                </div>)}
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
    </div>;
};
export default Industries;