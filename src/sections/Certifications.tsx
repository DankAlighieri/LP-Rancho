import { SectionIntro } from "../components/SectionIntro";
import { certifications } from "../data/siteData";

export function Certifications() {
  return (
    <section className="relative py-[68px] md:py-[82px] lg:py-[104px]">
      <div className="mx-auto w-[min(1180px,calc(100%-32px))] md:w-[min(1180px,calc(100%-40px))] lg:w-[min(1180px,calc(100%-48px))]">
        <SectionIntro
          title="Certificações e Conformidade"
          text="Produção conduzida com rastreabilidade, boas práticas agrícolas e atenção aos padrões exigidos por mercados internacionais."
        />
        <div className="mx-auto grid max-w-[980px] gap-7 md:grid-cols-2 lg:grid-cols-4">
          {certifications.map((certification) => (
            <article
              className="rounded-[18px] border border-sand/80 bg-white px-6 py-8 text-center shadow-soft"
              key={certification.name}
            >
              <h3 className="text-xl text-green-deep">{certification.name}</h3>
              <p className="mt-3.5 text-[0.98rem]">{certification.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
