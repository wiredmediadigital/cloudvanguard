
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import ManagedIT from "./pages/services/ManagedIT";
import Cybersecurity from "./pages/services/Cybersecurity";
import CloudSolutions from "./pages/services/CloudSolutions";
import Microsoft365 from "./pages/services/Microsoft365";
import BackupRecovery from "./pages/services/BackupRecovery";
import About from "./pages/About";
import Industries from "./pages/Industries";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/managed-it" element={<ManagedIT />} />
          <Route path="/services/cybersecurity" element={<Cybersecurity />} />
          <Route path="/services/cloud-solutions" element={<CloudSolutions />} />
          <Route path="/services/microsoft-365" element={<Microsoft365 />} />
          <Route path="/services/backup-recovery" element={<BackupRecovery />} />
          <Route path="/about" element={<About />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
