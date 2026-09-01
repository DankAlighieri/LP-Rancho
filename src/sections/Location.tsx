import { MapPin } from "lucide-react";
import orchardAerial from "../assets/official/aerial/orchard-aerial.webp";
import { useLanguage } from "../i18n";

export function Location() {
  const { copy } = useLanguage();
  const mapEmbedUrl = `https://www.google.com/maps?q=-9.5575528,-40.6065694&z=14&t=k&hl=${copy.locale}&output=embed`;

  return (
    <section
      className="relative py-[68px] md:py-[82px] lg:py-[104px]"
      id="localizacao"
    >
      <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] items-center gap-[52px] md:w-[min(1180px,calc(100%-40px))] lg:w-[min(1180px,calc(100%-48px))] lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-[78px]">
        <div>
          <span className="mb-[18px] inline-flex w-fit items-center rounded-full bg-mango-orange/10 px-3.5 py-2 text-[0.82rem] font-extrabold uppercase tracking-normal text-earth">
            {copy.location.eyebrow}
          </span>
          <h2>{copy.location.title}</h2>
          <p className="max-w-[560px]">
            {copy.location.text}
          </p>
          <span className="mt-7 inline-flex items-start gap-3 font-extrabold leading-[1.45] text-earth">
            <MapPin size={22} aria-hidden="true" />
            <span>
              {copy.location.address}
              <br />
              {copy.location.addressLine2}
            </span>
          </span>
          <a
            className="mt-7 flex w-fit font-extrabold text-mango-dark underline decoration-2 underline-offset-[6px]"
            href="https://www.google.com/maps/search/?api=1&query=-9.5575528%2C-40.6065694"
            target="_blank"
            rel="noreferrer"
          >
            {copy.location.mapLink}
          </a>

          <figure className="mt-10 overflow-hidden rounded-[8px] border border-sand/80 bg-white p-2 shadow-lg">
            <img
              src={orchardAerial}
              alt={copy.location.imageAlt}
              className="aspect-[16/10] w-full rounded-[4px] object-cover"
              style={{ objectPosition: "50% 32%" }}
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>

        <div className="overflow-hidden rounded-[18px] border border-sand/80 bg-white p-2 shadow-lg">
          <iframe
            title={copy.location.mapTitle}
            src={mapEmbedUrl}
            className="h-[420px] w-full rounded-[8px] border-0 md:h-[520px]"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
