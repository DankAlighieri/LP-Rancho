import { MapPin } from "lucide-react";

export function Location() {
  return (
    <section className="section location">
      <div className="container location-grid">
        <div className="location-copy">
          <span className="eyebrow">Juazeiro, Bahia</span>
          <h2>Localização Estratégica</h2>
          <p>
            Localizado em Juazeiro, Bahia, no Vale do São Francisco, o Rancho
            Sagrada Família está inserido em uma das regiões mais importantes da
            fruticultura irrigada do Brasil.
          </p>
          <span className="location-highlight">
            <MapPin size={22} aria-hidden="true" />
            Vale do São Francisco
          </span>
          <a
            className="text-link"
            href="https://www.google.com/maps/search/?api=1&query=Juazeiro%2C%20Bahia"
            target="_blank"
            rel="noreferrer"
          >
            Ver localização no Google Maps
          </a>
        </div>
        <div
          className="brazil-map-card"
          role="img"
          aria-label="Mapa estilizado do Brasil com Bahia destacada"
        >
          <span className="map-shape" aria-hidden="true" />
          <span className="map-pin" aria-hidden="true" />
          <strong>Juazeiro-BA</strong>
          <small>Vale do São Francisco</small>
        </div>
      </div>
    </section>
  );
}
