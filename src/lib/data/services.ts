export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  icon: string;
  image: string;
  features: string[];
  metaTitle: string;
  metaDescription: string;
}

export const services: Service[] = [
  {
    slug: "obras-lineales-carreteras",
    title: "Obras Lineales y Carreteras",
    shortTitle: "Carreteras",
    description:
      "Construcción, ensanche y acondicionamiento de carreteras, autovías y caminos en toda Extremadura.",
    longDescription:
      "En Fervian contamos con amplia experiencia en la ejecución de obras lineales, incluyendo la construcción de nuevas carreteras, ensanches, acondicionamientos y mejoras de trazado. Nuestro equipo de profesionales y maquinaria especializada nos permite abordar proyectos de cualquier envergadura, desde caminos rurales hasta autovías. Trabajamos con las principales administraciones públicas de Extremadura, garantizando el cumplimiento de plazos y la máxima calidad en cada kilómetro ejecutado.",
    icon: "Route",
    image: "/images/services/carreteras.jpg",
    features: [
      "Construcción de carreteras y autovías",
      "Ensanches y mejoras de trazado",
      "Acondicionamiento de firmes",
      "Señalización y balizamiento",
      "Obras de drenaje y cunetas",
      "Conservación y mantenimiento viario",
    ],
    metaTitle:
      "Construcción de Carreteras en Cáceres y Extremadura | Fervian",
    metaDescription:
      "Construcción, ensanche y acondicionamiento de carreteras y autovías en Cáceres y toda Extremadura. Más de 20 años de experiencia en obra pública. Solicite presupuesto.",
  },
  {
    slug: "urbanizaciones-pavimentaciones",
    title: "Urbanizaciones y Pavimentaciones",
    shortTitle: "Urbanizaciones",
    description:
      "Ejecución integral de urbanizaciones, pavimentaciones y polígonos industriales.",
    longDescription:
      "Fervian ejecuta proyectos integrales de urbanización que abarcan desde el movimiento de tierras hasta la pavimentación final, incluyendo todas las redes de servicios. Realizamos urbanizaciones residenciales, polígonos industriales y espacios públicos con un enfoque integral que garantiza la correcta coordinación de todos los oficios implicados. Nuestra experiencia nos avala en proyectos 'llave en mano' donde el cliente recibe la obra completamente terminada.",
    icon: "Building",
    image: "/images/services/urbanizaciones.jpg",
    features: [
      "Urbanizaciones residenciales",
      "Polígonos industriales",
      "Pavimentaciones urbanas",
      "Aceras y zonas peatonales",
      "Instalación de mobiliario urbano",
      "Redes de servicios urbanos",
    ],
    metaTitle:
      "Urbanizaciones y Pavimentaciones en Cáceres | Fervian",
    metaDescription:
      "Ejecución integral de urbanizaciones, pavimentaciones y polígonos industriales en Cáceres y Extremadura. Proyectos llave en mano. Presupuesto sin compromiso.",
  },
  {
    slug: "abastecimiento-saneamiento",
    title: "Abastecimiento y Saneamiento de Agua",
    shortTitle: "Agua",
    description:
      "Redes de abastecimiento, saneamiento, tuberías y canalizaciones para el ciclo integral del agua.",
    longDescription:
      "Somos especialistas en la construcción de infraestructuras hidráulicas para el ciclo integral del agua. Desde redes de abastecimiento y distribución hasta colectores de saneamiento y estaciones de bombeo. Hemos ejecutado importantes proyectos de modernización de regadíos, renovación de redes urbanas y canalización de aguas en toda la provincia de Cáceres. Nuestro equipo domina las técnicas más avanzadas de instalación de tuberías de gran diámetro y trabajos en zanja.",
    icon: "Droplets",
    image: "/images/services/agua.jpg",
    features: [
      "Redes de abastecimiento de agua potable",
      "Colectores de saneamiento",
      "Estaciones de bombeo",
      "Modernización de regadíos",
      "Acometidas y conexiones",
      "Renovación de redes existentes",
    ],
    metaTitle:
      "Redes de Abastecimiento y Saneamiento en Cáceres | Fervian",
    metaDescription:
      "Construcción de redes de abastecimiento, saneamiento y tuberías en Cáceres y Extremadura. Especialistas en ciclo integral del agua. Más de 20 años de experiencia.",
  },
  {
    slug: "estructuras-obra-civil",
    title: "Estructuras para Obra Civil",
    shortTitle: "Estructuras",
    description:
      "Diseño y construcción de estructuras de hormigón armado, metálicas y mixtas para obra civil.",
    longDescription:
      "En Fervian ejecutamos todo tipo de estructuras para obra civil, desde muros de contención y obras de paso hasta puentes y pasos superiores. Nuestro departamento técnico se encarga del estudio de cada proyecto para garantizar la solución estructural más adecuada, optimizando costes sin comprometer la seguridad. Trabajamos con hormigón armado, estructuras metálicas y soluciones mixtas adaptadas a las necesidades de cada obra.",
    icon: "Landmark",
    image: "/images/services/estructuras.jpg",
    features: [
      "Muros de contención y pantallas",
      "Obras de paso y marcos",
      "Cimentaciones especiales",
      "Estructuras de hormigón armado",
      "Estructuras metálicas",
      "Rehabilitación estructural",
    ],
    metaTitle:
      "Estructuras de Obra Civil en Cáceres | Fervian",
    metaDescription:
      "Construcción de estructuras de hormigón armado y metálicas para obra civil en Cáceres y Extremadura. Muros, puentes, cimentaciones. Solicite presupuesto.",
  },
  {
    slug: "edificacion",
    title: "Edificación",
    shortTitle: "Edificación",
    description:
      "Construcción y rehabilitación de edificios públicos y privados: viviendas, centros educativos, sanitarios y administrativos.",
    longDescription:
      "Fervian desarrolla proyectos de edificación tanto de obra nueva como de rehabilitación, abarcando viviendas de promoción pública y privada, edificios administrativos, centros educativos, consultorios médicos, residencias de ancianos, centros culturales y deportivos. Nuestro enfoque integral incluye desde la estructura hasta los acabados finales, garantizando calidad y cumplimiento de plazos en cada proyecto.",
    icon: "Home",
    image: "/images/services/edificacion.jpg",
    features: [
      "Viviendas de promoción pública y privada",
      "Edificios administrativos y culturales",
      "Centros educativos y sanitarios",
      "Residencias de ancianos",
      "Rehabilitación de edificios",
      "Reformas integrales",
    ],
    metaTitle:
      "Construcción y Edificación en Cáceres | Fervian",
    metaDescription:
      "Construcción y rehabilitación de edificios en Cáceres y Extremadura. Viviendas, centros educativos, sanitarios y administrativos. Empresa con más de 20 años de experiencia.",
  },
  {
    slug: "depuradoras",
    title: "Depuradoras de Agua",
    shortTitle: "Depuradoras",
    description:
      "Construcción de estaciones de tratamiento de agua potable (ETAP) y depuradoras de aguas residuales (EDAR).",
    longDescription:
      "Contamos con experiencia en la construcción de infraestructuras de tratamiento de agua, tanto estaciones de tratamiento de agua potable (ETAP) como estaciones depuradoras de aguas residuales (EDAR). Ejecutamos la obra civil completa, incluyendo excavaciones, cimentaciones, tanques, conducciones y urbanización del recinto. Colaboramos con empresas especializadas en equipos electromecánicos para ofrecer soluciones integrales.",
    icon: "Filter",
    image: "/images/services/depuradoras.jpg",
    features: [
      "Estaciones de tratamiento (ETAP)",
      "Depuradoras de aguas residuales (EDAR)",
      "Tanques y decantadores",
      "Obra civil de instalaciones",
      "Conducciones y colectores",
      "Urbanización de recintos",
    ],
    metaTitle:
      "Construcción de Depuradoras ETAP y EDAR en Cáceres | Fervian",
    metaDescription:
      "Construcción de depuradoras ETAP y EDAR en Cáceres y Extremadura. Obra civil para tratamiento de agua potable y aguas residuales. Presupuesto sin compromiso.",
  },
  {
    slug: "defensa-margenes-cauces",
    title: "Defensa de Márgenes y Cauces",
    shortTitle: "Cauces",
    description:
      "Obras de encauzamiento, protección de márgenes fluviales y defensa contra avenidas.",
    longDescription:
      "Fervian ejecuta obras hidráulicas de defensa de márgenes y encauzamiento de ríos y arroyos. Nuestros trabajos incluyen escolleras, gaviones, muros de encauzamiento, motas de defensa y obras de protección contra avenidas e inundaciones. Trabajamos en estrecha colaboración con la Confederación Hidrográfica del Tajo y otras administraciones para proteger poblaciones y terrenos agrícolas de los efectos de las crecidas.",
    icon: "Waves",
    image: "/images/services/cauces.jpg",
    features: [
      "Encauzamiento de ríos y arroyos",
      "Escolleras y gaviones",
      "Muros de encauzamiento",
      "Motas de defensa contra avenidas",
      "Protección de márgenes fluviales",
      "Restauración de cauces",
    ],
    metaTitle:
      "Defensa de Márgenes y Cauces en Cáceres | Fervian",
    metaDescription:
      "Obras de encauzamiento, protección de márgenes y defensa contra avenidas en Cáceres y Extremadura. Escolleras, gaviones y obras hidráulicas. Solicite información.",
  },
  {
    slug: "conservacion-carreteras",
    title: "Conservación y Mantenimiento de Carreteras",
    shortTitle: "Conservación",
    description:
      "Contratos de conservación, acondicionamiento y mantenimiento de la red viaria.",
    longDescription:
      "Fervian cuenta con amplia experiencia en contratos de conservación y mantenimiento de la red viaria, tanto autonómica como provincial. Nuestros trabajos incluyen el bacheo y reparación de firmes, limpieza de cunetas y obras de drenaje, mantenimiento de señalización, desbroces y limpieza de márgenes, así como la atención a incidencias y vialidad invernal. Participamos en UTEs con otras empresas para la explotación de la red viaria de la Diputación de Cáceres.",
    icon: "HardHat",
    image: "/images/services/conservacion.jpg",
    features: [
      "Bacheo y reparación de firmes",
      "Limpieza de cunetas y drenajes",
      "Mantenimiento de señalización",
      "Desbroces y limpieza de márgenes",
      "Vialidad invernal",
      "Atención a incidencias viarias",
    ],
    metaTitle:
      "Conservación de Carreteras en Cáceres | Fervian",
    metaDescription:
      "Conservación y mantenimiento de carreteras en Cáceres y Extremadura. Bacheo, limpieza, señalización y vialidad invernal. Contratos con administraciones públicas.",
  },
  {
    slug: "suministro-aridos",
    title: "Suministro de Áridos",
    shortTitle: "Áridos",
    description:
      "Extracción, procesado y venta de áridos: arena, grava, zahorra y tierra vegetal con certificación AENOR.",
    longDescription:
      "El suministro de áridos es una de las piezas clave en la historia empresarial de Fervian. En nuestras instalaciones de la gravera de Torrejoncillo extraemos y procesamos material para formar diferentes tipos de áridos que suministramos a obras de toda la provincia de Cáceres. Contamos con planta de tratamiento de áridos con certificación AENOR de producto, garantizando la calidad de todos nuestros materiales.",
    icon: "Mountain",
    image: "/images/services/aridos.jpg",
    features: [
      "Arena de río (0/5, 0/1 fina, 1/5)",
      "Gravilla (5/20-T, 12/20-R)",
      "Garbancillo (20/40-T, 20/40-R)",
      "Zahorra artificial y natural",
      "Tierra vegetal",
      "Certificación AENOR",
    ],
    metaTitle:
      "Venta de Áridos en Cáceres — Arena, Grava, Zahorra | Fervian",
    metaDescription:
      "Venta y suministro de áridos en Cáceres: arena, grava, zahorra y tierra vegetal. Gravera propia en Torrejoncillo con certificación AENOR. Solicite presupuesto.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
