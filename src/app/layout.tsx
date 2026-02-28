import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Juste à Rouler | Vous repartez, c'est tout.",
  description:
    "Juste à Rouler : votre tiers de confiance automobile. Dépôt-vente, label qualité, financement, assurance, entretien et vans aménagés. Vous repartez, c'est tout.",
  keywords: [
    "voiture occasion",
    "dépôt-vente automobile",
    "label qualité voiture",
    "financement auto",
    "van aménagé",
    "Juste à Rouler",
  ],
  openGraph: {
    title: "Juste à Rouler | Vous repartez, c'est tout.",
    description:
      "Votre tiers de confiance automobile. Dépôt-vente, label qualité, financement, assurance et vans aménagés.",
    type: "website",
    locale: "fr_FR",
    siteName: "Juste à Rouler",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={nunito.variable}>
      <body className="font-nunito antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
