import CartSection from "@/components/CartSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Game Store | Cart",
};

export default function CartPage() {
  return (
    <main>
      <CartSection />
    </main>
  );
}
