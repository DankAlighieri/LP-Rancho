import familyHistory from "../assets/story/family-history.webp";
import harvestLogistics from "../assets/official/story/harvest-logistics.webp";
import harvestTeam from "../assets/official/story/harvest-team.webp";
import harvestWorkerPortrait from "../assets/official/story/harvest-worker-portrait.webp";
import harvestWorkers from "../assets/official/story/harvest-workers.webp";
import producerWithMangoes from "../assets/official/story/producer-with-mangoes.webp";
import teamInOrchard from "../assets/official/story/team-in-orchard.webp";

const milestones = [
  {
    year: "1975",
    text: "A família chegou ao Projeto Mandacaru e iniciou sua trajetória cultivando sorgo, alho, cebola, melão e tomate. Foi ali que começou a implantação das primeiras áreas de manga.",
  },
  {
    year: "2010",
    text: "O Rancho iniciou uma nova fase de modernização administrativa e produtiva, implantando sua primeira área de produção no Projeto Salitre, reconhecido pela qualidade dos solos para o cultivo de mangas.",
  },
  {
    year: "Hoje",
    text: "Mantemos uma cultura de melhoria contínua, com foco em produtividade, qualidade e certificações que preparam nossa produção para a comercialização global.",
  },
];

const historyPhotos = [
  {
    src: harvestTeam,
    alt: "Equipe do Rancho Sagrada Família reunida no pomar durante a colheita",
    position: "50% 45%",
  },
  {
    src: teamInOrchard,
    alt: "Dois integrantes do Rancho Sagrada Família caminhando entre mangueiras carregadas",
    position: "center",
  },
  {
    src: harvestWorkers,
    alt: "Trabalhadores colhendo mangas e acomodando os frutos em caixas no pomar",
    position: "center",
  },
  {
    src: harvestWorkerPortrait,
    alt: "Trabalhador colhendo manga diretamente da árvore no pomar",
    position: "48% 38%",
  },
  {
    src: harvestLogistics,
    alt: "Mangas colhidas sendo organizadas para transporte dentro da fazenda",
    position: "48% 45%",
  },
  {
    src: producerWithMangoes,
    alt: "Produtor do Rancho Sagrada Família segurando um cacho de mangas no pomar",
    position: "center",
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

          <div className="mt-10 grid gap-6">
            {milestones.map((milestone) => (
              <article key={milestone.year} className="grid min-w-0 gap-3 border-l-4 border-mango-orange pl-5 sm:grid-cols-[170px_minmax(0,1fr)] sm:gap-6">
                <strong className="min-w-0 font-heading text-2xl font-extrabold text-green-dark md:text-[1.65rem]">
                  {milestone.year}
                </strong>
                <p className="min-w-0 text-base leading-[1.6]">{milestone.text}</p>
              </article>
            ))}
          </div>

        </div>

        <figure className="relative mx-auto w-full max-w-[520px]">
          <div
            className="absolute -bottom-4 -right-4 h-full w-full bg-leaf-olive/20"
            aria-hidden="true"
          />
          <div className="relative overflow-hidden rounded-[8px] bg-white p-2 shadow-lift sm:p-3">
            <img
              src={familyHistory}
              alt="Registro da família reunida no Rancho Sagrada Família"
              className="aspect-[4/3] w-full object-cover sm:aspect-[5/4]"
              style={{ objectPosition: "50% 45%" }}
              loading="lazy"
              decoding="async"
            />

            <div className="mt-2 grid grid-cols-3 gap-2 sm:mt-3 sm:gap-3">
              {historyPhotos.map((photo) => (
                <img
                  key={photo.src}
                  src={photo.src}
                  alt={photo.alt}
                  className="aspect-[4/3] w-full object-cover"
                  style={{ objectPosition: photo.position }}
                  loading="lazy"
                  decoding="async"
                />
              ))}
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
}
