import { commitments } from "../data/siteData";

export function FieldCommitment() {
  return (
    <section className="relative overflow-hidden bg-green-dark py-[68px] text-white md:py-[82px] lg:py-[104px]">
      <div
        className="absolute inset-0 bg-[repeating-linear-gradient(102deg,transparent_0_74px,rgba(255,255,255,0.12)_74px_76px)] opacity-20"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto w-[min(1180px,calc(100%-32px))] md:w-[min(1180px,calc(100%-40px))] lg:w-[min(1180px,calc(100%-48px))]">
        <div className="mx-auto mb-11 max-w-[820px] text-center md:mb-16">
          <span className="mb-[18px] inline-flex w-fit items-center rounded-full bg-mango-orange/20 px-3.5 py-2 text-[0.82rem] font-extrabold uppercase tracking-normal text-[#ffd5ad]">
            Nossa essência
          </span>
          <h2 className="text-white">Compromisso no Campo</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {commitments.map(({ title, text, image, imageAlt }) => (
            <article
              className="group relative min-h-[420px] overflow-hidden rounded-[8px] border border-white/15 shadow-[0_22px_44px_rgba(0,0,0,0.18)]"
              key={title}
            >
              <img
                src={image}
                alt={imageAlt}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,35,11,0.08)_20%,rgba(15,35,11,0.9)_100%)]" aria-hidden="true" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-left md:p-8">
                <span className="text-xs font-extrabold uppercase text-mango-orange">
                  Nossa essência
                </span>
                <h3 className="mt-3 text-white">{title}</h3>
                <p className="mt-4 text-base leading-[1.6] text-white/80">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
