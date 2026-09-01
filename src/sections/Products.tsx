import { PackageCheck, Ship, Truck } from "lucide-react";
import { SectionIntro } from "../components/SectionIntro";
import mangoKeitt from "../assets/products/manga-keitt-real.webp";
import mangoKent from "../assets/products/manga-kent-real.webp";
import mangoPalmer from "../assets/products/manga-palmer-real.webp";
import mangoTommyAtkins from "../assets/products/manga-tommy-atkins-real.webp";
import sagradaFrutaLogo from "../assets/sagrada-fruta-logo.webp";
import domesticBox18kg from "../assets/official/packaging/domestic-box-18kg.webp";
import exportBox4kg from "../assets/official/packaging/export-box-4kg.webp";
import { useLanguage } from "../i18n";

const mangoVarieties = [
  {
    name: "Palmer",
    tag: "Exportação",
    image: mangoPalmer,
    imagePosition: "center",
    imageAlt: "Mangas produzidas no Rancho Sagrada Família selecionadas em caixa",
    specifications: [
      { label: "Perfil de sabor", value: "Aroma agradável e doçura delicada, em um conjunto equilibrado." },
      { label: "Polpa", value: "Consistente, macia ao amadurecer e com presença mínima de fibras." },
      { label: "Aparência", value: "A casca combina nuances púrpuras, vermelhas e amarelas; o interior é alaranjado." },
      { label: "Formato", value: "Silhueta alongada e semente proporcionalmente pequena." },
    ],
    ripening: "Próxima do ponto, intensifica a tonalidade avermelhada e cede suavemente ao toque.",
    activeMonths: [2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    name: "Tommy Atkins",
    tag: "Alta resistência",
    image: mangoTommyAtkins,
    imagePosition: "center",
    imageAlt: "Mangas cultivadas no pomar do Rancho Sagrada Família",
    specifications: [
      { label: "Perfil de sabor", value: "Doçura agradável e sabor suave." },
      { label: "Polpa", value: "Estrutura firme, característica que favorece o manuseio e o transporte." },
      { label: "Aparência", value: "Mistura de verde e amarelo com uma cobertura avermelhada marcante." },
      { label: "Formato", value: "Fruto robusto, ovalado e levemente alongado." },
    ],
    ripening: "A cor nem sempre revela o ponto; confirme pela leve maciez junto ao pedúnculo.",
    activeMonths: [2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    name: "Keitt",
    tag: "Safra estratégica",
    image: mangoKeitt,
    imagePosition: "center",
    imageAlt: "Manga Keitt inteira e cortada, com polpa amarela exposta",
    specifications: [
      { label: "Perfil de sabor", value: "Doçura limpa e equilibrada, de perfil suave." },
      { label: "Polpa", value: "Abundante, firme e bastante suculenta, com baixa presença de fibras." },
      { label: "Aparência", value: "Predomínio de verde mesmo madura, podendo apresentar discreto tom rosado." },
      { label: "Formato", value: "Grande, oval e com excelente rendimento de polpa." },
    ],
    ripening: "Como permanece verde, o melhor sinal é ceder suavemente à pressão sem perder firmeza.",
    activeMonths: [2, 3, 6, 7, 8, 9, 10],
  },
  {
    name: "Kent",
    tag: "Perfil premium",
    image: mangoKent,
    imagePosition: "center",
    imageAlt: "Mangas maduras abertas para mostrar a qualidade da polpa",
    specifications: [
      { label: "Perfil de sabor", value: "Doçura intensa, aroma agradável e sabor encorpado." },
      { label: "Polpa", value: "Macia e suculenta, praticamente livre de fibras." },
      { label: "Aparência", value: "Base verde com áreas avermelhadas e nuances douradas à medida que amadurece." },
      { label: "Formato", value: "Grande, ovalado e com ótimo aproveitamento de polpa." },
    ],
    ripening: "O surgimento de tons dourados e a leve maciez indicam que está pronta para o consumo.",
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
    image: exportBox4kg,
    imageAlt: "Caixa de 4 kg para exportação com mangas selecionadas e proteção individual",
  },
  {
    weight: "18 kg",
    market: "Mercado interno",
    transport: "Transporte rodoviário",
    details: ["Calibres 8 ao 16", "60 caixas por pallet", "14 a 22 pallets por caminhão"],
    icon: Truck,
    image: domesticBox18kg,
    imageAlt: "Caixa de 18 kg para mercado interno com mangas selecionadas",
  },
];

type ProductionCalendarProps = {
  activeMonths: number[];
  variety: string;
};

function ProductionCalendar({ activeMonths, variety }: ProductionCalendarProps) {
  const { copy } = useLanguage();

  return (
    <div className="mt-8 border-t border-sand/80 pt-6">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <strong className="font-heading text-sm font-extrabold text-green-dark">
          {copy.products.calendarPrefix} {variety}
        </strong>
        <span className="inline-flex items-center gap-2 text-xs font-bold text-muted">
          <span className="h-2 w-5 rounded-full bg-leaf-fresh" aria-hidden="true" />
          {copy.products.productionMonths}
        </span>
      </div>

      <div className="grid grid-cols-12 gap-1.5" aria-label={`${copy.products.calendarAria} ${variety}`}>
        {copy.products.months.map((month, index) => {
          const active = activeMonths.includes(index);

          return (
            <div key={month} className="min-w-0 text-center" title={`${month}: ${active ? copy.products.inProduction : copy.products.outOfSeason}`}>
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
  const { copy } = useLanguage();

  return (
    <section className="relative overflow-hidden py-[68px] md:py-[82px] lg:py-[104px]" id="produtos">
      <div className="mx-auto w-[min(1180px,calc(100%-32px))] md:w-[min(1180px,calc(100%-40px))] lg:w-[min(1180px,calc(100%-48px))]">
        <SectionIntro
          title={copy.products.title}
          text={copy.products.intro}
        />

        <div className="mb-14 grid overflow-hidden rounded-[8px] bg-green-dark md:grid-cols-[280px_minmax(0,1fr)] lg:mb-16 lg:grid-cols-[330px_minmax(0,1fr)]">
          <div className="flex min-h-[190px] items-center justify-center bg-white px-8 py-7 md:min-h-[250px]">
            <img
              src={sagradaFrutaLogo}
              alt="Sagrada Fruta"
              className="max-h-[150px] w-full max-w-[250px] object-contain"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-center px-7 py-9 md:px-10 lg:px-12">
            <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-mango-orange">
              {copy.products.brandEyebrow}
            </span>
            <h3 className="mt-4 max-w-[650px] text-2xl text-white md:text-3xl">
              {copy.products.brandTitle}
            </h3>
            <p className="mt-5 max-w-[720px] text-base leading-[1.65] text-white/80 md:text-[1.05rem]">
              {copy.products.brandText}
            </p>
          </div>
        </div>

        <div className="grid gap-7 lg:gap-8">
          {mangoVarieties.map((mango, index) => {
            const localizedMango = copy.products.varieties[index];

            return (
            <article
              key={localizedMango.name}
              className="grid overflow-hidden rounded-[8px] border border-sand/80 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lift lg:grid-cols-[0.88fr_1.12fr]"
            >
              <div className={`relative min-h-[320px] overflow-hidden bg-white lg:min-h-[500px] ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <img
                  src={mango.image}
                  alt={localizedMango.imageAlt}
                  className="h-full w-full object-contain"
                  style={{ objectPosition: mango.imagePosition }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,35,11,0.02),rgba(15,35,11,0.3))]" aria-hidden="true" />
                <div className="absolute bottom-5 right-5 flex h-16 w-32 items-center justify-center rounded-[8px] bg-cream/90 px-3 shadow-lift backdrop-blur-sm md:h-[72px] md:w-40">
                  <img src={sagradaFrutaLogo} alt="Sagrada Fruta" className="max-h-full max-w-full object-contain" loading="lazy" />
                </div>
              </div>

              <div className="flex flex-col justify-center px-6 py-8 md:px-10 lg:px-12 lg:py-10">
                <span className="mb-4 inline-flex text-[0.72rem] font-extrabold uppercase tracking-[0.22em] text-leaf-fresh">
                  {localizedMango.tag}
                </span>
                <h3 className="text-[clamp(2rem,3vw,3.15rem)] text-green-dark">{localizedMango.name}</h3>

                <dl className="mt-7 grid min-w-0 gap-x-7 gap-y-5 sm:grid-cols-2">
                  {localizedMango.specifications.map((specification) => (
                    <div key={specification.label} className="min-w-0 border-l-2 border-mango-orange pl-4">
                      <dt className="text-xs font-extrabold uppercase text-green-deep">
                        {specification.label}
                      </dt>
                      <dd className="mt-1.5 text-[0.95rem] leading-[1.55] text-muted">
                        {specification.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-7 border border-sand/80 bg-cream px-5 py-4">
                  <strong className="text-sm font-extrabold text-green-deep">
                    {copy.products.ripeningTitle}
                  </strong>
                  <p className="mt-2 text-[0.92rem] leading-[1.55]">{localizedMango.ripening}</p>
                </div>

                <ProductionCalendar activeMonths={mango.activeMonths} variety={localizedMango.name} />
              </div>
            </article>
            );
          })}
        </div>

        <div className="mt-20">
          <SectionIntro
            eyebrow={copy.products.logistics}
            title={copy.products.packagingTitle}
            text={copy.products.packagingText}
          />

          <div className="grid gap-6 md:grid-cols-2">
            {packagingOptions.map((option, index) => {
              const Icon = option.icon;
              const localizedOption = copy.products.packaging[index];

              return (
                <article
                  key={option.weight}
                  className="rounded-[8px] border border-sand/80 bg-white p-7 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-lift md:p-9"
                >
                  <div className="mb-7 aspect-[3/2] overflow-hidden rounded-[8px] border border-sand/70 bg-white">
                    <img
                      src={option.image}
                      alt={localizedOption.imageAlt}
                      className="h-full w-full object-contain object-center"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <span className="text-sm font-extrabold uppercase text-mango-dark">{copy.products.box}</span>
                      <h3 className="mt-2 text-4xl">{option.weight}</h3>
                    </div>
                    <span className="inline-grid size-14 shrink-0 place-items-center rounded-full bg-green-dark text-white">
                      <Icon size={26} aria-hidden="true" />
                    </span>
                  </div>

                  <div className="mt-7 flex items-center gap-3 border-y border-sand/80 py-5">
                    <PackageCheck className="shrink-0 text-leaf-fresh" size={22} aria-hidden="true" />
                    <div>
                      <strong className="block text-green-deep">{localizedOption.market}</strong>
                      <span className="text-sm text-muted">{localizedOption.transport}</span>
                    </div>
                  </div>

                  <ul className="mt-6 grid gap-3">
                    {localizedOption.details.map((detail) => (
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
