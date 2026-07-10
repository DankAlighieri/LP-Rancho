import {
  Award,
  BadgeCheck,
  Boxes,
  CheckCheck,
  Droplets,
  Globe2,
  Leaf,
  MapPin,
  Plane,
  Sprout,
  Tractor,
  Truck,
  UsersRound,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type Product = {
  name: string;
  description: string;
  tag: string;
  visual: "palmer" | "tommy" | "keitt" | "kent";
};

export type Commitment = {
  title: string;
  text: string;
  icon: LucideIcon;
};

export type ProcessStep = {
  title: string;
  text: string;
  icon: LucideIcon;
};

export type CapacityMetric = {
  value: string;
  label: string;
  text: string;
};

export type Certification = {
  name: string;
  text: string;
};

export const navItems: NavItem[] = [
  { label: "Início", href: "#inicio" },
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "Produtos", href: "#produtos" },
  { label: "Qualidade", href: "#qualidade" },
  { label: "Exportação", href: "#exportacao" },
  { label: "Contato", href: "#contato" },
];

export const commitments: Commitment[] = [
  {
    title: "Sustentabilidade",
    text: "Uso consciente do solo e da água no manejo agrícola.",
    icon: Droplets,
  },
  {
    title: "Qualidade",
    text: "Controle técnico do campo à expedição.",
    icon: BadgeCheck,
  },
  {
    title: "Pessoas",
    text: "Valorização da equipe e responsabilidade em toda a cadeia produtiva.",
    icon: UsersRound,
  },
];

export const products: Product[] = [
  {
    name: "Palmer",
    description:
      "Casca avermelhada, polpa firme e excelente durabilidade pós-colheita.",
    tag: "Exportação",
    visual: "palmer",
  },
  {
    name: "Tommy Atkins",
    description:
      "Variedade resistente, com boa aparência visual e ótima aceitação comercial.",
    tag: "Alta resistência",
    visual: "tommy",
  },
  {
    name: "Keitt",
    description: "Fruto grande, polpa suculenta e sabor equilibrado.",
    tag: "Sabor suave",
    visual: "keitt",
  },
  {
    name: "Kent",
    description:
      "Polpa macia, pouca fibra e alta aceitação em mercados exigentes.",
    tag: "Premium",
    visual: "kent",
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: "Cultivo",
    text: "Preparo do solo e plantio técnico.",
    icon: Tractor,
  },
  {
    title: "Manejo",
    text: "Nutrição e irrigação controlada.",
    icon: Sprout,
  },
  {
    title: "Colheita",
    text: "Ponto ideal de maturação.",
    icon: Leaf,
  },
  {
    title: "Seleção",
    text: "Classificação rigorosa por calibre.",
    icon: CheckCheck,
  },
  {
    title: "Transporte",
    text: "Logística com temperatura monitorada.",
    icon: Truck,
  },
  {
    title: "Expedição",
    text: "Envio para os principais portos.",
    icon: Plane,
  },
];

export const capacityMetrics: CapacityMetric[] = [
  {
    value: "1.000",
    label: "toneladas/ano",
    text: "Capacidade produtiva aproximada",
  },
  {
    value: "4",
    label: "variedades",
    text: "Palmer, Tommy Atkins, Keitt e Kent",
  },
  {
    value: "Mar-Nov",
    label: "período produtivo",
    text: "Fornecimento em meses estratégicos",
  },
  {
    value: "Exportação",
    label: "mercados exigentes",
    text: "Estados Unidos, Europa, Coreia e Mercosul",
  },
];

export const certifications: Certification[] = [
  { name: "GLOBALG.A.P", text: "Boas práticas agrícolas" },
  { name: "GRASP", text: "Responsabilidade social" },
  { name: "MAPA", text: "Conformidade agrícola" },
  { name: "Rastreabilidade", text: "Controle do campo à expedição" },
];

export const marketRoutes = [
  { label: "USA", className: "route-usa", icon: Globe2 },
  { label: "Europe", className: "route-europe", icon: Award },
  { label: "South Korea", className: "route-korea", icon: Boxes },
  { label: "Mercosul", className: "route-mercosul", icon: MapPin },
];
