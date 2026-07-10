import { SectionIntro } from "../components/SectionIntro";
import { VisualPlaceholder } from "../components/VisualPlaceholder";
import { products } from "../data/siteData";

export function Products() {
  return (
    <section className="section products" id="produtos">
      <div className="container">
        <SectionIntro
          title="Variedades Produzidas"
          text="Mangas selecionadas com padrão de qualidade, sabor, firmeza e resistência para transporte e armazenamento."
        />
        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.name}>
              <div className="product-media">
                {/* Substitua por fotos reais: manga-palmer.jpg, manga-tommy.jpg, manga-keitt.jpg e manga-kent.jpg. */}
                <VisualPlaceholder
                  variant="product"
                  label={`Manga ${product.name}`}
                  className={`product-${product.visual}`}
                />
                <span className="product-tag">{product.tag}</span>
              </div>
              <div className="product-body">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
