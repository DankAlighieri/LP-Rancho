import { BadgeCheck, Leaf } from "lucide-react";
import manOnField from "../assets/manOnField.webp";

export function About() {
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
            alt="Produtor analisando uma manga no pomar"
            className="relative h-[420px] w-full object-cover shadow-lift [clip-path:polygon(8%_0,100%_0,92%_100%,0_100%)] md:h-[560px]"
          />
        </div>

        <div className="max-w-[610px]">
          <span className="mb-6 inline-flex text-[0.72rem] font-extrabold uppercase tracking-[0.22em] text-leaf-fresh">
            Nossa história
          </span>

          <h2 className="max-w-[560px] text-green-dark textShadow-soft">
            Tradição familiar com visão global
          </h2>

          <p className="mt-7">
            Localizado no coração do Vale do São Francisco, o Rancho Sagrada
            Família é referência na fruticultura de alto desempenho. Unimos o
            conhecimento geracional sobre a terra às práticas modernas de
            manejo sustentável.
          </p>

          <p className="mt-5">
            Nossa missão é levar o sabor autêntico e a qualidade nutricional da
            manga brasileira para mercados exigentes, garantindo rastreabilidade
            desde a florada até o porto de destino.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <div className="min-w-[150px] flex-1 border-l-4 border-leaf-olive pl-5 sm:flex-none sm:basis-[190px]">
              <strong className="block font-heading text-[1.65rem] font-extrabold leading-none text-leaf-olive">
                100%
              </strong>
              <span className="mt-3 block text-sm font-semibold text-muted">
                Rastreável
              </span>
            </div>

            <div className="min-w-[150px] flex-1 border-l-4 border-leaf-olive pl-5 sm:flex-none sm:basis-[210px]">
              <strong className="block font-heading text-[1.65rem] font-extrabold leading-none text-leaf-olive">
                +15
              </strong>
              <span className="mt-3 block text-sm font-semibold text-muted">
                Anos de experiência
              </span>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
            <span className="inline-flex min-w-fit items-center gap-3 font-extrabold text-green-deep">
              <BadgeCheck size={22} aria-hidden="true" />
              Padrão Exportação
            </span>

            <span className="inline-flex min-w-fit items-center gap-3 font-extrabold text-green-deep">
              <Leaf size={22} aria-hidden="true" />
              Cultivo Sustentável
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
