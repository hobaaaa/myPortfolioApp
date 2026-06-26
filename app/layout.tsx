import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://dgdigital.studio"),
  title: {
    default: "DG Digital Studio | Premium Web Tasarımı ve Dijital Deneyim",
    template: "%s | DG Digital"
  },
  description:
    "DG Digital Studio, markalar için premium görsel dil, dönüşüm odaklı içerik akışı ve profesyonel web deneyimleri tasarlar.",
  keywords: [
    "DG Digital",
    "web tasarım",
    "premium web tasarımı",
    "kurumsal web sitesi",
    "landing page",
    "e-ticaret",
    "boutique web studio"
  ],
  openGraph: {
    title: "DG Digital Studio",
    description:
      "Profesyonel görünen değil, profesyonel hissettiren web deneyimleri.",
    url: "https://dgdigital.studio",
    siteName: "DG Digital Studio",
    locale: "tr_TR",
    type: "website"
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="min-h-screen">
        <Navbar />
        <main className="overflow-hidden pt-32 md:pt-36">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
