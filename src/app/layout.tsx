import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { UtilityBar } from "@/components/layout/utility-bar";
import { SITE } from "@/lib/data";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: {
    default: "PPID Kota Parepare - Pejabat Pengelola Informasi dan Dokumentasi",
    template: "%s | PPID Kota Parepare",
  },
  description: SITE.deskripsi,
  applicationName: "Portal PPID Kota Parepare",
  keywords: [
    "PPID Parepare",
    "keterbukaan informasi publik",
    "UU KIP 14 2008",
    "DIP Parepare",
    "permohonan informasi",
    "Diskominfo Parepare",
  ],
  authors: [{ name: "Dinas Komunikasi dan Informatika Kota Parepare" }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "PPID Kota Parepare",
    title: "PPID Kota Parepare - Pejabat Pengelola Informasi dan Dokumentasi",
    description: SITE.deskripsi,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#00652c",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${jakarta.variable} antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-surface font-body text-body-md text-on-surface antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-on-primary focus:rounded-xl focus:shadow-md focus:outline-none focus:ring-2 focus:ring-secondary"
        >
          Loncat ke Konten Utama
        </a>

        <UtilityBar />
        <SiteHeader />

        <main
          id="main-content"
          className="w-full pt-20 bg-surface flex-1 min-h-[calc(100vh-120px)]"
        >
          {children}
        </main>

        <SiteFooter />
      </body>
    </html>
  );
}
