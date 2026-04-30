import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ArrowLeft,
  Phone,
  CheckCircle2,
  Route,
  Building,
  Droplets,
  Landmark,
  Home,
  Filter,
  Waves,
  HardHat,
  Mountain,
} from "lucide-react";
import { services, getServiceBySlug } from "@/lib/data/services";
import { stockImages } from "@/lib/stock-images";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/seo/JsonLd";

const iconMap: Record<string, React.ReactNode> = {
  Route: <Route className="w-10 h-10" />,
  Building: <Building className="w-10 h-10" />,
  Droplets: <Droplets className="w-10 h-10" />,
  Landmark: <Landmark className="w-10 h-10" />,
  Home: <Home className="w-10 h-10" />,
  Filter: <Filter className="w-10 h-10" />,
  Waves: <Waves className="w-10 h-10" />,
  HardHat: <HardHat className="w-10 h-10" />,
  Mountain: <Mountain className="w-10 h-10" />,
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `https://www.fervian.es/servicios/${service.slug}/`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
    },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  if (!service) return notFound();

  const currentIndex = services.findIndex((s) => s.slug === params.slug);
  const otherServices = services.filter((s) => s.slug !== params.slug);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", url: "https://www.fervian.es" },
          { name: "Servicios", url: "https://www.fervian.es/servicios/" },
          {
            name: service.title,
            url: `https://www.fervian.es/servicios/${service.slug}/`,
          },
        ]}
      />
      <ServiceJsonLd
        name={service.title}
        description={service.description}
        url={`https://www.fervian.es/servicios/${service.slug}/`}
      />

      {/* Header */}
      <section className="relative hero-gradient py-20 lg:py-28 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={stockImages.services[service.slug] || stockImages.hero}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="container-custom px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
              <span>/</span>
              <Link href="/servicios/" className="hover:text-white transition-colors">Servicios</Link>
              <span>/</span>
              <span className="text-accent-400">{service.shortTitle}</span>
            </nav>
            <div className="flex items-center gap-4 mb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 text-white rounded-2xl backdrop-blur-sm">
                {iconMap[service.icon] || <Building className="w-10 h-10" />}
              </div>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                {service.title}
              </h1>
            </div>
            <p className="text-lg text-slate-300 leading-relaxed">
              {service.description}
            </p>
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
                  Descripción del Servicio
                </h2>
                <p className="text-slate-600 leading-relaxed text-lg mb-8">
                  {service.longDescription}
                </p>

                <h3 className="font-heading text-xl font-bold text-primary-800 mb-4">
                  ¿Qué incluye este servicio?
                </h3>
                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl"
                    >
                      <CheckCircle2 className="w-5 h-5 text-accent-500 mt-0.5 shrink-0" />
                      <span className="text-sm text-slate-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Why choose us */}
                <div className="bg-primary-50 rounded-2xl p-8 mb-8">
                  <h3 className="font-heading text-xl font-bold text-primary-800 mb-4">
                    ¿Por qué elegir Fervian?
                  </h3>
                  <div className="space-y-3">
                    {[
                      "Más de 20 años de experiencia en el sector",
                      "Equipo de profesionales cualificados",
                      "Maquinaria propia y moderna",
                      "Certificación AENOR en productos de áridos",
                      "Compromiso con plazos y calidad",
                      "Presupuesto personalizado sin compromiso",
                    ].map((reason) => (
                      <div key={reason} className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-primary-600 shrink-0" />
                        <span className="text-sm text-slate-700">{reason}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-primary-600 rounded-2xl p-8 text-white">
                <h3 className="font-heading text-xl font-bold mb-2">
                  ¿Necesita este servicio?
                </h3>
                <p className="text-primary-200 mb-5 text-sm">
                  Contacte con nosotros para recibir un presupuesto personalizado.
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
                <div className="bg-slate-50 rounded-2xl p-6">
                  <h3 className="font-heading font-semibold text-primary-800 mb-4 text-sm uppercase tracking-wider">
                    Otros Servicios
                  </h3>
                  <div className="space-y-2">
                    {otherServices.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/servicios/${s.slug}/`}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-white transition-colors group"
                      >
                        <div className="w-8 h-8 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                        <span className="text-sm text-slate-700 group-hover:text-primary-600 transition-colors font-medium">
                          {s.shortTitle}
                        </span>
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
