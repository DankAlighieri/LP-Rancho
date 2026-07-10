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
  return (
    <div
      className={`visual visual-${variant} ${className}`.trim()}
      role="img"
      aria-label={label}
    >
      <span className="visual-leaf" aria-hidden="true" />
      <span className="visual-fruit" aria-hidden="true" />
    </div>
  );
}
