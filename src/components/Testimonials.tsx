import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
const testimonials = [{
  quote: "Their Microsoft 365 management has transformed how we handle our IT infrastructure. The team's expertise and proactive support have been invaluable to our organization.",
  author: "Sarah Chen",
  position: "CTO, TechStart Solutions",
  image: "/avatars/sarah-chen.jpg",
  logo: "/logos/techstart.svg"
}, {
  quote: "Exceptional service and support. They've made our endpoint management completely hassle-free and significantly improved our security posture.",
  author: "Michael Rodriguez",
  position: "IT Director, Global Innovations",
  image: "/avatars/michael-rodriguez.jpg",
  logo: "/logos/global-innovations.svg"
}, {
  quote: "The transition to cloud infrastructure was seamless. Their team's dedication to security and efficiency is unmatched in the industry.",
  author: "Emily Watson",
  position: "CEO, DataFlex Systems",
  image: "/avatars/emily-watson.jpg",
  logo: "/logos/dataflex.svg"
}, {
  quote: "Outstanding cybersecurity solutions and Microsoft 365 management. They've helped us achieve and maintain compliance with ease.",
  author: "David Kim",
  position: "Operations Manager, SecureNet",
  image: "/avatars/david-kim.jpg",
  logo: "/logos/securenet.svg"
}];
const trustedCompanies = [{
  name: "TechStart Solutions",
  logo: "/logos/techstart.svg"
}, {
  name: "Global Innovations",
  logo: "/logos/global-innovations.svg"
}, {
  name: "DataFlex Systems",
  logo: "/logos/dataflex.svg"
}, {
  name: "SecureNet",
  logo: "/logos/securenet.svg"
}, {
  name: "CloudBase",
  logo: "/logos/cloudbase.svg"
}, {
  name: "Digital Frontier",
  logo: "/logos/digital-frontier.svg"
}];
export const Testimonials = () => {
  return <>
      {/* Trusted Companies Section */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <h3 className="text-center text-lg font-medium mb-8 text-gray-950">
            Trusted by Industry Leaders
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {trustedCompanies.map((company, index) => <div key={index} className="flex items-center justify-center p-4 glass rounded-lg animate-fade-in h-20" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <img src={company.logo} alt={company.name} className="max-h-8 w-auto opacity-80 hover:opacity-100 transition-opacity" />
              </div>)}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
            What Our Clients Say
          </h2>
          
          <Carousel opts={{
          align: "start",
          loop: true
        }} className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="glass p-8 rounded-lg mx-2">
                    <div className="flex items-start gap-4 mb-6">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={testimonial.image} alt={testimonial.author} />
                        <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                      </Avatar>
                      <img src={testimonial.logo} alt="Company logo" className="h-8 w-auto opacity-80" />
                    </div>
                    
                    <blockquote className="mb-4">
                      <p className="text-lg italic text-muted-foreground">
                        "{testimonial.quote}"
                      </p>
                    </blockquote>
                    
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </CarouselItem>)}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </section>
    </>;
};