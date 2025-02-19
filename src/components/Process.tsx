
const steps = [
  {
    number: "01",
    title: "Assessment & Consultation",
    description: "We evaluate your Microsoft 365 environment."
  },
  {
    number: "02",
    title: "Implementation & Configuration",
    description: "Deploy security policies, compliance settings, and automation."
  },
  {
    number: "03",
    title: "Ongoing Monitoring & Support",
    description: "24/7 monitoring, regular audits, and help desk support."
  }
];

export const Process = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
          How It Works
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">
                <span className="font-display text-6xl font-bold text-primary/20">
                  {step.number}
                </span>
              </div>
              
              <h3 className="font-display text-xl font-semibold mb-2">
                {step.title}
              </h3>
              
              <p className="text-muted-foreground">
                {step.description}
              </p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 right-0 w-full h-0.5 bg-primary/10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
