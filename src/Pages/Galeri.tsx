import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const carAvanza = "/placeholder.svg";
const carInnova = "/placeholder.svg";
const carCRV = "/placeholder.svg";
const heroImage = "/placeholder.svg";

const Galeri = () => {
  const galleryImages = [
    {
      src: carAvanza,
      alt: "Toyota Avanza - Tampak Samping",
      category: "Armada",
    },
    {
      src: carInnova,
      alt: "Toyota Innova - Interior Nyaman",
      category: "Armada",
    },
    { src: carCRV, alt: "Honda CR-V - Eksterior Mewah", category: "Armada" },
    {
      src: heroImage,
      alt: "Kantor Angin Mammiri Rentcar",
      category: "Fasilitas",
    },
    {
      src: carAvanza,
      alt: "Proses Serah Terima Kendaraan",
      category: "Layanan",
    },
    {
      src: carInnova,
      alt: "Tim Angin Mammiri yang Profesional",
      category: "Tim",
    },
    {
      src: carCRV,
      alt: "Dokumentasi Perjalanan Customer",
      category: "Customer",
    },
    { src: heroImage, alt: "Area Parkir Angin Mammiri", category: "Fasilitas" },
    { src: carAvanza, alt: "Perawatan Rutin Armada", category: "Layanan" },
  ];

  const categories = [
    "Semua",
    "Armada",
    "Fasilitas",
    "Layanan",
    "Tim",
    "Customer",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="relative py-16 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Galeri Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Galeri Kami</h1>
          <p className="text-lg opacity-95">
            Lihat koleksi foto armada, fasilitas, dan dokumentasi layanan Angin
            Mammiri Rentcar
          </p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  index === 0
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary hover:bg-primary/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-secondary cursor-pointer"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="font-medium">{image.alt}</p>
                    <span className="text-xs text-white/80">
                      {image.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ingin Lihat Langsung?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Kunjungi kantor kami atau hubungi tim kami untuk melihat langsung
            armada dan fasilitas yang tersedia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6281342222747?text=Halo%20Angin%20Mammiri%20Rentcar,%20saya%20ingin%20melihat%20galeri%20dan%20bertanya%20tentang%20layanan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:opacity-90 transition-opacity">
                Hubungi Kami
              </button>
            </a>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-colors"
            >
              Lihat Lokasi
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Galeri;
