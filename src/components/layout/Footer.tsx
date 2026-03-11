import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { company } from "@/lib/data/company";
import { services } from "@/lib/data/services";

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      {/* Main footer */}
      <div className="container-custom section-padding pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Company info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-accent-500 rounded-lg flex items-center justify-center text-white font-heading font-bold text-lg">
                F
              </div>
              <div>
                <div className="font-heading font-bold text-white text-lg leading-tight">
                  FERVIAN
                </div>
                <div className="text-xs text-slate-400 leading-tight">
                  Vías y Áridos
                </div>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Empresa de construcción y obra pública fundada en 2002, especializada en infraestructuras, carreteras y suministro de áridos en Extremadura.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Servicios
            </h3>
            <ul className="space-y-2.5">
              {services.slice(0, 7).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/servicios/${service.slug}/`}
                    className="text-sm text-slate-400 hover:text-accent-400 transition-colors"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Enlaces
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/empresa/" className="text-sm text-slate-400 hover:text-accent-400 transition-colors">
                  La Empresa
                </Link>
              </li>
              <li>
                <Link href="/servicios/" className="text-sm text-slate-400 hover:text-accent-400 transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/proyectos/" className="text-sm text-slate-400 hover:text-accent-400 transition-colors">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="/grupo/" className="text-sm text-slate-400 hover:text-accent-400 transition-colors">
                  Grupo Fervian
                </Link>
              </li>
              <li>
                <Link href="/contacto/" className="text-sm text-slate-400 hover:text-accent-400 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Contacto
            </h3>
            <ul className="space-y-4">
              <li>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-accent-500 mt-0.5 shrink-0" />
                  <div className="text-sm text-slate-400">
                    <div className="font-medium text-slate-300">Sede Cáceres</div>
                    {company.contact.headquarters.address}
                    <br />
                    {company.contact.headquarters.postalCode} {company.contact.headquarters.city}
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-accent-500 mt-0.5 shrink-0" />
                  <div className="text-sm text-slate-400">
                    <div className="font-medium text-slate-300">Torrejoncillo</div>
                    {company.contact.office.address}
                    <br />
                    {company.contact.office.postalCode} {company.contact.office.city}
                  </div>
                </div>
              </li>
              <li>
                <a
                  href={`tel:${company.contact.headquarters.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-sm text-slate-400 hover:text-accent-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-accent-500 shrink-0" />
                  {company.contact.headquarters.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.contact.headquarters.email}`}
                  className="flex items-center gap-3 text-sm text-slate-400 hover:text-accent-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-accent-500 shrink-0" />
                  {company.contact.headquarters.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-800">
        <div className="container-custom flex flex-col sm:flex-row justify-between items-center py-5 px-4 sm:px-6 lg:px-8 gap-3">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} {company.legalName}. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <Link href="/politica-privacidad/" className="hover:text-slate-300 transition-colors">
              Política de Privacidad
            </Link>
            <Link href="/aviso-legal/" className="hover:text-slate-300 transition-colors">
              Aviso Legal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
