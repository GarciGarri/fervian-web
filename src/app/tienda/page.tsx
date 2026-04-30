import type { Metadata } from "next";
import Link from "next/link";
import {
  ShoppingCart,
  Package,
  CheckCircle2,
  Phone,
  Truck,
  Shield,
  Info,
} from "lucide-react";
import { cements, stockLabel } from "./cements";
import { stockImages } from "@/lib/stock-images";
import AddToCartButton from "./components/AddToCartButton";

export const metadata: Metadata = {
  title: "Tienda — Cementos | Grupo Fervian",
  description:
    "Catálogo demo de cementos. Cemento Portland, cemento blanco y cemento rápido para obra y reparación.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function TiendaPage() {
  return (
    <>
      {/* Demo banner */}
      <div className="bg-amber-50 border-b border-amber-200">
        <div className="container-custom px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-center gap-2 text-amber-800 text-sm">
          <Info className="w-4 h-4 shrink-0" />
          <span>
            <strong>Tienda demo</strong> — los precios y la pasarela de pago son simulados. Para pedidos reales, contacte con nosotros.
          </span>
        </div>
      </div>

      {/* Header */}
      <section className="hero-gradient py-16 lg:py-20">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
              <Link href="/" className="hover:text-white transition-colors">
                Inicio
              </Link>
              <span>/</span>
              <span className="text-accent-400">Tienda — Cementos</span>
            </nav>
            <div className="flex items-center gap-4 mb-4">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-white/10 text-white rounded-2xl backdrop-blur-sm">
                <ShoppingCart className="w-8 h-8" />
              </div>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                Cementos
              </h1>
            </div>
            <p className="text-lg text-slate-300 leading-relaxed">
              Catálogo de cementos para obra, reparación y acabados decorativos. Suministro directo en toda la provincia de Cáceres.
            </p>
            <div className="flex flex-wrap gap-4 mt-6 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-accent-400" />
                Envío a obra
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-accent-400" />
                Producto certificado
              </div>
              <div className="flex items-center gap-2">
                <Package className="w-4 h-4 text-accent-400" />
                Sacos de 5 a 25 kg
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-3">
            <div>
              <div className="accent-line mb-3" />
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary-800">
                4 referencias disponibles
              </h2>
            </div>
            <div className="text-sm text-slate-500">
              Precios IVA no incluido · Saco
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cements.map((cement) => {
              const stock = stockLabel[cement.stock];
              const isUnavailable = cement.stock === "bajo-pedido";
              return (
                <article
                  key={cement.slug}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden card-hover flex flex-col"
                >
                  {/* Image area */}
                  <div className="relative bg-gradient-to-br from-slate-100 to-slate-200 h-44 overflow-hidden">
                    {stockImages.cements[cement.slug] ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={stockImages.cements[cement.slug]}
                        alt={cement.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Package className="w-16 h-16 text-slate-400" strokeWidth={1.25} />
                      </div>
                    )}
                    {cement.badge && (
                      <span
                        className={`absolute top-3 left-3 ${cement.badgeColor} text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm`}
                      >
                        {cement.badge}
                      </span>
                    )}
                    <span
                      className={`absolute top-3 right-3 text-xs font-medium px-2.5 py-1 rounded-full border ${stock.classes}`}
                    >
                      {stock.label}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <div className="text-xs font-medium text-accent-600 uppercase tracking-wider mb-2">
                      {cement.type}
                    </div>
                    <h3 className="font-heading text-base font-bold text-primary-800 leading-snug mb-2">
                      {cement.name}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                      {cement.description}
                    </p>

                    <ul className="space-y-1.5 mb-5">
                      {cement.uses.slice(0, 3).map((use) => (
                        <li
                          key={use}
                          className="flex items-center gap-2 text-xs text-slate-600"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent-500 shrink-0" />
                          {use}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-4 border-t border-slate-100">
                      <div className="flex items-end justify-between mb-3">
                        <div>
                          <div className="text-xs text-slate-500">{cement.weight}</div>
                          <div className="font-heading text-2xl font-bold text-primary-800">
                            {cement.price.toFixed(2).replace(".", ",")}
                            <span className="text-sm font-medium text-slate-500 ml-1">€</span>
                          </div>
                        </div>
                      </div>
                      <AddToCartButton
                        slug={cement.slug}
                        name={cement.name}
                        price={cement.price}
                        weight={cement.weight}
                        disabled={isUnavailable}
                        disabledLabel="Solicitar bajo pedido"
                      />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Info row */}
          <div className="mt-12 grid sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-2xl p-5 border border-slate-200 flex items-start gap-3">
              <div className="w-10 h-10 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center shrink-0">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-primary-800 text-sm mb-1">
                  Envío a obra
                </div>
                <div className="text-xs text-slate-500 leading-relaxed">
                  Reparto con flota propia en toda la provincia de Cáceres.
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-slate-200 flex items-start gap-3">
              <div className="w-10 h-10 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-primary-800 text-sm mb-1">
                  Producto certificado
                </div>
                <div className="text-xs text-slate-500 leading-relaxed">
                  Cementos conformes a normativa UNE-EN 197-1.
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-slate-200 flex items-start gap-3">
              <div className="w-10 h-10 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-primary-800 text-sm mb-1">
                  Asesoramiento técnico
                </div>
                <div className="text-xs text-slate-500 leading-relaxed">
                  ¿No sabe qué cemento elegir? Llámenos al 927 26 01 08.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-14">
        <div className="container-custom px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-3">
            ¿Necesita un volumen mayor?
          </h2>
          <p className="text-slate-300 mb-6 max-w-xl mx-auto">
            Para pedidos por palets o suministro continuo a obra, solicite presupuesto personalizado.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contacto/"
              className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-8 py-3.5 rounded-xl font-semibold transition-colors shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Solicitar Presupuesto
            </Link>
            <a
              href="tel:927260108"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3.5 rounded-xl font-semibold transition-colors"
            >
              Llamar: 927 26 01 08
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
