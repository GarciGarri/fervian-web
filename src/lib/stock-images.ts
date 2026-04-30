/**
 * Banco de imágenes — fotos reales de Fervian rescatadas del archive.org de
 * la versión Joomla y servidas localmente desde /public/images/fervian/.
 *
 * Cada hueco está mapeado a la foto cuyo CONTENIDO encaja con el contexto
 * (no por nombre): tubería de hormigón → saneamiento, paso → estructura,
 * carretera asfaltada → urbanización, camión Fernández Hnos → áridos, etc.
 */

const f = (name: string) => `/images/fervian/${name}`;

export const stockImages = {
  // Hero principal (home): carretera asfaltada acabada con curva y muro
  hero: f("obra-13.jpg"),
  // Bloque "una empresa con experiencia" / equipo: obreros echando hormigón con chaleco Fervian
  team: f("hormigon.jpg"),
  // Bloque mapa (contacto): mapa de Cáceres con la planta marcada
  map: f("ubicacion-planta.jpg"),

  // 9 servicios (clave = slug)
  services: {
    // Camión cuba + camiones de obra en pista de tierra
    "obras-lineales-carreteras": f("obra-11.jpg"),
    // Bulldozers + maquinaria moviendo tierras
    "urbanizaciones-pavimentaciones": f("obra-8.jpg"),
    // Tubería de hormigón gigante con obreros y grúa  ← perfecto
    "abastecimiento-saneamiento": f("obra-6.jpg"),
    // Caterpillar + marco de hormigón (paso/pontón)  ← perfecto
    "estructuras-obra-civil": f("obra-7.jpg"),
    // Collage de obras (4 fotos)
    edificacion: f("equipo-2.jpg"),
    // Collage de camiones y excavadoras
    depuradoras: f("maquinaria.jpg"),
    // Obra forestal con camión y maquinaria
    "defensa-margenes-cauces": f("obra-4.jpg"),
    // Caterpillar + camión + excavadora en obra de carretera
    "conservacion-carreteras": f("obra-10.jpg"),
    // Camión Fernández Hnos + Komatsu en arena/cantera  ← perfecto
    "suministro-aridos": f("obra-14.jpg"),
  } as Record<string, string>,

  // 4 empresas del grupo (clave = slug)
  group: {
    // Excavadora Daewoo 210WV con martillo, dramática
    "fervian-vias-aridos": f("obra-1.jpg"),
    // Camión rojo "Fernandez Hnos" con Komatsu PC450  ← perfecto
    "fernandez-hermanos": f("obra-14.jpg"),
    // Planta dosificadora con silos rojos y blancos  ← perfecto
    "hormigones-fervian": f("plantas-hormigon.jpg"),
    // Furgoneta Iveco con marca M&V Alquiler visible  ← perfecto
    "mv-maquinaria": f("obra-2.jpg"),
  } as Record<string, string>,

  // Proyectos (clave = slug del proyecto)
  projects: {
    // Acequias del Alagón → tubería de hormigón
    "modernizacion-acequias-alagon": f("obra-6.jpg"),
    // Reparación canales → obra rural
    "reparacion-canales-alagon": f("obra-4.jpg"),
    // Renovación abastecimiento → tubería
    "renovacion-red-abastecimiento-r66a": f("obra-6.jpg"),
    // Reordenación calle → carretera asfaltada
    "reordenacion-roche-sur-yon": f("obra-13.jpg"),
    // Accesibilidad barriada → paso de hormigón
    "accesibilidad-las-trescientas": f("obra-7.jpg"),
    // Red viaria Diputación → caterpillar carretera
    "explotacion-red-viaria-diputacion": f("obra-10.jpg"),
    // Pavimento Monroy/Torrejón → bulldozer mov. tierras
    "obras-monroy-torrejon": f("obra-8.jpg"),
    // Colaboración FCC → excavadora dramática
    "obras-fcc-construccion": f("obra-1.jpg"),
  } as Record<string, string>,

  // 4 cementos (clave = slug del producto)
  cements: {
    // CEM I → obreros echando hormigón (es para lo que se usa)
    "portland-cem-i-525r": f("hormigon.jpg"),
    // CEM II uso general → collage de maquinaria
    "portland-cem-ii-425r": f("equipo-2.jpg"),
    // Blanco → silos blancos (predominio del color)
    "blanco-bl-i-525": f("plantas-hormigon.jpg"),
    // Rápido (reparaciones) → paso/estructura de hormigón
    "rapido-cnr-aluminoso": f("obra-7.jpg"),
  } as Record<string, string>,
};

export function imageFor(
  group: keyof Omit<typeof stockImages, "hero" | "team" | "map">,
  slug: string,
): string | undefined {
  const set = stockImages[group] as Record<string, string>;
  return set?.[slug];
}
