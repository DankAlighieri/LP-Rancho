import { capacityMetrics } from "../data/siteData";

export function Capacity() {
  return (
    <section className="relative overflow-hidden bg-green-dark py-[68px] text-white md:py-[82px] lg:py-[104px]">
      <div
        className="absolute inset-0 bg-[repeating-linear-gradient(102deg,transparent_0_74px,rgba(255,255,255,0.14)_74px_76px),radial-gradient(circle_at_8%_20%,rgba(146,152,46,0.34),transparent_28%),radial-gradient(circle_at_86%_82%,rgba(79,125,50,0.3),transparent_24%)] opacity-20"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto w-[min(1180px,calc(100%-32px))] md:w-[min(1180px,calc(100%-40px))] lg:w-[min(1180px,calc(100%-48px))]">
        <div className="mx-auto mb-11 max-w-[820px] text-center md:mb-16">
          <span className="mb-[18px] inline-flex w-fit items-center rounded-full bg-mango-orange/20 px-3.5 py-2 text-[0.82rem] font-extrabold uppercase tracking-normal text-[#ffd5ad]">
            Safra e estrutura
          </span>
          <h2 className="text-white">Produção e Capacidade</h2>
        </div>
        <div className="grid items-stretch gap-7 md:grid-cols-2 lg:grid-cols-4">
          {capacityMetrics.map((metric) => (
            <article
              className="flex min-h-[220px] min-w-0 flex-col items-center justify-center overflow-hidden rounded-[18px] border border-white/10 bg-white/5 px-7 py-9 text-center"
              key={metric.value}
            >
              <strong
                className={`block w-full max-w-full break-words font-heading font-extrabold leading-none text-mango-orange ${
                  metric.value.length > 7
                    ? "text-[clamp(2.15rem,3.3vw,3.35rem)]"
                    : "text-[clamp(2.6rem,5vw,4.2rem)]"
                }`}
              >
                {metric.value}
              </strong>
              <span className="mt-[18px] block text-[0.96rem] font-extrabold uppercase text-white/90">
                {metric.label}
              </span>
              <p className="mt-3.5 text-[0.96rem] leading-[1.45] text-white/70">{metric.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
