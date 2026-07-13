import { commitments } from "../data/siteData";

export function FieldCommitment() {
  return (
    <section className="relative overflow-hidden bg-green-dark py-[68px] text-white md:py-[82px] lg:py-[104px]">
      <div
        className="absolute inset-0 bg-[repeating-linear-gradient(102deg,transparent_0_74px,rgba(255,255,255,0.14)_74px_76px),radial-gradient(circle_at_8%_20%,rgba(146,152,46,0.34),transparent_28%),radial-gradient(circle_at_86%_82%,rgba(79,125,50,0.3),transparent_24%)] opacity-20"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto w-[min(1180px,calc(100%-32px))] md:w-[min(1180px,calc(100%-40px))] lg:w-[min(1180px,calc(100%-48px))]">
        <div className="mx-auto mb-11 max-w-[820px] text-center md:mb-16">
          <span className="mb-[18px] inline-flex w-fit items-center rounded-full bg-mango-orange/20 px-3.5 py-2 text-[0.82rem] font-extrabold uppercase tracking-normal text-[#ffd5ad]">
            Nossa essência
          </span>
          <h2 className="text-white">Compromisso no Campo</h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {commitments.map(({ title, text, icon: Icon }) => (
            <article
              className="min-h-80 rounded-[18px] border border-sand/80 bg-cream px-9 py-12 text-center text-green-dark shadow-[0_22px_44px_rgba(0,0,0,0.15)] transition hover:-translate-y-1 hover:shadow-[0_28px_52px_rgba(0,0,0,0.2)]"
              key={title}
            >
              <span className="inline-grid size-[88px] place-items-center rounded-full bg-leaf-olive/10 text-green-dark">
                <Icon size={30} aria-hidden="true" />
              </span>
              <h3 className="mt-[34px]">{title}</h3>
              <p className="mt-[22px]">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
