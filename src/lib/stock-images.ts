/**
 * Banco de imágenes — fotos reales de Fervian rescatadas de la versión Joomla
 * archivada en Wayback Machine y servidas localmente desde /public/images/fervian/.
 *
 * Para sustituir cualquier hueco por una foto distinta, basta con reemplazar
 * el archivo en disco manteniendo el nombre, o cambiar la ruta aquí.
 */

const f = (name: string) => `/images/fervian/${name}`;

export const stockImages = {
  // Hero principal (home)
  hero: f("instalaciones-casar.jpg"),
  // Bloque "una empresa con experiencia" (home + empresa)
  team: f("equipo.jpg"),
  // Vista lateral del bloque mapa (contacto)
  map: f("ubicacion-planta.jpg"),

  // 9 servicios (clave = slug)
  services: {
    "obras-lineales-carreteras": f("obra-1.jpg"),
    "urbanizaciones-pavimentaciones": f("obra-7.jpg"),
    "abastecimiento-saneamiento": f("obra-8.jpg"),
    "estructuras-obra-civil": f("obra-6.jpg"),
    edificacion: f("obra-11.jpg"),
    depuradoras: f("obra-13.jpg"),
    "defensa-margenes-cauces": f("obra-14.jpg"),
    "conservacion-carreteras": f("obra-2.jpg"),
    "suministro-aridos": f("obra-4.jpg"),
  } as Record<string, string>,

  // 4 empresas del grupo (clave = slug)
  group: {
    "fervian-vias-aridos": f("vias-aridos.jpg"),
    "fernandez-hermanos": f("maquinaria.jpg"),
    "hormigones-fervian": f("plantas-hormigon.jpg"),
    "mv-maquinaria": f("maquinaria-mv.jpg"),
  } as Record<string, string>,

  // Proyectos (clave = slug del proyecto)
  projects: {
    "modernizacion-acequias-alagon": f("obra-8.jpg"),
    "reparacion-canales-alagon": f("obra-14.jpg"),
    "renovacion-red-abastecimiento-r66a": f("obra-2.jpg"),
    "reordenacion-roche-sur-yon": f("obra-7.jpg"),
    "accesibilidad-las-trescientas": f("obra-11.jpg"),
    "explotacion-red-viaria-diputacion": f("obra-1.jpg"),
    "obras-monroy-torrejon": f("obra-4.jpg"),
    "obras-fcc-construccion": f("obra-13.jpg"),
  } as Record<string, string>,

  // 4 cementos (clave = slug del producto)
  cements: {
    "portland-cem-i-525r": f("hormigon.jpg"),
    "portland-cem-ii-425r": f("plantas-hormigon.jpg"),
    "blanco-bl-i-525": f("calidad.jpg"),
    "rapido-cnr-aluminoso": f("obra-10.jpg"),
  } as Record<string, string>,
};

export function imageFor(
  group: keyof Omit<typeof stockImages, "hero" | "team" | "map">,
  slug: string,
): string | undefined {
  const set = stockImages[group] as Record<string, string>;
  return set?.[slug];
}
