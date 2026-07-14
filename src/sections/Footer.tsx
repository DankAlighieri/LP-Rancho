import { Instagram, Mail, Phone } from "lucide-react";
import { navItems } from "../data/siteData";

import logo from "../assets/logoTransp.webp";

export function Footer() {
  return (
    <footer className="bg-green-dark pt-[72px] text-white/80">
      <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-[52px] md:w-[min(1180px,calc(100%-40px))] md:grid-cols-2 lg:w-[min(1180px,calc(100%-48px))] lg:grid-cols-[1.15fr_2fr] lg:items-start lg:gap-[84px]">
        <div className="flex flex-col items-center justify-center text-center lg:text-left">
          <img
            src={logo}
            alt="Logo Rancho Sagrada Família"
            className="h-24 w-auto shrink-0 object-contain drop-shadow-sm transition-transform duration-300 hover:scale-105 md:h-26 lg:h-28"
          />

          <p className="mt-[22px] max-w-xs text-base text-white/70">
            Uma história familiar cultivando mangas com responsabilidade no Vale do São Francisco.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-x-12 gap-y-10 px-0 md:col-span-1 md:justify-start lg:justify-between">
          <div className="flex min-w-[130px] flex-1 flex-col items-center md:items-start">
            <h2 className="mb-[18px] font-body text-base font-extrabold text-white">
              Navegação
            </h2>
            {navItems.map((item) => (
              <a
                className="mt-2 flex w-fit items-center gap-2 text-white/70 hover:text-mango-orange"
                key={item.href}
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex min-w-[160px] flex-1 flex-col items-center md:items-start">
            <h2 className="mb-[18px] font-body text-base font-extrabold text-white">
              Informações
            </h2>
            <a className="mt-3 flex w-fit items-center gap-2 text-white/70 hover:text-mango-orange" href="#qualidade">Qualidade</a>
            <a className="mt-3 flex w-fit items-center gap-2 text-white/70 hover:text-mango-orange" href="#exportacao">Exportação</a>
            <a className="mt-3 flex w-fit items-center gap-2 text-white/70 hover:text-mango-orange" href="#contato">Contato</a>
          </div>

          <div className="flex min-w-[150px] flex-1 flex-col items-center md:items-start">
            <h2 className="mb-[18px] font-body text-base font-extrabold text-white">
              Contato
            </h2>
            <a
              className="mt-3 flex w-fit items-center gap-2 text-white/70 hover:text-mango-orange"
              href="https://wa.me/5574999330190"
              target="_blank"
              rel="noreferrer"
            >
              <Phone size={16} aria-hidden="true" />
              WhatsApp
            </a>
            <a
              className="mt-3 flex w-fit items-center gap-2 text-white/70 hover:text-mango-orange"
              href="mailto:georgeano.santos@uol.com.br"
            >
              <Mail size={16} aria-hidden="true" />
              E-mail
            </a>
            <a
              className="mt-3 flex w-fit items-center gap-2 text-white/70 hover:text-mango-orange"
              href="https://www.instagram.com/ranchosagradafamilia"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram size={16} aria-hidden="true" />
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-14 flex w-[min(1180px,calc(100%-32px))] flex-col items-center justify-between gap-3 border-t border-white/10 py-[22px] text-center text-sm text-white/60 md:w-[min(1180px,calc(100%-40px))] md:flex-row md:text-left lg:w-[min(1180px,calc(100%-48px))]">
        <span>© 2026 Rancho Sagrada Família. Todos os direitos reservados.</span>
        <span>Desenvolvido por Guilherme Emetério Designer</span>
      </div>
    </footer>
  );
}
