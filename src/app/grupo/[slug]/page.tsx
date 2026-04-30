import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Phone,
  CheckCircle2,
  Building2,
  Mountain,
  Factory,
  Truck,
  MapPin,
  Calendar,
} from "lucide-react";
import { groupCompanies, getCompanyBySlug } from "@/lib/data/company";
import { stockImages } from "@/lib/stock-images";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

const iconMap: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-10 h-10" />,
  Mountain: <Mountain className="w-10 h-10" />,
  Factory: <Factory className="w-10 h-10" />,
  Truck: <Truck className="w-10 h-10" />,
};

export function generateStaticParams() {
  return groupCompanies.map((company) => ({ slug: company.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const company = getCompanyBySlug(params.slug);
  if (!company) return {};

  return {
    title: company.metaTitle,
    description: company.metaDescription,
    alternates: {
      canonical: `https://www.fervian.es/grupo/${company.slug}/`,
    },
    openGraph: {
      title: company.metaTitle,
      description: company.metaDescription,
    },
  };
}

export default function CompanyPage({ params }: { params: { slug: string } }) {
  const company = getCompanyBySlug(params.slug);
  if (!company) return notFound();

  const otherCompanies = groupCompanies.filter((c) => c.slug !== params.slug);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", url: "https://www.fervian.es" },
          { name: "Grupo Fervian", url: "https://www.fervian.es/grupo/" },
          {
            name: company.name,
            url: `https://www.fervian.es/grupo/${company.slug}/`,
          },
        ]}
      />

      {/* Header */}
      <section className="relative hero-gradient py-20 lg:py-28 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={stockImages.group[company.slug] || stockImages.hero}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="container-custom px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
              <Link href="/" className="hover:text-white transition-colors">
                Inicio
              </Link>
              <span>/</span>
              <Link
                href="/grupo/"
                className="hover:text-white transition-colors"
              >
                Grupo
              </Link>
              <span>/</span>
              <span className="text-accent-400">{company.name}</span>
            </nav>
            <div className="flex items-center gap-4 mb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 text-white rounded-2xl backdrop-blur-sm">
                {iconMap[company.icon] || <Building2 className="w-10 h-10" />}
              </div>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                {company.name}
              </h1>
            </div>
            <p className="text-lg text-slate-300 leading-relaxed">
              {company.description}
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-6 text-sm text-slate-400">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                Desde {company.founded}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                {company.location}
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
                  Sobre {company.name}
                </h2>
                <p className="text-slate-600 leading-relaxed text-lg mb-8">
                  {company.longDescription}
                </p>

                <h3 className="font-heading text-xl font-bold text-primary-800 mb-4">
                  Servicios y productos
                </h3>
                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {company.services.map((service) => (
                    <div
                      key={service}
                      className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl"
                    >
                      <CheckCircle2 className="w-5 h-5 text-accent-500 mt-0.5 shrink-0" />
                      <span className="text-sm text-slate-700 font-medium">
                        {service}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Why choose */}
                <div className="bg-primary-50 rounded-2xl p-8 mb-8">
                  <h3 className="font-heading text-xl font-bold text-primary-800 mb-4">
                    Nuestras ventajas
                  </h3>
                  <div className="space-y-3">
                    {company.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-primary-600 shrink-0" />
                        <span className="text-sm text-slate-700">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-primary-600 rounded-2xl p-8 text-white">
                <h3 className="font-heading text-xl font-bold mb-2">
                  ¿Necesita nuestros servicios?
                </h3>
                <p className="text-primary-200 mb-5 text-sm">
                  Contacte con nosotros para recibir información o un
                  presupuesto personalizado.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contacto/"
                    className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Solicitar Información
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
                    Otras Empresas del Grupo
                  </h3>
                  <div className="space-y-2">
                    {otherCompanies.map((c) => (
                      <Link
                        key={c.slug}
                        href={`/grupo/${c.slug}/`}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-white transition-colors group"
                      >
                        <div className="w-8 h-8 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                        <span className="text-sm text-slate-700 group-hover:text-primary-600 transition-colors font-medium">
                          {c.name}
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

                <Link
                  href="/grupo/"
                  className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-800 font-medium transition-colors"
                >
                  ← Ver todas las empresas del grupo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
