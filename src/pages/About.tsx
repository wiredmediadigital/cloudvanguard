import { Navbar } from "@/components/Navbar";
import { Award, Users, Building2, CheckCircle } from "lucide-react";
import { Footer } from "@/components/Footer";
const certifications = ["Microsoft Gold Partner", "CISSP Certified", "CompTIA Security+", "ITIL Foundation"];
const values = [{
  icon: Users,
  title: "Client-Focused",
  description: "We put our clients' needs first, delivering personalized IT solutions that drive business success."
}, {
  icon: Building2,
  title: "Innovation",
  description: "Continuously evolving our services to incorporate the latest technologies and best practices."
}, {
  icon: Award,
  title: "Excellence",
  description: "Committed to delivering exceptional service quality and technical expertise."
}];
const About = () => {
  return <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 animate-fade-in">About CloudVanguard IT</h1>
              <p className="text-lg animation-delay-200 animate-fade-in font-thin text-gray-950">
                Your trusted partner in IT management and digital transformation
              </p>
            </div>

            <div className="max-w-4xl mx-auto mb-20">
              <div className="glass p-8 rounded-lg animate-slide-up">
                <h2 className="font-display text-2xl font-semibold mb-4">Our Mission</h2>
                <p className="mb-6 text-gray-950 text-sm">
                  To empower businesses with reliable, secure, and innovative IT solutions that drive growth and success. We strive to be more than just a service provider – we aim to be a strategic partner in your digital journey.
                </p>
                <h2 className="font-display text-2xl font-semibold mb-4">Our Vision</h2>
                <p className="text-gray-950 text-base">
                  To be the leading managed service provider, recognized for excellence in IT solutions, cybersecurity, and customer service, helping businesses thrive in the digital age.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {values.map((value, index) => <div key={index} className="glass p-6 rounded-lg animate-slide-up" style={{
              animationDelay: `${index * 100}ms`
            }}>
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-green-900 hover:bg-green-800">
                    <value.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-950 font-normal text-sm">{value.description}</p>
                </div>)}
            </div>

            <div className="glass p-8 rounded-lg animate-slide-up">
              <h2 className="font-display text-2xl font-semibold mb-6 text-center">
                Certifications & Partnerships
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {certifications.map((cert, index) => <div key={index} className="flex items-center space-x-2 text-muted-foreground bg-slate-50">
                    <CheckCircle className="h-5 w-5 text-primary-foreground bg-zinc-950 hover:bg-zinc-800" />
                    <span className="font-thin text-gray-950">{cert}</span>
                  </div>)}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default About;