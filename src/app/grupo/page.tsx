import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Mountain,
  Factory,
  Truck,
  CheckCircle2,
  Phone,
} from "lucide-react";
import { groupCompanies } from "@/lib/data/company";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Grupo Fervian — Nuestras Empresas",
  description:
    "Grupo Fervian: Fervian Vías y Áridos, Fernández Hermanos, Hormigones Fervian y M&V Maquinaria. Construcción, áridos, hormigón y maquinaria en Cáceres y Extremadura.",
  alternates: {
    canonical: "https://www.fervian.es/grupo/",
  },
  openGraph: {
    title: "Grupo Fervian — Nuestras Empresas | Fervian",
    description:
      "Conozca las empresas del Grupo Fervian: construcción, áridos, hormigón y maquinaria en Cáceres.",
  },
};

const companyIcons: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-10 h-10" />,
  Mountain: <Mountain className="w-10 h-10" />,
  Factory: <Factory className="w-10 h-10" />,
  Truck: <Truck className="w-10 h-10" />,
};

export default function GrupoPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", url: "https://www.fervian.es" },
          { name: "Grupo Fervian", url: "https://www.fervian.es/grupo/" },
        ]}
      />

      {/* Header */}
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
              <span>/</span>
              <span className="text-accent-400">Grupo Fervian</span>
            </nav>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">
              Grupo Fervian
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Un grupo empresarial integrado que ofrece soluciones completas: desde la extracción de áridos hasta la ejecución de obra, pasando por el suministro de hormigón y el alquiler de maquinaria.
            </p>
          </div>
        </div>
      </section>

      {/* Companies */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <div className="accent-line mx-auto mb-4" />
            <h2 className="font-heading text-3xl font-bold text-primary-800 mb-4">
              Nuestras Empresas
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Cuatro empresas especializadas que trabajan de forma coordinada para ofrecer un servicio integral
            </p>
          </div>

          <div className="space-y-8">
            {groupCompanies.map((gc, i) => (
              <div
                key={gc.slug}
                className={`rounded-3xl overflow-hidden border border-slate-200 card-hover ${
                  i % 2 === 0 ? "" : ""
                }`}
              >
                <div className="grid lg:grid-cols-5 gap-0">
                  {/* Image placeholder */}
                  <div
                    className={`lg:col-span-2 ${gc.color} flex items-center justify-center p-12 min-h-[250px]`}
                  >
                    <div className="text-white/80">
                      {companyIcons[gc.icon]}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-3 p-8 sm:p-10">
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="font-heading text-2xl font-bold text-primary-800">
                        {gc.name}
                      </h3>
                      <span className="text-xs font-medium bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full">
                        Desde {gc.founded}
                      </span>
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {gc.description}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {gc.services.map((service) => (
                        <div
                          key={service}
                          className="flex items-center gap-2 text-sm text-slate-700"
                        >
                          <CheckCircle2 className="w-4 h-4 text-accent-500 shrink-0" />
                          {service}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Synergies */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-14">
            <div className="accent-line mx-auto mb-4" />
            <h2 className="font-heading text-3xl font-bold text-primary-800 mb-4">
              Ventajas del Grupo
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Servicio integral",
                description:
                  "Desde la extracción de materiales hasta la entrega de la obra terminada, todo bajo un mismo grupo empresarial.",
              },
              {
                title: "Control de calidad",
                description:
                  "Al fabricar nuestros propios áridos y hormigones, garantizamos la calidad de los materiales en cada obra.",
              },
              {
                title: "Maquinaria propia",
                description:
                  "Disponemos de un amplio parque de maquinaria propio, lo que nos permite una respuesta rápida y competitiva.",
              },
              {
                title: "Optimización de costes",
                description:
                  "La integración vertical del grupo permite optimizar costes y ofrecer precios competitivos.",
              },
              {
                title: "Experiencia contrastada",
                description:
                  "Más de 20 años de trayectoria avalan nuestra capacidad técnica y profesional.",
              },
              {
                title: "Equipo multidisciplinar",
                description:
                  "Profesionales especializados en cada área: obra civil, áridos, hormigón y maquinaria.",
              },
            ].map((advantage) => (
              <div
                key={advantage.title}
                className="bg-white rounded-2xl p-6 border border-slate-100 card-hover"
              >
                <h3 className="font-heading font-semibold text-primary-800 mb-2">
                  {advantage.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-16">
        <div className="container-custom px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4">
            ¿Necesita un grupo empresarial de confianza?
          </h2>
          <p className="text-slate-300 mb-6 max-w-xl mx-auto">
            Contacte con nosotros y descubra cómo el Grupo Fervian puede ayudarle.
          </p>
          <Link
            href="/contacto/"
            className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl font-semibold transition-colors shadow-lg"
          >
            <Phone className="w-5 h-5" />
            Contactar
          </Link>
        </div>
      </section>
    </>
  );
}
