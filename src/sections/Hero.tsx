import { BadgeCheck, Globe2, ShieldCheck } from "lucide-react";
import { Button } from "../components/Button";

export function Hero() {
  return (
    <section className="hero section-full" id="inicio">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="container hero-content">
        <span className="hero-badge">Juazeiro, Bahia</span>
        <h1>Mangas premium do Vale do São Francisco</h1>
        <p>
          Produção rastreável, certificada e preparada para atender mercados
          nacionais e internacionais com excelência.
        </p>
        <div className="hero-actions">
          <Button href="#produtos">Conheça nossos produtos</Button>
          <Button href="#contato" variant="light">
            Fale conosco
          </Button>
        </div>
        <div className="hero-seals" aria-label="Selos e atuação">
          <span>
            <BadgeCheck size={18} aria-hidden="true" />
            GLOBALG.A.P
          </span>
          <span>
            <ShieldCheck size={18} aria-hidden="true" />
            GRASP
          </span>
          <span>
            <Globe2 size={18} aria-hidden="true" />
            Exportação
          </span>
        </div>
      </div>
    </section>
  );
}
