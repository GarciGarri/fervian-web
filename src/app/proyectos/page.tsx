import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Calendar, Users, Banknote, Phone } from "lucide-react";
import { projects } from "@/lib/data/projects";
import { stockImages } from "@/lib/stock-images";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Proyectos y Obras Realizadas",
  description:
    "Proyectos y obras realizadas por Fervian en Cáceres y Extremadura. Carreteras, urbanizaciones, saneamiento y obra civil. Vea nuestra experiencia y capacidad técnica.",
  alternates: {
    canonical: "https://www.fervian.es/proyectos/",
  },
  openGraph: {
    title: "Proyectos y Obras Realizadas | Fervian",
    description:
      "Descubra los proyectos y obras ejecutadas por Fervian en Cáceres y Extremadura.",
  },
};

export default function ProyectosPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", url: "https://www.fervian.es" },
          { name: "Proyectos", url: "https://www.fervian.es/proyectos/" },
        ]}
      />

      {/* Header */}
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
              <span>/</span>
              <span className="text-accent-400">Proyectos</span>
            </nav>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">
              Proyectos y Obras
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Una selección de nuestras obras más significativas que demuestran nuestra capacidad técnica y profesional en toda Extremadura.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <article
                key={project.slug}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden card-hover"
              >
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 h-52 relative overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={stockImages.projects[project.slug] || stockImages.hero}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-semibold bg-accent-500 text-white px-3 py-1.5 rounded-full shadow-sm">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <h2 className="font-heading text-lg font-bold text-primary-800 mb-3 leading-snug">
                    {project.title}
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <MapPin className="w-3.5 h-3.5 text-primary-500 shrink-0" />
                      {project.location}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <Calendar className="w-3.5 h-3.5 text-primary-500 shrink-0" />
                      {project.year}
                    </div>
                    {project.client && (
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <Users className="w-3.5 h-3.5 text-primary-500 shrink-0" />
                        {project.client}
                      </div>
                    )}
                    {project.budget && (
                      <div className="flex items-center gap-2 text-xs font-semibold text-primary-600">
                        <Banknote className="w-3.5 h-3.5 shrink-0" />
                        {project.budget}
                      </div>
                    )}
                  </div>
                  {project.partner && (
                    <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-500">
                      Colaboración con: <span className="font-medium text-slate-700">{project.partner}</span>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-16">
        <div className="container-custom px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4">
            ¿Quiere que su proyecto sea el próximo?
          </h2>
          <p className="text-slate-300 mb-6 max-w-xl mx-auto">
            Contacte con nosotros y le presentaremos una propuesta personalizada.
          </p>
          <Link
            href="/contacto/"
            className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl font-semibold transition-colors shadow-lg"
          >
            <Phone className="w-5 h-5" />
            Solicitar Presupuesto
          </Link>
        </div>
      </section>
    </>
  );
}
