import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
};

export function Button({
  children,
  className = "",
  variant = "primary",
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-mango-orange text-soft shadow-[0_16px_28px_rgba(255,138,28,0.22)] hover:bg-mango-dark",
    secondary: "border-2 border-green-deep text-green-deep",
    light: "border-2 border-white/70 text-white",
  };

  return (
    <a
      className={`inline-flex min-h-[54px] items-center justify-center rounded-full px-7 font-extrabold transition hover:-translate-y-0.5 ${variants[variant]} ${className}`.trim()}
      {...props}
    >
      {children}
    </a>
  );
}
