import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "../i18n";

export function Contact() {
  const { copy } = useLanguage();

  return (
    <section className="relative py-[68px] md:py-[82px] lg:py-[104px]" id="contato">
      <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] items-start gap-[52px] md:w-[min(1180px,calc(100%-40px))] lg:w-[min(1180px,calc(100%-48px))] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-[78px]">
        <div>
          <span className="mb-[18px] inline-flex w-fit items-center rounded-full bg-mango-orange/10 px-3.5 py-2 text-[0.82rem] font-extrabold uppercase tracking-normal text-earth">
            {copy.contact.eyebrow}
          </span>
          <h2>{copy.contact.title}</h2>
          <p className="mt-5">
            {copy.contact.text}
          </p>
          <div className="mt-[38px] grid gap-5">
            <a
              className="inline-flex w-fit items-center gap-3 text-[1.08rem] font-extrabold text-green-deep transition duration-300 hover:-translate-y-1 hover:text-mango-orange"
              href="https://wa.me/5574999330190"
              target="_blank"
              rel="noreferrer"
            >
              <Phone size={24} aria-hidden="true" />
              +55 (74) 9 9933-0190
            </a>
            <a
              className="inline-flex w-fit items-center gap-3 text-[1.08rem] font-extrabold text-green-deep transition duration-300 hover:-translate-y-1 hover:text-mango-orange"
              href="mailto:georgeano@sagradafruta.com.br"
            >
              <Mail size={24} aria-hidden="true" />
              georgeano@sagradafruta.com.br
            </a>
            <a
              className="inline-flex w-fit items-center gap-3 text-[1.08rem] font-extrabold text-green-deep transition duration-300 hover:-translate-y-1 hover:text-mango-orange"
              href="https://www.instagram.com/ranchosagradafamilia"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram size={24} aria-hidden="true" />
              @ranchosagradafamilia
            </a>
            <a
              className="inline-flex w-fit items-center gap-3 text-[1.08rem] font-extrabold text-green-deep transition duration-300 hover:-translate-y-1 hover:text-mango-orange"
              href="https://www.linkedin.com/in/sagrada-fruta-exporta%C3%A7%C3%A3o-de-mangas-brasileiras-372b3b411/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={24} aria-hidden="true" />
              Sagrada Fruta
            </a>
          </div>
        </div>
        <form
          className="grid gap-[22px] rounded-[18px] border border-sand/80 bg-white p-6 shadow-lg md:grid-cols-2 md:p-[38px]"
          action="https://api.web3forms.com/submit"
          method="POST"
        >
          {/* Insira aqui a access_key real da conta Web3Forms antes de publicar o formulário. */}
          <input
            type="hidden"
            name="access_key"
            value="SUBSTITUIR_PELA_ACCESS_KEY"
          />
          <input
            type="checkbox"
            name="botcheck"
            className="hidden"
            style={{ display: "none" }}
            tabIndex={-1}
          />
          <label className="grid gap-2.5 font-semibold text-soft">
            {copy.contact.name}
            <input
              className="w-full rounded-[10px] border border-muted/35 bg-white px-[18px] py-4 text-base text-soft transition focus:border-leaf-olive focus:shadow-[0_0_0_4px_rgba(146,152,46,0.16)]"
              name="name"
              type="text"
              placeholder={copy.contact.namePlaceholder}
              required
            />
          </label>
          <label className="grid gap-2.5 font-semibold text-soft">
            {copy.contact.company}
            <input
              className="w-full rounded-[10px] border border-muted/35 bg-white px-[18px] py-4 text-base text-soft transition focus:border-leaf-olive focus:shadow-[0_0_0_4px_rgba(146,152,46,0.16)]"
              name="company"
              type="text"
              placeholder={copy.contact.companyPlaceholder}
            />
          </label>
          <label className="grid gap-2.5 font-semibold text-soft">
            {copy.contact.email}
            <input
              className="w-full rounded-[10px] border border-muted/35 bg-white px-[18px] py-4 text-base text-soft transition focus:border-leaf-olive focus:shadow-[0_0_0_4px_rgba(146,152,46,0.16)]"
              name="email"
              type="email"
              placeholder={copy.contact.emailPlaceholder}
              required
            />
          </label>
          <label className="grid gap-2.5 font-semibold text-soft">
            {copy.contact.phone}
            <input
              className="w-full rounded-[10px] border border-muted/35 bg-white px-[18px] py-4 text-base text-soft transition focus:border-leaf-olive focus:shadow-[0_0_0_4px_rgba(146,152,46,0.16)]"
              name="phone"
              type="tel"
              placeholder={copy.contact.phonePlaceholder}
            />
          </label>
          <label className="grid gap-2.5 font-semibold text-soft md:col-span-2">
            {copy.contact.message}
            <textarea
              className="w-full resize-y rounded-[10px] border border-muted/35 bg-white px-[18px] py-4 text-base text-soft transition focus:border-leaf-olive focus:shadow-[0_0_0_4px_rgba(146,152,46,0.16)]"
              name="message"
              placeholder={copy.contact.messagePlaceholder}
              rows={5}
              required
            />
          </label>
          <p className="text-sm leading-[1.45] text-muted md:col-span-2">
            {copy.contact.consent}
          </p>
          <button
            className="min-h-[58px] cursor-pointer rounded-[10px] bg-mango-orange text-base font-extrabold text-soft transition hover:-translate-y-0.5 hover:bg-mango-dark md:col-span-2"
            type="submit"
          >
            {copy.contact.submit}
          </button>
        </form>
      </div>
    </section>
  );
}
