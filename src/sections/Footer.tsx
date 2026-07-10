import { Instagram, Mail, Phone } from "lucide-react";
import { Logo } from "../components/Logo";
import { navItems } from "../data/siteData";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>Produção responsável e certificada no Vale do São Francisco.</p>
        </div>
        <div>
          <h2>Navegação</h2>
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <div>
          <h2>Informações</h2>
          <a href="#qualidade">Qualidade</a>
          <a href="#exportacao">Exportação</a>
          <a href="#contato">Contato</a>
          <a href="#privacidade">Política de Privacidade</a>
        </div>
        <div>
          <h2>Contato</h2>
          <a href="https://wa.me/5574999330190" target="_blank" rel="noreferrer">
            <Phone size={16} aria-hidden="true" />
            WhatsApp
          </a>
          <a href="mailto:georgeano.santos@uol.com.br">
            <Mail size={16} aria-hidden="true" />
            E-mail
          </a>
          <a
            href="https://www.instagram.com/ranchosagradafamilia"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram size={16} aria-hidden="true" />
            Instagram
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        © 2024 Rancho Sagrada Família. Todos os direitos reservados.
      </div>
    </footer>
  );
}
