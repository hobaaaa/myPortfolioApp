import { FloatingActions } from "@/components/FloatingActions";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import type { Metadata } from "next";
import "./globals.css";

const baseUrl = "https://denizgokbudak.com";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "DG Digital",
  url: baseUrl,
  image: `${baseUrl}/logo-dg.svg`,
  telephone: "+90 553 666 23 53",
  email: "info@denizgokbudak.com",
  areaServed: "TR",
  availableLanguage: ["tr", "en"],
  serviceType: [
    "Web Tasarım",
    "Web Geliştirme",
    "WordPress Web Sitesi",
    "Next.js Projeleri",
    "E-Ticaret Sistemleri",
    "SaaS Arayüz Geliştirme"
  ],
  sameAs: [
    "https://www.linkedin.com/in/denizgokbudak/",
    "https://www.instagram.com/gokbudakdeniz",
    "https://www.facebook.com/deniz.gokbudak.1/"
  ]
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "DG Digital | Web Tasarım, Yazılım ve E-Ticaret Çözümleri",
    template: "%s | DG Digital"
  },
  description:
    "WordPress ve Next.js ile kurumsal web siteleri, landing page, e-ticaret sistemleri ve SaaS arayüzleri geliştiren dijital üretim stüdyosu.",
  keywords: [
    "web tasarım",
    "web geliştirme",
    "wordpress web sitesi",
    "nextjs web sitesi",
    "e-ticaret sistemi",
    "landing page tasarımı",
    "randevu uygulaması",
    "saas arayüz geliştirme",
    "yerel web tasarım",
    "dg digital"
  ],
  openGraph: {
    title: "DG Digital",
    description:
      "Web tasarım, web geliştirme, e-ticaret ve SaaS arayüz çözümleri.",
    url: baseUrl,
    siteName: "DG Digital",
    locale: "tr_TR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "DG Digital",
    description:
      "WordPress ve Next.js ile modern web tasarım ve yazılım çözümleri."
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Navbar />
        <main className="overflow-hidden pt-20 md:pt-22">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
