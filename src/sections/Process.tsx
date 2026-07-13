import { SectionIntro } from "../components/SectionIntro";
import { processSteps } from "../data/siteData";

export function Process() {
  return (
    <section className="relative py-[68px] md:py-[82px] lg:py-[104px]" id="qualidade">
      <div className="mx-auto w-[min(1180px,calc(100%-32px))] md:w-[min(1180px,calc(100%-40px))] lg:w-[min(1180px,calc(100%-48px))]">
        <SectionIntro
          title="Do Campo à Expedição"
          text="Cada etapa segue controle técnico para garantir segurança alimentar, rastreabilidade e qualidade até a entrega final."
        />
        <div className="relative grid gap-6 pl-6 pt-10 after:absolute after:bottom-[18px] after:left-12 after:top-[42px] after:w-0.5 after:rounded-full after:bg-mango-orange after:content-[''] md:grid-cols-3 md:gap-x-6 md:gap-y-12 md:pl-0 md:after:hidden lg:grid-cols-6 lg:before:absolute lg:before:left-[8%] lg:before:right-[8%] lg:before:top-[86px] lg:before:h-0.5 lg:before:rounded-full lg:before:bg-mango-orange lg:before:content-['']">
          {processSteps.map(({ title, text, icon: Icon }) => (
            <article
              className="relative z-10 grid grid-cols-[76px_1fr] gap-x-[18px] text-left md:block md:text-center"
              key={title}
            >
              <span className="inline-grid size-[76px] place-items-center rounded-full border-[6px] border-cream bg-green-dark text-white shadow-[0_16px_30px_rgba(36,57,31,0.18)] lg:size-24 lg:border-8">
                <Icon size={28} aria-hidden="true" />
              </span>
              <h3 className="col-start-2 mt-2 text-xl md:mt-7">{title}</h3>
              <p className="col-start-2 mt-2.5 text-[0.96rem] leading-[1.45]">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
