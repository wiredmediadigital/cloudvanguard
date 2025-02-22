import { Shield, Mail, Lock, Search, Server, BarChart, Cloud, AlertTriangle, Database, FileCheck, ShieldCheck } from "lucide-react";
const solutions = [{
  icon: Mail,
  title: "Google-to-Microsoft Email Migration",
  description: "Seamless email transition from Google Workspace to Microsoft 365"
}, {
  icon: Shield,
  title: "Security Advisor Retainer",
  description: "Ongoing security consultation and strategic guidance"
}, {
  icon: Shield,
  title: "Security Advisor Retainer",
  description: "24/7 proactive security monitoring and incident response"
}, {
  icon: Search,
  title: "SOC Analyst Retainer",
  description: "Dedicated security operations center monitoring"
}, {
  icon: AlertTriangle,
  title: "Tenable Vulnerability Management",
  description: "Comprehensive vulnerability scanning and management"
}, {
  icon: Server,
  title: "Defederate Domain From Godaddy 365",
  description: "Domain separation and migration services"
}, {
  icon: BarChart,
  title: "Microsoft Security Score Improvement",
  description: "Enhance your security posture and compliance"
}, {
  icon: Cloud,
  title: "Email Migration with BitTitan",
  description: "Professional email migration services"
}, {
  icon: ShieldCheck,
  title: "Microsoft Phishing & Malware Investigations",
  description: "Advanced threat detection and response"
}, {
  icon: Database,
  title: "Active Directory Health Check",
  description: "Comprehensive AD infrastructure assessment"
}, {
  icon: FileCheck,
  title: "Active Directory Security Assessment",
  description: "In-depth security analysis and recommendations"
}, {
  icon: Lock,
  title: "O365 Email Protections with Proofpoint",
  description: "Enhanced email security and threat protection"
}];
export const SecuritySolutions = () => {
  return <section className="section-padding bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-950">
          We Offer Professional Security Solutions
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => <div key={index} className="glass p-6 rounded-lg flex flex-col animate-fade-in hover:shadow-xl transition-shadow duration-300" style={{
          animationDelay: `${index * 100}ms`
        }}>
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-green-900 hover:bg-green-800">
                <solution.icon className="h-6 w-6 text-[#f0f0f0]" />
              </div>
              
              <h3 className="text-lg font-semibold mb-2 text-gray-950">
                {solution.title}
              </h3>
              
              <p className="text-sm text-gray-700">
                {solution.description}
              </p>
            </div>)}
        </div>
      </div>
    </section>;
};