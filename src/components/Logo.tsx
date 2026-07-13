export function Logo() {
  return (
    <a
      className="inline-flex items-center gap-3 text-green-dark"
      href="#inicio"
      aria-label="Rancho Sagrada Família"
    >
      <span
        className="grid size-[42px] place-items-center rounded-full bg-[radial-gradient(circle_at_62%_38%,#FF8A1C_0_20%,transparent_22%),#24391F] font-heading text-[0.82rem] font-extrabold text-white"
        aria-hidden="true"
      >
        RS
      </span>
      <span>
        <strong className="block font-heading text-[0.92rem] font-extrabold leading-tight sm:text-base">
          Rancho Sagrada Família
        </strong>
        <small className="mt-0.5 block text-[0.72rem] font-bold text-earth sm:text-[0.78rem]">
          Produção de Frutas
        </small>
      </span>
    </a>
  );
}
