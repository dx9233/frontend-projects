import FAQSection from "@/components/FAQSection";
import SupportHero from "@/components/SupportHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Game Store | Support",
};

export default function SupportPage() {
  return (
    <main>
      <SupportHero />
      <FAQSection />
    </main>
  );
}
