import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "../i18n";

export function BackToTop() {
  const { copy } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 500);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          aria-label={copy.backToTop.label}
          title={copy.backToTop.title}
          className="fixed bottom-5 right-5 z-40 grid size-12 place-items-center rounded-full border border-white/20 bg-mango-orange text-green-dark shadow-[0_12px_30px_rgba(15,35,11,0.28)] transition-colors hover:bg-mango-dark focus-visible:outline focus-visible:outline-2 md:bottom-7 md:right-7 md:size-14"
          initial={{ opacity: 0, y: 12, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.92 }}
          transition={{ duration: 0.2 }}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.94 }}
          onClick={scrollToTop}
        >
          <ArrowUp aria-hidden="true" size={24} strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
