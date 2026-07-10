import { ExportMap } from "../components/ExportMap";
import { SectionIntro } from "../components/SectionIntro";

export function Markets() {
  return (
    <section className="section markets" id="exportacao">
      <div className="container">
        <SectionIntro
          title="Mercados Atendidos"
          text="Do Vale do São Francisco para o mundo."
        />
        <div className="markets-layout">
          <div className="markets-copy">
            <h3>Frutas selecionadas para mercados exigentes</h3>
            <p>
              Atendemos mercados nacionais e internacionais com frutas
              selecionadas, rastreabilidade e padrão de exportação.
            </p>
          </div>
          <ExportMap />
        </div>
      </div>
    </section>
  );
}
