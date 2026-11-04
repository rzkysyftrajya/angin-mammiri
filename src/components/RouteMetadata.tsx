import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const siteUrl = "https://cv.anginmammirirentcar.com";
const siteName = "Angin Mammiri Rentcar";

const pageMetadata: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Rental Mobil Makassar | Angin Mammiri Rentcar",
    description:
      "Sewa mobil di Makassar untuk wisata, perjalanan bisnis, dan kebutuhan keluarga. Lihat pilihan armada dan tanyakan ketersediaan melalui WhatsApp.",
  },
  "/armada": {
    title: "Pilihan Armada Rental Mobil Makassar | Angin Mammiri",
    description:
      "Lihat pilihan mobil rental Angin Mammiri di Makassar, dari city car hingga MPV dan kendaraan premium. Hubungi kami untuk ketersediaan dan harga.",
  },
  "/galeri": {
    title: "Galeri Armada dan Perjalanan | Angin Mammiri Rentcar",
    description:
      "Lihat galeri armada dan dokumentasi perjalanan bersama Angin Mammiri Rentcar di Makassar.",
  },
  "/testimoni": {
    title: "Testimoni Pelanggan | Angin Mammiri Rentcar Makassar",
    description:
      "Baca pengalaman pelanggan menggunakan layanan rental mobil Angin Mammiri di Makassar.",
  },
  "/destinasi": {
    title: "Destinasi Wisata Makassar | Angin Mammiri Rentcar",
    description:
      "Temukan destinasi wisata dan kuliner di Makassar sebagai referensi perjalanan Anda bersama Angin Mammiri Rentcar.",
  },
  "/blog": {
    title: "Artikel Rental Mobil dan Wisata Makassar | Angin Mammiri",
    description:
      "Baca panduan rental mobil, tips perjalanan, dan informasi wisata Makassar dari Angin Mammiri Rentcar.",
  },
  "/faq": {
    title: "FAQ Rental Mobil Makassar | Angin Mammiri Rentcar",
    description:
      "Temukan jawaban tentang syarat sewa, pilihan layanan, pemesanan, dan rental mobil Angin Mammiri di Makassar.",
  },
  "/syarat-ketentuan": {
    title: "Syarat dan Ketentuan | Angin Mammiri Rentcar",
    description:
      "Pelajari syarat dan ketentuan penggunaan layanan rental mobil Angin Mammiri Rentcar.",
  },
  "/tentang-kami": {
    title: "Tentang Angin Mammiri Rentcar Makassar",
    description:
      "Kenali Angin Mammiri Rentcar, penyedia layanan rental mobil untuk perjalanan di Makassar dan sekitarnya.",
  },
  "/hubungi-kami": {
    title: "Hubungi Angin Mammiri Rentcar | Makassar",
    description:
      "Hubungi Angin Mammiri Rentcar untuk menanyakan layanan, armada, dan pemesanan rental mobil di Makassar.",
  },
  "/layanan": {
    title: "Layanan Rental Mobil Makassar | Angin Mammiri Rentcar",
    description:
      "Lihat layanan rental mobil Angin Mammiri untuk kebutuhan perjalanan wisata, keluarga, dan bisnis di Makassar.",
  },
};

const setMetaContent = (
  selector: string,
  attribute: "name" | "property",
  key: string,
  content: string,
) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
};

const RouteMetadata = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const normalizedPath = pathname.replace(/\/+$/, "") || "/";
    const isCarRoute = normalizedPath.startsWith("/armada/");
    const page = pageMetadata[normalizedPath];
    const carName = isCarRoute
      ? normalizedPath
          .slice("/armada/".length)
          .split("/")
          .filter(Boolean)
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")
      : "";
    const title = isCarRoute
      ? `${carName} Rental di Makassar | ${siteName}`
      : page?.title ?? `Halaman Tidak Ditemukan | ${siteName}`;
    const description =
      (isCarRoute &&
        `Informasi rental ${carName} di Makassar dari Angin Mammiri Rentcar. Hubungi kami untuk menanyakan ketersediaan dan harga.`) ||
      page?.description ||
      "Halaman yang Anda cari tidak tersedia.";
    const canonicalUrl = `${siteUrl}${normalizedPath === "/" ? "/" : normalizedPath}`;

    document.title = title;
    setMetaContent('meta[name="description"]', "name", "description", description);
    setMetaContent(
      'meta[name="robots"]',
      "name",
      "robots",
      page || isCarRoute ? "index,follow" : "noindex,follow",
    );
    setMetaContent('meta[property="og:title"]', "property", "og:title", title);
    setMetaContent(
      'meta[property="og:description"]',
      "property",
      "og:description",
      description,
    );
    setMetaContent(
      'meta[property="og:url"]',
      "property",
      "og:url",
      canonicalUrl,
    );
    setMetaContent(
      'meta[name="twitter:title"]',
      "name",
      "twitter:title",
      title,
    );
    setMetaContent(
      'meta[name="twitter:description"]',
      "name",
      "twitter:description",
      description,
    );

    let canonical = document.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
  }, [pathname]);

  return null;
};

export default RouteMetadata;
