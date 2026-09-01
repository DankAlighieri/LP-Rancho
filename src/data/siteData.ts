import {
  Award,
  Boxes,
  CheckCheck,
  createLucideIcon,
  Globe2,
  MapPin,
  Ship,
  Sprout,
  Tractor,
  Truck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const Mango: LucideIcon = createLucideIcon("Mango", [
  [
    "path",
    {
      d: "M14.7 5.2c-1.5-.6-3.2-.2-4.8 1-2.4 1.8-4.4 5.3-4.7 8.3-.3 3.1 1.2 5.5 3.9 6.1 3.4.8 7.5-1.3 9.1-4.7 1.3-2.8.9-6.5-1-8.8-.7-.8-1.5-1.5-2.5-1.9Z",
      key: "mango-fruit",
    },
  ],
  ["path", { d: "M13.8 5.1c.4-1.5 1.2-2.5 2.6-3.1", key: "mango-stem" }],
  [
    "path",
    {
      d: "M16 3.1c1.4-1.1 3.1-1.1 4.3-.2-1 1.4-2.6 2-4.3.2Z",
      key: "mango-leaf",
    },
  ],
]);

import gapCertification from "../assets/gapCertification.webp";
import graspCertification from "../assets/graspCertification.webp";
import sustainabilityImage from "../assets/commitments/sustainability-irrigation.webp";
import peopleImage from "../assets/commitments/people-harvest.webp";
import qualityImage from "../assets/commitments/quality-mango.webp";

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
  image: string;
  imageAlt: string;
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
  filePath: string;
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
    text: "A água é usada com precisão, respeitando o solo e o ritmo de cada pomar.",
    image: sustainabilityImage,
    imageAlt: "Sistema de irrigação por gotejamento levando água diretamente ao solo",
  },
  {
    title: "Pessoas",
    text: "A família e a equipe compartilham o cuidado diário que acompanha cada colheita.",
    image: peopleImage,
    imageAlt: "Trabalhadores realizando a colheita de mangas no pomar",
  },
  {
    title: "Qualidade",
    text: "Seleção atenta, fruta bem cuidada e padrão consistente do campo à expedição.",
    image: qualityImage,
    imageAlt: "Manga madura oval, saudável e centralizada",
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
    text: "Preparo do solo, mudas certificadas e condução técnica.",
    icon: Tractor,
  },
  {
    title: "Manejo",
    text: "Nutrição, irrigação e monitoramento de pragas e doenças.",
    icon: Sprout,
  },
  {
    title: "Colheita",
    text: "Ponto ideal de maturação e coloração.",
    icon: Mango,
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
    icon: Ship,
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
  {
    filePath: gapCertification,
    name: "GLOBALG.A.P.",
    text: "Boas práticas agrícolas",
  },
  {
    filePath: graspCertification,
    name: "GRASP",
    text: "Responsabilidade social",
  },
];

export const marketRoutes = [
  { label: "USA", className: "route-usa", icon: Globe2 },
  { label: "Europe", className: "route-europe", icon: Award },
  { label: "South Korea", className: "route-korea", icon: Boxes },
  { label: "Mercosul", className: "route-mercosul", icon: MapPin },
];
