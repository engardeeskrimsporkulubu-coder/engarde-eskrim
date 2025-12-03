import type { Metadata } from "next";
import { Inter, Cinzel_Decorative } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "latin-ext"] });
const cinzelDecorative = Cinzel_Decorative({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-cinzel-decorative",
});

export const metadata: Metadata = {
  title: "Engarde Eskrim - Modern Eskrim Eğitimi ve Spor Merkezi",
  description:
    "Profesyonel eskrim eğitimi, modern teknikler ve geleneksel değerlerin buluştuğu eskrim merkezi. Flöre, epe ve kılıç dallarında uzman eğitim.",
  keywords: [
    "eskrim",
    "fencing",
    "eskrim eğitimi",
    "eskrim kursu",
    "flöre",
    "epe",
    "kılıç",
    "eskrim sporu",
    "eskrim antrenmanı",
    "eskrim merkezi",
  ],
  authors: [{ name: "Engarde Eskrim" }],
  creator: "Engarde Eskrim",
  publisher: "Engarde Eskrim",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://engarde-eskrim.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Engarde Eskrim - Modern Eskrim Eğitimi ve Spor Merkezi",
    description:
      "Profesyonel eskrim eğitimi, modern teknikler ve geleneksel değerlerin buluştuğu eskrim merkezi.",
    url: "https://engarde-eskrim.com",
    siteName: "Engarde Eskrim",
    images: [
      {
        url: "/EngardeEskrim.png",
        width: 1200,
        height: 630,
        alt: "Engarde Eskrim",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engarde Eskrim - Modern Eskrim Eğitimi",
    description:
      "Profesyonel eskrim eğitimi, modern teknikler ve geleneksel değerlerin buluştuğu eskrim merkezi.",
    images: ["/EngardeEskrim.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/EngardeEskrim.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsActivityLocation",
              name: "Engarde Eskrim",
              description:
                "Profesyonel eskrim eğitimi, modern teknikler ve geleneksel değerlerin buluştuğu eskrim merkezi.",
              image: "/EngardeEskrim.png",
              address: {
                "@type": "PostalAddress",
                addressCountry: "TR",
              },
              sport: "Fencing",
              offers: {
                "@type": "Offer",
                category: "Sports Training",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} ${cinzelDecorative.variable}`}>{children}</body>
    </html>
  );
}

