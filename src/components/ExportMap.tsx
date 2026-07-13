import { marketRoutes } from "../data/siteData";

export function ExportMap() {
  return (
    <div
      className="relative min-h-[360px] overflow-hidden rounded-[18px] border border-sand/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(248,243,230,0.74)),#F8F3E6] shadow-soft md:min-h-[460px]"
      aria-label="Mapa de mercados atendidos"
    >
      <svg
        className="absolute inset-x-[4%] top-[7%] w-[92%]"
        viewBox="0 0 920 470"
        role="img"
        aria-labelledby="export-map-title"
      >
        <title id="export-map-title">
          Rotas comerciais saindo de Juazeiro para Estados Unidos, Europa,
          Coreia do Sul e Mercosul
        </title>
        <path
          className="fill-green-deep/15 stroke-white/80 stroke-2"
          d="M85 130c45-38 110-42 154-22 38 17 73 48 120 51 58 4 83-43 136-62 56-20 126-7 175 23 39 24 63 56 111 63 33 5 63-4 92 10 21 10 35 33 31 56-5 27-34 39-59 44-58 12-119 3-176 19-60 17-105 62-165 80-70 22-148 2-202-45-39-34-60-81-106-106-42-23-96-22-132-56-17-16-2-41 21-55Z"
        />
        <path
          className="fill-green-deep/20 stroke-white/80 stroke-2"
          d="M325 268c34 28 44 71 20 107-20 30-57 38-84 21-24-15-28-45-12-72 15-25 43-45 76-56Z"
        />
        <path
          className="fill-none stroke-mango-orange stroke-[6] [stroke-linecap:round]"
          d="M335 262C280 195 210 172 126 171"
        />
        <path
          className="fill-none stroke-mango-orange stroke-[6] [stroke-linecap:round]"
          d="M348 260C361 180 413 132 496 104"
        />
        <path
          className="fill-none stroke-green-dark stroke-[6] [stroke-linecap:round]"
          d="M366 262C473 115 682 87 822 179"
        />
        <path
          className="fill-none stroke-green-dark stroke-[6] [stroke-linecap:round]"
          d="M329 286C282 302 260 335 258 379"
        />
        <circle className="fill-mango-orange/25" cx="341" cy="268" r="18" />
        <circle className="fill-mango-orange" cx="341" cy="268" r="11" />
      </svg>

      <span className="absolute left-[41%] top-[55%] text-xs font-extrabold text-green-dark md:text-base">
        Juazeiro, Brasil
      </span>
      <span className="absolute left-[12%] top-[33%] text-xs font-extrabold text-green-dark md:text-base">
        USA
      </span>
      <span className="absolute left-[52%] top-[20%] text-xs font-extrabold text-green-dark md:text-base">
        Europe
      </span>
      <span className="absolute right-[6%] top-[35%] text-xs font-extrabold text-green-dark md:text-base">
        South Korea
      </span>
      <span className="absolute bottom-[14%] left-[31%] text-xs font-extrabold text-green-dark md:text-base">
        Mercosul
      </span>

      <div
        className="absolute inset-x-4 bottom-4 flex flex-wrap justify-start gap-2.5 md:inset-x-auto md:bottom-6 md:right-6 md:justify-end"
        aria-label="Rotas de exportação"
      >
        {marketRoutes.map(({ label, className, icon: Icon }) => (
          <span
            key={label}
            className={`inline-flex items-center gap-2 rounded-full bg-green-deep/10 px-3 py-2 text-[0.85rem] font-extrabold text-green-deep ${className}`}
          >
            <Icon size={16} aria-hidden="true" />
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
