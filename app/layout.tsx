import { ClarityInit } from "@/components/ClarityInit";
import { FloatingActions } from "@/components/FloatingActions";
import { Footer } from "@/components/Footer";
import { MouseGlow } from "@/components/MouseGlow";
import { Navbar } from "@/components/Navbar";
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const baseUrl = "https://denizgokbudak.com";
const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const organizationId = `${baseUrl}/#organization`;
const websiteId = `${baseUrl}/#website`;
const professionalServiceId = `${baseUrl}/#professional-service`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: "DG Digital",
      url: baseUrl,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo_seffaf.png`
      },
      image: `${baseUrl}/logo_seffaf.png`,
      email: "info@denizgokbudak.com",
      telephone: "+90 553 666 23 53",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Değirmenönü Mh. 1739 Sk. No:18 Daire:7",
        addressLocality: "Merkezefendi",
        addressRegion: "Denizli",
        addressCountry: "TR"
      },
      sameAs: [
        "https://www.linkedin.com/in/denizgokbudak/",
        "https://www.instagram.com/gokbudakdeniz",
        "https://www.facebook.com/deniz.gokbudak.1/",
        "https://github.com/hobaaaa"
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: "info@denizgokbudak.com",
          telephone: "+90 553 666 23 53",
          areaServed: "TR",
          availableLanguage: ["tr", "en"]
        }
      ]
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: baseUrl,
      name: "DG Digital",
      description:
        "Denizli'de kurumsal web tasarım, SEO, e-ticaret ve özel yazılım çözümleri sunan DG Digital ile işletmeniz için profesyonel dijital altyapı kurun.",
      publisher: {
        "@id": organizationId
      },
      inLanguage: "tr-TR"
    },
    {
      "@type": "ProfessionalService",
      "@id": professionalServiceId,
      name: "DG Digital",
      url: baseUrl,
      image: `${baseUrl}/logo_seffaf.png`,
      description:
        "Denizli web tasarım, SEO, e-ticaret ve özel yazılım çözümleri sunan dijital üretim partneri.",
      provider: {
        "@id": organizationId
      },
      areaServed: {
        "@type": "Country",
        name: "Turkey"
      },
      availableLanguage: ["tr", "en"],
      serviceType: [
        "Web Tasarım",
        "Web Geliştirme",
        "SEO",
        "E-Ticaret Sistemleri",
        "Özel Yazılım",
        "SaaS Arayüz Geliştirme"
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Değirmenönü Mh. 1739 Sk. No:18 Daire:7",
        addressLocality: "Merkezefendi",
        addressRegion: "Denizli",
        addressCountry: "TR"
      },
      email: "info@denizgokbudak.com",
      telephone: "+90 553 666 23 53"
    }
  ]
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  applicationName: "DG Digital",
  title: {
    default: "Denizli Web Tasarım & Denizli Yazılım | DG Digital",
    template: "%s | DG Digital"
  },
  description:
    "Denizli'de kurumsal web tasarım, SEO, e-ticaret ve özel yazılım çözümleri sunan DG Digital ile işletmeniz için profesyonel dijital altyapı kurun.",
  keywords: [
    "denizli web tasarım",
    "denizli yazılım",
    "denizli web tasarım ajansı",
    "web tasarım",
    "web geliştirme",
    "denizli seo",
    "seo",
    "e-ticaret sistemi",
    "özel yazılım",
    "kurumsal web sitesi",
    "dg digital"
  ],
  openGraph: {
    title: "Denizli Web Tasarım & Denizli Yazılım | DG Digital",
    description:
      "Denizli'de kurumsal web tasarım, SEO, e-ticaret ve özel yazılım çözümleri sunan DG Digital ile işletmeniz için profesyonel dijital altyapı kurun.",
    url: baseUrl,
    siteName: "DG Digital",
    locale: "tr_TR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Denizli Web Tasarım & Denizli Yazılım | DG Digital",
    description:
      "Denizli'de kurumsal web tasarım, SEO, e-ticaret ve özel yazılım çözümleri sunan DG Digital ile işletmeniz için profesyonel dijital altyapı kurun."
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
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico"
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
        <ClarityInit />
        {gaMeasurementId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaMeasurementId}');
              `}
            </Script>
          </>
        ) : null}
        <MouseGlow />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Navbar />
        <main className="relative z-10 overflow-hidden pt-[6.4rem] md:pt-[6.9rem]">
          {children}
        </main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
