import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Route,
  Building,
  Droplets,
  Landmark,
  Home,
  Filter,
  Waves,
  HardHat,
  Mountain,
  Phone,
} from "lucide-react";
import { services } from "@/lib/data/services";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Servicios de Construcción y Obra Pública",
  description:
    "Servicios de construcción en Cáceres y Extremadura: carreteras, urbanizaciones, saneamiento, edificación, depuradoras, áridos y maquinaria. Presupuesto sin compromiso.",
  alternates: {
    canonical: "https://www.fervian.es/servicios/",
  },
  openGraph: {
    title: "Servicios de Construcción y Obra Pública | Fervian",
    description:
      "Todos los servicios de construcción y obra pública de Fervian en Cáceres y Extremadura.",
  },
};

const iconMap: Record<string, React.ReactNode> = {
  Route: <Route className="w-8 h-8" />,
  Building: <Building className="w-8 h-8" />,
  Droplets: <Droplets className="w-8 h-8" />,
  Landmark: <Landmark className="w-8 h-8" />,
  Home: <Home className="w-8 h-8" />,
  Filter: <Filter className="w-8 h-8" />,
  Waves: <Waves className="w-8 h-8" />,
  HardHat: <HardHat className="w-8 h-8" />,
  Mountain: <Mountain className="w-8 h-8" />,
};

export default function ServiciosPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", url: "https://www.fervian.es" },
          { name: "Servicios", url: "https://www.fervian.es/servicios/" },
        ]}
      />

      {/* Header */}
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
              <span>/</span>
              <span className="text-accent-400">Servicios</span>
            </nav>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">
              Nuestros Servicios
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Soluciones integrales de construcción y obra pública para administraciones, empresas y particulares en toda Extremadura.
            </p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <Link
                key={service.slug}
                href={`/servicios/${service.slug}/`}
                className="group bg-white rounded-2xl border border-slate-200 p-8 card-hover relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary-100 transition-colors" />
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 text-primary-600 rounded-2xl mb-5 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                    {iconMap[service.icon] || <Building className="w-8 h-8" />}
                  </div>
                  <h2 className="font-heading text-xl font-semibold text-primary-800 mb-3 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-xs text-slate-500">
                        <div className="w-1.5 h-1.5 bg-accent-500 rounded-full shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent-600 group-hover:gap-2 transition-all">
                    Ver detalles
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-16">
        <div className="container-custom px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4">
            ¿Necesita alguno de nuestros servicios?
          </h2>
          <p className="text-slate-300 mb-6 max-w-xl mx-auto">
            Contacte con nosotros para recibir un presupuesto personalizado sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto/"
              className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl font-semibold transition-colors shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Solicitar Presupuesto
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
