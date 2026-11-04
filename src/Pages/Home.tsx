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
  ExternalLink,
  MapPin,
  Star,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { faqs } from "../../faqData";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

const heroImage = "/hero-section.webp";
const carAvanza = "/home/toyota-avanza.png";
const carInnova = "/home/toyota-innova.png";
const carCRV = "/home/innova-zenix.png";
const googleMapsReviewsUrl =
  "https://www.google.com/maps/place/CV.+ANGIN+MAMMIRI+RENT+CAR/@-5.1891875,119.4586875,17z/data=!3m1!4b1!4m6!3m5!1s0x2dbee3d8de822141:0x709e0f4a3106c261!8m2!3d-5.1891875!4d119.4586875!16s%2Fg%2F11fk_z3k0n";

const googleReviews = [
  {
    name: "Rhyo Zoldyck",
    quote:
      "Pelayanan dari admin maupun driver sangat ramah, dengan harga yang murah tapi unit sangat terawat dan bersih.",
  },
  {
    name: "Andi Muhammad Fadhil Nur Fauzi",
    quote:
      "Pelayanan Sopir Untuk dalam & Luar kota Sangat memuaskan.",
  },
  {
    name: "Anna",
    quote:
      "Driver kami Pak Djaya sangat ramah dan berkendara dengan aman. Sangat recommended bagi yang membutuhkan sewa kendaraan.",
  },
];

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
      name: "All New Avanza",
      category: "MPV",
      capacity: "7 Penumpang",
      fuel: "Bensin",
      image: "/armada/toyota-all-new-avanza.webp",
    },
    {
      name: "Mitsubishi Xpander",
      category: "MPV",
      capacity: "7 Penumpang",
      fuel: "Bensin",
      image: "/armada/mitsubishi-xpander.webp",
    },
    {
      name: "Innova Reborn",
      category: "MPV",
      capacity: "7 Penumpang",
      fuel: "Bensin",
      image: "/armada/innova-reborn.webp",
    },
    {
      name: "Innova Zenix Hybrid",
      category: "MPV",
      capacity: "7 Penumpang",
      fuel: "Bensin",
      image: "/armada/innova-zenix.webp",
    },
    {
      name: "Toyota Fortuner",
      category: "SUV",
      capacity: "7 Penumpang",
      fuel: "Bensin",
      image: "/armada/toyota-fortuner.webp",
    },
    {
      name: "Toyota Alphard Executive Premium",
      category: "MPV Premium",
      capacity: "7 Penumpang",
      fuel: "Bensin",
      image: "/armada/toyota-alphard.webp",
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
      <section className="relative flex min-h-[540px] items-center justify-center overflow-hidden md:min-h-[620px]">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Layanan rental mobil Angin Mammiri di Makassar"
            className="w-full h-full object-cover object-center"
            loading="eager"
            fetchPriority="high"
          />
        </div>

        <div className="container relative z-10 mx-auto max-w-7xl px-4 py-20 text-center text-white lg:text-left">
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl lg:max-w-4xl">
            Rental Mobil Terpercaya di Makassar
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg opacity-95 md:text-xl lg:mx-0">
            Jelajahi keindahan Pantai Losari, sejarah Benteng Rotterdam, dan
            kuliner khas Coto Makassar dengan armada berkualitas. Angin Mammiri
            Rentcar menemani setiap petualangan Anda di Kota Daeng.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
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
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
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
                      <Users className="h-6 lg:h-7 w-6 lg:w-7 text-accent-foreground" />
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
                    <div className="absolute inset-0 bg-accent/15" />
                    <div className="absolute bottom-3 lg:bottom-4 left-4 lg:left-6">
                      <div className="w-12 lg:w-14 h-12 lg:h-14 rounded-xl bg-accent flex items-center justify-center group-hover:rotate-6 transition-transform">
                        <Award className="h-6 lg:h-7 w-6 lg:w-7 text-accent-foreground" />
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
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="mb-3 inline-flex rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-primary">
                Pilih kendaraan Anda
              </span>
              <h2 className="mb-3 text-3xl font-bold md:text-4xl">
                Armada nyaman untuk perjalanan di Makassar
              </h2>
              <p className="text-muted-foreground">
                Pilih mobil sesuai kebutuhan. Hubungi kami untuk menanyakan
                ketersediaan dan detail layanan.
              </p>
            </div>
            <Link to="/armada" className="shrink-0">
              <Button variant="outline" className="rounded-full px-6">
                Jelajahi semua armada
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featuredCars.map((car, index) => (
              <Card
                key={index}
                className="group overflow-hidden rounded-2xl border border-border/70 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="aspect-[16/10] overflow-hidden bg-secondary">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading={index < 3 ? "eager" : "lazy"}
                  />
                </div>
                <CardContent className="p-5">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <span className="rounded-full bg-secondary px-3 py-1.5 text-xs font-semibold text-primary">
                      {car.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {car.capacity}
                    </span>
                  </div>
                  <h3 className="mb-1 text-xl font-bold">{car.name}</h3>
                  <p className="mb-5 text-sm text-muted-foreground">
                    {car.fuel}
                  </p>
                  <div className="flex items-center gap-3 border-t border-border pt-4">
                    <a
                      href={`https://wa.me/6281342222747?text=${encodeURIComponent(
                        `Halo Angin Mammiri Rentcar, saya tertarik dengan ${car.name}. Bisa info ketersediaan dan detail layanannya?`,
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
                    >
                      Tanya unit ini
                      <ArrowRight className="h-4 w-4" />
                    </a>
                    <Link
                      to={`/armada/${car.name
                        .replace(/\s+/g, "-")
                        .toLowerCase()}`}
                      className="shrink-0 text-sm font-semibold text-primary hover:underline"
                    >
                      Detail
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Google Reviews Section */}
      <AnimatedSection className="bg-secondary/50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-primary shadow-sm">
                  <MapPin className="h-4 w-4" />
                  Ulasan Google Maps
                </span>
                <h2 className="mb-3 text-3xl font-bold md:text-4xl">
                  Kata pelanggan kami
                </h2>
                <p className="text-muted-foreground">
                  Beberapa ulasan pelanggan yang tampil di profil Google Maps
                  Angin Mammiri Rentcar.
                </p>
              </div>
              <a
                href={googleMapsReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-border bg-white px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-secondary md:self-auto"
              >
                Lihat semua di Google Maps
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            <div className="mb-6 flex flex-col gap-4 rounded-2xl border border-border bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:gap-6 sm:p-6">
              <div className="flex items-center gap-4">
                <span className="text-5xl font-bold tracking-tight text-foreground">
                  4,9
                </span>
                <div>
                  <div
                    className="flex items-center gap-1 text-accent"
                    aria-label="Rating 4,9 dari 5 bintang"
                  >
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    dari 5 di Google Maps
                  </p>
                </div>
              </div>
              <div className="hidden h-12 w-px bg-border sm:block" />
              <p className="text-sm leading-6 text-muted-foreground">
                <span className="font-semibold text-foreground">
                  107 ulasan
                </span>{" "}
                tercatat pada profil saat diperiksa. Rating dan jumlah ulasan
                dapat berubah.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {googleReviews.map((review) => (
                <Card
                  key={review.name}
                  className="h-full rounded-2xl border-0 bg-white shadow-sm"
                >
                  <CardContent className="flex h-full flex-col p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <div
                        className="flex items-center gap-1 text-accent"
                        aria-label="Rating 5 dari 5 bintang"
                      >
                        {Array.from({ length: 5 }).map((_, index) => (
                          <Star
                            key={index}
                            className="h-4 w-4 fill-current"
                          />
                        ))}
                      </div>
                      <span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-primary">
                        Google
                      </span>
                    </div>
                    <p className="mb-6 flex-1 text-sm leading-6 text-foreground/80">
                      “{review.quote}”
                    </p>
                    <div className="border-t border-border pt-4 text-sm font-semibold">
                      {review.name}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="lg:sticky lg:top-32">
              <span className="mb-3 inline-flex rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-primary">
                Ada yang ingin ditanyakan?
              </span>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Pertanyaan umum
              </h2>
              <p className="mb-6 text-muted-foreground">
                Informasi singkat tentang sewa mobil di Makassar. Belum
                menemukan jawaban? Tim kami siap membantu.
              </p>
              <Link to="/faq">
                <Button variant="outline" className="rounded-full px-6">
                  Buka halaman FAQ
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="rounded-2xl border border-border bg-white px-5 shadow-sm sm:px-8">
              <Accordion type="single" collapsible className="w-full">
                {faqs.slice(0, 4).map((faq) => (
                  <AccordionItem key={faq.id} value={faq.id}>
                    <AccordionTrigger className="py-5 text-left font-semibold hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="leading-6 text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Popular Destinations Section */}
      <AnimatedSection className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="mb-3 inline-flex rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-primary">
                Jelajahi Kota Daeng
              </span>
              <h2 className="mb-3 text-3xl font-bold md:text-4xl">
                Destinasi yang layak masuk rencana perjalanan
              </h2>
              <p className="text-muted-foreground">
                Dari suasana pesisir hingga jejak sejarah Makassar, pilih tempat
                yang ingin Anda kunjungi.
              </p>
            </div>
            <Link to="/destinasi" className="shrink-0">
              <Button variant="outline" className="rounded-full px-6">
                Semua destinasi
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Pantai Losari",
                description:
                  "Pantai ikonik dengan mercusuar dan kuliner laut segar",
                image: "/destinasi/pantai-losari.webp",
                category: "Wisata Alam",
              },
              {
                name: "Benteng Rotterdam",
                description:
                  "Benteng bersejarah dengan arsitektur Belanda yang megah",
                image: "/destinasi/benteng-rotterdam.webp",
                category: "Sejarah",
              },
              {
                name: "Pulau Samalona",
                description:
                  "Pulau kecil dengan pantai pasir putih dan snorkeling",
                image: "/destinasi/pulau-samalona.webp",
                category: "Wisata Alam",
              },
            ].map((destination, index) => (
              <Card
                key={index}
                className="group overflow-hidden rounded-2xl border-0 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading={index < 3 ? "eager" : "lazy"}
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-primary shadow-sm">
                    {destination.category}
                  </span>
                </div>
                <CardContent className="p-5">
                  <h3 className="mb-2 text-xl font-bold">{destination.name}</h3>
                  <p className="mb-4 text-sm leading-6 text-muted-foreground">
                    {destination.description}
                  </p>
                  <Link
                    to="/destinasi"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3"
                  >
                    Jelajahi destinasi
                    <ArrowRight className="h-4 w-4 transition-all" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Gallery Preview Section */}
      <AnimatedSection className="bg-secondary/50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="mb-3 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-primary shadow-sm">
                Sekilas perjalanan
              </span>
              <h2 className="mb-3 text-3xl font-bold md:text-4xl">
                Galeri Angin Mammiri
              </h2>
              <p className="text-muted-foreground">
                Intip dokumentasi layanan dan momen bersama pelanggan kami di
                Makassar.
              </p>
            </div>
            <Link to="/galeri" className="shrink-0">
              <Button variant="outline" className="rounded-full bg-white px-6">
                Buka galeri
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {[
              { image: "/galeri/testi-1.webp", alt: "Dokumentasi layanan 1" },
              { image: "/galeri/testi-2.webp", alt: "Dokumentasi layanan 2" },
              { image: "/galeri/testi-3.webp", alt: "Dokumentasi layanan 3" },
              { image: "/galeri/testi-4.webp", alt: "Dokumentasi layanan 4" },
              { image: "/galeri/testi-5.webp", alt: "Dokumentasi layanan 5" },
            ].map((item, index) => (
              <Link
                key={index}
                to="/galeri"
                aria-label="Lihat galeri lengkap"
                className={`group relative overflow-hidden rounded-2xl bg-white shadow-sm ${
                  index === 0
                    ? "col-span-2 aspect-[2/1] md:col-span-2 md:row-span-2 md:aspect-auto"
                    : "aspect-square"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/0 transition-colors group-hover:bg-primary/10" />
              </Link>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Latest Blog Section */}
      <AnimatedSection className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="mb-3 inline-flex rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-primary">
                Inspirasi perjalanan
              </span>
              <h2 className="mb-3 text-3xl font-bold md:text-4xl">
                Cerita dan panduan dari Makassar
              </h2>
              <p className="text-muted-foreground">
                Temukan ide perjalanan, tips rental, dan rekomendasi lokal
                sebelum berangkat.
              </p>
            </div>
            <Link to="/blog" className="shrink-0">
              <Button variant="outline" className="rounded-full px-6">
                Kunjungi blog
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              {
                title: "10 Tips Rental Mobil untuk Pemula",
                excerpt:
                  "Kenali dokumen yang perlu disiapkan dan hal yang perlu dicek sebelum menyewa mobil.",
                image: "/hero-section.webp",
                category: "Tips rental",
              },
              {
                title: "Destinasi Wisata Tersembunyi di Makassar",
                excerpt:
                  "Cari inspirasi tempat menarik untuk melengkapi perjalanan Anda di Makassar.",
                image: "/destinasi/pulau-samalona.webp",
                category: "Wisata",
              },
              {
                title: "Cara Merawat Mobil Rental Selama Perjalanan",
                excerpt:
                  "Kebiasaan sederhana untuk menjaga kendaraan tetap nyaman dan aman digunakan.",
                image: "/armada/toyota-all-new-avanza.webp",
                category: "Panduan",
              },
            ].map((post, index) => (
              <Card
                key={index}
                className="group overflow-hidden rounded-2xl border border-border/70 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="aspect-[16/10] overflow-hidden bg-secondary">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-5">
                  <div className="mb-3">
                    <span className="rounded-full bg-secondary px-3 py-1.5 text-xs font-semibold text-primary">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="mb-3 text-lg font-bold leading-snug">
                    {post.title}
                  </h3>
                  <p className="mb-5 text-sm leading-6 text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <Link
                    to="/blog"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3"
                  >
                    Baca artikel
                    <ArrowRight className="h-4 w-4 transition-all" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Travel Tips Section */}
      <AnimatedSection className="bg-secondary/60 py-16">
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
                className="border border-white bg-transparent text-white hover:bg-white/10 hover:text-white font-semibold"
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
