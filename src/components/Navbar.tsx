import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Armada", path: "/armada" },
    { name: "Galeri", path: "/galeri" },
    { name: "Testimoni", path: "/testimoni" },
    { name: "Destinasi", path: "/destinasi" },
    { name: "Blog", path: "/blog" },
    { name: "FAQ", path: "/faq" },
    { name: "Hubungi Kami", path: "/hubungi-kami" },
  ];

  const isActive = (path: string) =>
    location.pathname === path || location.pathname.startsWith(`${path}/`);

  return (
    <>
      <nav
        aria-label="Navigasi utama"
        className="fixed inset-x-0 top-0 z-50 px-0 xl:top-3 xl:px-3"
      >
        <div className="relative mx-auto max-w-7xl border-b border-border bg-white px-4 text-foreground shadow-sm sm:px-5 xl:rounded-full xl:border xl:px-3 xl:shadow-lg xl:shadow-slate-900/10">
          <div className="flex h-16 items-center justify-between gap-3 xl:h-[60px]">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex min-w-0 shrink-0 items-center gap-2 font-bold text-sm text-primary transition-opacity hover:opacity-80 sm:text-base"
            >
              <img
                src="/logo.png"
                alt=""
                aria-hidden="true"
                className="h-8 w-8 shrink-0 rounded-full bg-white object-contain p-0.5"
              />
              <span className="max-w-[145px] truncate sm:max-w-none">
                Angin Mammiri
                <span className="hidden sm:inline"> Rentcar</span>
              </span>
            </Link>

            <div className="hidden items-center gap-1 xl:flex">
              {navLinks
                .filter((link) => link.path !== "/")
                .map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    aria-current={isActive(link.path) ? "page" : undefined}
                    className={`flex items-center gap-2 whitespace-nowrap rounded-full px-2.5 py-2 text-sm font-medium transition-colors 2xl:px-3 ${
                      isActive(link.path)
                        ? "text-primary"
                        : "text-foreground/75 hover:bg-secondary hover:text-primary"
                    }`}
                  >
                    {isActive(link.path) && (
                      <span className="h-2 w-2 rounded-full bg-accent" />
                    )}
                    {link.name}
                  </Link>
                ))}
            </div>

            <div className="hidden shrink-0 xl:block">
              <a
                href="https://wa.me/6281342222747?text=Halo%20Angin%20Mammiri%20Rentcar,%20saya%20ingin%20bertanya%20tentang%20layanan%20rental%20mobil"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="h-10 rounded-full bg-accent px-5 font-semibold text-accent-foreground hover:bg-accent/90">
                  Pesan Sekarang
                </Button>
              </a>
            </div>

            <button
              type="button"
              aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              className="shrink-0 rounded-full p-2 text-primary transition-colors hover:bg-secondary xl:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>

          {mobileMenuOpen && (
            <div
              id="mobile-navigation"
              className="border-t border-border px-1 pb-3 pt-2 xl:hidden"
            >
              <div className="flex flex-col">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    aria-current={isActive(link.path) ? "page" : undefined}
                    className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                      isActive(link.path)
                        ? "bg-secondary text-primary"
                        : "text-foreground/75 hover:bg-secondary hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <a
                href="https://wa.me/6281342222747?text=Halo%20Angin%20Mammiri%20Rentcar,%20saya%20ingin%20bertanya%20tentang%20layanan%20rental%20mobil"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block"
              >
                <Button className="h-11 w-full rounded-full bg-accent font-semibold text-accent-foreground hover:bg-accent/90">
                  Pesan via WhatsApp
                </Button>
              </a>
            </div>
          )}
        </div>
      </nav>
      <div aria-hidden="true" className="h-16 xl:h-[84px]" />
    </>
  );
};

export default Navbar;
