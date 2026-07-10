import { BadgeCheck, Leaf } from "lucide-react";
import { VisualPlaceholder } from "../components/VisualPlaceholder";

export function About() {
  return (
    <section className="section about" id="quem-somos">
      <div className="container about-grid">
        <div className="about-copy">
          <span className="eyebrow">Vale do São Francisco</span>
          <h2>Quem Somos</h2>
          <p>
            Fundado no coração do Vale do São Francisco, o Rancho Sagrada
            Família une experiência no campo, tecnologia de ponta e cuidado em
            cada etapa da produção para entregar mangas de alto padrão.
          </p>
          <p>
            Nossos pilares são qualidade, rastreabilidade, alta produtividade e
            compromisso socioambiental. Cada fruta exportada carrega a dedicação
            de uma equipe apaixonada pela terra.
          </p>
          <div className="about-highlights">
            <span>
              <BadgeCheck size={22} aria-hidden="true" />
              Padrão Exportação
            </span>
            <span>
              <Leaf size={22} aria-hidden="true" />
              Cultivo Sustentável
            </span>
          </div>
        </div>
        <div className="image-mosaic">
          {/* Substitua estes blocos pelos assets reais: manga-folhas.jpg, colheita.jpg e packing.jpg. */}
          <VisualPlaceholder
            variant="mango"
            label="Mangas maduras entre folhas verdes"
            className="mosaic-main"
          />
          <VisualPlaceholder
            variant="harvest"
            label="Equipe durante colheita técnica de mangas"
          />
          <VisualPlaceholder
            variant="packing"
            label="Área de seleção e embalagem de frutas"
          />
        </div>
      </div>
    </section>
  );
}
