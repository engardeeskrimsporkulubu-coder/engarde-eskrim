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
  metadataBase: new URL("https://engardeeskrim.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Engarde Eskrim - Modern Eskrim Eğitimi ve Spor Merkezi",
    description:
      "Profesyonel eskrim eğitimi, modern teknikler ve geleneksel değerlerin buluştuğu eskrim merkezi.",
                url: "https://engardeeskrim.com",
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
  icons: {
    icon: "/Engarde Logo.jpeg",
    apple: "/EngardeEskrim.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://engardeeskrim.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "Engarde Eskrim",
                alternateName: "Engarde Eskrim Spor Kulübü",
                url: "https://engardeeskrim.com",
                logo: {
                  "@type": "ImageObject",
                  url: "https://engardeeskrim.com/Engarde%20Logo.jpeg",
                  width: 512,
                  height: 512,
                },
                image: "https://engardeeskrim.com/Engarde%20Logo.jpeg",
                description:
                  "Profesyonel eskrim eğitimi, modern teknikler ve geleneksel değerlerin buluştuğu eskrim merkezi.",
                sameAs: [
                  "https://www.instagram.com/engarde.eskrim",
                  "https://www.facebook.com/engarde.eskrim",
                  "https://twitter.com/engarde_eskrim",
                  "https://www.youtube.com/@engardeeskrim",
                ],
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+90-533-391-6821",
                  contactType: "customer service",
                  email: "engardeeskrimsporkulubu@gmail.com",
                  availableLanguage: "Turkish",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "Engarde Eskrim",
                url: "https://engardeeskrim.com",
                description:
                  "Profesyonel eskrim eğitimi, modern teknikler ve geleneksel değerlerin buluştuğu eskrim merkezi.",
                publisher: {
                  "@type": "Organization",
                  name: "Engarde Eskrim",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://engardeeskrim.com/Engarde%20Logo.jpeg",
                  },
                },
                potentialAction: {
                  "@type": "SearchAction",
                  target: {
                    "@type": "EntryPoint",
                    urlTemplate: "https://engardeeskrim.com/?q={search_term_string}",
                  },
                  "query-input": "required name=search_term_string",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "@id": "https://engardeeskrim.com",
                name: "Engarde Eskrim",
                image: "https://engardeeskrim.com/EngardeEskrim.png",
                description:
                  "Profesyonel eskrim eğitimi, modern teknikler ve geleneksel değerlerin buluştuğu eskrim merkezi.",
                address: {
                  "@type": "PostalAddress",
                  addressCountry: "TR",
                  addressLocality: "İstanbul",
                },
                telephone: "+90-555-123-4567",
                email: "info@engarde-eskrim.com",
                priceRange: "$$",
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "09:00",
                  closes: "21:00",
                },
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "5",
                  reviewCount: "10",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "SportsActivityLocation",
                name: "Engarde Eskrim",
                description:
                  "Profesyonel eskrim eğitimi, modern teknikler ve geleneksel değerlerin buluştuğu eskrim merkezi.",
                image: "https://engardeeskrim.com/EngardeEskrim.png",
                address: {
                  "@type": "PostalAddress",
                  addressCountry: "TR",
                },
                sport: "Fencing",
                offers: {
                  "@type": "Offer",
                  category: "Sports Training",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Eskrime başlamak için yaş sınırı var mı?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Hayır, eskrime her yaşta başlanabilir. Çocuklar için özel programlarımız olduğu gibi, yetişkinler için de başlangıç seviyesi eğitimlerimiz mevcuttur.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Hangi eskrim dalını seçmeliyim?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Flöre, epe ve kılıç dallarının hepsini deneyebilirsiniz. Eğitmenlerimiz sizin ilgi alanınıza ve yeteneklerinize göre size en uygun dalı önerecektir.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Ekipmanları nereden temin edebilirim?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "İlk başlangıç için gerekli temel ekipmanları kulübümüzden kiralayabilirsiniz. İlerleyen dönemde kendi ekipmanlarınızı satın almanızı öneririz.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Haftada kaç gün antrenman yapılıyor?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Başlangıç seviyesi için haftada 2-3 gün yeterlidir. İlerleyen seviyelerde haftada 4-5 gün antrenman yapılabilir. Programınız size özel olarak düzenlenir.",
                    },
                  },
                ],
              },
            ]),
          }}
        />
      </head>
      <body className={`${inter.className} ${cinzelDecorative.variable}`}>{children}</body>
    </html>
  );
}

