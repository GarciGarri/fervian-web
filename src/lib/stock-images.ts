/**
 * Banco de imágenes de stock.
 *
 * Usamos Loremflickr (https://loremflickr.com) porque devuelve fotos de Flickr
 * filtradas por tags — más fiable que adivinar IDs de Unsplash y siempre da
 * contenido relevante. El parámetro `lock` fija el "azar" para que la misma
 * URL devuelva siempre la misma foto.
 *
 * Para reemplazar por fotos reales de Fervian, sustituye cualquier URL por
 * la ruta local correspondiente en /public/images/...
 */

const lf = (tags: string, lock: number, w = 1200, h = 800) =>
  `https://loremflickr.com/${w}/${h}/${tags}/all?lock=${lock}`;

export const stockImages = {
  // Hero principal (home)
  hero: lf("construction,site,extremadura", 11, 1920, 1080),
  // Bloque "una empresa con experiencia" (home + empresa)
  team: lf("construction,workers,blueprint", 12),
  // Mapa fallback (contacto)
  map: lf("caceres,city,spain", 13, 1600, 800),

  // 9 servicios (clave = slug)
  services: {
    "obras-lineales-carreteras": lf("highway,construction", 21),
    "urbanizaciones-pavimentaciones": lf("urban,pavement,sidewalk", 22),
    "abastecimiento-saneamiento": lf("pipe,water,construction", 23),
    "estructuras-obra-civil": lf("rebar,concrete,structure", 24),
    edificacion: lf("building,construction,crane", 25),
    depuradoras: lf("water,treatment,plant", 26),
    "defensa-margenes-cauces": lf("river,bank,gabion", 27),
    "conservacion-carreteras": lf("road,asphalt,paving", 28),
    "suministro-aridos": lf("gravel,quarry,aggregate", 29),
  } as Record<string, string>,

  // 4 empresas del grupo (clave = slug)
  group: {
    "fervian-vias-aridos": lf("construction,heavy,machinery", 31),
    "fernandez-hermanos": lf("quarry,gravel,extraction", 32),
    "hormigones-fervian": lf("concrete,mixer,truck", 33),
    "mv-maquinaria": lf("excavator,construction,equipment", 34),
  } as Record<string, string>,

  // Proyectos (clave = slug del proyecto)
  projects: {
    "modernizacion-acequias-alagon": lf("pipe,water,canal", 41),
    "reparacion-canales-alagon": lf("canal,water,repair", 42),
    "renovacion-red-abastecimiento-r66a": lf("pipe,construction,street", 43),
    "reordenacion-roche-sur-yon": lf("street,sidewalk,urban", 44),
    "accesibilidad-las-trescientas": lf("pavement,sidewalk,construction", 45),
    "explotacion-red-viaria-diputacion": lf("road,asphalt,maintenance", 46),
    "obras-monroy-torrejon": lf("village,street,construction", 47),
    "obras-fcc-construccion": lf("highway,construction,worker", 48),
  } as Record<string, string>,

  // 4 cementos (clave = slug del producto)
  cements: {
    "portland-cem-i-525r": lf("cement,bag,construction", 51, 800, 600),
    "portland-cem-ii-425r": lf("cement,construction,materials", 52, 800, 600),
    "blanco-bl-i-525": lf("white,cement,decorative", 53, 800, 600),
    "rapido-cnr-aluminoso": lf("concrete,repair,quick", 54, 800, 600),
  } as Record<string, string>,
};

export function imageFor(
  group: keyof Omit<typeof stockImages, "hero" | "team" | "map">,
  slug: string,
): string | undefined {
  const set = stockImages[group] as Record<string, string>;
  return set?.[slug];
}
