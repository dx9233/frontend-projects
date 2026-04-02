import ErrorSection from "@/components/ErrorSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Game Store | 404",
};

export default function ErrorPage() {
  return (
    <main>
      <ErrorSection />
    </main>
  );
}
