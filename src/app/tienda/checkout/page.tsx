"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  CreditCard,
  Info,
  Lock,
  Minus,
  Package,
  Plus,
  ShieldCheck,
  ShoppingCart,
  Trash2,
} from "lucide-react";
import { useCart } from "../cart-context";

type Step = "cart" | "payment" | "success";

interface CheckoutForm {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postal: string;
  cardName: string;
  cardNumber: string;
  expiry: string;
  cvv: string;
}

const initialForm: CheckoutForm = {
  name: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  postal: "",
  cardName: "",
  cardNumber: "",
  expiry: "",
  cvv: "",
};

const SHIPPING = 25;
const VAT_RATE = 0.21;

function formatPrice(value: number) {
  return value.toFixed(2).replace(".", ",") + " €";
}

function formatCardNumber(raw: string) {
  return raw
    .replace(/\D/g, "")
    .slice(0, 16)
    .replace(/(.{4})/g, "$1 ")
    .trim();
}

function formatExpiry(raw: string) {
  const digits = raw.replace(/\D/g, "").slice(0, 4);
  if (digits.length < 3) return digits;
  return `${digits.slice(0, 2)}/${digits.slice(2)}`;
}

export default function CheckoutPage() {
  const { items, total, removeItem, updateQty, clear } = useCart();
  const [step, setStep] = useState<Step>("cart");
  const [form, setForm] = useState<CheckoutForm>(initialForm);
  const [processing, setProcessing] = useState(false);
  const [orderId, setOrderId] = useState<string>("");

  const subtotal = total;
  const shipping = items.length === 0 ? 0 : SHIPPING;
  const vat = (subtotal + shipping) * VAT_RATE;
  const grandTotal = subtotal + shipping + vat;

  const update = (key: keyof CheckoutForm, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handlePayment = (e: FormEvent) => {
    e.preventDefault();
    setProcessing(true);
    setTimeout(() => {
      const id =
        "FRV-" +
        Date.now().toString(36).toUpperCase() +
        Math.floor(Math.random() * 100)
          .toString()
          .padStart(2, "0");
      setOrderId(id);
      setProcessing(false);
      setStep("success");
      clear();
    }, 1800);
  };

  return (
    <>
      {/* Demo banner */}
      <div className="bg-amber-50 border-b border-amber-200">
        <div className="container-custom px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-center gap-2 text-amber-800 text-sm text-center">
          <Info className="w-4 h-4 shrink-0" />
          <span>
            <strong>Pasarela de pago demo</strong> — no se procesa ningún cobro real. No introduzca datos de tarjeta auténticos.
          </span>
        </div>
      </div>

      {/* Header */}
      <section className="hero-gradient py-12 lg:py-16">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-5">
            <Link href="/" className="hover:text-white transition-colors">
              Inicio
            </Link>
            <span>/</span>
            <Link href="/tienda/" className="hover:text-white transition-colors">
              Tienda
            </Link>
            <span>/</span>
            <span className="text-accent-400">
              {step === "cart"
                ? "Carrito"
                : step === "payment"
                  ? "Pago"
                  : "Confirmación"}
            </span>
          </nav>
          <div className="flex items-center gap-4">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 text-white rounded-2xl backdrop-blur-sm">
              {step === "success" ? (
                <CheckCircle2 className="w-6 h-6" />
              ) : step === "payment" ? (
                <CreditCard className="w-6 h-6" />
              ) : (
                <ShoppingCart className="w-6 h-6" />
              )}
            </div>
            <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              {step === "cart" && "Tu carrito"}
              {step === "payment" && "Datos y pago"}
              {step === "success" && "Pedido confirmado"}
            </h1>
          </div>

          {/* Steps */}
          {step !== "success" && (
            <div className="flex items-center gap-2 sm:gap-4 mt-6 text-sm">
              {[
                { id: "cart", label: "1. Carrito" },
                { id: "payment", label: "2. Pago" },
                { id: "success", label: "3. Confirmación" },
              ].map((s, idx) => {
                const active = s.id === step;
                const done = step === "payment" && s.id === "cart";
                return (
                  <div key={s.id} className="flex items-center gap-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        active
                          ? "bg-accent-500 text-white"
                          : done
                            ? "bg-emerald-500/20 text-emerald-300"
                            : "bg-white/10 text-slate-400"
                      }`}
                    >
                      {s.label}
                    </span>
                    {idx < 2 && <span className="text-slate-500">›</span>}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <section className="section-padding bg-slate-50 min-h-[60vh]">
        <div className="container-custom">
          {/* Empty cart */}
          {step === "cart" && items.length === 0 && (
            <div className="bg-white rounded-2xl border border-slate-200 p-10 text-center max-w-xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 text-slate-400 rounded-2xl mb-4">
                <ShoppingCart className="w-8 h-8" />
              </div>
              <h2 className="font-heading text-xl font-bold text-primary-800 mb-2">
                Tu carrito está vacío
              </h2>
              <p className="text-sm text-slate-500 mb-6">
                Vuelve a la tienda para añadir cementos a tu pedido.
              </p>
              <Link
                href="/tienda/"
                className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Volver a la tienda
              </Link>
            </div>
          )}

          {/* Cart step */}
          {step === "cart" && items.length > 0 && (
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-3">
                {items.map((item) => (
                  <div
                    key={item.slug}
                    className="bg-white rounded-2xl border border-slate-200 p-4 flex items-center gap-4"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center shrink-0">
                      <Package className="w-8 h-8 text-slate-400" strokeWidth={1.25} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-heading font-semibold text-primary-800 text-sm leading-snug mb-1 truncate">
                        {item.name}
                      </div>
                      <div className="text-xs text-slate-500">{item.weight}</div>
                    </div>
                    <div className="flex items-center gap-1 bg-slate-50 rounded-lg p-1">
                      <button
                        type="button"
                        onClick={() => updateQty(item.slug, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center text-slate-600 hover:bg-white rounded transition-colors"
                        aria-label="Reducir cantidad"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-7 text-center text-sm font-semibold text-primary-800">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQty(item.slug, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center text-slate-600 hover:bg-white rounded transition-colors"
                        aria-label="Aumentar cantidad"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <div className="text-right hidden sm:block min-w-[80px]">
                      <div className="font-heading font-bold text-primary-800">
                        {formatPrice(item.price * item.quantity)}
                      </div>
                      <div className="text-xs text-slate-500">
                        {formatPrice(item.price)} / ud
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.slug)}
                      className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors shrink-0"
                      aria-label="Eliminar"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}

                <Link
                  href="/tienda/"
                  className="inline-flex items-center gap-2 text-sm text-primary-600 hover:text-primary-800 font-medium pt-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Seguir comprando
                </Link>
              </div>

              <OrderSummary
                subtotal={subtotal}
                shipping={shipping}
                vat={vat}
                total={grandTotal}
                cta="Continuar al pago"
                onCta={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setStep("payment");
                }}
              />
            </div>
          )}

          {/* Payment step */}
          {step === "payment" && (
            <form onSubmit={handlePayment} className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                {/* Customer */}
                <fieldset className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
                  <legend className="font-heading font-bold text-primary-800 text-base px-2">
                    Datos de envío
                  </legend>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field
                      label="Nombre y apellidos"
                      value={form.name}
                      onChange={(v) => update("name", v)}
                      required
                      autoComplete="name"
                    />
                    <Field
                      label="Email"
                      type="email"
                      value={form.email}
                      onChange={(v) => update("email", v)}
                      required
                      autoComplete="email"
                    />
                    <Field
                      label="Teléfono"
                      value={form.phone}
                      onChange={(v) => update("phone", v)}
                      required
                      autoComplete="tel"
                    />
                    <Field
                      label="Código postal"
                      value={form.postal}
                      onChange={(v) => update("postal", v)}
                      required
                      autoComplete="postal-code"
                      pattern="\d{5}"
                    />
                    <Field
                      label="Dirección de obra / entrega"
                      value={form.address}
                      onChange={(v) => update("address", v)}
                      required
                      autoComplete="street-address"
                      className="sm:col-span-2"
                    />
                    <Field
                      label="Localidad"
                      value={form.city}
                      onChange={(v) => update("city", v)}
                      required
                      autoComplete="address-level2"
                      className="sm:col-span-2"
                    />
                  </div>
                </fieldset>

                {/* Payment */}
                <fieldset className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
                  <legend className="font-heading font-bold text-primary-800 text-base px-2 flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-accent-500" />
                    Método de pago
                  </legend>
                  <div className="bg-slate-900 rounded-2xl p-5 text-white relative overflow-hidden">
                    <div className="absolute -right-10 -top-10 w-40 h-40 bg-accent-500/30 rounded-full blur-3xl" />
                    <div className="absolute -left-6 -bottom-6 w-32 h-32 bg-primary-500/40 rounded-full blur-3xl" />
                    <div className="relative">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-slate-300">
                          <Lock className="w-3.5 h-3.5" />
                          Pago seguro · DEMO
                        </div>
                        <div className="flex gap-1.5">
                          <span className="bg-white/10 text-[10px] font-bold px-2 py-0.5 rounded">
                            VISA
                          </span>
                          <span className="bg-white/10 text-[10px] font-bold px-2 py-0.5 rounded">
                            MC
                          </span>
                        </div>
                      </div>
                      <div className="font-mono text-lg tracking-[0.2em] mb-1">
                        {form.cardNumber || "•••• •••• •••• ••••"}
                      </div>
                      <div className="flex justify-between items-end mt-4 text-xs">
                        <div>
                          <div className="text-slate-400 uppercase tracking-wider">
                            Titular
                          </div>
                          <div className="font-semibold uppercase">
                            {form.cardName || "NOMBRE TITULAR"}
                          </div>
                        </div>
                        <div>
                          <div className="text-slate-400 uppercase tracking-wider">
                            Caducidad
                          </div>
                          <div className="font-semibold">
                            {form.expiry || "MM/AA"}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field
                      label="Titular de la tarjeta"
                      value={form.cardName}
                      onChange={(v) => update("cardName", v)}
                      required
                      autoComplete="cc-name"
                      className="sm:col-span-2"
                    />
                    <Field
                      label="Número de tarjeta (demo)"
                      value={form.cardNumber}
                      onChange={(v) => update("cardNumber", formatCardNumber(v))}
                      required
                      placeholder="4242 4242 4242 4242"
                      inputMode="numeric"
                      autoComplete="off"
                      className="sm:col-span-2"
                    />
                    <Field
                      label="Caducidad"
                      value={form.expiry}
                      onChange={(v) => update("expiry", formatExpiry(v))}
                      required
                      placeholder="MM/AA"
                      inputMode="numeric"
                      autoComplete="off"
                    />
                    <Field
                      label="CVV"
                      value={form.cvv}
                      onChange={(v) =>
                        update("cvv", v.replace(/\D/g, "").slice(0, 4))
                      }
                      required
                      placeholder="123"
                      inputMode="numeric"
                      autoComplete="off"
                    />
                  </div>

                  <div className="flex items-start gap-2 text-xs text-amber-800 bg-amber-50 border border-amber-200 rounded-lg p-3">
                    <Info className="w-4 h-4 shrink-0 mt-0.5" />
                    <div>
                      Esta es una <strong>demo</strong>. No introduzca tarjetas reales — el formulario no procesa pagos. Use cualquier secuencia de 16 dígitos para simular el flujo.
                    </div>
                  </div>
                </fieldset>

                <button
                  type="button"
                  onClick={() => setStep("cart")}
                  className="inline-flex items-center gap-2 text-sm text-primary-600 hover:text-primary-800 font-medium"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Volver al carrito
                </button>
              </div>

              <OrderSummary
                subtotal={subtotal}
                shipping={shipping}
                vat={vat}
                total={grandTotal}
                cta={
                  processing ? "Procesando…" : `Pagar ${formatPrice(grandTotal)}`
                }
                ctaIcon={<ShieldCheck className="w-5 h-5" />}
                disabled={processing}
                isSubmit
              />
            </form>
          )}

          {/* Success step */}
          {step === "success" && (
            <div className="bg-white rounded-2xl border border-slate-200 p-10 text-center max-w-xl mx-auto">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full mb-5">
                <CheckCircle2 className="w-12 h-12" strokeWidth={1.5} />
              </div>
              <h2 className="font-heading text-2xl font-bold text-primary-800 mb-2">
                ¡Pedido recibido!
              </h2>
              <p className="text-sm text-slate-500 mb-6">
                Tu pedido demo se ha registrado correctamente. Nos pondremos en contacto contigo para confirmar la entrega.
              </p>
              <div className="bg-slate-50 rounded-xl p-5 mb-6 text-left">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-500">Nº de pedido</span>
                  <span className="font-mono font-semibold text-primary-800">
                    {orderId}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Estado</span>
                  <span className="inline-flex items-center gap-1.5 text-emerald-700 font-semibold">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                    Confirmado
                  </span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/tienda/"
                  className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-colors"
                >
                  Volver a la tienda
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-primary-800 px-6 py-3 rounded-xl text-sm font-semibold transition-colors"
                >
                  Ir al inicio
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

interface SummaryProps {
  subtotal: number;
  shipping: number;
  vat: number;
  total: number;
  cta: string;
  ctaIcon?: React.ReactNode;
  onCta?: () => void;
  disabled?: boolean;
  isSubmit?: boolean;
}

function OrderSummary({
  subtotal,
  shipping,
  vat,
  total,
  cta,
  ctaIcon,
  onCta,
  disabled,
  isSubmit,
}: SummaryProps) {
  return (
    <aside className="lg:col-span-1">
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sticky top-24 space-y-4">
        <h3 className="font-heading font-bold text-primary-800 text-base">
          Resumen del pedido
        </h3>
        <dl className="space-y-2 text-sm">
          <div className="flex justify-between">
            <dt className="text-slate-500">Subtotal</dt>
            <dd className="font-medium text-primary-800">
              {formatPrice(subtotal)}
            </dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-slate-500">Transporte a obra</dt>
            <dd className="font-medium text-primary-800">
              {shipping === 0 ? "—" : formatPrice(shipping)}
            </dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-slate-500">IVA (21%)</dt>
            <dd className="font-medium text-primary-800">{formatPrice(vat)}</dd>
          </div>
          <div className="border-t border-slate-100 pt-3 flex justify-between items-end">
            <dt className="font-heading font-bold text-primary-800 text-base">
              Total
            </dt>
            <dd className="font-heading font-bold text-primary-800 text-2xl">
              {formatPrice(total)}
            </dd>
          </div>
        </dl>
        <button
          type={isSubmit ? "submit" : "button"}
          onClick={onCta}
          disabled={disabled}
          className="w-full inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 disabled:bg-accent-400 disabled:cursor-not-allowed text-white px-6 py-3.5 rounded-xl text-sm font-semibold transition-colors shadow-sm"
        >
          {ctaIcon}
          {cta}
        </button>
        <div className="flex items-center gap-2 text-xs text-slate-500 justify-center">
          <Lock className="w-3.5 h-3.5" />
          Conexión segura · Demo
        </div>
      </div>
    </aside>
  );
}

interface FieldProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
  pattern?: string;
  inputMode?: "text" | "numeric" | "email" | "tel";
  autoComplete?: string;
  className?: string;
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  required,
  pattern,
  inputMode,
  autoComplete,
  className,
}: FieldProps) {
  return (
    <label className={`block ${className || ""}`}>
      <span className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wider">
        {label}
        {required && <span className="text-accent-500 ml-1">*</span>}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        pattern={pattern}
        inputMode={inputMode}
        autoComplete={autoComplete}
        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-primary-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent-500/40 focus:border-accent-500 focus:bg-white transition-colors"
      />
    </label>
  );
}
