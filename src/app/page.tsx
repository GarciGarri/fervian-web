import Link from "next/link";
import {
  ArrowRight,
  Phone,
  Route,
  Building,
  Droplets,
  Landmark,
  Home,
  Filter,
  Waves,
  HardHat,
  Mountain,
  Shield,
  Award,
  Users,
  CheckCircle2,
  MapPin,
  Clock,
  TrendingUp,
} from "lucide-react";
import { company } from "@/lib/data/company";
import { services } from "@/lib/data/services";
import { projects } from "@/lib/data/projects";
import { stockImages } from "@/lib/stock-images";

const iconMap: Record<string, React.ReactNode> = {
  Route: <Route className="w-7 h-7" />,
  Building: <Building className="w-7 h-7" />,
  Droplets: <Droplets className="w-7 h-7" />,
  Landmark: <Landmark className="w-7 h-7" />,
  Home: <Home className="w-7 h-7" />,
  Filter: <Filter className="w-7 h-7" />,
  Waves: <Waves className="w-7 h-7" />,
  HardHat: <HardHat className="w-7 h-7" />,
  Mountain: <Mountain className="w-7 h-7" />,
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative hero-gradient min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={stockImages.hero}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-accent-500/20 text-accent-400 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <Shield className="w-4 h-4" />
              Más de 20 años construyendo Extremadura
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up text-balance">
              Construcción y Obra Pública en{" "}
              <span className="text-accent-400">Cáceres</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed animate-fade-in-up animation-delay-200">
              Carreteras, urbanizaciones, saneamiento, áridos y hormigón.
              Soluciones integrales de construcción para administraciones
              públicas y empresas en toda Extremadura.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
              <Link
                href="/contacto/"
                className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl text-base font-semibold transition-all shadow-lg shadow-accent-500/25 hover:shadow-accent-500/40"
              >
                Solicitar Presupuesto
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/servicios/"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl text-base font-semibold transition-all backdrop-blur-sm"
              >
                Ver Servicios
              </Link>
            </div>
          </div>
        </div>
        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full">
            <path
              d="M0 80h1440V30c-240 30-480 50-720 50S240 60 0 30v50z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white -mt-1">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 -mt-6 relative z-20">
            {[
              { icon: <Clock className="w-6 h-6" />, value: "20+", label: "Años de experiencia" },
              { icon: <CheckCircle2 className="w-6 h-6" />, value: "500+", label: "Proyectos realizados" },
              { icon: <Users className="w-6 h-6" />, value: "20+", label: "Profesionales" },
              { icon: <TrendingUp className="w-6 h-6" />, value: "3M€", label: "Facturación anual" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6 text-center card-hover"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-50 text-primary-600 rounded-xl mb-3">
                  {stat.icon}
                </div>
                <div className="font-heading text-3xl sm:text-4xl font-bold text-primary-800 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white" id="servicios">
        <div className="container-custom">
          <div className="text-center mb-14">
            <div className="accent-line mx-auto mb-4" />
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-800 mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Soluciones integrales de construcción y obra pública adaptadas a las necesidades de cada proyecto
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/servicios/${service.slug}/`}
                className="group bg-white rounded-2xl border border-slate-200 p-6 card-hover"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-50 text-primary-600 rounded-xl mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  {iconMap[service.icon] || <Building className="w-7 h-7" />}
                </div>
                <h3 className="font-heading text-lg font-semibold text-primary-800 mb-2 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-accent-600 group-hover:gap-2 transition-all">
                  Más información
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/servicios/"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors"
            >
              Ver todos los servicios
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="accent-line mb-4" />
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-800 mb-6">
                Una empresa con experiencia, solidez y compromiso
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                {company.longDescription}
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {company.values.slice(0, 4).map((value) => (
                  <div key={value.title} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent-500 mt-0.5 shrink-0" />
                    <div>
                      <div className="font-semibold text-primary-800 text-sm">{value.title}</div>
                      <div className="text-xs text-slate-500">{value.description.slice(0, 60)}...</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/empresa/"
                className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-colors"
              >
                Conocer la empresa
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <div className="bg-primary-100 rounded-3xl aspect-[4/3] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={stockImages.team}
                  alt="Equipo Fervian en obra"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-accent-500 text-white rounded-2xl p-6 shadow-xl">
                <div className="font-heading text-3xl font-bold">+20</div>
                <div className="text-sm text-accent-100">Años de experiencia</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <div className="accent-line mx-auto mb-4" />
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-800 mb-4">
              Proyectos Destacados
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Obras que avalan nuestra capacidad técnica y profesional
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 6).map((project) => (
              <div
                key={project.slug}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden card-hover"
              >
                <div className="bg-primary-50 h-48 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={stockImages.projects[project.slug] || stockImages.hero}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium bg-accent-50 text-accent-700 px-2.5 py-1 rounded-full">
                      {project.category}
                    </span>
                    <span className="text-xs text-slate-400">{project.year}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-primary-800 mb-2 text-sm leading-snug">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <MapPin className="w-3.5 h-3.5" />
                    {project.location}
                  </div>
                  {project.budget && (
                    <div className="mt-3 text-sm font-semibold text-primary-600">
                      {project.budget}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/proyectos/"
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-colors"
            >
              Ver todos los proyectos
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-gradient">
        <div className="container-custom section-padding">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
              ¿Tiene un proyecto en mente?
            </h2>
            <p className="text-slate-300 text-lg mb-8">
              Cuéntenos su proyecto y le ofreceremos una solución personalizada.
              Presupuesto sin compromiso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacto/"
                className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl text-base font-semibold transition-all shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Solicitar Presupuesto
              </Link>
              <a
                href="tel:927260108"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl text-base font-semibold transition-all backdrop-blur-sm"
              >
                Llamar: 927 26 01 08
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
