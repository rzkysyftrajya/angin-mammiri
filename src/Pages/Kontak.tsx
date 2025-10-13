import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";

const Kontak = () => {
  const gmapsUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.47582685306!2d119.45829361744383!3d-5.1876251000000035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbee251f6b16003%3A0x81010a7d04dd9c59!2sAngingmamiri%20-%20Rental%20Mobil%20Makassar!5e0!3m2!1sid!2sid!4v1760310542279!5m2!1sid!2sid";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <header className="relative py-16 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/placeholder.svg"
            alt="Kontak Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hubungi Kami</h1>
          <p className="text-lg opacity-95 max-w-2xl mx-auto">
            Kami siap membantu Anda 24/7. Jangan ragu untuk menghubungi kami
            melalui form, telepon, atau kunjungi langsung kantor kami.
          </p>
        </div>
      </header>

      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-card p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Kirim Pesan</h2>
              <form className="space-y-4">
                <Input placeholder="Nama Lengkap" />
                <Input type="email" placeholder="Alamat Email" />
                <Input placeholder="Subjek" />
                <Textarea placeholder="Pesan Anda" rows={5} />
                <a
                  href="https://wa.me/6281342222747?text=Halo%20Angin%20Mammiri%20Rentcar,%20saya%20ingin%20bertanya%20tentang%20layanan%20rental%20mobil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button type="submit" className="w-full">
                    Kirim Pesan
                  </Button>
                </a>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Informasi Kontak</h2>
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <span>
                      Jl. Minasa Upa No.9 Komp m1, Gn. Sari, Kec. Rappocini,
                      Kota Makassar, Sulawesi Selatan 90233
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-primary" />
                    <div>
                      <p>081342222747</p>
                      <p>082222208747</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-primary" />
                    <span>info@anginmammiri.com</span>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Lokasi Kami</h2>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-md">
                  <iframe
                    src={gmapsUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Kontak;
