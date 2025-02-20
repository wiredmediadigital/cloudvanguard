import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
export const CTA = () => {
  return <section className="section-padding bg-slate-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display md:text-4xl font-bold mb-6 animate-fade-in px-4 md:px-0 text-gray-950 text-3xl">
          Ready to secure and streamline your Microsoft 365 environment?
        </h2>
        
        <Button size="lg" className="animate-fade-in animation-delay-200 bg-accent hover:bg-accent/90 text-accent-foreground w-full md:w-auto">
          Schedule a Free Consultation
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>;
};