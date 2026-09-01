import { BadgeCheck, Leaf } from "lucide-react";
import manOnField from "../assets/official/story/producer-with-mangoes.webp";
import { useLanguage } from "../i18n";

export function About() {
  const { copy } = useLanguage();

  return (
    <section
      id="quem-somos"
      className="relative flex min-h-[80svh] items-center justify-center overflow-hidden py-[68px] md:py-[82px] lg:py-[104px]"
    >
      <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] items-center gap-[48px] md:w-[min(1180px,calc(100%-40px))] lg:w-[min(1180px,calc(100%-48px))] lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1fr)] lg:gap-[86px]">
        <div className="relative mx-auto w-full max-w-[520px] lg:max-w-none">
          <div className="absolute -left-5 -top-5 h-full w-full bg-leaf-olive/20 [clip-path:polygon(8%_0,100%_0,92%_100%,0_100%)]" />

          <img
            src={manOnField}
            alt={copy.about.imageAlt}
            className="relative h-[420px] w-full object-cover shadow-lift [clip-path:polygon(8%_0,100%_0,92%_100%,0_100%)] md:h-[560px]"
            loading="lazy"
          />
        </div>

        <div className="max-w-[610px]">
          <span className="mb-6 inline-flex text-[0.72rem] font-extrabold uppercase tracking-[0.22em] text-leaf-fresh">
            {copy.about.eyebrow}
          </span>

          <h2 className="max-w-[560px] text-green-dark drop-shadow-sm">
            {copy.about.title}
          </h2>

          <p className="mt-7">
            {copy.about.paragraph1}
          </p>

          <p className="mt-5">
            {copy.about.paragraph2}
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <div className="min-w-[150px] flex-1 border-l-4 border-leaf-olive pl-5 sm:flex-none sm:basis-[190px]">
              <strong className="block font-heading text-[1.65rem] font-extrabold leading-none text-leaf-olive">
                100%
              </strong>
              <span className="mt-3 block text-sm font-semibold text-muted">
                {copy.about.traceable}
              </span>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
            <span className="inline-flex min-w-fit items-center gap-3 font-extrabold text-green-deep">
              <BadgeCheck size={22} aria-hidden="true" />
              {copy.about.exportStandard}
            </span>

            <span className="inline-flex min-w-fit items-center gap-3 font-extrabold text-green-deep">
              <Leaf size={22} aria-hidden="true" />
              {copy.about.sustainable}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
