
const testimonials = [
  {
    quote: "Their Microsoft 365 management has transformed how we handle our IT infrastructure. Highly recommended!",
    author: "Sarah Chen",
    position: "CTO, TechStart Solutions"
  },
  {
    quote: "Exceptional service and support. They've made our endpoint management completely hassle-free.",
    author: "Michael Rodriguez",
    position: "IT Director, Global Innovations"
  }
];

export const Testimonials = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass p-8 rounded-lg animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
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
          ))}
        </div>
      </div>
    </section>
  );
};
