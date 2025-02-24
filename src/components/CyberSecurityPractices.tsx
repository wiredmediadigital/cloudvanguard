
import { Shield, Lock, Eye, AlertTriangle } from "lucide-react";
const practices = [{
  title: "Integrated platform for IT and security",
  description: "Cloud-based backup protects your critical data"
}, {
  title: "Regular Security Audits",
  description: "Conduct frequent security assessments to identify and address potential vulnerabilities."
}, {
  title: "Data Encryption",
  description: "Implement end-to-end encryption for sensitive data both in transit and at rest."
}, {
  title: "Automated patch management for cross-OS",
  description: "Regular security awareness training for all staff members to maintain a strong security culture."
}];
export const CyberSecurityPractices = () => {
  return <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-950">Keep your Infrastructure Secure </h2>
            <div className="space-y-6">
              {practices.map((practice, index) => <div key={index} className="glass p-4 rounded-lg animate-fade-in" style={{
              animationDelay: `${index * 100}ms`
            }}>
                  <h3 className="font-display text-lg font-semibold mb-2">
                    {practice.title}
                  </h3>
                  <p className="text-sm sm:text-base">
                    {practice.description}
                  </p>
                </div>)}
            </div>
          </div>
          
          <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80" alt="Cybersecurity visualization" className="w-full h-full object-cover rounded-xl animate-fade-in animation-delay-200" />
          </div>
        </div>
      </div>
    </section>;
};
