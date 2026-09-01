import { SectionIntro } from "../components/SectionIntro";

import map from "../assets/exportMap.webp";
import { useLanguage } from "../i18n";

export function Markets() {
  const { copy } = useLanguage();

  return (
    <section className="relative py-[68px] md:py-[82px] lg:py-[104px]" id="exportacao">
      <div className="mx-auto w-[min(1180px,calc(100%-32px))] md:w-[min(1180px,calc(100%-40px))] lg:w-[min(1180px,calc(100%-48px))]">
        <SectionIntro
          title={copy.markets.title}
          text={copy.markets.text}
        />
        <div className="grid items-center gap-[34px] lg:grid-cols-[0.36fr_0.64fr]">
          <div className="border-l-4 border-mango-orange pl-7 ">
            <h3>{copy.markets.cardTitle}</h3>
            <p className="mt-[18px]">
              {copy.markets.cardText}
            </p>
          </div>
          <img
            src={map}
            alt={copy.markets.imageAlt}
            className="rounded-2xl shadow-lg transition duration-500 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:shadow-lift"
          />
        </div>
      </div>
    </section>
  );
}
