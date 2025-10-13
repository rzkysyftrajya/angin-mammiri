import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, Car, User, Clock, Shield, Star } from "lucide-react";

const Layanan = () => {
  const services = [
    {
      icon: Car,
      title: "Sewa Mobil Lepas Kunci",
      description: "Nikmati kebebasan menjelajahi Makassar dengan menyetir sendiri. Armada kami terawat dan siap untuk petualangan Anda.",
      features: ["Armada terawat & bersih", "Asuransi All Risk", "Harga kompetitif", "Proses booking mudah"],
    },
    {
      icon: User,
      title: "Sewa Mobil dengan Supir",
      description: "Duduk santai dan nikmati perjalanan Anda. Supir kami berpengalaman, ramah, dan menguasai rute-rute terbaik di Makassar.",
      features: ["Supir profesional & ramah", "Menguasai destinasi wisata", "Tepat waktu", "Bebas dari lelah menyetir"],
    },
    {
      icon: Clock,
      title: "Antar-Jemput Bandara",
      description: "Layanan antar-jemput dari dan ke Bandara Sultan Hasanuddin. Mulai atau akhiri perjalanan Anda di Makassar tanpa repot.",
      features: ["Penjemputan tepat waktu", "Harga tetap (tanpa biaya tersembunyi)", "Kenyamanan ekstra setelah penerbangan", "Tersedia 24/7"],
    },
    {
      icon: Shield,
      title: "Rental Mobil Pernikahan",
      description: "Jadikan hari spesial Anda lebih berkesan dengan mobil pernikahan premium kami. Tampil elegan dan mewah di momen bahagia Anda.",
      features: ["Pilihan mobil premium", "Dekorasi mobil (opsional)", "Supir profesional berseragam", "Paket sewa fleksibel"],
    },
    {
      icon: Star,
      title: "Paket Wisata Makassar",
      description: "Jelajahi destinasi terbaik di Makassar dengan paket wisata kami. Termasuk mobil, supir, dan itinerary yang bisa disesuaikan.",
      features: ["Itinerary fleksibel", "Kunjungan ke destinasi populer", "Rekomendasi kuliner lokal", "Harga paket lebih hemat"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <header className="py-16 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Layanan Kami</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Solusi lengkap untuk semua kebutuhan transportasi dan perjalanan Anda di Kota Makassar.
          </p>
        </div>
      </header>

      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-card p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold">{service.title}</h2>
                </div>
                <p className="text-sm text-muted-foreground mb-4 h-20">{service.description}</p>
                <ul className="space-y-2 text-sm">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Layanan;
