"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Empresa", href: "/empresa/" },
  {
    name: "Servicios",
    href: "/servicios/",
    children: [
      { name: "Carreteras y Obras Lineales", href: "/servicios/obras-lineales-carreteras/" },
      { name: "Urbanizaciones", href: "/servicios/urbanizaciones-pavimentaciones/" },
      { name: "Abastecimiento y Saneamiento", href: "/servicios/abastecimiento-saneamiento/" },
      { name: "Estructuras de Obra Civil", href: "/servicios/estructuras-obra-civil/" },
      { name: "Edificación", href: "/servicios/edificacion/" },
      { name: "Depuradoras ETAP/EDAR", href: "/servicios/depuradoras/" },
      { name: "Defensa de Cauces", href: "/servicios/defensa-margenes-cauces/" },
      { name: "Conservación de Carreteras", href: "/servicios/conservacion-carreteras/" },
      { name: "Suministro de Áridos", href: "/servicios/suministro-aridos/" },
    ],
  },
  { name: "Proyectos", href: "/proyectos/" },
  { name: "Grupo", href: "/grupo/" },
  { name: "Contacto", href: "/contacto/" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary-900 text-white text-sm hidden md:block">
        <div className="container-custom flex justify-between items-center py-2 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6">
            <a
              href="tel:927260108"
              className="flex items-center gap-2 hover:text-accent-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              927 26 01 08
            </a>
            <a
              href="mailto:fervianviasyaridossl@gmail.com"
              className="flex items-center gap-2 hover:text-accent-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              fervianviasyaridossl@gmail.com
            </a>
          </div>
          <div className="text-slate-400">
            Av. Hernán Cortés, 9 — 10004 Cáceres
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-slate-100">
        <div className="container-custom flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-600 rounded-lg flex items-center justify-center text-white font-heading font-bold text-lg sm:text-xl group-hover:bg-primary-700 transition-colors">
              F
            </div>
            <div className="hidden sm:block">
              <div className="font-heading font-bold text-primary-800 text-lg leading-tight">
                FERVIAN
              </div>
              <div className="text-xs text-slate-500 leading-tight">
                Vías y Áridos
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) =>
              item.children ? (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-700 hover:text-primary-600 transition-colors rounded-md"
                  >
                    {item.name}
                    <ChevronDown className="w-4 h-4" />
                  </Link>
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-white rounded-xl shadow-xl border border-slate-100 py-2 min-w-[280px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-slate-600 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-primary-600 transition-colors rounded-md"
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contacto/"
              className="hidden sm:inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4" />
              Presupuesto
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Menú"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 border-t border-slate-100",
            mobileOpen ? "max-h-[600px]" : "max-h-0"
          )}
        >
          <div className="bg-white px-4 py-4 space-y-1">
            {navigation.map((item) =>
              item.children ? (
                <div key={item.name}>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
                  >
                    {item.name}
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform",
                        servicesOpen && "rotate-180"
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-200 pl-4",
                      servicesOpen ? "max-h-[500px]" : "max-h-0"
                    )}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-4 py-2 text-sm text-slate-600 hover:text-primary-600"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
                >
                  {item.name}
                </Link>
              )
            )}
            <div className="pt-2 border-t border-slate-100">
              <a
                href="tel:927260108"
                className="flex items-center gap-2 px-4 py-3 text-sm text-primary-600 font-medium"
              >
                <Phone className="w-4 h-4" />
                927 26 01 08
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
