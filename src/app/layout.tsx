import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { OrganizationJsonLd, LocalBusinessJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fervian.es"),
  title: {
    default: "Fervian — Construcción y Obra Pública en Cáceres | Grupo Fervian",
    template: "%s | Fervian — Construcción en Cáceres",
  },
  description:
    "Empresa de construcción y obra pública en Cáceres y Extremadura. Carreteras, urbanizaciones, saneamiento, áridos y maquinaria. Más de 20 años de experiencia. Solicite presupuesto.",
  keywords: [
    "construcción Cáceres",
    "obra pública Extremadura",
    "constructora Cáceres",
    "carreteras Extremadura",
    "urbanizaciones Cáceres",
    "áridos Cáceres",
    "hormigón Cáceres",
    "saneamiento Extremadura",
    "Fervian",
    "constructora Extremadura",
    "alquiler maquinaria Cáceres",
  ],
  authors: [{ name: "Fervian Vías y Áridos S.L." }],
  creator: "Fervian Vías y Áridos S.L.",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://www.fervian.es",
    siteName: "Grupo Fervian",
    title: "Fervian — Construcción y Obra Pública en Cáceres y Extremadura",
    description:
      "Empresa de construcción y obra pública en Cáceres. Carreteras, urbanizaciones, saneamiento, áridos y maquinaria. +20 años de experiencia.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fervian — Construcción y Obra Pública en Cáceres",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fervian — Construcción y Obra Pública en Cáceres",
    description:
      "Empresa de construcción y obra pública en Cáceres y Extremadura. +20 años de experiencia.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.fervian.es",
  },
  verification: {
    google: "",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col">
        <OrganizationJsonLd />
        <LocalBusinessJsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
