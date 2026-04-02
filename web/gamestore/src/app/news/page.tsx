import FilterNews from "@/components/FilterNews";
import NewsPagination from "@/components/NewsPagination";
import NewsSection from "@/components/NewsSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Game Store | News",
};

export default function NewsPage() {
  return (
    <main>
      <FilterNews />
      <NewsSection />
      <NewsPagination />
    </main>
  );
}
