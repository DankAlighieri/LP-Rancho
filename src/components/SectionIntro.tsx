type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  inverse?: boolean;
};

export function SectionIntro({
  eyebrow,
  title,
  text,
  align = "center",
  inverse = false,
}: SectionIntroProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "mr-auto text-left";
  const eyebrowClass = inverse
    ? "bg-mango-orange/20 text-[#ffd5ad]"
    : "bg-mango-orange/10 text-earth";
  const titleClass = inverse ? "text-white" : "text-green-dark";
  const textClass = inverse ? "text-white/75" : "text-muted";

  return (
    <div
      className={`mb-11 max-w-[820px] md:mb-16 ${alignment}`.trim()}
    >
      {eyebrow && (
        <span
          className={`mb-[18px] inline-flex w-fit items-center rounded-full px-3.5 py-2 text-[0.82rem] font-extrabold uppercase tracking-normal ${eyebrowClass}`}
        >
          {eyebrow}
        </span>
      )}
      <h2 className={titleClass}>{title}</h2>
      {text && <p className={`mt-[22px] text-[1.04rem] md:text-xl ${textClass}`}>{text}</p>}
    </div>
  );
}
