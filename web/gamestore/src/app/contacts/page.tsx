import ContactsSection from "@/components/ContactsSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Game Store | Contacts",
};

export default function ContactPage() {
  return (
    <main>
      <ContactsSection />
    </main>
  );
}
