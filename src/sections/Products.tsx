import { CheckCircle2, PackageCheck, Ship, Truck } from "lucide-react";
import { SectionIntro } from "../components/SectionIntro";
import mangoKeitt from "../assets/products/manga-keitt-real.webp";
import mangoKent from "../assets/products/manga-kent-real.webp";
import mangoPalmer from "../assets/products/manga-palmer-real.webp";
import mangoTommyAtkins from "../assets/products/manga-tommy-atkins-real.webp";
import sagradaFrutaLogo from "../assets/sagrada-fruta-logo.webp";

const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

const mangoVarieties = [
  {
    name: "Palmer",
    tag: "Mais de 70% de polpa",
    image: mangoPalmer,
    imageAlt: "Mangas produzidas no Rancho Sagrada Família selecionadas em caixa",
    details:
      "Coloração vermelho-arroxeada, polpa firme e semente pequena. Uma variedade valorizada pelo bom rendimento de polpa e pela durabilidade no transporte.",
    properties: ["Semente pequena", "Mais de 70% de polpa", "Pouca fibra"],
    activeMonths: [2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    name: "Tommy Atkins",
    tag: "Resistência no transporte",
    image: mangoTommyAtkins,
    imageAlt: "Mangas cultivadas no pomar do Rancho Sagrada Família",
    details:
      "Casca vibrante, boa firmeza e desempenho consistente no manuseio. É uma manga preparada para percorrer longas cadeias logísticas.",
    properties: ["Casca resistente", "Boa apresentação", "Longa vida pós-colheita"],
    activeMonths: [2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    name: "Keitt",
    tag: "Sem fibras e suculenta",
    image: mangoKeitt,
    imageAlt: "Mangas verdes recém-colhidas no Rancho Sagrada Família",
    details:
      "Fruto grande, predominantemente verde, com polpa muito suculenta, pouca fibra e sabor suave e equilibrado.",
    properties: ["Fruto grande", "Polpa suculenta", "Pouca fibra"],
    activeMonths: [2, 3, 6, 7, 8, 9, 10],
  },
  {
    name: "Kent",
    tag: "Polpa doce e sem fibras",
    image: mangoKent,
    imageAlt: "Mangas maduras abertas para mostrar a qualidade da polpa",
    details:
      "Formato ovalado, polpa macia, doce e praticamente sem fibras. Seu sabor e rendimento atendem mercados de perfil premium.",
    properties: ["Sem fibras", "Polpa macia e doce", "Perfil premium"],
    activeMonths: [8, 9, 10],
  },
];

const packagingOptions = [
  {
    weight: "4 kg",
    market: "Mercado de exportação",
    transport: "Transporte marítimo",
    details: ["Calibres 6 ao 14", "252 caixas por pallet", "5.712 caixas por contêiner"],
    icon: Ship,
  },
  {
    weight: "18 kg",
    market: "Mercado interno",
    transport: "Transporte rodoviário",
    details: ["Calibres 8 ao 16", "60 caixas por pallet", "14 a 22 pallets por caminhão"],
    icon: Truck,
  },
];

type ProductionCalendarProps = {
  activeMonths: number[];
  variety: string;
};

function ProductionCalendar({ activeMonths, variety }: ProductionCalendarProps) {
  return (
    <div className="mt-8 border-t border-sand/80 pt-6">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <strong className="font-heading text-sm font-extrabold text-green-dark">
          Calendário da {variety}
        </strong>
        <span className="inline-flex items-center gap-2 text-xs font-bold text-muted">
          <span className="h-2 w-5 rounded-full bg-leaf-fresh" aria-hidden="true" />
          Meses de produção
        </span>
      </div>

      <div className="grid grid-cols-12 gap-1.5" aria-label={`Meses de produção da manga ${variety}`}>
        {months.map((month, index) => {
          const active = activeMonths.includes(index);

          return (
            <div key={month} className="min-w-0 text-center" title={`${month}: ${active ? "em produção" : "fora da safra"}`}>
              <span className={`block text-[0.56rem] font-extrabold uppercase sm:text-[0.65rem] ${active ? "text-green-deep" : "text-muted/65"}`}>
                {month}
              </span>
              <span className={`mt-2 block h-2 rounded-full ${active ? "bg-leaf-fresh" : "bg-sand/80"}`} aria-hidden="true" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function Products() {
  return (
    <section className="relative overflow-hidden py-[68px] md:py-[82px] lg:py-[104px]" id="produtos">
      <div className="mx-auto w-[min(1180px,calc(100%-32px))] md:w-[min(1180px,calc(100%-40px))] lg:w-[min(1180px,calc(100%-48px))]">
        <SectionIntro
          title="Variedades Produzidas"
          text="Cada variedade é acompanhada de perto pela nossa família, com manejo, seleção e janela de produção adequados ao seu perfil de mercado."
        />

        <div className="grid gap-7 lg:gap-8">
          {mangoVarieties.map((mango, index) => (
            <article
              key={mango.name}
              className="grid overflow-hidden rounded-[8px] border border-sand/80 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lift lg:grid-cols-[0.88fr_1.12fr]"
            >
              <div className={`relative min-h-[320px] overflow-hidden bg-sand lg:min-h-[500px] ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <img src={mango.image} alt={mango.imageAlt} className="h-full w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,35,11,0.02),rgba(15,35,11,0.3))]" aria-hidden="true" />
                <span className="absolute left-5 top-5 max-w-[calc(100%-40px)] rounded-full bg-green-deep px-4 py-2 text-sm font-extrabold text-white shadow-lg">
                  {mango.tag}
                </span>
                <div className="absolute bottom-5 right-5 flex h-16 w-32 items-center justify-center rounded-[8px] bg-cream/90 px-3 shadow-lift backdrop-blur-sm md:h-[72px] md:w-40">
                  <img src={sagradaFrutaLogo} alt="Sagrada Fruta" className="max-h-full max-w-full object-contain" loading="lazy" />
                </div>
              </div>

              <div className="flex flex-col justify-center px-6 py-8 md:px-10 lg:px-12 lg:py-10">
                <span className="mb-4 inline-flex text-[0.72rem] font-extrabold uppercase tracking-[0.22em] text-leaf-fresh">
                  Manga cultivada no Rancho
                </span>
                <h3 className="text-[clamp(2rem,3vw,3.15rem)] text-green-dark">{mango.name}</h3>
                <p className="mt-5 max-w-[620px]">{mango.details}</p>

                <ul className="mt-7 grid min-w-0 gap-3 sm:grid-cols-3">
                  {mango.properties.map((property) => (
                    <li key={property} className="flex min-h-[62px] min-w-0 items-center gap-2 overflow-hidden rounded-[8px] border border-sand/80 border-l-4 border-l-mango-orange bg-cream px-3 py-3 text-[0.8rem] font-extrabold leading-tight text-green-deep lg:px-3 xl:px-4 xl:text-sm">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-leaf-fresh" aria-hidden="true" />
                      <span className="min-w-0 [overflow-wrap:anywhere]">{property}</span>
                    </li>
                  ))}
                </ul>

                <ProductionCalendar activeMonths={mango.activeMonths} variety={mango.name} />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20">
          <SectionIntro
            eyebrow="Logística"
            title="Embalagens para cada mercado"
            text="Acondicionamos as frutas conforme o destino e o modal de transporte, preservando apresentação e qualidade durante a viagem."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {packagingOptions.map((option) => {
              const Icon = option.icon;

              return (
                <article key={option.weight} className="rounded-[8px] border border-sand/80 bg-white p-7 shadow-lg md:p-9 transition duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <span className="text-sm font-extrabold uppercase text-mango-dark">Caixa</span>
                      <h3 className="mt-2 text-4xl">{option.weight}</h3>
                    </div>
                    <span className="inline-grid size-14 shrink-0 place-items-center rounded-full bg-green-dark text-white">
                      <Icon size={26} aria-hidden="true" />
                    </span>
                  </div>

                  <div className="mt-7 flex items-center gap-3 border-y border-sand/80 py-5">
                    <PackageCheck className="shrink-0 text-leaf-fresh" size={22} aria-hidden="true" />
                    <div>
                      <strong className="block text-green-deep">{option.market}</strong>
                      <span className="text-sm text-muted">{option.transport}</span>
                    </div>
                  </div>

                  <ul className="mt-6 grid gap-3">
                    {option.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-3 text-[0.98rem] font-semibold text-green-deep">
                        <span className="h-2 w-2 shrink-0 rounded-full bg-mango-orange" aria-hidden="true" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
