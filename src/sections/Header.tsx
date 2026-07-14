import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { navItems } from "../data/siteData";

import logo from "../assets/logoTransp.webp"

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full border-b backdrop-blur transition-[background-color,border-color,box-shadow] duration-300 ${
        isScrolled
          ? "border-white/10 bg-green-dark/95 shadow-[0_12px_30px_rgba(15,35,11,0.2)]"
          : "border-sand/75 bg-cream/95"
      }`}
    >
      <div className="mx-auto flex min-h-[78px] w-[min(1180px,calc(100%-32px))] items-center justify-between gap-6 md:w-[min(1180px,calc(100%-40px))] lg:min-h-[90px] lg:w-[min(1180px,calc(100%-48px))]">
        <a href="#inicio" aria-label="Rancho Sagrada Família - início">
          <img
            src={logo}
            alt="Rancho Sagrada Família"
            className="h-[4rem] lg:h-[5rem] w-auto shrink-0 object-contain drop-shadow-sm transition-transform duration-300 hover:scale-[1.03]"
          />
        </a>

        <button
          className="inline-grid place-items-center rounded-[8px] border border-green-deep/15 bg-white p-2.5 text-green-deep lg:hidden"
          type="button"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav
          className={`absolute left-5 right-5 top-[calc(100%+1px)] grid gap-2 rounded-[14px] border border-sand/90 bg-white p-[18px] text-[0.94rem] font-bold text-green-deep shadow-soft transition lg:static lg:flex lg:items-center lg:gap-7 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none ${
            isOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-2 opacity-0 lg:visible lg:translate-y-0 lg:opacity-100"
          }`}
        >
          {navItems.map((item, index) => (
            <a
              key={item.href}
              className={`relative py-2.5 transition-colors after:absolute after:inset-x-0 after:bottom-0.5 after:h-0.5 after:origin-center after:rounded-full after:bg-mango-orange after:transition ${
                index === 0
                  ? "text-mango-dark after:scale-x-100 after:opacity-100"
                  : `${
                      isScrolled ? "text-green-deep lg:text-white" : "text-green-deep"
                    } after:scale-x-50 after:opacity-0 hover:text-mango-orange hover:after:scale-x-100 hover:after:opacity-100`
              }`}
              href={item.href}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Button href="#contato" className="mt-2 min-h-11 w-full px-5 lg:mt-0 lg:w-auto">
            Fale conosco
          </Button>
        </nav>
      </div>
    </header>
  );
}
