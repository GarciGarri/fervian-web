import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Award,
  Handshake,
  Lightbulb,
  CheckCircle2,
  Users,
  MapPin,
  Calendar,
  Target,
  Building2,
} from "lucide-react";
import { company } from "@/lib/data/company";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "La Empresa — Quiénes Somos",
  description:
    "Fervian Vías y Áridos S.L., empresa de construcción y obra pública fundada en 2002 en Cáceres. Más de 20 años de experiencia en Extremadura. Conozca nuestra historia, valores y equipo.",
  alternates: {
    canonical: "https://www.fervian.es/empresa/",
  },
  openGraph: {
    title: "La Empresa — Quiénes Somos | Fervian",
    description:
      "Empresa de construcción y obra pública en Cáceres con más de 20 años de experiencia en Extremadura.",
  },
};

const valueIcons: Record<string, React.ReactNode> = {
  Shield: <Shield className="w-7 h-7" />,
  Award: <Award className="w-7 h-7" />,
  Handshake: <Handshake className="w-7 h-7" />,
  Lightbulb: <Lightbulb className="w-7 h-7" />,
};

export default function EmpresaPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", url: "https://www.fervian.es" },
          { name: "La Empresa", url: "https://www.fervian.es/empresa/" },
        ]}
      />

      {/* Page Header */}
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
              <span>/</span>
              <span className="text-accent-400">La Empresa</span>
            </nav>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">
              Quiénes Somos
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Más de dos décadas construyendo las infraestructuras que vertebran Extremadura.
            </p>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="accent-line mb-4" />
              <h2 className="font-heading text-3xl font-bold text-primary-800 mb-6">
                Nuestra Historia
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                {company.longDescription}
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Nuestros trabajos se basan fundamentalmente en la ejecución de obras lineales como ensanches y acondicionamiento de carreteras, tuberías de saneamiento y abastecimiento, urbanizaciones, pavimentaciones y reformas de edificios. Realizamos grandes proyectos bajo la modalidad &ldquo;llave en mano&rdquo;, ofreciendo fórmulas que incluyen el mantenimiento posterior y la operación.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Calendar className="w-5 h-5" />, label: "Fundada en", value: "2002" },
                  { icon: <MapPin className="w-5 h-5" />, label: "Sede en", value: "Cáceres" },
                  { icon: <Users className="w-5 h-5" />, label: "Equipo de", value: "20+ profesionales" },
                  { icon: <Target className="w-5 h-5" />, label: "Ámbito", value: "Toda Extremadura" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl">
                    <div className="text-primary-600 mt-0.5">{item.icon}</div>
                    <div>
                      <div className="text-xs text-slate-500">{item.label}</div>
                      <div className="text-sm font-semibold text-primary-800">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-primary-100 rounded-3xl aspect-[4/3] flex items-center justify-center">
                <Building2 className="w-20 h-20 text-primary-200" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-14">
            <div className="accent-line mx-auto mb-4" />
            <h2 className="font-heading text-3xl font-bold text-primary-800 mb-4">
              Nuestros Valores
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Los pilares que definen nuestra forma de trabajar y la relación con nuestros clientes
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {company.values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-6 text-center card-hover border border-slate-100"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 text-primary-600 rounded-2xl mb-4">
                  {valueIcons[value.icon]}
                </div>
                <h3 className="font-heading text-lg font-semibold text-primary-800 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <div className="accent-line mx-auto mb-4" />
            <h2 className="font-heading text-3xl font-bold text-primary-800 mb-4">
              Nuestro Mercado
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Administraciones públicas",
              "Organismos y entes autónomos",
              "Empresas constructoras",
              "Particulares",
            ].map((client) => (
              <div key={client} className="flex items-center gap-3 bg-slate-50 p-5 rounded-xl">
                <CheckCircle2 className="w-5 h-5 text-accent-500 shrink-0" />
                <span className="font-medium text-primary-800">{client}</span>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-primary-50 rounded-2xl p-8 sm:p-10">
            <h3 className="font-heading text-xl font-bold text-primary-800 mb-4">
              Ámbitos de actividad
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                "Urbanizaciones residenciales y polígonos industriales",
                "Viviendas de iniciativa pública y privada",
                "Edificios administrativos y culturales",
                "Centros educativos y sanitarios",
                "Residencias de ancianos",
                "Rehabilitaciones y reformas",
                "Carreteras y autovías",
                "Redes de abastecimiento y saneamiento",
                "Depuradoras ETAP y EDAR",
              ].map((ambito) => (
                <div key={ambito} className="flex items-start gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-accent-500 mt-0.5 shrink-0" />
                  {ambito}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-16">
        <div className="container-custom px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4">
            ¿Necesita una empresa de construcción de confianza?
          </h2>
          <p className="text-slate-300 mb-6 max-w-xl mx-auto">
            Contáctenos para estudiar su proyecto sin compromiso.
          </p>
          <Link
            href="/contacto/"
            className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl font-semibold transition-colors shadow-lg"
          >
            Contactar
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
