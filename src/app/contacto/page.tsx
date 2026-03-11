import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { company } from "@/lib/data/company";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Contacto — Solicite Presupuesto Sin Compromiso",
  description:
    "Contacte con Fervian Vías y Áridos en Cáceres. Solicite presupuesto sin compromiso para su obra o proyecto. Teléfono: 927 26 01 08. Sede en Cáceres y Torrejoncillo.",
  alternates: {
    canonical: "https://www.fervian.es/contacto/",
  },
  openGraph: {
    title: "Contacto — Solicite Presupuesto | Fervian",
    description:
      "Contacte con Fervian en Cáceres. Presupuesto sin compromiso. Tel: 927 26 01 08.",
  },
};

export default function ContactoPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", url: "https://www.fervian.es" },
          { name: "Contacto", url: "https://www.fervian.es/contacto/" },
        ]}
      />

      {/* Header */}
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
              <span>/</span>
              <span className="text-accent-400">Contacto</span>
            </nav>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">
              Contacto
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Cuéntenos su proyecto. Le ofrecemos presupuesto personalizado sin compromiso.
            </p>
          </div>
        </div>
      </section>

      {/* Contact content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="accent-line mb-4" />
              <h2 className="font-heading text-2xl font-bold text-primary-800 mb-2">
                Solicite Presupuesto
              </h2>
              <p className="text-slate-600 mb-8">
                Rellene el formulario y nos pondremos en contacto con usted en menos de 24 horas.
              </p>

              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Su nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="apellidos" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Apellidos *
                    </label>
                    <input
                      type="text"
                      id="apellidos"
                      name="apellidos"
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Sus apellidos"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="su@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="927 000 000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="empresa" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Empresa / Organismo
                  </label>
                  <input
                    type="text"
                    id="empresa"
                    name="empresa"
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Nombre de su empresa (opcional)"
                  />
                </div>

                <div>
                  <label htmlFor="servicio" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Servicio de interés
                  </label>
                  <select
                    id="servicio"
                    name="servicio"
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-white"
                  >
                    <option value="">Seleccione un servicio</option>
                    <option value="carreteras">Carreteras y Obras Lineales</option>
                    <option value="urbanizaciones">Urbanizaciones y Pavimentaciones</option>
                    <option value="agua">Abastecimiento y Saneamiento</option>
                    <option value="estructuras">Estructuras de Obra Civil</option>
                    <option value="edificacion">Edificación</option>
                    <option value="depuradoras">Depuradoras ETAP/EDAR</option>
                    <option value="cauces">Defensa de Cauces</option>
                    <option value="conservacion">Conservación de Carreteras</option>
                    <option value="aridos">Suministro de Áridos</option>
                    <option value="hormigon">Hormigón</option>
                    <option value="maquinaria">Alquiler de Maquinaria</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Mensaje *
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                    placeholder="Descríbanos su proyecto o necesidad..."
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="privacidad"
                    name="privacidad"
                    required
                    className="mt-1 rounded border-slate-300 text-primary-600 focus:ring-primary-500"
                  />
                  <label htmlFor="privacidad" className="text-xs text-slate-500 leading-relaxed">
                    He leído y acepto la{" "}
                    <Link href="/politica-privacidad/" className="text-primary-600 underline">
                      Política de Privacidad
                    </Link>
                    . Sus datos serán tratados para atender su consulta.
                  </label>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl font-semibold transition-colors shadow-lg w-full sm:w-auto justify-center"
                >
                  <Send className="w-5 h-5" />
                  Enviar Solicitud
                </button>
              </form>
            </div>

            {/* Contact info sidebar */}
            <div className="lg:col-span-2">
              <div className="sticky top-28 space-y-6">
                {/* Headquarters */}
                <div className="bg-slate-50 rounded-2xl p-6">
                  <h3 className="font-heading font-bold text-primary-800 mb-4">
                    {company.contact.headquarters.name}
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-accent-500 mt-0.5 shrink-0" />
                      <div className="text-sm text-slate-600">
                        {company.contact.headquarters.address}
                        <br />
                        {company.contact.headquarters.postalCode}{" "}
                        {company.contact.headquarters.city}
                      </div>
                    </div>
                    <a
                      href={`tel:${company.contact.headquarters.phone.replace(/\s/g, "")}`}
                      className="flex items-center gap-3 text-sm text-slate-600 hover:text-primary-600 transition-colors"
                    >
                      <Phone className="w-5 h-5 text-accent-500 shrink-0" />
                      {company.contact.headquarters.phone}
                    </a>
                    <a
                      href={`mailto:${company.contact.headquarters.email}`}
                      className="flex items-center gap-3 text-sm text-slate-600 hover:text-primary-600 transition-colors"
                    >
                      <Mail className="w-5 h-5 text-accent-500 shrink-0" />
                      {company.contact.headquarters.email}
                    </a>
                  </div>
                </div>

                {/* Office */}
                <div className="bg-slate-50 rounded-2xl p-6">
                  <h3 className="font-heading font-bold text-primary-800 mb-4">
                    {company.contact.office.name}
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-accent-500 mt-0.5 shrink-0" />
                      <div className="text-sm text-slate-600">
                        {company.contact.office.address}
                        <br />
                        {company.contact.office.postalCode}{" "}
                        {company.contact.office.city}
                      </div>
                    </div>
                    <a
                      href={`tel:${company.contact.office.phone.replace(/\s/g, "")}`}
                      className="flex items-center gap-3 text-sm text-slate-600 hover:text-primary-600 transition-colors"
                    >
                      <Phone className="w-5 h-5 text-accent-500 shrink-0" />
                      {company.contact.office.phone}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="bg-primary-50 rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-5 h-5 text-primary-600" />
                    <h3 className="font-heading font-bold text-primary-800">
                      Horario
                    </h3>
                  </div>
                  <div className="space-y-2 text-sm text-slate-600">
                    <div className="flex justify-between">
                      <span>Lunes - Viernes</span>
                      <span className="font-medium text-primary-800">08:00 — 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sábado - Domingo</span>
                      <span className="font-medium text-slate-500">Cerrado</span>
                    </div>
                  </div>
                </div>

                {/* Quick call */}
                <div className="bg-accent-500 rounded-2xl p-6 text-white">
                  <h3 className="font-heading font-bold text-lg mb-2">
                    ¿Prefiere llamar?
                  </h3>
                  <p className="text-accent-100 text-sm mb-4">
                    Atendemos su consulta de forma inmediata.
                  </p>
                  <a
                    href="tel:927260108"
                    className="flex items-center gap-2 text-white font-bold text-xl"
                  >
                    <Phone className="w-6 h-6" />
                    927 26 01 08
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-slate-100 h-96 flex items-center justify-center">
        <div className="text-center">
          <MapPin className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <p className="text-slate-400">
            Mapa de ubicación — Av. Hernán Cortés, 9 — Cáceres
          </p>
          <p className="text-xs text-slate-400 mt-1">
            (Integrar Google Maps iframe aquí)
          </p>
        </div>
      </section>
    </>
  );
}
