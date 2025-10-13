import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Home from "@/Pages/Home";
import Armada from "@/Pages/Armada";
import Galeri from "@/Pages/Galeri";
import Testimoni from "@/Pages/Testimoni";
import Destinasi from "@/Pages/Destinasi";
import Blog from "@/Pages/Blog";
import FAQ from "@/Pages/FAQ";
import Syarat from "@/Pages/Syarat";
import Tentang from "@/Pages/Tentang";
import Kontak from "@/Pages/Kontak";
import Layanan from "@/Pages/Layanan";
import NotFound from "@/Pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/armada" element={<Armada />} />
          <Route path="/galeri" element={<Galeri />} />
          <Route path="/testimoni" element={<Testimoni />} />
          <Route path="/destinasi" element={<Destinasi />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/syarat-ketentuan" element={<Syarat />} />
          <Route path="/tentang-kami" element={<Tentang />} />
          <Route path="/hubungi-kami" element={<Kontak />} />
          <Route path="/layanan" element={<Layanan />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
