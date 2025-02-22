import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Mail, Users, Calendar, FileText, Settings, Shield, Cloud, Lock, MonitorSmartphone, Database, AlertCircle, Binary } from "lucide-react";
import { Button } from "@/components/ui/button";
const services = [{
  icon: Cloud,
  title: "Configure Microsoft Windows 365",
  description: "Expert configuration and management of Windows 365 Cloud PC environments for your organization."
}, {
  icon: MonitorSmartphone,
  title: "Azure Virtual Desktop Configuration",
  description: "Comprehensive setup and optimization of Azure Virtual Desktop infrastructure."
}, {
  icon: Lock,
  title: "Configure Microsoft PIM",
  description: "Implementation of Privileged Identity Management for enhanced security control."
}, {
  icon: Shield,
  title: "Configure Defender for Cloud Apps",
  description: "Advanced setup of Microsoft Defender for comprehensive cloud application security."
}, {
  icon: Users,
  title: "Defender for Identity Configuration",
  description: "Identity protection through Microsoft Defender security solutions."
}, {
  icon: Mail,
  title: "Office 365 Security Assessment",
  description: "Thorough security evaluation of Office 365 environments and implementations."
}, {
  icon: Database,
  title: "Active Directory Security Assessment",
  description: "Complete security analysis of Active Directory infrastructure and policies."
}, {
  icon: Settings,
  title: "Intune All-In-One Deployment",
  description: "Full implementation of Microsoft Intune for device management."
}, {
  icon: Shield,
  title: "Configure Defender for Endpoint",
  description: "Setup and optimization of endpoint protection through Microsoft Defender."
}, {
  icon: AlertCircle,
  title: "Legacy Authentication Analysis",
  description: "Analysis and secure disablement of legacy authentication methods."
}, {
  icon: Binary,
  title: "Azure Sentinel Deployment",
  description: "Complete deployment and configuration of Azure Sentinel security solutions."
}];
const Microsoft365 = () => {
  return <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
                Microsoft 365 Management
              </h1>
              <p className="mb-8 animation-delay-200 animate-fade-in text-lg text-gray-950 font-thin">
                Complete Microsoft Security & Configuration Solutions
              </p>
              <p className="text-base animation-delay-300 animate-fade-in font-normal text-gray-950">
                Expertly configuring and securing Microsoft environments, we offer specialized services in Windows 365, Azure, PIM, Defender for Cloud Apps, Office 365, Active Directory, Intune, and more.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => <div key={index} className="glass p-6 rounded-lg animate-slide-up hover:shadow-lg transition-all duration-300" style={{
              animationDelay: `${index * 100}ms`
            }}>
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-green-900 hover:bg-green-800">
                    <service.icon className="h-6 w-6 text-[#f0f0f0]" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-zinc-900">
                    {service.description}
                  </p>
                </div>)}
            </div>

            <div className="mt-16 text-center">
              <Button size="lg" className="animate-fade-in bg-green-900 hover:bg-green-800">Schedule A Consultation</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default Microsoft365;