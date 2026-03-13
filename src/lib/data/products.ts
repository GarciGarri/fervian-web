export interface Product {
  slug: string;
  name: string;
  shortName: string;
  category: "aridos" | "hormigon" | "maquinaria";
  categoryLabel: string;
  company: string;
  description: string;
  longDescription: string;
  features: string[];
  unit: string;
  icon: string;
  image: string;
}

export const products: Product[] = [
  // --- Áridos (Fernández Hermanos) ---
  {
    slug: "arena-rio",
    name: "Arena de Río",
    shortName: "Arena",
    category: "aridos",
    categoryLabel: "Áridos",
    company: "Fernández Hermanos",
    description:
      "Arena de río natural extraída de nuestra gravera de Torrejoncillo. Disponible en granulometrías 0/1, 0/5 y 1/5. Certificación AENOR.",
    longDescription:
      "Arena de río de alta calidad extraída y procesada en nuestra gravera de Torrejoncillo (Cáceres). Disponemos de varias granulometrías para adaptarnos a las necesidades de cada obra: arena fina 0/1 para enfoscados y morteros, arena 0/5 de uso general para hormigones y soleras, y arena gruesa 1/5 para drenajes y rellenos. Todos nuestros áridos cuentan con certificación AENOR de producto, garantizando el cumplimiento de las normativas vigentes. Suministramos a obra con transporte propio en toda la provincia de Cáceres.",
    features: [
      "Granulometría 0/1 (arena fina)",
      "Granulometría 0/5 (uso general)",
      "Granulometría 1/5 (arena gruesa)",
      "Certificación AENOR",
      "Extracción en gravera propia",
      "Transporte a obra incluido",
    ],
    unit: "Tonelada",
    icon: "Mountain",
    image: "/images/products/arena.jpg",
  },
  {
    slug: "gravilla-grava",
    name: "Gravilla y Grava",
    shortName: "Gravilla",
    category: "aridos",
    categoryLabel: "Áridos",
    company: "Fernández Hermanos",
    description:
      "Gravilla y garbancillo de distintas granulometrías para hormigones, drenajes y obras de construcción. Certificación AENOR.",
    longDescription:
      "Gravilla y grava de río procesada en nuestra planta de tratamiento de Torrejoncillo. Ofrecemos distintas granulometrías adaptadas a cada necesidad: gravilla 5/20-T y 12/20-R para fabricación de hormigones y acabados, y garbancillo 20/40-T y 20/40-R para drenajes, sub-bases y rellenos. Material lavado y clasificado con control de calidad permanente. Certificación AENOR que garantiza las características técnicas del producto.",
    features: [
      "Gravilla 5/20-T",
      "Gravilla 12/20-R",
      "Garbancillo 20/40-T",
      "Garbancillo 20/40-R",
      "Material lavado y clasificado",
      "Certificación AENOR",
    ],
    unit: "Tonelada",
    icon: "Mountain",
    image: "/images/products/gravilla.jpg",
  },
  {
    slug: "zahorra",
    name: "Zahorra Artificial y Natural",
    shortName: "Zahorra",
    category: "aridos",
    categoryLabel: "Áridos",
    company: "Fernández Hermanos",
    description:
      "Zahorra artificial y natural para bases y sub-bases de carreteras, caminos, explanadas y plataformas de obra.",
    longDescription:
      "Zahorra de alta calidad para la formación de bases y sub-bases granulares en obras de infraestructura. Disponemos de zahorra artificial (triturada y con granulometría controlada) ideal para bases de carreteras y firmes, y zahorra natural para caminos rurales, explanadas y plataformas de trabajo. Nuestro material cumple con las especificaciones del PG-3 para su uso en obras de la administración pública. Suministro directo desde nuestra gravera de Torrejoncillo con transporte propio.",
    features: [
      "Zahorra artificial (ZA)",
      "Zahorra natural (ZN)",
      "Cumple especificaciones PG-3",
      "Para bases y sub-bases de firmes",
      "Caminos rurales y explanadas",
      "Suministro con transporte propio",
    ],
    unit: "Tonelada",
    icon: "Mountain",
    image: "/images/products/zahorra.jpg",
  },
  {
    slug: "tierra-vegetal",
    name: "Tierra Vegetal",
    shortName: "Tierra Vegetal",
    category: "aridos",
    categoryLabel: "Áridos",
    company: "Fernández Hermanos",
    description:
      "Tierra vegetal cribada para jardinería, ajardinamientos, restauración paisajística y rellenos de zonas verdes.",
    longDescription:
      "Tierra vegetal de calidad, cribada y procesada en nuestras instalaciones de Torrejoncillo. Ideal para trabajos de jardinería, ajardinamiento de urbanizaciones, restauración paisajística de taludes y márgenes, relleno de zonas verdes y parques, y trabajos de revegetación medioambiental. Suministramos en cualquier cantidad, desde pequeños pedidos hasta grandes volúmenes para obras de urbanización y restauración ambiental. Transporte propio a toda la provincia de Cáceres.",
    features: [
      "Tierra cribada y limpia",
      "Jardinería y ajardinamientos",
      "Restauración paisajística",
      "Relleno de zonas verdes",
      "Revegetación de taludes",
      "Suministro a granel",
    ],
    unit: "Tonelada",
    icon: "Mountain",
    image: "/images/products/tierra-vegetal.jpg",
  },
  // --- Hormigón (Hormigones Fervian) ---
  {
    slug: "hormigon-preparado",
    name: "Hormigón Preparado",
    shortName: "Hormigón",
    category: "hormigon",
    categoryLabel: "Hormigón",
    company: "Hormigones Fervian",
    description:
      "Hormigón preparado en masa y armado, fabricado en planta propia. Distintas resistencias y consistencias para cada tipo de obra.",
    longDescription:
      "Hormigón preparado fabricado en nuestra planta de Torrejoncillo con áridos propios del grupo, lo que nos permite garantizar la máxima calidad del producto. Fabricamos hormigón en distintas resistencias (HM-20, HA-25, HA-30, HA-35 y superiores) y consistencias (seca, plástica, blanda, fluida) adaptadas a cada tipo de obra y elemento estructural. Nuestro hormigón cumple con la normativa EHE-08 y dispone de control de calidad permanente. Servicio de transporte con camión hormigonera y bombeo a obra.",
    features: [
      "Hormigón en masa (HM-20, HM-25)",
      "Hormigón armado (HA-25, HA-30, HA-35)",
      "Distintas consistencias disponibles",
      "Cumple normativa EHE-08",
      "Áridos propios certificados AENOR",
      "Transporte con camión hormigonera",
    ],
    unit: "m³",
    icon: "Factory",
    image: "/images/products/hormigon.jpg",
  },
  {
    slug: "mortero-preparado",
    name: "Mortero Preparado",
    shortName: "Mortero",
    category: "hormigon",
    categoryLabel: "Hormigón",
    company: "Hormigones Fervian",
    description:
      "Mortero preparado para albañilería, enfoscados, solados y trabajos generales de construcción. Fabricación en planta propia.",
    longDescription:
      "Mortero preparado fabricado en nuestra planta de Torrejoncillo, listo para su uso en obra. Disponemos de mortero de albañilería para fábricas de ladrillo y bloque, mortero de enfoscado para revestimientos, y mortero de solado para recrecidos y bases. Nuestro mortero se fabrica con arena de río propia del grupo (Fernández Hermanos) y cemento de primera calidad, garantizando la dosificación exacta y la consistencia del producto. Entrega en camión cuba directamente en obra.",
    features: [
      "Mortero de albañilería",
      "Mortero de enfoscado",
      "Mortero de solado",
      "Dosificación controlada en planta",
      "Arena de río propia del grupo",
      "Entrega en camión cuba a obra",
    ],
    unit: "m³",
    icon: "Factory",
    image: "/images/products/mortero.jpg",
  },
  // --- Maquinaria (M&V Maquinaria) ---
  {
    slug: "alquiler-retroexcavadora",
    name: "Alquiler de Retroexcavadoras",
    shortName: "Retroexcavadora",
    category: "maquinaria",
    categoryLabel: "Maquinaria",
    company: "M&V Maquinaria",
    description:
      "Alquiler de retroexcavadoras y miniexcavadoras para excavación, zanjas, demolición y movimiento de tierras.",
    longDescription:
      "En M&V Maquinaria disponemos de retroexcavadoras y miniexcavadoras en alquiler para todo tipo de trabajos de construcción y obra civil. Nuestras máquinas están revisadas y en perfecto estado de funcionamiento, con mantenimiento permanente por parte de nuestro servicio técnico. Ofrecemos alquiler flexible por días, semanas o meses, con o sin operador. Disponemos de miniexcavadoras para trabajos en espacios reducidos y retroexcavadoras mixtas y de cadenas para excavaciones de mayor envergadura. Transporte de maquinaria a obra incluido.",
    features: [
      "Miniexcavadoras (1,5 a 8 toneladas)",
      "Retroexcavadoras mixtas",
      "Retroexcavadoras de cadenas",
      "Alquiler con o sin operador",
      "Por días, semanas o meses",
      "Transporte a obra incluido",
    ],
    unit: "Día/Semana/Mes",
    icon: "Truck",
    image: "/images/products/retroexcavadora.jpg",
  },
  {
    slug: "alquiler-rodillos-compactadores",
    name: "Alquiler de Rodillos y Compactadores",
    shortName: "Rodillos",
    category: "maquinaria",
    categoryLabel: "Maquinaria",
    company: "M&V Maquinaria",
    description:
      "Alquiler de rodillos vibrantes y compactadores para compactación de tierras, zahorras y aglomerado asfáltico.",
    longDescription:
      "Disponemos de una amplia gama de rodillos vibrantes y compactadores en alquiler para trabajos de compactación en obras de construcción e infraestructuras. Rodillos vibrantes monocilíndricos y tándem de distintos pesos para compactación de tierras, zahorras, bases granulares y aglomerado asfáltico. También contamos con compactadores de neumáticos y bandeja vibrante para trabajos en espacios reducidos. Toda nuestra maquinaria está revisada y cuenta con documentación en regla. Servicio técnico propio para asistencia en obra.",
    features: [
      "Rodillos vibrantes monocilíndricos",
      "Rodillos tándem",
      "Compactadores de neumáticos",
      "Bandejas vibrantes",
      "Distintos pesos y capacidades",
      "Servicio técnico en obra",
    ],
    unit: "Día/Semana/Mes",
    icon: "Truck",
    image: "/images/products/rodillo.jpg",
  },
  {
    slug: "alquiler-dumper-camion",
    name: "Alquiler de Dumpers y Camiones",
    shortName: "Dumpers",
    category: "maquinaria",
    categoryLabel: "Maquinaria",
    company: "M&V Maquinaria",
    description:
      "Alquiler de dumpers articulados y camiones de obra para transporte de tierras, escombros y materiales de construcción.",
    longDescription:
      "M&V Maquinaria ofrece dumpers articulados y camiones de obra en alquiler para el transporte de materiales en obras de construcción e infraestructura. Dumpers articulados de distintas capacidades para movimiento de tierras en terrenos difíciles, camiones basculantes para transporte de áridos, escombros y materiales, y camiones góndola para traslado de maquinaria. Alquiler flexible adaptado a las necesidades de cada obra, con mantenimiento y asistencia técnica incluidos. Disponibilidad inmediata y respuesta rápida.",
    features: [
      "Dumpers articulados",
      "Camiones basculantes",
      "Distintas capacidades de carga",
      "Alquiler con o sin conductor",
      "Mantenimiento incluido",
      "Disponibilidad inmediata",
    ],
    unit: "Día/Semana/Mes",
    icon: "Truck",
    image: "/images/products/dumper.jpg",
  },
];

export const productCategories = [
  { id: "aridos" as const, label: "Áridos", company: "Fernández Hermanos" },
  { id: "hormigon" as const, label: "Hormigón", company: "Hormigones Fervian" },
  { id: "maquinaria" as const, label: "Maquinaria", company: "M&V Maquinaria" },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
