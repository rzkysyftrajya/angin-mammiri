import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Camera } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const fortRotterdam = "/destinasi/benteng-rotterdam.webp";
const losariBeach = "/destinasi/pantai-losari.webp";

const Destinasi = () => {
  const destinations = [
    {
      name: "Pantai Losari",
      description:
        "Ikon wisata Makassar dengan pemandangan sunset yang memukau. Tempat favorit untuk menikmati kuliner khas sambil melihat laut.",
      image: losariBeach,
      distance: "5 km dari pusat kota",
      duration: "1-2 jam",
      category: "Pantai & Kuliner",
    },
    {
      name: "Fort Rotterdam",
      description:
        "Benteng bersejarah peninggalan Belanda yang kini menjadi museum. Arsitektur klasik dengan nilai sejarah tinggi.",
      image: fortRotterdam,
      distance: "3 km dari pusat kota",
      duration: "2-3 jam",
      category: "Sejarah & Budaya",
    },
    {
      name: "Trans Studio Makassar",
      description:
        "Taman hiburan indoor terbesar di Indonesia dengan berbagai wahana seru untuk keluarga.",
      image: "/destinasi/trans-studio-makassar.webp",
      distance: "8 km dari pusat kota",
      duration: "4-6 jam",
      category: "Hiburan",
    },
    {
      name: "Pulau Samalona",
      description:
        "Pulau cantik dengan air jernih, cocok untuk snorkeling dan diving. Surga bawah laut Makassar.",
      image: "/destinasi/pulau-samalona.webp",
      distance: "7 km dari pelabuhan",
      duration: "Setengah hari",
      category: "Pantai & Diving",
    },
    {
      name: "Malino Highland",
      description:
        "Kawasan pegunungan dengan udara sejuk, perkebunan teh, dan air terjun yang indah.",
      image: "/destinasi/malino-highland.webp",
      distance: "90 km dari Makassar",
      duration: "Sehari penuh",
      category: "Pegunungan",
    },
    {
      name: "Bantimurung Waterfall",
      description:
        "Air terjun spektakuler di Taman Nasional Bantimurung-Bulusaraung, surga kupu-kupu Indonesia.",
      image: "/destinasi/bantimurung-waterfall.webp",
      distance: "50 km dari Makassar",
      duration: "4-5 jam",
      category: "Alam",
    },
  ];

  const tips = [
    "Booking mobil minimal 1 hari sebelumnya untuk destinasi jauh",
    "Paket full day lebih ekonomis untuk destinasi di luar kota",
    "Driver kami menguasai rute wisata Makassar",
    "Tersedia paket wisata custom sesuai kebutuhan",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="relative min-h-[500px] h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero-section.webp"
            alt="Angin Mammiri Hero"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/80"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Destinasi Wisata Makassar
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-95">
            Jelajahi keindahan Makassar dan sekitarnya dengan kendaraan nyaman
            dari Angin Mammiri Rentcar
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="aspect-[4/3] overflow-hidden bg-secondary relative">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading={index < 3 ? "eager" : "lazy"}
                  />
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {destination.category}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2">{destination.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {destination.description}
                  </p>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{destination.distance}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{destination.duration}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Camera className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">
                Tips Wisata dengan Rental Mobil
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {tips.map((tip, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-background rounded-lg"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary font-bold text-sm">
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-sm">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* External Links Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Informasi Wisata Makassar
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a
                href="https://disbudpar.makassarkota.go.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 border-2 border-border rounded-lg hover:border-primary transition-colors text-center"
              >
                <h3 className="font-semibold mb-2">Disbudpar Makassar</h3>
                <p className="text-sm text-muted-foreground">
                  Portal resmi pariwisata Makassar
                </p>
              </a>
              <a
                href="https://www.indonesia.travel/id/id/home"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 border-2 border-border rounded-lg hover:border-primary transition-colors text-center"
              >
                <h3 className="font-semibold mb-2">Wonderful Indonesia</h3>
                <p className="text-sm text-muted-foreground">
                  Portal wisata Indonesia
                </p>
              </a>
              <a
                href="https://www.google.com/maps/place/Makassar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 border-2 border-border rounded-lg hover:border-primary transition-colors text-center"
              >
                <h3 className="font-semibold mb-2">Google Maps</h3>
                <p className="text-sm text-muted-foreground">
                  Peta & rute wisata Makassar
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Siap Menjelajahi Makassar?
          </h2>
          <p className="text-lg mb-6 opacity-95 max-w-2xl mx-auto">
            Rental mobil sekarang dan mulai petualangan wisata Anda di Makassar
            bersama Angin Mammiri
          </p>
          <a
            href="https://wa.me/6281342222747?text=Halo%20Angin%20Mammiri%20Rentcar,%20saya%20ingin%20booking%20mobil%20untuk%20destinasi%20wisata"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors">
              Pilih Mobil
            </button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Destinasi;
