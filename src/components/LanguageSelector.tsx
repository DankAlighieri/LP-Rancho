import { Check, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { languageOptions, useLanguage } from "../i18n";

function FlagIcon({ language }: { language: "pt" | "en" | "es" }) {
  const sharedProps = {
    className: "h-4 w-6 shrink-0 overflow-hidden rounded-[2px] shadow-[0_0_0_1px_rgba(15,35,11,0.16)]",
    viewBox: "0 0 24 16",
    "aria-hidden": true,
  } as const;

  if (language === "pt") {
    return (
      <svg {...sharedProps}>
        <rect width="24" height="16" fill="#229E45" />
        <path d="M12 2 21 8l-9 6-9-6 9-6Z" fill="#F8D447" />
        <circle cx="12" cy="8" r="3.25" fill="#2555A5" />
        <path d="M9.2 7.2c2.2-.6 4.5-.2 5.8.9" fill="none" stroke="#fff" strokeWidth=".65" />
      </svg>
    );
  }

  if (language === "en") {
    return (
      <svg {...sharedProps}>
        <rect width="24" height="16" fill="#fff" />
        {[0, 2.46, 4.92, 7.38, 9.84, 12.3, 14.76].map((y) => (
          <rect key={y} y={y} width="24" height="1.24" fill="#C83A4B" />
        ))}
        <rect width="10.5" height="8.6" fill="#29487D" />
        {[2, 5.25, 8.5].flatMap((x) => [1.5, 4.2, 6.9].map((y) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r=".45" fill="#fff" />
        )))}
      </svg>
    );
  }

  return (
    <svg {...sharedProps}>
      <rect width="24" height="16" fill="#AA151B" />
      <rect y="4" width="24" height="8" fill="#F1BF00" />
      <rect x="7" y="6.1" width="1.6" height="3.8" rx=".3" fill="#AA151B" />
    </svg>
  );
}

export function LanguageSelector() {
  const { language, setLanguage, copy } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const currentLanguage = languageOptions.find((option) => option.code === language)!;

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative mt-1 lg:mt-0">
      <button
        type="button"
        aria-label={copy.languageSelector}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
        className="flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-green-deep/15 bg-white px-4 font-extrabold text-green-deep shadow-sm transition hover:border-mango-orange hover:text-mango-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-mango-orange lg:w-auto lg:px-3"
      >
        <FlagIcon language={currentLanguage.code} />
        <span className="text-sm uppercase">{language}</span>
        <ChevronDown
          size={16}
          aria-hidden="true"
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div
          role="menu"
          aria-label={copy.languageMenu}
          className="absolute right-0 top-[calc(100%+8px)] z-50 min-w-[190px] overflow-hidden rounded-[12px] border border-sand bg-white p-1.5 text-green-deep shadow-soft"
        >
          {languageOptions.map((option) => (
            <button
              key={option.code}
              type="button"
              role="menuitemradio"
              aria-checked={language === option.code}
              onClick={() => {
                setLanguage(option.code);
                setIsOpen(false);
              }}
              className="flex w-full items-center gap-3 rounded-[8px] px-3 py-2.5 text-left text-sm font-bold transition hover:bg-cream focus:bg-cream focus:outline-none"
            >
              <FlagIcon language={option.code} />
              <span className="flex-1">{option.label}</span>
              {language === option.code && <Check size={16} aria-hidden="true" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
