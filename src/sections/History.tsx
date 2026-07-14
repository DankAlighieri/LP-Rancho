import familyHistory from "../assets/story/family-history.webp";

const milestones = [
  {
    year: "1973",
    text: "A família chegou ao Projeto Mandacaru e iniciou sua trajetória cultivando sorgo, alho, tomate, cebola e melão.",
  },
  {
    year: "2010",
    text: "A primeira área própria foi adquirida e nasceu o Rancho Sagrada Família, reunindo experiência, trabalho e uma visão de futuro.",
  },
];

export function History() {
  return (
    <section id="historia" className="relative bg-white py-[68px] md:py-[82px] lg:py-[104px]">
      <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] items-center gap-12 md:w-[min(1180px,calc(100%-40px))] lg:w-[min(1180px,calc(100%-48px))] lg:grid-cols-[1fr_0.9fr] lg:gap-20">
        <div>
          <span className="mb-5 inline-flex text-[0.72rem] font-extrabold uppercase tracking-[0.22em] text-leaf-fresh">
            Nossa trajetória
          </span>
          <h2>Uma história cultivada em família</h2>
          <p className="mt-7 max-w-[650px]">
            Nossas raízes estão na agricultura familiar. O que começou com a
            coragem dos nossos pais cresceu com trabalho diário, respeito à terra
            e o desejo de construir algo para as próximas gerações.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {milestones.map((milestone) => (
              <article key={milestone.year} className="border-l-4 border-mango-orange pl-5">
                <strong className="font-heading text-3xl font-extrabold text-green-dark">
                  {milestone.year}
                </strong>
                <p className="mt-3 text-base leading-[1.6]">{milestone.text}</p>
              </article>
            ))}
          </div>
        </div>

        <figure className="relative mx-auto w-full max-w-[520px]">
          <div className="absolute -bottom-4 -right-4 h-full w-full bg-leaf-olive/20" aria-hidden="true" />
          <img
            src={familyHistory}
            alt="Registro da família reunida no Rancho Sagrada Família"
            className="relative aspect-[4/5] w-full object-cover shadow-lift"
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  );
}
