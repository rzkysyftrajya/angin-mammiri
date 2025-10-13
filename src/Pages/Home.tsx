import { Link } from "react-router-dom";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Shield,
  Users,
  Clock,
  Award,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { testimonials } from "../../testimonialData";
import { faqs } from "../../faqData";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

const heroImage = "/placeholder.svg";
const carAvanza = "/placeholder.svg";
const carInnova = "/placeholder.svg";
const carCRV = "/placeholder.svg";

const AnimatedSection = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, {
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={sectionRef}
      className={`fade-in-section ${isVisible ? "is-visible" : ""} ${
        className || ""
      }`}
    >
      {children}
    </section>
  );
};

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: "Terpercaya & Aman",
      description:
        "Armada terawat dengan asuransi lengkap untuk keamanan perjalanan Anda",
    },
    {
      icon: Users,
      title: "Layanan 24/7",
      description:
        "Tim kami siap membantu Anda kapan saja untuk kenyamanan maksimal",
    },
    {
      icon: Clock,
      title: "Proses Cepat",
      description: "Booking mudah dan proses rental yang cepat tanpa ribet",
    },
    {
      icon: Award,
      title: "Harga Terbaik",
      description:
        "Tarif kompetitif dengan kualitas layanan premium di kelasnya",
    },
  ];

  const featuredCars = [
    {
      name: "Toyota Avanza",
      category: "MPV",
      capacity: "7 Kursi",
      price: "350.000",
      image: carAvanza,
    },
    {
      name: "Toyota Innova",
      category: "MPV",
      capacity: "7 Kursi",
      price: "450.000",
      image: carInnova,
    },
    {
      name: "Honda CR-V",
      category: "SUV",
      capacity: "5 Kursi",
      price: "550.000",
      image: carCRV,
    },
  ];

  const benefits = [
    "Armada mobil terawat dan bersih",
    "Driver berpengalaman mengenal rute Makassar (opsional)",
    "Tanpa biaya tersembunyi",
    "Gratis antar-jemput area Kota Daeng",
    "Fleksibel dalam perpanjangan sewa",
    "BBM sudah termasuk (paket tertentu)",
    "Pengetahuan mendalam tentang kuliner Coto Makassar",
    "Rekomendasi destinasi wisata lokal",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Angin Mammiri Hero"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Rental Mobil Terpercaya di Makassar
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-95">
            Jelajahi keindahan Pantai Losari, sejarah Benteng Rotterdam, dan
            kuliner khas Coto Makassar dengan armada berkualitas. Angin Mammiri
            Rentcar menemani setiap petualangan Anda di Kota Daeng.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/armada">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-semibold"
              >
                Lihat Armada
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/faq">
              <Button
                size="lg"
                className="bg-yellow-500 text-red-500 hover:bg-yellow-600 font-semibold"
              >
                Cara Pemesanan
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section - Unique Design */}
      <AnimatedSection className="py-20 bg-primary/5 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-4">
              Mengapa Pilih Kami?
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Pengalaman Rental yang{" "}
              <span className="text-primary">Berbeda</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Lebih dari sekadar rental mobil, kami memberikan pengalaman
              perjalanan yang tak terlupakan di Kota Daeng, dengan pengetahuan
              mendalam tentang budaya dan destinasi lokal Makassar
            </p>
          </div>

          {/* Unique Layout - Asymmetric Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 max-w-5xl mx-auto px-4">
            {/* Feature 1 - Large Card */}
            <Card className="lg:row-span-2 border-2 border-primary/20 hover:border-primary transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 group overflow-hidden max-w-full">
              <CardContent className="p-6 lg:p-8 h-full flex flex-col justify-center relative">
                <div className="absolute -right-4 lg:-right-8 -top-4 lg:-top-8 w-24 lg:w-32 h-24 lg:h-32 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-500" />
                <div className="relative">
                  <div className="w-16 lg:w-20 h-16 lg:h-20 rounded-2xl bg-primary flex items-center justify-center mb-4 lg:mb-6 group-hover:rotate-6 transition-transform duration-300">
                    <Shield className="h-8 lg:h-10 w-8 lg:w-10 text-white" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold mb-3">
                    {features[0].title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4 text-sm lg:text-base">
                    {features[0].description}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                    <span>Asuransi Lengkap</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Features 2 & 3 - Stacked Cards */}
            <div className="space-y-4 lg:space-y-6">
              <Card className="border-2 border-primary/20 hover:border-accent transition-all duration-500 hover:shadow-xl group overflow-hidden max-w-full">
                <CardContent className="p-4 lg:p-6 relative">
                  <div className="absolute -right-2 lg:-right-4 -bottom-2 lg:-bottom-4 w-16 lg:w-24 h-16 lg:h-24 bg-accent/5 rounded-full group-hover:scale-150 transition-transform duration-500" />
                  <div className="relative flex items-start gap-3 lg:gap-4">
                    <div className="w-12 lg:w-14 h-12 lg:h-14 rounded-xl bg-accent flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform">
                      <Users className="h-6 lg:h-7 w-6 lg:w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg lg:text-xl font-bold mb-2">
                        {features[1].title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {features[1].description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20 hover:border-accent transition-all duration-500 hover:shadow-xl group overflow-hidden max-w-full">
                <CardContent className="p-4 lg:p-6 relative">
                  <div className="absolute -right-2 lg:-right-4 -bottom-2 lg:-bottom-4 w-16 lg:w-24 h-16 lg:h-24 bg-accent/5 rounded-full group-hover:scale-150 transition-transform duration-500" />
                  <div className="relative flex items-start gap-3 lg:gap-4">
                    <div className="w-12 lg:w-14 h-12 lg:h-14 rounded-xl bg-primary flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform">
                      <Clock className="h-6 lg:h-7 w-6 lg:w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg lg:text-xl font-bold mb-2">
                        {features[2].title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {features[2].description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Feature 4 - Wide Card with Gradient */}
            <Card className="border-2 border-primary/20 hover:border-accent transition-all duration-500 hover:shadow-xl group overflow-hidden max-w-full">
              <CardContent className="p-0 h-full">
                <div className="h-full flex flex-col">
                  <div className="h-24 lg:h-32 bg-accent/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 to-transparent" />
                    <div className="absolute bottom-3 lg:bottom-4 left-4 lg:left-6">
                      <div className="w-12 lg:w-14 h-12 lg:h-14 rounded-xl bg-accent flex items-center justify-center group-hover:rotate-6 transition-transform">
                        <Award className="h-6 lg:h-7 w-6 lg:w-7 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4 lg:p-6 flex-1 flex flex-col justify-center">
                    <h3 className="text-lg lg:text-xl font-bold mb-2">
                      {features[3].title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {features[3].description}
                    </p>
                    <div className="flex items-center gap-2">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="w-2 h-2 rounded-full bg-accent"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stats */}
          <div className="mt-12 lg:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8 max-w-4xl mx-auto px-4">
            {[
              { number: "500+", label: "Pelanggan Puas" },
              { number: "50+", label: "Armada Tersedia" },
              { number: "4.9★", label: "Rating Google" },
              { number: "24/7", label: "Customer Service" },
            ].map((stat, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Featured Cars Section */}
      <AnimatedSection className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Armada Pilihan untuk Jelajah Makassar
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Berbagai pilihan mobil berkualitas untuk menjelajahi Pantai
              Losari, Benteng Rotterdam, dan destinasi wisata lainnya di Kota
              Daeng
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 max-w-5xl mx-auto px-4">
            {featuredCars.map((car, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-xl">{car.name}</h3>
                    <span className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded-full">
                      {car.category}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    {car.capacity}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-primary">
                        Rp {car.price}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        /hari
                      </span>
                    </div>
                    <Link to="/armada">
                      <Button size="sm">Detail</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/armada">
              <Button size="lg" variant="outline" className="font-semibold">
                Lihat Semua Armada
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Apa Kata Pelanggan Kami di Makassar?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ulasan tulus dari para pelanggan yang telah merasakan layanan kami
              dalam menjelajahi keindahan Kota Daeng.
            </p>
          </div>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto overflow-hidden"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex flex-col items-center text-center p-6">
                        <Avatar className="w-20 h-20 mb-4">
                          <AvatarImage
                            src={testimonial.image}
                            alt={testimonial.name}
                          />
                          <AvatarFallback>
                            {testimonial.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <p className="text-sm text-muted-foreground mb-4 italic">
                          \"{testimonial.comment}\"
                        </p>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {testimonial.role}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pertanyaan Umum Rental di Makassar
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Beberapa pertanyaan yang sering diajukan oleh pelanggan kami
              tentang rental mobil di Kota Daeng.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.slice(0, 3).map((faq) => (
                <AccordionItem key={faq.id} value={faq.id}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="text-center mt-8">
              <Link to="/faq">
                <Button variant="outline">Lihat Semua FAQ</Button>
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Popular Destinations Section */}
      <AnimatedSection className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Destinasi Populer di Makassar
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Jelajahi keindahan Kota Daeng dengan destinasi wisata terpopuler
              yang wajib dikunjungi saat berlibur di Makassar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: "Pantai Losari",
                description:
                  "Pantai ikonik dengan mercusuar dan kuliner laut segar",
                image: "/placeholder.svg",
                category: "Wisata Alam",
              },
              {
                name: "Benteng Rotterdam",
                description:
                  "Benteng bersejarah dengan arsitektur Belanda yang megah",
                image: "/placeholder.svg",
                category: "Sejarah",
              },
              {
                name: "Coto Makassar",
                description:
                  "Kuliner khas Makassar yang legendaris dan autentik",
                image: "/placeholder.svg",
                category: "Kuliner",
              },
              {
                name: "Mall Panakukkang",
                description: "Pusat perbelanjaan modern dengan berbagai tenant",
                image: "/placeholder.svg",
                category: "Belanja",
              },
              {
                name: "Kota Tua",
                description:
                  "Area bersejarah dengan bangunan kolonial dan museum",
                image: "/placeholder.svg",
                category: "Sejarah",
              },
              {
                name: "Pulau Samalona",
                description:
                  "Pulau kecil dengan pantai pasir putih dan snorkeling",
                image: "/placeholder.svg",
                category: "Wisata Alam",
              },
            ].map((destination, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-xl">{destination.name}</h3>
                    <span className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded-full">
                      {destination.category}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    {destination.description}
                  </p>
                  <Link to="/destinasi">
                    <Button size="sm" variant="outline" className="w-full">
                      Lihat Detail
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/destinasi">
              <Button size="lg" variant="outline" className="font-semibold">
                Lihat Semua Destinasi
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Gallery Preview Section */}
      <AnimatedSection className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pratinjau Galeri Kami
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Lihat koleksi foto armada dan momen-momen indah dari perjalanan
              pelanggan kami di Kota Daeng
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { image: "/placeholder.svg", alt: "Armada Toyota Avanza" },
              { image: "/placeholder.svg", alt: "Pantai Losari sunset" },
              { image: "/placeholder.svg", alt: "Benteng Rotterdam" },
              { image: "/placeholder.svg", alt: "Coto Makassar" },
              { image: "/placeholder.svg", alt: "Armada Honda CR-V" },
              { image: "/placeholder.svg", alt: "Wisata kuliner" },
              { image: "/placeholder.svg", alt: "Armada Toyota Innova" },
              { image: "/placeholder.svg", alt: "Momen perjalanan" },
            ].map((item, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/galeri">
              <Button size="lg" variant="outline" className="font-semibold">
                Lihat Galeri Lengkap
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Latest Blog Section */}
      <AnimatedSection className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Blog Terbaru
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Baca artikel menarik tentang tips wisata, kuliner, dan pengalaman
              perjalanan di Makassar dan sekitarnya
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "5 Tempat Makan Coto Makassar Terbaik 2024",
                excerpt:
                  "Panduan lengkap mencari coto makassar asli dengan cita rasa autentik...",
                image: "/placeholder.svg",
                date: "15 Jan 2024",
                category: "Kuliner",
              },
              {
                title: "Rute Wisata 3 Hari di Kota Daeng",
                excerpt:
                  "Itinerary lengkap menjelajahi Makassar dari Pantai Losari hingga Benteng Rotterdam...",
                image: "/placeholder.svg",
                date: "12 Jan 2024",
                category: "Wisata",
              },
              {
                title: "Tips Aman Rental Mobil di Makassar",
                excerpt:
                  "Panduan praktis memilih rental mobil terpercaya dan tips perjalanan aman...",
                image: "/placeholder.svg",
                date: "10 Jan 2024",
                category: "Tips",
              },
            ].map((post, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link to="/blog">
                    <Button size="sm" variant="outline" className="w-full">
                      Baca Selengkapnya
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/blog">
              <Button size="lg" variant="outline" className="font-semibold">
                Lihat Semua Artikel
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Travel Tips Section */}
      <AnimatedSection className="py-16 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Tips Wisata di Makassar
              </h2>
              <p className="text-muted-foreground">
                Tips praktis untuk perjalanan yang menyenangkan dan aman di Kota
                Daeng
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: "🗺️",
                  title: "Rencanakan Rute Wisata",
                  tips: [
                    "Buat itinerary harian untuk efisiensi waktu",
                    "Prioritaskan destinasi sesuai minat",
                    "Sisakan waktu untuk kuliner lokal",
                    "Pertimbangkan cuaca dan musim",
                  ],
                },
                {
                  icon: "🚗",
                  title: "Tips Rental Mobil",
                  tips: [
                    "Pilih armada sesuai jumlah penumpang",
                    "Periksa kondisi mobil sebelum berangkat",
                    "Pastikan asuransi dan dokumen lengkap",
                    "Isi BBM sebelum mengembalikan mobil",
                  ],
                },
                {
                  icon: "🍜",
                  title: "Kuliner Khas Makassar",
                  tips: [
                    "Coba coto makassar di berbagai tempat",
                    "Jangan lewatkan pallubasa dan konro",
                    "Makan di warung lokal untuk cita rasa asli",
                    "Beli oleh-oleh kuliner untuk dibawa pulang",
                  ],
                },
                {
                  icon: "📸",
                  title: "Fotografi & Dokumentasi",
                  tips: [
                    "Tangkap momen di Pantai Losari saat sunset",
                    "Foto Benteng Rotterdam dari berbagai sudut",
                    "Abadikan kuliner sebelum disantap",
                    "Gunakan filter untuk suasana tropis",
                  ],
                },
              ].map((tipCategory, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{tipCategory.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl mb-4">
                        {tipCategory.title}
                      </h3>
                      <ul className="space-y-2">
                        {tipCategory.tips.map((tip, tipIndex) => (
                          <li
                            key={tipIndex}
                            className="flex items-start gap-2 text-sm"
                          >
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Additional Services Section */}
      <AnimatedSection className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Layanan Tambahan Kami
              </h2>
              <p className="text-muted-foreground">
                Selain rental mobil, kami juga menyediakan berbagai layanan
                pendukung untuk kenyamanan perjalanan Anda di Kota Daeng
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "👨‍✈️",
                  title: "Driver Berpengalaman",
                  description:
                    "Driver lokal yang mengenal rute Makassar dengan baik dan siap antar-jemput",
                },
                {
                  icon: "🛡️",
                  title: "Asuransi Lengkap",
                  description:
                    "Perlindungan asuransi menyeluruh untuk mobil dan penumpang selama perjalanan",
                },
                {
                  icon: "⛽",
                  title: "BBM Termasuk",
                  description:
                    "Biaya bahan bakar sudah termasuk dalam paket tertentu untuk kenyamanan Anda",
                },
                {
                  icon: "🅿️",
                  title: "Area Parkir",
                  description:
                    "Layanan antar-jemput di area Kota Daeng untuk memudahkan akses Anda",
                },
                {
                  icon: "📍",
                  title: "Rekomendasi Destinasi",
                  description:
                    "Panduan lengkap destinasi wisata, kuliner, dan tempat menarik di Makassar",
                },
                {
                  icon: "🛠️",
                  title: "Maintenance Rutin",
                  description:
                    "Armada kami selalu dalam kondisi prima dengan perawatan berkala",
                },
              ].map((service, index) => (
                <Card
                  key={index}
                  className="p-6 text-center hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Benefits Section */}
      <AnimatedSection className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Keuntungan Rental di Angin Mammiri Rentcar
              </h2>
              <p className="text-muted-foreground">
                Nikmati berbagai kemudahan dan keuntungan saat menyewa mobil
                bersama kami, dengan layanan khusus untuk wisatawan di Kota
                Daeng
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4 max-w-4xl mx-auto px-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg bg-background/50 backdrop-blur"
                >
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Siap Menjelajahi Keindahan Makassar?
          </h2>
          <p className="text-lg mb-8 opacity-95 max-w-2xl mx-auto">
            Hubungi kami sekarang untuk reservasi atau konsultasi gratis tentang
            destinasi wisata terbaik di Kota Daeng. Tim kami siap membantu Anda
            merencanakan perjalanan yang tak terlupakan!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6281342222747?text=Halo%20Angin%20Mammiri%20Rentcar,%20saya%20ingin%20booking%20mobil"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-semibold"
              >
                Hubungi WhatsApp
              </Button>
            </a>
            <Link to="/faq">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-semibold"
              >
                Lihat FAQ
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
