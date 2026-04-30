"use client";

import { useState } from "react";
import { Plus, Check } from "lucide-react";
import { useCart } from "../cart-context";

interface Props {
  slug: string;
  name: string;
  price: number;
  weight: string;
  disabled?: boolean;
  disabledLabel?: string;
}

export default function AddToCartButton({
  slug,
  name,
  price,
  weight,
  disabled,
  disabledLabel,
}: Props) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  if (disabled) {
    return (
      <button
        type="button"
        disabled
        className="w-full inline-flex items-center justify-center gap-2 bg-slate-200 text-slate-500 cursor-not-allowed text-sm font-semibold px-4 py-2.5 rounded-xl"
      >
        {disabledLabel || "No disponible"}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={() => {
        addItem({ slug, name, price, weight });
        setAdded(true);
        setTimeout(() => setAdded(false), 1500);
      }}
      className={`w-full inline-flex items-center justify-center gap-2 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors ${
        added
          ? "bg-emerald-600 hover:bg-emerald-700"
          : "bg-accent-500 hover:bg-accent-600"
      }`}
    >
      {added ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
      {added ? "Añadido" : "Añadir al carrito"}
    </button>
  );
}
