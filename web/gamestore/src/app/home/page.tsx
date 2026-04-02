import FeaturedGames from "@/components/FeaturedGames";
import GameStrip from "@/components/GameStrip";
import Hero from "@/components/Hero";
import NewsSection from "@/components/NewsSection";
import Partners from "@/components/Partners";
import Promo from "@/components/Promo";
import Subscribe from "@/components/Subscribe";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Game Store | Home",
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Partners />
      <GameStrip />
      <NewsSection />
      <Subscribe />
      <FeaturedGames />
      <Promo />
    </main>
  );
}
