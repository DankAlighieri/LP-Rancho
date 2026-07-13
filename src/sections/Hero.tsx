import { BadgeCheck, Globe2, ShieldCheck } from "lucide-react";
import { Button } from "../components/Button";
import { motion } from "framer-motion";

import header from "../assets/hero.webp"

export function Hero() {
  return (
    <section
      className="relative grid min-h-[100svh] place-items-center overflow-hidden bg-right bg-no-repeat bg-cover"
      style={{backgroundImage: `url(${header})`}}
      id="inicio"
    >
      {/* Gradiente linear para suavizar a imagem */}
      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,35,11,0.82)_0%,rgba(15,35,11,0.52)_38%,rgba(248,243,230,0.08)_100%),linear-gradient(0deg,rgba(248,243,230,0.32)_0%,transparent_38%)]"
        aria-hidden="true"
      />
      
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="lg:pr-[60svh]"
      >
        <div className="relative z-10 mx-auto w-[min(1180px,calc(100%-32px))] pt-10 text-white md:w-[min(1180px,calc(100%-40px))] lg:w-[min(1180px,calc(100%-48px))] lg:pt-20">
          <span className="mb-6 inline-flex rounded-full bg-cream/90 px-[18px] py-2.5 font-extrabold text-green-deep mt-12 md:mt-0">
            Juazeiro, Bahia
          </span>
          <h1 className="text-white drop-shadow-[0_8px_20px_rgba(0,0,0,0.28)]">
            Mangas premium do{" "}
            <span className="text-sand">
              Vale do São Francisco
            </span>
          </h1>
          
          <p className="mt-7 max-w-[710px] text-[clamp(1.18rem,2vw,1.65rem)] leading-[1.45] text-white/90 drop-shadow-[0_5px_12px_rgba(0,0,0,0.24)]">
            Produção rastreável, certificada e preparada para atender mercados
            nacionais e internacionais com excelência.
          </p>
          <div className="mt-11 flex w-full flex-wrap gap-[18px] max-sm:[&>a]:w-full">
            <Button href="#produtos" className="max-sm:min-h-[52px]">
              Conheça nossos produtos
            </Button>
            <Button href="#contato" variant="light" className="max-sm:min-h-[52px]">
              Fale conosco
            </Button>
          </div>
          <div className="mt-7 flex flex-wrap gap-3" aria-label="Selos e atuação">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-green-dark/35 px-3.5 py-2 text-sm font-extrabold text-white">
              <BadgeCheck size={18} aria-hidden="true" />
              GLOBALG.A.P
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-green-dark/35 px-3.5 py-2 text-sm font-extrabold text-white">
              <ShieldCheck size={18} aria-hidden="true" />
              GRASP
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-green-dark/35 px-3.5 py-2 text-sm font-extrabold text-white">
              <Globe2 size={18} aria-hidden="true" />
              Exportação
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
