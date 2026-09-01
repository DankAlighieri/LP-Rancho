import familyHistory from "../assets/story/family-history.webp";
import harvestLogistics from "../assets/official/story/harvest-logistics.webp";
import harvestTeam from "../assets/official/story/harvest-team.webp";
import harvestWorkerPortrait from "../assets/official/story/harvest-worker-portrait.webp";
import harvestWorkers from "../assets/official/story/harvest-workers.webp";
import producerWithMangoes from "../assets/manOnField.webp";
import teamInOrchard from "../assets/official/story/team-in-orchard.webp";
import { useLanguage } from "../i18n";

const historyPhotos = [
  {
    src: harvestTeam,
    position: "50% 45%",
  },
  {
    src: teamInOrchard,
    position: "center",
  },
  {
    src: harvestWorkers,
    position: "center",
  },
  {
    src: harvestWorkerPortrait,
    position: "48% 38%",
  },
  {
    src: harvestLogistics,
    position: "48% 45%",
  },
  {
    src: producerWithMangoes,
    position: "center",
  },
];

export function History() {
  const { copy } = useLanguage();

  return (
    <section id="historia" className="relative bg-white py-[68px] md:py-[82px] lg:py-[104px]">
      <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] items-center gap-12 md:w-[min(1180px,calc(100%-40px))] lg:w-[min(1180px,calc(100%-48px))] lg:grid-cols-[1fr_0.9fr] lg:gap-20">
        <div>
          <span className="mb-5 inline-flex text-[0.72rem] font-extrabold uppercase tracking-[0.22em] text-leaf-fresh">
            {copy.history.eyebrow}
          </span>
          <h2>{copy.history.title}</h2>
          <p className="mt-7 max-w-[650px]">
            {copy.history.intro}
          </p>

          <div className="mt-10 grid gap-6">
            {copy.history.milestones.map((milestone) => (
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
              alt={copy.history.mainImageAlt}
              className="aspect-[4/3] w-full object-cover sm:aspect-[5/4]"
              style={{ objectPosition: "50% 45%" }}
              loading="lazy"
              decoding="async"
            />

            <div className="mt-2 grid grid-cols-3 gap-2 sm:mt-3 sm:gap-3">
              {historyPhotos.map((photo, index) => (
                <img
                  key={photo.src}
                  src={photo.src}
                  alt={copy.history.photoAlts[index]}
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
