type VisualPlaceholderProps = {
  variant: "hero" | "mango" | "harvest" | "packing" | "product";
  label: string;
  className?: string;
};

export function VisualPlaceholder({
  variant,
  label,
  className = "",
}: VisualPlaceholderProps) {
  const backgrounds: Record<VisualPlaceholderProps["variant"], string> = {
    hero: "bg-[linear-gradient(100deg,#456b32_0%,#7b8e55_36%,#d8c69b_100%)]",
    mango: "bg-[linear-gradient(135deg,#7c8f42,#f4c778_64%,#c55037)]",
    harvest: "bg-[linear-gradient(135deg,#a47a42,#e3c887_45%,#4f7d32)]",
    packing: "bg-[linear-gradient(135deg,#edf0e8,#d8d6c8_55%,#F6C744)]",
    product: "bg-sand",
  };

  const leafPosition: Record<VisualPlaceholderProps["variant"], string> = {
    hero: "left-[10%] top-[18%]",
    mango: "left-[8%] top-[8%]",
    harvest: "bottom-[12%] right-[12%]",
    packing: "bottom-[12%] left-[14%] opacity-60",
    product: "left-[18%] top-[30%]",
  };

  const fruitPosition: Record<VisualPlaceholderProps["variant"], string> = {
    hero: "bottom-[12%] right-[12%]",
    mango: "bottom-[6%] right-[12%] !w-[28%]",
    harvest: "bottom-[13%] left-[12%]",
    packing: "bottom-[14%] right-[15%] !w-[24%]",
    product: "bottom-[20%] right-[22%]",
  };

  return (
    <div
      className={`relative min-h-[220px] overflow-hidden rounded-[18px] border border-sand/80 shadow-soft before:absolute before:inset-0 before:bg-[linear-gradient(135deg,rgba(255,255,255,0.36),transparent_48%),repeating-linear-gradient(110deg,transparent_0_24px,rgba(15,35,11,0.1)_24px_27px)] before:content-[''] ${backgrounds[variant]} ${className}`.trim()}
      role="img"
      aria-label={label}
    >
      <span
        className={`absolute block h-[32%] w-[46%] rotate-[-18deg] rounded-[100%_0_100%_0] bg-[linear-gradient(135deg,#25471d,#6f8d39)] ${leafPosition[variant]}`}
        aria-hidden="true"
      />
      <span
        className={`absolute block aspect-[0.72] w-[34%] rounded-[48%_52%_50%_50%] bg-[radial-gradient(circle_at_36%_28%,rgba(255,255,255,0.24),transparent_17%),linear-gradient(145deg,#ee583f_0%,#ff9a26_56%,#f4c33a_100%)] ${fruitPosition[variant]}`}
        aria-hidden="true"
      />
    </div>
  );
}
