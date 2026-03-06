import CatalogSection from "@/components/CatalogSection";
import Promo from "@/components/Promo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Game Store | Store",
};

export default function StorePage() {
  return (
    <main>
      <CatalogSection />
      <Promo />
    </main>
  );
}
