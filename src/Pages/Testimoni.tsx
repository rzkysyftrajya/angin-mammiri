import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { testimonials, stats } from "../../testimonialData";

const Testimoni = () => {
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
            Testimoni Customer
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-95">
            Kepuasan customer adalah prioritas utama kami. Lihat apa kata mereka
            tentang layanan Angin Mammiri Rentcar
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="relative overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                <CardContent className="p-6 flex-1 flex flex-col">
                  {testimonial.video && (
                    <div className="aspect-video mb-4">
                      <iframe
                        className="w-full h-full rounded-lg"
                        src={`https://www.youtube.com/embed/${
                          testimonial.video.split("v=")[1]
                        }`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  )}
                  <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/10" />

                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonial.rating
                            ? "fill-accent text-accent"
                            : "text-muted"
                        }`}
                      />
                    ))}
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">
                    "{testimonial.comment}"
                  </p>

                  <div className="border-t pt-4 flex items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src={testimonial.image}
                        alt={testimonial.name}
                      />
                      <AvatarFallback>
                        {testimonial.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Review Platforms */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Temukan Kami di</h2>
            <p className="text-muted-foreground mb-8">
              Baca lebih banyak review dari customer kami di platform-platform
              berikut
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-white border-2 border-border rounded-lg font-semibold hover:border-primary transition-colors"
              >
                Google Reviews
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-white border-2 border-border rounded-lg font-semibold hover:border-primary transition-colors"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-white border-2 border-border rounded-lg font-semibold hover:border-primary transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ingin Berbagi Pengalaman Anda?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Feedback Anda sangat berarti bagi kami untuk terus meningkatkan
            kualitas layanan
          </p>
          <a
            href="https://wa.me/6281342222747?text=Halo%20Angin%20Mammiri%20Rentcar,%20saya%20ingin%20memberikan%20testimoni%20atau%20review"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:opacity-90 transition-opacity">
              Tulis Review
            </button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimoni;
