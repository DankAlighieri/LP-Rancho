import { MapPin } from "lucide-react";

const mapEmbedUrl =
  "https://www.google.com/maps?q=Juazeiro%2C%20Bahia%2C%20Brasil&output=embed";

export function Location() {
  return (
    <section
      className="relative py-[68px] md:py-[82px] lg:py-[104px]"
      id="localizacao"
    >
      <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] items-center gap-[52px] md:w-[min(1180px,calc(100%-40px))] lg:w-[min(1180px,calc(100%-48px))] lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-[78px]">
        <div>
          <span className="mb-[18px] inline-flex w-fit items-center rounded-full bg-mango-orange/10 px-3.5 py-2 text-[0.82rem] font-extrabold uppercase tracking-normal text-earth">
            Juazeiro, Bahia
          </span>
          <h2>Localização Estratégica</h2>
          <p className="max-w-[560px]">
            Localizado em Juazeiro, Bahia, no Vale do São Francisco, o Rancho
            Sagrada Família está inserido em uma das regiões mais importantes da
            fruticultura irrigada do Brasil.
          </p>
          <span className="mt-7 inline-flex items-center gap-3 font-extrabold text-earth">
            <MapPin size={22} aria-hidden="true" />
            Vale do São Francisco
          </span>
          <a
            className="mt-7 flex w-fit font-extrabold text-mango-dark underline decoration-2 underline-offset-[6px]"
            href="https://www.google.com/maps/search/?api=1&query=Juazeiro%2C%20Bahia"
            target="_blank"
            rel="noreferrer"
          >
            Ver localização no Google Maps
          </a>
        </div>

        <div className="overflow-hidden rounded-[18px] border border-sand/80 bg-white p-2 shadow-lg">
          <iframe
            src={mapEmbedUrl}
            title="Mapa de Juazeiro, Bahia"
            className="h-[360px] w-full rounded-[14px] border-0 md:h-[430px] lg:h-[500px]"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </section>
  );
}
