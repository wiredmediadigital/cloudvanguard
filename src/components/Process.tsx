import { ArrowRight, Monitor, Shield, Activity } from "lucide-react";
const steps = [{
  number: "01",
  title: "Assessment & Consultation",
  description: "We begin with a thorough evaluation of your Microsoft 365 environment, identifying security gaps, compliance needs, and opportunities for optimization.",
  icon: Monitor,
  features: ["Security audit", "Compliance check", "Performance analysis", "Risk assessment"]
}, {
  number: "02",
  title: "Implementation & Configuration",
  description: "Our team deploys comprehensive security policies, compliance settings, and automation workflows tailored to your business requirements.",
  icon: Shield,
  features: ["Security policies", "Compliance settings", "Automation setup", "User access control"]
}, {
  number: "03",
  title: "Ongoing Monitoring & Support",
  description: "We provide continuous monitoring, regular security audits, and responsive help desk support to ensure your environment stays secure and efficient.",
  icon: Activity,
  features: ["24/7 monitoring", "Regular audits", "Help desk support", "Performance reports"]
}];
export const Process = () => {
  return <section className="section-padding bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-16">
          <h2 className="font-display text-2xl md:text-4xl font-bold mb-4">
            How It Works
          </h2>
          <p className="px-4 md:px-0 text-gray-950">
            Our proven three-step process ensures a smooth transition to managed Microsoft 365 services
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => <div key={index} className="relative group">
              <div className="glass rounded-xl p-6 h-full transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{
            animationDelay: `${index * 200}ms`
          }}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-zinc-900 hover:bg-zinc-800">
                    <step.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <span className="font-display text-4xl font-bold text-zinc-950">
                    {step.number}
                  </span>
                </div>
                
                <h3 className="font-display text-xl font-semibold mb-3">
                  {step.title}
                </h3>
                
                <p className="mb-6 text-sm md:text-base text-gray-950">
                  {step.description}
                </p>
                
                <ul className="space-y-2">
                  {step.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary-foreground shrink-0" />
                      <span className="text-gray-950">{feature}</span>
                    </li>)}
                </ul>
              </div>
              
              {index < steps.length - 1 && <div className="hidden lg:block absolute top-1/2 right-[-1rem] w-8 h-[2px] bg-primary/20 transform translate-x-1/2">
                  <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary" />
                </div>}
            </div>)}
        </div>
      </div>
    </section>;
};