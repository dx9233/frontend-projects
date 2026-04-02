import CheckoutSection from "@/components/CheckoutSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Game Store | Checkout",
};

export default function CheckoutPage() {
  return (
    <main>
      <CheckoutSection />
    </main>
  );
}
