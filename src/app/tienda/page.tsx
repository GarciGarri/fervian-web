import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  Mountain,
  Factory,
  Truck,
  ShoppingCart,
  Package,
} from "lucide-react";
import { products, productCategories } from "@/lib/data/products";

export const metadata: Metadata = {
  title: "Tienda — Productos y Alquiler de Maquinaria | Grupo Fervian",
  description:
    "Áridos, hormigón preparado y alquiler de maquinaria en Cáceres. Arena, grava, zahorra, hormigón, retroexcavadoras, rodillos y dumpers. Solicite presupuesto.",
  robots: {
    index: false,
    follow: false,
  },
};

const categoryIcons: Record<string, React.ReactNode> = {
  aridos: <Mountain className="w-5 h-5" />,
  hormigon: <Factory className="w-5 h-5" />,
  maquinaria: <Truck className="w-5 h-5" />,
};

const categoryColors: Record<string, string> = {
  aridos: "bg-accent-100 text-accent-700",
  hormigon: "bg-slate-100 text-slate-700",
  maquinaria: "bg-yellow-100 text-yellow-700",
};

const categoryHeaderColors: Record<string, string> = {
  aridos: "bg-accent-600",
  hormigon: "bg-slate-700",
  maquinaria: "bg-yellow-600",
};

export default function TiendaPage() {
  return (
    <>
      {/* Header */}
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
              <Link href="/" className="hover:text-white transition-colors">
                Inicio
              </Link>
              <span>/</span>
              <span className="text-accent-400">Tienda</span>
            </nav>
            <div className="flex items-center gap-4 mb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 text-white rounded-2xl backdrop-blur-sm">
                <ShoppingCart className="w-10 h-10" />
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white">
                Tienda
              </h1>
            </div>
            <p className="text-lg text-slate-300 leading-relaxed">
              Materiales de construcción, hormigón preparado y alquiler de
              maquinaria. Todo lo que necesita para su obra, directamente del
              Grupo Fervian.
            </p>
          </div>
        </div>
      </section>

      {/* Products by category */}
      {productCategories.map((cat) => {
        const catProducts = products.filter((p) => p.category === cat.id);
        return (
          <section
            key={cat.id}
            id={cat.id}
            className="section-padding bg-white border-b border-slate-100"
          >
            <div className="container-custom">
              <div className="flex items-center gap-3 mb-2">
                <div
                  className={`inline-flex items-center justify-center w-10 h-10 rounded-xl text-white ${categoryHeaderColors[cat.id]}`}
                >
                  {categoryIcons[cat.id]}
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary-800">
                  {cat.label}
                </h2>
              </div>
              <p className="text-slate-500 mb-8 ml-[52px]">
                Suministrado por{" "}
                <span className="font-medium text-slate-700">
                  {cat.company}
                </span>
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {catProducts.map((product) => (
                  <Link
                    key={product.slug}
                    href={`/tienda/${product.slug}/`}
                    className="group rounded-2xl border border-slate-200 overflow-hidden card-hover"
                  >
                    {/* Image placeholder */}
                    <div
                      className={`${categoryHeaderColors[product.category]} h-40 flex items-center justify-center`}
                    >
                      <Package className="w-12 h-12 text-white/40" />
                    </div>
                    {/* Content */}
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className={`text-xs font-medium px-2 py-0.5 rounded-full ${categoryColors[product.category]}`}
                        >
                          {product.categoryLabel}
                        </span>
                        <span className="text-xs text-slate-400">
                          · {product.unit}
                        </span>
                      </div>
                      <h3 className="font-heading text-lg font-bold text-primary-800 mb-2 group-hover:text-accent-600 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed line-clamp-2 mb-4">
                        {product.description}
                      </p>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent-600 group-hover:text-accent-700 transition-colors">
                        Ver detalles
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="hero-gradient py-16">
        <div className="container-custom px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4">
            ¿Necesita materiales o maquinaria?
          </h2>
          <p className="text-slate-300 mb-6 max-w-xl mx-auto">
            Solicite presupuesto sin compromiso. Le asesoramos sobre el producto
            más adecuado para su obra.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contacto/"
              className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl font-semibold transition-colors shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Solicitar Presupuesto
            </Link>
            <a
              href="tel:927260108"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl font-semibold transition-colors"
            >
              Llamar: 927 26 01 08
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
