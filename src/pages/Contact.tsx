import { Navbar } from "@/components/Navbar";
import { Mail, Phone, MapPin, MessageSquare, Building, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Footer } from "@/components/Footer";
const Contact = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "We'll get back to you as soon as possible."
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: ""
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  return <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
          {/* Abstract Background Shapes */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10" />
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
          </div>
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <MessageSquare className="w-8 h-8 text-primary-foreground bg-[#09000e]" />
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
                Get in Touch
              </h1>
              <p className="text-lg text-muted-foreground animation-delay-200 animate-fade-in">
                Let's discuss how we can help secure and optimize your IT infrastructure
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              

              

              
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="glass p-8 rounded-xl animate-fade-in animation-delay-200 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
                <form onSubmit={handleSubmit} className="space-y-6 relative">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group">
                      <label htmlFor="name" className="block text-sm font-medium mb-2 flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        Name
                      </label>
                      <Input id="name" name="name" value={formData.name} onChange={handleChange} required className="transition-all duration-300 focus:ring-2 focus:ring-primary/50 hover:border-primary/50" />
                    </div>
                    <div className="group">
                      <label htmlFor="email" className="block text-sm font-medium mb-2 flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        Email
                      </label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="transition-all duration-300 focus:ring-2 focus:ring-primary/50 hover:border-primary/50" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group">
                      <label htmlFor="phone" className="block text-sm font-medium mb-2 flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        Phone
                      </label>
                      <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} className="transition-all duration-300 focus:ring-2 focus:ring-primary/50 hover:border-primary/50" />
                    </div>
                    <div className="group">
                      <label htmlFor="company" className="block text-sm font-medium mb-2 flex items-center gap-2">
                        <Building className="h-4 w-4" />
                        Company
                      </label>
                      <Input id="company" name="company" value={formData.company} onChange={handleChange} className="transition-all duration-300 focus:ring-2 focus:ring-primary/50 hover:border-primary/50" />
                    </div>
                  </div>

                  <div className="group">
                    <label htmlFor="message" className="block text-sm font-medium mb-2 flex items-center gap-2">
                      <MessageSquare className="h-4 w-4" />
                      Message
                    </label>
                    <Textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} required className="transition-all duration-300 focus:ring-2 focus:ring-primary/50 hover:border-primary/50 resize-none" />
                  </div>

                  <Button type="submit" size="lg" className="w-full transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] bg-gradient-to-r from-primary to-accent text-zinc-950 bg-gray-950 hover:bg-gray-800">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default Contact;