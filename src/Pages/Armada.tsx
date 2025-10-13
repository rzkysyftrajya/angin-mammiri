import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Fuel,
  Cog,
  CheckCircle2,
  Filter,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Armada = () => {
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const categories = [
    "Semua",
    "City Car",
    "LCGC & Family Car",
    "MPV & SUV",
    "Kelas Premium",
    "Armada Bisnis & Rombongan",
    "Kendaraan Khusus",
  ];

  const cars = [
    // City Car
    {
      name: "Honda Brio",
      category: "City Car",
      transmission: "Manual / Matic",
      image: "/armada/honda-brio.webp",
      capacity: "5 Penumpang",
      fuel: "Bensin",
      features: ["AC", "Audio", "Power Steering"],
    },
    {
      name: "Daihatsu Ayla",
      category: "City Car",
      transmission: "Manual / Matic",
      image: "/armada/daihatsu-ayla.webp",
      capacity: "5 Penumpang",
      fuel: "Bensin",
      features: ["AC", "Audio", "Power Steering"],
    },
    {
      name: "Toyota Agya",
      category: "City Car",
      transmission: "Manual / Matic",
      image: "/armada/toyota-agya.webp",
      capacity: "5 Penumpang",
      fuel: "Bensin",
      features: ["AC", "Audio", "Power Steering"],
    },

    // LCGC & Family Car
    {
      name: "Toyota Calya",
      category: "LCGC & Family Car",
      transmission: "Manual / Matic",
      image: "/armada/toyota-calya.webp",
      capacity: "7 Penumpang",
      fuel: "Bensin",
      features: ["AC", "Audio", "Power Steering", "Airbag"],
    },
    {
      name: "Daihatsu Sigra",
      category: "LCGC & Family Car",
      transmission: "Manual / Matic",
      image: "/armada/daihatsu-sigra.webp",
      capacity: "7 Penumpang",
      fuel: "Bensin",
      features: ["AC", "Audio", "Power Steering", "Airbag"],
    },
    {
      name: "Toyota Avanza / Daihatsu Xenia",
      category: "LCGC & Family Car",
      transmission: "Manual / Matic",
      image: "/armada/daihatsu-xenia.webp",
      capacity: "7 Penumpang",
      fuel: "Bensin",
      features: ["AC", "Audio", "Power Steering", "Airbag"],
    },
    {
      name: "Suzuki Ertiga",
      category: "LCGC & Family Car",
      transmission: "Manual / Matic",
      image: "/armada/suzuki-ertiga.webp",
      capacity: "7 Penumpang",
      fuel: "Bensin",
      features: ["AC", "Audio", "Power Steering", "Airbag"],
    },
    {
      name: "Suzuki Ertiga Hybrid",
      category: "LCGC & Family Car",
      transmission: "Manual / Matic",
      image: "/armada/suzuki-ertiga-hybrid.webp",
      capacity: "7 Penumpang",
      fuel: "Hybrid",
      features: ["AC", "Audio", "Power Steering", "Airbag", "Hybrid System"],
    },

    // MPV & SUV
    {
      name: "Mitsubishi Xpander",
      category: "MPV & SUV",
      transmission: "Manual / Matic",
      image: "/armada/mitsubishi-xpander.webp",
      capacity: "7 Penumpang",
      fuel: "Bensin",
      features: ["AC", "Audio", "Power Steering", "Airbag", "ABS"],
    },
    {
      name: "Suzuki XL7",
      category: "MPV & SUV",
      transmission: "Manual / Matic",
      image: "/armada/suzuki-xl7.webp",
      capacity: "7 Penumpang",
      fuel: "Bensin",
      features: ["AC", "Audio", "Power Steering", "Airbag", "ABS"],
    },
    {
      name: "All New Avanza",
      category: "MPV & SUV",
      transmission: "Manual / Matic",
      image: "/armada/toyota-all-new-avanza.webp",
      capacity: "7 Penumpang",
      fuel: "Bensin",
      features: ["AC", "Audio", "Power Steering", "Airbag", "ABS"],
    },
    {
      name: "Daihatsu Terios",
      category: "MPV & SUV",
      transmission: "Manual / Matic",
      image: "/armada/daihatsu-terios.webp",
      capacity: "7 Penumpang",
      fuel: "Bensin",
      features: ["AC", "Audio", "Power Steering", "Airbag", "ABS"],
    },
    {
      name: "Toyota Rush",
      category: "MPV & SUV",
      transmission: "Manual / Matic",
      image: "/armada/toyota-rush.webp",
      capacity: "7 Penumpang",
      fuel: "Bensin",
      features: ["AC", "Audio", "Power Steering", "Airbag", "ABS"],
    },

    // Kelas Premium
    {
      name: "Grand Innova Diesel",
      category: "Kelas Premium",
      transmission: "Manual / Matic",
      image: "/armada/innova-diesel.webp",
      capacity: "7 Penumpang",
      fuel: "Diesel",
      features: [
        "AC",
        "Audio",
        "Power Steering",
        "Airbag",
        "ABS",
        "Leather Seats",
      ],
    },
    {
      name: "Innova Reborn",
      category: "Kelas Premium",
      transmission: "Manual / Matic",
      image: "/armada/innova-reborn.webp",
      capacity: "7 Penumpang",
      fuel: "Bensin",
      features: [
        "AC",
        "Audio",
        "Power Steering",
        "Airbag",
        "ABS",
        "Leather Seats",
      ],
    },
    {
      name: "Innova Zenix Hybrid",
      category: "Kelas Premium",
      transmission: "Matic",
      image: "/armada/innova-zenix.webp",
      capacity: "7 Penumpang",
      fuel: "Hybrid",
      features: [
        "AC",
        "Audio",
        "Power Steering",
        "Airbag",
        "ABS",
        "Leather Seats",
        "Hybrid System",
      ],
    },
    {
      name: "Toyota Fortuner",
      category: "Kelas Premium",
      transmission: "Matic",
      image: "/armada/toyota-fortuner.webp",
      capacity: "7 Penumpang",
      fuel: "Diesel",
      features: [
        "AC",
        "Audio",
        "Power Steering",
        "Airbag",
        "ABS",
        "4WD",
        "Leather Seats",
      ],
    },
    {
      name: "Mitsubishi Pajero Sport",
      category: "Kelas Premium",
      transmission: "Matic",
      image: "/public/armada/",
      capacity: "7 Penumpang",
      fuel: "Diesel",
      features: [
        "AC",
        "Audio",
        "Power Steering",
        "Airbag",
        "ABS",
        "4WD",
        "Leather Seats",
      ],
    },

    // Armada Bisnis & Rombongan
    {
      name: "Isuzu Elf Minibus",
      category: "Armada Bisnis & Rombongan",
      transmission: "Manual",
      image: "/armada/isuzu-elf-minibus.webp",
      capacity: "15 Penumpang",
      fuel: "Diesel",
      features: ["AC", "Audio", "Power Steering", "Airbag"],
    },
    {
      name: "Toyota Hiace Commuter",
      category: "Armada Bisnis & Rombongan",
      transmission: "Manual",
      image: "/armada/toyota-hiace-commuter.webp",
      capacity: "15 Penumpang",
      fuel: "Diesel",
      features: ["AC", "Audio", "Power Steering", "Airbag"],
    },
    {
      name: "Toyota Hiace Premio",
      category: "Armada Bisnis & Rombongan",
      transmission: "Manual",
      image: "/armada/toyota-hiace-commuter (2).webp",
      capacity: "12 Penumpang",
      fuel: "Diesel",
      features: [
        "AC",
        "Audio",
        "Power Steering",
        "Airbag",
        "ABS",
        "Leather Seats",
      ],
    },

    // Kendaraan Khusus
    {
      name: "Toyota Hilux Double Cabin",
      category: "Kendaraan Khusus",
      transmission: "Manual / Matic",
      image: "/armada/toyota-hilux-double-cabin.webp",
      capacity: "5 Penumpang",
      fuel: "Diesel",
      features: [
        "AC",
        "Audio",
        "Power Steering",
        "Airbag",
        "4WD",
        "Pickup Bed",
      ],
    },
    {
      name: "Toyota Alphard Executive Premium",
      category: "Kendaraan Khusus",
      transmission: "Matic",
      image: "/armada/toyota-alphard.webp",
      capacity: "7 Penumpang",
      fuel: "Bensin",
      features: [
        "AC",
        "Audio",
        "Power Steering",
        "Airbag",
        "ABS",
        "Leather Seats",
        "Premium Sound System",
      ],
    },
  ];

  const filteredCars =
    selectedCategory === "Semua"
      ? cars
      : cars.filter((car) => car.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header Section */}
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
            Armada Kami
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-95">
            Pilihan lengkap kendaraan berkualitas untuk berbagai kebutuhan
            perjalanan Anda di Makassar dan sekitarnya
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/faq">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-semibold"
              >
                Cara Pemesanan
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a
              href="https://wa.me/6281342222747?text=Halo%20Angin%20Mammiri%20Rentcar,%20saya%20ingin%20booking%20mobil%20dari%20halaman%20armada"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-semibold"
              >
                Hubungi WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 text-primary font-semibold">
              <Filter className="h-5 w-5" />
              <span>Filter Kategori</span>
            </div>
            <div className="flex flex-wrap justify-center gap-2 max-w-4xl">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-4 py-2"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Menampilkan {filteredCars.length} kendaraan dari kategori{" "}
              {selectedCategory}
            </p>
          </div>
        </div>
      </section>

      {/* Cars Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map((car, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="aspect-[4/3] overflow-hidden bg-secondary">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-bold text-xl mb-1">{car.name}</h3>
                      <span className="text-xs bg-accent/20 text-accent-foreground px-2 py-1 rounded-full">
                        {car.category}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span>{car.capacity}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Cog className="h-4 w-4 text-primary" />
                      <span>{car.transmission}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Fuel className="h-4 w-4 text-primary" />
                      <span>{car.fuel}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs text-muted-foreground mb-2">Fitur:</p>
                    <div className="flex flex-wrap gap-1">
                      {car.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-secondary px-2 py-1 rounded"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-4 flex items-center justify-center">
                    <a
                      href="https://wa.me/6281342222747?text=Halo%20Angin%20Mammiri%20Rentcar,%20saya%20ingin%20booking%20mobil%20dari%20halaman%20armada"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Button className="bg-primary hover:opacity-90 w-full">
                        Hubungi Kami untuk Info Harga
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Syarat & Ketentuan Rental
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    Dokumen yang Diperlukan
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• KTP Asli (untuk verifikasi)</li>
                    <li>• SIM A yang masih berlaku</li>
                    <li>• Kartu Kredit atau deposit tunai</li>
                    <li>• Nomor telepon yang dapat dihubungi</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    Ketentuan Umum
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Minimal usia penyewa 21 tahun</li>
                    <li>• Durasi rental minimal 12 jam</li>
                    <li>• BBM ditanggung penyewa (kecuali paket tertentu)</li>
                    <li>• Overtime dikenakan biaya tambahan</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Armada;
