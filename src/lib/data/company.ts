export const company = {
  name: "Grupo Fervian",
  legalName: "Fervian Vías y Áridos S.L.",
  cif: "B10025856",
  cnae: "4211",
  founded: 2002,
  employees: "20+",
  slogan: "Construimos el futuro de Extremadura",
  description:
    "Empresa de construcción y obra pública fundada en 2002 en Torrejoncillo (Cáceres), especializada en infraestructuras, carreteras, urbanizaciones y suministro de áridos para toda Extremadura.",
  longDescription:
    "FERVIAN Vías y Áridos S.L. es una empresa de Torrejoncillo con sede en Cáceres, fundada en el año 2002, que desarrolla su actividad en toda Extremadura. Estamos formados por un gran equipo de profesionales cualificados con amplia experiencia en el sector de la construcción y obra pública. Nuestro principal objetivo es conseguir la satisfacción del cliente ofreciendo un servicio personalizado en cada obra a ejecutar, gracias a nuestra experiencia, solidez y compromiso.",
  values: [
    {
      title: "Experiencia",
      description:
        "Más de 20 años ejecutando obras de infraestructura en toda Extremadura, con un equipo de profesionales altamente cualificados.",
      icon: "Shield",
    },
    {
      title: "Calidad",
      description:
        "Certificación AENOR en nuestros productos de áridos y compromiso con los más altos estándares en cada proyecto que ejecutamos.",
      icon: "Award",
    },
    {
      title: "Compromiso",
      description:
        "Servicio personalizado y atención directa en cada obra, garantizando la satisfacción total de nuestros clientes.",
      icon: "Handshake",
    },
    {
      title: "Innovación",
      description:
        "Maquinaria moderna y técnicas avanzadas de construcción para ofrecer soluciones eficientes y sostenibles.",
      icon: "Lightbulb",
    },
  ],
  stats: [
    { label: "Años de experiencia", value: "20+" },
    { label: "Proyectos realizados", value: "500+" },
    { label: "Profesionales", value: "20+" },
    { label: "Facturación anual", value: "3M€" },
  ],
  contact: {
    headquarters: {
      name: "Sede Central — Cáceres",
      address: "Av. Hernán Cortés, 9",
      city: "Cáceres",
      postalCode: "10004",
      phone: "927 26 01 08",
      email: "fervianviasyaridossl@gmail.com",
      coordinates: { lat: 39.4752, lng: -6.3724 },
    },
    office: {
      name: "Oficina — Torrejoncillo",
      address: "Plaza La Encamisa, 5",
      city: "Torrejoncillo (Cáceres)",
      postalCode: "10830",
      phone: "927 30 35 42",
      coordinates: { lat: 39.8167, lng: -6.4667 },
    },
  },
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
  },
};

export interface GroupCompany {
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  founded: number;
  icon: string;
  color: string;
  services: string[];
  features: string[];
  location: string;
  metaTitle: string;
  metaDescription: string;
}

export const groupCompanies: GroupCompany[] = [
  {
    name: "Fervian Vías y Áridos",
    slug: "fervian-vias-aridos",
    description:
      "Empresa principal del grupo, especializada en construcción de obra pública y privada: carreteras, urbanizaciones, saneamientos, edificación y obra civil.",
    longDescription:
      "Fervian Vías y Áridos S.L. es la empresa matriz del Grupo Fervian, fundada en 2002 en Torrejoncillo (Cáceres). Desarrolla su actividad en toda Extremadura, ejecutando obras de infraestructura pública y privada. Contamos con un equipo de profesionales cualificados con amplia experiencia en el sector de la construcción y obra civil. Nuestro principal objetivo es la satisfacción del cliente, ofreciendo un servicio personalizado y de calidad en cada proyecto que abordamos.",
    founded: 2002,
    icon: "Building2",
    color: "bg-primary-600",
    location: "Av. Hernán Cortés, 9 — 10004 Cáceres",
    services: [
      "Obras lineales y carreteras",
      "Urbanizaciones y pavimentaciones",
      "Abastecimiento y saneamiento",
      "Edificación pública y privada",
      "Estructuras de obra civil",
      "Depuradoras ETAP/EDAR",
      "Defensa de márgenes y cauces",
      "Conservación de carreteras",
    ],
    features: [
      "Empresa matriz del Grupo Fervian",
      "Más de 20 años de experiencia",
      "Proyectos para administraciones públicas",
      "Obras llave en mano",
      "Equipo técnico cualificado",
      "Maquinaria propia y moderna",
      "Presencia en toda Extremadura",
      "Participación en UTEs para grandes contratos",
    ],
    metaTitle: "Fervian Vías y Áridos — Construcción y Obra Pública en Cáceres",
    metaDescription:
      "Fervian Vías y Áridos S.L.: empresa de construcción y obra pública en Cáceres y Extremadura. Carreteras, urbanizaciones, saneamiento, edificación y obra civil. Más de 20 años de experiencia.",
  },
  {
    name: "Fernández Hermanos",
    slug: "fernandez-hermanos",
    description:
      "División de suministro de áridos con gravera propia en Torrejoncillo. Extracción, procesado y venta de arena, grava, zahorra y tierra vegetal con certificación AENOR.",
    longDescription:
      "Fernández Hermanos es la empresa del Grupo Fervian dedicada a la extracción y suministro de áridos. Con gravera propia situada en Torrejoncillo (Cáceres), disponemos de una planta de tratamiento de áridos con certificación AENOR de producto. Extraemos y procesamos distintos tipos de materiales que suministramos a obras de construcción, obra pública e infraestructuras de toda la provincia de Cáceres. Nuestra dilatada trayectoria desde 1990 nos convierte en un referente en el suministro de materiales de construcción en la zona.",
    founded: 1990,
    icon: "Mountain",
    color: "bg-accent-600",
    location: "Gravera de Torrejoncillo — Torrejoncillo (Cáceres)",
    services: [
      "Extracción de áridos en gravera propia",
      "Planta de tratamiento y clasificación",
      "Venta de arena de río (0/5, 0/1 fina, 1/5)",
      "Venta de gravilla (5/20-T, 12/20-R)",
      "Suministro de garbancillo (20/40-T, 20/40-R)",
      "Zahorra artificial y natural",
      "Tierra vegetal",
      "Transporte de materiales a obra",
    ],
    features: [
      "Gravera propia en Torrejoncillo",
      "Certificación AENOR de producto",
      "Más de 30 años de experiencia",
      "Planta de tratamiento moderna",
      "Amplia gama de granulometrías",
      "Suministro a toda la provincia de Cáceres",
      "Control de calidad permanente",
      "Transporte propio con flota de camiones",
    ],
    metaTitle: "Fernández Hermanos — Áridos y Gravera en Torrejoncillo, Cáceres",
    metaDescription:
      "Fernández Hermanos: extracción y venta de áridos en Cáceres. Gravera propia en Torrejoncillo con certificación AENOR. Arena, grava, zahorra y tierra vegetal. Desde 1990.",
  },
  {
    name: "Hormigones Fervian",
    slug: "hormigones-fervian",
    description:
      "Fabricación y suministro de hormigón preparado para obras de construcción en toda la provincia de Cáceres, con planta propia en Torrejoncillo.",
    longDescription:
      "Hormigones Fervian es la división del grupo dedicada a la fabricación y suministro de hormigón preparado. Contamos con planta de hormigón propia ubicada en Torrejoncillo, desde donde suministramos hormigón preparado a obras de construcción de toda la provincia de Cáceres. Nuestra planta dispone de tecnología moderna que permite fabricar distintos tipos de hormigón adaptados a las necesidades específicas de cada obra, garantizando la calidad y consistencia del producto. El control de los áridos propios del grupo nos permite asegurar la máxima calidad de nuestros hormigones.",
    founded: 2005,
    icon: "Factory",
    color: "bg-slate-700",
    location: "Planta de Hormigón — Torrejoncillo (Cáceres)",
    services: [
      "Hormigón preparado en masa",
      "Hormigón armado",
      "Hormigón bombeable",
      "Hormigón autocompactante",
      "Mortero preparado",
      "Transporte con camión cuba",
      "Suministro a obra con bomba",
      "Asesoramiento técnico personalizado",
    ],
    features: [
      "Planta de hormigón propia en Torrejoncillo",
      "Áridos propios del grupo (Fernández Hermanos)",
      "Control de calidad integrado",
      "Flota de camiones hormigonera",
      "Servicio de bombeo de hormigón",
      "Suministro a toda la provincia de Cáceres",
      "Distintas resistencias y consistencias",
      "Entrega rápida y fiable",
    ],
    metaTitle: "Hormigones Fervian — Hormigón Preparado en Cáceres",
    metaDescription:
      "Hormigones Fervian: fabricación y suministro de hormigón preparado en Cáceres. Planta propia en Torrejoncillo. Hormigón en masa, armado, bombeable y mortero. Transporte a obra.",
  },
  {
    name: "M&V Maquinaria",
    slug: "mv-maquinaria",
    description:
      "Alquiler, venta y reparación de maquinaria de obra pública y construcción. Parque de máquinas propio y servicio técnico especializado.",
    longDescription:
      "M&V Alquiler y Venta de Maquinaria es la empresa del Grupo Fervian fundada en 2015, dedicada al alquiler, venta y reparación de maquinaria para obra pública y construcción. Disponemos de un amplio parque de maquinaria propio que incluye compactadores, rodillos, retroexcavadoras, miniexcavadoras, dumpers, martillos hidráulicos y mucho más. Nuestro servicio técnico especializado garantiza que toda la maquinaria esté en perfecto estado de funcionamiento. En M&V trabajamos día a día para facilitar el trabajo de nuestros clientes, ofreciendo soluciones de maquinaria flexibles y adaptadas a cada necesidad.",
    founded: 2015,
    icon: "Truck",
    color: "bg-yellow-600",
    location: "Torrejoncillo (Cáceres)",
    services: [
      "Alquiler de maquinaria de obra pública",
      "Venta de maquinaria nueva y usada",
      "Reparación y mantenimiento de maquinaria",
      "Rodillos y compactadores",
      "Retroexcavadoras y miniexcavadoras",
      "Dumpers y camiones",
      "Martillos hidráulicos",
      "Servicio técnico especializado",
    ],
    features: [
      "Amplio parque de maquinaria propio",
      "Alquiler flexible por días, semanas o meses",
      "Maquinaria revisada y en perfecto estado",
      "Servicio técnico y reparación in situ",
      "Venta de maquinaria nueva y de segunda mano",
      "Asesoramiento técnico personalizado",
      "Transporte de maquinaria a obra",
      "Respuesta rápida y disponibilidad inmediata",
    ],
    metaTitle: "M&V Maquinaria — Alquiler y Venta de Maquinaria en Cáceres",
    metaDescription:
      "M&V Maquinaria: alquiler, venta y reparación de maquinaria de construcción en Cáceres. Rodillos, retroexcavadoras, compactadores, dumpers. Parque de máquinas propio.",
  },
];

export function getCompanyBySlug(slug: string): GroupCompany | undefined {
  return groupCompanies.find((c) => c.slug === slug);
}
