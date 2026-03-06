import NewsSection from "@/components/NewsSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Game Store | News",
};

export default function NewsPage() {
  return (
    <main>
      <NewsSection />
    </main>
  );
}
