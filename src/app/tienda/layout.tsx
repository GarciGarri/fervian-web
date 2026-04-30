import { CartProvider } from "./cart-context";
import CartIndicator from "./components/CartIndicator";

export default function TiendaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CartProvider>
      {children}
      <CartIndicator />
    </CartProvider>
  );
}
