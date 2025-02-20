
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Autoplay from "embla-carousel-autoplay";
import { useState, useEffect } from "react";

const testimonials = [/* ... keep existing code (testimonials array) */];

const trustedCompanies = [
  {
    name: "Microsoft",
    logo: "/logos/microsoft.svg"
  },
  {
    name: "IBM",
    logo: "/logos/ibm.svg"
  },
  {
    name: "Cisco",
    logo: "/logos/cisco.svg"
  },
  {
    name: "AWS",
    logo: "/logos/aws.svg"
  },
  {
    name: "Oracle",
    logo: "/logos/oracle.svg"
  },
  {
    name: "VMware",
    logo: "/logos/vmware.svg"
  }
];

// Double the array to create a seamless loop
const extendedCompanies = [...trustedCompanies, ...trustedCompanies];

export const Testimonials = () => {
  const [autoplayPlugin] = useState(() => 
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  return (
    <>
      {/* Trusted Companies Section */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <h3 className="text-center text-lg font-medium mb-8 text-gray-950">
            Trusted by Industry Leaders
          </h3>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
              skipSnaps: true,
              dragFree: true
            }}
            plugins={[autoplayPlugin]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {extendedCompanies.map((company, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/6">
                  <div className="flex items-center justify-center p-4 glass rounded-lg h-20">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="max-h-8 w-auto opacity-80 hover:opacity-100 transition-opacity"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
            What Our Clients Say
          </h2>
          
          <Carousel
            opts={{
              align: "start",
              loop: true
            }}
            className="w-full max-w-5xl mx-auto"
          >
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
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </section>
    </>
  );
};
