import { marketRoutes } from "../data/siteData";

export function ExportMap() {
  return (
    <div className="export-map" aria-label="Mapa de mercados atendidos">
      <svg viewBox="0 0 920 470" role="img" aria-labelledby="export-map-title">
        <title id="export-map-title">
          Rotas comerciais saindo de Juazeiro para Estados Unidos, Europa,
          Coreia do Sul e Mercosul
        </title>
        <path
          className="map-land"
          d="M85 130c45-38 110-42 154-22 38 17 73 48 120 51 58 4 83-43 136-62 56-20 126-7 175 23 39 24 63 56 111 63 33 5 63-4 92 10 21 10 35 33 31 56-5 27-34 39-59 44-58 12-119 3-176 19-60 17-105 62-165 80-70 22-148 2-202-45-39-34-60-81-106-106-42-23-96-22-132-56-17-16-2-41 21-55Z"
        />
        <path
          className="map-land map-land-south"
          d="M325 268c34 28 44 71 20 107-20 30-57 38-84 21-24-15-28-45-12-72 15-25 43-45 76-56Z"
        />
        <path className="route route-orange" d="M335 262C280 195 210 172 126 171" />
        <path className="route route-orange" d="M348 260C361 180 413 132 496 104" />
        <path className="route route-green" d="M366 262C473 115 682 87 822 179" />
        <path className="route route-green" d="M329 286C282 302 260 335 258 379" />
        <circle className="origin-ring" cx="341" cy="268" r="18" />
        <circle className="origin-dot" cx="341" cy="268" r="11" />
      </svg>

      <span className="map-label map-label-origin">Juazeiro, Brasil</span>
      <span className="map-label map-label-usa">USA</span>
      <span className="map-label map-label-europe">Europe</span>
      <span className="map-label map-label-korea">South Korea</span>
      <span className="map-label map-label-mercosul">Mercosul</span>

      <div className="market-list" aria-label="Rotas de exportação">
        {marketRoutes.map(({ label, className, icon: Icon }) => (
          <span key={label} className={className}>
            <Icon size={16} aria-hidden="true" />
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
