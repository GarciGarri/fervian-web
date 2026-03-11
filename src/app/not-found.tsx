import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center section-padding">
      <div className="text-center max-w-md">
        <div className="font-heading text-8xl font-bold text-primary-100 mb-4">
          404
        </div>
        <h1 className="font-heading text-2xl font-bold text-primary-800 mb-3">
          Página no encontrada
        </h1>
        <p className="text-slate-600 mb-8">
          Lo sentimos, la página que busca no existe o ha sido movida.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-colors"
          >
            <Home className="w-4 h-4" />
            Ir al inicio
          </Link>
          <Link
            href="/contacto/"
            className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-6 py-3 rounded-xl text-sm font-semibold transition-colors"
          >
            Contactar
          </Link>
        </div>
      </div>
    </section>
  );
}
