import { SectionIntro } from "../components/SectionIntro";
import { certifications } from "../data/siteData";

export function Certifications() {
  return (
    <section className="section certifications">
      <div className="container">
        <SectionIntro
          title="Certificações e Conformidade"
          text="Produção conduzida com rastreabilidade, boas práticas agrícolas e atenção aos padrões exigidos por mercados internacionais."
        />
        <div className="certification-grid">
          {certifications.map((certification) => (
            <article className="certification-card" key={certification.name}>
              <h3>{certification.name}</h3>
              <p>{certification.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
