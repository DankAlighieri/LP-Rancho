import { CalendarDays, CheckCircle2 } from "lucide-react";
import { SectionIntro } from "../components/SectionIntro";
import mangoKeitt from "../assets/products/manga-keitt-placeholder.png";
import mangoKent from "../assets/products/manga-kent-placeholder.png";
import mangoPalmer from "../assets/products/manga-palmer-placeholder.png";
import mangoTommyAtkins from "../assets/products/manga-tommy-atkins-placeholder.png";
import sagradaFrutaLogo from "../assets/sagrada-fruta-logo.png";

const mangoVarieties = [
  {
    name: "Palmer",
    tag: "Exportação",
    image: mangoPalmer,
    imageAlt: "Mangas Palmer em cesto",
    details:
      "Coloração vermelho-arroxeada, polpa firme, doce e com baixa presença de fibras. Uma variedade valorizada pela apresentação e pela durabilidade no transporte.",
    properties: ["Polpa firme", "Baixa fibra", "Boa vida pós-colheita"],
  },
  {
    name: "Tommy Atkins",
    tag: "Alta resistência",
    image: mangoTommyAtkins,
    imageAlt: "Mangas Tommy Atkins no pé",
    details:
      "Casca vibrante, excelente resistência ao manuseio e desempenho consistente em longas cadeias logísticas.",
    properties: ["Casca resistente", "Alta aceitação", "Longa vida de prateleira"],
  },
  {
    name: "Keitt",
    tag: "Sabor suave",
    image: mangoKeitt,
    imageAlt: "Manga Keitt verde ao lado de outra variedade",
    details:
      "Fruto grande, predominantemente verde, com polpa suculenta e sabor equilibrado.",
    properties: ["Fruto grande", "Polpa suculenta", "Sabor equilibrado"],
  },
  {
    name: "Kent",
    tag: "Premium",
    image: mangoKent,
    imageAlt: "Mangas Kent em cesto",
    details:
      "Formato ovalado, polpa macia, rica e com pouca fibra. É reconhecida pelo perfil premium.",
    properties: ["Pouca fibra", "Polpa macia", "Perfil premium"],
  },
];

const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

export function Products() {
  return (
    <section className="relative overflow-hidden py-[68px] md:py-[82px] lg:py-[104px]" id="produtos">
      <div className="mx-auto w-[min(1180px,calc(100%-32px))] md:w-[min(1180px,calc(100%-40px))] lg:w-[min(1180px,calc(100%-48px))]">
        <SectionIntro
          title="Variedades Produzidas"
          text="Nossa marca Sagrada Fruta adota cada manga com manejo, seleção e janela comercial adequados ao seu perfil de mercado."
        />

        <div className="grid gap-7 lg:gap-8">
          {mangoVarieties.map((mango, index) => (
            <article
              key={mango.name}
              className="grid overflow-hidden rounded-[18px] border border-sand/80 bg-white transition shadow-md hover:-translate-y-1 hover:shadow-lift lg:grid-cols-[0.88fr_1.12fr]"
            >
              <div className={`relative min-h-[280px] overflow-hidden bg-sand lg:min-h-[360px] ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <img src={mango.image} alt={mango.imageAlt} className="h-full w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,35,11,0.02),rgba(15,35,11,0.22))]" />
                <span className="absolute left-6 top-6 rounded-full bg-green-deep px-4 py-2 text-sm font-extrabold text-white shadow-lg">
                  {mango.tag}
                </span>
                <div className="absolute bottom-5 right-5 flex h-16 w-32 items-center justify-center rounded-[14px] bg-cream/90 px-3 shadow-lift backdrop-blur-sm md:h-[72px] md:w-40">
                  <img
                    src={sagradaFrutaLogo}
                    alt="Sagrada Fruta"
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="flex min-h-[330px] flex-col justify-center px-7 py-8 md:px-10 lg:px-12">
                <span className="mb-4 inline-flex text-[0.72rem] font-extrabold uppercase tracking-[0.22em] text-leaf-fresh">
                  Manga premium de exportação
                </span>
                <h3 className="text-[clamp(2rem,3vw,3.15rem)] text-green-dark">{mango.name}</h3>
                <p className="mt-5 max-w-[620px]">{mango.details}</p>

                <ul className="mt-7 grid gap-3 sm:grid-cols-3">
                  {mango.properties.map((property) => (
                    <li key={property} className="flex items-center gap-2 rounded-full border border-sand/80 bg-cream px-4 py-3 text-sm font-extrabold text-green-deep">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-mango-orange" aria-hidden="true" />
                      {property}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-[18px] border border-sand/80 bg-white px-5 py-7 shadow-md md:px-8">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <h3 className="text-[clamp(1.45rem,2vw,2rem)]">Calendário de produção</h3>
            <span className="rounded-full bg-mango-orange px-5 py-2 text-sm font-extrabold text-soft">
              Safra estratégica
            </span>
          </div>

          <div className="relative pt-7">
            <div
              className="absolute top-[34px] h-2 rounded-full bg-sand/80"
              style={{
                left: "calc(100% / 24)",
                right: "calc(100% / 24)",
              }}
            />
            <div
              className="absolute top-[34px] h-2 rounded-full bg-mango-orange"
              style={{
                left: "calc(100% * 5 / 24)",
                right: "calc(100% * 3 / 24)",
              }}
            />

            <div className="relative grid grid-cols-12 gap-1">
              {months.map((month, index) => {
                const active = index >= 2 && index <= 10;

                return (
                  <div key={month} className="flex min-w-0 flex-col items-center gap-5">
                    <span className={`h-5 w-5 rounded-full border-4 border-white shadow-soft ${active ? "bg-mango-orange" : "bg-sand"}`} />
                    <span className={`text-xs font-extrabold md:text-sm ${active ? "text-green-deep" : "text-muted"}`}>
                      {month}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
