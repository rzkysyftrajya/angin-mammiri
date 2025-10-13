import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Users, Map, Compass, Heart } from "lucide-react";

const Tentang = () => {
  const team = [
    { name: "Daeng Ical", role: "Founder & CEO", image: "/placeholder.svg" },
    {
      name: "Andi Besse",
      role: "Customer Service Head",
      image: "/placeholder.svg",
    },
    {
      name: "Budi Santoso",
      role: "Operational Manager",
      image: "/placeholder.svg",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Pelayanan Terbaik",
      description:
        "Kami percaya bahwa kepuasan pelanggan adalah segalanya. Tim kami berdedikasi untuk memberikan layanan yang ramah, responsif, dan profesional.",
    },
    {
      icon: Compass,
      title: "Fokus pada Makassar",
      description:
        "Sebagai putra daerah, kami memiliki pengetahuan mendalam tentang Makassar dan sekitarnya, memastikan Anda mendapatkan pengalaman lokal terbaik.",
    },
    {
      icon: Users,
      title: "Komunitas",
      description:
        "Kami bukan hanya bisnis, tapi bagian dari komunitas. Kami berkomitmen untuk tumbuh bersama dan mendukung pariwisata lokal.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <header className="relative min-h-[500px] h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center overflow-hidden">
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
            Tentang Angin Mammiri Rentcar
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-95">
            Lebih dari sekadar rental mobil, kami adalah partner perjalanan Anda
            untuk menjelajahi keindahan otentik Makassar.
          </p>
        </div>
      </header>

      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Our Story Section */}
          <section className="max-w-4xl mx-auto mb-20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Cerita Kami</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Angin Mammiri Rentcar lahir dari kecintaan kami terhadap kota
                  Makassar. Nama "Anging Mammiri'", yang berarti "angin
                  sepoi-sepoi" dalam bahasa Makassar, adalah doa dan harapan
                  kami agar dapat memberikan kesejukan dan kenyamanan dalam
                  setiap perjalanan Anda.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Berawal dari beberapa unit mobil, kami tumbuh berkat
                  kepercayaan pelanggan. Kami berkomitmen untuk terus
                  menyediakan armada terbaik dan layanan yang tulus, sehangat
                  sambutan masyarakat Makassar.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/placeholder.svg"
                  alt="Tim Angin Mammiri"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="max-w-5xl mx-auto mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Nilai-Nilai Kami</h2>
              <p className="text-muted-foreground">
                Prinsip yang menjadi pemandu layanan kami.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value) => (
                <div key={value.title} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Meet the Team Section */}
          <section className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Tim Kami</h2>
              <p className="text-muted-foreground">
                Wajah-wajah di balik layanan Angin Mammiri.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              {team.map((member) => (
                <div key={member.name} className="text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4 shadow-md">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Tentang;
