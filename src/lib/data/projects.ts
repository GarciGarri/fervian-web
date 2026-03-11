export interface Project {
  slug: string;
  title: string;
  client: string;
  location: string;
  year: string;
  category: string;
  description: string;
  budget?: string;
  partner?: string;
}

export const projects: Project[] = [
  {
    slug: "modernizacion-acequias-alagon",
    title: "Modernización de Acequias en la Zona Regable del Alagón",
    client: "Confederación Hidrográfica del Tajo",
    location: "Zona regable del Alagón, Cáceres",
    year: "2018-2020",
    category: "Abastecimiento y Saneamiento",
    description:
      "Modernización integral de las acequias en la zona regable del Alagón, incluyendo demolición de canales existentes, apertura de zanjas, preparación de cama de tuberías, colocación de tuberías de gran diámetro y tapado de aproximadamente 40 kilómetros de canalización.",
    partner: "Balpia Altec",
  },
  {
    slug: "reparacion-canales-alagon",
    title: "Reparación de Canales y Caminos de la Zona Regable del Alagón",
    client: "COMSA S.A.",
    location: "Zona regable del Alagón, Cáceres",
    year: "2017-2019",
    category: "Abastecimiento y Saneamiento",
    description:
      "Reparación de los canales generales nº 11, nº 5, canal secundario 2º, 1º y otros canales de la zona regable del Alagón. Trabajos de restauración y mejora de la infraestructura de riego.",
    partner: "COMSA S.A.",
  },
  {
    slug: "renovacion-red-abastecimiento-r66a",
    title: "Renovación de la Red de Abastecimiento Barriada R-66-A",
    client: "Ayuntamiento de Cáceres",
    location: "Barriada R-66-A, Cáceres",
    year: "2022",
    category: "Abastecimiento y Saneamiento",
    description:
      "Renovación completa de la red de abastecimiento de agua potable en la barriada R-66-A de Cáceres, actuando en las calles Osa Mayor, Aries y Acuario, con un plazo de ejecución de cinco meses.",
    budget: "382.701 €",
  },
  {
    slug: "reordenacion-roche-sur-yon",
    title: "Reordenación de la Calle Roche Sur Yon (II Fase)",
    client: "Ayuntamiento de Cáceres",
    location: "Barrio del Espíritu Santo, Cáceres",
    year: "2023",
    category: "Urbanizaciones",
    description:
      "Segunda fase de la reordenación del vial principal del barrio del Espíritu Santo, priorizando la movilidad peatonal frente a la vehicular, ampliando aceras e incorporando alcorques para proteger el arbolado existente.",
  },
  {
    slug: "accesibilidad-las-trescientas",
    title: "Mejora de Accesibilidad en la Barriada de Las Trescientas",
    client: "Ayuntamiento de Cáceres",
    location: "Barriada Las Trescientas, Cáceres",
    year: "2023",
    category: "Urbanizaciones",
    description:
      "Obras de mejora de accesibilidad en la calle Castaño y calles adyacentes, incluyendo la pavimentación de la Plaza Limonero, calle Roble y acceso a la Plaza del Nogal.",
    budget: "118.400 €",
  },
  {
    slug: "explotacion-red-viaria-diputacion",
    title: "Explotación de la Red Viaria de la Diputación de Cáceres — Zona 3",
    client: "Diputación de Cáceres",
    location: "Zona 3, Provincia de Cáceres",
    year: "2021-2024",
    category: "Conservación de Carreteras",
    description:
      "Contrato de conservación y explotación de la red viaria provincial en la zona 3 de Cáceres, ejecutado en UTE con Olleta Torres, abarcando el mantenimiento integral de carreteras provinciales.",
    budget: "2.200.000 €",
    partner: "UTE FERVIAN-OLLETA TORRES",
  },
  {
    slug: "obras-monroy-torrejon",
    title: "Obras en Monroy y Torrejón el Rubio",
    client: "Diputación de Cáceres",
    location: "Monroy y Torrejón el Rubio, Cáceres",
    year: "2022",
    category: "Urbanizaciones",
    description:
      "Arreglo del pavimento y renovación de las redes de abastecimiento y saneamiento en calles de las localidades de Monroy y Torrejón el Rubio, dentro del Plan Reactiva Obras 2021-2022.",
    budget: "180.000 €",
  },
  {
    slug: "obras-fcc-construccion",
    title: "Colaboración con FCC Construcción",
    client: "FCC Construcción",
    location: "Varias localidades, Extremadura",
    year: "2019-2021",
    category: "Obra Civil",
    description:
      "Diversos trabajos de subcontratación con FCC Construcción en proyectos de infraestructura en Extremadura, incluyendo movimiento de tierras, conducciones y urbanización.",
    partner: "FCC Construcción",
  },
];

export const projectCategories = [
  "Todos",
  "Abastecimiento y Saneamiento",
  "Urbanizaciones",
  "Conservación de Carreteras",
  "Obra Civil",
  "Carreteras",
  "Edificación",
];
