"use client";

import Link from "next/link";
import { ShoppingCart, ArrowRight } from "lucide-react";
import { useCart } from "../cart-context";

export default function CartIndicator() {
  const { count, total, hydrated } = useCart();
  if (!hydrated || count === 0) return null;
  return (
    <Link
      href="/tienda/checkout/"
      className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-3 bg-primary-800 hover:bg-primary-900 text-white pl-4 pr-5 py-3 rounded-full shadow-2xl shadow-primary-900/30 transition-all hover:-translate-y-0.5"
    >
      <div className="relative">
        <ShoppingCart className="w-5 h-5" />
        <span className="absolute -top-2 -right-2 bg-accent-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
          {count}
        </span>
      </div>
      <span className="text-sm font-semibold">
        {total.toFixed(2).replace(".", ",")} €
      </span>
      <span className="text-xs text-slate-300 hidden sm:inline-flex items-center gap-1">
        Tramitar
        <ArrowRight className="w-3 h-3" />
      </span>
    </Link>
  );
}
