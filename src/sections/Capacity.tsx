import { capacityMetrics } from "../data/siteData";

export function Capacity() {
  return (
    <section className="section section-dark capacity">
      <div className="field-pattern" aria-hidden="true" />
      <div className="container">
        <div className="section-intro section-intro-center section-intro-inverse">
          <span className="eyebrow">Safra e estrutura</span>
          <h2>Produção e Capacidade</h2>
        </div>
        <div className="metric-grid">
          {capacityMetrics.map((metric) => (
            <article className="metric-card" key={metric.value}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
              <p>{metric.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
