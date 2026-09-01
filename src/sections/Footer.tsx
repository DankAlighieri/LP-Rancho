import { Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { useLanguage } from "../i18n";

import logo from "../assets/logoTransp.webp";

export function Footer() {
  const { copy } = useLanguage();

  return (
    <footer className="bg-green-dark pt-[72px] text-white/80">
      <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-[52px] md:w-[min(1180px,calc(100%-40px))] md:grid-cols-2 lg:w-[min(1180px,calc(100%-48px))] lg:grid-cols-[1.15fr_2fr] lg:items-start lg:gap-[84px]">
        <div className="flex flex-col items-center justify-center text-center lg:text-left">
          <img
            src={logo}
            alt={copy.footer.logoAlt}
            className="h-24 w-auto shrink-0 object-contain drop-shadow-sm transition-transform duration-300 hover:scale-105 md:h-26 lg:h-28"
          />

          <p className="mt-[22px] max-w-xs text-base text-white/70">
            {copy.footer.description}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-x-12 gap-y-10 px-0 md:col-span-1 md:justify-start lg:justify-between">
          <div className="flex min-w-[130px] flex-1 flex-col items-center md:items-start">
            <h2 className="mb-[18px] font-body text-base font-extrabold text-white">
              {copy.footer.navigation}
            </h2>
            {copy.nav.map((item) => (
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
              {copy.footer.information}
            </h2>
            <a className="mt-3 flex w-fit items-center gap-2 text-white/70 hover:text-mango-orange" href="#qualidade">{copy.footer.quality}</a>
            <a className="mt-3 flex w-fit items-center gap-2 text-white/70 hover:text-mango-orange" href="#exportacao">{copy.footer.export}</a>
            <a className="mt-3 flex w-fit items-center gap-2 text-white/70 hover:text-mango-orange" href="#contato">{copy.footer.contact}</a>
          </div>

          <div className="flex min-w-[150px] flex-1 flex-col items-center md:items-start">
            <h2 className="mb-[18px] font-body text-base font-extrabold text-white">
              {copy.footer.contact}
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
              href="mailto:georgeano@sagradafruta.com.br"
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
            <a
              className="mt-3 flex w-fit items-center gap-2 text-white/70 hover:text-mango-orange"
              href="https://www.linkedin.com/in/sagrada-fruta-exporta%C3%A7%C3%A3o-de-mangas-brasileiras-372b3b411/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={16} aria-hidden="true" />
              Linkedin
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-14 flex w-[min(1180px,calc(100%-32px))] flex-col items-center justify-between gap-3 border-t border-white/10 py-[22px] text-center text-sm text-white/60 md:w-[min(1180px,calc(100%-40px))] md:flex-row md:text-left lg:w-[min(1180px,calc(100%-48px))]">
        <span>{copy.footer.rights}</span>
        <span>{copy.footer.developedBy}</span>
      </div>
    </footer>
  );
}
