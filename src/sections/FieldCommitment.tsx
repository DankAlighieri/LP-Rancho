import { commitments } from "../data/siteData";

export function FieldCommitment() {
  return (
    <section className="section section-dark commitment">
      <div className="field-pattern" aria-hidden="true" />
      <div className="container">
        <div className="section-intro section-intro-center section-intro-inverse">
          <span className="eyebrow">Nossa essência</span>
          <h2>Compromisso no Campo</h2>
        </div>
        <div className="commitment-grid">
          {commitments.map(({ title, text, icon: Icon }) => (
            <article className="essence-card" key={title}>
              <span className="essence-icon">
                <Icon size={30} aria-hidden="true" />
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
