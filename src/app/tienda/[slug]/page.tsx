import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Phone,
  CheckCircle2,
  Mountain,
  Factory,
  Truck,
  Package,
  Tag,
  Building2,
} from "lucide-react";
import { products, getProductBySlug } from "@/lib/data/products";

const iconMap: Record<string, React.ReactNode> = {
  Mountain: <Mountain className="w-10 h-10" />,
  Factory: <Factory className="w-10 h-10" />,
  Truck: <Truck className="w-10 h-10" />,
};

const categoryColors: Record<string, string> = {
  aridos: "bg-accent-100 text-accent-700",
  hormigon: "bg-slate-100 text-slate-700",
  maquinaria: "bg-yellow-100 text-yellow-700",
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) return {};

  return {
    title: `${product.name} — ${product.categoryLabel} | Grupo Fervian`,
    description: product.description,
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) return notFound();

  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.slug !== product.slug
  );
  const otherProducts = products.filter(
    (p) => p.category !== product.category
  );

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
              <Link
                href="/tienda/"
                className="hover:text-white transition-colors"
              >
                Tienda
              </Link>
              <span>/</span>
              <span className="text-accent-400">{product.shortName}</span>
            </nav>
            <div className="flex items-center gap-4 mb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 text-white rounded-2xl backdrop-blur-sm">
                {iconMap[product.icon] || <Package className="w-10 h-10" />}
              </div>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                {product.name}
              </h1>
            </div>
            <p className="text-lg text-slate-300 leading-relaxed">
              {product.description}
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-6 text-sm text-slate-400">
              <span className="flex items-center gap-1.5">
                <Tag className="w-4 h-4" />
                {product.categoryLabel}
              </span>
              <span className="flex items-center gap-1.5">
                <Building2 className="w-4 h-4" />
                {product.company}
              </span>
              <span className="flex items-center gap-1.5">
                <Package className="w-4 h-4" />
                Unidad: {product.unit}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <div className="accent-line mb-6" />
                <h2 className="font-heading text-2xl font-bold text-primary-800 mb-4">
                  Descripción del producto
                </h2>
                <p className="text-slate-600 leading-relaxed text-lg mb-8">
                  {product.longDescription}
                </p>

                <h3 className="font-heading text-xl font-bold text-primary-800 mb-4">
                  Características
                </h3>
                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {product.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl"
                    >
                      <CheckCircle2 className="w-5 h-5 text-accent-500 mt-0.5 shrink-0" />
                      <span className="text-sm text-slate-700 font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Info box */}
                <div className="bg-primary-50 rounded-2xl p-8 mb-8">
                  <h3 className="font-heading text-xl font-bold text-primary-800 mb-4">
                    ¿Cómo solicitar este producto?
                  </h3>
                  <div className="space-y-3">
                    {[
                      "Contacte con nosotros por teléfono o formulario",
                      "Indíquenos la cantidad y el lugar de entrega",
                      "Le preparamos un presupuesto personalizado",
                      "Suministro rápido con transporte propio",
                      "Facturación clara y sin sorpresas",
                    ].map((step) => (
                      <div key={step} className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-primary-600 shrink-0" />
                        <span className="text-sm text-slate-700">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-primary-600 rounded-2xl p-8 text-white">
                <h3 className="font-heading text-xl font-bold mb-2">
                  ¿Necesita {product.shortName.toLowerCase()}?
                </h3>
                <p className="text-primary-200 mb-5 text-sm">
                  Solicite presupuesto sin compromiso. Le asesoramos sobre la
                  mejor opción para su obra.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contacto/"
                    className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Solicitar Presupuesto
                  </Link>
                  <a
                    href="tel:927260108"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3 rounded-xl text-sm font-semibold transition-colors"
                  >
                    Llamar: 927 26 01 08
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                {/* Related products */}
                {relatedProducts.length > 0 && (
                  <div className="bg-slate-50 rounded-2xl p-6">
                    <h3 className="font-heading font-semibold text-primary-800 mb-4 text-sm uppercase tracking-wider">
                      Más {product.categoryLabel}
                    </h3>
                    <div className="space-y-2">
                      {relatedProducts.map((p) => (
                        <Link
                          key={p.slug}
                          href={`/tienda/${p.slug}/`}
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-white transition-colors group"
                        >
                          <div className="w-8 h-8 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                            <ArrowRight className="w-4 h-4" />
                          </div>
                          <span className="text-sm text-slate-700 group-hover:text-primary-600 transition-colors font-medium">
                            {p.shortName}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Other categories */}
                <div className="bg-slate-50 rounded-2xl p-6">
                  <h3 className="font-heading font-semibold text-primary-800 mb-4 text-sm uppercase tracking-wider">
                    Otros Productos
                  </h3>
                  <div className="space-y-2">
                    {otherProducts.slice(0, 4).map((p) => (
                      <Link
                        key={p.slug}
                        href={`/tienda/${p.slug}/`}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-white transition-colors group"
                      >
                        <div className="w-8 h-8 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-sm text-slate-700 group-hover:text-primary-600 transition-colors font-medium block">
                            {p.shortName}
                          </span>
                          <span
                            className={`text-xs px-1.5 py-0.5 rounded ${categoryColors[p.category]}`}
                          >
                            {p.categoryLabel}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="bg-accent-50 rounded-2xl p-6 border border-accent-100">
                  <h3 className="font-heading font-semibold text-accent-800 mb-2">
                    ¿Tiene dudas?
                  </h3>
                  <p className="text-sm text-accent-700 mb-4">
                    Llámenos y le asesoraremos sin compromiso.
                  </p>
                  <a
                    href="tel:927260108"
                    className="flex items-center gap-2 text-accent-700 font-bold text-lg"
                  >
                    <Phone className="w-5 h-5" />
                    927 26 01 08
                  </a>
                </div>

                <Link
                  href="/tienda/"
                  className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-800 font-medium transition-colors"
                >
                  ← Ver todos los productos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
