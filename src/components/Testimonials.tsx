
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    author: "David Kim",
    position: "CTO at TechStart Solutions",
    image: "/avatars/david-kim.jpg",
    logo: "/logos/techstart.svg",
    quote: "The Microsoft 365 migration was seamless. Their team's expertise in handling complex enterprise environments made what could have been a challenging transition completely smooth."
  }, {
    author: "Sarah Chen",
    position: "IT Director at Global Innovations",
    image: "/avatars/sarah-chen.jpg",
    logo: "/logos/global-innovations.svg",
    quote: "Their security assessment revealed critical vulnerabilities we weren't aware of. The detailed remediation plan helped us strengthen our infrastructure significantly."
  }, {
    author: "Michael Rodriguez",
    position: "Security Manager at DataFlex Inc",
    image: "/avatars/michael-rodriguez.jpg",
    logo: "/logos/dataflex.svg",
    quote: "The 24/7 SOC monitoring service has been invaluable. They've detected and prevented several potential security incidents before they could impact our operations."
  }, {
    author: "Emily Watson",
    position: "CEO at CloudBase Technologies",
    image: "/avatars/emily-watson.jpg",
    logo: "/logos/cloudbase.svg",
    quote: "Their Azure cloud migration strategy was brilliant. We saw immediate improvements in performance and significant cost savings within the first month."
  }
];

export const Testimonials = () => {
  return (
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
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <div className="glass p-8 rounded-lg mx-2">
                  <div className="flex items-start gap-4 mb-6">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} alt={testimonial.author} />
                      <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                    </Avatar>
                    <img src={testimonial.logo} alt="Company logo" className="h-8 w-auto opacity-80" />
                  </div>
                  
                  <blockquote className="mb-4">
                    <p className="text-lg italic text-gray-950">
                      "{testimonial.quote}"
                    </p>
                  </blockquote>
                  
                  <div>
                    <p className="font-semibold text-gray-950">{testimonial.author}</p>
                    <p className="text-sm text-gray-950">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};
