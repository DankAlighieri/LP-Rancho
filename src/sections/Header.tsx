import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "../components/Logo";
import { Button } from "../components/Button";
import { navItems } from "../data/siteData";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />

        <button
          className="menu-toggle"
          type="button"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={`site-nav ${isOpen ? "site-nav-open" : ""}`}>
          {navItems.map((item, index) => (
            <a
              key={item.href}
              className={index === 0 ? "is-active" : ""}
              href={item.href}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Button href="#contato" className="header-cta">
            Fale conosco
          </Button>
        </nav>
      </div>
    </header>
  );
}
