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
  return (
    <div
      className={`section-intro section-intro-${align} ${
        inverse ? "section-intro-inverse" : ""
      }`.trim()}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}
