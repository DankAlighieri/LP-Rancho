import { SectionIntro } from "../components/SectionIntro";
import { certifications } from "../data/siteData";

export function Certifications() {
  return (
    <section className="relative overflow-hidden py-[68px] md:py-[82px] lg:py-[104px]">
      <div className="mx-auto w-[min(1180px,calc(100%-32px))] md:w-[min(1180px,calc(100%-40px))] lg:w-[min(1180px,calc(100%-48px))]">
        <SectionIntro
          title="Certificações e Conformidade"
          text="Produção conduzida com rastreabilidade, boas práticas agrícolas e atenção aos padrões exigidos por mercados internacionais."
        />
        <div className="mx-auto grid max-w-[760px] gap-5 sm:grid-cols-2 md:gap-7">
          {certifications.map((certification) => (
            <article
              key={certification.name}
              className="flex min-h-[270px] flex-col items-center justify-center rounded-[8px] border border-sand/80 bg-white px-6 py-8 text-center shadow-lg transition duration-300 ease-out hover:-translate-y-1 hover:shadow-lift md:min-h-[300px] md:px-8"
            >
              <div className="flex h-[118px] w-[180px] items-center justify-center overflow-hidden">
                <img
                  src={certification.filePath}
                  alt={`Selo ${certification.name}`}
                  className={`h-full w-full object-contain ${
                    certification.name === "GRASP" ? "scale-[1.8]" : ""
                  }`}
                  loading="lazy"
                />
              </div>
              <h3 className="mt-6 text-xl font-extrabold text-green-dark md:text-2xl">
                {certification.name}
              </h3>
              <p className="mt-2 text-[0.98rem] text-muted md:text-base">
                {certification.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
