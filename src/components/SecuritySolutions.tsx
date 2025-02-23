
import { Shield, Mail, Lock, Search, Server, BarChart, Cloud, AlertTriangle, Database, FileCheck, ShieldCheck } from "lucide-react";

const solutions = [
  {
    icon: Mail,
    title: "Google-to-Microsoft Email Migration",
    description: "Seamless email transition from Google Workspace to Microsoft 365"
  }, {
    icon: Shield,
    title: "Proactive Security",
    description: "24/7 proactive security monitoring and incident response"
  }, {
    icon: Shield,
    title: "Security Advisor Retainer",
    description: "Ongoing security consultation and strategic guidance"
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
  }
];

export const SecuritySolutions = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
            Professional Security Solutions
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive security solutions designed to protect your business assets and data
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-in flex flex-col" 
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 bg-green-900 hover:bg-green-800">
                <solution.icon className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {solution.title}
              </h3>
              
              <p className="text-gray-600 flex-grow">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
