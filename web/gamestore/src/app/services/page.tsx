import FeatureSection from "@/components/FeatureSection";
import OurServices from "@/components/OurServices";
import ProductsSection from "@/components/ProductsSection";
import Promo from "@/components/Promo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Game Store | Services",
};

export default function ServicesPage() {
  return (
    <main>
      <OurServices />
      <FeatureSection />
      <ProductsSection />
      <Promo />
    </main>
  );
}
