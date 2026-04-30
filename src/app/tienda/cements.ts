export interface Cement {
  slug: string;
  name: string;
  type: string;
  description: string;
  weight: string;
  price: number;
  stock: "disponible" | "ultimas-unidades" | "bajo-pedido";
  uses: string[];
  badge?: string;
  badgeColor?: string;
}

export const cements: Cement[] = [
  {
    slug: "portland-cem-i-525r",
    name: "Cemento Portland CEM I 52,5 R",
    type: "Alta resistencia inicial",
    description:
      "Cemento Portland sin adiciones, de alta resistencia inicial. Indicado para hormigones de alta exigencia, prefabricados y obras en clima frío.",
    weight: "Saco 25 kg",
    price: 6.45,
    stock: "disponible",
    uses: ["Hormigón armado", "Prefabricados", "Obras en frío", "Alta resistencia"],
    badge: "Más vendido",
    badgeColor: "bg-accent-500",
  },
  {
    slug: "portland-cem-ii-425r",
    name: "Cemento Portland CEM II/A-L 42,5 R",
    type: "Uso general",
    description:
      "Cemento Portland con adición de caliza. El más versátil del mercado: ideal para hormigones, morteros, soleras y trabajos generales de construcción.",
    weight: "Saco 25 kg",
    price: 4.95,
    stock: "disponible",
    uses: ["Hormigón en masa", "Morteros", "Soleras", "Albañilería"],
  },
  {
    slug: "blanco-bl-i-525",
    name: "Cemento Blanco BL I 52,5",
    type: "Decorativo",
    description:
      "Cemento blanco de alta pureza para acabados decorativos, hormigón visto, terrazos, prefabricados arquitectónicos y morteros de juntas.",
    weight: "Saco 25 kg",
    price: 11.8,
    stock: "ultimas-unidades",
    uses: ["Hormigón visto", "Acabados decorativos", "Terrazo", "Morteros de junta"],
    badge: "Premium",
    badgeColor: "bg-slate-700",
  },
  {
    slug: "rapido-cnr-aluminoso",
    name: "Cemento Rápido (Aluminoso)",
    type: "Fraguado ultrarrápido",
    description:
      "Cemento aluminoso de fraguado ultrarrápido. Endurece en 15-30 minutos. Pensado para reparaciones urgentes, anclajes y filtraciones.",
    weight: "Saco 5 kg",
    price: 8.2,
    stock: "bajo-pedido",
    uses: ["Reparaciones urgentes", "Anclajes", "Filtraciones", "Sellados"],
    badge: "Reparación rápida",
    badgeColor: "bg-yellow-600",
  },
];

export const stockLabel: Record<
  Cement["stock"],
  { label: string; classes: string }
> = {
  disponible: {
    label: "En stock",
    classes: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  "ultimas-unidades": {
    label: "Últimas unidades",
    classes: "bg-amber-50 text-amber-700 border-amber-200",
  },
  "bajo-pedido": {
    label: "Bajo pedido",
    classes: "bg-slate-100 text-slate-600 border-slate-200",
  },
};

export function getCementBySlug(slug: string): Cement | undefined {
  return cements.find((c) => c.slug === slug);
}
