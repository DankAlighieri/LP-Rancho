import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "../components/Logo";
import { Button } from "../components/Button";
import { navItems } from "../data/siteData";

import logo from "../assets/logoTransp.webp"

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 border-b border-sand/75 bg-cream/95 backdrop-blur w-full left-0">
      <div className="mx-auto flex min-h-[72px] w-[min(1180px,calc(100%-32px))] items-center justify-between gap-6 md:w-[min(1180px,calc(100%-40px))] lg:min-h-[82px] lg:w-[min(1180px,calc(100%-48px))]">
        <img
          src={logo}
          alt="Logo"
          className="h-12 w-auto shrink-0 object-contain drop-shadow-sm transition-transform duration-200 hover:scale-[1.2] md:h-14 lg:h-16"
         />

        <button
          className="inline-grid place-items-center rounded-[10px] border border-green-deep/15 bg-white p-2.5 text-green-deep lg:hidden"
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
              className={`relative py-2.5 after:absolute after:inset-x-0 after:bottom-0.5 after:h-0.5 after:origin-center after:rounded-full after:bg-mango-orange after:transition ${
                index === 0
                  ? "text-mango-dark after:scale-x-100 after:opacity-100"
                  : "after:scale-x-50 after:opacity-0 hover:after:scale-x-100 hover:after:opacity-100"
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
