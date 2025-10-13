import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Syarat = () => {
  const terms = [
    {
      title: "Ketentuan Umum",
      points: [
        "Penyewa wajib memiliki dan menunjukkan identitas asli yang masih berlaku (KTP & SIM A).",
        "Usia minimal penyewa adalah 21 tahun.",
        "Kendaraan hanya dapat dikemudikan oleh penyewa yang terdaftar atau pengemudi yang telah disetujui oleh Angin Mammiri Rentcar.",
        "Penyewa bertanggung jawab penuh atas segala kerusakan, kehilangan, atau biaya lain yang timbul akibat penggunaan kendaraan.",
      ],
    },
    {
      title: "Penggunaan Kendaraan",
      points: [
        "Kendaraan dilarang digunakan untuk kegiatan ilegal, balapan, atau aktivitas yang melanggar hukum di wilayah Republik Indonesia.",
        "Dilarang keras memindahtangankan atau menyewakan kembali kendaraan kepada pihak ketiga.",
        "Penggunaan kendaraan hanya diizinkan di wilayah Sulawesi Selatan, kecuali ada perjanjian khusus dengan pihak kami.",
        "Kelebihan muatan penumpang atau barang yang tidak sesuai dengan kapasitas kendaraan sangat tidak dianjurkan demi keselamatan.",
      ],
    },
    {
      title: "Pemesanan dan Pembayaran",
      points: [
        "Pemesanan dianggap sah setelah penyewa melakukan pembayaran uang muka (DP) minimal 30% dari total biaya sewa.",
        "Pelunasan biaya sewa dilakukan paling lambat saat serah terima kendaraan.",
        "Pembatalan yang dilakukan kurang dari 24 jam sebelum waktu sewa akan dikenakan potongan 50% dari total biaya sewa.",
      ],
    },
    {
      title: "Asuransi dan Kerusakan",
      points: [
        "Setiap kendaraan telah diasuransikan (All Risk). Kerusakan ringan atau berat akan dikenakan biaya klaim asuransi (OWN RISK/Deductible) sesuai ketentuan polis.",
        "Asuransi tidak menanggung kerusakan yang disebabkan oleh kelalaian penyewa (misalnya: kunci hilang, penggunaan BBM yang tidak sesuai, menerobos banjir).",
        "Penyewa wajib segera melaporkan kepada kami jika terjadi kecelakaan atau kerusakan pada kendaraan.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <header className="py-16 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Syarat & Ketentuan</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mohon baca dengan saksama syarat dan ketentuan sewa kendaraan di Angin Mammiri Rentcar untuk kenyamanan bersama.
          </p>
        </div>
      </header>

      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {terms.map((section) => (
              <div key={section.title}>
                <h2 className="text-2xl font-bold mb-4 border-l-4 border-primary pl-4">{section.title}</h2>
                <ul className="space-y-3 list-disc list-inside text-muted-foreground">
                  {section.points.map((point, index) => (
                    <li key={index}>{point}</li>
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

export default Syarat;
