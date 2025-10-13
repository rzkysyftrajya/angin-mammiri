import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const heroImage = "/placeholder.svg";
const losariBeach = "/placeholder.svg";
const fortRotterdam = "/placeholder.svg";

const Blog = () => {
  const blogPosts = [
    {
      title: "10 Tips Rental Mobil untuk Pemula",
      excerpt:
        "Panduan lengkap untuk Anda yang baru pertama kali menggunakan jasa rental mobil. Mulai dari dokumen yang diperlukan hingga etika berkendara.",
      image: heroImage,
      date: "15 Januari 2025",
      author: "Admin Angin Mammiri",
      category: "Tips & Trik",
      readTime: "5 menit",
    },
    {
      title: "Destinasi Wisata Tersembunyi di Makassar",
      excerpt:
        "Jelajahi tempat-tempat indah di Makassar yang belum banyak dikunjungi wisatawan. Sempurna untuk petualangan yang berbeda.",
      image: losariBeach,
      date: "12 Januari 2025",
      author: "Tim Redaksi",
      category: "Wisata",
      readTime: "7 menit",
    },
    {
      title: "Cara Merawat Mobil Rental Selama Perjalanan",
      excerpt:
        "Tips praktis untuk menjaga kondisi mobil rental tetap prima selama perjalanan Anda. Tanggung jawab bersama untuk kenyamanan bersama.",
      image: heroImage,
      date: "8 Januari 2025",
      author: "Admin Angin Mammiri",
      category: "Tips & Trik",
      readTime: "4 menit",
    },
    {
      title: "Kuliner Khas Makassar yang Wajib Dicoba",
      excerpt:
        "Panduan lengkap kuliner Makassar dari Coto Makassar hingga Pisang Epe. Termasuk rekomendasi tempat terbaik untuk mencicipinya.",
      image: losariBeach,
      date: "5 Januari 2025",
      author: "Tim Redaksi",
      category: "Kuliner",
      readTime: "6 menit",
    },
    {
      title: "Perbandingan Tipe Mobil untuk Berbagai Kebutuhan",
      excerpt:
        "Memilih mobil yang tepat untuk perjalanan Anda. Dari city car untuk solo traveler hingga MPV untuk keluarga besar.",
      image: fortRotterdam,
      date: "1 Januari 2025",
      author: "Admin Angin Mammiri",
      category: "Panduan",
      readTime: "8 menit",
    },
    {
      title: "Itinerary 3 Hari 2 Malam di Makassar",
      excerpt:
        "Rencana perjalanan lengkap untuk menjelajahi Makassar dalam 3 hari. Termasuk estimasi budget dan tips hemat.",
      image: losariBeach,
      date: "28 Desember 2024",
      author: "Tim Redaksi",
      category: "Wisata",
      readTime: "10 menit",
    },
  ];

  const categories = ["Semua", "Tips & Trik", "Wisata", "Kuliner", "Panduan"];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="relative py-16 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Blog Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Blog & Artikel
          </h1>
          <p className="text-lg opacity-95">
            Tips, panduan, dan informasi menarik seputar rental mobil dan wisata
            di Makassar
          </p>
        </div>
      </section>

      {/* Categories Filter */}
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

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="aspect-[16/10] overflow-hidden bg-secondary relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                  </div>

                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      {post.readTime} baca
                    </span>
                    <button className="text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Baca Selengkapnya
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Berlangganan Newsletter</h2>
            <p className="text-muted-foreground mb-6">
              Dapatkan artikel terbaru, tips wisata, dan promo spesial langsung
              di email Anda
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Email Anda"
                className="flex-1 px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:opacity-90 transition-opacity">
                Berlangganan
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Sumber Informasi Lainnya
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a
                href="https://www.kompas.com/tag/makassar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 border-2 border-border rounded-lg hover:border-primary transition-colors text-center"
              >
                <h3 className="font-semibold mb-2">Kompas Makassar</h3>
                <p className="text-sm text-muted-foreground">
                  Berita terkini Makassar
                </p>
              </a>
              <a
                href="https://travel.detik.com/domestic-destination/d-sulawesi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 border-2 border-border rounded-lg hover:border-primary transition-colors text-center"
              >
                <h3 className="font-semibold mb-2">Detik Travel</h3>
                <p className="text-sm text-muted-foreground">
                  Artikel wisata Sulawesi
                </p>
              </a>
              <Link
                to="/destinasi"
                className="p-6 border-2 border-border rounded-lg hover:border-primary transition-colors text-center"
              >
                <h3 className="font-semibold mb-2">Destinasi Kami</h3>
                <p className="text-sm text-muted-foreground">
                  Panduan wisata Makassar
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
