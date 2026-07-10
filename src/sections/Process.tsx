import { SectionIntro } from "../components/SectionIntro";
import { processSteps } from "../data/siteData";

export function Process() {
  return (
    <section className="section process" id="qualidade">
      <div className="container">
        <SectionIntro
          title="Do Campo à Expedição"
          text="Cada etapa segue controle técnico para garantir segurança alimentar, rastreabilidade e qualidade até a entrega final."
        />
        <div className="timeline">
          {processSteps.map(({ title, text, icon: Icon }) => (
            <article className="timeline-item" key={title}>
              <span className="timeline-icon">
                <Icon size={28} aria-hidden="true" />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
